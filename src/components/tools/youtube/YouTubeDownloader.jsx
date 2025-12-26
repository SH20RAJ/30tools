"use client";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Download,
  Video,
  Music,
  Loader2,
  Heart,
  Smartphone,
  Check,
  X,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";

export default function YouTubeDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPWAButton, setShowPWAButton] = useState(false);
  const [downloadingFormat, setDownloadingFormat] = useState(null);

  /* PWA Install Logic */
  const executePWAInstall = useCallback(async () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      toast.info("To install: Tap Share → Add to Home Screen", { duration: 4000 });
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
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPWAButton(true);
    };

    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    const isPWA = window.navigator.standalone === true;

    if (!isStandalone && !isPWA) {
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) setShowPWAButton(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

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
      const res = await fetch("/api/proxy/ytdown", { // removed ?action=info
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!res.ok) throw new Error("Failed to fetch video details");

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const title = data.title || "YouTube Video";
      const thumbnail = data.thumbnail || null;
      const durationSeconds = data.duration || 0;
      const duration = new Date(durationSeconds * 1000).toISOString().substring(11, 19).replace(/^0(?:0:0?)?/, '');
      const medias = data.medias || [];

      // Process Video Formats
      const videoFormats = medias
        .filter(m => m.ext === 'mp4' || m.ext === 'webm') // Filter generic video containers
        // .filter(m => !m.is_pl) // ALLOW PLAYLISTS/STREAMS as per API
        .map(f => ({
          quality: f.quality, // e.g., "1080p"
          fileSize: f.size ? f.size : (f.fileSize ? formatBytes(f.fileSize) : "Unknown"), // API might return "size" string directly or we format
          extension: f.ext,
          type: "video",
          url: f.url,

          // Rich Metadata
          resolution: f.resolution, // e.g. "1920x1080"
          fps: f.fps, // e.g. 30
          vcodec: f.vcodec, // e.g. "avc1.640028"
          hdr: f.hdr, // e.g. "SDR"
        }))
        // Filter out formats with bad/missing data if necessary, or keep all
        .sort((a, b) => {
          // Sort by resolution height if possible
          const getResHeight = (resStr) => {
            if (!resStr) return 0;
            const parts = resStr.split('x');
            return parts.length === 2 ? parseInt(parts[1]) : 0;
          };
          return getResHeight(b.resolution) - getResHeight(a.resolution);
        });

      // Process Audio Formats
      // The new API might bundle audio in the same 'av' list or direct audio might be distinct.
      // Based on the sample, 'av' contains video. We'll check for audio-only or extract audio.
      // If no explicit audio types found in 'av' with ext='mp3', we assume this API is video-focused or we rely on extracting audio from video if needed.
      // However, for now, let's look for 'mp3' or 'm4a' in the same list.
      const audioFormats = medias
        .filter(m => m.ext === 'mp3' || m.ext === 'm4a' || m.quality === 'Audio')
        .map(f => ({
          quality: f.quality || "Audio",
          fileSize: f.size || "Unknown",
          extension: f.ext,
          type: "audio",
          url: f.url
        }));

      // If no audio formats found from API, we might mock one or just show none.
      // The sample didn't explicitly show mp3, but typical behavior implies it might exist. 

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
      setError("Could not find video. Please check the link and try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
    link.download = ""; // Hint to download
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Download started!");
  };

  const handleDownload = async (format) => {
    // If we have a direct URL from the new API, use it.
    if (format.url) {
      handleProcessDownload(format.url);
      return;
    }

    // Fallback logic (legacy) removed as new API provides URLs.
    toast.error("Download link not available for this format.");
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">

      {/* Input Section */}
      <div className="relative z-10 mx-auto max-w-3xl">
        <form onSubmit={handleSubmit} className="relative group">
          {/* Removed colorful gradient overlay */}
          <div className="relative bg-background rounded-2xl p-2 shadow-sm border border-border flex flex-col md:flex-row items-center gap-2">
            <Input
              type="url"
              placeholder="Paste YouTube link here..."
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError("");
              }}
              className="h-14 border-0 bg-transparent text-lg md:text-xl px-4 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60 w-full"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading || !url.trim()}
              size="lg"
              className="h-14 px-8 w-full md:w-auto text-lg font-medium rounded-xl bg-foreground text-background hover:bg-foreground/90 shadow-sm transition-all"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Fetching...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Start</span>
                  {/* Removed icon to keep it minimal */}
                </div>
              )}
            </Button>
          </div>
        </form>

        {/* Minimal Error */}
        {error && (
          <div className="mt-4 p-4 bg-destructive/5 border border-destructive/10 text-destructive rounded-xl flex items-center justify-center gap-2 animate-in slide-in-from-top-2">
            <X className="w-5 h-5" />
            <p className="font-medium text-center">{error}</p>
          </div>
        )}
      </div>

      {/* Results Area */}
      {videoData && (
        <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0">

              {/* Preview Side */}
              <div className="lg:col-span-2 relative group overflow-hidden bg-muted/50">
                {videoData.thumbnail && (
                  <>
                    <img
                      src={videoData.thumbnail}
                      alt={videoData.title}
                      className="w-full h-full object-cover"
                    />
                    {videoData.duration && (
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur text-white px-2 py-0.5 rounded text-xs font-medium">
                        {videoData.duration}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Action Side */}
              <div className="lg:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-6 line-clamp-2 leading-tight">
                  {videoData.title}
                </h3>

                <div className="space-y-6">
                  {/* Video Options */}
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Video
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {videoData.videoFormats?.length > 0 ? videoData.videoFormats.map((format, idx) => (
                        <Button
                          key={idx}
                          variant={downloadingFormat === format.quality ? "secondary" : "outline"}
                          onClick={() => handleDownload(format)}
                          disabled={downloadingFormat !== null}
                          className="h-10 px-4 rounded-lg border-border hover:bg-muted transition-all group"
                        >
                          <div className="text-left mr-3">
                            <div className="font-medium flex items-center gap-2 text-sm">
                              {format.quality}
                              {format.hdr === 'HDR' && <span className="text-[9px] px-1 py-0.5 bg-yellow-500/20 text-yellow-600 rounded">HDR</span>}
                            </div>
                            {/* Hidden tech details for fuller minimal look, or restore if needed */}
                          </div>
                          {downloadingFormat === format.quality ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                          )}
                        </Button>
                      )) : <p className="text-sm text-muted-foreground">No video formats.</p>}
                    </div>
                  </div>

                  <div className="w-full h-px bg-border/50" />

                  {/* Audio Options */}
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Audio
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {videoData.audioFormats?.length > 0 ? videoData.audioFormats.map((format, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          onClick={() => handleDownload(format)}
                          disabled={downloadingFormat !== null}
                          className="h-10 px-4 rounded-lg border-border hover:bg-muted transition-all group"
                        >
                          <div className="text-left mr-3">
                            <div className="font-medium text-sm">MP3</div>
                          </div>
                          {downloadingFormat === ('audio-' + format.extension) ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                          )}
                        </Button>
                      )) : <p className="text-sm text-muted-foreground">No audio formats.</p>}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Minimal Donation Prompt */}
      <div className="mt-12 flex justify-center">
        <a
          href="https://payments.cashfree.com/forms/30tools"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted text-muted-foreground text-sm font-medium hover:bg-muted/80 transition-colors"
        >
          <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Support this free tool with a donation</span>
        </a>
      </div>

      {/* PWA Install Button */}
      {showPWAButton && (
        <div className="mt-4 flex justify-center">
          <Button
            onClick={executePWAInstall}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Smartphone className="w-4 h-4 mr-2" />
            Install App
          </Button>
        </div>
      )}
    </div>
  );
}
