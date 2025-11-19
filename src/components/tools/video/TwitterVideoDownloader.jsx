import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Download, Loader2 } from "lucide-react";

const TwitterVideoDownloader = () => {
  const [twitterUrl, setTwitterUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [downloadOptions, setDownloadOptions] = useState([]);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!twitterUrl) {
      setError("Please enter a Twitter URL");
      return;
    }

    setIsLoading(true);
    setError("");
    setDownloadOptions([]);

    try {
      const response = await fetch("/api/twitter-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: twitterUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch video information");
      }

      const data = await response.json();

      // Parse the HTML response to extract download links
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.html, "text/html");
      const downloadLinks = doc.querySelectorAll(".btn-dl");

      const options = Array.from(downloadLinks).map((link) => ({
        quality: link.closest("tr").querySelector("td").textContent.trim(),
        type: link
          .closest("tr")
          .querySelector("td:nth-child(2)")
          .textContent.trim(),
        url: link.href,
      }));

      setDownloadOptions(options);
    } catch (err) {
      setError("Error downloading video. Please try again.");
      console.error("Download error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Twitter Video Downloader</CardTitle>
          <CardDescription>
            Download videos from Twitter/X posts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <Label htmlFor="twitterUrl">Twitter Video URL</Label>
                <Input
                  id="twitterUrl"
                  type="url"
                  placeholder="https://x.com/username/status/1234567890"
                  value={twitterUrl}
                  onChange={(e) => setTwitterUrl(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={handleDownload}
                  disabled={isLoading}
                  className="w-full sm:w-auto"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </>
                  )}
                </Button>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm p-2 bg-red-50 rounded-md">
                {error}
              </div>
            )}

            {downloadOptions.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">Download Options</h3>
                <div className="space-y-2">
                  {downloadOptions.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-md"
                    >
                      <div>
                        <span className="font-medium">{option.quality}</span>
                        <span className="text-muted-foreground ml-2">
                          ({option.type})
                        </span>
                      </div>
                      <a
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TwitterVideoDownloader;
