"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Loader2, AlertCircle, CheckCircle, Eye } from "lucide-react";

export default function FacebookStoryDownloader() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [storiesData, setStoriesData] = useState(null);
  const [error, setError] = useState("");

  const handleViewStories = async () => {
    if (!username.trim()) {
      setError("Please enter a Facebook username");
      return;
    }

    if (username.includes("@")) {
      setUsername(username.replace("@", ""));
    }

    setIsLoading(true);
    setError("");
    setStoriesData(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStoriesData({
        username: username,
        profilePic: "/placeholder-avatar.jpg",
        stories: [
          {
            id: 1,
            type: "image",
            thumbnail: "/placeholder-story-1.jpg",
            timestamp: "3h ago",
            size: "2.8 MB",
          },
          {
            id: 2,
            type: "video",
            thumbnail: "/placeholder-story-2.jpg",
            timestamp: "6h ago",
            duration: "0:25",
            size: "8.2 MB",
          },
          {
            id: 3,
            type: "image",
            thumbnail: "/placeholder-story-3.jpg",
            timestamp: "12h ago",
            size: "3.1 MB",
          },
        ],
        highlights: [
          {
            id: 1,
            name: "Vacation",
            cover: "/placeholder-highlight-1.jpg",
            count: 15,
          },
          {
            id: 2,
            name: "Work",
            cover: "/placeholder-highlight-2.jpg",
            count: 9,
          },
        ],
      });
    } catch (_err) {
      setError(
        "Failed to load Facebook stories. Please check the username and try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const downloadStory = (story) => {
    console.log(`Downloading Facebook story ${story.id}`);
  };

  const viewHighlight = (highlight) => {
    console.log(`Viewing Facebook highlight: ${highlight.name}`);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Facebook Story Downloader
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter Facebook username (without @)..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={handleViewStories}
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              {isLoading ? "Loading..." : "View Stories"}
            </Button>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50 rounded-lg text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {storiesData && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">
                  Stories loaded successfully! (Anonymous viewing)
                </span>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={storiesData.profilePic}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">@{storiesData.username}</h3>
                      <p className="text-xs text-muted-foreground">
                        {storiesData.stories.length} active stories
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">
                      Active Stories (24h):
                    </h4>
                    {storiesData.stories.map((story) => (
                      <div
                        key={story.id}
                        className="flex items-center justify-between p-2 border rounded"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={story.thumbnail}
                            alt="Story"
                            className="w-12 h-8 object-cover rounded"
                          />
                          <div>
                            <p className="text-sm font-medium capitalize">
                              {story.type}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {story.timestamp} • {story.size}
                              {story.duration && ` • ${story.duration}`}
                            </p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => downloadStory(story)}
                          className="bg-primary hover:bg-primary/90"
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>

                  {storiesData.highlights.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="text-sm font-medium">Story Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {storiesData.highlights.map((highlight) => (
                          <div
                            key={highlight.id}
                            className="flex items-center gap-2 p-2 border rounded cursor-pointer hover:bg-gray-50"
                            onClick={() => viewHighlight(highlight)}
                          >
                            <img
                              src={highlight.cover}
                              alt={highlight.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-sm font-medium">
                                {highlight.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {highlight.count} items
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-xs text-muted-foreground">
            <p>• Anonymous story viewing - no notifications sent</p>
            <p>• Download stories and highlights</p>
            <p>• Works with public accounts only</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
