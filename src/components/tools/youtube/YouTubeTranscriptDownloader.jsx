"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  FileText,
  Loader2,
  Copy,
  Clock,
  Languages,
} from "lucide-react";
import { downloadYouTubeTranscript } from "@/lib/youtube-actions";

export default function YouTubeTranscriptDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transcriptData, setTranscriptData] = useState(null);
  const [error, setError] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    setIsLoading(true);
    setError("");
    setTranscriptData(null);

    try {
      const result = await downloadYouTubeTranscript(url, selectedLanguage);
      if (result.success) {
        setTranscriptData(result.data);
      } else {
        setError(
          result.error || "Failed to extract transcript from YouTube video",
        );
      }
    } catch (_err) {
      setError("An error occurred while extracting the transcript");
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
      case "txt":
      default:
        mimeType = "text/plain";
        fileExtension = ".txt";
        break;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}${fileExtension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    // You could add a toast notification here
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-2 border-border/20 shadow-lg">
        <CardHeader className="bg-background/20 dark:to-purple-950/20">
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            YouTube Transcript & Subtitle Downloader
          </CardTitle>
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
                className="bg-muted/500 hover:bg-primary text-white font-medium px-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Extracting...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2" />
                    Extract Transcript
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
            <div className="mt-6 space-y-4">
              <div className="bg-background/20 dark:to-emerald-950/20 border border-border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  {transcriptData.thumbnail && (
                    <img
                      src={transcriptData.thumbnail}
                      alt="Video thumbnail"
                      className="w-32 h-24 object-cover rounded-lg shadow-md"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-green-200">
                      {transcriptData.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge
                        variant="outline"
                        className="text-primary border-border"
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        Duration: {transcriptData.duration}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-primary border-border"
                      >
                        <Languages className="w-3 h-3 mr-1" />
                        Language: {transcriptData.language}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-primary border-border"
                      >
                        Words: {transcriptData.wordCount}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="srt">SRT Format</TabsTrigger>
                  <TabsTrigger value="vtt">VTT Format</TabsTrigger>
                  <TabsTrigger value="text">Plain Text</TabsTrigger>
                </TabsList>

                <TabsContent value="preview" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Transcript Preview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="max-h-96 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        {transcriptData.segments ? (
                          <div className="space-y-2">
                            {transcriptData.segments
                              .slice(0, 10)
                              .map((segment, index) => (
                                <div key={index} className="flex gap-3">
                                  <span className="text-primary font-mono text-sm">
                                    {formatTime(segment.start).split(",")[0]}
                                  </span>
                                  <span className="text-sm">
                                    {segment.text}
                                  </span>
                                </div>
                              ))}
                            {transcriptData.segments.length > 10 && (
                              <p className="text-muted-foreground text-sm">
                                ... and {transcriptData.segments.length - 10}{" "}
                                more segments
                              </p>
                            )}
                          </div>
                        ) : (
                          <p className="text-sm">
                            {transcriptData.text?.slice(0, 1000)}...
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          onClick={() => handleCopy(transcriptData.text)}
                          variant="outline"
                          size="sm"
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="srt" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        SRT Subtitle Format
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="max-h-96 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <pre className="text-sm whitespace-pre-wrap">
                          {formatSRT(transcriptData).slice(0, 1000)}...
                        </pre>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          onClick={() =>
                            handleDownload(
                              formatSRT(transcriptData),
                              `${transcriptData.title}.srt`,
                              "srt",
                            )
                          }
                          className="bg-muted/500 hover:bg-primary"
                          size="sm"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download SRT
                        </Button>
                        <Button
                          onClick={() => handleCopy(formatSRT(transcriptData))}
                          variant="outline"
                          size="sm"
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="vtt" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        VTT Subtitle Format
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="max-h-96 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <pre className="text-sm whitespace-pre-wrap">
                          {formatVTT(transcriptData).slice(0, 1000)}...
                        </pre>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          onClick={() =>
                            handleDownload(
                              formatVTT(transcriptData),
                              `${transcriptData.title}.vtt`,
                              "vtt",
                            )
                          }
                          className="bg-muted/500 hover:bg-primary"
                          size="sm"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download VTT
                        </Button>
                        <Button
                          onClick={() => handleCopy(formatVTT(transcriptData))}
                          variant="outline"
                          size="sm"
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="text" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Plain Text Format
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="max-h-96 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <p className="text-sm whitespace-pre-wrap">
                          {transcriptData.text?.slice(0, 1000)}...
                        </p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          onClick={() =>
                            handleDownload(
                              transcriptData.text,
                              `${transcriptData.title}.txt`,
                              "txt",
                            )
                          }
                          className="bg-muted/500 hover:bg-primary"
                          size="sm"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download TXT
                        </Button>
                        <Button
                          onClick={() => handleCopy(transcriptData.text)}
                          variant="outline"
                          size="sm"
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Transcript extracted successfully! Choose your preferred
                  format above to download or copy the content.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              Extract transcripts and subtitles from YouTube videos for
              research, accessibility, and content creation. Supports
              auto-generated and manual captions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
