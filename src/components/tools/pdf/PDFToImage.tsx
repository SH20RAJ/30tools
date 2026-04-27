"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import JSZip from "jszip";
import { 
    Upload, 
    FileImage, 
    X, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    CheckCircle2,
    Circle,
    Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

// Set up the worker for pdf.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PageImage {
    pageNumber: number;
    dataUrl: string;
    selected: boolean;
}

export default function PDFToImage() {
    const [file, setFile] = useState<File | null>(null);
    const [pages, setPages] = useState<PageImage[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [format, setFormat] = useState<"png" | "jpeg" | "webp">("png");
    const [scale, setScale] = useState<string>("2");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            setPages([]);
            loadPdf(selectedFile);
        } else if (selectedFile) {
            toast.error("Please select a valid PDF file");
        }
    }, []);

    const loadPdf = async (pdfFile: File) => {
        setIsProcessing(true);
        setProgress(0);
        try {
            const arrayBuffer = await pdfFile.arrayBuffer();
            const loadingTask = pdfjsLib.getDocument(arrayBuffer);
            const pdf = await loadingTask.promise;
            
            const numPages = pdf.numPages;
            const newPages: PageImage[] = [];

            for (let i = 1; i <= numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 0.5 }); // Low scale for preview
                
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                if (!context) continue;

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({ canvasContext: context, viewport }).promise;
                
                newPages.push({
                    pageNumber: i,
                    dataUrl: canvas.toDataURL("image/png"),
                    selected: true
                });
                
                setProgress(Math.round((i / numPages) * 100));
            }
            
            setPages(newPages);
            toast.success(`Loaded ${numPages} pages`);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load PDF");
        } finally {
            setIsProcessing(false);
        }
    };

    const togglePageSelection = (pageNumber: number) => {
        setPages(prev => prev.map(p => 
            p.pageNumber === pageNumber ? { ...p, selected: !p.selected } : p
        ));
    };

    const selectAll = () => setPages(prev => prev.map(p => ({ ...p, selected: true })));
    const selectNone = () => setPages(prev => prev.map(p => ({ ...p, selected: false })));

    const exportImages = async () => {
        const selectedPages = pages.filter(p => p.selected);
        if (selectedPages.length === 0) {
            toast.error("Please select at least one page");
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        try {
            const arrayBuffer = await file!.arrayBuffer();
            const loadingTask = pdfjsLib.getDocument(arrayBuffer);
            const pdf = await loadingTask.promise;
            const zip = new JSZip();

            for (let i = 0; i < selectedPages.length; i++) {
                const pageInfo = selectedPages[i];
                const page = await pdf.getPage(pageInfo.pageNumber);
                const viewport = page.getViewport({ scale: parseFloat(scale) });
                
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                if (!context) continue;

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({ canvasContext: context, viewport }).promise;
                
                const mimeType = `image/${format}`;
                const dataUrl = canvas.toDataURL(mimeType, 0.9);
                const base64Data = dataUrl.split(",")[1];
                
                zip.file(`page-${pageInfo.pageNumber}.${format}`, base64Data, { base64: true });
                setProgress(Math.round(((i + 1) / selectedPages.length) * 100));
            }

            if (selectedPages.length === 1) {
                // Single file download
                const pageInfo = selectedPages[0];
                const page = await pdf.getPage(pageInfo.pageNumber);
                const viewport = page.getViewport({ scale: parseFloat(scale) });
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                if (context) {
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    await page.render({ canvasContext: context, viewport }).promise;
                    const link = document.createElement("a");
                    link.href = canvas.toDataURL(`image/${format}`, 0.9);
                    link.download = `page-${pageInfo.pageNumber}.${format}`;
                    link.click();
                }
            } else {
                // Zip download
                const content = await zip.generateAsync({ type: "blob" });
                const url = URL.createObjectURL(content);
                const link = document.createElement("a");
                link.href = url;
                link.download = `pdf-pages-${Date.now()}.zip`;
                link.click();
                URL.revokeObjectURL(url);
            }
            
            toast.success("Images exported successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to export images");
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
                        <FileImage className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF to Image</h2>
                        <p className="text-sm text-muted-foreground">Convert PDF pages into high-quality image files</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-none border-primary/20 hover:border-primary/50"
                    >
                        <Upload className="mr-2 h-4 w-4" /> Change PDF
                    </Button>
                    <Button 
                        disabled={pages.length === 0 || isProcessing}
                        onClick={exportImages}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {progress}%</>
                        ) : (
                            <><Download className="mr-2 h-4 w-4" /> Export Images</>
                        )}
                    </Button>
                </div>
                <input 
                    type="file" 
                    accept="application/pdf" 
                    className="hidden" 
                    ref={fileInputRef}
                    onChange={onFileChange}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {!file ? (
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="group cursor-pointer flex flex-col items-center justify-center p-12 md:p-24 border-2 border-dashed border-primary/20 hover:border-primary/40 bg-card/30 hover:bg-card/50 transition-all rounded-none text-center"
                        >
                            <div className="p-6 bg-primary/5 rounded-none group-hover:scale-110 transition-transform">
                                <FileText className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Select or Drop PDF</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Extract pages from your PDF as PNG, JPG, or WebP images. All processing is local and secure.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">PDF</Badge>
                                <Badge variant="outline">PNG/JPG</Badge>
                                <Badge variant="outline">Batch Export</Badge>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="rounded-none uppercase tracking-tighter">{file.name}</Badge>
                                    <span className="text-xs text-muted-foreground">{pages.length} Pages</span>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="sm" onClick={selectAll} className="h-7 text-[10px] font-bold uppercase tracking-widest">Select All</Button>
                                    <Button variant="ghost" size="sm" onClick={selectNone} className="h-7 text-[10px] font-bold uppercase tracking-widest">Clear</Button>
                                </div>
                            </div>
                            
                            {isProcessing && progress < 100 && (
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                        <span>Loading Pages...</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <Progress value={progress} className="h-1 rounded-none bg-primary/10" />
                                </div>
                            )}

                            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                                {pages.map((page) => (
                                    <Card 
                                        key={page.pageNumber} 
                                        onClick={() => togglePageSelection(page.pageNumber)}
                                        className={`rounded-none cursor-pointer transition-all border-2 ${page.selected ? 'border-primary ring-2 ring-primary/20 bg-primary/5' : 'border-border/40 hover:border-primary/40 bg-card/40'}`}
                                    >
                                        <div className="aspect-[3/4] relative overflow-hidden bg-muted group">
                                            <img 
                                                src={page.dataUrl} 
                                                alt={`Page ${page.pageNumber}`} 
                                                className="w-full h-full object-contain"
                                            />
                                            <div className={`absolute top-2 right-2 p-1 ${page.selected ? 'text-primary' : 'text-white/40'}`}>
                                                {page.selected ? <CheckCircle2 className="h-5 w-5 fill-background" /> : <Circle className="h-5 w-5" />}
                                            </div>
                                            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 text-[10px] font-bold text-white uppercase tracking-widest">
                                                Page {page.pageNumber}
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Controls */}
                <div className="space-y-6">
                    <Card className="rounded-none border-border/40 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4 border-b border-border/40">
                            <CardTitle className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                                <Settings2 className="h-4 w-4 text-primary" /> Settings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-3">
                                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Output Format</Label>
                                <Select value={format} onValueChange={(v: any) => setFormat(v)}>
                                    <SelectTrigger className="rounded-none border-primary/10">
                                        <SelectValue placeholder="Select format" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="png">PNG (High Quality)</SelectItem>
                                        <SelectItem value="jpeg">JPG (Smaller Size)</SelectItem>
                                        <SelectItem value="webp">WebP (Optimized)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-3">
                                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Image Quality (DPI)</Label>
                                <Select value={scale} onValueChange={(v: any) => setScale(v)}>
                                    <SelectTrigger className="rounded-none border-primary/10">
                                        <SelectValue placeholder="Select quality" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Standard (72 DPI)</SelectItem>
                                        <SelectItem value="2">High (144 DPI)</SelectItem>
                                        <SelectItem value="3">Retina (300 DPI)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="pt-4 border-t border-border/40">
                                <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                                    <span>Selected Pages</span>
                                    <span className="text-foreground">{pages.filter(p => p.selected).length}</span>
                                </div>
                                <Button 
                                    className="w-full rounded-none h-12 font-bold uppercase tracking-widest"
                                    disabled={pages.length === 0 || isProcessing}
                                    onClick={exportImages}
                                >
                                    {isProcessing ? `Exporting ${progress}%` : "Download Images"}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Copy className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Privacy Policy</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Our PDF to Image tool runs completely in your browser. We don't upload your documents to any server. Your privacy is our priority.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
