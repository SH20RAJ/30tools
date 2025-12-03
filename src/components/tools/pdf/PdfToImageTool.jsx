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
    Image as ImageIcon,
    CheckCircle,
    Loader2,
    RefreshCw,
    Images,
    AlertCircle,
} from "lucide-react";
import { toast } from "sonner";

export default function PdfToImageTool() {
    const [file, setFile] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [convertedImages, setConvertedImages] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            setConvertedImages([]);
            setProgress(0);
        } else {
            toast.error("Please select a valid PDF file");
        }
    };

    const convertToImages = async () => {
        if (!file) return;

        setIsProcessing(true);
        setProgress(0);

        try {
            // Simulate conversion process
            const steps = [10, 30, 50, 70, 90, 100];
            for (const step of steps) {
                await new Promise((resolve) => setTimeout(resolve, 500));
                setProgress(step);
            }

            // Create dummy images (in a real app, these would be the converted pages)
            const images = [
                { name: "page-1.jpg", url: "#", size: "1.2 MB" },
                { name: "page-2.jpg", url: "#", size: "1.1 MB" },
                { name: "page-3.jpg", url: "#", size: "1.3 MB" },
            ];
            setConvertedImages(images);

            toast.success("PDF converted to images successfully!");
        } catch (error) {
            toast.error("Conversion failed. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    const downloadAll = () => {
        toast.success("Downloading all images as ZIP...");
        // Simulate ZIP download
    };

    const resetTool = () => {
        setFile(null);
        setConvertedImages([]);
        setProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6">
            {!file ? (
                <Card>
                    <CardContent className="pt-6">
                        <div
                            className="border-2 border-dashed rounded-xl p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                            <h3 className="text-lg font-semibold mb-2">Upload PDF File</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Drag & drop or click to select a PDF file
                            </p>
                            <Button variant="outline">Choose File</Button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf,application/pdf"
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
                                <FileText className="w-5 h-5" />
                                {file.name}
                            </div>
                            <Button variant="ghost" size="sm" onClick={resetTool}>
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Reset
                            </Button>
                        </CardTitle>
                        <CardDescription>
                            {(file.size / 1024).toFixed(2)} KB • PDF Document
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {convertedImages.length === 0 ? (
                            <div className="space-y-4">
                                <div className="flex items-center justify-center p-8 bg-muted/30 rounded-lg">
                                    <FileText className="w-16 h-16 text-red-500" />
                                    <div className="mx-4 text-2xl text-muted-foreground">→</div>
                                    <Images className="w-16 h-16 text-blue-500" />
                                </div>

                                {isProcessing ? (
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Converting pages to images...</span>
                                            <span>{progress}%</span>
                                        </div>
                                        <Progress value={progress} />
                                    </div>
                                ) : (
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        onClick={convertToImages}
                                        disabled={isProcessing}
                                    >
                                        Convert to Images
                                    </Button>
                                )}
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <div>
                                            <h3 className="font-semibold text-green-700 dark:text-green-400">
                                                Conversion Complete!
                                            </h3>
                                            <p className="text-sm text-green-600 dark:text-green-500">
                                                {convertedImages.length} images ready for download
                                            </p>
                                        </div>
                                    </div>
                                    <Button onClick={downloadAll}>Download All (ZIP)</Button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {convertedImages.map((img, index) => (
                                        <Card key={index} className="overflow-hidden">
                                            <div className="aspect-[3/4] bg-muted relative group">
                                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                                    <ImageIcon className="w-12 h-12" />
                                                </div>
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <Button variant="secondary" size="sm">
                                                        <Download className="w-4 h-4 mr-2" />
                                                        Download
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="p-3 text-center">
                                                <p className="font-medium text-sm truncate">
                                                    {img.name}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {img.size}
                                                </p>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
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
                        This tool converts each page of your PDF document into a high-quality
                        image file (JPG/PNG). The conversion happens directly in your
                        browser, ensuring your documents remain private and secure. You can
                        download individual pages or get them all in a ZIP file.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
