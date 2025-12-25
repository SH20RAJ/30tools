"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Download,
  Link,
  Loader2,
  AlertCircle,
  CheckCircle,
  Video,
  FileVideo,
  Image as ImageIcon
} from "lucide-react";
import Image from "next/image";

export default function FacebookDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Please enter a Facebook video URL");
      return;
    }

    if (!url.includes("facebook.com") && !url.includes("fb.watch") && !url.includes("fb.gg")) {
      setError("Please enter a valid Facebook video URL");
      return;
    }

    setIsLoading(true);
    setError("");
    setVideoData(null);

    try {
      const response = await fetch("/api/proxy/facebook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch video information");
      }

      const data = await response.json();

      if (!data || data.error) {
        throw new Error("Could not find video. Make sure the link is public and correct.");
      }

      setVideoData(data);

    } catch (err) {
      console.error(err);
      setError("Failed to process the Facebook video. Please make sure the link is public and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadFile = async (mediaUrl, filename) => {
    try {
      const response = await fetch(mediaUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      // Fallback to opening in new tab if direct download fails (CORS etc)
      window.open(mediaUrl, '_blank');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
        <CardHeader className="text-center pb-2">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            <Link className="h-6 w-6 text-blue-500" />
            Facebook Video Downloader
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="url"
              placeholder="Paste Facebook video URL here (e.g., https://www.facebook.com/...)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-12 text-lg shadow-inner bg-background"
            />
            <Button
              onClick={handleDownload}
              disabled={isLoading}
              className="h-12 px-8 text-lg bg-blue-600 hover:bg-blue-700 shadow-md transition-all hover:scale-105"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Download className="h-5 w-5 mr-2" />
              )}
              {isLoading ? "Fetching..." : "Download"}
            </Button>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">{error}</span>
            </div>
          )}

          {videoData && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Video processed successfully!</span>
              </div>

              <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 relative group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={videoData.thumbnail || "/placeholder-image.jpg"}
                      alt={videoData.title || "Video thumbnail"}
                      className="w-full h-full object-cover min-h-[200px]"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Video className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl mb-2 line-clamp-2" title={videoData.title}>
                        {videoData.title || "Facebook Video"}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md">
                          {videoData.source}
                        </span>
                        {videoData.duration > 0 && (
                          <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md">
                            Duration: {(videoData.duration / 1000).toFixed(0)}s
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Download Options</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {videoData.medias && videoData.medias.map((media, index) => (
                          <Button
                            key={index}
                            variant={media.quality === 'HD' ? 'default' : 'secondary'}
                            className="w-full justify-between group"
                            onClick={() => window.open(media.url, '_blank')}
                          >
                            <span className="flex items-center gap-2">
                              <FileVideo className="w-4 h-4" />
                              {media.quality} ({media.extension})
                            </span>
                            <Download className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground/60 italic">
                  Clicking download will open the video in a new tab. Long press or right click to "Save Video As".
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
