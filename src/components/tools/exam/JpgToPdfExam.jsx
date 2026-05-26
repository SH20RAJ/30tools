"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Upload, FileText, X, MoveUp, MoveDown, Download, Image as ImageIcon, Loader2, Plus, Settings2, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function JpgToPdfExam() {
    const [pdflib, setPdflib] = useState(null);
    const [images, setImages] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    
    // Page options
    const [pageSize, setPageSize] = useState("AUTO"); // "AUTO", "A4"
    const [margin, setMargin] = useState("NONE"); // "NONE", "SMALL" (15px), "LARGE" (30px)
    
    const fileInputRef = useRef(null);

    useEffect(() => {
        const loadPdfLib = async () => {
            if (window.PDFLib) {
                setPdflib(window.PDFLib);
                return;
            }

            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js";
            script.async = true;
            script.onload = () => {
                setPdflib(window.PDFLib);
            };
            script.onerror = () => {
                toast.error("Failed to load PDF library. Please refresh and check your internet connection.");
            };
            document.head.appendChild(script);
        };
        loadPdfLib();
    }, []);

    const onFileChange = useCallback((e) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files).map(file => ({
                id: Math.random().toString(36).substring(2, 11),
                file,
                preview: URL.createObjectURL(file)
            }));
            setImages(prev => [...prev, ...newFiles]);
            toast.success(`${newFiles.length} file(s) added!`);
        }
    }, []);

    const removeImage = (id) => {
        setImages(prev => {
            const filtered = prev.filter(img => img.id !== id);
            const removed = prev.find(img => img.id === id);
            if (removed) URL.revokeObjectURL(removed.preview);
            return filtered;
        });
    };

    const moveImage = (index, direction) => {
        const newImages = [...images];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex >= 0 && targetIndex < newImages.length) {
            [newImages[index], newImages[targetIndex]] = [newImages[targetIndex], newImages[index]];
            setImages(newImages);
        }
    };

    const generatePDF = async () => {
        if (!pdflib) return;
        if (images.length === 0) {
            toast.error("Please add at least one image first.");
            return;
        }

        setIsProcessing(true);
        try {
            const { PDFDocument, PageSizes } = pdflib;
            const pdfDoc = await PDFDocument.create();

            for (const img of images) {
                const imageBytes = await img.file.arrayBuffer();
                let embeddedImage;
                
                if (img.file.type === "image/jpeg" || img.file.type === "image/jpg") {
                    embeddedImage = await pdfDoc.embedJpg(imageBytes);
                } else if (img.file.type === "image/png") {
                    embeddedImage = await pdfDoc.embedPng(imageBytes);
                } else {
                    // Try embedding as JPEG fallback (some raw images lack standard headers)
                    try {
                        embeddedImage = await pdfDoc.embedJpg(imageBytes);
                    } catch (e) {
                        toast.warning(`File ${img.file.name} is not a valid JPG/PNG image. Skipping.`);
                        continue;
                    }
                }

                const { width: imgWidth, height: imgHeight } = embeddedImage.size();
                
                let pageWidth, pageHeight;
                if (pageSize === "A4") {
                    [pageWidth, pageHeight] = PageSizes.A4; // [595.28, 841.89]
                } else {
                    pageWidth = imgWidth;
                    pageHeight = imgHeight;
                }

                const page = pdfDoc.addPage([pageWidth, pageHeight]);
                
                const m = margin === "NONE" ? 0 : margin === "SMALL" ? 20 : 40;
                const availableWidth = pageWidth - (m * 2);
                const availableHeight = pageHeight - (m * 2);
                
                const scale = Math.min(availableWidth / imgWidth, availableHeight / imgHeight);
                const drawWidth = imgWidth * scale;
                const drawHeight = imgHeight * scale;
                
                page.drawImage(embeddedImage, {
                    x: (pageWidth - drawWidth) / 2,
                    y: (pageHeight - drawHeight) / 2,
                    width: drawWidth,
                    height: drawHeight,
                });
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement("a");
            link.href = url;
            link.download = `exam_documents_${Date.now()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("PDF generated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate PDF file. Please ensure images are valid JPEGs/PNGs.");
        } finally {
            setIsProcessing(false);
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Images Upload List */}
                <div className="lg:col-span-8 space-y-6">
                    {images.length === 0 ? (
                        <div
                            onClick={triggerFileSelect}
                            className="border-2 border-dashed border-border/60 hover:border-primary/50 transition-all p-16 text-center cursor-pointer space-y-6 hover:bg-muted/10 group rounded-md"
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={onFileChange}
                                accept="image/jpeg,image/png"
                                multiple
                                className="hidden"
                            />
                            <div className="p-5 bg-primary/10 text-primary rounded-full w-fit mx-auto group-hover:scale-110 transition-transform">
                                <Upload className="h-10 w-10" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-xl">Select Image Files (JPG/PNG)</h3>
                                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                                    Upload multiple certificates, photos, or ID cards to compile into a single PDF document.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {images.map((img, index) => (
                                    <Card key={img.id} className="border-border/40 overflow-hidden bg-card/20 backdrop-blur-sm group select-none relative">
                                        <div className="aspect-[4/3] relative bg-black/5 flex items-center justify-center p-2">
                                            <img
                                                src={img.preview}
                                                alt={img.file.name}
                                                className="max-h-full max-w-full object-contain shadow-sm"
                                            />
                                            {/* Hover Toolbar */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                <Button
                                                    size="icon"
                                                    variant="secondary"
                                                    disabled={index === 0}
                                                    onClick={() => moveImage(index, 'up')}
                                                    className="h-8 w-8"
                                                    title="Move Page Up"
                                                >
                                                    <MoveUp className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="secondary"
                                                    disabled={index === images.length - 1}
                                                    onClick={() => moveImage(index, 'down')}
                                                    className="h-8 w-8"
                                                    title="Move Page Down"
                                                >
                                                    <MoveDown className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="destructive"
                                                    onClick={() => removeImage(img.id)}
                                                    className="h-8 w-8"
                                                    title="Delete Page"
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            
                                            <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 text-[9px] font-bold text-white uppercase tracking-wider rounded">
                                                Page {index + 1}
                                            </div>
                                        </div>
                                        <CardContent className="p-3 text-[11px] font-medium truncate border-t border-border/10">
                                            {img.file.name}
                                        </CardContent>
                                    </Card>
                                ))}
                                
                                {/* Add more box */}
                                <div
                                    onClick={triggerFileSelect}
                                    className="border-2 border-dashed border-border/60 hover:border-primary/40 bg-card/10 hover:bg-card/30 transition-all cursor-pointer aspect-[4/3] flex flex-col items-center justify-center rounded-md gap-2"
                                >
                                    <Plus className="h-8 w-8 text-muted-foreground" />
                                    <span className="text-xs font-bold text-muted-foreground uppercase">Add More</span>
                                </div>
                            </div>

                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={onFileChange}
                                accept="image/jpeg,image/png"
                                multiple
                                className="hidden"
                            />
                        </div>
                    )}
                </div>

                {/* Configuration / PDF Generation Panel */}
                <div className="lg:col-span-4 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            <div className="flex items-center gap-2 mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                                <Settings2 className="h-4 w-4" />
                                <span>PDF Settings</span>
                            </div>

                            <div className="space-y-2">
                                <Label>Page Size Options</Label>
                                <Select value={pageSize} onValueChange={setPageSize}>
                                    <SelectTrigger className="border-primary/10 h-10">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="AUTO">Auto (Match Image Dimension)</SelectItem>
                                        <SelectItem value="A4">A4 Page (Standard Form)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Page Margins</Label>
                                <Select value={margin} onValueChange={setMargin}>
                                    <SelectTrigger className="border-primary/10 h-10">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="NONE">No Margin (Fit Full Page)</SelectItem>
                                        <SelectItem value="SMALL">Small Margins (Clean)</SelectItem>
                                        <SelectItem value="LARGE">Large Margins</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="pt-4 border-t border-border/40 space-y-4">
                                <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase">
                                    <span>Total Pages</span>
                                    <span className="text-foreground">{images.length}</span>
                                </div>

                                <Button
                                    onClick={generatePDF}
                                    disabled={images.length === 0 || isProcessing || !pdflib}
                                    className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                                >
                                    {isProcessing ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            Compiling...
                                        </>
                                    ) : (
                                        <>
                                            <FileText className="h-5 w-5" />
                                            Compile to PDF
                                        </>
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Shield className="h-5 w-5 text-emerald-500" />
                                <h4 className="text-xs font-bold uppercase text-foreground">Secure & Private</h4>
                            </div>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                                Conversion is handled entirely in your web browser sandbox. Your images and documents are never sent to external servers.
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
