"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Download,
  Video,
  Music,
  Loader2,
  Bookmark,
  BookmarkCheck,
  SmartphoneIcon,
  Heart,
  X
} from "lucide-react";
import { toast } from "sonner";



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

  /* New Proxy API Integration */
  const [downloadingFormat, setDownloadingFormat] = useState(null); // Track which button is processing

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
      // 1. Fetch Video Details via internal Proxy
      const res = await fetch("/api/proxy/ytdown", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch video details");
      }

      const data = await res.json();

      if (!data.api || !data.api.id) {
        throw new Error("Invalid video URL or API error");
      }

      const apiData = data.api;

      // Normalize data
      const title = apiData.title || "YouTube Video";
      const thumbnail = apiData.imagePreviewUrl || null;
      // Duration isn't strictly provided as string/seconds in top level except in mediaItems, we can iterate or default
      const duration = apiData.mediaItems?.[0]?.mediaDuration || "";

      // Group formats
      const videoFormats = [];
      const audioFormats = [];

      (apiData.mediaItems || []).forEach(item => {
        const isAudio = item.type === "Audio";
        const formatObj = {
          quality: item.mediaQuality || (isAudio ? "Audio" : "Video"),
          fileSize: item.mediaFileSize || "",
          // We store the mediaUrl as the specific ID needed for step 2
          downloadUrl: item.mediaUrl,
          hasAudio: true, // simplified assumption or checked via item.mediaTask
          originalExtension: item.mediaExtension
        };

        if (isAudio) {
          audioFormats.push(formatObj);
        } else {
          videoFormats.push(formatObj);
        }
      });

      setVideoData({
        title,
        thumbnail,
        duration,
        videoFormats,
        audioFormats
      });

    } catch (err) {
      console.error(err);
      setError("An error occurred. Please check the URL and try again.");
    } finally {
      setIsLoading(false);
    }
  };


  const handleProcessDownload = async (mediaUrl, filename) => {
    if (!mediaUrl) return;

    // Set loading state for this specific action if needed, or global
    // Using a simple toast or state to show processing
    const toastId = toast.loading("Processing download link...");

    try {
      // 2. Fetch specific download link via same proxy
      const res = await fetch("/api/proxy/ytdown", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: mediaUrl }),
      });

      if (!res.ok) throw new Error("Failed to get download link");

      const data = await res.json();

      if (data.api && data.api.fileUrl) {
        toast.dismiss(toastId);
        toast.success("Download starting...");

        // Trigger download
        const link = document.createElement("a");
        link.href = data.api.fileUrl;
        link.target = "_blank"; // Or _self if strictly attachment
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        throw new Error("Download link not found");
      }

    } catch (err) {
      console.error(err);
      toast.dismiss(toastId);
      toast.error("Failed to generate download link. Try again.");
    }
  };

  // Wrapper for existing UI calls
  const handleDownload = (downloadUrl) => {
    handleProcessDownload(downloadUrl);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">

      {/* Input Section */}
      <div className="bg-card rounded-2xl shadow-sm border border-border p-2 mb-8">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
          <div className="relative flex-1">
            <Input
              type="url"
              placeholder="Paste YouTube Link here..."
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError("");
              }}
              className="h-14 text-lg pl-4 pr-12 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl"
              disabled={isLoading}
            />
            {url.trim() && (
              <button
                type="button"
                onClick={handleBookmark}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors p-2"
                title={isBookmarked ? "Remove bookmark" : "Bookmark this URL"}
              >
                {isBookmarked ? <BookmarkCheck className="w-5 h-5 text-primary" /> : <Bookmark className="w-5 h-5" />}
              </button>
            )}
          </div>
          <Button
            type="submit"
            disabled={isLoading || !url.trim()}
            className="h-14 px-8 text-lg font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all md:w-auto w-full"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Start"}
          </Button>
        </form>
      </div>

      {/* Donation Section - Compact & Impactful */}
      <div className="relative mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 border border-rose-100 dark:border-rose-900/50 p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400">
              <Heart className="h-5 w-5 fill-current" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-rose-950 dark:text-rose-100">
                Help Keep This Tool Free
              </h3>
              <p className="text-sm text-rose-800/80 dark:text-rose-200/70">
                Your support keeps our servers running for everyone.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="https://payments.cashfree.com/forms/30tools"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white text-sm font-bold rounded-lg shadow-sm transition-all hover:scale-105"
            >
              <Heart className="w-4 h-4" />
              <span>Donate</span>
            </a>
            <a
              href="https://www.paypal.com/ncp/payment/HUKEAE7KXYYCA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-black border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20 text-sm font-semibold rounded-lg transition-all"
            >
              <span>PayPal</span>
            </a>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-8 p-4 bg-destructive/10 text-destructive rounded-xl flex items-center gap-3">
          <X className="w-5 h-5" />
          <p className="font-medium">{error}</p>
        </div>
      )}

      {/* PWA Install Button (Mobile/Supported) */}
      {showPWAButton && (
        <div className="flex justify-center mb-8">
          <Button
            onClick={handlePWAInstall}
            variant="outline"
            className="gap-2 rounded-full border-primary/20 hover:bg-primary/5 text-primary"
          >
            <SmartphoneIcon className="w-4 h-4" />
            Install App for Easier Access
          </Button>
        </div>
      )}

      {/* Video Results */}
      {videoData && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

          {/* Video Preview Card */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="p-6 flex flex-col md:flex-row gap-6">
              {videoData.thumbnail && (
                <div className="shrink-0">
                  <img
                    src={videoData.thumbnail}
                    alt={videoData.title}
                    loading="lazy"
                    className="w-full md:w-64 aspect-video object-cover rounded-xl shadow-sm"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0 py-1">
                <h3 className="font-bold text-lg md:text-xl text-foreground line-clamp-2 mb-3">
                  {videoData.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  {videoData.duration && (
                    <span className="bg-muted px-2.5 py-1 rounded-md font-medium">
                      {videoData.duration}
                    </span>
                  )}
                  <span className="bg-muted px-2.5 py-1 rounded-md font-medium uppercase">
                    MP4 / MP3
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Options Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Video Downloads */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <Video className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Video Download</h3>
              </div>
              <div className="space-y-3">
                {videoData.videoFormats?.slice(0, 4).map((format, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-muted/40 hover:bg-muted rounded-xl transition-colors border border-transparent hover:border-border/50">
                    <div>
                      <div className="font-medium text-foreground">{format.quality}</div>
                      {format.fileSize && <div className="text-xs text-muted-foreground">{format.fileSize}</div>}
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(format.downloadUrl)}
                      className="rounded-lg gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Get Video
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Audio Downloads */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <Music className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Audio Download</h3>
              </div>
              <div className="space-y-3">
                {videoData.audioFormats?.length > 0 ? (
                  videoData.audioFormats.slice(0, 3).map((format, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/40 hover:bg-muted rounded-xl transition-colors border border-transparent hover:border-border/50">
                      <div>
                        <div className="font-medium text-foreground">{format.quality} MP3</div>
                        {format.fileSize && <div className="text-xs text-muted-foreground">{format.fileSize}</div>}
                      </div>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(format.downloadUrl)}
                        className="rounded-lg gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Get Audio
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-between p-3 bg-muted/40 hover:bg-muted rounded-xl transition-colors">
                    <div>
                      <div className="font-medium text-foreground">MP3 Audio</div>
                      <div className="text-xs text-muted-foreground">High Quality</div>
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleDownload(videoData.audioUrl || videoData.downloadUrl)}
                      className="rounded-lg gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Get Audio
                    </Button>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Bookmarks Section */}
      {
        bookmarkedUrls.length > 0 && !videoData && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Your Bookmarks</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowBookmarks(!showBookmarks)}>
                {showBookmarks ? "Hide" : "Show"}
              </Button>
            </div>

            {showBookmarks && (
              <div className="grid gap-3">
                {bookmarkedUrls.map((bookmark, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-card border border-border rounded-xl group hover:border-primary/50 transition-all">
                    {bookmark.thumbnail && (
                      <img src={bookmark.thumbnail} alt="" loading="lazy" className="w-16 h-10 object-cover rounded shadow-sm" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate text-sm">{bookmark.title}</div>
                      <div className="text-xs text-muted-foreground">{new Date(bookmark.bookmarkedAt).toLocaleDateString()}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" onClick={() => handleLoadBookmarkedUrl(bookmark.url)}>Load</Button>
                      <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive" onClick={() => handleRemoveBookmark(bookmark.url)}><X className="w-4 h-4" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      }

    </div >
  );
}
