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
            Download YouTube video thumbnails in HD, FHD, and 4K quality. Extract thumbnail images from any YouTube video instantly and for free.
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
                    <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500" />
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
                  Extract YouTube video thumbnails in 3 simple steps
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                    <h3 className="font-semibold mb-2">Paste YouTube URL</h3>
                    <p className="text-sm text-muted-foreground">Copy any YouTube video URL and paste it into the input field. Works with all video types.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                    <h3 className="font-semibold mb-2">Extract Thumbnails</h3>
                    <p className="text-sm text-muted-foreground">Click extract to get all available thumbnail sizes from 120x90 to 1280x720 resolution.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                    <h3 className="font-semibold mb-2">Download & Use</h3>
                    <p className="text-sm text-muted-foreground">Download individual thumbnails or all at once. Use for presentations, blogs, or social media.</p>
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
                  Professional thumbnail extraction with multiple quality options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">🖼️ Multiple Quality Options</h4>
                    <p className="text-sm text-muted-foreground">Get thumbnails in 5 different resolutions: Default (120x90), Medium (320x180), High (480x360), SD (640x480), and Max Resolution (1280x720).</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">⚡ Instant Downloads</h4>
                    <p className="text-sm text-muted-foreground">Download thumbnails instantly with no processing delays. Direct download links for immediate access to images.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">📱 All URL Formats</h4>
                    <p className="text-sm text-muted-foreground">Works with all YouTube URL formats: youtube.com/watch, youtu.be, youtube.com/embed, and YouTube Shorts links.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🔗 Copy & Share URLs</h4>
                    <p className="text-sm text-muted-foreground">Copy direct thumbnail URLs to clipboard for easy sharing and embedding in websites or applications.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🆓 Completely Free</h4>
                    <p className="text-sm text-muted-foreground">No registration, no limits, no watermarks. Download unlimited YouTube thumbnails for personal and commercial use.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🛡️ Privacy Safe</h4>
                    <p className="text-sm text-muted-foreground">No data stored on our servers. All processing happens in your browser for maximum privacy and security.</p>
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
        </div>
      </div>
    </div>
  );
}
