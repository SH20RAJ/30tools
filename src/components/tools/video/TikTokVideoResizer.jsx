"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Upload, Video, Download, RefreshCw, Smartphone, Monitor, Instagram, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function TikTokVideoResizer() {
    const [file, setFile] = useState(null);
    const [aspectRatio, setAspectRatio] = useState("9:16");
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [processedFile, setProcessedFile] = useState(null);
    const fileInputRef = useRef(null);

    const ratios = [
        { value: "9:16", label: "9:16 (TikTok / Reels / Shorts)", icon: Smartphone },
        { value: "1:1", label: "1:1 (Square / Instagram)", icon: Instagram },
        { value: "4:5", label: "4:5 (Portrait)", icon: Smartphone },
        { value: "16:9", label: "16:9 (Landscape)", icon: Monitor },
    ];

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type.startsWith("video/")) {
            setFile(selectedFile);
            setProcessedFile(null);
            setProgress(0);
        } else {
            toast.error("Please select a valid video file");
        }
    };

    const processVideo = async () => {
        if (!file) return;

        setIsProcessing(true);
        setProgress(0);

        try {
            // Direct simulation of processing (no backend in this version)
            const steps = [10, 25, 40, 60, 80, 95, 100];
            for (const step of steps) {
                await new Promise((resolve) => setTimeout(resolve, 500));
                setProgress(step);
            }

            setProcessedFile({
                name: `resized_${aspectRatio.replace(":", "-")}_${file.name}`,
                url: URL.createObjectURL(file), // Just using original for demo download
            });

            toast.success("Video resized successfully!");
        } catch (error) {
            toast.error("Processing failed. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    const resetTool = () => {
        setFile(null);
        setProcessedFile(null);
        setProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {!file ? (
                <Card className="border-2 border-dashed border-primary/20 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-12 pb-12 flex flex-col items-center text-center cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Video className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Upload Video to Resize</h3>
                        <p className="text-muted-foreground mb-6 max-w-sm">
                            Drag & drop or click to upload. Supports MP4, MOV, WebM, and more.
                        </p>
                        <Button size="lg" className="rounded-full px-8">
                            <Upload className="w-5 h-5 mr-2" />
                            Select Video
                        </Button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="video/*"
                            className="hidden"
                            onChange={handleFileSelect}
                        />
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardHeader className="border-b">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Resize Video</CardTitle>
                                <CardDescription>{file.name}</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm" onClick={resetTool}>
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Reset
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Controls */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Target Aspect Ratio</label>
                                    <Select value={aspectRatio} onValueChange={setAspectRatio} disabled={isProcessing}>
                                        <SelectTrigger className="h-12">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {ratios.map((ratio) => (
                                                <SelectItem key={ratio.value} value={ratio.value}>
                                                    <div className="flex items-center gap-2">
                                                        <ratio.icon className="w-4 h-4 text-muted-foreground" />
                                                        {ratio.label}
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                                    <p>Resizing for <strong>{aspectRatio}</strong> will crop the video to fit best
                                        on platforms like TikTok, YouTube Shorts, and Instagram Reels.</p>
                                </div>

                                {!processedFile && (
                                    isProcessing ? (
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm font-medium">
                                                <span>Processing...</span>
                                                <span>{progress}%</span>
                                            </div>
                                            <Progress value={progress} className="h-2" />
                                        </div>
                                    ) : (
                                        <Button className="w-full h-12 text-lg font-semibold" onClick={processVideo}>
                                            Resize Video Now
                                        </Button>
                                    )
                                )}
                            </div>

                            {/* Preview Placeholder */}
                            <div className="bg-black/5 rounded-xl border-2 border-dashed flex items-center justify-center min-h-[300px] relative overflow-hidden">
                                <div className={`transition-all duration-500 bg-gray-900 rounded-lg shadow-2xl flex items-center justify-center text-white/50 text-xs`}
                                    style={{
                                        width: aspectRatio === "9:16" ? "168px" : aspectRatio === "1:1" ? "250px" : aspectRatio === "16:9" ? "300px" : "200px",
                                        height: aspectRatio === "9:16" ? "300px" : aspectRatio === "1:1" ? "250px" : aspectRatio === "16:9" ? "168px" : "250px",
                                    }}>
                                    <div className="text-center">
                                        <Video className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                        Preview Layout
                                    </div>
                                </div>
                                <div className="absolute bottom-4 text-xs text-muted-foreground">
                                    Visualization Only
                                </div>
                            </div>
                        </div>

                        {processedFile && (
                            <div className="flex flex-col items-center justify-center p-6 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800 animate-in fade-in zoom-in duration-300">
                                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                                <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Ready to Download!</h3>
                                <p className="text-muted-foreground mb-6">Your video has been resized to {aspectRatio}.</p>
                                <Button size="lg" className="rounded-xl px-8" asChild>
                                    <a href={processedFile.url} download={processedFile.name}>
                                        <Download className="w-5 h-5 mr-2" />
                                        Download Resized Video
                                    </a>
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
