"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
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
import {
  Download,
  Video,
  Music,
  Loader2,
  Bookmark,
  BookmarkCheck,
  SmartphoneIcon,
  BookOpen,
} from "lucide-react";
import { toast } from "sonner";
import { ToolSEOLayout } from "@/components/seo";

const TOOL_FAQS = [
  {
    question: "Is it legal to download YouTube videos?",
    answer: "You can download videos for personal use only. Downloading copyrighted content for redistribution or commercial use may violate YouTube's terms of service and copyright laws.",
  },
  {
    question: "Why can't I download some YouTube videos?",
    answer: "Some videos may be private, age-restricted, or blocked in certain regions. Our tool only works with public videos that are available on YouTube's platform.",
  },
  {
    question: "Can I download YouTube videos on mobile?",
    answer: "Yes! Our tool works perfectly on mobile devices. You can also install it as a PWA for a native app experience.",
  },
  {
    question: "What's the difference between video and audio downloads?",
    answer: "Video downloads include both video and audio in MP4 format. Audio downloads extract only the audio track and save it as MP3, resulting in smaller file sizes.",
  },
  {
    question: "How do I bookmark videos?",
    answer: "After entering a YouTube URL, click the bookmark icon next to the input field. Your bookmarked videos will be saved locally and can be accessed anytime.",
  },
  {
    question: "Is there a download limit?",
    answer: "We don't impose artificial limits, but please be respectful of content creators and YouTube's terms of service. Use our tool responsibly for personal use only.",
  },
];

const TOOL_FEATURES = [
  "No Registration Required",
  "Multiple Formats (MP4, MP3)",
  "Bookmark Videos",
  "Fast Processing",
  "All YouTube Content",
  "Cross-Platform Support",
];

