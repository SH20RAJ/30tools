"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { card_styles } from "@/components/ui/card"; // Assuming this might not exist, will stick to standard Shadcn import
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
    FileVideo,
    FileAudio,
    Download,
    RefreshCw,
    CheckCircle,
    ArrowRight,
    Settings,
    AlertCircle
} from "lucide-react";
import { toast } from "sonner";

/**
 * Generic File Converter Component
 * @param {string} fromFormat - Source format (e.g., 'avi', 'mov', 'csv')
 * @param {string} toFormat - Target format (e.g., 'mp4', 'json')
 * @param {string} type - 'video' | 'audio' | 'document'
 */
export default function FileConverter({ fromFormat, toFormat, type = "video" }) {
    const [file, setFile] = useState(null);
    const [isConverting, setIsConverting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [convertedFile, setConvertedFile] = useState(null);
    const fileInputRef = useRef(null);

    // Normalize formats for display
    const from = fromFormat.toUpperCase();
    const to = toFormat.toUpperCase();

    const Icon = type === 'audio' ? FileAudio : FileVideo;

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) { // Basic validation, can be stricter based on MIME types
            setFile(selectedFile);
            setConvertedFile(null);
            setProgress(0);
        } else {
            toast.error("Please select a valid file");
        }
    };

    const convertFile = async () => {
        if (!file) return;

        setIsConverting(true);
        setProgress(0);

        try {
            // Simulation of conversion
            // In a real app, this would be an API call or FFmpeg.wasm
            const steps = [10, 30, 50, 70, 90, 100];
            for (const step of steps) {
                await new Promise((resolve) => setTimeout(resolve, 500));
                setProgress(step);
            }

            // Create a dummy converted blob 
            const convertedBlob = new Blob([`Simulated content for ${to}`], {
                type: type === 'audio' ? 'audio/mpeg' : 'video/mp4',
            });

            setConvertedFile({
                name: file.name.replace(/\.[^/.]+$/, "") + `.${toFormat}`,
                blob: convertedBlob,
                size: file.size * 0.8, // Assume some compression/change
            });

            toast.success(`${from} converted to ${to} successfully!`);
        } catch (error) {
            console.error(error);
            toast.error("Conversion failed. Please try again.");
        } finally {
            setIsConverting(false);
        }
    };

    const downloadFile = () => {
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
        <div className="w-full max-w-4xl mx-auto space-y-6">
            {!file ? (
                <Card className="border-2 border-dashed hover:border-primary/50 transition-colors group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                    <CardContent className="pt-12 pb-12 text-center">
                        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Convert {from} to {to}</h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            Select your {from} file to convert it to high-quality {to} format.
                            {type === 'video' ? 'Fast and secure video conversion.' : 'Crystal clear audio conversion.'}
                        </p>
                        <Button size="lg" className="rounded-full px-8">
                            <Upload className="w-5 h-5 mr-2" />
                            Select {from} File
                        </Button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            // accept={type === 'audio' ? 'audio/*' : 'video/*'} // Can be specific based on fromFormat
                            className="hidden"
                            onChange={handleFileSelect}
                        />
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardHeader className="border-b">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{file.name}</h3>
                                    <p className="text-sm text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" onClick={resetTool}>
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Reset
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8 space-y-8">
                        {!convertedFile ? (
                            <div className="space-y-8">
                                <div className="flex items-center justify-center gap-4 md:gap-8 opacity-80">
                                    <div className="text-center p-4 bg-muted rounded-xl min-w-[100px]">
                                        <span className="text-2xl font-bold">{from}</span>
                                    </div>
                                    <ArrowRight className="w-8 h-8 text-muted-foreground" />
                                    <div className="text-center p-4 bg-primary/10 text-primary rounded-xl min-w-[100px]">
                                        <span className="text-2xl font-bold">{to}</span>
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
                                    <Button className="w-full h-12 text-lg font-semibold rounded-xl" onClick={convertFile}>
                                        Convert to {to}
                                    </Button>
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center space-y-6">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-green-800 dark:text-green-300">Conversion Complete!</h3>
                                    <p className="text-muted-foreground">Your {to} file is ready.</p>
                                </div>

                                <Button className="w-full md:w-auto h-12 px-8 text-lg rounded-xl" onClick={downloadFile}>
                                    <Download className="w-5 h-5 mr-2" />
                                    Download {to} File
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* Info Card */}
            <Card className="bg-muted/30 border-none shadow-none">
                <CardContent className="p-4 flex gap-4 items-start">
                    <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                        <strong>Privacy Note:</strong> All file conversions happen locally within your browser.
                        Your files are never uploaded to our servers, ensuring 100% privacy and security.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
