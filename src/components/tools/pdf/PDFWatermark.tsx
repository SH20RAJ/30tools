"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    Type, 
    Image as ImageIcon, 
    Download, 
    FileText,
    Loader2,
    Settings2,
    RotateCw,
    Layers,
    Type as TypeIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

declare global {
    interface Window {
        PDFLib: any;
    }
}

export default function PDFWatermark() {
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    
    // Watermark Settings
    const [wmType, setWmType] = useState<"text" | "image">("text");
    const [text, setText] = useState("CONFIDENTIAL");
    const [image, setImage] = useState<string | null>(null);
    const [opacity, setOpacity] = useState(0.3);
    const [rotation, setRotation] = useState(45);
    const [fontSize, setFontSize] = useState(60);
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const wmImageInputRef = useRef<HTMLInputElement>(null);

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

    const onWmImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target?.result as string);
                setWmType("image");
            };
            reader.readAsDataURL(selectedFile);
        }
    }, []);

    const addWatermark = async () => {
        if (!pdflib || !file) return;

        setIsProcessing(true);
        try {
            const { PDFDocument, rgb, degrees, StandardFonts } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const pages = pdfDoc.getPages();
            
            let wmImage: any = null;
            if (wmType === "image" && image) {
                const imageBytes = await fetch(image).then(res => res.arrayBuffer());
                if (image.includes("image/png")) {
                    wmImage = await pdfDoc.embedPng(imageBytes);
                } else {
                    wmImage = await pdfDoc.embedJpg(imageBytes);
                }
            }

            const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

            for (const page of pages) {
                const { width, height } = page.getSize();
                
                if (wmType === "text") {
                    page.drawText(text, {
                        x: width / 2,
                        y: height / 2,
                        size: fontSize,
                        font: font,
                        color: rgb(0.5, 0.5, 0.5),
                        opacity: opacity,
                        rotate: degrees(rotation),
                    });
                } else if (wmImage) {
                    const dims = wmImage.scale(0.5);
                    page.drawImage(wmImage, {
                        x: width / 2 - dims.width / 2,
                        y: height / 2 - dims.height / 2,
                        width: dims.width,
                        height: dims.height,
                        opacity: opacity,
                        rotate: degrees(rotation),
                    });
                }
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace(".pdf", "")}_watermarked.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("Watermark added successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to add watermark");
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
                        <Layers className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Watermark</h2>
                        <p className="text-sm text-muted-foreground">Add text or image watermarks to protect your PDF documents</p>
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
                        onClick={addWatermark}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                        ) : (
                            <><Download className="mr-2 h-4 w-4" /> Add Watermark</>
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
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Watermark</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Protect your work with custom text or logos. Everything is processed locally in your browser.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">Text</Badge>
                                <Badge variant="outline">Image</Badge>
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
                                    <div>
                                        <h4 className="font-bold">{file.name}</h4>
                                        <p className="text-xs text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-8 space-y-8">
                                <Tabs value={wmType} onValueChange={(v: any) => setWmType(v)} className="w-full">
                                    <TabsList className="grid w-full grid-cols-2 rounded-none h-12 bg-muted/50 p-1 border border-border/40">
                                        <TabsTrigger value="text" className="rounded-none data-[state=active]:bg-background data-[state=active]:shadow-none">
                                            <TypeIcon className="h-4 w-4 mr-2" /> Text Watermark
                                        </TabsTrigger>
                                        <TabsTrigger value="image" className="rounded-none data-[state=active]:bg-background data-[state=active]:shadow-none">
                                            <ImageIcon className="h-4 w-4 mr-2" /> Image Watermark
                                        </TabsTrigger>
                                    </TabsList>
                                    
                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <TabsContent value="text" className="mt-0 space-y-4">
                                                <div className="space-y-2">
                                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Watermark Text</Label>
                                                    <Input 
                                                        value={text} 
                                                        onChange={(e) => setText(e.target.value)}
                                                        placeholder="e.g. CONFIDENTIAL"
                                                        className="rounded-none h-12 border-primary/20 focus-visible:ring-primary/20"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Font Size ({fontSize})</Label>
                                                    <Slider 
                                                        value={[fontSize]} 
                                                        onValueChange={([v]) => setFontSize(v)}
                                                        min={10} 
                                                        max={200} 
                                                        step={1}
                                                        className="py-4"
                                                    />
                                                </div>
                                            </TabsContent>
                                            
                                            <TabsContent value="image" className="mt-0 space-y-4">
                                                <div className="space-y-2">
                                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Upload Image</Label>
                                                    {!image ? (
                                                        <div 
                                                            onClick={() => wmImageInputRef.current?.click()}
                                                            className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-primary/20 bg-card/30 hover:bg-card/50 cursor-pointer"
                                                        >
                                                            <ImageIcon className="h-8 w-8 text-primary/40 mb-2" />
                                                            <span className="text-xs text-muted-foreground font-bold uppercase">Click to Select Logo</span>
                                                        </div>
                                                    ) : (
                                                        <div className="relative group overflow-hidden border border-border/40">
                                                            <img src={image} className="max-h-32 w-auto mx-auto object-contain p-2" alt="Watermark" />
                                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <Button variant="outline" size="sm" onClick={() => wmImageInputRef.current?.click()} className="rounded-none bg-background text-[10px] h-8">Change</Button>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <input 
                                                        type="file" 
                                                        accept="image/*" 
                                                        className="hidden" 
                                                        ref={wmImageInputRef}
                                                        onChange={onWmImageChange}
                                                    />
                                                </div>
                                            </TabsContent>
                                            
                                            <div className="space-y-4 pt-4 border-t border-border/40">
                                                <div className="space-y-2">
                                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex justify-between">
                                                        <span>Opacity</span>
                                                        <span>{Math.round(opacity * 100)}%</span>
                                                    </Label>
                                                    <Slider 
                                                        value={[opacity * 100]} 
                                                        onValueChange={([v]) => setOpacity(v / 100)}
                                                        min={5} 
                                                        max={100} 
                                                        step={1}
                                                        className="py-4"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex justify-between">
                                                        <span>Rotation</span>
                                                        <span>{rotation}°</span>
                                                    </Label>
                                                    <Slider 
                                                        value={[rotation]} 
                                                        onValueChange={([v]) => setRotation(v)}
                                                        min={-180} 
                                                        max={180} 
                                                        step={5}
                                                        className="py-4"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col items-center justify-center p-8 bg-muted/50 border border-border/40">
                                            <div className="relative w-full aspect-[3/4] bg-white shadow-lg border border-border/40 overflow-hidden flex items-center justify-center">
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                                                    {wmType === 'text' ? (
                                                        <span 
                                                            style={{ 
                                                                opacity: opacity, 
                                                                transform: `rotate(${rotation}deg)`,
                                                                fontSize: `${fontSize / 2}px`,
                                                                fontWeight: 'bold',
                                                                color: '#888'
                                                            }}
                                                            className="text-center break-all select-none"
                                                        >
                                                            {text || "PREVIEW"}
                                                        </span>
                                                    ) : image ? (
                                                        <img 
                                                            src={image} 
                                                            style={{ 
                                                                opacity: opacity, 
                                                                transform: `rotate(${rotation}deg)`,
                                                                maxHeight: '50%'
                                                            }}
                                                            className="object-contain select-none"
                                                            alt="Watermark Preview"
                                                        />
                                                    ) : (
                                                        <ImageIcon className="h-12 w-12 text-muted/20" />
                                                    )}
                                                </div>
                                                <div className="flex flex-col gap-2 w-full px-8 opacity-10">
                                                    <div className="h-2 w-full bg-slate-200" />
                                                    <div className="h-2 w-3/4 bg-slate-200" />
                                                    <div className="h-2 w-full bg-slate-200" />
                                                    <div className="h-2 w-1/2 bg-slate-200" />
                                                </div>
                                            </div>
                                            <p className="mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Live Preview</p>
                                        </div>
                                    </div>
                                </Tabs>
                            </CardContent>
                        </Card>
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
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Rotation Tip</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    A 45-degree rotation is industry standard for "DRAFT" or "CONFIDENTIAL" watermarks, making them harder to remove via crop.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Transparency</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Set opacity between 20-40% to ensure the watermark is visible without making the document hard to read.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <RotateCw className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Bulk Apply</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                The watermark will be automatically applied to every page of your PDF in the exact same position and style.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
