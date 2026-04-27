"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    Trash2, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    CheckCircle2,
    XCircle,
    LayoutGrid,
    Eye
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

interface PageItem {
    pageNumber: number;
    dataUrl: string;
}

export default function PDFPageDelete() {
    const [pdfjs, setPdfjs] = useState<any>(null);
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [pages, setPages] = useState<PageItem[]>([]);
    const [selectedPages, setSelectedPages] = useState<number[]>([]);
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
            setSelectedPages([]);
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
            const newPages: PageItem[] = [];

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

    const toggleSelection = (num: number) => {
        setSelectedPages(prev => 
            prev.includes(num) 
                ? prev.filter(p => p !== num) 
                : [...prev, num]
        );
    };

    const deletePages = async () => {
        if (!pdflib || !file || selectedPages.length === 0) {
            toast.error("Please select pages to delete");
            return;
        }

        if (selectedPages.length === pages.length) {
            toast.error("Cannot delete all pages from a PDF");
            return;
        }

        setIsProcessing(true);
        try {
            const { PDFDocument } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);

            // Sort selected pages in descending order to avoid index shift issues
            const indicesToRemove = selectedPages
                .map(num => num - 1)
                .sort((a, b) => b - a);

            indicesToRemove.forEach(index => {
                pdfDoc.removePage(index);
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace(".pdf", "")}_modified.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("Pages removed successfully!");
            // Refresh previews
            loadPreviews(new File([blob], file.name, { type: "application/pdf" }));
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete pages");
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
                        <Trash2 className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Remove PDF Pages</h2>
                        <p className="text-sm text-muted-foreground">Select and delete unwanted pages from your PDF document securely</p>
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
                        disabled={selectedPages.length === 0 || isProcessing || !pdflib}
                        onClick={deletePages}
                        className="rounded-none bg-destructive hover:bg-destructive/90 text-white"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                        ) : (
                            <><Trash2 className="mr-2 h-4 w-4" /> Delete {selectedPages.length} Pages</>
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
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Manage Pages</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Choose which pages you want to keep and which ones to discard. No files are uploaded to our servers.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">Select</Badge>
                                <Badge variant="outline">Remove</Badge>
                                <Badge variant="outline">Download</Badge>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between mb-4 bg-muted/20 p-4 border border-border/40">
                                <div className="flex items-center gap-4">
                                    <Badge variant="secondary" className="rounded-none">{file.name}</Badge>
                                    <span className="text-xs text-muted-foreground">{selectedPages.length} of {pages.length} selected for deletion</span>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="sm" onClick={() => setSelectedPages(pages.map(p => p.pageNumber))} className="text-[10px] font-bold uppercase tracking-widest h-8">Select All</Button>
                                    <Button variant="ghost" size="sm" onClick={() => setSelectedPages([])} className="text-[10px] font-bold uppercase tracking-widest h-8">Clear All</Button>
                                </div>
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
                                {pages.map((page) => (
                                    <Card 
                                        key={page.pageNumber} 
                                        onClick={() => toggleSelection(page.pageNumber)}
                                        className={`rounded-none cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                                            selectedPages.includes(page.pageNumber) 
                                                ? 'ring-2 ring-destructive border-destructive shadow-lg' 
                                                : 'border-border/40 hover:border-primary/40'
                                        }`}
                                    >
                                        <div className="aspect-[3/4] bg-white p-4 flex items-center justify-center overflow-hidden">
                                            <img 
                                                src={page.dataUrl} 
                                                alt={`Page ${page.pageNumber}`} 
                                                className={`max-w-full max-h-full object-contain transition-opacity ${selectedPages.includes(page.pageNumber) ? 'opacity-30 grayscale' : 'opacity-100'}`}
                                            />
                                            
                                            {selectedPages.includes(page.pageNumber) && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-destructive/10">
                                                    <XCircle className="h-12 w-12 text-destructive animate-in zoom-in-50" />
                                                </div>
                                            )}
                                            
                                            <div className={`absolute top-2 left-2 px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${selectedPages.includes(page.pageNumber) ? 'bg-destructive text-white' : 'bg-black/60 text-white'}`}>
                                                Page {page.pageNumber}
                                            </div>
                                        </div>
                                        {selectedPages.includes(page.pageNumber) && (
                                            <div className="p-2 bg-destructive text-white text-[9px] font-bold uppercase tracking-tighter text-center">
                                                Will be removed
                                            </div>
                                        )}
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
                                <Settings2 className="h-4 w-4 text-primary" /> Guide
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">How to use</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Click on any page thumbnail to mark it for deletion. Once you've selected all unwanted pages, click the red "Delete Pages" button at the top.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Local Security</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Your PDF is modified entirely within your browser window. No data is sent to a server, ensuring 100% privacy for sensitive documents.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Privacy Note</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                For maximum security, we recommend closing this tab after your download is complete. This clears the memory buffer used for processing.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
