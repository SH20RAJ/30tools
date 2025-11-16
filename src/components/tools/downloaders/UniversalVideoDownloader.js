'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import {
  Download,
  Link as LinkIcon,
  Loader2,
  AlertCircle,
  Music,
  Search,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Play,
  ExternalLink,
  CheckCircle2,
  Pause,
  AlertTriangle
} from 'lucide-react';
import { fetchVideoData } from '@/lib/video-download-actions';

export default function UniversalVideoDownloader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);

  // Function to detect the platform from the URL
  const detectPlatform = (url) => {
    if (url.includes('tiktok.com') || url.includes('vm.tiktok.com')) {
      return 'TikTok';
    } else if (url.includes('facebook.com') || url.includes('fb.watch')) {
      return 'Facebook';
    } else if (url.includes('instagram.com')) {
      return 'Instagram';
    } else if (url.includes('twitter.com') || url.includes('x.com') || url.includes('t.co')) {
      return 'Twitter/X';
    } else if (url.includes('vimeo.com')) {
      return 'Vimeo';
    } else if (url.includes('dailymotion.com')) {
      return 'Dailymotion';
    } else if (url.includes('reddit.com')) {
      return 'Reddit';
    } else if (url.includes('rumble.com')) {
      return 'Rumble';
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'YouTube';
    } else if (url.includes('pinterest.com')) {
      return 'Pinterest';
    } else if (url.includes('snapchat.com')) {
      return 'Snapchat';
    } else {
      return 'Unknown';
    }
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      setError('Please enter a video URL');
      return;
    }

    const platform = detectPlatform(url);
    if (platform === 'Unknown') {
      setError('Unsupported video platform. Please try TikTok, Facebook, Instagram, Twitter/X, YouTube, Vimeo, Dailymotion, Pinterest, Reddit, Snapchat, or Rumble.');
      return;
    }

    setIsLoading(true);
    setError('');
    setVideoData(null);
    setProgress(0);

    try {
      // Use server action instead of direct fetch
      const result = await fetchVideoData(url);
      setVideoData(result);
    } catch (err) {
      setError(err.message || `Failed to process the ${detectPlatform(url)} video. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadContent = (quality) => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = quality.url;
    link.download = `${videoData.title || 'video'}.${quality.type === 'audio' ? 'mp3' : 'mp4'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const platform = videoData ? videoData.platform : detectPlatform(url);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full">
          <Play className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Universal Video Downloader
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Download videos from TikTok, Facebook, Instagram, Twitter/X, YouTube, Vimeo, Dailymotion, Pinterest, Reddit, Snapchat, Rumble and more platforms. No watermark downloads, multiple quality options, no registration required.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Multiple Platforms</h3>
            <p className="text-sm text-muted-foreground">Support for 10+ social media platforms</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <MonitorIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">No Watermark</h3>
            <p className="text-sm text-muted-foreground">Download videos without watermarks</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <SmartphoneIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">All Qualities</h3>
            <p className="text-sm text-muted-foreground">Multiple quality options available</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5" />
            Download Video
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* URL Input */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="url"
              placeholder="Paste TikTok, Facebook, Instagram, Twitter/X, YouTube, Vimeo, Dailymotion, Pinterest, Reddit, Snapchat, Rumble or other video URL..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              onClick={handleDownload}
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Download
                </>
              )}
            </Button>
          </div>

          {/* Progress Bar */}
          {isLoading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing video...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Results */}
          {videoData && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium">
                  {videoData.platform} video processed successfully!
                </span>
              </div>

              {/* Video Info Card */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img
                      src={videoData.thumbnail}
                      alt="Video thumbnail"
                      className="w-full md:w-48 h-28 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = '/placeholder-video-thumbnail.jpg';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-lg truncate">{videoData.title}</h3>
                      <div className="space-y-1 mt-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">Duration:</span>
                          <span>{videoData.duration}</span>
                        </div>
                        {videoData.author && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground">Author:</span>
                            <span>{videoData.author}</span>
                          </div>
                        )}
                        {videoData.music && (
                          <div className="flex items-center gap-2 text-sm">
                            <Music className="h-4 w-4 text-muted-foreground" />
                            <span>{videoData.music}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Download Options */}
              <div className="space-y-3">
                <h4 className="text-lg font-medium">Download Options:</h4>
                {videoData.qualities.map((quality, index) => (
                  <div 
                    key={quality.id || index} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <div className="flex flex-col">
                        <span className="font-medium">{quality.quality}</span>
                        <span className="text-sm text-muted-foreground">{quality.size}</span>
                      </div>
                      {quality.type === 'video' && platform === 'TikTok' && (
                        <Badge variant="secondary">No Watermark</Badge>
                      )}
                    </div>
                    <Button
                      onClick={() => downloadContent(quality)}
                      variant="outline"
                      className="flex items-center gap-2 w-full sm:w-auto"
                    >
                      {quality.type === 'audio' ? (
                        <>
                          <Music className="h-4 w-4" />
                          Download Audio
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          Download Video
                        </>
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Platform Support */}
          <div className="pt-4 border-t">
            <h4 className="font-medium mb-2">Supported Platforms:</h4>
            <div className="flex flex-wrap gap-2">
              {['TikTok', 'Facebook', 'Instagram', 'Twitter/X', 'YouTube', 'Vimeo', 'Dailymotion', 'Pinterest', 'Reddit', 'Snapchat', 'Rumble'].map((platform) => (
                <Badge key={platform} variant="secondary">{platform}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Use */}
      <Card>
        <CardHeader>
          <CardTitle>How to Download Videos</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Copy the video URL from TikTok, Facebook, Instagram, Twitter/X, YouTube, or other supported platforms</li>
            <li>Paste the URL in the input field above</li>
            <li>Click the "Download" button</li>
            <li>Select your preferred quality and download the video</li>
          </ol>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle>Why Use Our Video Downloader</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              No Registration Required
            </h4>
            <p className="text-sm text-muted-foreground">Download videos without creating accounts or logging in</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Multiple Quality Options
            </h4>
            <p className="text-sm text-muted-foreground">Choose from various resolutions and formats</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              No Watermark Downloads
            </h4>
            <p className="text-sm text-muted-foreground">Get clean videos without platform watermarks</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Works on All Devices
            </h4>
            <p className="text-sm text-muted-foreground">Use on desktop, tablet, or mobile devices</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}