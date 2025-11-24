"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Smartphone,
  Loader2,
  Play,
  Bookmark,
  BookmarkCheck,
  SmartphoneIcon,
  Plus,
} from "lucide-react";
import { toast } from "sonner";

export default function YouTubeShortsDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shortsData, setShortsData] = useState(null);
  const [error, setError] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPWAButton, setShowPWAButton] = useState(false);
  const [bookmarkedUrls, setBookmarkedUrls] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  useEffect(() => {
    // Load bookmarked URLs
    const savedBookmarks = JSON.parse(
      localStorage.getItem("bookmarked-youtube-shorts-urls") || "[]",
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
      setError("Please enter a YouTube Shorts URL");
      return;
    }

    setIsLoading(true);
    setError("");
    setShortsData(null);

    try {
      // Use the same public API as YouTube downloader
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

      // Normalize response for shorts
      const title = data.title || "YouTube Shorts Video";
      const thumbnail =
        data.image || data.thumbnail || data.videoDetails?.thumbnail || null;
      const duration = data.lengthSeconds
        ? formatDuration(data.lengthSeconds)
        : data.duration || "<60s";

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

      // audio formats (if any)
      let audioFormats = [];
      if (data.format_options && data.format_options.audio) {
        const rawAudio = data.format_options.audio.mp3 || [];
        audioFormats = (rawAudio || []).map((f) => ({
          quality: f.quality || f.bitrate || "audio",
          fileSize: formatBytes(parseInt(f.fileSize || f.filesize || "0", 10)),
          downloadUrl: f.url || "#",
        }));
      }

      // pick the best quality for shorts display
      const bestVideoFormat =
        videoFormats[videoFormats.length - 1] || videoFormats[0];
      const bestAudioFormat = audioFormats[0];

      const normalized = {
        title,
        thumbnail,
        duration,
        quality: bestVideoFormat?.quality || "HD Vertical",
        fileSize: bestVideoFormat?.fileSize || "~8MB",
        description: "YouTube Shorts video content...",
        downloadUrl: bestVideoFormat?.downloadUrl || "#",
        audioUrl: bestAudioFormat?.downloadUrl || null,
        videoFormats,
        audioFormats,
      };

      setShortsData(normalized);
    } catch {
      setError("An error occurred while processing the YouTube Shorts video");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookmark = () => {
    if (!url.trim()) {
      toast.error("Please enter a YouTube Shorts URL to bookmark");
      return;
    }

    try {
      const currentBookmarks = JSON.parse(
        localStorage.getItem("bookmarked-youtube-shorts-urls") || "[]",
      );

      if (isBookmarked) {
        // Remove bookmark
        const filteredUrls = currentBookmarks.filter(
          (item) => item.url !== url,
        );
        localStorage.setItem(
          "bookmarked-youtube-shorts-urls",
          JSON.stringify(filteredUrls),
        );
        setBookmarkedUrls(filteredUrls);
        setIsBookmarked(false);
        toast.success("Bookmark removed");
      } else {
        // Add bookmark
        const newBookmark = {
          url: url.trim(),
          title: shortsData?.title || "YouTube Shorts Video",
          thumbnail: shortsData?.thumbnail || null,
          bookmarkedAt: new Date().toISOString(),
        };
        const updatedBookmarks = [newBookmark, ...currentBookmarks];

        // Keep only last 50 bookmarks
        const limitedBookmarks = updatedBookmarks.slice(0, 50);
        localStorage.setItem(
          "bookmarked-youtube-shorts-urls",
          JSON.stringify(limitedBookmarks),
        );
        setBookmarkedUrls(limitedBookmarks);
        setIsBookmarked(true);
        toast.success("YouTube Shorts bookmarked");
      }
    } catch (_error) {
      toast.error("Failed to save bookmark");
    }
  };

  const handleRemoveBookmark = (urlToRemove) => {
    try {
      const filteredUrls = bookmarkedUrls.filter(
        (item) => item.url !== urlToRemove,
      );
      localStorage.setItem(
        "bookmarked-youtube-shorts-urls",
        JSON.stringify(filteredUrls),
      );
      setBookmarkedUrls(filteredUrls);

      // Update current URL bookmark status if it matches
      if (url === urlToRemove) {
        setIsBookmarked(false);
      }

      toast.success("Bookmark removed");
    } catch (_error) {
      toast.error("Failed to remove bookmark");
    }
  };

  const handleLoadBookmarkedUrl = (bookmarkedUrl) => {
    setUrl(bookmarkedUrl);
    setError("");
    setShortsData(null);
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
      } catch (_error) {
        toast.error("Installation failed");
      }
    } else {
      toast.info("Install option not available in this browser");
    }
  };

  const handleDownload = (downloadUrl, filename, _format) => {
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
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-2 border-border/20 shadow-lg">
        <CardHeader className="bg-background/20 dark:to-red-950/20">
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Smartphone className="w-6 h-6 text-primary" />
            YouTube Shorts Downloader
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="Paste YouTube Shorts URL here (e.g., https://youtube.com/shorts/...)"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                }}
                className="flex-1 border-border focus:border-border focus:ring-primary"
                disabled={isLoading}
              />
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBookmark}
                  disabled={!url.trim()}
                  className="px-3"
                  title={isBookmarked ? "Remove bookmark" : "Bookmark this URL"}
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="w-4 h-4 text-primary" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || !url.trim()}
                  className="bg-muted/500 hover:bg-primary text-white font-medium px-6"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Get Download Links
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* PWA Install Button */}
            {showPWAButton && (
              <div className="flex justify-center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePWAInstall}
                  className="text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <SmartphoneIcon className="w-4 h-4 mr-2" />
                  Install YouTube Shorts Downloader App
                </Button>
              </div>
            )}

            {error && (
              <div className="bg-destructive/10 border border-destructive/50 text-destructive px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
          </form>

          {shortsData && (
            <div className="mt-6 space-y-4">
              <div className="bg-background/20 dark:to-emerald-950/20 border border-border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    {shortsData.thumbnail && (
                      <img
                        src={shortsData.thumbnail}
                        alt="Shorts thumbnail"
                        className="w-24 h-32 object-cover rounded-lg shadow-md"
                        style={{ aspectRatio: "9/16" }}
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-green-200">
                      {shortsData.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge
                        variant="outline"
                        className="text-primary border-border"
                      >
                        Duration: {shortsData.duration}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-primary border-border"
                      >
                        Format: Vertical Video
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-primary border-border"
                      >
                        Size: {shortsData.fileSize}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {shortsData.description &&
                        shortsData.description.slice(0, 150)}
                      ...
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Video Download Options */}
                <Card className="border-border">
                  <CardHeader className="bg-muted/50 dark:bg-pink-950/20">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-primary" />
                      Shorts Video Downloads
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    {shortsData.videoFormats?.map((format, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted/50/50 dark:bg-pink-950/10 rounded-lg"
                      >
                        <div>
                          <div className="font-medium">
                            {format.quality} MP4 (Vertical)
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {format.fileSize} • 9:16 aspect ratio
                          </div>
                        </div>
                        <Button
                          onClick={() =>
                            handleDownload(
                              format.downloadUrl,
                              `${shortsData.title}_shorts.mp4`,
                              "video",
                            )
                          }
                          size="sm"
                          className="bg-muted/500 hover:bg-primary"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    )) || (
                      <div className="flex items-center justify-between p-3 bg-muted/50/50 dark:bg-pink-950/10 rounded-lg">
                        <div>
                          <div className="font-medium">
                            HD Vertical Video (MP4)
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {shortsData.quality} • {shortsData.fileSize} • 9:16
                            aspect ratio
                          </div>
                        </div>
                        <Button
                          onClick={() =>
                            handleDownload(
                              shortsData.downloadUrl,
                              `${shortsData.title}_shorts.mp4`,
                              "video",
                            )
                          }
                          size="sm"
                          className="bg-muted/500 hover:bg-primary"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Audio Download Options */}
                <Card className="border-border">
                  <CardHeader className="bg-muted/50 dark:bg-purple-950/20">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Play className="w-5 h-5 text-primary" />
                      Audio Downloads
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    {shortsData.audioFormats?.map((format, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted/50/50 dark:bg-purple-950/10 rounded-lg"
                      >
                        <div>
                          <div className="font-medium">
                            {format.quality} MP3
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {format.fileSize}
                          </div>
                        </div>
                        <Button
                          onClick={() =>
                            handleDownload(
                              format.downloadUrl,
                              `${shortsData.title}_audio.mp3`,
                              "audio",
                            )
                          }
                          size="sm"
                          className="bg-muted/500 hover:bg-primary"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    )) ||
                      (shortsData.audioUrl && (
                        <div className="flex items-center justify-between p-3 bg-muted/50/50 dark:bg-purple-950/10 rounded-lg">
                          <div>
                            <div className="font-medium">High Quality MP3</div>
                            <div className="text-sm text-muted-foreground">
                              ~
                              {Math.round(
                                parseInt(shortsData.fileSize || "0") * 0.1,
                              )}
                              MB
                            </div>
                          </div>
                          <Button
                            onClick={() =>
                              handleDownload(
                                shortsData.audioUrl,
                                `${shortsData.title}_audio.mp3`,
                                "audio",
                              )
                            }
                            size="sm"
                            className="bg-muted/500 hover:bg-primary"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Audio
                          </Button>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Downloads are processed securely and privately. We don't store
                  any of your downloaded content.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              Supports all YouTube Shorts formats in original vertical
              orientation. Perfect for mobile devices and social media sharing.
            </p>
          </div>

          {/* Bookmarks Section */}
          {bookmarkedUrls.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground dark:text-gray-200">
                  Bookmarked Shorts ({bookmarkedUrls.length})
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowBookmarks(!showBookmarks)}
                >
                  {showBookmarks ? "Hide" : "Show"} Bookmarks
                </Button>
              </div>

              {showBookmarks && (
                <Card className="border-border bg-muted/50/50 dark:bg-yellow-950/10">
                  <CardContent className="p-4">
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {bookmarkedUrls.map((bookmark, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border"
                        >
                          {bookmark.thumbnail && (
                            <img
                              src={bookmark.thumbnail}
                              alt="Thumbnail"
                              className="w-12 h-16 object-cover rounded"
                              style={{ aspectRatio: "9/16" }}
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">
                              {bookmark.title}
                            </h4>
                            <p className="text-xs text-muted-foreground truncate">
                              {bookmark.url}
                            </p>
                            <p className="text-xs text-muted-foreground">
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
                              className="text-xs"
                            >
                              Load
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleRemoveBookmark(bookmark.url)}
                              className="text-xs text-destructive hover:text-destructive"
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          <div className="mt-6 bg-background/20 dark:to-purple-950/20 rounded-lg p-4">
            <h3 className="font-medium mb-2 text-center">
              💡 Pro Tips for YouTube Shorts Downloads
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p>
                  <strong>Mobile Optimized:</strong> Shorts are designed for
                  vertical viewing on mobile devices
                </p>
                <p>
                  <strong>Perfect for Stories:</strong> Use downloaded Shorts
                  for Instagram/TikTok stories
                </p>
              </div>
              <div>
                <p>
                  <strong>Content Creation:</strong> Study successful Shorts for
                  inspiration
                </p>
                <p>
                  <strong>Offline Viewing:</strong> Watch your favorite Shorts
                  without internet
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
