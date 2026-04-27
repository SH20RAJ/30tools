"use client";

import { useState, useCallback } from "react";
import { 
    Upload, 
    Download, 
    Image as ImageIcon, 
    FileText,
    Loader2,
    Settings2,
    Code,
    CheckCircle2,
    Monitor,
    Zap,
    Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Base64ToImageTool() {
    const [base64, setBase64] = useState("");
    const [preview, setPreview] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    
    const handleDecode = () => {
        if (!base64.trim()) return;
        
        setIsProcessing(true);
        try {
            let src = base64.trim();
            // Handle raw base64 by prepending data uri prefix if missing
            if (!src.startsWith("data:image/")) {
                src = `data:image/png;base64,${src}`;
            }
            
            // Validate by creating an image object
            const img = new Image();
            img.onload = () => {
                setPreview(src);
                setIsProcessing(false);
                toast.success("Image decoded successfully");
            };
            img.onerror = () => {
                setIsProcessing(false);
                toast.error("Invalid Base64 string or image format");
                setPreview(null);
            };
            img.src = src;
        } catch (error) {
            setIsProcessing(false);
            toast.error("Failed to decode Base64");
            setPreview(null);
        }
    };

    const downloadImage = () => {
        if (!preview) return;
        const link = document.createElement("a");
        link.href = preview;
        link.download = `decoded-image-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const clearAll = () => {
        setBase64("");
        setPreview(null);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card/50 p-6 border border-border/40 rounded-none backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary">
                        <ImageIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Base64 to Image</h2>
                        <p className="text-sm text-muted-foreground">Decode Base64 strings or data URIs back into viewable image files</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        variant="ghost" 
                        onClick={clearAll}
                        className="rounded-none hover:bg-destructive/10 hover:text-destructive text-[10px] font-bold uppercase"
                    >
                        <Trash2 className="h-3 w-3 mr-2" /> Clear All
                    </Button>
                    <Button 
                        disabled={!base64.trim() || isProcessing}
                        onClick={handleDecode}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Decoding...</>
                        ) : (
                            <><Zap className="mr-2 h-4 w-4" /> Decode Image</>
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
                                        <Code className="h-3 w-3" /> Base64 String
                                    </Label>
                                    <Badge variant="outline" className="rounded-none h-5 text-[10px] font-bold uppercase border-primary/20 text-primary">Input</Badge>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <Textarea 
                                        value={base64} 
                                        onChange={(e) => setBase64(e.target.value)}
                                        placeholder="Paste your data:image/png;base64... string here"
                                        className="rounded-none min-h-[500px] border-none focus-visible:ring-0 font-mono text-[10px] p-6 bg-transparent resize-none leading-relaxed"
                                    />
                                </CardContent>
                            </Card>
                        </div>

                        {/* Preview Column */}
                        <div className="space-y-4">
                            <Card className={`rounded-none border-border/40 overflow-hidden min-h-[500px] flex flex-col ${preview ? 'bg-white' : 'bg-card/40'}`}>
                                <CardHeader className="pb-4 border-b border-border/40 flex flex-row items-center justify-between py-3 bg-muted/30">
                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                        <Monitor className="h-3 w-3" /> Image Preview
                                    </Label>
                                    {preview && (
                                        <Button 
                                            variant="ghost" 
                                            size="sm" 
                                            onClick={downloadImage}
                                            className="h-8 text-[10px] font-bold uppercase bg-primary/10 text-primary hover:bg-primary/20"
                                        >
                                            <Download className="h-3 w-3 mr-2" /> Download
                                        </Button>
                                    )}
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col items-center justify-center p-8">
                                    {preview ? (
                                        <div className="relative group max-w-full animate-in zoom-in-95 duration-500">
                                            <img 
                                                src={preview} 
                                                alt="Decoded" 
                                                className="max-h-[400px] w-auto object-contain shadow-2xl"
                                            />
                                            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-2 shadow-xl">
                                                <CheckCircle2 className="h-5 w-5" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center space-y-4 opacity-20">
                                            <ImageIcon className="h-24 w-24 mx-auto" />
                                            <p className="text-xs font-bold uppercase tracking-widest">No Image Decoded</p>
                                        </div>
                                    )}
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
                                <Settings2 className="h-4 w-4 text-primary" /> Help
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Supported Formats</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Supports all common image types encoded in Base64, including PNG, JPEG, WEBP, GIF, and SVG.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Prefix Handling</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    You can paste raw Base64 data or full Data URIs starting with <code>data:image/...</code>. Our decoder handles both.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Local Privacy</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Your sensitive data stays in your browser. We never transmit your Base64 strings to any external servers.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
