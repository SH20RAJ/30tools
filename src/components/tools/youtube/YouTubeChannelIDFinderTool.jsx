"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Loader2, Copy, Check, User, Info } from "lucide-react";
import { toast } from "sonner";
import { ToolSEOLayout } from "@/components/seo";
import { getChannelInfo } from "@/lib/youtube-actions";

const TOOL_FAQS = [
  {
    question: "What is a YouTube Channel ID?",
    answer: "A YouTube Channel ID is a unique identifier assigned to every YouTube channel. It starts with 'UC' followed by a string of characters. It is used by apps and services to identify a specific channel."
  },
  {
    question: "How do I find my YouTube Channel ID?",
    answer: "You can find it in your YouTube account settings under 'Advanced settings', or simply use this tool by pasting your channel URL."
  },
  {
    question: "Can I use a custom URL to find the ID?",
    answer: "Yes! This tool supports all YouTube URL formats, including custom URLs (e.g., youtube.com/@username), legacy user URLs, and channel URLs."
  },
  {
    question: "Is this tool free?",
    answer: "Yes, this YouTube Channel ID Finder is 100% free to use with no limits."
  }
];

const TOOL_FEATURES = [
  "Instant ID Lookup",
  "Supports All URL Formats",
  "Channel Statistics",
  "Profile Picture Preview",
  "One-Click Copy",
  "No Login Required"
];

export default function YouTubeChannelIDFinderTool() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error("Please enter a YouTube URL");
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await getChannelInfo(url);
      if (response.success) {
        setResult(response.data);
        toast.success("Channel found!");
      } else {
        toast.error(response.error || "Failed to find channel");
      }
    } catch {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Channel ID copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolSEOLayout
      toolId="youtube-channel-id-finder"
      faqs={TOOL_FAQS}
      features={TOOL_FEATURES}
    >
      <div className="space-y-8">
        <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Find Any YouTube Channel ID
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Enter a YouTube channel URL, username, or video URL to find the Channel ID
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="e.g., https://www.youtube.com/@MrBeast"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="h-12 text-lg"
                />
                <Button type="submit" disabled={isLoading} className="h-12 px-6">
                  {isLoading ? <Loader2 className="animate-spin" /> : <Search className="w-5 h-5" />}
                  <span className="ml-2 hidden sm:inline">Find ID</span>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {result && (
          <Card className="border-2 border-primary/20 shadow-xl animate-in fade-in slide-in-from-bottom-4">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {result.thumbnail && (
                  <img 
                    src={result.thumbnail} 
                    alt={result.title} 
                    className="w-32 h-32 rounded-full border-4 border-background shadow-md"
                  />
                )}
                <div className="flex-1 space-y-4 text-center md:text-left w-full">
                  <div>
                    <h3 className="text-2xl font-bold">{result.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{result.description}</p>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-xl border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground font-medium">Channel ID</p>
                        <p className="font-mono font-bold text-lg">{result.channelId}</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => copyToClipboard(result.channelId)}
                      variant={copied ? "outline" : "default"}
                      className="min-w-[100px]"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-2" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" /> Copy ID
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Info className="w-5 h-5 text-blue-500" />
                Why do I need this?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Many third-party apps, APIs, and services require the exact Channel ID (starting with UC) instead of the user-friendly handle or custom URL.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Search className="w-5 h-5 text-green-500" />
                How it works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We analyze the YouTube page source code to extract the unique channel identifier that YouTube assigns to every account internally.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="w-5 h-5 text-purple-500" />
                Supported URLs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Works with /channel/, /user/, /c/, /@handle URLs, and even individual video URLs (we'll find the owner's ID).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </ToolSEOLayout>
  );
}
