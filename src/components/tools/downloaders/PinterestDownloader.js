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
} from "lucide-react";

export default function PinterestDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Please enter a Pinterest video URL");
      return;
    }

    if (!url.includes("pinterest.com") && !url.includes("pin.it")) {
      setError("Please enter a valid Pinterest URL");
      return;
    }

    setIsLoading(true);
    setError("");
    setVideoData(null);

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

      setVideoData({
        title: data.title || "Pinterest Video Pin",
        thumbnail: data.thumbnail,
        duration: data.duration ? `${(data.duration / 1000).toFixed(0)}s` : "",
        description: data.description || "Pinterest Content",
        board: data.board || "Pinterest",
        qualities: data.medias.map(m => ({
          quality: m.quality,
          size: m.size || "Unknown",
          url: m.url,
          type: m.type
        }))
      });
    } catch (err) {
      console.error(err);
      setError("Failed to process the Pinterest content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadVideo = (quality) => {
    window.open(quality.url, '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="h-5 w-5" />
            Pinterest Video Downloader
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="Paste Pinterest video/GIF URL here..."
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

          {videoData && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">
                  Pinterest content processed successfully!
                </span>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={videoData.thumbnail}
                      alt="Pin thumbnail"
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm mb-1">
                        {videoData.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Duration: {videoData.duration}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Description: {videoData.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Board: {videoData.board}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium">Choose Quality:</h4>
                    {videoData.qualities.map((quality, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 border rounded"
                      >
                        <div>
                          <span className="text-sm font-medium">
                            {quality.quality}
                          </span>
                          <span className="text-xs text-muted-foreground ml-2">
                            ({quality.size})
                          </span>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => downloadVideo(quality)}
                          className="bg-destructive hover:bg-destructive/90"
                        >
                          <Download className="h-3 w-3 mr-1" />
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
            <p>• Supports Pinterest videos, GIFs, and idea pins</p>
            <p>• Download creative content for inspiration</p>
            <p>• No login required</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
