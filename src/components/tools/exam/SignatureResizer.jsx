"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload, Download, RefreshCw, Sliders, Check, AlertCircle, FileImage, Trash2, Shield, Eye, Settings2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function SignatureResizer() {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [originalInfo, setOriginalInfo] = useState(null);
    
    // Resize settings
    const [width, setWidth] = useState(350);
    const [height, setHeight] = useState(150);
    const [maxKb, setMaxKb] = useState(20);
    
    // Scanned image adjustment filters
    const [contrast, setContrast] = useState(1.4); // 1.0 is default, higher contrast cleans background
    const [brightness, setBrightness] = useState(1.1); // slightly brighter to whiten paper background
    const [monochrome, setMonochrome] = useState(false); // force pure black and white thresholding
    const [threshold, setThreshold] = useState(128); // threshold level for monochrome

    // Processing state
    const [processing, setProcessing] = useState(false);
    const [resizedUrl, setResizedUrl] = useState("");
    const [resizedSize, setResizedSize] = useState(0);
    
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
                // Auto process
                setTimeout(() => processSignature(img), 100);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    const processSignature = (activeImage = image) => {
        if (!activeImage) return;
        setProcessing(true);
        setResizedUrl("");
        
        setTimeout(() => {
            try {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                
                canvas.width = width;
                canvas.height = height;
                
                // Draw image with simple letterbox/fit or aspect fill
                // For signature, center crop and fill is usually good if they cropped it close, but standard fit aspect ratio is safer.
                const targetRatio = width / height;
                const imgRatio = activeImage.width / activeImage.height;
                
                let drawW = width;
                let drawH = height;
                let drawX = 0;
                let drawY = 0;
                
                if (imgRatio > targetRatio) {
                    drawH = width / imgRatio;
                    drawY = (height - drawH) / 2;
                } else {
                    drawW = height * imgRatio;
                    drawX = (width - drawW) / 2;
                }
                
                // Draw background as pure white first
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 0, width, height);
                
                // Draw signature image
                ctx.drawImage(activeImage, drawX, drawY, drawW, drawH);
                
                // Get pixels to apply brightness/contrast/monochrome filters
                const imgData = ctx.getImageData(0, 0, width, height);
                const data = imgData.data;
                
                for (let i = 0; i < data.length; i += 4) {
                    let r = data[i];
                    let g = data[i+1];
                    let b = data[i+2];
                    
                    // Apply Contrast: ((value / 255 - 0.5) * contrast + 0.5) * 255
                    r = ((r / 255 - 0.5) * contrast + 0.5) * 255 * brightness;
                    g = ((g / 255 - 0.5) * contrast + 0.5) * 255 * brightness;
                    b = ((b / 255 - 0.5) * contrast + 0.5) * 255 * brightness;
                    
                    // Clip values
                    r = Math.min(255, Math.max(0, r));
                    g = Math.min(255, Math.max(0, g));
                    b = Math.min(255, Math.max(0, b));
                    
                    // Monochrome / Threshold filter
                    if (monochrome) {
                        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
                        const finalVal = gray < threshold ? 0 : 255;
                        r = g = b = finalVal;
                    }
                    
                    data[i] = r;
                    data[i+1] = g;
                    data[i+2] = b;
                }
                
                ctx.putImageData(imgData, 0, 0);
                
                // Compress iteratively to stay strictly under maxKb (often 20KB)
                // Use JPEG binary search quality adjustment
                let quality = 0.85;
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
                    } else if (sizeKb < maxKb - 5 && quality < 0.95) {
                        // try to make it slightly larger for better quality if far below limit
                        minQ = quality;
                        quality = (maxQ + quality) / 2;
                    } else {
                        break;
                    }
                }
                
                setResizedUrl(dataUrl);
                setResizedSize(sizeKb.toFixed(1));
                toast.success("Signature optimized!");
            } catch (err) {
                console.error(err);
                toast.error("Failed to process signature image.");
            } finally {
                setProcessing(false);
            }
        }, 100);
    };

    // Re-draw when settings change
    useEffect(() => {
        if (image) {
            processSignature();
        }
    }, [image, width, height, maxKb, contrast, brightness, monochrome, threshold]);

    const handleDownload = () => {
        if (!resizedUrl) return;
        const link = document.createElement("a");
        link.download = `signature_resized_under_${maxKb}kb.jpg`;
        link.href = resizedUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleClear = () => {
        setImage(null);
        setPreviewUrl("");
        setResizedUrl("");
        setOriginalInfo(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Upload & Filters Panel */}
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
                                        <p className="font-bold text-lg">Upload Scanned Signature</p>
                                        <p className="text-sm text-muted-foreground">Drop signature image (JPEG, PNG, WebP)</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative border border-border/40 bg-muted/10 p-4 rounded-md">
                                        <img
                                            src={previewUrl}
                                            alt="Scanned preview"
                                            className="max-h-[160px] mx-auto object-contain shadow-sm border border-border/20 bg-white"
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
                                            <span>File Type: <strong>{originalInfo.type.split("/")[1]}</strong></span>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Filters Panel */}
                            <div className="space-y-4 pt-4 border-t border-border/40">
                                <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-primary">
                                    <Sliders className="h-4 w-4" />
                                    <span>Enhance scanned paper & text contrast</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="contrast-slider">Contrast ({contrast.toFixed(1)}x)</Label>
                                        <input
                                            id="contrast-slider"
                                            type="range"
                                            min="1"
                                            max="3"
                                            step="0.1"
                                            value={contrast}
                                            onChange={(e) => setContrast(parseFloat(e.target.value))}
                                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="brightness-slider">Brightness ({brightness.toFixed(1)}x)</Label>
                                        <input
                                            id="brightness-slider"
                                            type="range"
                                            min="0.8"
                                            max="2"
                                            step="0.05"
                                            value={brightness}
                                            onChange={(e) => setBrightness(parseFloat(e.target.value))}
                                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 py-2 border-y border-border/10">
                                    <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={monochrome}
                                            onChange={(e) => setMonochrome(e.target.checked)}
                                            className="h-4.5 w-4.5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                                        />
                                        <span>Force Pure Black & White (Monochrome)</span>
                                    </label>
                                </div>

                                {monochrome && (
                                    <div className="space-y-2 animate-in slide-in-from-top-1 duration-200">
                                        <Label htmlFor="threshold-slider">Ink Darkness Threshold ({threshold})</Label>
                                        <input
                                            id="threshold-slider"
                                            type="range"
                                            min="50"
                                            max="200"
                                            step="1"
                                            value={threshold}
                                            onChange={(e) => setThreshold(parseInt(e.target.value))}
                                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>
                                )}

                                {/* Dimension Rules */}
                                <div className="grid grid-cols-3 gap-4 pt-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="width">Width (px)</Label>
                                        <Input
                                            id="width"
                                            type="number"
                                            value={width}
                                            onChange={(e) => setWidth(parseInt(e.target.value) || 0)}
                                            className="h-10 text-base"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="height">Height (px)</Label>
                                        <Input
                                            id="height"
                                            type="number"
                                            value={height}
                                            onChange={(e) => setHeight(parseInt(e.target.value) || 0)}
                                            className="h-10 text-base"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="maxKb">Max KB Limit</Label>
                                        <Input
                                            id="maxKb"
                                            type="number"
                                            value={maxKb}
                                            onChange={(e) => setMaxKb(parseInt(e.target.value) || 0)}
                                            className="h-10 text-base"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Resized Result Output panel */}
                <div className="md:col-span-5 space-y-6">
                    <Card className="border-2 border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl min-h-[300px] flex flex-col justify-between">
                        <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-4 text-center">
                                <h3 className="text-xl font-bold border-b border-border/20 pb-2 flex items-center justify-center gap-2">
                                    <Eye className="h-5 w-5 text-primary" />
                                    <span>Signature Output</span>
                                </h3>
                                
                                {processing && (
                                    <div className="h-40 flex flex-col items-center justify-center space-y-4">
                                        <RefreshCw className="h-10 w-10 text-primary animate-spin" />
                                        <p className="text-muted-foreground text-sm">Processing filters...</p>
                                    </div>
                                )}

                                {!processing && !resizedUrl && (
                                    <div className="h-40 flex flex-col items-center justify-center border border-dashed border-border/40 rounded-md p-6 bg-muted/5">
                                        <FileImage className="h-10 w-10 text-muted-foreground/40 mb-2" />
                                        <p className="text-xs text-muted-foreground">Upload a signature to preview optimized result.</p>
                                    </div>
                                )}

                                {!processing && resizedUrl && (
                                    <div className="space-y-4">
                                        <div className="border border-primary/20 bg-muted/10 p-6 rounded-md flex items-center justify-center bg-white shadow-inner">
                                            <img
                                                src={resizedUrl}
                                                alt="Signature result"
                                                className="border border-border/20 max-w-full"
                                                style={{ width: `${width}px`, height: `${height}px`, maxHeight: "150px" }}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-sm bg-primary/5 border border-primary/10 rounded-sm py-2 px-3 text-left">
                                            <div>
                                                <span className="text-xs text-muted-foreground block">Dimensions</span>
                                                <span className="font-bold font-mono">{width} x {height} px</span>
                                            </div>
                                            <div>
                                                <span className="text-xs text-muted-foreground block">File Size</span>
                                                <span className={`font-bold font-mono ${resizedSize > maxKb ? 'text-red-500' : 'text-emerald-500'}`}>
                                                    {resizedSize} KB
                                                </span>
                                            </div>
                                        </div>
                                        {resizedSize <= maxKb && (
                                            <div className="flex items-center gap-1.5 justify-center text-xs text-emerald-500 font-semibold bg-emerald-500/10 py-1.5 px-3 border border-emerald-500/20">
                                                <Check className="h-4 w-4" /> Signature compliant (under {maxKb}KB)
                                            </div>
                                        )}
                                        {resizedSize > maxKb && (
                                            <div className="flex items-center gap-1.5 justify-center text-xs text-red-500 font-semibold bg-red-500/10 py-1.5 px-3 border border-red-500/20">
                                                <AlertCircle className="h-4 w-4" /> Size exceeds {maxKb}KB limit
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 pt-4 border-t border-border/20">
                                <Button
                                    type="button"
                                    onClick={handleDownload}
                                    disabled={!resizedUrl || processing}
                                    className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                                >
                                    <Download className="h-5 w-5" />
                                    Download Clean Signature
                                </Button>
                                
                                <p className="text-[10px] text-muted-foreground text-center">
                                    <span className="font-bold text-red-500/80">Tip:</span> Scan on plain white paper under bright light for the best threshold extraction.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>

            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}
