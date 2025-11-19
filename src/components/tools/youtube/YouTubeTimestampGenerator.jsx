"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Copy,
  Download,
  Wand2,
  Youtube,
  CheckCircle2,
} from "lucide-react";
import { generateTimestamps } from "@/lib/youtube-actions";

export default function YouTubeTimestampGenerator() {
  const [videoUrl, setVideoUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [timestamps, setTimestamps] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleGenerate = async () => {
    if (!videoUrl && !transcript) {
      setError("Please provide either a YouTube URL or video transcript");
      return;
    }

    setIsGenerating(true);
    setError("");

    try {
      const result = await generateTimestamps(videoUrl, transcript);
      if (result.success) {
        setTimestamps(result.timestamps);
      } else {
        setError(result.error || "Failed to generate timestamps");
      }
    } catch (err) {
      setError("An error occurred while generating timestamps");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyTimestamp = async (timestamp, index) => {
    try {
      await navigator.clipboard.writeText(
        `${timestamp.time} ${timestamp.title}`,
      );
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy timestamp:", err);
    }
  };

  const copyAllTimestamps = async () => {
    const formattedTimestamps = timestamps
      .map((t) => `${t.time} ${t.title}`)
      .join("\n");

    try {
      await navigator.clipboard.writeText(formattedTimestamps);
      setCopiedIndex("all");
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy all timestamps:", err);
    }
  };

  const downloadTimestamps = () => {
    const formattedTimestamps = timestamps
      .map((t) => `${t.time} ${t.title}`)
      .join("\n");

    const blob = new Blob([formattedTimestamps], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "youtube-timestamps.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Card className="card-cute">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-destructive" />
            Generate YouTube Timestamps
          </CardTitle>
          <CardDescription>
            Create professional chapter timestamps automatically from YouTube
            videos or transcripts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="video-url">YouTube Video URL (optional)</Label>
            <Input
              id="video-url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="input-cute"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="transcript">Video Transcript</Label>
            <Textarea
              id="transcript"
              placeholder="Paste your video transcript here... The tool will analyze the content and generate appropriate chapter timestamps with titles."
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              className="min-h-[150px] input-cute"
            />
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
              {error}
            </div>
          )}

          <Button
            onClick={handleGenerate}
            disabled={isGenerating || (!videoUrl && !transcript)}
            className="w-full btn-cute bg-background"
          >
            {isGenerating ? (
              <>
                <Wand2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Timestamps...
              </>
            ) : (
              <>
                <Clock className="w-4 h-4 mr-2" />
                Generate Chapter Timestamps
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {timestamps.length > 0 && (
        <Card className="card-cute">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-destructive" />
                Generated Timestamps ({timestamps.length} chapters)
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyAllTimestamps}
                  className="btn-cute"
                >
                  {copiedIndex === "all" ? (
                    <CheckCircle2 className="w-4 h-4 mr-1 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4 mr-1" />
                  )}
                  Copy All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadTimestamps}
                  className="btn-cute"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
              </div>
            </CardTitle>
            <CardDescription>
              Copy these timestamps to your YouTube video description to enable
              chapters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {timestamps.map((timestamp, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="font-mono">
                        {timestamp.time}
                      </Badge>
                      <span className="font-medium">{timestamp.title}</span>
                    </div>
                    {timestamp.description && (
                      <p className="text-sm text-muted-foreground mt-1 ml-16">
                        {timestamp.description}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyTimestamp(timestamp, index)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {copiedIndex === index ? (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="card-cute">
        <CardHeader>
          <CardTitle>How to Use YouTube Timestamps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">📋 Copy & Paste Method:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Copy the generated timestamps</li>
                <li>• Paste them in your video description</li>
                <li>• YouTube will automatically create chapters</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">✨ Best Practices:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• First timestamp should start at 0:00</li>
                <li>• Use descriptive chapter titles</li>
                <li>• Include relevant keywords</li>
                <li>• Minimum 10 seconds between chapters</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
