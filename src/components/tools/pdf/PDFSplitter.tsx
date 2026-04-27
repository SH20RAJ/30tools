"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import JSZip from "jszip";
import { 
    Upload, 
    Scissors, 
    X, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    CheckCircle2,
    Circle,
    Copy,
    LayoutGrid,
    SplitSquareVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

declare global {
    interface Window {
        pdfjsLib: any;
        PDFLib: any;
    }
}

interface PagePreview {
    pageNumber: number;
    dataUrl: string;
    selected: boolean;
}

export default function PDFSplitter() {
    const [pdfjs, setPdfjs] = useState<any>(null);
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [pages, setPages] = useState<PagePreview[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [ranges, setRanges] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Load PDF.js
        if (!window.pdfjsLib) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js";
            script.async = true;
            script.onload = () => {
                window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
                setPdfjs(window.pdfjsLib);
            };
            document.head.appendChild(script);
        } else {
            setPdfjs(window.pdfjsLib);
        }

        // Load PDF-Lib
        if (!window.PDFLib) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js";
            script.async = true;
            script.onload = () => {
                setPdflib(window.PDFLib);
            };
            document.head.appendChild(script);
        } else {
            setPdflib(window.PDFLib);
        }
    }, []);

    const onFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            setPages([]);
            loadPreviews(selectedFile);
        } else if (selectedFile) {
            toast.error("Please select a valid PDF file");
        }
    }, [pdfjs]);

    const loadPreviews = async (pdfFile: File) => {
        if (!pdfjs) return;
        setIsProcessing(true);
        setProgress(0);
        try {
            const arrayBuffer = await pdfFile.arrayBuffer();
            const loadingTask = pdfjs.getDocument(arrayBuffer);
            const pdf = await loadingTask.promise;
            
            const numPages = pdf.numPages;
            const newPages: PagePreview[] = [];

            for (let i = 1; i <= numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 0.4 });
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
            toast.success(`PDF loaded with ${numPages} pages`);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load PDF previews");
        } finally {
            setIsProcessing(false);
        }
    };

    const togglePage = (num: number) => {
        setPages(prev => prev.map(p => p.pageNumber === num ? { ...p, selected: !p.selected } : p));
    };

    const splitPDF = async () => {
        if (!pdflib || !file) return;
        
        const selectedPageNumbers = pages.filter(p => p.selected).map(p => p.pageNumber);
        if (selectedPageNumbers.length === 0) {
            toast.error("Please select at least one page to extract");
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        try {
            const { PDFDocument } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            const sourcePdf = await PDFDocument.load(arrayBuffer);
            const zip = new JSZip();

            for (let i = 0; i < selectedPageNumbers.length; i++) {
                const pageNum = selectedPageNumbers[i];
                const newPdf = await PDFDocument.create();
                const [copiedPage] = await newPdf.copyPages(sourcePdf, [pageNum - 1]);
                newPdf.addPage(copiedPage);
                
                const pdfBytes = await newPdf.save();
                zip.file(`page-${pageNum}.pdf`, pdfBytes);
                setProgress(Math.round(((i + 1) / selectedPageNumbers.length) * 100));
            }

            const content = await zip.generateAsync({ type: "blob" });
            const url = URL.createObjectURL(content);
            const link = document.createElement("a");
            link.href = url;
            link.download = `split-pdf-${Date.now()}.zip`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("PDF split successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to split PDF");
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
                        <Scissors className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Splitter</h2>
                        <p className="text-sm text-muted-foreground">Extract specific pages or split your entire PDF into individual files</p>
                    </div>
                </div>
                {(!pdfjs || !pdflib) && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Loader2 className="h-3 w-3 animate-spin" /> Loading Engines...
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-none border-primary/20 hover:border-primary/50"
                    >
                        <Upload className="mr-2 h-4 w-4" /> Change PDF
                    </Button>
                    <Button 
                        disabled={pages.length === 0 || isProcessing || !pdflib}
                        onClick={splitPDF}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {progress}%</>
                        ) : (
                            <><SplitSquareVertical className="mr-2 h-4 w-4" /> Split PDF</>
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
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Split</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Select specific pages to extract or split the entire document. Everything is processed safely in your browser.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">Split</Badge>
                                <Badge variant="outline">Extract</Badge>
                                <Badge variant="outline">Secure</Badge>
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
                                    <Button variant="ghost" size="sm" onClick={() => setPages(prev => prev.map(p => ({ ...p, selected: true })))} className="h-7 text-[10px] font-bold uppercase tracking-widest">Select All</Button>
                                    <Button variant="ghost" size="sm" onClick={() => setPages(prev => prev.map(p => ({ ...p, selected: false })))} className="h-7 text-[10px] font-bold uppercase tracking-widest">Clear</Button>
                                </div>
                            </div>
                            
                            {isProcessing && progress < 100 && (
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                        <span>Analyzing Pages...</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <Progress value={progress} className="h-1 rounded-none bg-primary/10" />
                                </div>
                            )}

                            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                                {pages.map((page) => (
                                    <Card 
                                        key={page.pageNumber} 
                                        onClick={() => togglePage(page.pageNumber)}
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

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <Card className="rounded-none border-border/40 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4 border-b border-border/40">
                            <CardTitle className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                                <Settings2 className="h-4 w-4 text-primary" /> Options
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-3">
                                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Selection Summary</Label>
                                <div className="p-4 bg-muted/30 border border-border/40 text-sm">
                                    <div className="flex justify-between mb-2">
                                        <span>Total Pages:</span>
                                        <span className="font-bold">{pages.length}</span>
                                    </div>
                                    <div className="flex justify-between text-primary">
                                        <span>To Extract:</span>
                                        <span className="font-bold">{pages.filter(p => p.selected).length}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border/40">
                                <Button 
                                    className="w-full rounded-none h-12 font-bold uppercase tracking-widest"
                                    disabled={pages.length === 0 || isProcessing || !pdflib}
                                    onClick={splitPDF}
                                >
                                    {isProcessing ? "Splitting..." : "Extract & Download ZIP"}
                                </Button>
                                <p className="mt-4 text-[10px] text-center text-muted-foreground uppercase tracking-widest leading-relaxed">
                                    Each selected page will be saved as a separate PDF file.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <LayoutGrid className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Multiple Modes</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                You can select specific pages to extract them into individual files. Perfect for separating invoices or reports.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
