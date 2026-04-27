"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    ArrowLeftRight, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    LayoutGrid,
    ChevronLeft,
    ChevronRight,
    ArrowUpDown
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

interface PageData {
    id: string;
    originalIndex: number;
    dataUrl: string;
}

export default function PDFRearrange() {
    const [pdfjs, setPdfjs] = useState<any>(null);
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [pages, setPages] = useState<PageData[]>([]);
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
            const newPages: PageData[] = [];

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
                    id: Math.random().toString(36).substr(2, 9),
                    originalIndex: i - 1,
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

    const movePage = (index: number, direction: 'left' | 'right') => {
        const newPages = [...pages];
        const targetIndex = direction === 'left' ? index - 1 : index + 1;
        
        if (targetIndex < 0 || targetIndex >= pages.length) return;
        
        [newPages[index], newPages[targetIndex]] = [newPages[targetIndex], newPages[index]];
        setPages(newPages);
    };

    const savePDF = async () => {
        if (!pdflib || !file) return;
        setIsProcessing(true);
        try {
            const { PDFDocument } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            
            const newPdfDoc = await PDFDocument.create();
            const originalPages = await newPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());

            // Add pages in the new order
            for (const page of pages) {
                newPdfDoc.addPage(originalPages[page.originalIndex]);
            }

            const pdfBytes = await newPdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace(".pdf", "")}_reordered.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("PDF reordered and saved successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to reorder PDF");
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
                        <ArrowLeftRight className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Rearrange PDF Pages</h2>
                        <p className="text-sm text-muted-foreground">Visually reorder the pages of your PDF document using a simple grid editor</p>
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
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                        ) : (
                            <><Download className="mr-2 h-4 w-4" /> Save Reordered PDF</>
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
                                <LayoutGrid className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Reorder</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Simply use the arrows to move pages to their correct position. No files are uploaded to our servers.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">Visual</Badge>
                                <Badge variant="outline">Secure</Badge>
                                <Badge variant="outline">Fast</Badge>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-4">
                                <Badge variant="secondary" className="rounded-none uppercase tracking-tighter">{file.name}</Badge>
                                <span className="text-xs text-muted-foreground">{pages.length} Pages</span>
                            </div>
                            
                            {isProcessing && loadingProgress < 100 && (
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                        <span>Loading Page Previews...</span>
                                        <span>{loadingProgress}%</span>
                                    </div>
                                    <Progress value={loadingProgress} className="h-1 rounded-none bg-primary/10" />
                                </div>
                            )}

                            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
                                {pages.map((page, index) => (
                                    <Card 
                                        key={page.id} 
                                        className="rounded-none border-border/40 bg-card/40 overflow-hidden group hover:border-primary/40 transition-colors"
                                    >
                                        <div className="aspect-[3/4] bg-white p-4 flex items-center justify-center relative overflow-hidden">
                                            <img 
                                                src={page.dataUrl} 
                                                alt={`Page ${index + 1}`} 
                                                className="max-w-full max-h-full object-contain shadow-sm"
                                            />
                                            <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 text-[10px] font-bold text-white uppercase tracking-widest">
                                                Page {index + 1}
                                            </div>
                                            {page.originalIndex !== index && (
                                                <div className="absolute top-2 right-2 p-1 bg-primary text-white rounded-none">
                                                    <ArrowUpDown className="h-3 w-3" />
                                                </div>
                                            )}
                                        </div>
                                        <CardContent className="p-2 grid grid-cols-2 gap-1 border-t border-border/40 bg-muted/20">
                                            <Button 
                                                variant="ghost" 
                                                size="sm" 
                                                disabled={index === 0}
                                                onClick={() => movePage(index, 'left')}
                                                className="h-8 rounded-none text-[10px] font-bold uppercase tracking-widest hover:bg-primary/10 hover:text-primary disabled:opacity-30"
                                            >
                                                <ChevronLeft className="h-4 w-4" />
                                            </Button>
                                            <Button 
                                                variant="ghost" 
                                                size="sm" 
                                                disabled={index === pages.length - 1}
                                                onClick={() => movePage(index, 'right')}
                                                className="h-8 rounded-none text-[10px] font-bold uppercase tracking-widest hover:bg-primary/10 hover:text-primary disabled:opacity-30"
                                            >
                                                <ChevronRight className="h-4 w-4" />
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
                                <Settings2 className="h-4 w-4 text-primary" /> Info
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Visual Feedback</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    A small "moved" icon will appear in the top-right corner of any page that is no longer in its original position.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Local Ordering</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Your documents are processed locally. This makes the reordering process extremely fast even for large PDF files.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <ArrowLeftRight className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Pro Tip</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Need to move a page long distances? Click the arrows repeatedly. The grid updates instantly for a smooth experience.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
