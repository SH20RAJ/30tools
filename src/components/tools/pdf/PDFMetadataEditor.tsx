"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    Info, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    Tags,
    User,
    BookOpen,
    Edit3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

declare global {
    interface Window {
        PDFLib: any;
    }
}

interface PDFMetadata {
    title: string;
    author: string;
    subject: string;
    keywords: string;
    creator: string;
    producer: string;
}

export default function PDFMetadataEditor() {
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [metadata, setMetadata] = useState<PDFMetadata>({
        title: "",
        author: "",
        subject: "",
        keywords: "",
        creator: "",
        producer: ""
    });
    
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

    const onFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === "application/pdf" && pdflib) {
            setFile(selectedFile);
            loadMetadata(selectedFile);
        } else if (selectedFile) {
            toast.error("Please select a valid PDF file");
        }
    }, [pdflib]);

    const loadMetadata = async (pdfFile: File) => {
        if (!pdflib) return;
        setIsProcessing(true);
        try {
            const { PDFDocument } = pdflib;
            const arrayBuffer = await pdfFile.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            
            setMetadata({
                title: pdfDoc.getTitle() || "",
                author: pdfDoc.getAuthor() || "",
                subject: pdfDoc.getSubject() || "",
                keywords: pdfDoc.getKeywords() || "",
                creator: pdfDoc.getCreator() || "",
                producer: pdfDoc.getProducer() || ""
            });
            toast.success("Metadata loaded");
        } catch (error) {
            console.error(error);
            toast.error("Failed to read PDF metadata");
        } finally {
            setIsProcessing(false);
        }
    };

    const updateMetadata = async () => {
        if (!pdflib || !file) return;

        setIsProcessing(true);
        try {
            const { PDFDocument } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            
            pdfDoc.setTitle(metadata.title);
            pdfDoc.setAuthor(metadata.author);
            pdfDoc.setSubject(metadata.subject);
            pdfDoc.setKeywords(metadata.keywords.split(',').map(k => k.trim()));
            pdfDoc.setCreator(metadata.creator);
            pdfDoc.setProducer(metadata.producer);

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace(".pdf", "")}_updated.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("Metadata updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to update metadata");
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
                        <Tags className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Metadata Editor</h2>
                        <p className="text-sm text-muted-foreground">View and edit PDF properties like title, author, and keywords</p>
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
                        onClick={updateMetadata}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                        ) : (
                            <><Edit3 className="mr-2 h-4 w-4" /> Update Metadata</>
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
                                <Info className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Edit Metadata</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Manage the internal information of your PDF files. All processing is private and stays in your browser.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">Tags</Badge>
                                <Badge variant="outline">SEO</Badge>
                                <Badge variant="outline">Secure</Badge>
                            </div>
                        </div>
                    ) : (
                        <Card className="rounded-none border-border/40 bg-card/40 overflow-hidden">
                            <div className="p-8 border-b border-border/40 bg-muted/30">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/10 text-primary">
                                        <FileText className="h-8 w-8" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold truncate">{file.name}</h4>
                                        <div className="flex gap-4 mt-1">
                                            <Badge variant="secondary" className="rounded-none h-5 text-[10px] font-bold uppercase tracking-widest">{(file.size / (1024 * 1024)).toFixed(2)} MB</Badge>
                                            <Badge variant="outline" className="rounded-none h-5 text-[10px] font-bold uppercase tracking-widest border-primary/20 text-primary">Metadata Loaded</Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                <Edit3 className="h-3 w-3" /> Document Title
                                            </Label>
                                            <Input 
                                                value={metadata.title} 
                                                onChange={(e) => setMetadata({...metadata, title: e.target.value})}
                                                placeholder="Enter title..."
                                                className="rounded-none h-12 border-primary/20 focus-visible:ring-primary/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                <User className="h-3 w-3" /> Author
                                            </Label>
                                            <Input 
                                                value={metadata.author} 
                                                onChange={(e) => setMetadata({...metadata, author: e.target.value})}
                                                placeholder="Enter author name..."
                                                className="rounded-none h-12 border-primary/20 focus-visible:ring-primary/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                <BookOpen className="h-3 w-3" /> Subject
                                            </Label>
                                            <Input 
                                                value={metadata.subject} 
                                                onChange={(e) => setMetadata({...metadata, subject: e.target.value})}
                                                placeholder="What is this PDF about?"
                                                className="rounded-none h-12 border-primary/20 focus-visible:ring-primary/20"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                                <Tags className="h-3 w-3" /> Keywords (Comma separated)
                                            </Label>
                                            <Textarea 
                                                value={metadata.keywords} 
                                                onChange={(e) => setMetadata({...metadata, keywords: e.target.value})}
                                                placeholder="keyword1, keyword2, keyword3..."
                                                className="rounded-none min-h-[120px] border-primary/20 focus-visible:ring-primary/20 resize-none"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Creator</Label>
                                                <Input 
                                                    value={metadata.creator} 
                                                    onChange={(e) => setMetadata({...metadata, creator: e.target.value})}
                                                    className="rounded-none h-10 border-primary/10 text-xs"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Producer</Label>
                                                <Input 
                                                    value={metadata.producer} 
                                                    onChange={(e) => setMetadata({...metadata, producer: e.target.value})}
                                                    className="rounded-none h-10 border-primary/10 text-xs"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-12 pt-8 border-t border-border/40 flex justify-end">
                                    <Button 
                                        size="lg"
                                        disabled={isProcessing || !pdflib}
                                        onClick={updateMetadata}
                                        className="rounded-none px-12 h-14 font-bold uppercase tracking-widest"
                                    >
                                        {isProcessing ? "Updating..." : "Save Metadata & Download"}
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
                                <Settings2 className="h-4 w-4 text-primary" /> SEO Impact
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">PDF Search Engine SEO</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Search engines like Google index PDF metadata. A proper title and relevant keywords can significantly improve your document's visibility in search results.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Branding</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Set the Author and Creator fields to your brand name to maintain professional attribution when your documents are shared.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Info className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Privacy</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                You can also use this tool to <strong>clear</strong> metadata from your PDFs before sharing them to protect your privacy.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
