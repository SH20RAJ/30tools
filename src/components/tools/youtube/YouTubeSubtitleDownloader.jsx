"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Download,
    FileText,
    Loader2,
    Copy,
    Clock,
    Languages,
    VideoIcon,
    FileJson,
    FileSpreadsheet,
    Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { downloadYouTubeSubtitles } from "@/lib/subtitles-actions";

export default function YouTubeSubtitleDownloader() {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [subtitleData, setSubtitleData] = useState(null);
    const [error, setError] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const languageOptions = [
        { value: "en", label: "English" },
        { value: "es", label: "Spanish" },
        { value: "fr", label: "French" },
        { value: "de", label: "German" },
        { value: "it", label: "Italian" },
        { value: "pt", label: "Portuguese" },
        { value: "ru", label: "Russian" },
        { value: "ja", label: "Japanese" },
        { value: "ko", label: "Korean" },
        { value: "zh", label: "Chinese" },
        { value: "hi", label: "Hindi" },
        { value: "ar", label: "Arabic" },
        { value: "nl", label: "Dutch" },
        { value: "tr", label: "Turkish" },
        { value: "pl", label: "Polish" },
        { value: "id", label: "Indonesian" },
        { value: "auto", label: "Auto-detect" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url.trim()) {
            toast.error("Please enter a YouTube URL");
            return;
        }

        setIsLoading(true);
        setError("");
        setSubtitleData(null);

        try {
            console.log("🎬 Starting subtitle download...");
            const result = await downloadYouTubeSubtitles(url, selectedLanguage);

            if (result.success) {
                setSubtitleData(result.data);
                toast.success("Subtitles downloaded successfully!");
                console.log("✅ Subtitles loaded:", result.data);
            } else {
                setError(
                    result.error || "Failed to download subtitles from YouTube video",
                );
                toast.error(result.error || "Failed to download subtitles");
            }
        } catch (err) {
            console.error("❌ Error downloading subtitles:", err);
            setError("An error occurred while downloading the subtitles");
            toast.error("An error occurred while downloading the subtitles");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = (content, filename, format) => {
        let mimeType = "text/plain";
        let fileExtension = ".txt";

        switch (format) {
            case "srt":
                mimeType = "text/srt";
                fileExtension = ".srt";
                break;
            case "vtt":
                mimeType = "text/vtt";
                fileExtension = ".vtt";
                break;
            case "json":
                mimeType = "application/json";
                fileExtension = ".json";
                break;
            case "csv":
                mimeType = "text/csv";
                fileExtension = ".csv";
                break;
            default:
                mimeType = "text/plain";
                fileExtension = ".txt";
        }

        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${filename}${fileExtension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        toast.success(`${format.toUpperCase()} file downloaded successfully!`);
    };

    const handleCopy = (content, format) => {
        navigator.clipboard
            .writeText(content)
            .then(() => {
                toast.success(`${format.toUpperCase()} content copied to clipboard!`);
            })
            .catch(() => {
                toast.error("Failed to copy to clipboard");
            });
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

    const getPreviewText = (content, maxLength = 500) => {
        if (!content) return "";
        return content.length > maxLength
            ? content.substring(0, maxLength) + "..."
            : content;
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                    <Sparkles className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <h1 className="text-4xl font-bold text-foreground dark:text-white">
                        Download Youtube Subtitles Easy and Free!
                    </h1>
                </div>
                <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
                    One of the fastest Youtube subtitle downloader application online. You
                    can download subtitles of any Youtube video in SRT, VTT or TXT formats
                    in seconds. It's fast and easy to use. You can save youtube subtitles
                    to your computer or to mobile phone (both iPhone and Android devices
                    supported).
                </p>
            </div>

            {/* Input Form */}
            <Card className="border-2 border-blue-100 dark:border-blue-900">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                        <VideoIcon className="h-6 w-6 text-blue-600" />
                        Get Subtitles
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <Input
                                    type="url"
                                    placeholder="Paste YouTube URL here (e.g., https://www.youtube.com/watch?v=...)"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="w-full h-12 text-base"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="w-full sm:w-52">
                                <Select
                                    value={selectedLanguage}
                                    onValueChange={setSelectedLanguage}
                                >
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {languageOptions.map((lang) => (
                                            <SelectItem key={lang.value} value={lang.value}>
                                                <div className="flex items-center gap-2">
                                                    <Languages className="h-4 w-4" />
                                                    {lang.label}
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full sm:w-auto h-12 px-8 bg-blue-600 hover:bg-blue-700"
                                size="lg"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Download className="mr-2 h-5 w-5" />
                                        Get Subtitles
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* Error Display */}
            {error && (
                <Card className="border-destructive/50 bg-destructive/10 dark:border-red-800 dark:bg-red-950/30">
                    <CardContent className="pt-6">
                        <p className="text-destructive dark:text-red-400 font-medium">
                            {error}
                        </p>
                    </CardContent>
                </Card>
            )}

            {/* Results */}
            {subtitleData && (
                <Card className="border-2 border-green-100 dark:border-green-900">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-green-600" />
                            Subtitle Results
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <Badge
                                variant="secondary"
                                className="flex items-center gap-1 px-3 py-1"
                            >
                                <Clock className="h-3 w-3" />
                                {formatDuration(subtitleData.duration)}
                            </Badge>
                            <Badge variant="secondary" className="px-3 py-1">
                                {subtitleData.segmentCount} segments
                            </Badge>
                            <Badge variant="secondary" className="px-3 py-1">
                                {subtitleData.wordCount} words
                            </Badge>
                            <Badge variant="secondary" className="px-3 py-1">
                                <Languages className="h-3 w-3 mr-1" />
                                {subtitleData.language}
                            </Badge>
                        </div>
                        {subtitleData.title && (
                            <p className="text-sm text-muted-foreground dark:text-gray-300 mt-2">
                                <strong>Video Title:</strong> {subtitleData.title}
                            </p>
                        )}
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="preview" className="w-full">
                            <TabsList className="grid w-full grid-cols-6 mb-4">
                                <TabsTrigger value="preview">Preview</TabsTrigger>
                                <TabsTrigger value="srt">SRT</TabsTrigger>
                                <TabsTrigger value="vtt">VTT</TabsTrigger>
                                <TabsTrigger value="json">JSON</TabsTrigger>
                                <TabsTrigger value="csv">CSV</TabsTrigger>
                                <TabsTrigger value="timestamps">Timestamps</TabsTrigger>
                            </TabsList>

                            <TabsContent value="preview" className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-lg">Plain Text Preview</h3>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleCopy(subtitleData.plainText, "text")}
                                        >
                                            <Copy className="mr-1 h-4 w-4" />
                                            Copy
                                        </Button>
                                        <Button
                                            variant="default"
                                            size="sm"
                                            onClick={() =>
                                                handleDownload(
                                                    subtitleData.plainText,
                                                    "subtitles",
                                                    "txt",
                                                )
                                            }
                                        >
                                            <Download className="mr-1 h-4 w-4" />
                                            Download TXT
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-h-96 overflow-y-auto border">
                                    <pre className="whitespace-pre-wrap text-sm">
                                        {getPreviewText(subtitleData.plainText, 2000)}
                                    </pre>
                                </div>
                            </TabsContent>

                            <TabsContent value="srt" className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-lg">SRT Format</h3>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleCopy(subtitleData.srtContent, "SRT")}
                                        >
                                            <Copy className="mr-1 h-4 w-4" />
                                            Copy
                                        </Button>
                                        <Button
                                            variant="default"
                                            size="sm"
                                            onClick={() =>
                                                handleDownload(
                                                    subtitleData.srtContent,
                                                    "subtitles",
                                                    "srt",
                                                )
                                            }
                                        >
                                            <Download className="mr-1 h-4 w-4" />
                                            Download SRT
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-h-96 overflow-y-auto border">
                                    <pre className="whitespace-pre-wrap text-sm">
                                        {getPreviewText(subtitleData.srtContent, 2000)}
                                    </pre>
                                </div>
                            </TabsContent>

                            <TabsContent value="vtt" className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-lg">VTT Format</h3>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleCopy(subtitleData.vttContent, "VTT")}
                                        >
                                            <Copy className="mr-1 h-4 w-4" />
                                            Copy
                                        </Button>
                                        <Button
                                            variant="default"
                                            size="sm"
                                            onClick={() =>
                                                handleDownload(
                                                    subtitleData.vttContent,
                                                    "subtitles",
                                                    "vtt",
                                                )
                                            }
                                        >
                                            <Download className="mr-1 h-4 w-4" />
                                            Download VTT
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-h-96 overflow-y-auto border">
                                    <pre className="whitespace-pre-wrap text-sm">
                                        {getPreviewText(subtitleData.vttContent, 2000)}
                                    </pre>
                                </div>
                            </TabsContent>

                            <TabsContent value="json" className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-lg">JSON Format</h3>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                handleCopy(subtitleData.jsonContent, "JSON")
                                            }
                                        >
                                            <Copy className="mr-1 h-4 w-4" />
                                            Copy
                                        </Button>
                                        <Button
                                            variant="default"
                                            size="sm"
                                            onClick={() =>
                                                handleDownload(
                                                    subtitleData.jsonContent,
                                                    "subtitles",
                                                    "json",
                                                )
                                            }
                                        >
                                            <FileJson className="mr-1 h-4 w-4" />
                                            Download JSON
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-h-96 overflow-y-auto border">
                                    <pre className="whitespace-pre-wrap text-sm">
                                        {getPreviewText(subtitleData.jsonContent, 2000)}
                                    </pre>
                                </div>
                            </TabsContent>

                            <TabsContent value="csv" className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-lg">CSV Format</h3>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleCopy(subtitleData.csvContent, "CSV")}
                                        >
                                            <Copy className="mr-1 h-4 w-4" />
                                            Copy
                                        </Button>
                                        <Button
                                            variant="default"
                                            size="sm"
                                            onClick={() =>
                                                handleDownload(
                                                    subtitleData.csvContent,
                                                    "subtitles",
                                                    "csv",
                                                )
                                            }
                                        >
                                            <FileSpreadsheet className="mr-1 h-4 w-4" />
                                            Download CSV
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-h-96 overflow-y-auto border">
                                    <pre className="whitespace-pre-wrap text-sm">
                                        {getPreviewText(subtitleData.csvContent, 2000)}
                                    </pre>
                                </div>
                            </TabsContent>

                            <TabsContent value="timestamps" className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-lg">Timestamped Text</h3>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                handleCopy(
                                                    subtitleData.timestampedText,
                                                    "timestamped text",
                                                )
                                            }
                                        >
                                            <Copy className="mr-1 h-4 w-4" />
                                            Copy
                                        </Button>
                                        <Button
                                            variant="default"
                                            size="sm"
                                            onClick={() =>
                                                handleDownload(
                                                    subtitleData.timestampedText,
                                                    "subtitles-timestamped",
                                                    "txt",
                                                )
                                            }
                                        >
                                            <Download className="mr-1 h-4 w-4" />
                                            Download
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-h-96 overflow-y-auto border">
                                    <pre className="whitespace-pre-wrap text-sm">
                                        {getPreviewText(subtitleData.timestampedText, 2000)}
                                    </pre>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            )}

            {/* Features Info */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-2 border-blue-100 dark:border-blue-900">
                <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-100">
                        Supported Formats:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm text-blue-800 dark:text-blue-200 mb-4">
                        <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Plain Text (.txt)
                        </div>
                        <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            SubRip (.srt)
                        </div>
                        <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            WebVTT (.vtt)
                        </div>
                        <div className="flex items-center gap-2">
                            <FileJson className="h-4 w-4" />
                            JSON (.json)
                        </div>
                        <div className="flex items-center gap-2">
                            <FileSpreadsheet className="h-4 w-4" />
                            CSV (.csv)
                        </div>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                        Download subtitles in your preferred format for editing, translation,
                        or integration with video editing software. Support for 100+
                        languages including bilingual subtitles for language learning.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
