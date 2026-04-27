"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    FileText, 
    Download, 
    FileType,
    Loader2,
    Settings2,
    FileCheck,
    AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";

declare global {
    interface Window {
        mammoth: any;
        PDFLib: any;
        html2canvas: any;
    }
}

export default function WordToPDF() {
    const [mammoth, setMammoth] = useState<any>(null);
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [previewHtml, setPreviewHtml] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load Mammoth
        if (!window.mammoth) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/mammoth@1.6.0/mammoth.browser.min.js";
            script.async = true;
            script.onload = () => setMammoth(window.mammoth);
            document.head.appendChild(script);
        } else {
            setMammoth(window.mammoth);
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

        // Load html2canvas from CDN if not already present or if we want to be sure
        if (!window.html2canvas) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const onFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && (selectedFile.name.endsWith(".docx") || selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            setFile(selectedFile);
            toast.success("Document loaded");
            convertToHtml(selectedFile);
        } else if (selectedFile) {
            toast.error("Please select a valid .docx file");
        }
    }, [mammoth]);

    const convertToHtml = async (docxFile: File) => {
        if (!mammoth) return;
        setIsProcessing(true);
        try {
            const arrayBuffer = await docxFile.arrayBuffer();
            const result = await mammoth.convertToHtml({ arrayBuffer });
            setPreviewHtml(result.value);
            if (result.messages.length > 0) {
                console.log("Mammoth messages:", result.messages);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to read Word document");
        } finally {
            setIsProcessing(false);
        }
    };

    const generatePDF = async () => {
        if (!pdflib || !previewRef.current || !window.html2canvas) {
            toast.error("Required libraries are still loading...");
            return;
        }

        setIsProcessing(true);
        try {
            const canvas = await window.html2canvas(previewRef.current, {
                scale: 2,
                useCORS: true,
                logging: false
            });

            const imgData = canvas.toDataURL("image/jpeg", 0.95);
            const { PDFDocument, PageSizes } = pdflib;
            const pdfDoc = await PDFDocument.create();
            
            // Convert pixels to points (1 pixel = 0.75 points)
            const width = canvas.width * 0.75 / 2; // Divided by scale
            const height = canvas.height * 0.75 / 2;

            const page = pdfDoc.addPage([width, height]);
            const img = await pdfDoc.embedJpg(imgData);
            
            page.drawImage(img, {
                x: 0,
                y: 0,
                width: width,
                height: height,
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file?.name.replace(".docx", "")}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("Word converted to PDF successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate PDF");
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
                        <FileType className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Word to PDF</h2>
                        <p className="text-sm text-muted-foreground">Convert .docx documents to professional PDF files instantly</p>
                    </div>
                </div>
                {(!mammoth || !pdflib) && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Loader2 className="h-3 w-3 animate-spin" /> Loading Conversion Engine...
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-none border-primary/20 hover:border-primary/50"
                    >
                        <Upload className="mr-2 h-4 w-4" /> {file ? "Change Document" : "Select Word File"}
                    </Button>
                    <Button 
                        disabled={!file || isProcessing || !pdflib}
                        onClick={generatePDF}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                        ) : (
                            <><Download className="mr-2 h-4 w-4" /> Convert to PDF</>
                        )}
                    </Button>
                </div>
                <input 
                    type="file" 
                    accept=".docx" 
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
                            <h3 className="mt-6 text-xl font-bold">Upload Word Document</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Supported formats: .docx (Microsoft Word). Your document is processed locally and stays 100% private.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">DOCX</Badge>
                                <Badge variant="outline">PDF</Badge>
                                <Badge variant="outline">Private</Badge>
                            </div>
                        </div>
                    ) : (
                        <Card className="rounded-none border-border/40 bg-white overflow-hidden min-h-[600px]">
                            <CardHeader className="bg-muted/30 border-b border-border/40 py-4 flex flex-row items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FileCheck className="h-4 w-4 text-primary" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{file.name}</span>
                                </div>
                                <Badge variant="outline" className="rounded-none border-primary/20 text-primary uppercase text-[10px]">Preview Mode</Badge>
                            </CardHeader>
                            <CardContent className="p-8 md:p-12 text-black">
                                <div 
                                    ref={previewRef}
                                    className="prose prose-sm max-w-none word-preview"
                                    dangerouslySetInnerHTML={{ __html: previewHtml }}
                                />
                                {isProcessing && !previewHtml && (
                                    <div className="flex flex-col items-center justify-center py-24 gap-4">
                                        <Loader2 className="h-8 w-8 animate-spin text-primary/40" />
                                        <p className="text-sm text-muted-foreground animate-pulse">Rendering document...</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
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
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">How it works</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    We render your Word document to HTML and then capture it as a high-resolution PDF. This ensures maximum compatibility and formatting preservation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Format Support</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Currently supports <strong>.docx</strong> files. Legacy .doc files are not supported yet.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertCircle className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Quality Tip</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                For best results, use standard fonts and layouts in your Word document. Complex floating elements might shift slightly during conversion.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            
            <style jsx global>{`
                .word-preview {
                    font-family: 'Inter', sans-serif;
                    line-height: 1.6;
                }
                .word-preview h1 { font-size: 2em; font-weight: bold; margin-bottom: 0.5em; }
                .word-preview h2 { font-size: 1.5em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em; }
                .word-preview p { margin-bottom: 1em; }
                .word-preview table { width: 100%; border-collapse: collapse; margin-bottom: 1em; }
                .word-preview table td, .word-preview table th { border: 1px solid #ddd; padding: 8px; }
            `}</style>
        </div>
    );
}
