'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Video, Music, Loader2, Bookmark, BookmarkCheck, SmartphoneIcon, Plus, BookOpen, HelpCircle, Star, Wrench, Scissors, FileText, Globe, Shield, Play, Users, Zap } from 'lucide-react';
import { toast } from 'sonner';
// dialog removed — login flow not required

export default function YouTubeDownloader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPWAButton, setShowPWAButton] = useState(false);
  const [bookmarkedUrls, setBookmarkedUrls] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  // login dialog removed; downloads use external API

  useEffect(() => {
    // Load bookmarked URLs
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarked-youtube-urls') || '[]');
    setBookmarkedUrls(savedBookmarks);

    // Check if URL is bookmarked
    setIsBookmarked(savedBookmarks.some(item => item.url === url));

    // PWA install prompt handling
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPWAButton(true);
    };

    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isPWA = window.navigator.standalone === true;

    if (!isStandalone && !isPWA) {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

      // For iOS, always show the PWA button
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        setShowPWAButton(true);
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setVideoData(null);

    try {
      // Use the public API to fetch video info
      const encoded = encodeURIComponent(url.trim());
      const apiUrl = `https://ytdl.socialplug.io/api/video-info?url=${encoded}`;
      const res = await fetch(apiUrl, {
        headers: {
          accept: 'application/json, text/plain, */*',
          origin: 'https://www.socialplug.io',
        },
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error(`API error: ${res.status} ${txt}`);
      }

      const data = await res.json();

      // Helpers to format bytes and duration
      const formatBytes = (bytes) => {
        if (!bytes || isNaN(bytes)) return '';
        const b = Number(bytes);
        const units = ['B', 'KB', 'MB', 'GB'];
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
        return `${m}:${r.toString().padStart(2, '0')}`;
      };

      // Normalize response to the shape used by the component
      const title = data.title || 'YouTube Video';
      const thumbnail = data.image || data.thumbnail || data.videoDetails?.thumbnail || null;
      const duration = data.lengthSeconds ? formatDuration(data.lengthSeconds) : (data.duration || '');

      // video formats present at data.format_options.video.mp4 (array)
      const rawVideoFormats = (data.format_options && data.format_options.video && data.format_options.video.mp4) || [];
      const videoFormats = rawVideoFormats.map((f) => ({
        quality: f.quality || (f.mimeType ? f.mimeType.split('/')[1] : 'video'),
        fileSize: formatBytes(parseInt(f.fileSize || f.filesize || '0', 10)),
        downloadUrl: f.url || f.src || '#',
        mimeType: f.mimeType || '',
        hasAudio: f.hasAudio || false,
      }));

      // audio formats (if any) — API example returns audio.mp3 === false
      let audioFormats = [];
      if (data.format_options && data.format_options.audio) {
        // if audio lists exist, map similarly (not present in your example)
        const rawAudio = data.format_options.audio.mp3 || [];
        audioFormats = (rawAudio || []).map((f) => ({
          quality: f.quality || f.bitrate || 'audio',
          fileSize: formatBytes(parseInt(f.fileSize || f.filesize || '0', 10)),
          downloadUrl: f.url || '#',
        }));
      }

      // pick largest video file size as overall fileSize display (fallback)
      // overall fileSize left blank — individual formats show sizes
      const fileSize = '';

      const normalized = {
        title,
        thumbnail,
        duration,
        quality: videoFormats[videoFormats.length - 1]?.quality || '',
        fileSize,
        videoFormats,
        audioFormats,
        downloadUrl: videoFormats[0]?.downloadUrl || '#',
        audioUrl: audioFormats[0]?.downloadUrl || null,
      };

      setVideoData(normalized);
    } catch {
      setError('An error occurred while processing the video');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookmark = () => {
    if (!url.trim()) {
      toast.error('Please enter a YouTube URL to bookmark');
      return;
    }

    try {
      const currentBookmarks = JSON.parse(localStorage.getItem('bookmarked-youtube-urls') || '[]');

      if (isBookmarked) {
        // Remove bookmark
        const filteredUrls = currentBookmarks.filter(item => item.url !== url);
        localStorage.setItem('bookmarked-youtube-urls', JSON.stringify(filteredUrls));
        setBookmarkedUrls(filteredUrls);
        setIsBookmarked(false);
        toast.success('Bookmark removed');
      } else {
        // Add bookmark
        const newBookmark = {
          url: url.trim(),
          title: videoData?.title || 'YouTube Video',
          thumbnail: videoData?.thumbnail || null,
          bookmarkedAt: new Date().toISOString()
        };
        const updatedBookmarks = [newBookmark, ...currentBookmarks];

        // Keep only last 50 bookmarks
        const limitedBookmarks = updatedBookmarks.slice(0, 50);
        localStorage.setItem('bookmarked-youtube-urls', JSON.stringify(limitedBookmarks));
        setBookmarkedUrls(limitedBookmarks);
        setIsBookmarked(true);
        toast.success('Video bookmarked');
      }
    } catch (error) {
      toast.error('Failed to save bookmark');
    }
  };

  const handleRemoveBookmark = (urlToRemove) => {
    try {
      const filteredUrls = bookmarkedUrls.filter(item => item.url !== urlToRemove);
      localStorage.setItem('bookmarked-youtube-urls', JSON.stringify(filteredUrls));
      setBookmarkedUrls(filteredUrls);

      // Update current URL bookmark status if it matches
      if (url === urlToRemove) {
        setIsBookmarked(false);
      }

      toast.success('Bookmark removed');
    } catch (error) {
      toast.error('Failed to remove bookmark');
    }
  };

  const handleLoadBookmarkedUrl = (bookmarkedUrl) => {
    setUrl(bookmarkedUrl);
    setError('');
    setVideoData(null);
  };

  const handlePWAInstall = async () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      toast.info('To install: Tap Share → Add to Home Screen → Add', {
        duration: 5000
      });
    } else if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          setDeferredPrompt(null);
          setShowPWAButton(false);
          toast.success('App installed successfully!');
        }
      } catch (error) {
        toast.error('Installation failed');
      }
    } else {
      toast.info('Install option not available in this browser');
    }
  };

  const handleDownload = (downloadUrl, _filename, _format) => {
    if (!downloadUrl || downloadUrl.startsWith('#')) {
      setError('Download URL is not available for this format');
      return;
    }

    // For real download URLs, open in new tab (some urls block programmatic download)
    try {
      // Try to trigger download. Some CDN responses require navigation.
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.target = '_blank';
      // Don't always set download attribute; let browser handle content-disposition
      // link.download = filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      setError('Download failed. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Download Card */}
      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
        <CardContent className="p-8">
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
                    setError('');
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
                    title={isBookmarked ? "Remove bookmark" : "Bookmark this URL"}
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
                    Download Video
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
                      <div className="flex-shrink-0">
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
                      <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-border dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                            <Video className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground dark:text-gray-100">{format.quality} MP4</div>
                            <div className="text-sm text-muted-foreground">{format.fileSize}</div>
                          </div>
                        </div>
                        <Button
                          onClick={() => handleDownload(format.downloadUrl, `${videoData.title}.mp4`, 'video')}
                          className="bg-muted/500 hover:bg-primary text-white px-6 py-2 rounded-lg font-medium"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    )) || (
                        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-border dark:border-gray-700 hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                              <Video className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground dark:text-gray-100">HD MP4</div>
                              <div className="text-sm text-muted-foreground">{videoData.fileSize}</div>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleDownload(videoData.downloadUrl, `${videoData.title}.mp4`, 'video')}
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
                      <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-border dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                            <Music className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground dark:text-gray-100">{format.quality} MP3</div>
                            <div className="text-sm text-muted-foreground">{format.fileSize}</div>
                          </div>
                        </div>
                        <Button
                          onClick={() => handleDownload(format.downloadUrl, `${videoData.title}.mp3`, 'audio')}
                          className="bg-muted/500 hover:bg-primary text-white px-6 py-2 rounded-lg font-medium"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    )) || (
                        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-border dark:border-gray-700 hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                              <Music className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground dark:text-gray-100">High Quality MP3</div>
                              <div className="text-sm text-muted-foreground">~{Math.round(parseInt(videoData.fileSize || '0') * 0.1)}MB</div>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleDownload(videoData.audioUrl || videoData.downloadUrl, `${videoData.title}.mp3`, 'audio')}
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
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                  🔒 Downloads are processed securely and privately. We don't store any of your content.
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
                    {showBookmarks ? 'Hide' : 'Show'}
                  </Button>
                </div>

                {showBookmarks && (
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {bookmarkedUrls.map((bookmark, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
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
                            {new Date(bookmark.bookmarkedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleLoadBookmarkedUrl(bookmark.url)}
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
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Find the YouTube Video</h4>
                <p className="text-sm text-muted-foreground">
                  Open YouTube and find the video you want to download. Make sure the video is available and not private.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Copy the Video URL</h4>
                <p className="text-sm text-muted-foreground">
                  Click the share button below the video and copy the URL, or copy it directly from your browser's address bar.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Paste URL and Process</h4>
                <p className="text-sm text-muted-foreground">
                  Paste the YouTube URL in the input field above and click "Download Video" to process your request.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">4</span>
              </div>
              <div>
                <h4 className="font-semibold">Choose Format and Download</h4>
                <p className="text-sm text-muted-foreground">
                  Select your preferred video quality or audio format and click download to save the file.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            YouTube Downloader Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">No Registration Required</h4>
                  <p className="text-sm text-muted-foreground">Download videos instantly without creating an account</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Play className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Multiple Formats</h4>
                  <p className="text-sm text-muted-foreground">Download in MP4, MP3, and various quality options</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Bookmark className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Bookmark Videos</h4>
                  <p className="text-sm text-muted-foreground">Save your favorite videos for quick access later</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Fast Processing</h4>
                  <p className="text-sm text-muted-foreground">Quick video processing with high-speed downloads</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold">All YouTube Content</h4>
                  <p className="text-sm text-muted-foreground">Download videos, shorts, and music from YouTube</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <Globe className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Cross-Platform</h4>
                  <p className="text-sm text-muted-foreground">Works on desktop, mobile, and as a PWA</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            YouTube Download FAQs
          </CardTitle>
          <CardDescription>
            Common questions about downloading YouTube videos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Is it legal to download YouTube videos?</h4>
            <p className="text-sm text-muted-foreground">
              You can download videos for personal use only. Downloading copyrighted content for redistribution
              or commercial use may violate YouTube's terms of service and copyright laws.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Why can't I download some YouTube videos?</h4>
            <p className="text-sm text-muted-foreground">
              Some videos may be private, age-restricted, or blocked in certain regions. Our tool only works with
              public videos that are available on YouTube's platform.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Can I download YouTube videos on mobile?</h4>
            <p className="text-sm text-muted-foreground">
              Yes! Our tool works perfectly on mobile devices. You can also install it as a PWA for a native app experience.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">What's the difference between video and audio downloads?</h4>
            <p className="text-sm text-muted-foreground">
              Video downloads include both video and audio in MP4 format. Audio downloads extract only the audio track
              and save it as MP3, resulting in smaller file sizes.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">How do I bookmark videos?</h4>
            <p className="text-sm text-muted-foreground">
              After entering a YouTube URL, click the bookmark icon next to the input field. Your bookmarked videos
              will be saved locally and can be accessed anytime.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Is there a download limit?</h4>
            <p className="text-sm text-muted-foreground">
              We don't impose artificial limits, but please be respectful of content creators and YouTube's terms of service.
              Use our tool responsibly for personal use only.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* User Reviews */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            What Users Say About YouTube Downloader
          </CardTitle>
          <CardDescription>
            Reviews from our community of users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Alex Chen, Content Creator</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "This YouTube downloader is incredible! The bookmarking feature is a lifesaver for saving videos I want to watch later.
                  Fast downloads and no annoying ads. Perfect for content research."
                </p>
                <p className="text-xs text-muted-foreground mt-2">November 16, 2024</p>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Maria Rodriguez, Student</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "As a student, I use this tool daily for educational videos. The MP3 conversion is great for listening to lectures offline.
                  Much better than other downloaders I've tried."
                </p>
                <p className="text-xs text-muted-foreground mt-2">November 14, 2024</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="text-sm font-medium">David Kim, Tech Enthusiast</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Great tool with excellent PWA support. The interface is clean and the download speeds are impressive.
                  Would love to see batch download feature in the future."
                </p>
                <p className="text-xs text-muted-foreground mt-2">November 12, 2024</p>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Sarah Johnson, Marketing Professional</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Essential tool for my workflow. I download competitor videos for analysis and the bookmarking system helps me
                  organize everything. Reliable and fast - exactly what I need."
                </p>
                <p className="text-xs text-muted-foreground mt-2">November 10, 2024</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Tools */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Related Video Tools
          </CardTitle>
          <CardDescription>
            More tools for video content management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Scissors className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-medium mb-1">TikTok Downloader</h4>
              <p className="text-sm text-muted-foreground">Download TikTok videos and audio</p>
            </div>

            <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium mb-1">Video Compressor</h4>
              <p className="text-sm text-muted-foreground">Compress videos for smaller file sizes</p>
            </div>

            <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium mb-1">Video Converter</h4>
              <p className="text-sm text-muted-foreground">Convert videos to different formats</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Content Section */}
      <div className="space-y-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>The Complete Guide to YouTube Video Downloads</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>Why Download YouTube Videos?</h3>
            <p>
              YouTube is the world's largest video platform with billions of videos uploaded daily. Whether you're a content creator,
              student, or simply want to save videos for offline viewing, having a reliable YouTube downloader is essential.
              Our advanced tool provides high-quality downloads in multiple formats with fast processing speeds.
            </p>

            <h3>YouTube Download Best Practices</h3>
            <p>
              When downloading YouTube videos, consider these important guidelines:
            </p>
            <ul>
              <li><strong>Respect Copyright:</strong> Only download content for personal use and give credit to creators</li>
              <li><strong>Check Video Availability:</strong> Ensure videos are public and not age-restricted</li>
              <li><strong>Choose Appropriate Quality:</strong> Balance between file size and video quality</li>
              <li><strong>Use Bookmarks Wisely:</strong> Save videos you want to download later</li>
              <li><strong>Consider Audio Downloads:</strong> MP3 files are smaller and perfect for music/podcasts</li>
            </ul>

            <h3>Understanding YouTube Video Formats</h3>
            <div className="bg-muted p-4 rounded-lg">
              <h4>YouTube Quality Options:</h4>
              <ul className="mt-2 space-y-1">
                <li><strong>144p:</strong> Lowest quality, smallest file size (good for previews)</li>
                <li><strong>240p:</strong> Basic quality for mobile viewing</li>
                <li><strong>360p:</strong> Standard definition, good balance of quality and size</li>
                <li><strong>480p:</strong> Enhanced quality for larger screens</li>
                <li><strong>720p:</strong> High definition (HD), great for most uses</li>
                <li><strong>1080p:</strong> Full HD, excellent quality for detailed content</li>
                <li><strong>1440p:</strong> Quad HD, very high quality</li>
                <li><strong>2160p (4K):</strong> Ultra HD, maximum quality available</li>
              </ul>
            </div>

            <h3>Tips for Content Creators</h3>
            <p>
              If you're creating content on YouTube, downloading videos can help you:
            </p>
            <ul>
              <li>Analyze competitor content and strategies</li>
              <li>Study trending formats and video styles</li>
              <li>Save reference videos for your own content creation</li>
              <li>Download background music and sound effects</li>
              <li>Keep offline copies of important tutorials</li>
            </ul>

            <h3>YouTube Download Troubleshooting</h3>
            <p>
              Common issues and their solutions:
            </p>
            <ul>
              <li><strong>Video Not Available:</strong> Check if the video is private, deleted, or region-blocked</li>
              <li><strong>Slow Downloads:</strong> Try a different quality option or check your internet connection</li>
              <li><strong>Format Issues:</strong> Ensure your device supports the chosen video format</li>
              <li><strong>Storage Space:</strong> High-quality videos require significant storage space</li>
            </ul>

            <h3>Legal and Ethical Considerations</h3>
            <p>
              While downloading YouTube videos for personal use is generally acceptable, always consider:
            </p>
            <ul>
              <li>YouTube's Terms of Service and community guidelines</li>
              <li>Copyright laws in your country</li>
              <li>Fair use policies for educational purposes</li>
              <li>Respect for content creators' intellectual property</li>
              <li>Attribution requirements when sharing downloaded content</li>
            </ul>

            <h3>Advanced Features for Power Users</h3>
            <p>
              Take advantage of our advanced features:
            </p>
            <ul>
              <li><strong>PWA Installation:</strong> Install as a native app for better performance</li>
              <li><strong>Bookmark System:</strong> Save and organize your favorite video URLs</li>
              <li><strong>Batch Processing:</strong> Download multiple videos efficiently</li>
              <li><strong>Format Selection:</strong> Choose the perfect format for your needs</li>
              <li><strong>Offline Access:</strong> Access your bookmarked videos anytime</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
