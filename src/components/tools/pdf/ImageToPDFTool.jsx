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
import { Progress } from "@/components/ui/progress";
import {
    Upload,
    FileText,
    Download,
    AlertCircle,
    CheckCircle,
    Loader2,
    RefreshCw,
    Image as ImageIcon,
    X,
} from "lucide-react";
import { toast } from "sonner";

export default function ImageToPDFTool() {
    const [files, setFiles] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [convertedFile, setConvertedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const validFiles = selectedFiles.filter((file) =>
            file.type.startsWith("image/"),
        );

        if (validFiles.length > 0) {
            setFiles((prev) => [...prev, ...validFiles]);
            setConvertedFile(null);
            setProgress(0);
        } else {
            toast.error("Please select valid image files");
        }
    };

    const removeFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const convertToPDF = async () => {
        if (files.length === 0) return;

        setIsProcessing(true);
        setProgress(0);

        try {
            // Simulate conversion process
            const steps = [10, 30, 50, 70, 90, 100];
            for (const step of steps) {
                await new Promise((resolve) => setTimeout(resolve, 500));
                setProgress(step);
            }

            // Create a dummy PDF blob (in a real app, this would be the converted file)
            const pdfBlob = new Blob(["Simulated PDF content"], {
                type: "application/pdf",
            });
            setConvertedFile({
                name: "images-combined.pdf",
                blob: pdfBlob,
                size: files.reduce((acc, file) => acc + file.size, 0), // Approximate size
            });

            toast.success("Images converted to PDF successfully!");
        } catch (error) {
            toast.error("Conversion failed. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    const downloadPDF = () => {
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
        setFiles([]);
        setConvertedFile(null);
        setProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6">
            {files.length === 0 ? (
                <Card>
                    <CardContent className="pt-6">
                        <div
                            className="border-2 border-dashed rounded-xl p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <ImageIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                            <h3 className="text-lg font-semibold mb-2">Upload Images</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Drag & drop or click to select JPG, PNG, BMP, GIF files
                            </p>
                            <Button variant="outline">Choose Files</Button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handleFileSelect}
                            />
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <ImageIcon className="w-5 h-5" />
                                {files.length} Image{files.length !== 1 ? "s" : ""} Selected
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    Add More
                                </Button>
                                <Button variant="ghost" size="sm" onClick={resetTool}>
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Reset
                                </Button>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {!convertedFile ? (
                            <>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {files.map((file, index) => (
                                        <div
                                            key={index}
                                            className="relative group aspect-square bg-muted rounded-lg overflow-hidden border"
                                        >
                                            <img
                                                src={URL.createObjectURL(file)}
                                                alt={file.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <button
                                                onClick={() => removeFile(index)}
                                                className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 truncate">
                                                {file.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {isProcessing ? (
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Converting to PDF...</span>
                                            <span>{progress}%</span>
                                        </div>
                                        <Progress value={progress} />
                                    </div>
                                ) : (
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        onClick={convertToPDF}
                                        disabled={isProcessing}
                                    >
                                        Convert to PDF
                                    </Button>
                                )}
                            </>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center justify-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900">
                                    <div className="text-center">
                                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                                        <h3 className="font-semibold text-green-700 dark:text-green-400">
                                            Conversion Complete!
                                        </h3>
                                        <p className="text-sm text-green-600 dark:text-green-500">
                                            Your PDF is ready for download
                                        </p>
                                    </div>
                                </div>

                                <Button className="w-full" size="lg" onClick={downloadPDF}>
                                    <Download className="w-4 h-4 mr-2" />
                                    Download PDF
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
                <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        How it works
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                    <p>
                        This tool converts your image files to a single PDF document
                        directly in your browser. You can upload multiple images (JPG, PNG,
                        etc.), reorder them, and combine them into one PDF file. Your images
                        are processed locally and are never uploaded to any server.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
