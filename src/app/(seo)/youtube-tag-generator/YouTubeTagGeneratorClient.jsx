"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateYouTubeTags } from "@/lib/tag-actions";
import {
  PlayIcon,
  CopyIcon,
  TagIcon,
  TrendingUpIcon,
  SearchIcon,
  LoaderIcon,
} from "lucide-react";
import { toast } from "sonner";

export default function YouTubeTagGeneratorClient() {
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleGenerateTags = async () => {
    if (!query.trim()) {
      toast.error("Please enter a topic or keyword");
      return;
    }

    setIsLoading(true);
    try {
      const result = await generateYouTubeTags(query);

      if (result.success) {
        setTags(result.data.tags || []);
        setSearchQuery(result.data.query || query);
        toast.success("YouTube tags generated successfully!");
      } else {
        toast.error(result.error || "Failed to generate tags");
      }
    } catch (_error) {
      toast.error("An error occurred while generating tags");
    } finally {
      setIsLoading(false);
    }
  };

  const copyTag = (tag) => {
    navigator.clipboard.writeText(tag);
    toast.success("Tag copied to clipboard!");
  };

  const copyAllTags = () => {
    const allTags = tags.join(", ");
    navigator.clipboard.writeText(allTags);
    toast.success("All tags copied to clipboard!");
  };

  const copyAsHashtags = () => {
    const hashtags = tags.map((tag) => `#${tag.replace(/\s+/g, "")}`).join(" ");
    navigator.clipboard.writeText(hashtags);
    toast.success("Tags copied as hashtags!");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-destructive/20 dark:bg-primary/20 rounded-lg mr-3">
            <PlayIcon className="h-8 w-8 text-destructive dark:text-destructive" />
          </div>
          <h1 className="text-3xl font-bold">YouTube Tag Generator</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Generate optimized YouTube tags to improve your video's
          discoverability and SEO. Get relevant, trending tags that help boost
          your video's visibility and reach.
        </p>
      </div>

      {/* Input Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <SearchIcon className="mr-2 h-5 w-5" />
            Generate Tags
          </CardTitle>
          <CardDescription>
            Enter your video topic, main keyword, or a brief description of your
            content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="query">Video Topic or Keyword</Label>
            <Input
              id="query"
              placeholder="e.g., cooking recipes, tech reviews, travel vlog..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleGenerateTags()}
            />
          </div>

          <Button
            onClick={handleGenerateTags}
            disabled={isLoading || !query.trim()}
            className="w-full"
          >
            {isLoading ? (
              <>
                <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                Generating Tags...
              </>
            ) : (
              <>
                <TagIcon className="mr-2 h-4 w-4" />
                Generate YouTube Tags
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      {tags.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <TrendingUpIcon className="mr-2 h-5 w-5" />
                  Generated Tags
                </CardTitle>
                <CardDescription>
                  {searchQuery && `Tags for: "${searchQuery}"`} • {tags.length}{" "}
                  tags generated
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyAllTags}>
                  <CopyIcon className="mr-2 h-4 w-4" />
                  Copy All
                </Button>
                <Button variant="outline" size="sm" onClick={copyAsHashtags}>
                  <TagIcon className="mr-2 h-4 w-4" />
                  Copy as #Tags
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Tags Display */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1"
                  onClick={() => copyTag(tag)}
                >
                  {tag}
                  <CopyIcon className="ml-2 h-3 w-3" />
                </Badge>
              ))}
            </div>

            {/* Tags as Text */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="tags-text">Tags (comma-separated)</Label>
                <Textarea
                  id="tags-text"
                  value={tags.join(", ")}
                  readOnly
                  className="min-h-[100px]"
                  onClick={(e) => e.target.select()}
                />
              </div>

              <div>
                <Label htmlFor="hashtags-text">Hashtags</Label>
                <Textarea
                  id="hashtags-text"
                  value={tags
                    .map((tag) => `#${tag.replace(/\s+/g, "")}`)
                    .join(" ")}
                  readOnly
                  className="min-h-[100px]"
                  onClick={(e) => e.target.select()}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tips Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>YouTube Tag Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">✅ Best Practices:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use 5-15 relevant tags per video</li>
                <li>• Include your main keyword as the first tag</li>
                <li>• Mix broad and specific tags</li>
                <li>• Use tags that describe your content accurately</li>
                <li>• Include trending keywords in your niche</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">❌ Avoid:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Using irrelevant or misleading tags</li>
                <li>• Copying tags from unrelated videos</li>
                <li>• Using too many tags (YouTube limits to 500 chars)</li>
                <li>• Keyword stuffing</li>
                <li>• Using banned or inappropriate keywords</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
