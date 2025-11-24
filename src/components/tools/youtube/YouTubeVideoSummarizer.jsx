"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
    Sparkles,
    Loader2,
    Copy,
    Download,
    CheckCircle2,
    FileText,
    List,
    Lightbulb,
} from "lucide-react";

export default function YouTubeVideoSummarizer() {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [transcriptData, setTranscriptData] = useState(null);
    const [summary, setSummary] = useState(null);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const extractVideoId = (url) => {
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^\&\n?#]+)/,
            /youtube\.com\/watch\?.*v=([^\&\n?#]+)/,
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match) return match[1];
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url.trim()) {
            setError("Please enter a YouTube URL");
            return;
        }

        const videoId = extractVideoId(url);
        if (!videoId) {
            setError("Invalid YouTube URL");
            return;
        }

        setIsLoading(true);
        setError("");
        setTranscriptData(null);
        setSummary(null);

        try {
            // Fetch transcript
            const response = await fetch(`/api/youtube/transcript?videoId=${videoId}`);
            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || "Failed to fetch transcript");
            }

            setTranscriptData(result.data);

            // Generate summary using the transcript
            const summaryResponse = await fetch("/api/youtube/summarize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    transcript: result.data.text,
                    title: result.data.title,
                    duration: result.data.duration,
                }),
            });

            const summaryResult = await summaryResponse.json();

            if (summaryResult.success) {
                setSummary(summaryResult.data);
            }
        } catch (err) {
            setError(err.message || "An error occurred while processing the video");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = (content, filename) => {
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6">
            <Card className="border-2 border-border/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
                    <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                        <Sparkles className="w-6 h-6 text-primary" />
                        AI YouTube Video Summarizer
                    </CardTitle>
                    <CardDescription className="text-center">
                        Get instant AI-powered summaries, key points, and insights from any YouTube video
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Input
                                type="url"
                                placeholder="Paste YouTube video URL here (e.g., https://www.youtube.com/watch?v=...)"
                                value={url}
                                onChange={(e) => {
                                    setUrl(e.target.value);
                                    setError("");
                                }}
                                className="flex-1 border-border focus:border-primary focus:ring-primary"
                                disabled={isLoading}
                            />
                            <Button
                                type="submit"
                                disabled={isLoading || !url.trim()}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4 mr-2" />
                                        Summarize Video
                                    </>
                                )}
                            </Button>
                        </div>

                        {error && (
                            <div className="bg-destructive/10 border border-destructive/50 text-destructive px-4 py-3 rounded-lg">
                                {error}
                            </div>
                        )}
                    </form>

                    {transcriptData && (
                        <div className="mt-6 space-y-6">
                            {/* Video Info */}
                            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-border rounded-lg p-4">
                                <div className="flex items-start gap-4">
                                    {transcriptData.thumbnail && (
                                        <img
                                            src={transcriptData.thumbnail}
                                            alt="Video thumbnail"
                                            className="w-40 h-28 object-cover rounded-lg shadow-md"
                                        />
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg mb-2 text-foreground">
                                            {transcriptData.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline" className="text-primary border-primary">
                                                Duration: {transcriptData.duration}
                                            </Badge>
                                            <Badge variant="outline" className="text-primary border-primary">
                                                {transcriptData.wordCount} words
                                            </Badge>
                                            <Badge variant="outline" className="text-primary border-primary">
                                                {transcriptData.author}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Tabs */}
                            {summary ? (
                                <Tabs defaultValue="summary" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="summary">
                                            <FileText className="w-4 h-4 mr-2" />
                                            Summary
                                        </TabsTrigger>
                                        <TabsTrigger value="keypoints">
                                            <List className="w-4 h-4 mr-2" />
                                            Key Points
                                        </TabsTrigger>
                                        <TabsTrigger value="insights">
                                            <Lightbulb className="w-4 h-4 mr-2" />
                                            Insights
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="summary" className="mt-4">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg flex items-center justify-between">
                                                    <span>AI-Generated Summary</span>
                                                    <div className="flex gap-2">
                                                        <Button
                                                            onClick={() => handleCopy(summary.summary)}
                                                            variant="outline"
                                                            size="sm"
                                                        >
                                                            {copied ? (
                                                                <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" />
                                                            ) : (
                                                                <Copy className="w-4 h-4 mr-1" />
                                                            )}
                                                            {copied ? "Copied!" : "Copy"}
                                                        </Button>
                                                        <Button
                                                            onClick={() =>
                                                                handleDownload(
                                                                    summary.summary,
                                                                    `${transcriptData.title}-summary.txt`
                                                                )
                                                            }
                                                            variant="outline"
                                                            size="sm"
                                                        >
                                                            <Download className="w-4 h-4 mr-1" />
                                                            Download
                                                        </Button>
                                                    </div>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="prose max-w-none">
                                                    <p className="text-foreground whitespace-pre-wrap">
                                                        {summary.summary}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="keypoints" className="mt-4">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg">Key Takeaways</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-3">
                                                    {summary.keyPoints?.map((point, index) => (
                                                        <li key={index} className="flex items-start gap-3">
                                                            <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                                                                {index + 1}
                                                            </span>
                                                            <span className="text-foreground">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="insights" className="mt-4">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg">Insights & Analysis</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="prose max-w-none">
                                                    <p className="text-foreground whitespace-pre-wrap">
                                                        {summary.insights}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                            ) : (
                                <div className="text-center py-8">
                                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary mb-4" />
                                    <p className="text-muted-foreground">
                                        Generating AI summary... This may take a moment.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                        <p>
                            Get instant AI-powered summaries of YouTube videos. Perfect for research,
                            learning, and content creation. Powered by advanced AI technology.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
