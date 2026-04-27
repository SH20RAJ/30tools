"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    Type, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    Plus,
    X,
    Type as TypeIcon,
    ChevronLeft,
    ChevronRight,
    Save
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

declare global {
    interface Window {
        pdfjsLib: any;
        PDFLib: any;
    }
}

interface Annotation {
    id: string;
    page: number;
    text: string;
    x: number;
    y: number;
    fontSize: number;
}

export default function PDFEditor() {
    const [pdfjs, setPdfjs] = useState<any>(null);
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [annotations, setAnnotations] = useState<Annotation[]>([]);
    const [activeTool, setActiveTool] = useState<"text" | null>(null);
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Load libraries
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
            setAnnotations([]);
            setCurrentPage(1);
            loadPDF(selectedFile);
        }
    }, [pdfjs]);

    const loadPDF = async (pdfFile: File) => {
        if (!pdfjs) return;
        try {
            const arrayBuffer = await pdfFile.arrayBuffer();
            const loadingTask = pdfjs.getDocument(arrayBuffer);
            const pdf = await loadingTask.promise;
            setTotalPages(pdf.numPages);
            renderPage(pdf, 1);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load PDF");
        }
    };

    const renderPage = async (pdf: any, pageNum: number) => {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;
    };

    useEffect(() => {
        if (file && pdfjs) {
            const loadAndRender = async () => {
                const arrayBuffer = await file.arrayBuffer();
                const loadingTask = pdfjs.getDocument(arrayBuffer);
                const pdf = await loadingTask.promise;
                renderPage(pdf, currentPage);
            };
            loadAndRender();
        }
    }, [currentPage, file, pdfjs]);

    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (activeTool !== "text" || !canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newAnnotation: Annotation = {
            id: Math.random().toString(36).substr(2, 9),
            page: currentPage,
            text: "Double click to edit",
            x,
            y,
            fontSize: 20
        };

        setAnnotations([...annotations, newAnnotation]);
        setActiveTool(null);
    };

    const savePDF = async () => {
        if (!pdflib || !file) return;
        setIsProcessing(true);
        try {
            const { PDFDocument, rgb, StandardFonts } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const pages = pdfDoc.getPages();
            const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

            const canvas = canvasRef.current!;
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;

            for (const ann of annotations) {
                const page = pages[ann.page - 1];
                const { width, height } = page.getSize();
                
                // Convert canvas coordinates to PDF coordinates
                const pdfX = (ann.x / canvasWidth) * width;
                const pdfY = height - ((ann.y / canvasHeight) * height);

                page.drawText(ann.text, {
                    x: pdfX,
                    y: pdfY,
                    size: ann.fontSize,
                    font,
                    color: rgb(0, 0, 0),
                });
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace(".pdf", "")}_edited.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("PDF saved successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to save PDF");
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
                        <TypeIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Editor</h2>
                        <p className="text-sm text-muted-foreground">Add text annotations and simple notes to your PDF files</p>
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
                        disabled={!file || isProcessing || annotations.length === 0}
                        onClick={savePDF}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</>
                        ) : (
                            <><Save className="mr-2 h-4 w-4" /> Save PDF</>
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
                {/* Editor Area */}
                <div className="lg:col-span-3 space-y-6">
                    {!file ? (
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="group cursor-pointer flex flex-col items-center justify-center p-12 md:p-24 border-2 border-dashed border-primary/20 hover:border-primary/40 bg-card/30 hover:bg-card/50 transition-all rounded-none text-center"
                        >
                            <div className="p-6 bg-primary/5 rounded-none group-hover:scale-110 transition-transform">
                                <FileText className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Annotate</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Open any PDF and click to add text notes. All edits happen locally in your browser.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">Annotate</Badge>
                                <Badge variant="outline">Text</Badge>
                                <Badge variant="outline">Private</Badge>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {/* Toolbar */}
                            <div className="flex items-center justify-between bg-muted/30 p-2 border border-border/40 rounded-none">
                                <div className="flex gap-2">
                                    <Button 
                                        variant={activeTool === 'text' ? "default" : "ghost"} 
                                        size="sm" 
                                        onClick={() => setActiveTool(activeTool === 'text' ? null : 'text')}
                                        className="rounded-none h-10 px-4 uppercase text-[10px] font-bold tracking-widest"
                                    >
                                        <Type className="h-4 w-4 mr-2" /> Add Text
                                    </Button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Button 
                                        variant="ghost" 
                                        size="icon" 
                                        disabled={currentPage === 1}
                                        onClick={() => setCurrentPage(prev => prev - 1)}
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                    <Button 
                                        variant="ghost" 
                                        size="icon" 
                                        disabled={currentPage === totalPages}
                                        onClick={() => setCurrentPage(prev => prev + 1)}
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Canvas Area */}
                            <div className="relative border border-border/40 bg-white shadow-2xl overflow-auto min-h-[600px] flex justify-center">
                                <div className="relative inline-block">
                                    <canvas 
                                        ref={canvasRef} 
                                        onClick={handleCanvasClick}
                                        className={`block ${activeTool === 'text' ? 'cursor-crosshair' : 'cursor-default'}`}
                                    />
                                    
                                    {/* Annotations Layer */}
                                    {annotations.filter(a => a.page === currentPage).map((ann) => (
                                        <div 
                                            key={ann.id}
                                            style={{ left: ann.x, top: ann.y }}
                                            className="absolute group"
                                        >
                                            <input 
                                                value={ann.text}
                                                onChange={(e) => {
                                                    setAnnotations(prev => prev.map(a => a.id === ann.id ? { ...a, text: e.target.value } : a));
                                                }}
                                                className="bg-primary/10 border-none focus:ring-2 ring-primary p-1 text-sm min-w-[100px] outline-none"
                                            />
                                            <Button 
                                                size="icon" 
                                                variant="destructive" 
                                                className="absolute -top-6 -right-6 h-5 w-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                onClick={() => setAnnotations(prev => prev.filter(a => a.id !== ann.id))}
                                            >
                                                <X className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    ))}
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
                                <Settings2 className="h-4 w-4 text-primary" /> Annotations
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            {annotations.length === 0 ? (
                                <p className="text-xs text-muted-foreground text-center py-8">No annotations yet. Select "Add Text" and click on the PDF to start.</p>
                            ) : (
                                <div className="space-y-2">
                                    {annotations.map((ann, idx) => (
                                        <div key={ann.id} className="p-3 bg-muted/30 border border-border/40 flex items-center justify-between">
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase">Page {ann.page}</p>
                                                <p className="text-xs truncate font-medium">{ann.text}</p>
                                            </div>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive" onClick={() => setAnnotations(prev => prev.filter(a => a.id !== ann.id))}>
                                                <X className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Plus className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Quick Tip</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Click anywhere on the page to drop a text box. You can then move to other pages and your notes will be saved.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
