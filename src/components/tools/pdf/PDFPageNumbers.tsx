"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    Hash, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    AlignLeft,
    AlignCenter,
    AlignRight,
    ArrowUp,
    ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

declare global {
    interface Window {
        PDFLib: any;
    }
}

export default function PDFPageNumbers() {
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [position, setPosition] = useState<string>("bottom-center");
    const [startFrom, setStartFrom] = useState<number>(1);
    const [fontSize, setFontSize] = useState<number>(12);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
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

    const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            toast.success("PDF loaded");
        } else if (selectedFile) {
            toast.error("Please select a valid PDF file");
        }
    }, []);

    const addPageNumbers = async () => {
        if (!pdflib || !file) return;

        setIsProcessing(true);
        try {
            const { PDFDocument, rgb, StandardFonts } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const pages = pdfDoc.getPages();
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

            for (let i = 0; i < pages.length; i++) {
                const page = pages[i];
                const { width, height } = page.getSize();
                const text = `${i + startFrom}`;
                const textWidth = helveticaFont.widthOfTextAtSize(text, fontSize);
                
                let x = width / 2 - textWidth / 2;
                let y = 20;

                const [vPos, hPos] = position.split("-");
                
                if (hPos === "left") x = 40;
                else if (hPos === "right") x = width - textWidth - 40;
                
                if (vPos === "top") y = height - fontSize - 20;

                page.drawText(text, {
                    x,
                    y,
                    size: fontSize,
                    font: helveticaFont,
                    color: rgb(0, 0, 0),
                });
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace(".pdf", "")}_paged.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("Page numbers added successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to add page numbers");
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
                        <Hash className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Page Numbers</h2>
                        <p className="text-sm text-muted-foreground">Add customizable page numbers to your PDF documents instantly</p>
                    </div>
                </div>
                {!pdflib && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Loader2 className="h-3 w-3 animate-spin" /> Loading PDF Library...
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-none border-primary/20 hover:border-primary/50"
                    >
                        <Upload className="mr-2 h-4 w-4" /> {file ? "Change PDF" : "Select PDF"}
                    </Button>
                    <Button 
                        disabled={!file || isProcessing || !pdflib}
                        onClick={addPageNumbers}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                        ) : (
                            <><Download className="mr-2 h-4 w-4" /> Add Numbers</>
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
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Paginate</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Choose position and style for your page numbers. Your PDF stays private and is processed entirely in your browser.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">Pagination</Badge>
                                <Badge variant="outline">Secure</Badge>
                                <Badge variant="outline">Fast</Badge>
                            </div>
                        </div>
                    ) : (
                        <Card className="rounded-none border-border/40 bg-card/40 overflow-hidden">
                            <div className="p-12 flex flex-col items-center justify-center bg-muted/30 border-b border-border/40 relative">
                                <div className="p-6 bg-primary/10 rounded-none mb-6">
                                    <FileText className="h-16 w-16 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold truncate max-w-md">{file.name}</h3>
                                <div className="mt-4 flex gap-4">
                                    <Badge variant="secondary" className="rounded-none">{(file.size / (1024 * 1024)).toFixed(2)} MB</Badge>
                                    <Badge variant="outline" className="rounded-none border-primary/20 text-primary">Ready to Paginate</Badge>
                                </div>
                                
                                {/* Position Preview Overlay */}
                                <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between opacity-20">
                                    <div className="flex justify-between items-start">
                                        <div className={`p-1 bg-primary ${position === 'top-left' ? 'opacity-100 ring-2 ring-primary' : 'opacity-20'}`}><Hash className="w-4 h-4 text-white" /></div>
                                        <div className={`p-1 bg-primary ${position === 'top-center' ? 'opacity-100 ring-2 ring-primary' : 'opacity-20'}`}><Hash className="w-4 h-4 text-white" /></div>
                                        <div className={`p-1 bg-primary ${position === 'top-right' ? 'opacity-100 ring-2 ring-primary' : 'opacity-20'}`}><Hash className="w-4 h-4 text-white" /></div>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div className={`p-1 bg-primary ${position === 'bottom-left' ? 'opacity-100 ring-2 ring-primary' : 'opacity-20'}`}><Hash className="w-4 h-4 text-white" /></div>
                                        <div className={`p-1 bg-primary ${position === 'bottom-center' ? 'opacity-100 ring-2 ring-primary' : 'opacity-20'}`}><Hash className="w-4 h-4 text-white" /></div>
                                        <div className={`p-1 bg-primary ${position === 'bottom-right' ? 'opacity-100 ring-2 ring-primary' : 'opacity-20'}`}><Hash className="w-4 h-4 text-white" /></div>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-8 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                <AlignLeft className="h-3 w-3" /> Position on Page
                                            </Label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {[
                                                    { id: 'top-left', icon: <ArrowUp className="w-3 h-3 mr-1" /> },
                                                    { id: 'top-center', icon: <ArrowUp className="w-3 h-3 mr-1" /> },
                                                    { id: 'top-right', icon: <ArrowUp className="w-3 h-3 mr-1" /> },
                                                    { id: 'bottom-left', icon: <ArrowDown className="w-3 h-3 mr-1" /> },
                                                    { id: 'bottom-center', icon: <ArrowDown className="w-3 h-3 mr-1" /> },
                                                    { id: 'bottom-right', icon: <ArrowDown className="w-3 h-3 mr-1" /> },
                                                ].map((pos) => (
                                                    <Button
                                                        key={pos.id}
                                                        variant={position === pos.id ? "default" : "outline"}
                                                        size="sm"
                                                        onClick={() => setPosition(pos.id)}
                                                        className="rounded-none text-[10px] font-bold uppercase tracking-tighter h-10 px-1"
                                                    >
                                                        {pos.icon} {pos.id.replace('-', ' ')}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Start From</Label>
                                                <Input 
                                                    type="number" 
                                                    value={startFrom} 
                                                    onChange={(e) => setStartFrom(parseInt(e.target.value) || 1)}
                                                    className="rounded-none h-10 border-primary/10"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Font Size</Label>
                                                <Input 
                                                    type="number" 
                                                    value={fontSize} 
                                                    onChange={(e) => setFontSize(parseInt(e.target.value) || 12)}
                                                    className="rounded-none h-10 border-primary/10"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="pt-6 border-t border-border/40 flex justify-end">
                                    <Button 
                                        size="lg"
                                        disabled={isProcessing || !pdflib}
                                        onClick={addPageNumbers}
                                        className="rounded-none px-12 h-14 font-bold uppercase tracking-widest"
                                    >
                                        {isProcessing ? "Processing..." : "Generate PDF with Numbers"}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
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
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Multiple Positions</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Choose between top or bottom placement, and left, center, or right alignment for your page numbers.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Custom Starting Page</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Set any number to start your pagination. Useful for documents that are part of a larger set.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <AlignCenter className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Pro Tip</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                For academic papers, the standard position is usually bottom center or top right with a font size of 10-12pt.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
