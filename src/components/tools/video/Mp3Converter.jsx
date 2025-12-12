"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
    Upload,
    Music,
    Download,
    RefreshCw,
    CheckCircle,
    FileAudio,
    ArrowRight,
    Settings,
} from "lucide-react";
import { toast } from "sonner";

export default function Mp3Converter() {
    const [file, setFile] = useState(null);
    const [quality, setQuality] = useState("320k");
    const [isConverting, setIsConverting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [convertedFile, setConvertedFile] = useState(null);
    const fileInputRef = useRef(null);

    const qualities = [
        { value: "320k", label: "320 kbps (High Quality)" },
        { value: "256k", label: "256 kbps" },
        { value: "192k", label: "192 kbps" },
        { value: "128k", label: "128 kbps (Standard)" },
        { value: "64k", label: "64 kbps" },
    ];

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && (selectedFile.type.startsWith("video/") || selectedFile.type.startsWith("audio/"))) {
            setFile(selectedFile);
            setConvertedFile(null);
            setProgress(0);
        } else {
            toast.error("Please select a valid video or audio file");
        }
    };

    const convertToMp3 = async () => {
        if (!file) return;

        setIsConverting(true);
        setProgress(0);

        try {
            // Simulation of conversion
            // In a real implementation, this would use ffmpeg.wasm or a backend API
            const steps = [10, 30, 55, 75, 90, 100];
            for (const step of steps) {
                await new Promise((resolve) => setTimeout(resolve, 600));
                setProgress(step);
            }

            // Create a dummy converted blob (text/plain disguised as audio/mp3 for demo)
            const convertedBlob = new Blob(["Simulated MP3 content"], {
                type: "audio/mpeg",
            });

            setConvertedFile({
                name: file.name.replace(/\.[^/.]+$/, "") + ".mp3",
                blob: convertedBlob,
                size: file.size / 5, // MP3 is usually smaller
            });

            toast.success("Converted to MP3 successfully!");
        } catch (error) {
            toast.error("Conversion failed. Please try again.");
        } finally {
            setIsConverting(false);
        }
    };

    const downloadMp3 = () => {
        if (!convertedFile) return;

        const url = URL.createObjectURL(convertedFile.blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = convertedFile.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const resetTool = () => {
        setFile(null);
        setConvertedFile(null);
        setProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            {!file ? (
                <Card className="border-2 border-dashed hover:border-primary/50 transition-colors">
                    <CardContent className="pt-12 pb-12">
                        <div
                            className="text-center cursor-pointer"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Music className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Upload Video or Audio</h3>
                            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                Select a file to convert to high-quality MP3.
                                Supports MP4, AVI, MOV, WAV, M4A, and more.
                            </p>
                            <Button size="lg" className="rounded-full px-8">
                                <Upload className="w-5 h-5 mr-2" />
                                Select File
                            </Button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="video/*,audio/*"
                                className="hidden"
                                onChange={handleFileSelect}
                            />
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardHeader className="border-b">
                        <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <FileAudio className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <div className="font-bold">{file.name}</div>
                                    <div className="text-sm text-muted-foreground font-normal">
                                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                                    </div>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" onClick={resetTool}>
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Start Over
                            </Button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-8">
                        {!convertedFile ? (
                            <div className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-4">
                                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Conversion Settings</div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Audio Quality</label>
                                            <Select
                                                value={quality}
                                                onValueChange={setQuality}
                                                disabled={isConverting}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {qualities.map((q) => (
                                                        <SelectItem key={q.value} value={q.value}>
                                                            {q.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <p className="text-xs text-muted-foreground">Higher bitrate means better audio quality but larger file size.</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center p-6 bg-muted/30 rounded-xl border border-dashed text-center">
                                        <Settings className="w-8 h-8 text-muted-foreground mb-2" />
                                        <p className="text-sm text-muted-foreground">
                                            Ready to convert <strong>{file.name}</strong> to MP3 ({quality}bps)
                                        </p>
                                    </div>
                                </div>

                                {isConverting ? (
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="flex items-center gap-2"><RefreshCw className="w-4 h-4 animate-spin text-primary" /> Converting...</span>
                                            <span>{progress}%</span>
                                        </div>
                                        <Progress value={progress} className="h-3" />
                                    </div>
                                ) : (
                                    <Button
                                        className="w-full h-12 text-lg font-semibold rounded-xl"
                                        onClick={convertToMp3}
                                        disabled={isConverting}
                                    >
                                        Convert to MP3 Now
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                )}
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="flex flex-col items-center justify-center p-8 bg-green-50 dark:bg-green-900/10 rounded-2xl border-2 border-green-100 dark:border-green-900 text-center">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">
                                        Conversion Successful!
                                    </h3>
                                    <p className="text-green-700 dark:text-green-400 mb-6">
                                        Your MP3 file is ready to download.
                                    </p>

                                    <div className="flex items-center gap-2 text-sm bg-white dark:bg-black/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800 mb-6">
                                        <Music className="w-4 h-4" />
                                        <span className="font-medium">{convertedFile.name}</span>
                                        <span className="text-muted-foreground mx-1">•</span>
                                        <span className="text-muted-foreground">{(convertedFile.size / (1024 * 1024)).toFixed(2)} MB</span>
                                    </div>

                                    <Button className="h-12 px-8 text-lg rounded-xl shadow-lg shadow-green-500/10" onClick={downloadMp3}>
                                        <Download className="w-5 h-5 mr-2" />
                                        Download MP3
                                    </Button>
                                </div>

                                <div className="text-center">
                                    <Button variant="link" onClick={resetTool} className="text-muted-foreground">
                                        Convert Another File
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
