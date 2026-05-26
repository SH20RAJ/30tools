"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import { Upload, Download, RefreshCw, Sliders, Check, AlertCircle, FileImage, Trash2, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function ExamPhotoResizerInner({
    examName = "UPSC",
    presetWidth = 350,
    presetHeight = 350,
    presetUnit = "px", // "px", "cm", "inch"
    presetMinKb = 20,
    presetMaxKb = 300,
    showSignatureOption = true,
    disclaimer = "Always verify requirements with the official notification before submitting."
}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const lang = searchParams?.get("lang") || "en";
    const isHindi = lang === "hi";

    const changeLanguage = (newLang) => {
        const params = new URLSearchParams(searchParams?.toString() || "");
        if (newLang === "en") {
            params.delete("lang");
        } else {
            params.set("lang", newLang);
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    const t = {
        photo: isHindi ? "पासपोर्ट फोटो (Photo)" : "Passport Photo",
        signature: isHindi ? "हस्ताक्षर (Signature)" : "Signature Spec",
        uploadTitle: isHindi ? "यहाँ क्लिक करें या अपनी इमेज ड्रैग करें" : "Click or drag your image here",
        uploadSub: isHindi ? "JPG, JPEG, PNG फॉर्मेट समर्थित हैं" : "Supports JPG, JPEG, PNG formats",
        originalFile: isHindi ? "फाइल" : "File",
        originalSize: isHindi ? "मूल साइज" : "Original Size",
        settingsTitle: isHindi ? "रीसाइज सेटिंग्स" : "Resize Settings",
        widthLabel: isHindi ? "चौड़ाई" : "Width",
        heightLabel: isHindi ? "ऊंचाई" : "Height",
        minKbLabel: isHindi ? "न्यूनतम साइज (KB)" : "Min Size (KB)",
        maxKbLabel: isHindi ? "अधिकतम साइज (KB)" : "Max Size (KB)",
        reprocess: isHindi ? "पुनः प्रोसेस करें" : "Reprocess",
        privateLabel: isHindi ? "ब्राउज़र-आधारित (100% सुरक्षित और निजी)" : "Browser-based (100% private)",
        previewTitle: isHindi ? "आउटपुट प्रीव्यू" : "Output Preview",
        previewSub: isHindi ? "रीसाइज और कंप्रेस किया हुआ आउटपुट देखने के लिए एक इमेज अपलोड करें।" : "Upload an image to view the resized and compressed output.",
        dimensions: isHindi ? "डाइमेंशन्स" : "Dimensions",
        fileSize: isHindi ? "फाइल साइज" : "File Size",
        compliant: isHindi ? "टारगेट नियमों के अनुरूप है" : "Compliant with target rules",
        mismatch: isHindi ? "साइज बेमेल है। आयाम कम करने का प्रयास करें।" : "Size mismatch. Try reducing dimensions.",
        download: isHindi ? "JPEG डाउनलोड करें" : "Download JPEG",
        disclaimerLabel: isHindi ? "अस्वीकरण (Disclaimer):" : "Disclaimer:",
        disclaimerText: isHindi ? "जमा करने से पहले हमेशा आधिकारिक अधिसूचना के साथ आवश्यकताओं की पुष्टि करें।" : disclaimer,
    };

    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [originalInfo, setOriginalInfo] = useState(null);
    
    // Resize settings
    const [mode, setMode] = useState("photo"); // "photo" or "signature"
    const [width, setWidth] = useState(presetWidth);
    const [height, setHeight] = useState(presetHeight);
    const [unit, setUnit] = useState(presetUnit);
    const [minKb, setMinKb] = useState(presetMinKb);
    const [maxKb, setMaxKb] = useState(presetMaxKb);
    
    // Processing state
    const [processing, setProcessing] = useState(false);
    const [resizedUrl, setResizedUrl] = useState("");
    const [resizedSize, setResizedSize] = useState(0);
    const [resizedWidth, setResizedWidth] = useState(0);
    const [resizedHeight, setResizedHeight] = useState(0);
    
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);

    // Apply presets when mode changes
    useEffect(() => {
        if (examName === "UPSC") {
            if (mode === "photo") {
                setWidth(350);
                setHeight(350);
                setMinKb(20);
                setMaxKb(300);
            } else {
                setWidth(350);
                setHeight(350);
                setMinKb(20);
                setMaxKb(300);
            }
        } else if (examName === "SSC") {
            if (mode === "photo") {
                setWidth(350); // 3.5cm x 4.5cm approx 350x450
                setHeight(450);
                setMinKb(20);
                setMaxKb(50);
            } else {
                setWidth(350); // 4.0cm x 2.0cm approx 400x200
                setHeight(200);
                setMinKb(10);
                setMaxKb(20);
            }
        } else if (examName === "NEET") {
            if (mode === "photo") {
                setWidth(480); // 4x6 inch postcard size or 3.5x4.5cm passport
                setHeight(640);
                setMinKb(10);
                setMaxKb(200);
            } else {
                setWidth(350);
                setHeight(150);
                setMinKb(4);
                setMaxKb(30);
            }
        } else if (examName === "JEE") {
            if (mode === "photo") {
                setWidth(350);
                setHeight(450);
                setMinKb(10);
                setMaxKb(200);
            } else {
                setWidth(350);
                setHeight(150);
                setMinKb(4);
                setMaxKb(30);
            }
        } else if (examName === "CUET") {
            if (mode === "photo") {
                setWidth(350);
                setHeight(450);
                setMinKb(10);
                setMaxKb(200);
            } else {
                setWidth(350);
                setHeight(150);
                setMinKb(4);
                setMaxKb(30);
            }
        } else if (examName === "Railway") {
            if (mode === "photo") {
                setWidth(350);
                setHeight(450);
                setMinKb(20);
                setMaxKb(50);
            } else {
                setWidth(350);
                setHeight(150);
                setMinKb(10);
                setMaxKb(20);
            }
        }
    }, [mode, examName]);

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
                // Trigger auto-process
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
                
                // Set canvas size to the requested target dimensions
                canvas.width = width;
                canvas.height = height;
                
                // Crop and Draw (aspect fill centered)
                const targetRatio = width / height;
                const imgRatio = activeImage.width / activeImage.height;
                
                let sourceX = 0;
                let sourceY = 0;
                let sourceWidth = activeImage.width;
                let sourceHeight = activeImage.height;
                
                if (imgRatio > targetRatio) {
                    // Image is wider than target
                    sourceWidth = activeImage.height * targetRatio;
                    sourceX = (activeImage.width - sourceWidth) / 2;
                } else if (imgRatio < targetRatio) {
                    // Image is taller than target
                    sourceHeight = activeImage.width / targetRatio;
                    sourceY = (activeImage.height - sourceHeight) / 2;
                }
                
                ctx.drawImage(
                    activeImage,
                    sourceX, sourceY, sourceWidth, sourceHeight,
                    0, 0, width, height
                );
                
                // Iterative compression to match target KB constraints
                let quality = 0.9;
                let dataUrl = "";
                let sizeBytes = 0;
                let sizeKb = 0;
                let minQ = 0.01;
                let maxQ = 0.99;
                
                for (let i = 0; i < 12; i++) {
                    dataUrl = canvas.toDataURL("image/jpeg", quality);
                    // size estimation from base64
                    sizeBytes = Math.round((dataUrl.split(",")[1].length * 3) / 4);
                    sizeKb = sizeBytes / 1024;
                    
                    if (sizeKb > maxKb) {
                        maxQ = quality;
                        quality = (minQ + quality) / 2;
                    } else if (sizeKb < minKb && quality < 0.95) {
                        minQ = quality;
                        quality = (maxQ + quality) / 2;
                    } else {
                        break;
                    }
                }
                
                setResizedUrl(dataUrl);
                setResizedSize(sizeKb.toFixed(1));
                setResizedWidth(width);
                setResizedHeight(height);
                toast.success(isHindi ? "इमेज सफलतापूर्वक प्रोसेस हो गई!" : "Image successfully processed!");
            } catch (err) {
                console.error(err);
                toast.error(isHindi ? "इमेज प्रोसेस करने में विफल।" : "Failed to process the image.");
            } finally {
                setProcessing(false);
            }
        }, 100);
    };

    const handleDownload = () => {
        if (!resizedUrl) return;
        const link = document.createElement("a");
        const suffix = mode === "photo" ? "photo" : "signature";
        link.download = `${examName.toLowerCase()}_${suffix}_resized.jpg`;
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
                
                {/* Upload & Config panel */}
                <div className="md:col-span-7 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            
                            {/* Language selection toggle */}
                            <div className="flex justify-end items-center gap-2 mb-2 text-xs border-b border-border/10 pb-2">
                                <span className="text-muted-foreground">Language / भाषा:</span>
                                <button
                                    type="button"
                                    onClick={() => changeLanguage("en")}
                                    className={`px-2 py-0.5 rounded-sm transition-all text-[11px] font-bold ${!isHindi ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}
                                >
                                    English
                                </button>
                                <span className="text-muted-foreground/30">|</span>
                                <button
                                    type="button"
                                    onClick={() => changeLanguage("hi")}
                                    className={`px-2 py-0.5 rounded-sm transition-all text-[11px] font-bold ${isHindi ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}
                                >
                                    हिन्दी (Hindi)
                                </button>
                            </div>

                            {/* Mode selection (Photo vs Signature) */}
                            {showSignatureOption && (
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
                                        {t.photo}
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
                                        {t.signature}
                                    </button>
                                </div>
                            )}

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
                                        <p className="font-bold text-lg">{t.uploadTitle}</p>
                                        <p className="text-sm text-muted-foreground">{t.uploadSub}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative border border-border/40 bg-muted/10 p-4 rounded-md">
                                        <img
                                            src={previewUrl}
                                            alt="Uploaded preview"
                                            className="max-h-[300px] mx-auto object-contain shadow-sm border border-border/20"
                                        />
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={handleClear}
                                            className="absolute top-2 right-2 rounded-full h-8 w-8 shadow-md"
                                            title={isHindi ? "इमेज हटाएं" : "Remove image"}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    {originalInfo && (
                                        <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground bg-muted/20 px-3 py-2 border border-border/10 rounded-sm">
                                            <span>{t.originalFile}: <strong>{originalInfo.name}</strong></span>
                                            <span>{t.originalSize}: <strong>{originalInfo.sizeKb} KB</strong></span>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Dimension Settings Panel */}
                            <div className="space-y-4 pt-4 border-t border-border/40">
                                <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-primary">
                                    <Sliders className="h-4 w-4" />
                                    <span>{t.settingsTitle}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="width">{t.widthLabel} ({unit})</Label>
                                        <Input
                                            id="width"
                                            type="number"
                                            value={width}
                                            onChange={(e) => setWidth(parseInt(e.target.value) || 0)}
                                            className="h-10 text-base"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="height">{t.heightLabel} ({unit})</Label>
                                        <Input
                                            id="height"
                                            type="number"
                                            value={height}
                                            onChange={(e) => setHeight(parseInt(e.target.value) || 0)}
                                            className="h-10 text-base"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="minKb">{t.minKbLabel}</Label>
                                        <Input
                                            id="minKb"
                                            type="number"
                                            value={minKb}
                                            onChange={(e) => setMinKb(parseInt(e.target.value) || 0)}
                                            className="h-10 text-base"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="maxKb">{t.maxKbLabel}</Label>
                                        <Input
                                            id="maxKb"
                                            type="number"
                                            value={maxKb}
                                            onChange={(e) => setMaxKb(parseInt(e.target.value) || 0)}
                                            className="h-10 text-base"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Shield className="h-3 w-3 text-emerald-500" />
                                        {t.privateLabel}
                                    </span>
                                    {previewUrl && (
                                        <Button
                                            type="button"
                                            onClick={() => processImage()}
                                            disabled={processing || !width || !height}
                                            className="gap-2"
                                            size="sm"
                                        >
                                            {processing ? <RefreshCw className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
                                            {t.reprocess}
                                        </Button>
                                    )}
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
                                <h3 className="text-xl font-bold border-b border-border/20 pb-2">{t.previewTitle}</h3>
                                
                                {processing && (
                                    <div className="h-64 flex flex-col items-center justify-center space-y-4">
                                        <RefreshCw className="h-12 w-12 text-primary animate-spin" />
                                        <p className="text-muted-foreground text-sm font-medium">{t.processing}</p>
                                    </div>
                                )}

                                {!processing && !resizedUrl && (
                                    <div className="h-64 flex flex-col items-center justify-center border border-dashed border-border/40 rounded-md p-6 bg-muted/5">
                                        <FileImage className="h-12 w-12 text-muted-foreground/40 mb-3" />
                                        <p className="text-sm text-muted-foreground">{t.previewSub}</p>
                                    </div>
                                )}

                                {!processing && resizedUrl && (
                                    <div className="space-y-4">
                                        <div className="border border-primary/20 bg-muted/10 p-4 rounded-md">
                                            <img
                                                src={resizedUrl}
                                                alt="Resized output"
                                                className="max-h-[260px] mx-auto object-contain border border-border/40 shadow-md"
                                                style={{ width: `${width}px`, height: `${height}px`, maxWidth: "100%" }}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-sm bg-primary/5 border border-primary/10 rounded-sm py-2 px-3 text-left">
                                            <div>
                                                <span className="text-xs text-muted-foreground block">{t.dimensions}</span>
                                                <span className="font-bold font-mono">{resizedWidth} x {resizedHeight} px</span>
                                            </div>
                                            <div>
                                                <span className="text-xs text-muted-foreground block">{t.fileSize}</span>
                                                <span className={`font-bold font-mono ${resizedSize > maxKb || resizedSize < minKb ? 'text-red-500' : 'text-emerald-500'}`}>
                                                    {resizedSize} KB
                                                </span>
                                            </div>
                                        </div>
                                        {resizedSize <= maxKb && resizedSize >= minKb && (
                                            <div className="flex items-center gap-1.5 justify-center text-xs text-emerald-500 font-semibold bg-emerald-500/10 py-1.5 px-3 border border-emerald-500/20">
                                                <Check className="h-4 w-4" /> {t.compliant}
                                            </div>
                                        )}
                                        {(resizedSize > maxKb || resizedSize < minKb) && (
                                            <div className="flex items-center gap-1.5 justify-center text-xs text-red-500 font-semibold bg-red-500/10 py-1.5 px-3 border border-red-500/20">
                                                <AlertCircle className="h-4 w-4" /> {t.mismatch}
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
                                    {t.download}
                                </Button>
                                
                                <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                                    <span className="font-bold text-red-500/80">{t.disclaimerLabel}</span> {t.disclaimerText}
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

export default function ExamPhotoResizer(props) {
    return (
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <ExamPhotoResizerInner {...props} />
        </Suspense>
    );
}
