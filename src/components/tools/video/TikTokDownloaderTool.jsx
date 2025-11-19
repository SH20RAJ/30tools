"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Download,
  Link as LinkIcon,
  Play,
  Heart,
  MessageCircle,
  Share,
  Copy,
  Check,
  Smartphone,
} from "lucide-react";
import { toast } from "sonner";

export default function TikTokDownloaderTool() {
  const [tiktokUrl, setTiktokUrl] = useState("");
  const [quality, setQuality] = useState("hd");
  const [format, setFormat] = useState("mp4");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoData, setVideoData] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setTiktokUrl(url);

    // Auto-detect TikTok URLs and show preview
    if (url.includes("tiktok.com") || url.includes("vm.tiktok.com")) {
      // Could add URL validation here
    }
  };

  const simulateProgress = (duration) => {
    return new Promise((resolve) => {
      const steps = 50;
      const increment = 100 / steps;
      const stepDuration = duration / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        setProgress(Math.min(current, 100));

        if (current >= 100) {
          clearInterval(interval);
          resolve();
        }
      }, stepDuration);
    });
  };

  const generateSampleVideoData = (url) => {
    return {
      id: "sample123",
      url: url,
      title: "Amazing TikTok Video - Dance Challenge",
      author: "@tiktokcreator",
      authorName: "TikTok Creator",
      duration: "00:15",
      thumbnail:
        "https://via.placeholder.com/300x400/FF0050/FFFFFF?text=TikTok+Video",
      stats: {
        likes: "12.4K",
        comments: "892",
        shares: "1.2K",
        views: "45.6K",
      },
      downloadLinks: {
        hd: "https://sample-download-link-hd.mp4",
        sd: "https://sample-download-link-sd.mp4",
        audio: "https://sample-download-link-audio.mp3",
      },
      isWatermarkFree: true,
      uploadDate: new Date().toLocaleDateString(),
    };
  };

  const downloadVideo = async () => {
    if (!tiktokUrl.trim()) {
      toast.error("Please enter a TikTok URL");
      return;
    }

    if (!tiktokUrl.includes("tiktok.com")) {
      toast.error("Please enter a valid TikTok URL");
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setVideoData(null);

    try {
      // Simulate processing
      await simulateProgress(3000);

      // Generate sample video data
      const sampleData = generateSampleVideoData(tiktokUrl);
      setVideoData(sampleData);

      toast.success("TikTok video processed successfully!");
    } catch (error) {
      toast.error("Failed to process TikTok video. Please try again.");
    } finally {
      setIsProcessing(false);
      setProgress(0);
    }
  };

  const downloadFile = async (downloadUrl, filename) => {
    try {
      // In a real implementation, this would download the actual file
      // For demo purposes, we'll just show a success message
      toast.success(`Download started: ${filename}`);

      // Simulate download
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast.error("Download failed. Please try again.");
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const getQualityDownloadUrl = () => {
    if (!videoData) return null;
    return quality === "hd"
      ? videoData.downloadLinks.hd
      : videoData.downloadLinks.sd;
  };

  const getFilename = () => {
    if (!videoData) return "tiktok-video";
    const cleanTitle = videoData.title
      .replace(/[^a-zA-Z0-9]/g, "-")
      .substring(0, 50);
    const extension = format === "mp4" ? "mp4" : "mp3";
    return `${cleanTitle}.${extension}`;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Smartphone className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">TikTok Video Downloader</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Download TikTok videos without watermarks in HD quality. Save your
          favorite TikTok content for offline viewing or sharing. Fast, free,
          and no registration required.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">🚫 No Watermark</Badge>
          <Badge variant="secondary">🎬 HD Quality</Badge>
          <Badge variant="secondary">⚡ Super Fast</Badge>
          <Badge variant="secondary">📱 Mobile Friendly</Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Download TikTok Video</CardTitle>
            <CardDescription>
              Paste any TikTok video URL to download without watermarks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="tiktok-url">TikTok Video URL</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="tiktok-url"
                  value={tiktokUrl}
                  onChange={handleUrlChange}
                  placeholder="https://www.tiktok.com/@username/video/1234567890123456789"
                  className="flex-1"
                  disabled={isProcessing}
                />
                <Button
                  variant="outline"
                  onClick={() => copyToClipboard(tiktokUrl)}
                  disabled={!tiktokUrl.trim()}
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Supports: tiktok.com, vm.tiktok.com, and mobile links
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quality">Video Quality</Label>
                <Select
                  value={quality}
                  onValueChange={setQuality}
                  disabled={isProcessing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hd">HD (720p/1080p)</SelectItem>
                    <SelectItem value="sd">SD (480p)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="format">Download Format</Label>
                <Select
                  value={format}
                  onValueChange={setFormat}
                  disabled={isProcessing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mp4">Video (MP4)</SelectItem>
                    <SelectItem value="mp3">Audio Only (MP3)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={downloadVideo}
              disabled={isProcessing || !tiktokUrl.trim()}
              className="w-full"
            >
              {isProcessing ? (
                <>
                  <Download className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download TikTok Video
                </>
              )}
            </Button>

            {isProcessing && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing TikTok video...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}

            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Videos are downloaded without TikTok watermarks</p>
              <p>• Original quality preserved when available</p>
              <p>• Works with public TikTok videos only</p>
              <p>• Respects content creators' rights</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Video Preview & Download</CardTitle>
            <CardDescription>
              Preview and download your TikTok video
            </CardDescription>
          </CardHeader>
          <CardContent>
            {videoData ? (
              <div className="space-y-4">
                <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden relative max-w-[300px] mx-auto">
                  <img
                    src={videoData.thumbnail}
                    alt={videoData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="text-white text-sm">
                      <p className="font-semibold">{videoData.authorName}</p>
                      <p className="text-xs opacity-90">{videoData.author}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{videoData.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Duration: {videoData.duration} • Uploaded:{" "}
                      {videoData.uploadDate}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-destructive" />
                        <span>{videoData.stats.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <span>{videoData.stats.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share className="h-4 w-4 text-primary" />
                        <span>{videoData.stats.shares}</span>
                      </div>
                    </div>
                    {videoData.isWatermarkFree && (
                      <Badge variant="secondary" className="text-xs">
                        ✓ No Watermark
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() =>
                        downloadFile(getQualityDownloadUrl(), getFilename())
                      }
                      className="flex-1"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download {quality.toUpperCase()}
                    </Button>
                    {format === "mp4" && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          downloadFile(
                            videoData.downloadLinks.audio,
                            `${getFilename().replace(".mp4", "")}.mp3`,
                          )
                        }
                      >
                        🎵 Audio
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Smartphone className="h-12 w-12 mx-auto mb-2" />
                  <p>Enter a TikTok URL to see preview</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* How to Use Section */}
      <Card>
        <CardHeader>
          <CardTitle>How to Download TikTok Videos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <LinkIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">1. Copy TikTok URL</h3>
              <p className="text-sm text-muted-foreground">
                Open TikTok, find the video you want, and copy the share link
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">2. Paste & Process</h3>
              <p className="text-sm text-muted-foreground">
                Paste the URL here, select quality, and click download
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">3. Save & Enjoy</h3>
              <p className="text-sm text-muted-foreground">
                Get your watermark-free video and save it to your device
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Content Section */}
      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>About TikTok Video Downloading</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              TikTok has become one of the most popular social media platforms,
              with millions of creative videos uploaded daily. Our TikTok
              downloader helps you save these videos for offline viewing,
              sharing, or creating compilations while respecting content
              creators' rights.
            </p>

            <h3>Why Download TikTok Videos?</h3>
            <ul>
              <li>
                <strong>Offline Viewing:</strong> Watch videos without internet
                connection
              </li>
              <li>
                <strong>Content Creation:</strong> Use for reactions,
                compilations, or inspiration
              </li>
              <li>
                <strong>Backup:</strong> Save your favorite content before it
                gets deleted
              </li>
              <li>
                <strong>Sharing:</strong> Share videos on other platforms or
                with friends
              </li>
              <li>
                <strong>No Watermarks:</strong> Get clean videos without TikTok
                branding
              </li>
              <li>
                <strong>High Quality:</strong> Download in original resolution
              </li>
            </ul>

            <h3>Supported Features:</h3>
            <ul>
              <li>Download videos in HD quality (720p/1080p)</li>
              <li>Remove TikTok watermarks automatically</li>
              <li>Extract audio from videos (MP3 format)</li>
              <li>Support for all TikTok video types</li>
              <li>Fast processing and download speeds</li>
              <li>Mobile-friendly interface</li>
              <li>No registration or software installation required</li>
            </ul>

            <h3>Supported TikTok URL Formats:</h3>
            <ul>
              <li>
                Standard TikTok URLs: https://www.tiktok.com/@username/video/ID
              </li>
              <li>Short URLs: https://vm.tiktok.com/ID</li>
              <li>Mobile app share links</li>
              <li>TikTok.com direct links</li>
            </ul>

            <h3>Important Notes:</h3>
            <ul>
              <li>Only works with public TikTok videos</li>
              <li>Private or restricted videos cannot be downloaded</li>
              <li>Please respect content creators' copyrights</li>
              <li>Use downloaded content responsibly and legally</li>
              <li>Give credit to original creators when sharing</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
