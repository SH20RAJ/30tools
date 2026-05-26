"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload, Download, RefreshCw, Sliders, Check, AlertCircle, FileImage, Trash2, Shield, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function PanCardResizer() {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [originalInfo, setOriginalInfo] = useState(null);
    
    // Mode: "photo" or "signature"
    const [mode, setMode] = useState("photo");
    
    // Presets
    const width = mode === "photo" ? 213 : 400;
    const height = mode === "photo" ? 213 : 200;
    const maxKb = mode === "photo" ? 50 : 20;
    
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
                setTimeout(() => processImage(img), 100);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    const processImage = (activeImage = image) => {
        if (!activeImage) return;
        setProcessing(true);
        setResizedUrl("");
        
        setTimeout(() => {
            try {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                
                canvas.width = width;
                canvas.height = height;
                
                // Crop and draw
                const targetRatio = width / height;
                const imgRatio = activeImage.width / activeImage.height;
                
                let sourceX = 0;
                let sourceY = 0;
                let sourceWidth = activeImage.width;
                let sourceHeight = activeImage.height;
                
                if (imgRatio > targetRatio) {
                    sourceWidth = activeImage.height * targetRatio;
                    sourceX = (activeImage.width - sourceWidth) / 2;
                } else if (imgRatio < targetRatio) {
                    sourceHeight = activeImage.width / targetRatio;
                    sourceY = (activeImage.height - sourceHeight) / 2;
                }
                
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 0, width, height);
                ctx.drawImage(
                    activeImage,
                    sourceX, sourceY, sourceWidth, sourceHeight,
                    0, 0, width, height
                );
                
                // Iterative JPEG quality compression
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
                    } else if (sizeKb < maxKb - 5 && quality < 0.95) {
                        minQ = quality;
                        quality = (maxQ + quality) / 2;
                    } else {
                        break;
                    }
                }
                
                setResizedUrl(dataUrl);
                setResizedSize(sizeKb.toFixed(1));
                toast.success("Processed successfully!");
            } catch (err) {
                console.error(err);
                toast.error("Failed to process image.");
            } finally {
                setProcessing(false);
            }
        }, 100);
    };

    useEffect(() => {
        if (image) {
            processImage();
        }
    }, [mode]);

    const handleDownload = () => {
        if (!resizedUrl) return;
        const link = document.createElement("a");
        const suffix = mode === "photo" ? "photo" : "signature";
        link.download = `pancard_${suffix}_resized.jpg`;
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
        <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Control Panel */}
                <div className="md:col-span-7 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            
                            {/* Mode Selection */}
                            <div className="grid grid-cols-2 gap-2 p-1 bg-muted/40 border border-border/20 rounded-md">
                                <button
                                    type="button"
                                    onClick={() => setMode("photo")}
                                    className={`py-2 text-sm font-semibold rounded-sm transition-all ${
                                        mode === "photo"
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    PAN Photo (213x213 px)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMode("signature")}
                                    className={`py-2 text-sm font-semibold rounded-sm transition-all ${
                                        mode === "signature"
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    PAN Signature (400x200)
                                </button>
                            </div>

                            {/* File Upload Zone */}
                            {!previewUrl ? (
                                <div
                                    onClick={triggerFileSelect}
                                    className="border-2 border-dashed border-border/60 hover:border-primary/50 transition-all p-12 text-center cursor-pointer space-y-4 hover:bg-muted/10 group rounded-md"
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
                                        <p className="font-bold text-lg">Upload PAN Card Image</p>
                                        <p className="text-sm text-muted-foreground">Select photo or signature scan</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative border border-border/40 bg-muted/10 p-4 rounded-md">
                                        <img
                                            src={previewUrl}
                                            alt="Uploaded preview"
                                            className="max-h-[220px] mx-auto object-contain shadow-sm border border-border/20"
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

                            {/* Guidelines Info */}
                            <div className="bg-primary/5 border border-primary/10 rounded p-4 text-xs space-y-2">
                                <h4 className="font-bold text-primary">Official Portal Rules:</h4>
                                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                                    {mode === "photo" ? (
                                        <>
                                            <li>Dimensions: <strong>3.5 cm x 2.5 cm</strong> (exact 213 x 213 pixels).</li>
                                            <li>DPI constraint: <strong>300 DPI</strong> color.</li>
                                            <li>File Size: Under <strong>50 KB</strong> limit.</li>
                                        </>
                                    ) : (
                                        <>
                                            <li>Dimensions: <strong>2.0 cm x 4.5 cm</strong> (exact 400 x 200 pixels).</li>
                                            <li>DPI constraint: <strong>600 DPI</strong> preferred.</li>
                                            <li>File Size: Under <strong>20 KB</strong> limit.</li>
                                        </>
                                    )}
                                    <li>Format: JPG/JPEG format only.</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Output Panel */}
                <div className="md:col-span-5 space-y-6">
                    <Card className="border-2 border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl min-h-[300px] flex flex-col justify-between">
                        <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-4 text-center">
                                <h3 className="text-xl font-bold border-b border-border/20 pb-2 flex items-center justify-center gap-2">
                                    <Eye className="h-5 w-5 text-primary" />
                                    <span>PAN Form Output</span>
                                </h3>
                                
                                {processing && (
                                    <div className="h-48 flex flex-col items-center justify-center space-y-4">
                                        <RefreshCw className="h-10 w-10 text-primary animate-spin" />
                                        <p className="text-muted-foreground text-sm font-medium">Auto-aligning to pixel rules...</p>
                                    </div>
                                )}

                                {!processing && !resizedUrl && (
                                    <div className="h-48 flex flex-col items-center justify-center border border-dashed border-border/40 rounded-md p-6 bg-muted/5">
                                        <FileImage className="h-10 w-10 text-muted-foreground/40 mb-2" />
                                        <p className="text-xs text-muted-foreground">Upload your file to preview output.</p>
                                    </div>
                                )}

                                {!processing && resizedUrl && (
                                    <div className="space-y-4">
                                        <div className="border border-primary/20 bg-muted/10 p-4 rounded-md flex items-center justify-center">
                                            <img
                                                src={resizedUrl}
                                                alt="Output result"
                                                className="border border-border/40 shadow-md bg-white object-contain"
                                                style={{ width: `${width}px`, height: `${height}px`, maxWidth: "100%", maxHeight: "200px" }}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-sm bg-primary/5 border border-primary/10 rounded-sm py-2 px-3 text-left">
                                            <div>
                                                <span className="text-xs text-muted-foreground block font-semibold">Dimensions</span>
                                                <span className="font-bold font-mono">{width} x {height} px</span>
                                            </div>
                                            <div>
                                                <span className="text-xs text-muted-foreground block font-semibold">File Size</span>
                                                <span className={`font-bold font-mono ${resizedSize > maxKb ? 'text-red-500' : 'text-emerald-500'}`}>
                                                    {resizedSize} KB
                                                </span>
                                            </div>
                                        </div>
                                        {resizedSize <= maxKb && (
                                            <div className="flex items-center gap-1.5 justify-center text-xs text-emerald-500 font-semibold bg-emerald-500/10 py-1.5 px-3 border border-emerald-500/20">
                                                <Check className="h-4 w-4" /> Size & specs compliant
                                            </div>
                                        )}
                                        {resizedSize > maxKb && (
                                            <div className="flex items-center gap-1.5 justify-center text-xs text-red-500 font-semibold bg-red-500/10 py-1.5 px-3 border border-red-500/20">
                                                <AlertCircle className="h-4 w-4" /> Limit exceeded ({maxKb}KB max)
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
                                    Download Compliant JPEG
                                </Button>
                                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <Shield className="h-3.5 w-3.5 text-emerald-500" />
                                        100% Secure local processing
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}
