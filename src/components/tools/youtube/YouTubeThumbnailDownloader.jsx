'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  DownloadIcon, 
  LinkIcon,
  WandIcon,
  RefreshCwIcon,
  LoaderIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  ImageIcon,
  ExternalLinkIcon,
  CopyIcon
} from 'lucide-react';
import { toast } from 'sonner';
import { extractYouTubeVideoId, getYouTubeVideoMetadata, generateThumbnailUrls } from '@/lib/youtube-actions';

export default function YouTubeThumbnailDownloader() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [error, setError] = useState('');

  // Sample data
  const sampleUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  const loadSampleData = () => {
    setYoutubeUrl(sampleUrl);
    toast.success('Sample URL loaded!');
  };

  const clearForm = () => {
    setYoutubeUrl('');
    setVideoData(null);
    setThumbnails([]);
    setError('');
    toast.success('Form cleared!');
  };

  const processThumbnails = async () => {
    if (!youtubeUrl) {
      toast.error('Please enter a YouTube URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setVideoData(null);
    setThumbnails([]);

    try {
      // Extract video ID
      const videoIdResult = await extractYouTubeVideoId(youtubeUrl);
      if (videoIdResult.error) {
        throw new Error(videoIdResult.error);
      }

      const videoId = videoIdResult.videoId;

      // Get video metadata and thumbnails in parallel
      const [metadataResult, thumbnailResult] = await Promise.all([
        getYouTubeVideoMetadata(videoId),
        generateThumbnailUrls(videoId)
      ]);

      // Set video data (even if metadata fails, we can still show thumbnails)
      if (metadataResult.success) {
        setVideoData(metadataResult);
      } else {
        setVideoData({
          title: 'YouTube Video',
          channelName: 'Unknown Channel',
          channelUrl: '',
          videoId: videoId
        });
      }

      // Set thumbnails
      if (thumbnailResult.success) {
        setThumbnails(thumbnailResult.thumbnails);
        toast.success('Thumbnails extracted successfully!');
      } else {
        throw new Error(thumbnailResult.error);
      }

    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadThumbnail = async (thumbnail) => {
    try {
      const response = await fetch(thumbnail.url);
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `youtube-thumbnail-${videoData?.videoId || 'unknown'}-${thumbnail.quality}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success(`Downloaded ${thumbnail.name}`);
    } catch (error) {
      toast.error('Failed to download thumbnail');
    }
  };

  const downloadAllThumbnails = async () => {
    if (thumbnails.length === 0) return;
    
    for (const thumbnail of thumbnails) {
      await downloadThumbnail(thumbnail);
      // Small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    toast.success('All thumbnails downloaded!');
  };

  const copyThumbnailUrl = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Thumbnail URL copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy URL');
    }
  };

  const openThumbnail = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">YouTube Thumbnail Downloader</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download YouTube video thumbnails in HD, FHD, and 4K quality. Extract thumbnail images from any YouTube video instantly and for free. The best YouTube thumbnail downloader online tool for content creators and marketers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="space-y-6">
            {/* URL Input */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LinkIcon className="h-5 w-5 mr-2" />
                  YouTube URL
                </CardTitle>
                <CardDescription>
                  Enter any YouTube video URL to extract thumbnails
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="youtube-url">Video URL</Label>
                  <Input
                    id="youtube-url"
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={loadSampleData}
                  >
                    <WandIcon className="h-4 w-4 mr-2" />
                    Load Sample
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearForm}
                  >
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Process Button */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {error && (
                    <div className="flex items-center p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                      <AlertCircleIcon className="h-5 w-5 text-destructive mr-2" />
                      <span className="text-sm text-destructive">{error}</span>
                    </div>
                  )}
                  <Button
                    onClick={processThumbnails}
                    disabled={isLoading}
                    className="w-full"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <LoaderIcon className="h-4 w-4 mr-2 animate-spin" />
                        Extracting Thumbnails...
                      </>
                    ) : (
                      <>
                        <ImageIcon className="h-4 w-4 mr-2" />
                        Extract Thumbnails
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* Video Info */}
            {videoData && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2 text-primary" />
                    Video Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-sm font-semibold">Title</Label>
                    <p className="text-sm text-muted-foreground">{videoData.title}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">Channel</Label>
                    <p className="text-sm text-muted-foreground">{videoData.channelName}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">Video ID</Label>
                    <p className="text-sm text-muted-foreground font-mono">{videoData.videoId}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Thumbnails */}
            {thumbnails.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <ImageIcon className="h-5 w-5 mr-2" />
                      Available Thumbnails
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={downloadAllThumbnails}
                    >
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download All
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    {thumbnails.length} thumbnail sizes available
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {thumbnails.map((thumbnail, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{thumbnail.name}</h4>
                          <p className="text-sm text-muted-foreground">{thumbnail.size}</p>
                        </div>
                        <Badge 
                          variant={thumbnail.quality === 'maxres' ? 'default' : 'secondary'}
                        >
                          {thumbnail.quality.toUpperCase()}
                        </Badge>
                      </div>
                      
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <img
                          src={thumbnail.url}
                          alt={`${thumbnail.name} thumbnail`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => downloadThumbnail(thumbnail)}
                        >
                          <DownloadIcon className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyThumbnailUrl(thumbnail.url)}
                        >
                          <CopyIcon className="h-4 w-4 mr-2" />
                          Copy URL
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openThumbnail(thumbnail.url)}
                        >
                          <ExternalLinkIcon className="h-4 w-4 mr-2" />
                          Open
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 space-y-12">
          {/* How to Use Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">How to Download YouTube Thumbnails</CardTitle>
                <CardDescription>
                  Extract YouTube video thumbnails in 3 simple steps with our thumbnail downloader
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                    <h3 className="font-semibold mb-2">Paste YouTube URL</h3>
                    <p className="text-sm text-muted-foreground">Copy any YouTube video URL from youtube.com, youtu.be, or m.youtube.com and paste it into our thumbnail grabber. Works with all video types and formats.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                    <h3 className="font-semibold mb-2">Extract Thumbnails</h3>
                    <p className="text-sm text-muted-foreground">Click extract to get all available thumbnail sizes from 120x90 to 1280x720 resolution. Our YouTube thumbnail download tool processes videos instantly.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                    <h3 className="font-semibold mb-2">Download & Use</h3>
                    <p className="text-sm text-muted-foreground">Download individual thumbnails or all at once. Use YouTube images for presentations, blogs, social media, or thumbnail design inspiration.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Advanced YouTube Thumbnail Features</CardTitle>
                <CardDescription>
                  Professional thumbnail extraction with multiple quality options and advanced tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">🖼️ Multiple Quality Options</h4>
                    <p className="text-sm text-muted-foreground">Get YouTube thumbnails in 5 different resolutions: Default (120x90), Medium (320x180), High (480x360), SD (640x480), and Max Resolution (1280x720). Download yt thumbnail in the highest quality available.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">⚡ Instant Downloads</h4>
                    <p className="text-sm text-muted-foreground">Download thumbnails instantly with no processing delays. Our YouTube thumbnail download tool provides direct download links for immediate access to YouTube images.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">📱 All URL Formats</h4>
                    <p className="text-sm text-muted-foreground">Works with all YouTube URL formats: youtube.com/watch, youtu.be, youtube.com/embed, m.youtube.com, and YouTube Shorts links. Universal YouTube video thumbnail download support.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🔗 Copy & Share URLs</h4>
                    <p className="text-sm text-muted-foreground">Copy direct thumbnail URLs to clipboard for easy sharing and embedding. Get thumbnail YouTube links for websites, blogs, or applications without downloading files.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🆓 Completely Free</h4>
                    <p className="text-sm text-muted-foreground">No registration, no limits, no watermarks. Download unlimited YouTube thumbnails for personal and commercial use. The best free YouTube thumbnail downloader available.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🛡️ Privacy Safe</h4>
                    <p className="text-sm text-muted-foreground">No data stored on our servers. All YouTube thumbnail processing happens in your browser for maximum privacy and security. Safe thumbnail grabber with no tracking.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Use Cases Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">YouTube Thumbnail Use Cases</CardTitle>
                <CardDescription>
                  Perfect for content creators, marketers, and designers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">🎨 Design Inspiration</h4>
                    <p className="text-sm text-muted-foreground">Analyze successful thumbnail designs for your own YouTube channel. Study color schemes, text placement, and visual elements.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">📊 Marketing Materials</h4>
                    <p className="text-sm text-muted-foreground">Use thumbnails in presentations, social media posts, or marketing campaigns to reference YouTube content.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">📝 Blog Content</h4>
                    <p className="text-sm text-muted-foreground">Embed YouTube thumbnails in blog posts, articles, or reviews to make content more engaging and visual.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🔬 Research & Analysis</h4>
                    <p className="text-sm text-muted-foreground">Collect thumbnails for competitor analysis, trend research, or academic studies on YouTube content strategies.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Why Choose Our YouTube Thumbnail Downloader */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Our YouTube Thumbnail Downloader?</CardTitle>
                <CardDescription>
                  The best YouTube downloader for thumbnails with advanced features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">🚀 Best YouTube Thumbnail Downloader Online</h4>
                    <p className="text-sm text-muted-foreground">Our YouTube thumbnail grabber is the fastest and most reliable tool available. Download YouTube thumbnails in seconds with no quality loss or watermarks.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">💎 Premium Quality Downloads</h4>
                    <p className="text-sm text-muted-foreground">Get YouTube images in the highest available resolution, including 4K thumbnails when available. Perfect for professional use and high-quality presentations.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">🔄 Bulk Thumbnail Download</h4>
                    <p className="text-sm text-muted-foreground">Download all YouTube thumbnail sizes at once with our bulk download feature. Save time when working with multiple video thumbnails.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">🌐 Universal YouTube URL Support</h4>
                    <p className="text-sm text-muted-foreground">Works with all YouTube video formats: regular videos, YouTube Shorts, live streams, and premieres. Compatible with youtube.com, youtu.be, and m.youtube.com links.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Alternative YouTube Tools */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">More YouTube Tools & Features</CardTitle>
                <CardDescription>
                  Complete YouTube toolkit for content creators and marketers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">📹 YouTube Video Downloader</h4>
                    <p className="text-sm text-muted-foreground">Download YouTube videos in HD, FHD, and 4K quality. Best YouTube downloader for PC and mobile devices with support for all video formats.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🎨 AI Thumbnail Maker</h4>
                    <p className="text-sm text-muted-foreground">Create YouTube thumbnails with our AI thumbnail generator. Free thumbnail maker with templates and advanced design tools for professional results.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">📝 YouTube Transcript Downloader</h4>
                    <p className="text-sm text-muted-foreground">Extract YouTube video transcripts and subtitles. Perfect for content analysis, research, and creating blog posts from YouTube videos.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🔗 YouTube Embed Generator</h4>
                    <p className="text-sm text-muted-foreground">Generate custom YouTube embed codes for websites and blogs. Control player settings and customize the appearance of embedded videos.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Common questions about YouTube thumbnail downloading
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">How to download YouTube thumbnails?</h4>
                  <p className="text-sm text-muted-foreground">Simply paste any YouTube video URL into our thumbnail downloader, click "Extract Thumbnails," and download the thumbnail images in your preferred quality. Our YouTube thumbnail grabber works with all video types.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">What's the best YouTube thumbnail downloader?</h4>
                  <p className="text-sm text-muted-foreground">Our YouTube thumbnail downloader online tool is the best choice because it's free, supports all thumbnail qualities, works with any YouTube URL format, and doesn't add watermarks to downloaded images.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Can I download YouTube thumbnails in HD?</h4>
                  <p className="text-sm text-muted-foreground">Yes! Our thumbnail downloader supports HD (720p), FHD (1080p), and even 4K thumbnail downloads when available. Get the highest quality YouTube images for professional use.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Is this YouTube thumbnail downloader free?</h4>
                  <p className="text-sm text-muted-foreground">Absolutely! Our YouTube thumbnail download tool is completely free with no registration required. Download unlimited thumbnails without any restrictions or watermarks.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Does it work with YouTube Shorts thumbnails?</h4>
                  <p className="text-sm text-muted-foreground">Yes, our YouTube thumbnail extractor works with all video types including YouTube Shorts, regular videos, live streams, and premieres. Get thumbnail images from any YouTube content.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Can I use downloaded thumbnails commercially?</h4>
                  <p className="text-sm text-muted-foreground">You can download the thumbnails, but usage rights depend on the original video's copyright. Always respect intellectual property rights and fair use guidelines when using YouTube thumbnails.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">What formats are YouTube thumbnails available in?</h4>
                  <p className="text-sm text-muted-foreground">YouTube thumbnails are typically available in JPG format. Our thumbnail downloader provides them in their original format with no conversion or quality loss.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">How to create YouTube thumbnails?</h4>
                  <p className="text-sm text-muted-foreground">While our tool downloads existing thumbnails, you can create custom YouTube thumbnails using our AI thumbnail maker or free thumbnail maker tools available on our platform.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Keywords Section for SEO */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Related YouTube Tools & Resources</CardTitle>
                <CardDescription>
                  Explore more YouTube downloader and thumbnail tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <p>
                    Our platform offers the best collection of YouTube tools including video downloaders, thumbnail makers, and content creation utilities. Whether you need a <strong>YouTube downloader for PC</strong>, <strong>YouTube downloader app</strong>, or <strong>online thumbnail maker</strong>, we have you covered.
                  </p>
                  <p>
                    Create professional YouTube thumbnails with our <strong>AI thumbnail generator free</strong> tool, or use our <strong>thumbnail maker AI</strong> for advanced design capabilities. Our <strong>free thumbnail maker</strong> includes templates and customization options perfect for content creators.
                  </p>
                  <p>
                    Looking for <strong>baixar thumbnail YouTube</strong> (Portuguese), <strong>descargar miniaturas de YouTube</strong> (Spanish), <strong>tải thumbnail YouTube</strong> (Vietnamese), or <strong>YouTube サムネ ダウンロード</strong> (Japanese)? Our international YouTube thumbnail downloader supports all languages and regions.
                  </p>
                  <p>
                    From basic <strong>YouTube pic</strong> downloads to professional <strong>video thumbnail</strong> extraction, our tools handle everything. Whether you're working with <strong>youtube.com</strong>, <strong>m.youtube.com</strong>, or <strong>youtu.be</strong> links, our thumbnail grabber delivers consistent results.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
