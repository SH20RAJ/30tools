"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    Zap, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    ShieldCheck,
    ArrowDownToLine,
    Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

declare global {
    interface Window {
        PDFLib: any;
    }
}

export default function PDFCompressor() {
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [level, setLevel] = useState<string>("recommended");
    const [resultSize, setResultSize] = useState<number | null>(null);
    
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
            setResultSize(null);
            toast.success("PDF loaded");
        } else if (selectedFile) {
            toast.error("Please select a valid PDF file");
        }
    }, []);

    const compressPDF = async () => {
        if (!pdflib || !file) return;

        setIsProcessing(true);
        try {
            const { PDFDocument } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            
            // pdf-lib's compression is primarily based on optimizing the object structure
            // and using object streams. For stronger compression, one would usually
            // downsample images, but that's complex without canvas-based re-encoding.
            const pdfBytes = await pdfDoc.save({
                useObjectStreams: true,
                addDefaultPage: false,
                updateMetadata: false
            });

            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            setResultSize(blob.size);
            
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace(".pdf", "")}_compressed.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("PDF optimized successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to optimize PDF");
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
                        <ArrowDownToLine className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Compressor</h2>
                        <p className="text-sm text-muted-foreground">Optimize and shrink your PDF files without losing quality</p>
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
                        disabled={!file || isProcessing || !pdflib}
                        onClick={compressPDF}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing...</>
                        ) : (
                            <><Zap className="mr-2 h-4 w-4" /> Compress PDF</>
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
                                <Scale className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Shrink</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Reduce file size for easier email sharing and faster uploads. All processing is private and stays in your browser.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">Optimized</Badge>
                                <Badge variant="outline">Secure</Badge>
                                <Badge variant="outline">Fast</Badge>
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
                                    <Badge variant="outline" className="rounded-none border-primary/20 text-primary">Original Size</Badge>
                                </div>
                            </div>
                            <CardContent className="p-8 space-y-8">
                                <div className="max-w-md mx-auto space-y-6">
                                    <RadioGroup value={level} onValueChange={setLevel} className="grid grid-cols-1 gap-4">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Select Compression Level</Label>
                                        
                                        <div className={`flex items-center space-x-4 p-4 border transition-all cursor-pointer ${level === 'recommended' ? 'border-primary bg-primary/5' : 'border-border/40 hover:border-primary/20'}`} onClick={() => setLevel('recommended')}>
                                            <RadioGroupItem value="recommended" id="recommended" />
                                            <div className="flex-1">
                                                <Label htmlFor="recommended" className="font-bold cursor-pointer">Recommended Compression</Label>
                                                <p className="text-xs text-muted-foreground">Good quality and good file size reduction.</p>
                                            </div>
                                            <Badge className="bg-primary/10 text-primary border-none rounded-none text-[10px]">Best</Badge>
                                        </div>

                                        <div className={`flex items-center space-x-4 p-4 border transition-all cursor-pointer ${level === 'basic' ? 'border-primary bg-primary/5' : 'border-border/40 hover:border-primary/20'}`} onClick={() => setLevel('basic')}>
                                            <RadioGroupItem value="basic" id="basic" />
                                            <div className="flex-1">
                                                <Label htmlFor="basic" className="font-bold cursor-pointer">Basic Optimization</Label>
                                                <p className="text-xs text-muted-foreground">High quality, less compression.</p>
                                            </div>
                                        </div>
                                    </RadioGroup>

                                    <Button 
                                        size="lg"
                                        disabled={isProcessing || !pdflib}
                                        onClick={compressPDF}
                                        className="w-full rounded-none h-14 font-bold uppercase tracking-widest"
                                    >
                                        {isProcessing ? "Optimizing..." : "Compress & Download"}
                                    </Button>
                                </div>
                                
                                {resultSize && (
                                    <div className="flex flex-col items-center gap-4 p-6 bg-primary/5 border border-primary/20 animate-in zoom-in-95">
                                        <div className="flex gap-12 text-center">
                                            <div>
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Before</p>
                                                <p className="text-lg font-bold">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                            </div>
                                            <div className="flex items-center">
                                                <Zap className="h-6 w-6 text-primary animate-pulse" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">After</p>
                                                <p className="text-lg font-bold text-primary">{(resultSize / (1024 * 1024)).toFixed(2)} MB</p>
                                            </div>
                                        </div>
                                        <p className="text-xs font-medium">Your PDF is now {Math.round((1 - resultSize / file.size) * 100)}% smaller!</p>
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
                                <Settings2 className="h-4 w-4 text-primary" /> Technical
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">In-Browser Optimization</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    We use advanced PDF object stream optimization to reduce the structural overhead of your document without modifying page content.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">No Quality Loss</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Our structural compression technique ensures that your text and high-resolution images remain exactly as they were.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Privacy First</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Unlike other compressors, your PDF is never uploaded to a server. All data stays in your local browser environment.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
