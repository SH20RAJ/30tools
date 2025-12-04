"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
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
  CheckCircle2,
  BookOpen,
  HelpCircle,
  Star,
  Wrench,
  Scissors,
  FileText,
  ChevronRight,
} from "lucide-react";
import { fetchVideoData } from "@/lib/video-download-actions";

export default function UniversalVideoDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  // Function to detect the platform from the URL
  const detectPlatform = (url) => {
    if (url.includes("tiktok.com") || url.includes("vm.tiktok.com")) {
      return "TikTok";
    } else if (url.includes("facebook.com") || url.includes("fb.watch")) {
      return "Facebook";
    } else if (url.includes("instagram.com")) {
      return "Instagram";
    } else if (
      url.includes("twitter.com") ||
      url.includes("x.com") ||
      url.includes("t.co")
    ) {
      return "Twitter/X";
    } else if (url.includes("vimeo.com")) {
      return "Vimeo";
    } else if (url.includes("dailymotion.com")) {
      return "Dailymotion";
    } else if (url.includes("reddit.com")) {
      return "Reddit";
    } else if (url.includes("rumble.com")) {
      return "Rumble";
    } else if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return "YouTube";
    } else if (url.includes("pinterest.com")) {
      return "Pinterest";
    } else if (url.includes("snapchat.com")) {
      return "Snapchat";
    } else {
      return "Unknown";
    }
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Please enter a video URL");
      return;
    }

    const platform = detectPlatform(url);
    if (platform === "Unknown") {
      setError(
        "Unsupported video platform. Please try TikTok, Facebook, Instagram, Twitter/X, YouTube, Vimeo, Dailymotion, Pinterest, Reddit, Snapchat, or Rumble.",
      );
      return;
    }

    setIsLoading(true);
    setError("");
    setVideoData(null);
    setProgress(0);

    try {
      // Use server action instead of direct fetch
      const result = await fetchVideoData(url);
      setVideoData(result);
    } catch (_err) {
      setError(
        err.message ||
        `Failed to process the ${detectPlatform(url)} video. Please try again.`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const downloadContent = (quality) => {
    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = quality.url;
    link.download = `${videoData.title || "video"}.${quality.type === "audio" ? "mp3" : "mp4"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const platform = videoData ? videoData.platform : detectPlatform(url);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Breadcrumb Navigation */}
      <nav
        className="flex items-center space-x-2 text-sm text-muted-foreground pt-4"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href="/search?category=downloaders"
          className="hover:text-foreground transition-colors"
        >
          Downloaders
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">
          Universal Video Downloader
        </span>
      </nav>

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full">
          <Play className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Universal Video Downloader
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Download videos from TikTok, Facebook, Instagram, Twitter/X, YouTube,
          Vimeo, Dailymotion, Pinterest, Reddit, Snapchat, Rumble and more
          platforms. No watermark downloads, multiple quality options, no
          registration required.
        </p>
        <p className="text-xs text-muted-foreground">
          Last updated: December 4, 2024
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Multiple Platforms</h3>
            <p className="text-sm text-muted-foreground">
              Support for 10+ social media platforms
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <MonitorIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">No Watermark</h3>
            <p className="text-sm text-muted-foreground">
              Download videos without watermarks
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <SmartphoneIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">All Qualities</h3>
            <p className="text-sm text-muted-foreground">
              Multiple quality options available
            </p>
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
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
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
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
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
                        e.target.src = "/placeholder-video-thumbnail.jpg";
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-lg truncate">
                        {videoData.title}
                      </h3>
                      <div className="space-y-1 mt-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">
                            Duration:
                          </span>
                          <span>{videoData.duration}</span>
                        </div>
                        {videoData.author && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground">
                              Author:
                            </span>
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
                        <span className="text-sm text-muted-foreground">
                          {quality.size}
                        </span>
                      </div>
                      {quality.type === "video" && platform === "TikTok" && (
                        <Badge variant="secondary">No Watermark</Badge>
                      )}
                    </div>
                    <Button
                      onClick={() => downloadContent(quality)}
                      variant="outline"
                      className="flex items-center gap-2 w-full sm:w-auto"
                    >
                      {quality.type === "audio" ? (
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
              {[
                "TikTok",
                "Facebook",
                "Instagram",
                "Twitter/X",
                "YouTube",
                "Vimeo",
                "Dailymotion",
                "Pinterest",
                "Reddit",
                "Snapchat",
                "Rumble",
              ].map((platform) => (
                <Badge key={platform} variant="secondary">
                  {platform}
                </Badge>
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
            <li>
              Copy the video URL from TikTok, Facebook, Instagram, Twitter/X,
              YouTube, or other supported platforms
            </li>
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
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              No Registration Required
            </h4>
            <p className="text-sm text-muted-foreground">
              Download videos without creating accounts or logging in
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Multiple Quality Options
            </h4>
            <p className="text-sm text-muted-foreground">
              Choose from various resolutions and formats
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              No Watermark Downloads
            </h4>
            <p className="text-sm text-muted-foreground">
              Get clean videos without platform watermarks
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Works on All Devices
            </h4>
            <p className="text-sm text-muted-foreground">
              Use on desktop, tablet, or mobile devices
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Complete Video Download Guide
          </CardTitle>
          <CardDescription>
            Follow these detailed steps to download videos from any social media
            platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-lg">For TikTok Videos</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Open TikTok app or website</li>
                <li>Find the video you want to download</li>
                <li>Tap the share button (arrow icon)</li>
                <li>Select "Copy link" from the share menu</li>
                <li>Paste the URL in our downloader above</li>
                <li>Choose quality and download</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-lg">
                For Instagram Videos
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Open Instagram app or website</li>
                <li>Navigate to the video post</li>
                <li>Click the three dots (...) menu</li>
                <li>Select "Copy link" or "Share" → "Copy link"</li>
                <li>Paste the URL in our downloader</li>
                <li>Select your preferred format and download</li>
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-lg">
                For Facebook Videos
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Go to the Facebook video</li>
                <li>Click on the video to open it</li>
                <li>Copy the URL from your browser address bar</li>
                <li>Or use the share button and copy the link</li>
                <li>Paste in our downloader</li>
                <li>Download in HD quality</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-lg">
                For Twitter/X Videos
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Find the tweet with the video</li>
                <li>Click the share button (three dots)</li>
                <li>Select "Copy link to Tweet"</li>
                <li>Paste the URL in our tool</li>
                <li>Choose video quality</li>
                <li>Download instantly</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>
            Everything you need to know about video downloading
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">What platforms are supported?</h4>
            <p className="text-sm text-muted-foreground">
              We support TikTok, Facebook, Instagram, Twitter/X, YouTube, Vimeo,
              Dailymotion, Pinterest, Reddit, Snapchat, and Rumble. More
              platforms are added regularly.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Are the downloads watermark-free?</h4>
            <p className="text-sm text-muted-foreground">
              Yes! All downloads are completely watermark-free. You get the
              original video quality without any platform branding or
              watermarks.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Is this service free?</h4>
            <p className="text-sm text-muted-foreground">
              Absolutely free! No registration, no hidden fees, no premium
              features. Everything is completely free to use.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">
              What video qualities are available?
            </h4>
            <p className="text-sm text-muted-foreground">
              We offer multiple quality options including HD (1080p), SD (720p),
              and lower resolutions. Choose the quality that best fits your
              needs.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Can I download private videos?</h4>
            <p className="text-sm text-muted-foreground">
              No, we can only download publicly available videos. Private videos
              require authentication that we don't have access to.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Is it safe to use?</h4>
            <p className="text-sm text-muted-foreground">
              Yes, completely safe. All processing happens in your browser, and
              your videos never leave your device. No data is stored on our
              servers.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">
              Why does a video fail to download?
            </h4>
            <p className="text-sm text-muted-foreground">
              Videos might fail if they're private, deleted, or from unsupported
              platforms. Also, some videos may have copyright restrictions that
              prevent downloading.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Can I download audio only?</h4>
            <p className="text-sm text-muted-foreground">
              Yes! Many videos offer an "Audio Only" option that extracts just
              the audio track as an MP3 file.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* User Reviews */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            What Users Say
          </CardTitle>
          <CardDescription>Real reviews from our users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Sarah Johnson</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "This video downloader is amazing! I can finally save my
                  favorite TikTok videos without watermarks. The quality is
                  perfect and it's so easy to use."
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  November 15, 2024
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Mike Chen</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Works perfectly for Instagram Reels and Facebook videos. Much
                  better than other downloaders I've tried. Fast and reliable!"
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  November 12, 2024
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="text-sm font-medium">Emily Davis</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Great tool for downloading Twitter videos. The interface is
                  clean and it works on my phone too. Only wish it supported
                  more formats."
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  November 10, 2024
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">David Wilson</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Perfect for content creators! I can download videos for
                  reference without worrying about watermarks. Highly
                  recommended."
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  November 8, 2024
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Related Tools You Might Like
          </CardTitle>
          <CardDescription>
            More tools to enhance your video workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Scissors className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-1">Video Trimmer</h4>
              <p className="text-sm text-muted-foreground">
                Cut and trim videos online
              </p>
            </div>

            <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-1">Video to MP3</h4>
              <p className="text-sm text-muted-foreground">
                Extract audio from videos
              </p>
            </div>

            <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-1">Video Compressor</h4>
              <p className="text-sm text-muted-foreground">
                Reduce video file sizes
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Video Download Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>Why Choose Our Video Downloader?</h3>
            <p>
              Our universal video downloader stands out from the competition
              with its comprehensive platform support, watermark-free downloads,
              and commitment to user privacy. Unlike many other downloaders that
              require registration or have limited platform support, our tool
              works with all major social media platforms and processes
              everything locally in your browser.
            </p>

            <h3>Supported Video Platforms</h3>
            <p>
              Download videos from TikTok, Instagram, Facebook, Twitter/X,
              YouTube, Vimeo, Dailymotion, Pinterest, Reddit, Snapchat, and
              Rumble. Our tool automatically detects the platform and provides
              the best available quality options for each video.
            </p>

            <h3>Quality Options Explained</h3>
            <ul>
              <li>
                <strong>HD (1080p):</strong> Best quality for large screens and
                professional use
              </li>
              <li>
                <strong>SD (720p):</strong> Good balance of quality and file
                size
              </li>
              <li>
                <strong>Audio Only:</strong> Extract MP3 audio tracks from
                videos
              </li>
              <li>
                <strong>Mobile Optimized:</strong> Smaller file sizes for mobile
                devices
              </li>
            </ul>

            <h3>Privacy and Security</h3>
            <p>
              Your privacy is our top priority. All video processing happens
              directly in your web browser, meaning your videos never leave your
              device. No data is stored on our servers, and we don't track your
              usage or collect personal information.
            </p>

            <h3>Troubleshooting Common Issues</h3>
            <ul>
              <li>
                <strong>Video won't download:</strong> Check if the video is
                public and from a supported platform
              </li>
              <li>
                <strong>Poor quality:</strong> Try a different quality option or
                check the original video
              </li>
              <li>
                <strong>Slow downloads:</strong> This depends on your internet
                connection and video size
              </li>
              <li>
                <strong>Unsupported platform:</strong> We add new platforms
                regularly - check back soon
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