export default function YouTubeDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPWAButton, setShowPWAButton] = useState(false);
  const [bookmarkedUrls, setBookmarkedUrls] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  // login dialog removed; downloads use external API

  useEffect(() => {
    // Load bookmarked URLs
    const savedBookmarks = JSON.parse(
      localStorage.getItem("bookmarked-youtube-urls") || "[]",
    );
    setBookmarkedUrls(savedBookmarks);

    // Check if URL is bookmarked
    setIsBookmarked(savedBookmarks.some((item) => item.url === url));

    // PWA install prompt handling
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPWAButton(true);
    };

    // Check if already installed
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;
    const isPWA = window.navigator.standalone === true;

    if (!isStandalone && !isPWA) {
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

      // For iOS, always show the PWA button
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        setShowPWAButton(true);
      }
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, [url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    setIsLoading(true);
    setError("");
    setVideoData(null);

    try {
      // Use the public API to fetch video info
      const encoded = encodeURIComponent(url.trim());
      const apiUrl = `https://ytdl.socialplug.io/api/video-info?url=${encoded}`;
      const res = await fetch(apiUrl, {
        headers: {
          accept: "application/json, text/plain, */*",
          origin: "https://www.socialplug.io",
        },
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`API error: ${res.status} ${txt}`);
      }

      const data = await res.json();

      // Helpers to format bytes and duration
      const formatBytes = (bytes) => {
        if (!bytes || isNaN(bytes)) return "";
        const b = Number(bytes);
        const units = ["B", "KB", "MB", "GB"];
        let i = 0;
        let val = b;
        while (val >= 1024 && i < units.length - 1) {
          val /= 1024;
          i++;
        }
        return `${Math.round(val * 10) / 10}${units[i]}`;
      };

      const formatDuration = (secs) => {
        const s = Number(secs) || 0;
        const m = Math.floor(s / 60);
        const r = s % 60;
        return `${m}:${r.toString().padStart(2, "0")}`;
      };

      // Normalize response to the shape used by the component
      const title = data.title || "YouTube Video";
      const thumbnail =
        data.image || data.thumbnail || data.videoDetails?.thumbnail || null;
      const duration = data.lengthSeconds
        ? formatDuration(data.lengthSeconds)
        : data.duration || "";

      // video formats present at data.format_options.video.mp4 (array)
      const rawVideoFormats =
        (data.format_options &&
          data.format_options.video &&
          data.format_options.video.mp4) ||
        [];
      const videoFormats = rawVideoFormats.map((f) => ({
        quality: f.quality || (f.mimeType ? f.mimeType.split("/")[1] : "video"),
        fileSize: formatBytes(parseInt(f.fileSize || f.filesize || "0", 10)),
        downloadUrl: f.url || f.src || "#",
        mimeType: f.mimeType || "",
        hasAudio: f.hasAudio || false,
      }));

      // audio formats (if any) — API example returns audio.mp3 === false
      let audioFormats = [];
      if (data.format_options && data.format_options.audio) {
        // if audio lists exist, map similarly (not present in your example)
        const rawAudio = data.format_options.audio.mp3 || [];
        audioFormats = (rawAudio || []).map((f) => ({
          quality: f.quality || f.bitrate || "audio",
          fileSize: formatBytes(parseInt(f.fileSize || f.filesize || "0", 10)),
          downloadUrl: f.url || "#",
        }));
      }

      // pick largest video file size as overall fileSize display (fallback)
      // overall fileSize left blank — individual formats show sizes
      const fileSize = "";

      const normalized = {
        title,
        thumbnail,
        duration,
        quality: videoFormats[videoFormats.length - 1]?.quality || "",
        fileSize,
        videoFormats,
        audioFormats,
        downloadUrl: videoFormats[0]?.downloadUrl || "#",
        audioUrl: audioFormats[0]?.downloadUrl || null,
      };

      setVideoData(normalized);
    } catch {
      setError("An error occurred while processing the video");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookmark = () => {
    if (!url.trim()) {
      toast.error("Please enter a YouTube URL to bookmark");
      return;
    }

    try {
      const currentBookmarks = JSON.parse(
        localStorage.getItem("bookmarked-youtube-urls") || "[]",
      );

      if (isBookmarked) {
        // Remove bookmark
        const filteredUrls = currentBookmarks.filter(
          (item) => item.url !== url,
        );
        localStorage.setItem(
          "bookmarked-youtube-urls",
          JSON.stringify(filteredUrls),
        );
        setBookmarkedUrls(filteredUrls);
        setIsBookmarked(false);
        toast.success("Bookmark removed");
      } else {
        // Add bookmark
        const newBookmark = {
          url: url.trim(),
          title: videoData?.title || "YouTube Video",
          thumbnail: videoData?.thumbnail || null,
          bookmarkedAt: new Date().toISOString(),
        };
        const updatedBookmarks = [newBookmark, ...currentBookmarks];

        // Keep only last 50 bookmarks
        const limitedBookmarks = updatedBookmarks.slice(0, 50);
        localStorage.setItem(
          "bookmarked-youtube-urls",
          JSON.stringify(limitedBookmarks),
        );
        setBookmarkedUrls(limitedBookmarks);
        setIsBookmarked(true);
        toast.success("Video bookmarked");
      }
    } catch {
      toast.error("Failed to save bookmark");
    }
  };

  const handleRemoveBookmark = (urlToRemove) => {
    try {
      const filteredUrls = bookmarkedUrls.filter(
        (item) => item.url !== urlToRemove,
      );
      localStorage.setItem(
        "bookmarked-youtube-urls",
        JSON.stringify(filteredUrls),
      );
      setBookmarkedUrls(filteredUrls);

      // Update current URL bookmark status if it matches
      if (url === urlToRemove) {
        setIsBookmarked(false);
      }

      toast.success("Bookmark removed");
    } catch {
      toast.error("Failed to remove bookmark");
    }
  };

  const handleLoadBookmarkedUrl = (bookmarkedUrl) => {
    setUrl(bookmarkedUrl);
    setError("");
    setVideoData(null);
  };

  const handlePWAInstall = async () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      toast.info("To install: Tap Share → Add to Home Screen → Add", {
        duration: 5000,
      });
    } else if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
          setDeferredPrompt(null);
          setShowPWAButton(false);
          toast.success("App installed successfully!");
        }
      } catch {
        toast.error("Installation failed");
      }
    } else {
      toast.info("Install option not available in this browser");
    }
  };

  const handleDownload = (downloadUrl, _filename, _format) => {
    if (!downloadUrl || downloadUrl.startsWith("#")) {
      setError("Download URL is not available for this format");
      return;
    }

    // For real download URLs, open in new tab (some urls block programmatic download)
    try {
      // Try to trigger download. Some CDN responses require navigation.
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.target = "_blank";
      // Don't always set download attribute; let browser handle content-disposition
      // link.download = filename;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (_error) {
      console.error("Download failed:", error);
      setError("Download failed. Please try again.");
    }
  };

  return (
    <ToolSEOLayout
      toolId="youtube-downloader"
      faqs={TOOL_FAQS}
      features={TOOL_FEATURES}
    >
      <div className="space-y-8">
        {/* Main Download Card */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* URL Input Section */}
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="url"
                  placeholder="Paste YouTube URL here..."
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setError("");
                  }}
                  className="h-14 text-lg pl-4 pr-20 border-2 border-border focus:border-border focus:ring-primary rounded-xl"
                  disabled={isLoading}
                />
                {url.trim() && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleBookmark}
                    className="absolute right-2 top-2 h-10 w-10 p-0"
                    title={
                      isBookmarked ? "Remove bookmark" : "Bookmark this URL"
                    }
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-5 h-5 text-primary" />
                    ) : (
                      <Bookmark className="w-5 h-5 text-muted-foreground" />
                    )}
                  </Button>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading || !url.trim()}
                className="w-full h-14 text-lg font-semibold bg-background"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-3" />
                    <span className="text-white bg-amber-200">Download Video</span>
                  </>
                )}
              </Button>
            </div>

            {/* PWA Install Button */}
            {showPWAButton && (
              <div className="text-center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePWAInstall}
                  className="text-sm border-2 border-border hover:border-gray-400 text-foreground hover:bg-gray-50 rounded-lg px-4 py-2"
                >
                  <SmartphoneIcon className="w-4 h-4 mr-2" />
                  Install App
                </Button>
              </div>
            )}

            {error && (
              <div className="bg-destructive/10 border-l-4 border-border text-destructive px-4 py-3 rounded-r-lg">
                <div className="flex items-center">
                  <div className="text-sm">{error}</div>
                </div>
              </div>
            )}
          </form>

          {videoData && (
            <div className="mt-8 space-y-6">
              {/* Video Info Card */}
              <Card className="border-0 shadow-lg bg-background/20 dark:to-indigo-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    {videoData.thumbnail && (
                      <div className="shrink-0">
                        <img
                          src={videoData.thumbnail}
                          alt="Video thumbnail"
                          className="w-40 h-28 object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl mb-4 text-foreground dark:text-gray-100 line-clamp-2">
                        {videoData.title}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {videoData.duration && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-foreground text-sm font-medium">
                            ⏱️ {videoData.duration}
                          </span>
                        )}
                        {videoData.quality && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-foreground text-sm font-medium">
                            🎥 {videoData.quality}
                          </span>
                        )}
                        {videoData.fileSize && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-foreground text-sm font-medium">
                            📁 {videoData.fileSize}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Download Options */}
              <div className="space-y-4">
                {/* Video Downloads */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground dark:text-gray-200">
                    <Video className="w-5 h-5 text-primary" />
                    Video Downloads
                  </h3>
                  <div className="space-y-2">
                    {videoData.videoFormats?.map((format, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                            <Video className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground dark:text-gray-100">
                              {format.quality} MP4
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {format.fileSize}
                            </div>
                          </div>
                        </div>
                        <Button
                          onClick={() =>
                            handleDownload(
                              format.downloadUrl,
                              `${videoData.title}.mp4`,
                              "video",
                            )
                          }
                          className="bg-muted/500 hover:bg-primary text-white px-6 py-2 rounded-lg font-medium"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    )) || (
                        <div className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                              <Video className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground dark:text-gray-100">
                                HD MP4
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {videoData.fileSize}
                              </div>
                            </div>
                          </div>
                          <Button
                            onClick={() =>
                              handleDownload(
                                videoData.downloadUrl,
                                `${videoData.title}.mp4`,
                                "video",
                              )
                            }
                            className="bg-muted/500 hover:bg-primary text-white px-6 py-2 rounded-lg font-medium"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      )}
                  </div>
                </div>

                {/* Audio Downloads */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground dark:text-gray-200">
                    <Music className="w-5 h-5 text-primary" />
                    Audio Downloads
                  </h3>
                  <div className="space-y-2">
                    {videoData.audioFormats?.map((format, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                            <Music className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground dark:text-gray-100">
                              {format.quality} MP3
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {format.fileSize}
                            </div>
                          </div>
                        </div>
                        <Button
                          onClick={() =>
                            handleDownload(
                              format.downloadUrl,
                              `${videoData.title}.mp3`,
                              "audio",
                            )
                          }
                          className="bg-muted/500 hover:bg-primary text-white px-6 py-2 rounded-lg font-medium"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    )) || (
                        <div className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                              <Music className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground dark:text-gray-100">
                                High Quality MP3
                              </div>
                              <div className="text-sm text-muted-foreground">
                                ~
                                {Math.round(
                                  parseInt(videoData.fileSize || "0") * 0.1,
                                )}
                                MB
                              </div>
                            </div>
                          </div>
                          <Button
                            onClick={() =>
                              handleDownload(
                                videoData.audioUrl || videoData.downloadUrl,
                                `${videoData.title}.mp3`,
                                "audio",
                              )
                            }
                            className="bg-muted/500 hover:bg-primary text-white px-6 py-2 rounded-lg font-medium"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      )}
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="text-center p-4 bg-muted rounded-xl">
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                  🔒 Downloads are processed securely and privately. We don't
                  store any of your content.
                </p>
              </div>
            </div>
          )}

          {/* Bookmarks Section */}
          {bookmarkedUrls.length > 0 && (
            <Card className="mt-8 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground dark:text-gray-200 flex items-center gap-2">
                    <Bookmark className="w-5 h-5 text-primary" />
                    Bookmarks ({bookmarkedUrls.length})
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBookmarks(!showBookmarks)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {showBookmarks ? "Hide" : "Show"}
                  </Button>
                </div>

                {showBookmarks && (
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {bookmarkedUrls.map((bookmark, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 bg-muted rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        {bookmark.thumbnail && (
                          <img
                            src={bookmark.thumbnail}
                            alt="Thumbnail"
                            className="w-16 h-12 object-cover rounded-lg"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate text-foreground dark:text-gray-100">
                            {bookmark.title}
                          </h4>
                          <p className="text-xs text-muted-foreground truncate">
                            {new Date(
                              bookmark.bookmarkedAt,
                            ).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleLoadBookmarkedUrl(bookmark.url)
                            }
                            className="text-xs px-3 py-1"
                          >
                            Load
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveBookmark(bookmark.url)}
                            className="text-xs px-2 py-1 text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            ×
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* TeraBox Downloader Backlink for SEO */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Need to Download TeraBox Files?
              </h3>
              <p className="text-muted-foreground mb-4">
                Looking for a reliable way to download files from TeraBox? Check
                out our specialized TeraBox downloader tool.
              </p>
              <a
                href="https://terabox.beer/"
                target="_blank"
                rel="doopener doreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                TeraBox Downloader
              </a>
            </div>
          </CardContent>
        </Card>

        {/* How to Use Guide */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              How to Download YouTube Videos
            </CardTitle>
            <CardDescription>
              Step-by-step guide to download YouTube videos easily
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Find the YouTube Video</h4>
                  <p className="text-sm text-muted-foreground">
                    Open YouTube and find the video you want to download. Make
                    sure the video is available and not private.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Copy the Video URL</h4>
                  <p className="text-sm text-muted-foreground">
                    Click the share button below the video and copy the URL, or
                    copy it directly from your browser's address bar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Paste URL and Process</h4>
                  <p className="text-sm text-muted-foreground">
                    Paste the YouTube URL in the input field above and click
                    "Download Video" to process your request.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <h4 className="font-semibold">Choose Format and Download</h4>
                  <p className="text-sm text-muted-foreground">
                    Select your preferred video quality or audio format and click
                    download to save the file.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ad Unit: Below main How to Use guide */}
        <div className="my-6">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-1828915420581549"
            data-ad-slot="9420953810"
          />
          <Script id="ads-init-1" strategy="lazyOnload">
            {"(adsbygoogle = window.adsbygoogle || []).push({});"}
          </Script>
        </div>

        {/* Quick link to the new YouTube Embedder tool */}
        <div className="mt-6">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">
                    YouTube Custom Player Embedder
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Generate custom iframe players using Plyr, Video.js,
                    FluidPlayer and MediaElement.js.
                  </p>
                </div>
                <div>
                  <Link href="/youtube-embedder">
                    <Button>Try Embedder</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <a href="https://visitorbadge.io/status?path=https%3A%2F%2F30tools.com%2Fyoutube-downloader"><img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2F30tools.com%2Fyoutube-downloader&countColor=%23263759&style=flat-square" /></a>
    </ToolSEOLayout>
  );
}
