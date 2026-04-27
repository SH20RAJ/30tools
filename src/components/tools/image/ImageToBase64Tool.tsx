"use client";

import { useState, useCallback, useRef } from "react";
import { 
    Upload, 
    Copy, 
    Image as ImageIcon, 
    FileText,
    Loader2,
    Settings2,
    Code,
    CheckCircle2,
    Monitor,
    Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ImageToBase64Tool() {
    const [base64, setBase64] = useState("");
    const [preview, setPreview] = useState<string | null>(null);
    const [fileName, setFileName] = useState("");
    const [fileSize, setFileSize] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            processFile(file);
        } else if (file) {
            toast.error("Please select a valid image file");
        }
    }, []);

    const processFile = (file: File) => {
        setIsProcessing(true);
        setFileName(file.name);
        setFileSize(file.size);
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result as string;
            setPreview(result);
            setBase64(result);
            setIsProcessing(false);
            toast.success("Image encoded successfully");
        };
        reader.onerror = () => {
            toast.error("Failed to read image");
            setIsProcessing(false);
        };
        reader.readAsDataURL(file);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    const getFormattedOutput = (type: string) => {
        if (!base64) return "";
        switch (type) {
            case "raw": return base64.split(",")[1];
            case "css": return `background-image: url("${base64}");`;
            case "html": return `<img src="${base64}" alt="${fileName}" />`;
            default: return base64;
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
                        <h2 className="text-2xl font-bold">Image to Base64</h2>
                        <p className="text-sm text-muted-foreground">Convert any image into a data URI or Base64 string instantly</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-none border-primary/20 hover:border-primary/50"
                    >
                        <Upload className="mr-2 h-4 w-4" /> {preview ? "Change Image" : "Select Image"}
                    </Button>
                </div>
                <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    ref={fileInputRef}
                    onChange={onFileChange}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {!preview ? (
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="group cursor-pointer flex flex-col items-center justify-center p-12 md:p-24 border-2 border-dashed border-primary/20 hover:border-primary/40 bg-card/30 hover:bg-card/50 transition-all rounded-none text-center"
                        >
                            <div className="p-6 bg-primary/5 rounded-none group-hover:scale-110 transition-transform">
                                <ImageIcon className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Upload Image to Encode</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Transform your images into code for web projects, CSS, or data transport. 100% private.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">PNG</Badge>
                                <Badge variant="outline">JPG</Badge>
                                <Badge variant="outline">SVG</Badge>
                                <Badge variant="outline">WebP</Badge>
                            </div>
                        </div>
                    ) : (
                        <Card className="rounded-none border-border/40 bg-card/40 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                {/* Preview Side */}
                                <div className="p-12 flex flex-col items-center justify-center bg-muted/30 border-r border-border/40">
                                    <div className="relative group max-w-full">
                                        <img 
                                            src={preview} 
                                            alt="Preview" 
                                            className="max-h-64 w-auto object-contain shadow-2xl border border-white/10"
                                        />
                                        <div className="absolute -bottom-4 -right-4 bg-primary text-white p-2 shadow-xl">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div className="mt-12 text-center space-y-2">
                                        <h4 className="text-sm font-bold truncate max-w-[200px]">{fileName}</h4>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                            {(fileSize / 1024).toFixed(2)} KB
                                        </p>
                                    </div>
                                </div>

                                {/* Output Side */}
                                <CardContent className="p-8 space-y-6 flex flex-col justify-center">
                                    <Tabs defaultValue="uri" className="w-full">
                                        <TabsList className="grid w-full grid-cols-4 rounded-none h-12 bg-muted/50 p-1 border border-border/40">
                                            <TabsTrigger value="uri" className="rounded-none text-[10px] uppercase font-bold tracking-tighter">Data URI</TabsTrigger>
                                            <TabsTrigger value="raw" className="rounded-none text-[10px] uppercase font-bold tracking-tighter">Raw</TabsTrigger>
                                            <TabsTrigger value="css" className="rounded-none text-[10px] uppercase font-bold tracking-tighter">CSS</TabsTrigger>
                                            <TabsTrigger value="html" className="rounded-none text-[10px] uppercase font-bold tracking-tighter">HTML</TabsTrigger>
                                        </TabsList>
                                        
                                        {["uri", "raw", "css", "html"].map((tab) => (
                                            <TabsContent key={tab} value={tab} className="mt-6 space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Output Content</Label>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm" 
                                                        onClick={() => copyToClipboard(getFormattedOutput(tab))}
                                                        className="h-8 text-[10px] font-bold uppercase"
                                                    >
                                                        <Copy className="h-3 w-3 mr-2" /> Copy Code
                                                    </Button>
                                                </div>
                                                <Textarea 
                                                    readOnly 
                                                    value={getFormattedOutput(tab)}
                                                    className="rounded-none h-48 bg-muted/20 border-primary/10 font-mono text-[10px] p-4 resize-none leading-relaxed"
                                                />
                                            </TabsContent>
                                        ))}
                                    </Tabs>
                                </CardContent>
                            </div>
                        </Card>
                    )}
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <Card className="rounded-none border-border/40 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4 border-b border-border/40">
                            <CardTitle className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                                <Settings2 className="h-4 w-4 text-primary" /> Why Base64?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">No Extra Requests</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Inlining small images as Base64 strings in your CSS or HTML reduces the number of HTTP requests, speeding up your site's initial load.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Portability</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Base64 encoded images can be easily shared in text documents, JSON payloads, or email templates without hosting requirements.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Optimization</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Use for icons and small assets. Large images encoded in Base64 can increase file size by ~33% compared to binary files.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
