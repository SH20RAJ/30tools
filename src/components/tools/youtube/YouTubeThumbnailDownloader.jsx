"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DownloadIcon,
  LinkIcon,
  WandIcon,
  RefreshCwIcon,
  LoaderIcon,
  AlertCircleIcon,
  ImageIcon,
  ExternalLinkIcon,
  CopyIcon,
  CheckCircle2,
  Palette,
  Type,
  Layout,
  MousePointerClick,
} from "lucide-react";
import { toast } from "sonner";
import {
  extractYouTubeVideoId,
  getYouTubeVideoMetadata,
  generateThumbnailUrls,
} from "@/lib/youtube-actions";
import { ToolSEOLayout } from "@/components/seo";

const TOOL_FAQS = [
  {
    question: "Is this YouTube thumbnail downloader completely free?",
    answer:
      "Yes, our tool is 100% free with no hidden costs, subscriptions, or limitations. Extract as many thumbnails as you need.",
  },
  {
    question: "Do I need to create an account to use this tool?",
    answer:
      "No registration is required. Simply paste a YouTube URL and instantly get access to all available thumbnail sizes.",
  },
  {
    question: "What thumbnail qualities are available?",
    answer:
      "We provide thumbnails in maximum resolution (HD), standard definition, high quality, medium quality, default quality, and HQ720 format.",
  },
  {
    question: "Can I use the downloaded thumbnails commercially?",
    answer:
      "YouTube thumbnails may be subject to copyright. Always ensure you have proper permissions before using thumbnails commercially.",
  },
  {
    question: "Does the tool work with private or unlisted videos?",
    answer:
      "The tool works with any valid YouTube URL you have access to, including public, unlisted, and private videos (if you are logged in).",
  },
  {
    question: "How accurate are the thumbnail previews?",
    answer:
      "Our tool fetches the exact same thumbnail images that YouTube uses, ensuring 100% accuracy in what you see and download.",
  },
  {
    question: "Can I extract thumbnails from YouTube Shorts?",
    answer:
      "Yes, our tool works with all YouTube video formats, including regular videos, Shorts, and even live streams.",
  },
  {
    question: "Is there a limit to how many thumbnails I can extract?",
    answer:
      "There are no limits on our side. You can extract as many thumbnails as you need, whenever you need them.",
  },
];

const TOOL_FEATURES = [
  "Download All Sizes (HD, SD, HQ)",
  "No Registration Required",
  "Works with Shorts & Live Streams",
  "100% Free & Unlimited",
  "Instant Extraction",
  "Secure & Private",
];

