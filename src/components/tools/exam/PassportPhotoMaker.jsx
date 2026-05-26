"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload, Download, RefreshCw, ZoomIn, ZoomOut, RotateCw, Check, Grid, FileImage, Trash2, Shield, Settings2, Printer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function PassportPhotoMaker() {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [originalInfo, setOriginalInfo] = useState(null);
    
    // Passport settings
    const [preset, setPreset] = useState("3.5x4.5"); // "3.5x4.5" (Standard Passport), "5.1x5.1" (2x2 inches)
    const [bgPreset, setBgPreset] = useState("original"); // "original", "white", "blue", "light-grey"
    const [sheetSize, setSheetSize] = useState("single"); // "single", "A4-grid", "4x6-grid"
    
    // Zoom/Pan/Rotation state
    const [zoom, setZoom] = useState(1);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [rotation, setRotation] = useState(0); // in degrees: 0, 90, 180, 270
    
    // Dragging state
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    
    // Output state
    const [processing, setProcessing] = useState(false);
    const [outputUrl, setOutputUrl] = useState("");
    const [outputSizeKb, setOutputSizeKb] = useState(0);
    
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    // Load Image
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
                setZoom(1);
                setOffsetX(0);
                setOffsetY(0);
                setRotation(0);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    // Re-draw whenever adjustments occur
    useEffect(() => {
        if (image) {
            drawPreview();
        }
    }, [image, preset, bgPreset, zoom, offsetX, offsetY, rotation, sheetSize]);

    const getDimensions = () => {
        // Return target canvas resolution in pixels
        if (preset === "3.5x4.5") {
            return { w: 350, h: 450, ratio: 3.5 / 4.5, title: "3.5 x 4.5 cm (Standard Passport/SSC/JEE)" };
        } else {
            return { w: 413, h: 413, ratio: 1.0, title: "2 x 2 inches / 5.1 x 5.1 cm (US Visa/OCI)" };
        }
    };

    const getBgColor = () => {
        switch (bgPreset) {
            case "white": return "#FFFFFF";
            case "blue": return "#E3F2FD"; // Light blue/sky blue typical passport color
            case "light-grey": return "#F5F5F5";
            default: return null;
        }
    };

    const drawPreview = () => {
        const canvas = canvasRef.current;
        if (!canvas || !image) return;
        const ctx = canvas.getContext("2d");
        
        const dims = getDimensions();
        const bgColor = getBgColor();
        
        // Let's create a single photo canvas
        const photoCanvas = document.createElement("canvas");
        photoCanvas.width = dims.w;
        photoCanvas.height = dims.h;
        const pCtx = photoCanvas.getContext("2d");
        
        // 1. Draw Background
        if (bgColor) {
            pCtx.fillStyle = bgColor;
            pCtx.fillRect(0, 0, dims.w, dims.h);
        }
        
        // 2. Draw Image with user Zoom/Pan/Rotation
        pCtx.save();
        
        // Move origin to center to rotate/scale correctly
        pCtx.translate(dims.w / 2 + offsetX, dims.h / 2 + offsetY);
        pCtx.rotate((rotation * Math.PI) / 180);
        
        // Scale factor to fill target size
        const imgRatio = image.width / image.height;
        const targetRatio = dims.w / dims.h;
        
        let baseScale = 1;
        if (imgRatio > targetRatio) {
            // Image is wider: fit height
            baseScale = dims.h / image.height;
        } else {
            // Image is taller: fit width
            baseScale = dims.w / image.width;
        }
        
        const finalScale = baseScale * zoom;
        
        pCtx.drawImage(
            image,
            -image.width / 2,
            -image.height / 2,
            image.width,
            image.height
        );
        
        // Apply scaling
        pCtx.restore();
        
        // Draw image onto canvas or generate grid sheet
        if (sheetSize === "single") {
            canvas.width = dims.w;
            canvas.height = dims.h;
            ctx.drawImage(photoCanvas, 0, 0);
        } else {
            // Generate sheet layout
            // A4 is 210 x 297 mm, aspect ratio 1.414 (approx 1240 x 1754 px at 150 DPI)
            // 4x6 is 4 x 6 inches, aspect ratio 1.5 (approx 600 x 900 px at 150 DPI)
            let sheetW, sheetH, cols, rows, photoW, photoH, padding, gap;
            
            if (sheetSize === "A4-grid") {
                sheetW = 1240;
                sheetH = 1754;
                // Calculate dimensions for passport photos on A4
                photoW = dims.w * 1.5;
                photoH = dims.h * 1.5;
                cols = 5;
                rows = 7;
                gap = 30;
                padding = 50;
            } else {
                // 4x6 grid
                sheetW = 900;
                sheetH = 600;
                photoW = dims.w * 1.1;
                photoH = dims.h * 1.1;
                cols = 4;
                rows = 2;
                gap = 25;
                padding = 40;
            }
            
            canvas.width = sheetW;
            canvas.height = sheetH;
            
            // Clean sheet background
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, sheetW, sheetH);
            
            // Draw grid of photos
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = padding + c * (photoW + gap);
                    const y = padding + r * (photoH + gap);
                    
                    if (x + photoW <= sheetW && y + photoH <= sheetH) {
                        ctx.save();
                        // Draw thin border/cut line around each passport photo
                        ctx.strokeStyle = "#CCCCCC";
                        ctx.lineWidth = 1;
                        ctx.strokeRect(x, y, photoW, photoH);
                        ctx.drawImage(photoCanvas, x, y, photoW, photoH);
                        ctx.restore();
                    }
                }
            }
        }
        
        // Convert to dataUrl for download
        try {
            const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
            setOutputUrl(dataUrl);
            const sizeBytes = Math.round((dataUrl.split(",")[1].length * 3) / 4);
            setOutputSizeKb((sizeBytes / 1024).toFixed(1));
        } catch (err) {
            console.error("Canvas export failed: ", err);
        }
    };

    // Drag to Pan Handlers
    const handleMouseDown = (e) => {
        if (!image) return;
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !image) return;
        const dx = e.clientX - dragStart.x;
        const dy = e.clientY - dragStart.y;
        setOffsetX(prev => prev + dx);
        setOffsetY(prev => prev + dy);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Touch Support for Mobile Dragging
    const handleTouchStart = (e) => {
        if (!image || e.touches.length !== 1) return;
        setIsDragging(true);
        setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    const handleTouchMove = (e) => {
        if (!isDragging || !image || e.touches.length !== 1) return;
        const dx = e.touches[0].clientX - dragStart.x;
        const dy = e.touches[0].clientY - dragStart.y;
        setOffsetX(prev => prev + dx);
        setOffsetY(prev => prev + dy);
        setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    const handleRotate = () => {
        setRotation(prev => (prev + 90) % 360);
    };

    const handleDownload = () => {
        if (!outputUrl) return;
        const link = document.createElement("a");
        const nameSuffix = sheetSize === "single" ? "photo" : "sheet";
        link.download = `passport_${nameSuffix}_${preset}.jpg`;
        link.href = outputUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Passport image downloaded!");
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

    const dims = getDimensions();

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Control Panel */}
                <div className="lg:col-span-6 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            
                            {/* File Upload Area */}
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
                                        <p className="font-bold text-lg">Upload Your Portrait Photo</p>
                                        <p className="text-sm text-muted-foreground">Select a high-quality photo with direct face view</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative border border-border/40 bg-muted/10 p-2 rounded-md overflow-hidden select-none">
                                        <div
                                            ref={containerRef}
                                            onMouseDown={handleMouseDown}
                                            onMouseMove={handleMouseMove}
                                            onMouseUp={handleMouseUp}
                                            onMouseLeave={handleMouseUp}
                                            onTouchStart={handleTouchStart}
                                            onTouchMove={handleTouchMove}
                                            onTouchEnd={handleMouseUp}
                                            className="h-[300px] w-full flex items-center justify-center cursor-move relative overflow-hidden bg-black/5"
                                        >
                                            {/* Guidelines Overlay */}
                                            <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center">
                                                {/* Simulated Head Oval Guidelines */}
                                                <div 
                                                    className="border-2 border-dashed border-primary/50 rounded-full"
                                                    style={{
                                                        width: preset === "3.5x4.5" ? "120px" : "150px",
                                                        height: preset === "3.5x4.5" ? "170px" : "150px",
                                                    }}
                                                />
                                                <div className="text-[10px] bg-black/60 text-white px-2 py-0.5 mt-2 rounded">
                                                    Align Head Inside Oval
                                                </div>
                                            </div>

                                            <img
                                                src={previewUrl}
                                                alt="Cropping view"
                                                draggable={false}
                                                className="max-h-full max-w-full pointer-events-none transition-transform duration-75 origin-center"
                                                style={{
                                                    transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg) scale(${zoom})`,
                                                }}
                                            />
                                        </div>
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={handleClear}
                                            className="absolute top-4 right-4 rounded-full h-8 w-8 shadow-md z-20"
                                            title="Clear Image"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    {/* Crop Controls */}
                                    <div className="flex items-center justify-center gap-4 bg-muted/20 p-3 rounded-md border border-border/10">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setZoom(prev => Math.max(0.2, prev - 0.1))}
                                            title="Zoom Out"
                                        >
                                            <ZoomOut className="h-4 w-4" />
                                        </Button>
                                        <span className="text-xs font-semibold select-none w-12 text-center">
                                            {Math.round(zoom * 100)}%
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setZoom(prev => Math.min(5, prev + 0.1))}
                                            title="Zoom In"
                                        >
                                            <ZoomIn className="h-4 w-4" />
                                        </Button>
                                        <div className="w-[1px] h-6 bg-border mx-2" />
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={handleRotate}
                                            title="Rotate 90°"
                                        >
                                            <RotateCw className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                setZoom(1);
                                                setOffsetX(0);
                                                setOffsetY(0);
                                                setRotation(0);
                                            }}
                                        >
                                            Reset
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Configuration Panel */}
                            <div className="space-y-4 pt-4 border-t border-border/40">
                                <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-primary">
                                    <Settings2 className="h-4 w-4" />
                                    <span>Passport Settings</span>
                                </div>

                                <div className="space-y-2">
                                    <Label>1. Photo Size Preset</Label>
                                    <Select value={preset} onValueChange={setPreset}>
                                        <SelectTrigger className="border-primary/15 h-11">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="3.5x4.5">3.5 x 4.5 cm (India Passport, Exams)</SelectItem>
                                            <SelectItem value="5.1x5.1">2 x 2 inches / 5.1 x 5.1 cm (US Visa, OCI)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>2. Background Color</Label>
                                        <Select value={bgPreset} onValueChange={setBgPreset}>
                                            <SelectTrigger className="border-primary/15 h-11">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="original">Keep Original</SelectItem>
                                                <SelectItem value="white">Solid White</SelectItem>
                                                <SelectItem value="blue">Light Sky Blue</SelectItem>
                                                <SelectItem value="light-grey">Light Grey</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>3. Output Sheet Layout</Label>
                                        <Select value={sheetSize} onValueChange={setSheetSize}>
                                            <SelectTrigger className="border-primary/15 h-11">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="single">Single Passport Photo</SelectItem>
                                                <SelectItem value="A4-grid">A4 Sheet Grid (35 Copies)</SelectItem>
                                                <SelectItem value="4x6-grid">4 x 6 Inch Grid (8 Copies)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Output Panel */}
                <div className="lg:col-span-6 space-y-6">
                    <Card className="border-2 border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl min-h-[300px] flex flex-col justify-between">
                        <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-4 text-center">
                                <h3 className="text-xl font-bold border-b border-border/20 pb-2 flex items-center justify-center gap-2">
                                    <Grid className="h-5 w-5 text-primary" />
                                    <span>Print Ready Output</span>
                                </h3>

                                {!previewUrl && (
                                    <div className="h-80 flex flex-col items-center justify-center border border-dashed border-border/40 rounded-md p-6 bg-muted/5">
                                        <FileImage className="h-12 w-12 text-muted-foreground/40 mb-3" />
                                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                                            Upload a portrait picture. You'll be able to crop, rotate, and generate print-ready passport sheets instantly.
                                        </p>
                                    </div>
                                )}

                                {previewUrl && outputUrl && (
                                    <div className="space-y-4">
                                        <div className="border border-primary/20 bg-muted/10 p-4 rounded-md flex justify-center items-center overflow-auto max-h-[360px]">
                                            <img
                                                src={outputUrl}
                                                alt="Output Passport Preview"
                                                className="border border-border/40 shadow-md max-w-full max-h-[320px] object-contain bg-white"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 text-sm bg-primary/5 border border-primary/10 rounded-sm py-2.5 px-3 text-left">
                                            <div>
                                                <span className="text-xs text-muted-foreground block">Dimensions</span>
                                                <span className="font-bold font-mono">
                                                    {sheetSize === "single" 
                                                        ? `${dims.w} x ${dims.h} px (${preset === "3.5x4.5" ? "3.5x4.5 cm" : "2x2 in"})`
                                                        : sheetSize === "A4-grid"
                                                        ? "1240 x 1754 px (A4 Page)"
                                                        : "900 x 600 px (4x6 photo sheet)"}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-xs text-muted-foreground block">Estimated File Size</span>
                                                <span className="font-bold font-mono text-emerald-500">
                                                    {outputSizeKb} KB
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1.5 justify-center text-xs text-emerald-500 font-semibold bg-emerald-500/10 py-2 px-3 border border-emerald-500/20">
                                            <Check className="h-4 w-4" /> Ready for upload & high resolution printing
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 pt-4 border-t border-border/20">
                                <Button
                                    type="button"
                                    onClick={handleDownload}
                                    disabled={!outputUrl}
                                    className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                                >
                                    {sheetSize === "single" ? <Download className="h-5 w-5" /> : <Printer className="h-5 w-5" />}
                                    Download JPEG File
                                </Button>
                                
                                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <Shield className="h-3 w-3 text-emerald-500" />
                                        100% Client-side privacy
                                    </span>
                                    <span>Verify official size guidelines before print</span>
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
