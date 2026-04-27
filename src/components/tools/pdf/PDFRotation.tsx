"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    RotateCw, 
    RotateCcw, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    ArrowRightLeft,
    CheckCircle2,
    Circle,
    LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

declare global {
    interface Window {
        pdfjsLib: any;
        PDFLib: any;
    }
}

interface PageState {
    pageNumber: number;
    rotation: number;
    dataUrl: string;
}

export default function PDFRotation() {
    const [pdfjs, setPdfjs] = useState<any>(null);
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [pages, setPages] = useState<PageState[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    
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
            script.onload = () => setPdflib(window.PDFLib);
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
        setLoadingProgress(0);
        try {
            const arrayBuffer = await pdfFile.arrayBuffer();
            const loadingTask = pdfjs.getDocument(arrayBuffer);
            const pdf = await loadingTask.promise;
            
            const numPages = pdf.numPages;
            const newPages: PageState[] = [];

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
                    rotation: 0,
                    dataUrl: canvas.toDataURL("image/png")
                });
                
                setLoadingProgress(Math.round((i / numPages) * 100));
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

    const rotatePage = (num: number, direction: 'cw' | 'ccw') => {
        setPages(prev => prev.map(p => {
            if (p.pageNumber === num) {
                let newRot = direction === 'cw' ? p.rotation + 90 : p.rotation - 90;
                if (newRot >= 360) newRot = 0;
                if (newRot < 0) newRot = 270;
                return { ...p, rotation: newRot };
            }
            return p;
        }));
    };

    const rotateAll = (direction: 'cw' | 'ccw') => {
        setPages(prev => prev.map(p => {
            let newRot = direction === 'cw' ? p.rotation + 90 : p.rotation - 90;
            if (newRot >= 360) newRot = 0;
            if (newRot < 0) newRot = 270;
            return { ...p, rotation: newRot };
        }));
    };

    const savePDF = async () => {
        if (!pdflib || !file) return;
        setIsProcessing(true);
        try {
            const { PDFDocument, degrees } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const docPages = pdfDoc.getPages();

            pages.forEach((p, idx) => {
                if (p.rotation !== 0) {
                    const page = docPages[idx];
                    const currentRotation = page.getRotation().angle;
                    page.setRotation(degrees(currentRotation + p.rotation));
                }
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace(".pdf", "")}_rotated.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("PDF saved with new rotation settings!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to save rotated PDF");
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
                        <RotateCw className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Rotation</h2>
                        <p className="text-sm text-muted-foreground">Rotate individual pages or the entire document clockwise or counter-clockwise</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-none border-primary/20 hover:border-primary/50"
                    >
                        <Upload className="mr-2 h-4 w-4" /> {file ? "Change PDF" : "Select PDF"}
                    </Button>
                    <Button 
                        disabled={pages.length === 0 || isProcessing || !pdflib}
                        onClick={savePDF}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</>
                        ) : (
                            <><Download className="mr-2 h-4 w-4" /> Save PDF</>
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
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Rotate</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Fix upside down or sideways PDF pages easily. Everything is processed safely in your browser.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">90°</Badge>
                                <Badge variant="outline">180°</Badge>
                                <Badge variant="outline">270°</Badge>
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
                                    <Button variant="ghost" size="sm" onClick={() => rotateAll('cw')} className="h-7 text-[10px] font-bold uppercase tracking-widest">
                                        <RotateCw className="h-3 w-3 mr-2" /> Rotate All CW
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={() => rotateAll('ccw')} className="h-7 text-[10px] font-bold uppercase tracking-widest">
                                        <RotateCcw className="h-3 w-3 mr-2" /> Rotate All CCW
                                    </Button>
                                </div>
                            </div>
                            
                            {isProcessing && loadingProgress < 100 && (
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                        <span>Analyzing Pages...</span>
                                        <span>{loadingProgress}%</span>
                                    </div>
                                    <Progress value={loadingProgress} className="h-1 rounded-none bg-primary/10" />
                                </div>
                            )}

                            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
                                {pages.map((page) => (
                                    <Card 
                                        key={page.pageNumber} 
                                        className="rounded-none border-border/40 bg-card/40 overflow-hidden group"
                                    >
                                        <div className="aspect-[3/4] relative bg-muted p-4 flex items-center justify-center overflow-hidden">
                                            <div 
                                                className="transition-transform duration-300 shadow-lg"
                                                style={{ transform: `rotate(${page.rotation}deg)` }}
                                            >
                                                <img 
                                                    src={page.dataUrl} 
                                                    alt={`Page ${page.pageNumber}`} 
                                                    className="max-w-full max-h-full object-contain bg-white"
                                                />
                                            </div>
                                            
                                            <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 text-[10px] font-bold text-white uppercase tracking-widest">
                                                Page {page.pageNumber}
                                            </div>
                                            
                                            {page.rotation !== 0 && (
                                                <div className="absolute top-2 right-2 p-1 bg-primary text-white rounded-full">
                                                    <RotateCw className="h-3 w-3" />
                                                </div>
                                            )}
                                        </div>
                                        <CardContent className="p-2 grid grid-cols-2 gap-1 border-t border-border/40">
                                            <Button 
                                                variant="ghost" 
                                                size="sm" 
                                                onClick={() => rotatePage(page.pageNumber, 'ccw')}
                                                className="h-8 rounded-none text-[10px] font-bold uppercase tracking-widest"
                                            >
                                                <RotateCcw className="h-3 w-3" />
                                            </Button>
                                            <Button 
                                                variant="ghost" 
                                                size="sm" 
                                                onClick={() => rotatePage(page.pageNumber, 'cw')}
                                                className="h-8 rounded-none text-[10px] font-bold uppercase tracking-widest"
                                            >
                                                <RotateCw className="h-3 w-3" />
                                            </Button>
                                        </CardContent>
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
                                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Quick Controls</Label>
                                <div className="grid grid-cols-1 gap-2">
                                    <Button 
                                        variant="outline" 
                                        onClick={() => rotateAll('cw')}
                                        disabled={pages.length === 0}
                                        className="rounded-none h-10 text-[10px] font-bold uppercase tracking-widest"
                                    >
                                        Rotate All 90°
                                    </Button>
                                    <Button 
                                        variant="outline" 
                                        onClick={() => {
                                            rotateAll('cw');
                                            rotateAll('cw');
                                        }}
                                        disabled={pages.length === 0}
                                        className="rounded-none h-10 text-[10px] font-bold uppercase tracking-widest"
                                    >
                                        Rotate All 180°
                                    </Button>
                                    <Button 
                                        variant="ghost" 
                                        onClick={() => setPages(prev => prev.map(p => ({ ...p, rotation: 0 })))}
                                        disabled={pages.length === 0}
                                        className="rounded-none h-10 text-[10px] font-bold uppercase tracking-widest text-destructive"
                                    >
                                        Reset All
                                    </Button>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border/40">
                                <Button 
                                    className="w-full rounded-none h-12 font-bold uppercase tracking-widest"
                                    disabled={pages.length === 0 || isProcessing || !pdflib}
                                    onClick={savePDF}
                                >
                                    {isProcessing ? "Processing..." : "Save Changes"}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <LayoutGrid className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Visual Editor</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Click on the rotation icons under each page preview to fix individual pages, or use the "Rotate All" button for the whole document.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