export default function YouTubeThumbnailDownloader() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [error, setError] = useState("");

  // Sample data
  const sampleUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const loadSampleData = () => {
    setYoutubeUrl(sampleUrl);
    toast.success("Sample URL loaded!");
  };

  const clearForm = () => {
    setYoutubeUrl("");
    setVideoData(null);
    setThumbnails([]);
    setError("");
    toast.success("Form cleared!");
  };

  const processThumbnails = async () => {
    if (!youtubeUrl) {
      toast.error("Please enter a YouTube URL");
      return;
    }

    setIsLoading(true);
    setError("");
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
        generateThumbnailUrls(videoId),
      ]);

      // Set video data (even if metadata fails, we can still show thumbnails)
      if (metadataResult.success) {
        setVideoData(metadataResult);
      } else {
        setVideoData({
          title: "YouTube Video",
          channelName: "Unknown Channel",
          channelUrl: "",
          videoId: videoId,
        });
      }

      // Set thumbnails
      if (thumbnailResult.success) {
        setThumbnails(thumbnailResult.thumbnails);
        toast.success("Thumbnails extracted successfully!");
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
      const link = document.createElement("a");
      link.href = url;
      link.download = `youtube-thumbnail-${videoData?.videoId || "unknown"}-${thumbnail.quality}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success(`Downloaded ${thumbnail.name}`);
    } catch {
      toast.error("Failed to download thumbnail");
    }
  };

  const downloadAllThumbnails = async () => {
    if (thumbnails.length === 0) return;

    for (const thumbnail of thumbnails) {
      await downloadThumbnail(thumbnail);
      // Small delay between downloads
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    toast.success("All thumbnails downloaded!");
  };

  const copyThumbnailUrl = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Thumbnail URL copied to clipboard!");
    } catch {
      toast.error("Failed to copy URL");
    }
  };

  const openThumbnail = (url) => {
    window.open(url, "_blank");
  };

  return (
    <ToolSEOLayout
      toolId="youtube-thumbnail-downloader"
      faqs={TOOL_FAQS}
      features={TOOL_FEATURES}
    >
      <div className="space-y-8">
        {/* Title and Description */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            YouTube Thumbnail Extractor
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download YouTube Thumbnails in All Sizes. Extract high-quality
            thumbnails from any YouTube video in seconds!
          </p>
        </div>

        {/* Input Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LinkIcon className="h-5 w-5 mr-2" />
                YouTube URL
              </CardTitle>
              <CardDescription>
                Paste YouTube video URL (e.g.,
                https://www.youtube.com/watch?v=...)
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
                <Button variant="outline" size="sm" onClick={loadSampleData}>
                  <WandIcon className="h-4 w-4 mr-2" />
                  Load Sample
                </Button>
                <Button variant="outline" size="sm" onClick={clearForm}>
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
                      Get Thumbnails
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Panel */}
        {thumbnails.length > 0 && (
          <div className="space-y-6">
            {/* Video Info */}
            {videoData && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                    Video Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-sm font-semibold">Title</Label>
                    <p className="text-sm text-muted-foreground">
                      {videoData.title}
                    </p>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">Channel</Label>
                    <p className="text-sm text-muted-foreground">
                      {videoData.channelName}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Thumbnails */}
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
                        <p className="text-sm text-muted-foreground">
                          {thumbnail.size}
                        </p>
                      </div>
                      <Badge
                        variant={
                          thumbnail.quality === "maxres"
                            ? "default"
                            : "secondary"
                        }
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
          </div>
        )}

        {/* Content Sections */}
        <div className="space-y-8 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>
                YouTube Thumbnail Downloader - The Ultimate Tool for Content
                Creators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                YouTube thumbnails are crucial for attracting viewers and
                increasing click-through rates. Whether you are a content
                creator, marketer, or YouTube enthusiast, our free YouTube
                Thumbnail Downloader provides an effortless way to extract
                high-quality thumbnails from any YouTube video.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why YouTube Thumbnails Matter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Thumbnails serve as the first impression for your videos.
                Studies show that compelling thumbnails can increase
                click-through rates by up to 154%. With our tool, you can
                analyze successful thumbnails, use them for inspiration, or
                download your own thumbnails for use in promotional materials.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Practical Uses for YouTube Thumbnails</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>
                    <strong>Social Media Marketing:</strong> Use thumbnails to
                    promote your YouTube content across platforms like
                    Instagram, Twitter, and Facebook.
                  </li>
                  <li>
                    <strong>Thumbnail Analysis:</strong> Study thumbnails from
                    successful channels to understand what attracts viewers.
                  </li>
                  <li>
                    <strong>Blog Posts and Articles:</strong> Include YouTube
                    thumbnails in your written content for visual appeal.
                  </li>
                  <li>
                    <strong>Presentations:</strong> Add thumbnails to slides
                    when referencing video content.
                  </li>
                  <li>
                    <strong>Backup:</strong> Store thumbnails of your own videos
                    for archival purposes.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Create Effective YouTube Thumbnails</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Great thumbnails share common characteristics:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>
                    <strong>High Contrast:</strong> Use contrasting colors to
                    make elements stand out.
                  </li>
                  <li>
                    <strong>Clear Focal Point:</strong> Include a clear subject
                    that draws the eye.
                  </li>
                  <li>
                    <strong>Minimal Text:</strong> If using text, keep it large
                    and limited to 2-3 words.
                  </li>
                  <li>
                    <strong>Emotional Appeal:</strong> Use images that evoke
                    curiosity or emotion.
                  </li>
                  <li>
                    <strong>Brand Consistency:</strong> Maintain consistent
                    elements across your thumbnails.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Tips for YouTube Thumbnail Success</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-primary" />
                    Color Psychology
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Colors evoke specific emotions and can dramatically affect
                    click-through rates:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                    <li>
                      <strong>Red:</strong> Excitement, urgency, passion
                    </li>
                    <li>
                      <strong>Yellow:</strong> Optimism, clarity, warmth
                    </li>
                    <li>
                      <strong>Blue:</strong> Trust, security, calmness
                    </li>
                    <li>
                      <strong>Green:</strong> Growth, health, prosperity
                    </li>
                    <li>
                      <strong>Purple:</strong> Creativity, wisdom, luxury
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Type className="w-5 h-5 text-primary" />
                    Text Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    When adding text to thumbnails:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                    <li>Use sans-serif fonts for better readability</li>
                    <li>Keep it under 6 words total</li>
                    <li>Add a contrasting outline to make text pop</li>
                    <li>
                      Position text away from the bottom right (where timestamp
                      appears)
                    </li>
                    <li>Test various text placements with our comparison tool</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Layout className="w-5 h-5 text-primary" />
                    Image Composition
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Make your thumbnails visually compelling:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                    <li>Use the rule of thirds for balanced composition</li>
                    <li>Zoom in on faces to capture emotion</li>
                    <li>Crop unnecessary background elements</li>
                    <li>Ensure main subjects are clearly visible at small sizes</li>
                    <li>Add depth with layers and slight perspective</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <MousePointerClick className="w-5 h-5 text-primary" />
                    A/B Testing Strategy
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Use our tool to test different thumbnail designs:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                    <li>Download thumbnails from your top-performing videos</li>
                    <li>Compare them in our comparison tool</li>
                    <li>Identify common successful elements</li>
                    <li>Create variations for new videos</li>
                    <li>Track which designs get higher CTR</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            <p>© 2025 YouTube Thumbnail Extractor. All rights reserved.</p>
            <p>This service is not affiliated with YouTube or Google Inc.</p>
          </div>
        </div>
      </div>
    </ToolSEOLayout>
  );
}
