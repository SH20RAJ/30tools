"use client";

import React, { useState, useRef } from "react";
import { Upload, CheckCircle2, XCircle, FileImage, Trash2, Shield, FileText, Check, AlertCircle, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function FormImageSizeChecker() {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [fileStats, setFileStats] = useState(null);
    
    // Portal/Exam rule preset
    const [selectedPreset, setSelectedPreset] = useState("upsc-photo");
    
    const fileInputRef = useRef(null);

    const checkRules = {
        "upsc-photo": {
            name: "UPSC IAS Photo Guidelines",
            type: "image",
            minWidth: 350,
            maxWidth: 1000,
            minHeight: 350,
            maxHeight: 1000,
            aspectRatio: "1:1 preferred",
            minKb: 20,
            maxKb: 300,
            format: ["jpg", "jpeg"]
        },
        "upsc-signature": {
            name: "UPSC IAS Signature Guidelines",
            type: "image",
            minWidth: 350,
            maxWidth: 1000,
            minHeight: 350,
            maxHeight: 1000,
            aspectRatio: "3:1 preferred",
            minKb: 20,
            maxKb: 300,
            format: ["jpg", "jpeg"]
        },
        "ssc-photo": {
            name: "SSC Photograph Guidelines",
            type: "image",
            minWidth: 320,
            maxWidth: 380,
            minHeight: 420,
            maxHeight: 480,
            aspectRatio: "3.5 x 4.5 cm",
            minKb: 20,
            maxKb: 50,
            format: ["jpg", "jpeg"]
        },
        "ssc-signature": {
            name: "SSC Signature Guidelines",
            type: "image",
            minWidth: 350,
            maxWidth: 450,
            minHeight: 180,
            maxHeight: 220,
            aspectRatio: "4.0 x 2.0 cm",
            minKb: 10,
            maxKb: 20,
            format: ["jpg", "jpeg"]
        },
        "neet-photo": {
            name: "NEET Passport Photo Guidelines",
            type: "image",
            minWidth: 300,
            maxWidth: 500,
            minHeight: 400,
            maxHeight: 600,
            aspectRatio: "3.5 x 4.5 cm",
            minKb: 10,
            maxKb: 200,
            format: ["jpg", "jpeg"]
        },
        "neet-postcard": {
            name: "NEET Postcard Photo Guidelines",
            type: "image",
            minWidth: 400,
            maxWidth: 1200,
            minHeight: 600,
            maxHeight: 1800,
            aspectRatio: "4 x 6 inches",
            minKb: 10,
            maxKb: 200,
            format: ["jpg", "jpeg"]
        },
        "jee-photo": {
            name: "JEE Main Photo Guidelines",
            type: "image",
            minWidth: 300,
            maxWidth: 500,
            minHeight: 400,
            maxHeight: 600,
            aspectRatio: "3.5 x 4.5 cm",
            minKb: 10,
            maxKb: 200,
            format: ["jpg", "jpeg"]
        },
        "jee-signature": {
            name: "JEE Main Signature Guidelines",
            type: "image",
            minWidth: 300,
            maxWidth: 500,
            minHeight: 100,
            maxHeight: 250,
            aspectRatio: "3.5 x 1.5 cm",
            minKb: 4,
            maxKb: 30,
            format: ["jpg", "jpeg"]
        },
        "cuet-photo": {
            name: "CUET Photo Guidelines",
            type: "image",
            minWidth: 300,
            maxWidth: 500,
            minHeight: 400,
            maxHeight: 600,
            aspectRatio: "3.5 x 4.5 cm",
            minKb: 10,
            maxKb: 200,
            format: ["jpg", "jpeg"]
        },
        "pdf-document-200": {
            name: "Standard PDF Uploads (200KB limit)",
            type: "pdf",
            minKb: 10,
            maxKb: 200,
            format: ["pdf"]
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        const isPdf = selectedFile.type === "application/pdf" || selectedFile.name.endsWith(".pdf");
        const fileExt = selectedFile.name.split(".").pop().toLowerCase();
        
        if (isPdf) {
            setFile(selectedFile);
            setPreviewUrl("");
            setFileStats({
                name: selectedFile.name,
                sizeKb: selectedFile.size / 1024,
                type: "pdf",
                ext: fileExt,
                width: null,
                height: null
            });
            toast.success("PDF loaded successfully!");
        } else if (selectedFile.type.startsWith("image/")) {
            setFile(selectedFile);
            
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreviewUrl(event.target.result);
                
                const img = new Image();
                img.onload = () => {
                    setFileStats({
                        name: selectedFile.name,
                        sizeKb: selectedFile.size / 1024,
                        type: "image",
                        ext: fileExt,
                        width: img.width,
                        height: img.height
                    });
                    toast.success("Image loaded successfully!");
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(selectedFile);
        } else {
            toast.error("Unsupported file format. Please upload JPEG, PNG, or PDF.");
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    const handleClear = () => {
        setFile(null);
        setPreviewUrl("");
        setFileStats(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const rules = checkRules[selectedPreset];
    
    // Rule evaluation engine
    const evaluateStats = () => {
        if (!fileStats) return null;
        
        const errors = [];
        const successes = [];
        
        // 1. Format check
        if (rules.format.includes(fileStats.ext)) {
            successes.push(`Format matches: .${fileStats.ext.toUpperCase()}`);
        } else {
            errors.push(`Format mismatch: Expected .${rules.format.join(" or .").toUpperCase()}, got .${fileStats.ext.toUpperCase()}`);
        }

        // 2. Size check
        const kb = fileStats.sizeKb;
        if (kb >= rules.minKb && kb <= rules.maxKb) {
            successes.push(`File size is compliant: ${kb.toFixed(1)} KB (Rules state: ${rules.minKb}KB - ${rules.maxKb}KB)`);
        } else if (kb < rules.minKb) {
            errors.push(`File size is too small: ${kb.toFixed(1)} KB (Needs to be at least ${rules.minKb} KB)`);
        } else {
            errors.push(`File size is too large: ${kb.toFixed(1)} KB (Needs to be under ${rules.maxKb} KB)`);
        }

        // 3. Image Dimensions check
        if (rules.type === "image" && fileStats.type === "image") {
            const w = fileStats.width;
            const h = fileStats.height;
            
            if (w >= rules.minWidth && w <= rules.maxWidth) {
                successes.push(`Width is compliant: ${w}px (Rules state: ${rules.minWidth}px - ${rules.maxWidth}px)`);
            } else {
                errors.push(`Width mismatch: ${w}px (Expected: ${rules.minWidth}px - ${rules.maxWidth}px)`);
            }

            if (h >= rules.minHeight && h <= rules.maxHeight) {
                successes.push(`Height is compliant: ${h}px (Rules state: ${rules.minHeight}px - ${rules.maxHeight}px)`);
            } else {
                errors.push(`Height mismatch: ${h}px (Expected: ${rules.minHeight}px - ${rules.maxHeight}px)`);
            }
        } else if (rules.type === "image" && fileStats.type !== "image") {
            errors.push("Expected an image file, but uploaded a PDF document.");
        } else if (rules.type === "pdf" && fileStats.type !== "pdf") {
            errors.push("Expected a PDF document, but uploaded an image file.");
        }

        return { errors, successes, isPass: errors.length === 0 };
    };

    const results = evaluateStats();

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Upload & Preset Area */}
                <div className="lg:col-span-7 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            
                            {/* Preset Selector */}
                            <div className="space-y-2">
                                <Label htmlFor="exam-preset-checker">Target Exam / Document Portal Rules</Label>
                                <Select value={selectedPreset} onValueChange={setSelectedPreset}>
                                    <SelectTrigger id="exam-preset-checker" className="border-primary/10 h-11">
                                        <SelectValue placeholder="Select portal" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="upsc-photo">UPSC IAS Photo (350-1000px, 20-300KB)</SelectItem>
                                        <SelectItem value="upsc-signature">UPSC IAS Signature (350-1000px, 20-300KB)</SelectItem>
                                        <SelectItem value="ssc-photo">SSC Photo (3.5x4.5cm, 20-50KB)</SelectItem>
                                        <SelectItem value="ssc-signature">SSC Signature (4.0x2.0cm, 10-20KB)</SelectItem>
                                        <SelectItem value="neet-photo">NEET Passport Photo (10-200KB)</SelectItem>
                                        <SelectItem value="neet-postcard">NEET Postcard Photo (4x6", 10-200KB)</SelectItem>
                                        <SelectItem value="jee-photo">JEE Main Photo (10-200KB)</SelectItem>
                                        <SelectItem value="jee-signature">JEE Main Signature (4-30KB)</SelectItem>
                                        <SelectItem value="cuet-photo">CUET Photo (10-200KB)</SelectItem>
                                        <SelectItem value="pdf-document-200">Government PDF uploads (Max 200KB)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Drop/Upload Area */}
                            {!file ? (
                                <div
                                    onClick={triggerFileSelect}
                                    className="border-2 border-dashed border-border/60 hover:border-primary/50 transition-all p-16 text-center cursor-pointer space-y-4 hover:bg-muted/10 group rounded-md"
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept="image/jpeg,image/png,application/pdf"
                                        className="hidden"
                                    />
                                    <div className="p-4 bg-primary/10 text-primary rounded-full w-fit mx-auto group-hover:scale-110 transition-transform">
                                        <Upload className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-bold text-lg">Upload Photo, Signature or PDF</p>
                                        <p className="text-sm text-muted-foreground">Instantly validates dimensions and upload rules</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative border border-border/40 bg-muted/10 p-4 rounded-md">
                                        {fileStats?.type === "pdf" ? (
                                            <div className="h-[200px] flex flex-col items-center justify-center gap-2 select-none">
                                                <FileText className="h-16 w-16 text-primary" />
                                                <span className="text-sm font-semibold max-w-xs truncate">{fileStats.name}</span>
                                            </div>
                                        ) : (
                                            <img
                                                src={previewUrl}
                                                alt="Check preview"
                                                className="max-h-[200px] mx-auto object-contain shadow-sm border border-border/20"
                                            />
                                        )}
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

                            {/* Guidelines Summary Display */}
                            <div className="bg-primary/5 border border-primary/10 rounded p-4 space-y-2 text-xs">
                                <div className="font-bold text-primary flex items-center gap-1.5">
                                    <HelpCircle className="h-4 w-4" />
                                    <span>Rules Selected: {rules.name}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-muted-foreground mt-2">
                                    {rules.type === "image" && (
                                        <>
                                            <div>Width range: <strong>{rules.minWidth} - {rules.maxWidth} px</strong></div>
                                            <div>Height range: <strong>{rules.minHeight} - {rules.maxHeight} px</strong></div>
                                            <div>Preferred aspect ratio: <strong>{rules.aspectRatio}</strong></div>
                                        </>
                                    )}
                                    <div>File Size range: <strong>{rules.minKb} - {rules.maxKb} KB</strong></div>
                                    <div className="col-span-2">Formats allowed: <strong>{rules.format.join(", ").toUpperCase()}</strong></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Validation Output */}
                <div className="lg:col-span-5 space-y-6">
                    <Card className="border-2 border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl min-h-[300px] flex flex-col justify-between">
                        <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold border-b border-border/20 pb-2 text-center">Validation Status</h3>

                                {!fileStats && (
                                    <div className="h-64 flex flex-col items-center justify-center border border-dashed border-border/40 rounded-md p-6 bg-muted/5 text-center">
                                        <FileImage className="h-12 w-12 text-muted-foreground/40 mb-3" />
                                        <p className="text-sm text-muted-foreground">Upload a file to run compliance verification.</p>
                                    </div>
                                )}

                                {fileStats && results && (
                                    <div className="space-y-4">
                                        {/* Status Header */}
                                        <div className={`p-4 rounded-md border flex items-center gap-3 ${
                                            results.isPass
                                                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                                                : "bg-red-500/10 border-red-500/20 text-red-500"
                                        }`}>
                                            {results.isPass ? (
                                                <>
                                                    <CheckCircle2 className="h-8 w-8 shrink-0" />
                                                    <div>
                                                        <div className="font-bold text-sm">Perfect Compliance!</div>
                                                        <div className="text-[10px] opacity-80">This document fits the selected portal rules.</div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <XCircle className="h-8 w-8 shrink-0" />
                                                    <div>
                                                        <div className="font-bold text-sm">Guidelines Mismatch</div>
                                                        <div className="text-[10px] opacity-80">This file will be rejected by the portal.</div>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        {/* Checked stats lists */}
                                        <div className="space-y-2">
                                            {results.errors.map((err, i) => (
                                                <div key={`err-${i}`} className="flex items-start gap-2 text-xs text-red-500 bg-red-500/5 p-2.5 border border-red-500/10 rounded">
                                                    <XCircle className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
                                                    <span>{err}</span>
                                                </div>
                                            ))}
                                            {results.successes.map((suc, i) => (
                                                <div key={`suc-${i}`} className="flex items-start gap-2 text-xs text-emerald-500 bg-emerald-500/5 p-2.5 border border-emerald-500/10 rounded">
                                                    <Check className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                                                    <span>{suc}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* File Metadata Details */}
                                        <div className="bg-muted/30 border border-border/10 p-3 rounded text-xs space-y-1">
                                            <div className="font-bold text-muted-foreground uppercase text-[10px] tracking-wider mb-1.5">File Metadata</div>
                                            <div className="flex justify-between">
                                                <span>File Size:</span>
                                                <span className="font-semibold font-mono">{fileStats.sizeKb.toFixed(1)} KB</span>
                                            </div>
                                            {fileStats.type === "image" && (
                                                <div className="flex justify-between">
                                                    <span>Dimensions:</span>
                                                    <span className="font-semibold font-mono">{fileStats.width} x {fileStats.height} px</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span>Format:</span>
                                                <span className="font-semibold font-mono">.{fileStats.ext.toUpperCase()}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="pt-4 border-t border-border/20 text-[10px] text-muted-foreground flex items-center justify-between">
                                <span className="flex items-center gap-1">
                                    <Shield className="h-3.5 w-3.5 text-emerald-500" />
                                    100% Secure Client Validation
                                </span>
                                <span>No files are sent to servers</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
