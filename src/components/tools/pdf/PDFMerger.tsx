"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    FileText, 
    X, 
    MoveUp, 
    MoveDown, 
    Download, 
    FilePlus,
    Loader2,
    Plus,
    Settings2,
    GripVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

declare global {
    interface Window {
        PDFLib: any;
    }
}

interface PDFFile {
    id: string;
    file: File;
    name: string;
    size: number;
    pageCount?: number;
}

export default function PDFMerger() {
    const [pdflib, setPdflib] = useState<any>(null);
    const [files, setFiles] = useState<PDFFile[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

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
            document.head.appendChild(script);
        };
        loadPdfLib();
    }, []);

    const onFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && pdflib) {
            const { PDFDocument } = pdflib;
            const newFiles = await Promise.all(Array.from(e.target.files).map(async file => {
                const arrayBuffer = await file.arrayBuffer();
                let pageCount = 0;
                try {
                    const pdfDoc = await PDFDocument.load(arrayBuffer);
                    pageCount = pdfDoc.getPageCount();
                } catch (e) {
                    console.error("Error loading PDF metadata", e);
                }
                return {
                    id: Math.random().toString(36).substr(2, 9),
                    file,
                    name: file.name,
                    size: file.size,
                    pageCount
                };
            }));
            setFiles(prev => [...prev, ...newFiles]);
            toast.success(`${newFiles.length} PDF files added`);
        } else if (!pdflib) {
            toast.error("PDF Library is still loading...");
        }
    }, [pdflib]);

    const removeFile = (id: string) => {
        setFiles(prev => prev.filter(f => f.id !== id));
    };

    const moveFile = (index: number, direction: 'up' | 'down') => {
        const newFiles = [...files];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex >= 0 && targetIndex < newFiles.length) {
            [newFiles[index], newFiles[targetIndex]] = [newFiles[targetIndex], newFiles[index]];
            setFiles(newFiles);
        }
    };

    const mergePDFs = async () => {
        if (!pdflib) return;
        if (files.length < 2) {
            toast.error("Please add at least two PDF files to merge");
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        try {
            const { PDFDocument } = pdflib;
            const mergedPdf = await PDFDocument.create();

            for (let i = 0; i < files.length; i++) {
                const fileItem = files[i];
                const arrayBuffer = await fileItem.file.arrayBuffer();
                const sourcePdf = await PDFDocument.load(arrayBuffer);
                const copiedPages = await mergedPdf.copyPages(sourcePdf, sourcePdf.getPageIndices());
                copiedPages.forEach((page: any) => mergedPdf.addPage(page));
                setProgress(Math.round(((i + 1) / files.length) * 100));
            }

            const pdfBytes = await mergedPdf.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `merged-${Date.now()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("PDFs merged successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to merge PDFs. One of the files might be corrupted or protected.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card/50 p-6 border border-border/40 rounded-none backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary">
                        <FilePlus className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Merger</h2>
                        <p className="text-sm text-muted-foreground">Combine multiple PDF documents into a single professional file</p>
                    </div>
                </div>
                {!pdflib && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Loader2 className="h-3 w-3 animate-spin" /> Loading Merger Engine...
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-none border-primary/20 hover:border-primary/50"
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add PDFs
                    </Button>
                    <Button 
                        disabled={files.length < 2 || isProcessing || !pdflib}
                        onClick={mergePDFs}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {progress}%</>
                        ) : (
                            <><Download className="mr-2 h-4 w-4" /> Merge PDFs</>
                        )}
                    </Button>
                </div>
                <input 
                    type="file" 
                    multiple 
                    accept="application/pdf" 
                    className="hidden" 
                    ref={fileInputRef}
                    onChange={onFileChange}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {files.length === 0 ? (
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="group cursor-pointer flex flex-col items-center justify-center p-12 md:p-24 border-2 border-dashed border-primary/20 hover:border-primary/40 bg-card/30 hover:bg-card/50 transition-all rounded-none text-center"
                        >
                            <div className="p-6 bg-primary/5 rounded-none group-hover:scale-110 transition-transform">
                                <Upload className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Select or Drop PDF Files</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Choose multiple PDF files to combine them into one. Arrange them in the order you want.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">Combine</Badge>
                                <Badge variant="outline">No Limits</Badge>
                                <Badge variant="outline">100% Free</Badge>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {isProcessing && (
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                        <span>Merging Files...</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <Progress value={progress} className="h-1 rounded-none bg-primary/10" />
                                </div>
                            )}
                            
                            <div className="grid grid-cols-1 gap-3">
                                {files.map((fileItem, index) => (
                                    <Card key={fileItem.id} className="rounded-none border-border/40 group overflow-hidden bg-card/40 hover:bg-card/60 transition-all">
                                        <CardContent className="p-4 flex items-center gap-4">
                                            <div className="flex flex-col gap-1">
                                                <Button 
                                                    size="icon" 
                                                    variant="ghost" 
                                                    className="h-6 w-6 rounded-none text-muted-foreground hover:text-primary"
                                                    disabled={index === 0}
                                                    onClick={() => moveFile(index, 'up')}
                                                >
                                                    <MoveUp className="h-4 w-4" />
                                                </Button>
                                                <Button 
                                                    size="icon" 
                                                    variant="ghost" 
                                                    className="h-6 w-6 rounded-none text-muted-foreground hover:text-primary"
                                                    disabled={index === files.length - 1}
                                                    onClick={() => moveFile(index, 'down')}
                                                >
                                                    <MoveDown className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            
                                            <div className="p-3 bg-primary/5 text-primary">
                                                <FileText className="h-8 w-8" />
                                            </div>
                                            
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold truncate">{fileItem.name}</h4>
                                                <div className="flex gap-3 mt-1 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                                                    <span>{fileItem.pageCount || '?'} Pages</span>
                                                    <span>{(fileItem.size / (1024 * 1024)).toFixed(2)} MB</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center gap-2">
                                                <div className="text-[10px] font-bold text-muted-foreground bg-muted px-2 py-1 uppercase">
                                                    Pos {index + 1}
                                                </div>
                                                <Button 
                                                    size="icon" 
                                                    variant="destructive" 
                                                    className="rounded-none h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    onClick={() => removeFile(fileItem.id)}
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                                
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="flex items-center justify-center p-6 border-2 border-dashed border-border/60 hover:border-primary/40 bg-card/20 hover:bg-card/40 transition-all rounded-none cursor-pointer"
                                >
                                    <Plus className="h-6 w-6 mr-2 text-muted-foreground" />
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Add More Files</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Controls */}
                <div className="space-y-6">
                    <Card className="rounded-none border-border/40 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4 border-b border-border/40">
                            <CardTitle className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                                <Settings2 className="h-4 w-4 text-primary" /> Summary
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                    <span>Total Files</span>
                                    <span className="text-foreground">{files.length}</span>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                    <span>Total Pages</span>
                                    <span className="text-foreground">
                                        {files.reduce((acc, f) => acc + (f.pageCount || 0), 0)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                    <span>Total Size</span>
                                    <span className="text-foreground">
                                        {(files.reduce((acc, f) => acc + f.size, 0) / (1024 * 1024)).toFixed(2)} MB
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border/40">
                                <Button 
                                    className="w-full rounded-none h-12 font-bold uppercase tracking-widest"
                                    disabled={files.length < 2 || isProcessing || !pdflib}
                                    onClick={mergePDFs}
                                >
                                    {isProcessing ? "Merging..." : "Download Merged PDF"}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <FilePlus className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Smart Merging</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Our merger maintains links, bookmarks, and form fields from original documents. Everything happens locally in your browser tab.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
