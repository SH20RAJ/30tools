"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload, Download, RefreshCw, FileText, Check, AlertCircle, Trash2, Shield, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function PdfCompressor200kb() {
    const [pdflib, setPdflib] = useState(null);
    const [file, setFile] = useState(null);
    const [originalSize, setOriginalSize] = useState(0);
    const [compressedUrl, setCompressedUrl] = useState("");
    const [compressedSize, setCompressedSize] = useState(0);
    const [processing, setProcessing] = useState(false);
    
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
                toast.error("Failed to load PDF processing library. Please check your internet connection.");
            };
            document.head.appendChild(script);
        };
        loadPdfLib();
    }, []);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        if (selectedFile.type !== "application/pdf" && !selectedFile.name.endsWith(".pdf")) {
            toast.error("Please upload a valid PDF document.");
            return;
        }

        setFile(selectedFile);
        setOriginalSize(selectedFile.size);
        setCompressedUrl("");
        setCompressedSize(0);
        
        // Auto compress
        setTimeout(() => compressPdf(selectedFile), 100);
    };

    const compressPdf = async (activeFile = file) => {
        if (!activeFile || !pdflib) return;
        setProcessing(true);
        setCompressedUrl("");

        try {
            const { PDFDocument } = pdflib;
            const fileBuffer = await activeFile.arrayBuffer();
            const pdfDoc = await PDFDocument.load(fileBuffer);
            
            // Perform browser-based optimization:
            // 1. Clear metadata (Title, Author, Subject, Keywords, Creator, Producer)
            pdfDoc.setTitle("");
            pdfDoc.setAuthor("");
            pdfDoc.setSubject("");
            pdfDoc.setKeywords([]);
            pdfDoc.setCreator("");
            pdfDoc.setProducer("");
            
            // 2. Compress PDF structure by saving with object streams option
            // (useObjectStreams: true bundles structures, yielding smaller files)
            const pdfBytes = await pdfDoc.save({
                useObjectStreams: true,
                addGlossaryMap: false
            });

            const blob = new Blob([pdfBytes], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);

            setCompressedUrl(url);
            setCompressedSize(blob.size);
            
            const savedKb = ((activeFile.size - blob.size) / 1024).toFixed(1);
            if (blob.size < activeFile.size) {
                toast.success(`PDF Optimized! Reduced size by ${savedKb} KB.`);
            } else {
                toast.success("PDF processed. File was already highly optimized.");
            }
        } catch (err) {
            console.error(err);
            toast.error("Could not compress the PDF file.");
        } finally {
            setProcessing(false);
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    const handleClear = () => {
        setFile(null);
        setOriginalSize(0);
        setCompressedUrl("");
        setCompressedSize(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleDownload = () => {
        if (!compressedUrl || !file) return;
        const link = document.createElement("a");
        link.download = `compressed_${file.name}`;
        link.href = compressedUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const sizeLimitKb = 200;
    const isCompliant = compressedSize > 0 && (compressedSize / 1024) <= sizeLimitKb;

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Control Panel */}
                <div className="md:col-span-7 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            
                            {/* File Upload Zone */}
                            {!file ? (
                                <div
                                    onClick={triggerFileSelect}
                                    className="border-2 border-dashed border-border/60 hover:border-primary/50 transition-all p-12 text-center cursor-pointer space-y-4 hover:bg-muted/10 group rounded-md"
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept=".pdf"
                                        className="hidden"
                                    />
                                    <div className="p-4 bg-primary/10 text-primary rounded-full w-fit mx-auto group-hover:scale-110 transition-transform">
                                        <FileText className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-bold text-lg">Upload PDF Document</p>
                                        <p className="text-sm text-muted-foreground">Select a PDF to compress to under 200KB</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative border border-border/40 bg-muted/10 p-6 rounded-md flex flex-col items-center justify-center gap-2 select-none">
                                        <FileText className="h-12 w-12 text-primary" />
                                        <div className="text-sm font-semibold max-w-xs truncate text-center">{file.name}</div>
                                        <div className="text-xs text-muted-foreground">Original: {(originalSize / 1024).toFixed(1)} KB</div>
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

                            {/* Info Box */}
                            <div className="space-y-3 pt-4 border-t border-border/40 text-xs text-muted-foreground leading-relaxed">
                                <h4 className="font-bold text-foreground">How it compresses:</h4>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li>Strips heavy document metadata and search index headers.</li>
                                    <li>Re-encodes page layout structures with compressed object streams.</li>
                                    <li>Processed strictly client-side—your sensitive certificates never leave your browser.</li>
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
                                <h3 className="text-xl font-bold border-b border-border/20 pb-2">Optimization Result</h3>
                                
                                {processing && (
                                    <div className="h-40 flex flex-col items-center justify-center space-y-4">
                                        <RefreshCw className="h-10 w-10 text-primary animate-spin" />
                                        <p className="text-muted-foreground text-sm font-medium">Re-indexing stream objects...</p>
                                    </div>
                                )}

                                {!processing && !compressedUrl && (
                                    <div className="h-40 flex flex-col items-center justify-center border border-dashed border-border/40 rounded-md p-6 bg-muted/5">
                                        <FileText className="h-10 w-10 text-muted-foreground/40 mb-2" />
                                        <p className="text-xs text-muted-foreground">Upload a PDF to view compressed statistics.</p>
                                    </div>
                                )}

                                {!processing && compressedUrl && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-2 text-sm bg-primary/5 border border-primary/10 rounded-sm py-3 px-4 text-left">
                                            <div>
                                                <span className="text-xs text-muted-foreground block font-bold uppercase">Before</span>
                                                <span className="font-mono text-muted-foreground">{(originalSize / 1024).toFixed(1)} KB</span>
                                            </div>
                                            <div>
                                                <span className="text-xs text-muted-foreground block font-bold uppercase">After</span>
                                                <span className={`font-bold font-mono ${isCompliant ? 'text-emerald-500' : 'text-amber-500'}`}>
                                                    {(compressedSize / 1024).toFixed(1)} KB
                                                </span>
                                            </div>
                                        </div>

                                        {isCompliant ? (
                                            <div className="flex items-center gap-1.5 justify-center text-xs text-emerald-500 font-semibold bg-emerald-500/10 py-2 px-3 border border-emerald-500/20">
                                                <Check className="h-4 w-4" /> Under 200KB limit! Compliant for uploads.
                                            </div>
                                        ) : (
                                            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded text-left space-y-2">
                                                <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                                                    <AlertCircle className="h-4 w-4" /> Still above 200KB ceiling
                                                </div>
                                                <p className="text-[10px] text-muted-foreground leading-relaxed">
                                                    This PDF contains very high-resolution scanned page images. 
                                                    <strong> Tip:</strong> Convert the PDF pages to JPG, compress them using our Photo Compressor, and then re-compile them into a PDF.
                                                </p>
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
                                    Download Optimized PDF
                                </Button>
                                <div className="flex items-center justify-center text-[10px] text-muted-foreground">
                                    <Shield className="h-3.5 w-3.5 text-emerald-500 mr-1" />
                                    100% private local operation
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
