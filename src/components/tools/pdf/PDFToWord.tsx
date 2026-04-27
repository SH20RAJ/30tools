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
    AlertCircle,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

declare global {
    interface Window {
        pdfjsLib: any;
        docx: any;
    }
}

export default function PDFToWord() {
    const [pdfjs, setPdfjs] = useState<any>(null);
    const [docx, setDocx] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [extractedText, setExtractedText] = useState<string>("");
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

        // Load docx
        if (!window.docx) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/docx@8.2.2/build/index.min.js";
            script.async = true;
            script.onload = () => setDocx(window.docx);
            document.head.appendChild(script);
        } else {
            setDocx(window.docx);
        }
    }, []);

    const onFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            setExtractedText("");
            toast.success("PDF loaded");
        } else if (selectedFile) {
            toast.error("Please select a valid PDF file");
        }
    }, []);

    const convertToWord = async () => {
        if (!pdfjs || !docx || !file) {
            toast.error("Libraries are still loading...");
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const loadingTask = pdfjs.getDocument(arrayBuffer);
            const pdf = await loadingTask.promise;
            
            const numPages = pdf.numPages;
            let fullText = "";

            const sections = [];

            for (let i = 1; i <= numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map((item: any) => item.str).join(" ");
                fullText += pageText + "\n\n";
                
                // Create docx paragraph for this page
                const paragraphs = textContent.items.map((item: any) => {
                    return new docx.Paragraph({
                        children: [new docx.TextRun(item.str)],
                    });
                });

                sections.push({
                    properties: {},
                    children: paragraphs,
                });

                setProgress(Math.round((i / numPages) * 50));
            }

            setExtractedText(fullText.substring(0, 1000) + "...");

            const doc = new docx.Document({
                sections: sections,
            });

            const blob = await docx.Packer.toBlob(doc);
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace(".pdf", "")}.docx`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            setProgress(100);
            toast.success("PDF converted to Word successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to convert PDF to Word");
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
                        <FileText className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF to Word</h2>
                        <p className="text-sm text-muted-foreground">Convert PDF documents into editable Microsoft Word (.docx) files</p>
                    </div>
                </div>
                {(!pdfjs || !docx) && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Loader2 className="h-3 w-3 animate-spin" /> Loading Engine...
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
                        disabled={!file || isProcessing || !docx}
                        onClick={convertToWord}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {progress}%</>
                        ) : (
                            <><Download className="mr-2 h-4 w-4" /> Convert to Word</>
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
                                <FileType className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Convert</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Extract text and formatting from your PDF into a Word document. No files are uploaded to our servers.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">PDF</Badge>
                                <Badge variant="outline">DOCX</Badge>
                                <Badge variant="outline">Editable</Badge>
                            </div>
                        </div>
                    ) : (
                        <Card className="rounded-none border-border/40 bg-card/40 overflow-hidden">
                            <div className="p-12 flex flex-col items-center justify-center bg-muted/30 border-b border-border/40">
                                <div className="p-6 bg-primary/10 rounded-none mb-6">
                                    <FileText className="h-16 w-16 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold truncate max-w-md">{file.name}</h3>
                                <div className="mt-4 flex gap-4">
                                    <Badge variant="secondary" className="rounded-none">{(file.size / (1024 * 1024)).toFixed(2)} MB</Badge>
                                    <Badge variant="outline" className="rounded-none border-primary/20 text-primary">Ready to Convert</Badge>
                                </div>
                            </div>
                            <CardContent className="p-8 space-y-6">
                                {isProcessing && (
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                            <span>Converting Document...</span>
                                            <span>{progress}%</span>
                                        </div>
                                        <Progress value={progress} className="h-1 rounded-none bg-primary/10" />
                                    </div>
                                )}
                                
                                {extractedText && (
                                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                                        <div className="flex items-center gap-2 text-primary">
                                            <CheckCircle2 className="h-5 w-5" />
                                            <h4 className="font-bold">Conversion Complete</h4>
                                        </div>
                                        <div className="p-4 bg-muted/50 border border-border/40 rounded-none italic text-xs text-muted-foreground">
                                            Preview: {extractedText}
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Your editable Word document has been generated and downloaded.
                                        </p>
                                    </div>
                                )}
                                
                                <div className="pt-4 border-t border-border/40 flex justify-end">
                                    <Button 
                                        size="lg"
                                        disabled={isProcessing}
                                        onClick={convertToWord}
                                        className="rounded-none px-12 h-14 font-bold uppercase tracking-widest"
                                    >
                                        {isProcessing ? "Processing..." : extractedText ? "Convert Again" : "Start Conversion"}
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
                                <Settings2 className="h-4 w-4 text-primary" /> Info
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Layout Preservation</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Our converter attempts to preserve the text flow and basic styling. For complex layouts with many images, some adjustments might be needed in Word.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Privacy Guarantee</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    We use client-side technologies to process your PDF. Your data never leaves your computer, making it more secure than server-based converters.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertCircle className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Limitations</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Scanned PDFs (images of text) will not be editable unless they have been OCRed. This tool works best with text-based PDFs.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
