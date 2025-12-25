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
  CheckCircle2,
} from "lucide-react";

export default function TwitterDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Please enter a Twitter/X video URL");
      return;
    }

    if (
      !url.includes("twitter.com") &&
      !url.includes("x.com") &&
      !url.includes("t.co")
    ) {
      setError("Please enter a valid Twitter/X URL");
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
        title: data.title || "Twitter/X Video",
        thumbnail: data.thumbnail,
        duration: data.duration ? `${(data.duration / 1000).toFixed(0)}s` : "",
        author: data.author || "@username",
        qualities: data.medias.map(m => ({
          quality: m.quality,
          size: m.size || "Unknown",
          url: m.url,
          type: m.type
        }))
      });

    } catch (err) {
      console.error(err);
      setError("Failed to process the Twitter/X video. Please try again.");
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
            Twitter/X Video Downloader
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="Paste Twitter/X video URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={handleDownload}
              disabled={isLoading}
              className="bg-muted/500 hover:bg-primary"
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
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm">
                  Twitter/X video processed successfully!
                </span>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={videoData.thumbnail}
                      alt="Video thumbnail"
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
                        Author: {videoData.author}
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
                          className="bg-muted/500 hover:bg-primary"
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
            <p>• Supports Twitter and X platform videos</p>
            <p>• Download GIFs and animations</p>
            <p>• No login required</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
