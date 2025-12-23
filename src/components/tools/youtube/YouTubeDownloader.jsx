"use client";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Download,
  Video,
  Music,
  Loader2,
  Volume2,
  VolumeX,
  Heart,
} from "lucide-react";
import { toast } from "sonner";



export default function YouTubeDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPWAButton, setShowPWAButton] = useState(false);

  /* Renamed to fix reference error */
  const executePWAInstall = useCallback(async () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      toast.info("To install: Tap Share → Add to Home Screen", {
        duration: 4000,
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
      toast.info("Install option not available");
    }
  }, [deferredPrompt]);

  useEffect(() => {
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

  /* New Direct API Integration (V3) */
  const [downloadingFormat, setDownloadingFormat] = useState(null); // Track which button is processing (using quality string)

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
      const res = await fetch("/api/proxy/ytdown?action=info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch video details");
      }

      const data = await res.json();

      // Normalize data from downr.org/video-info
      const title = data.title || "YouTube Video";
      const thumbnail = data.thumbnail || null;
      // Duration comes as number of seconds
      const durationSeconds = data.duration || 0;
      const duration = new Date(durationSeconds * 1000).toISOString().substring(11, 19).replace(/^0(?:0:0?)?/, '');

      // Parse medias array
      const medias = data.medias || [];

      const videoFormats = medias.filter(m => m.type === "video").map(f => ({
        quality: f.quality,
        fileSize: f.fileSize ? formatBytes(f.fileSize) : "Unknown",
        extension: f.extension,
        type: "video"
      }));

      const audioFormats = medias.filter(m => m.type === "audio").map(f => ({
        quality: "Audio",
        fileSize: f.fileSize ? formatBytes(f.fileSize) : "Unknown",
        extension: f.extension,
        type: "audio"
      }));

      // Fallback if no specific formats found
      if (videoFormats.length === 0 && Boolean(data.title)) {
        // Should hopefully not happen with valid V3 response
      }

      setVideoData({
        title,
        thumbnail,
        duration,
        videoFormats,
        audioFormats,
        originalUrl: url.trim()
      });

    } catch (err) {
      console.error(err);
      setError("An error occurred. Please check the URL and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to format bytes
  const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  const handleProcessDownload = (mediaUrl) => {
    if (!mediaUrl) return;
    const link = document.createElement("a");
    link.href = mediaUrl;
    link.target = "_blank";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Download started!");
  };

  const handleDownload = async (format) => {
    if (!videoData?.originalUrl) return;

    // Unique identifier for loading state
    const loadingId = format.type === 'video' ? format.quality : 'audio-' + format.extension;
    setDownloadingFormat(loadingId);

    try {
      const payload = {
        url: videoData.originalUrl,
        downloadMode: format.type === "audio" ? "audio" : "video",
        videoQuality: format.type === "video" ? format.quality : undefined
      };

      const res = await fetch("/api/proxy/ytdown?action=download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Download failed to initiate");

      const data = await res.json();

      if (data.url) {
        handleProcessDownload(data.url);
      } else {
        throw new Error("No download URL returned");
      }

    } catch (err) {
      console.error(err);
      toast.error("Failed to start download. Please try again.");
    } finally {
      setDownloadingFormat(null);
    }
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
              <h2 className="font-bold text-base sm:text-lg text-rose-950 dark:text-rose-100">
                Your Heart Keeps This Tool Beating for Everyone
              </h2>
              <p className="text-sm text-rose-800/80 dark:text-rose-200/70">
                Every small act of kindness ensures this essential resource remains free and accessible. Even Rs. 11 or $5 can help.
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
            onClick={executePWAInstall}
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
                {videoData.videoFormats?.length > 0 ? (
                  videoData.videoFormats.map((format, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/40 hover:bg-muted rounded-xl transition-colors border border-transparent hover:border-border/50">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{format.quality}</span>
                        </div>
                        {format.fileSize && <div className="text-xs text-muted-foreground">{format.fileSize}</div>}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleDownload(format)}
                        disabled={downloadingFormat !== null}
                        className="rounded-lg gap-2"
                      >
                        {downloadingFormat === format.quality ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Download className="w-4 h-4" />
                        )}
                        {downloadingFormat === format.quality ? "Processing" : "Get Video"}
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-muted-foreground p-3">No video formats available.</div>
                )}
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
                  videoData.audioFormats.map((format, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/40 hover:bg-muted rounded-xl transition-colors border border-transparent hover:border-border/50">
                      <div>
                        <div className="font-medium text-foreground">{format.quality} ({format.extension})</div>
                        {format.fileSize && <div className="text-xs text-muted-foreground">{format.fileSize}</div>}
                      </div>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(format)}
                        disabled={downloadingFormat !== null}
                        className="rounded-lg gap-2"
                      >
                        {downloadingFormat === ('audio-' + format.extension) ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Download className="w-4 h-4" />
                        )}
                        {downloadingFormat === ('audio-' + format.extension) ? "Processing" : "Get Audio"}
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-muted-foreground p-3">No audio formats available.</div>
                )}
              </div>
            </div>

          </div>

        </div>
      )}



    </div >
  );
}
