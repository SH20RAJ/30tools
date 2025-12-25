"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Download,
  Loader2,
  AlertCircle,
  CheckCircle,
  Music,
  Play,
} from "lucide-react";

export default function YouTubeShortsDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shortsData, setShortsData] = useState(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Please enter a YouTube Shorts URL");
      return;
    }

    if (!url.includes("youtube.com/shorts") && !url.includes("youtu.be") && !url.includes("youtube.com/watch")) {
      setError("Please enter a valid YouTube Shorts URL");
      return;
    }

    setIsLoading(true);
    setError("");
    setShortsData(null);

    try {
      const response = await fetch("/api/proxy/universal", {
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

      if (!data || data.error || !data.medias) {
        throw new Error("Could not find video. Please check the URL and try again.");
      }

      setShortsData({
        title: data.title || "YouTube Shorts",
        thumbnail: data.thumbnail,
        duration: data.duration ? `${(data.duration / 1000).toFixed(0)}s` : "",
        channel: data.author || "Unknown Channel",
        views: "N/A",
        likes: "N/A",
        uploadDate: "N/A",
        description: data.title || "YouTube Shorts",
        qualities: data.medias.map(m => ({
          quality: m.quality,
          size: m.size || "Unknown",
          url: m.url,
          type: m.type
        }))
      });
    } catch (err) {
      console.error(err);
      setError("Failed to process the YouTube Shorts video. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadContent = (quality) => {
    window.open(quality.url, '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            YouTube Shorts Downloader
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="Paste YouTube Shorts URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={handleDownload}
              disabled={isLoading}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {isLoading ? "Processing..." : "Download"}
            </Button>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50 rounded-lg text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {shortsData && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">
                  YouTube Shorts processed successfully!
                </span>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={shortsData.thumbnail}
                        alt="Shorts thumbnail"
                        className="w-20 h-32 object-cover rounded"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white bg-destructive bg-opacity-80 rounded-full p-1" />
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                        {shortsData.duration}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm mb-2 line-clamp-2">
                        {shortsData.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-1">
                        Channel: {shortsData.channel}
                      </p>
                      <p className="text-xs text-muted-foreground mb-1">
                        👁️ {shortsData.views} • 👍 {shortsData.likes}
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Uploaded: {shortsData.uploadDate}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {shortsData.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Download Options:</h4>
                    {shortsData.qualities.map((quality, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border rounded"
                      >
                        <div className="flex items-center gap-2">
                          <div>
                            <span className="text-sm font-medium">
                              {quality.quality}
                            </span>
                            <span className="text-xs text-muted-foreground ml-2">
                              ({quality.size})
                            </span>
                          </div>
                          {quality.quality.includes("Vertical") && (
                            <span className="text-xs bg-muted text-primary px-2 py-1 rounded">
                              9:16 Format
                            </span>
                          )}
                        </div>
                        <Button
                          size="sm"
                          onClick={() => downloadContent(quality)}
                          className="bg-destructive hover:bg-destructive/90"
                        >
                          {quality.type === "audio" ? (
                            <Music className="h-3 w-3 mr-1" />
                          ) : (
                            <Download className="h-3 w-3 mr-1" />
                          )}
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-xs text-muted-foreground">
            <p>• Download YouTube Shorts in vertical format</p>
            <p>• Extract audio as MP3</p>
            <p>• HD quality downloads</p>
            <p>• No registration required</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
