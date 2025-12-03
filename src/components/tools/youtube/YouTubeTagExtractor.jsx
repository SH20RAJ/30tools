"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Download,
    Copy,
    Loader2,
    Tags,
    VideoIcon,
    CheckCircle2,
    AlertCircle,
    Hash,
    TrendingUp,
} from "lucide-react";
import { toast } from "sonner";

export default function YouTubeTagExtractor() {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [tagData, setTagData] = useState(null);
    const [error, setError] = useState("");

    const extractVideoId = (url) => {
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
            /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/,
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
                return match[1];
            }
        }
        return null;
    };

    const handleExtract = async () => {
        if (!url.trim()) {
            toast.error("Please enter a YouTube URL");
            return;
        }

        const videoId = extractVideoId(url);
        if (!videoId) {
            toast.error("Invalid YouTube URL. Please check and try again.");
            return;
        }

        setIsLoading(true);
        setError("");
        setTagData(null);

        try {
            // Fetch video metadata using YouTube oEmbed API
            const oembedResponse = await fetch(
                `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
            );

            if (!oembedResponse.ok) {
                throw new Error("Video not found or unavailable");
            }

            const oembedData = await oembedResponse.json();

            // Fetch video page to extract tags from meta tags
            const response = await fetch(`/api/youtube-tags?videoId=${videoId}`);

            if (!response.ok) {
                throw new Error("Failed to extract tags");
            }

            const data = await response.json();

            if (data.tags && data.tags.length > 0) {
                setTagData({
                    videoId: videoId,
                    title: oembedData.title || data.title || "Unknown Title",
                    channelName: oembedData.author_name || "Unknown Channel",
                    thumbnail: oembedData.thumbnail_url || "",
                    tags: data.tags,
                    tagCount: data.tags.length,
                });
                toast.success(`Successfully extracted ${data.tags.length} tags!`);
            } else {
                setError(
                    "No tags found for this video. The creator may not have added any tags."
                );
                toast.warning("No tags found for this video");
            }
        } catch (err) {
            console.error("Error extracting tags:", err);
            setError(
                err.message || "Failed to extract tags. Please check the URL and try again."
            );
            toast.error("Failed to extract tags");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = () => {
        if (!tagData || !tagData.tags) return;

        const tagsText = tagData.tags.join(", ");
        navigator.clipboard
            .writeText(tagsText)
            .then(() => {
                toast.success("Tags copied to clipboard!");
            })
            .catch(() => {
                toast.error("Failed to copy tags");
            });
    };

    const handleDownload = (format) => {
        if (!tagData || !tagData.tags) return;

        let content = "";
        let mimeType = "text/plain";
        let fileExtension = ".txt";

        switch (format) {
            case "txt":
                content = tagData.tags.join("\n");
                mimeType = "text/plain";
                fileExtension = ".txt";
                break;
            case "csv":
                content = "Tag,Position\n" + tagData.tags.map((tag, i) => `"${tag}",${i + 1}`).join("\n");
                mimeType = "text/csv";
                fileExtension = ".csv";
                break;
            case "json":
                content = JSON.stringify(
                    {
                        videoId: tagData.videoId,
                        title: tagData.title,
                        channelName: tagData.channelName,
                        tags: tagData.tags,
                        tagCount: tagData.tagCount,
                        extractedAt: new Date().toISOString(),
                    },
                    null,
                    2
                );
                mimeType = "application/json";
                fileExtension = ".json";
                break;
            default:
                content = tagData.tags.join(", ");
        }

        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `youtube-tags-${tagData.videoId}${fileExtension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        toast.success(`Tags downloaded as ${format.toUpperCase()}!`);
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                    <Tags className="h-10 w-10 text-red-600 dark:text-red-400" />
                    <h1 className="text-4xl font-bold text-foreground dark:text-white">
                        YouTube Tag Extractor
                    </h1>
                </div>
                <div className="inline-block">
                    <Badge variant="secondary" className="text-sm px-4 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        100% FREE
                    </Badge>
                </div>
                <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
                    Discover the power of our YouTube Tags Extractor! Retrieve the
                    tags/keywords from any YouTube video with ease.
                </p>
            </div>

            {/* Input Form */}
            <Card className="border-2 border-red-100 dark:border-red-900">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                        <VideoIcon className="h-6 w-6 text-red-600" />
                        Extract Tags from YouTube Video
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <Input
                                type="url"
                                placeholder="Paste YouTube URL here (e.g., https://www.youtube.com/watch?v=...)"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleExtract()}
                                className="w-full h-12 text-base"
                                disabled={isLoading}
                            />
                        </div>
                        <Button
                            onClick={handleExtract}
                            disabled={isLoading}
                            className="w-full sm:w-auto h-12 px-8 bg-red-600 hover:bg-red-700"
                            size="lg"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Extracting...
                                </>
                            ) : (
                                <>
                                    <Tags className="mr-2 h-5 w-5" />
                                    Extract Tags
                                </>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Error Display */}
            {error && (
                <Card className="border-destructive/50 bg-destructive/10 dark:border-red-800 dark:bg-red-950/30">
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-destructive dark:text-red-400 mt-0.5" />
                            <p className="text-destructive dark:text-red-400 font-medium">
                                {error}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Results */}
            {tagData && (
                <div className="space-y-6">
                    {/* Video Info */}
                    <Card className="border-2 border-green-100 dark:border-green-900">
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                {tagData.thumbnail && (
                                    <img
                                        src={tagData.thumbnail}
                                        alt={tagData.title}
                                        className="w-32 h-24 object-cover rounded-lg"
                                    />
                                )}
                                <div className="flex-1">
                                    <CardTitle className="flex items-center gap-2 mb-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                        Tags Extracted Successfully!
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground dark:text-gray-300 mb-2">
                                        <strong>Video:</strong> {tagData.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground dark:text-gray-300">
                                        <strong>Channel:</strong> {tagData.channelName}
                                    </p>
                                    <div className="flex gap-2 mt-3">
                                        <Badge variant="secondary" className="flex items-center gap-1">
                                            <Hash className="h-3 w-3" />
                                            {tagData.tagCount} Tags
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    {/* Tags Display */}
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-red-600" />
                                    Extracted Tags ({tagData.tagCount})
                                </CardTitle>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleCopy}
                                    >
                                        <Copy className="mr-1 h-4 w-4" />
                                        Copy All
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleDownload("txt")}
                                    >
                                        <Download className="mr-1 h-4 w-4" />
                                        TXT
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleDownload("csv")}
                                    >
                                        <Download className="mr-1 h-4 w-4" />
                                        CSV
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleDownload("json")}
                                    >
                                        <Download className="mr-1 h-4 w-4" />
                                        JSON
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {tagData.tags.map((tag, index) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="px-3 py-1.5 text-sm bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/50 cursor-pointer transition-colors"
                                        onClick={() => {
                                            navigator.clipboard.writeText(tag);
                                            toast.success(`Copied: ${tag}`);
                                        }}
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tag List */}
                    <Card className="bg-gray-50 dark:bg-gray-800">
                        <CardHeader>
                            <CardTitle className="text-lg">Tag List (Plain Text)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border max-h-64 overflow-y-auto">
                                <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300">
                                    {tagData.tags.join("\n")}
                                </pre>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Features Info */}
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 border-2 border-red-100 dark:border-red-900">
                <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4 text-red-900 dark:text-red-100">
                        Why Use Our YouTube Tag Extractor?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800 dark:text-red-200">
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Extract tags from any public YouTube video instantly</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Analyze competitor video tags and keywords</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Copy all tags with one click for easy use</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Download tags in TXT, CSV, or JSON format</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>100% free with unlimited extractions</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>No registration or login required</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
