"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    Play,
    Share2,
    Code2,
    ExternalLink,
    Copy,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export function SimpleTeraboxPlayer() {
    const [url, setUrl] = useState("");
    const [embedId, setEmbedId] = useState<string | null>(null);
    const [error, setError] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    // Sample video URL for testing
    const SAMPLE_URL = "https://teraboxapp.com/s/1EWkWY66FhZKS2WfxwBgd0Q";

    const handlePlay = () => {
        setError("");
        setEmbedId(null);

        if (!url) {
            setError("Please enter a valid Terabox URL");
            return;
        }

        try {
            // Regex handles /s/ID and /share/link?surl=ID patterns
            const match =
                url.match(/\/s\/([a-zA-Z0-9_-]+)/) ||
                url.match(/surl=([a-zA-Z0-9_-]+)/);

            if (match && match[1]) {
                setEmbedId(match[1]);
            } else {
                // Simple heuristic: if it looks like an ID (alphanumeric, long enough), try using it directly
                // Otherwise, error out
                if (/^[a-zA-Z0-9_-]{10,}$/.test(url)) {
                    setEmbedId(url);
                } else {
                    setError(
                        "Could not identify a valid video ID. Please use a full Terabox share link."
                    );
                }
            }
        } catch (err) {
            setError("An error occurred while processing the URL.");
        }
    };

    const handleSample = () => {
        setUrl(SAMPLE_URL);
        // Auto play after setting url (need useEffect or just call logic directly)
        // For simplicity, just set URL and let user click Watch, or extract ID here
        const match = SAMPLE_URL.match(/\/s\/([a-zA-Z0-9_-]+)/);
        if (match) setEmbedId(match[1]);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setIsCopied(true);
        toast.success("Link copied to clipboard");
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handleNewTab = () => {
        if (!embedId) return;
        window.open(`https://terabox.beer/watch/${embedId}`, "_blank");
    };

    const getEmbedCode = () => {
        if (!embedId) return "";
        return `<iframe src="https://terabox.beer/watch/${embedId}" width="100%" height="480" frameborder="0" allowfullscreen></iframe>`;
    };

    const copyEmbedCode = () => {
        navigator.clipboard.writeText(getEmbedCode());
        toast.success("Embed code copied!");
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Play className="w-6 h-6 text-primary" />
                        Play Terabox Video
                    </CardTitle>
                    <CardDescription className="text-base">
                        Enter your Terabox URL below to watch, download, or embed the video
                        instantly.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-1">
                                <Input
                                    placeholder="Paste Terabox link here (e.g., https://terabox.com/s/...)"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="h-12 text-base pl-4 pr-10 border-primary/20 focus:border-primary transition-all"
                                />
                            </div>
                            <Button
                                onClick={handlePlay}
                                size="lg"
                                className="min-w-[120px] font-semibold text-lg shadow-lg shadow-primary/20"
                            >
                                <Play className="mr-2 h-5 w-5 fill-current" /> Watch
                            </Button>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="opacity-70">Quick Actions:</span>
                            <Button variant="outline" size="sm" onClick={handleSample} className="h-8 gap-1.5 hover:bg-primary/10 hover:text-primary transition-colors border-dashed">
                                <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                                Try Sample Video
                            </Button>
                        </div>
                    </div>

                    {error && (
                        <div className="p-4 rounded-lg bg-destructive/10 text-destructive border border-destructive/20 flex items-center">
                            <span className="mr-2">⚠️</span> {error}
                        </div>
                    )}
                </CardContent>
            </Card>

            {embedId && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="overflow-hidden border-0 shadow-2xl bg-black ring-1 ring-white/10">
                        <CardContent className="p-0">
                            <div className="aspect-video w-full bg-black relative group">
                                <iframe
                                    src={`https://terabox.beer/watch/${embedId}`}
                                    className="w-full h-full absolute top-0 left-0"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    title="Terabox Video Player"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Player Controls / Sharing */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Button
                            variant="secondary"
                            className="h-12 gap-2 text-base"
                            onClick={handleNewTab}
                        >
                            <ExternalLink className="w-4 h-4" />
                            Open in New Tab
                        </Button>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="secondary" className="h-12 gap-2 text-base">
                                    <Code2 className="w-4 h-4" />
                                    Embed Video
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Embed Video</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4 pt-2">
                                    <div className="p-4 bg-muted rounded-md font-mono text-xs break-all border overflow-hidden">
                                        {getEmbedCode()}
                                    </div>
                                    <Button onClick={copyEmbedCode} className="w-full gap-2">
                                        <Copy className="w-4 h-4" /> Copy Embed Code
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>

                        <Button
                            variant="secondary"
                            className="h-12 gap-2 text-base"
                            onClick={handleCopy}
                        >
                            {isCopied ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                            ) : (
                                <Share2 className="w-4 h-4" />
                            )}
                            {isCopied ? "Link Copied!" : "Share Link"}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
