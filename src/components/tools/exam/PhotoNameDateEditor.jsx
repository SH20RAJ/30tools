"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload, Download, RefreshCw, Check, FileImage, Trash2, Shield, Eye, Type } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function PhotoNameDateEditor() {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [originalInfo, setOriginalInfo] = useState(null);
    
    // Inputs
    const [name, setName] = useState("JOHN DOE");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today
    
    // Options
    const [fontSizePercent, setFontSizePercent] = useState(6); // % of image height
    const [barHeightPercent, setBarHeightPercent] = useState(18); // % of image height
    const [isUppercase, setIsUppercase] = useState(true);

    // Output state
    const [processing, setProcessing] = useState(false);
    const [outputUrl, setOutputUrl] = useState("");
    const [outputSizeKb, setOutputSizeKb] = useState(0);
    
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

    const processImage = (activeImage = image) => {
        if (!activeImage) return;
        setProcessing(true);
        setOutputUrl("");
        
        setTimeout(() => {
            try {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                
                const w = activeImage.width;
                const h = activeImage.height;
                
                canvas.width = w;
                canvas.height = h;
                
                // Draw original image
                ctx.drawImage(activeImage, 0, 0, w, h);
                
                // Draw white bar at the bottom
                const barHeight = Math.round((h * barHeightPercent) / 100);
                const barY = h - barHeight;
                
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, barY, w, barHeight);
                
                // Draw border line above the bar
                ctx.strokeStyle = "#DDDDDD";
                ctx.lineWidth = Math.max(1, Math.round(w / 400));
                ctx.beginPath();
                ctx.moveTo(0, barY);
                ctx.lineTo(w, barY);
                ctx.stroke();
                
                // Add Text
                ctx.fillStyle = "#000000";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                
                const fontSize = Math.max(12, Math.round((h * fontSizePercent) / 100));
                ctx.font = `bold ${fontSize}px sans-serif`;
                
                const nameText = isUppercase ? name.toUpperCase() : name;
                
                // Reformat date from YYYY-MM-DD to DD-MM-YYYY
                let formattedDate = date;
                if (date.match(/^\d{4}-\d{2}-\d{2}$/)) {
                    const [yyyy, mm, dd] = date.split("-");
                    formattedDate = `${dd}/${mm}/${yyyy}`;
                }
                
                const nameY = barY + (barHeight * 0.35);
                const dateY = barY + (barHeight * 0.70);
                
                ctx.fillText(nameText, w / 2, nameY, w - 20);
                ctx.font = `normal ${Math.round(fontSize * 0.95)}px sans-serif`;
                ctx.fillText(`DOB/DOP: ${formattedDate}`, w / 2, dateY, w - 20);
                
                const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
                setOutputUrl(dataUrl);
                
                const sizeBytes = Math.round((dataUrl.split(",")[1].length * 3) / 4);
                setOutputSizeKb((sizeBytes / 1024).toFixed(1));
                toast.success("Name and Date added successfully!");
            } catch (err) {
                console.error(err);
                toast.error("Failed to add text to photo.");
            } finally {
                setProcessing(false);
            }
        }, 100);
    };

    // Re-process when text inputs or sizing settings change
    useEffect(() => {
        if (image) {
            processImage();
        }
    }, [image, name, date, fontSizePercent, barHeightPercent, isUppercase]);

    const handleDownload = () => {
        if (!outputUrl) return;
        const link = document.createElement("a");
        link.download = `photo_with_name_date.jpg`;
        link.href = outputUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleClear = () => {
        setImage(null);
        setPreviewUrl("");
        setOutputUrl("");
        setOriginalInfo(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Control Panel */}
                <div className="md:col-span-6 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            
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
                                        <p className="font-bold text-lg">Upload Passport Photo</p>
                                        <p className="text-sm text-muted-foreground">Select your image to add captions</p>
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
                                </div>
                            )}

                            {/* Inputs Form */}
                            <div className="space-y-4 pt-4 border-t border-border/40">
                                <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-primary">
                                    <Type className="h-4 w-4" />
                                    <span>Caption Text Settings</span>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="candidate-name">Candidate Name</Label>
                                    <Input
                                        id="candidate-name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="h-10 text-base"
                                        placeholder="E.g. JOHN DOE"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="photo-date">Date of Birth / Photo Capture</Label>
                                    <Input
                                        id="photo-date"
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="h-10 text-base"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="font-slider">Font Size ({fontSizePercent}%)</Label>
                                        <input
                                            id="font-slider"
                                            type="range"
                                            min="4"
                                            max="10"
                                            step="0.5"
                                            value={fontSizePercent}
                                            onChange={(e) => setFontSizePercent(parseFloat(e.target.value))}
                                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="bar-slider">Bar Height ({barHeightPercent}%)</Label>
                                        <input
                                            id="bar-slider"
                                            type="range"
                                            min="12"
                                            max="25"
                                            step="1"
                                            value={barHeightPercent}
                                            onChange={(e) => setBarHeightPercent(parseInt(e.target.value))}
                                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 py-1">
                                    <input
                                        id="uppercase-check"
                                        type="checkbox"
                                        checked={isUppercase}
                                        onChange={(e) => setIsUppercase(e.target.checked)}
                                        className="h-4 w-4 rounded border-gray-300 text-primary"
                                    />
                                    <Label htmlFor="uppercase-check" className="cursor-pointer">FORCE UPPERCASE NAME</Label>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Output Panel */}
                <div className="md:col-span-6 space-y-6">
                    <Card className="border-2 border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl min-h-[300px] flex flex-col justify-between">
                        <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-4 text-center">
                                <h3 className="text-xl font-bold border-b border-border/20 pb-2 flex items-center justify-center gap-2">
                                    <Eye className="h-5 w-5 text-primary" />
                                    <span>Photo Preview</span>
                                </h3>
                                
                                {processing && (
                                    <div className="h-64 flex flex-col items-center justify-center space-y-4">
                                        <RefreshCw className="h-10 w-10 text-primary animate-spin" />
                                        <p className="text-muted-foreground text-sm font-medium">Drawing white bar...</p>
                                    </div>
                                )}

                                {!processing && !outputUrl && (
                                    <div className="h-64 flex flex-col items-center justify-center border border-dashed border-border/40 rounded-md p-6 bg-muted/5">
                                        <FileImage className="h-10 w-10 text-muted-foreground/40 mb-2" />
                                        <p className="text-xs text-muted-foreground">Upload a photo to see the caption preview.</p>
                                    </div>
                                )}

                                {!processing && outputUrl && (
                                    <div className="space-y-4">
                                        <div className="border border-primary/20 bg-muted/10 p-4 rounded-md flex items-center justify-center max-h-[300px] overflow-auto">
                                            <img
                                                src={outputUrl}
                                                alt="Output result"
                                                className="border border-border/40 shadow-md max-h-[250px] object-contain"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center text-xs bg-primary/5 border border-primary/10 rounded-sm py-2 px-3 text-left">
                                            <span>Dimensions: <strong>{image?.width} x {image?.height} px</strong></span>
                                            <span>File Size: <strong>{outputSizeKb} KB</strong></span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 pt-4 border-t border-border/20">
                                <Button
                                    type="button"
                                    onClick={handleDownload}
                                    disabled={!outputUrl || processing}
                                    className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                                >
                                    <Download className="h-5 w-5" />
                                    Download Image
                                </Button>
                                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <Shield className="h-3.5 w-3.5 text-emerald-500" />
                                        100% private in-browser edit
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
