"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  VideoIcon,
  Loader2,
  Copy,
  Clock,
  BookOpen,
  Zap,
  Brain,
  Download,
  FileText,
  Hash,
  Eye,
} from "lucide-react";
import { toast } from "sonner";
import {
  generateYouTubeSummary,
  generateQuickSummary,
  generateDetailedSummary,
} from "@/lib/summary-actions";

export default function YouTubeSummaryGenerator() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summaryData, setSummaryData] = useState(null);
  const [error, setError] = useState("");
  const [summaryLength, setSummaryLength] = useState("medium");
  const [summaryStyle, setSummaryStyle] = useState("bullet-points");
  const [includeKeywords, setIncludeKeywords] = useState(true);
  const [includeTimestamps, setIncludeTimestamps] = useState(false);

  const lengthOptions = [
    {
      value: "short",
      label: "Short",
      description: "Brief overview (2-3 sentences)",
      icon: Zap,
    },
    {
      value: "medium",
      label: "Medium",
      description: "Comprehensive summary (1-2 paragraphs)",
      icon: BookOpen,
    },
    {
      value: "long",
      label: "Long",
      description: "Detailed analysis (3+ paragraphs)",
      icon: Brain,
    },
  ];

  const styleOptions = [
    {
      value: "bullet-points",
      label: "Bullet Points",
      description: "Clear points for easy scanning",
    },
    {
      value: "paragraph",
      label: "Paragraphs",
      description: "Flowing text with transitions",
    },
    {
      value: "detailed",
      label: "Detailed",
      description: "Structured sections with headings",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error("Please enter a YouTube URL");
      return;
    }

    await generateSummary("custom");
  };

  const handleQuickSummary = () => {
    if (!url.trim()) {
      toast.error("Please enter a YouTube URL");
      return;
    }
    generateSummary("quick");
  };

  const handleDetailedSummary = () => {
    if (!url.trim()) {
      toast.error("Please enter a YouTube URL");
      return;
    }
    generateSummary("detailed");
  };

  const generateSummary = async (type) => {
    setIsLoading(true);
    setError("");
    setSummaryData(null);

    try {
      console.log(`🤖 Generating ${type} summary...`);
      let result;

      switch (type) {
        case "quick":
          result = await generateQuickSummary(url);
          break;
        case "detailed":
          result = await generateDetailedSummary(url, {
            includeTimestamps,
            includeKeywords,
          });
          break;
        default:
          result = await generateYouTubeSummary(url, {
            summaryLength,
            summaryStyle,
            includeTimestamps,
            includeKeywords,
          });
      }

      if (result.success) {
        setSummaryData(result.data);
        toast.success("AI summary generated successfully!");
        console.log("✅ Summary generated:", result.data);
      } else {
        setError(result.error || "Failed to generate video summary");
        toast.error(result.error || "Failed to generate summary");
      }
    } catch (_err) {
      console.error("❌ Error generating summary:", err);
      setError("An error occurred while generating the summary");
      toast.error("An error occurred while generating the summary");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (content, label) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        toast.success(`${label} copied to clipboard!`);
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard");
      });
  };

  const handleDownload = (content, filename) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Summary downloaded successfully!");
  };

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    return `${minutes}m ${secs}s`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground dark:text-white">
          AI YouTube Summary Generator
        </h1>
        <p className="text-muted-foreground dark:text-gray-300">
          Generate intelligent summaries of YouTube videos using AI. Extract key
          insights, topics, and takeaways.
        </p>
      </div>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <VideoIcon className="h-5 w-5" />
            Generate AI Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* URL Input */}
          <div className="space-y-2">
            <Input
              type="url"
              placeholder="Enter YouTube URL (e.g., https://www.youtube.com/watch?v=...)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full"
              disabled={isLoading}
            />
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleQuickSummary}
              disabled={isLoading}
              variant="default"
              className="flex items-center gap-2"
            >
              <Zap className="h-4 w-4" />
              Quick Summary
            </Button>
            <Button
              onClick={handleDetailedSummary}
              disabled={isLoading}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Brain className="h-4 w-4" />
              Detailed Summary
            </Button>
          </div>

          {/* Advanced Options */}
          <details className="space-y-4">
            <summary className="cursor-pointer text-sm font-medium text-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-gray-100">
              Advanced Options
            </summary>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
              {/* Length Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Summary Length</label>
                <Select value={summaryLength} onValueChange={setSummaryLength}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {lengthOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center gap-2">
                          <option.icon className="h-4 w-4" />
                          <div>
                            <div className="font-medium">{option.label}</div>
                            <div className="text-xs text-muted-foreground">
                              {option.description}
                            </div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Style Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Summary Style</label>
                <Select value={summaryStyle} onValueChange={setSummaryStyle}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {styleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div>
                          <div className="font-medium">{option.label}</div>
                          <div className="text-xs text-muted-foreground">
                            {option.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Options */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={includeKeywords}
                    onChange={(e) => setIncludeKeywords(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">Include Keywords</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={includeTimestamps}
                    onChange={(e) => setIncludeTimestamps(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">Include Timestamps</span>
                </label>
              </div>
            </div>

            {/* Custom Generate Button */}
            <form onSubmit={handleSubmit}>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Summary...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    Generate Custom Summary
                  </>
                )}
              </Button>
            </form>
          </details>
        </CardContent>
      </Card>

      {/* Error Display */}
      {error && (
        <Card className="border-destructive/50 bg-destructive/10 dark:border-border dark:bg-primary/20">
          <CardContent className="pt-6">
            <p className="text-destructive dark:text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* Loading State */}
      {isLoading && (
        <Card className="border-border bg-muted/50 dark:border-border dark:bg-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <span className="text-primary dark:text-primary">
                Processing video and generating AI summary...
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {summaryData && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              AI Summary Results
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {formatDuration(summaryData.duration)}
              </Badge>
              <Badge variant="secondary">
                {summaryData.segmentCount} segments
              </Badge>
              <Badge variant="secondary">{summaryData.wordCount} words</Badge>
              <Badge variant="secondary">
                {summaryData.summaryLength} · {summaryData.summaryStyle}
              </Badge>
              {summaryData.aiModel && (
                <Badge variant="outline">{summaryData.aiModel}</Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-300">
              <strong>Video:</strong> {summaryData.title}
            </p>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger
                  value="summary"
                  className="flex items-center gap-1"
                >
                  <Eye className="h-4 w-4" />
                  Summary
                </TabsTrigger>
                <TabsTrigger
                  value="keywords"
                  className="flex items-center gap-1"
                >
                  <Hash className="h-4 w-4" />
                  Keywords
                </TabsTrigger>
                <TabsTrigger
                  value="transcript"
                  className="flex items-center gap-1"
                >
                  <FileText className="h-4 w-4" />
                  Transcript
                </TabsTrigger>
                <TabsTrigger value="export" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">AI Generated Summary</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(summaryData.summary, "Summary")}
                  >
                    <Copy className="mr-1 h-4 w-4" />
                    Copy
                  </Button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <div className="whitespace-pre-wrap">
                      {summaryData.summary}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="keywords" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Key Topics & Keywords</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleCopy(
                        summaryData.keywords?.join(", ") || "",
                        "Keywords",
                      )
                    }
                  >
                    <Copy className="mr-1 h-4 w-4" />
                    Copy
                  </Button>
                </div>
                {summaryData.keywords && summaryData.keywords.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {summaryData.keywords.map((keyword, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground italic">
                    No keywords extracted
                  </p>
                )}
              </TabsContent>

              <TabsContent value="transcript" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Original Transcript</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleCopy(summaryData.originalTranscript, "Transcript")
                    }
                  >
                    <Copy className="mr-1 h-4 w-4" />
                    Copy
                  </Button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm">
                    {summaryData.originalTranscript}
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="export" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Export Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() =>
                          handleDownload(summaryData.summary, "youtube-summary")
                        }
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Summary (.txt)
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() =>
                          handleCopy(summaryData.summary, "Summary")
                        }
                      >
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Summary
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Export Full Report
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => {
                          const report = `YouTube Video Summary Report

Title: ${summaryData.title}
Duration: ${formatDuration(summaryData.duration)}
Word Count: ${summaryData.wordCount}
Generated: ${new Date(summaryData.generatedAt).toLocaleString()}

SUMMARY:
${summaryData.summary}

${
  summaryData.keywords && summaryData.keywords.length > 0
    ? `
KEYWORDS:
${summaryData.keywords.join(", ")}
`
    : ""
}

ORIGINAL TRANSCRIPT:
${summaryData.originalTranscript}`;
                          handleDownload(report, "youtube-full-report");
                        }}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Full Report (.txt)
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => {
                          const jsonReport = JSON.stringify(
                            summaryData,
                            null,
                            2,
                          );
                          const blob = new Blob([jsonReport], {
                            type: "application/json",
                          });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement("a");
                          a.href = url;
                          a.download = "youtube-summary.json";
                          document.body.appendChild(a);
                          a.click();
                          document.body.removeChild(a);
                          URL.revokeObjectURL(url);
                          toast.success("JSON report downloaded!");
                        }}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Download JSON (.json)
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {/* Features Info */}
      <Card className="bg-background/20 dark:to-blue-900/20 border-border dark:border-border">
        <CardContent className="pt-6">
          <h3 className="font-medium mb-3 text-primary dark:text-purple-100">
            AI Summary Features:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary dark:text-purple-200">
            <div className="space-y-1">
              <div>• Intelligent content analysis</div>
              <div>• Multiple summary lengths</div>
              <div>• Custom formatting styles</div>
            </div>
            <div className="space-y-1">
              <div>• Key topic extraction</div>
              <div>• Timestamp integration</div>
              <div>• Multiple export formats</div>
            </div>
          </div>
          <p className="text-sm text-primary dark:text-purple-300 mt-3">
            Powered by advanced AI to extract meaningful insights and create
            comprehensive summaries from any YouTube video.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
