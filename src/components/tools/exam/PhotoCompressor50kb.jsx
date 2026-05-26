"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload, Download, RefreshCw, Check, AlertCircle, FileImage, Trash2, Shield, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function PhotoCompressor50kb() {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [originalInfo, setOriginalInfo] = useState(null);
    
    // Compressor Settings
    const [maxKb, setMaxKb] = useState(50);
    const [maxResolution, setMaxResolution] = useState("800"); // "600", "800", "1200", "original"
    
    // Processing state
    const [processing, setProcessing] = useState(false);
    const [compressedUrl, setCompressedUrl] = useState("");
    const [compressedSize, setCompressedSize] = useState(0);
    const [compressedWidth, setCompressedWidth] = useState(0);
    const [compressedHeight, setCompressedHeight] = useState(0);
    
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        if (!file.type.startsWith("image/")) {
            toast.error("Please upload a valid image file.");
            return;
        }
        
        setOriginalInfo({
            name: file.name,
            sizeKb: (file.size / 1024).toFixed(1),
            type: file.type
        });

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                setImage(img);
                setPreviewUrl(event.target.result);
                // Auto compress
                setTimeout(() => compressPhoto(img), 100);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    const compressPhoto = (activeImage = image) => {
        if (!activeImage) return;
        setProcessing(true);
        setCompressedUrl("");
        
        setTimeout(() => {
            try {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                
                // Calculate dimensions based on maxResolution constraint
                let targetWidth = activeImage.width;
                let targetHeight = activeImage.height;
                
                if (maxResolution !== "original") {
                    const maxDim = parseInt(maxResolution);
                    if (activeImage.width > maxDim || activeImage.height > maxDim) {
                        if (activeImage.width > activeImage.height) {
                            targetWidth = maxDim;
                            targetHeight = Math.round((activeImage.height * maxDim) / activeImage.width);
                        } else {
                            targetHeight = maxDim;
                            targetWidth = Math.round((activeImage.width * maxDim) / activeImage.height);
                        }
                    }
                }
                
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                ctx.drawImage(activeImage, 0, 0, targetWidth, targetHeight);
                
                // Binary search compression
                let quality = 0.9;
                let dataUrl = "";
                let sizeBytes = 0;
                let sizeKb = 0;
                let minQ = 0.01;
                let maxQ = 0.99;
                
                for (let i = 0; i < 12; i++) {
                    dataUrl = canvas.toDataURL("image/jpeg", quality);
                    sizeBytes = Math.round((dataUrl.split(",")[1].length * 3) / 4);
                    sizeKb = sizeBytes / 1024;
                    
                    if (sizeKb > maxKb) {
                        maxQ = quality;
                        quality = (minQ + quality) / 2;
                    } else if (sizeKb < maxKb - 8 && quality < 0.95) {
                        minQ = quality;
                        quality = (maxQ + quality) / 2;
                    } else {
                        break;
                    }
                }
                
                setCompressedUrl(dataUrl);
                setCompressedSize(sizeKb.toFixed(1));
                setCompressedWidth(targetWidth);
                setCompressedHeight(targetHeight);
                toast.success("Photo compressed successfully!");
            } catch (err) {
                console.error(err);
                toast.error("Failed to compress image.");
            } finally {
                setProcessing(false);
            }
        }, 100);
    };

    // Re-run compression when settings change
    useEffect(() => {
        if (image) {
            compressPhoto();
        }
    }, [image, maxKb, maxResolution]);

    const handleDownload = () => {
        if (!compressedUrl) return;
        const link = document.createElement("a");
        link.download = `photo_compressed_${maxKb}kb.jpg`;
        link.href = compressedUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleClear = () => {
        setImage(null);
        setPreviewUrl("");
        setCompressedUrl("");
        setOriginalInfo(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Control Panel */}
                <div className="md:col-span-7 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            
                            {/* File Upload Zone */}
                            {!previewUrl ? (
                                <div
                                    onClick={triggerFileSelect}
                                    className="border-2 border-dashed border-border/60 hover:border-primary/50 transition-all p-12 text-center cursor-pointer space-y-4 hover:bg-muted/10 group"
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        className="hidden"
                                    />
                                    <div className="p-4 bg-primary/10 text-primary rounded-full w-fit mx-auto group-hover:scale-110 transition-transform">
                                        <Upload className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-bold text-lg">Upload Photo to Compress</p>
                                        <p className="text-sm text-muted-foreground">Select a picture to compress to under {maxKb}KB</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative border border-border/40 bg-muted/10 p-4 rounded-md">
                                        <img
                                            src={previewUrl}
                                            alt="Preview"
                                            className="max-h-[300px] mx-auto object-contain shadow-sm border border-border/20"
                                        />
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={handleClear}
                                            className="absolute top-2 right-2 rounded-full h-8 w-8 shadow-md"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    {originalInfo && (
                                        <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground bg-muted/20 px-3 py-2 border border-border/10 rounded-sm">
                                            <span>Original Size: <strong>{originalInfo.sizeKb} KB</strong></span>
                                            <span>File Type: <strong>{originalInfo.type.split("/")[1].toUpperCase()}</strong></span>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Configuration Panel */}
                            <div className="space-y-4 pt-4 border-t border-border/40">
                                <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-primary">
                                    <Settings className="h-4 w-4" />
                                    <span>Compression Options</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="max-kb-input">Max KB Limit</Label>
                                        <Input
                                            id="max-kb-input"
                                            type="number"
                                            value={maxKb}
                                            onChange={(e) => setMaxKb(parseInt(e.target.value) || 0)}
                                            className="h-10 text-base"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="max-res-select">Image Resolution Resize</Label>
                                        <Select value={maxResolution} onValueChange={setMaxResolution}>
                                            <SelectTrigger id="max-res-select" className="border-primary/10 h-10">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="original">Original Dimensions</SelectItem>
                                                <SelectItem value="1200">Max 1200px (High Quality)</SelectItem>
                                                <SelectItem value="800">Max 800px (Recommended)</SelectItem>
                                                <SelectItem value="600">Max 600px (Compact)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Shield className="h-3.5 w-3.5 text-emerald-500" />
                                        Processed entirely in your browser (private)
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Output Panel */}
                <div className="md:col-span-5 space-y-6">
                    <Card className="border-2 border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl min-h-[300px] flex flex-col justify-between">
                        <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-4 text-center">
                                <h3 className="text-xl font-bold border-b border-border/20 pb-2">Compressed Output</h3>
                                
                                {processing && (
                                    <div className="h-64 flex flex-col items-center justify-center space-y-4">
                                        <RefreshCw className="h-12 w-12 text-primary animate-spin" />
                                        <p className="text-muted-foreground text-sm">Optimizing image size...</p>
                                    </div>
                                )}

                                {!processing && !compressedUrl && (
                                    <div className="h-64 flex flex-col items-center justify-center border border-dashed border-border/40 rounded-md p-6 bg-muted/5">
                                        <FileImage className="h-12 w-12 text-muted-foreground/40 mb-3" />
                                        <p className="text-sm text-muted-foreground">Upload a photo to see the compressed result.</p>
                                    </div>
                                )}

                                {!processing && compressedUrl && (
                                    <div className="space-y-4">
                                        <div className="border border-primary/20 bg-muted/10 p-4 rounded-md">
                                            <img
                                                src={compressedUrl}
                                                alt="Compressed output"
                                                className="max-h-[260px] mx-auto object-contain border border-border/40 shadow-md"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-sm bg-primary/5 border border-primary/10 rounded-sm py-2 px-3 text-left">
                                            <div>
                                                <span className="text-xs text-muted-foreground block">Dimensions</span>
                                                <span className="font-bold font-mono">{compressedWidth} x {compressedHeight} px</span>
                                            </div>
                                            <div>
                                                <span className="text-xs text-muted-foreground block">File Size</span>
                                                <span className={`font-bold font-mono ${compressedSize > maxKb ? 'text-red-500' : 'text-emerald-500'}`}>
                                                    {compressedSize} KB
                                                </span>
                                            </div>
                                        </div>
                                        {compressedSize <= maxKb && (
                                            <div className="flex items-center gap-1.5 justify-center text-xs text-emerald-500 font-semibold bg-emerald-500/10 py-1.5 px-3 border border-emerald-500/20">
                                                <Check className="h-4 w-4" /> Size compliant (under {maxKb}KB)
                                            </div>
                                        )}
                                        {compressedSize > maxKb && (
                                            <div className="flex items-center gap-1.5 justify-center text-xs text-red-500 font-semibold bg-red-500/10 py-1.5 px-3 border border-red-500/20">
                                                <AlertCircle className="h-4 w-4" /> Unable to compress under {maxKb}KB. Try a smaller Resolution Resize.
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 pt-4 border-t border-border/20">
                                <Button
                                    type="button"
                                    onClick={handleDownload}
                                    disabled={!compressedUrl || processing}
                                    className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                                >
                                    <Download className="h-5 w-5" />
                                    Download Compressed Image
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>

            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}
