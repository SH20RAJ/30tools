"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    Code, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    Eye,
    Globe,
    Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

declare global {
    interface Window {
        PDFLib: any;
        html2canvas: any;
    }
}

export default function HTMLToPDF() {
    const [pdflib, setPdflib] = useState<any>(null);
    const [html, setHtml] = useState<string>("<h1>Hello World</h1>\n<p>This is a sample HTML document that will be converted to PDF.</p>\n<div style='background: #f0f0f0; padding: 20px; border-radius: 8px;'>\n  <h2 style='color: #3b82f6;'>Interactive PDF Generation</h2>\n  <p>Everything is processed locally in your browser tab!</p>\n</div>");
    const [isProcessing, setIsProcessing] = useState(false);
    
    const previewRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

        // Load html2canvas
        if (!window.html2canvas) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const generatePDF = async () => {
        if (!pdflib || !window.html2canvas || !previewRef.current) {
            toast.error("Libraries are still loading...");
            return;
        }

        setIsProcessing(true);
        try {
            const canvas = await window.html2canvas(previewRef.current, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff"
            });

            const imgData = canvas.toDataURL("image/jpeg", 0.95);
            const { PDFDocument } = pdflib;
            const pdfDoc = await PDFDocument.create();
            
            const width = canvas.width * 0.75 / 2;
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
            link.download = `html-to-pdf-${Date.now()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("HTML converted to PDF successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate PDF from HTML");
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
                        <Code className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">HTML to PDF</h2>
                        <p className="text-sm text-muted-foreground">Convert HTML code or snippets into professional PDF documents instantly</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        disabled={!html || isProcessing || !pdflib}
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
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Editor Column */}
                        <div className="space-y-4">
                            <Card className="rounded-none border-border/40 bg-card/40">
                                <CardHeader className="pb-4 border-b border-border/40 flex flex-row items-center justify-between py-3">
                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                        <Code className="h-3 w-3" /> HTML Editor
                                    </Label>
                                    <Badge variant="outline" className="rounded-none h-5 text-[10px] font-bold uppercase border-primary/20 text-primary">Live Code</Badge>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <Textarea 
                                        value={html} 
                                        onChange={(e) => setHtml(e.target.value)}
                                        placeholder="Paste your HTML here..."
                                        className="rounded-none min-h-[500px] border-none focus-visible:ring-0 font-mono text-xs p-6 bg-transparent resize-none leading-relaxed"
                                    />
                                </CardContent>
                            </Card>
                        </div>

                        {/* Preview Column */}
                        <div className="space-y-4">
                            <Card className="rounded-none border-border/40 bg-white shadow-xl overflow-hidden min-h-[500px]">
                                <CardHeader className="pb-4 border-b border-border/40 flex flex-row items-center justify-between py-3 bg-muted/30">
                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2 text-black/60">
                                        <Eye className="h-3 w-3" /> PDF Preview
                                    </Label>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-8 text-black overflow-auto">
                                    <div 
                                        ref={previewRef}
                                        className="html-render-area"
                                        dangerouslySetInnerHTML={{ __html: html }}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <Card className="rounded-none border-border/40 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4 border-b border-border/40">
                            <CardTitle className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                                <Settings2 className="h-4 w-4 text-primary" /> Features
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">CSS Support</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    You can include <code>&lt;style&gt;</code> tags or inline CSS to style your PDF document. Standard CSS3 is supported.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Hi-Res Rendering</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    We use 2x scaling to ensure that text and images in your PDF remain sharp and professional.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Monitor className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Dev Tool</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Perfect for developers to quickly test PDF layouts or for creating simple reports from HTML templates.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            
            <style jsx global>{`
                .html-render-area {
                    font-family: 'Inter', sans-serif;
                }
            `}</style>
        </div>
    );
}
