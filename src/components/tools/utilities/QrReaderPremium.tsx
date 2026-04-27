"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { QrCode, Scan, Upload, Copy, ExternalLink, Loader2, History, Camera } from "lucide-react";

export default function QrReaderPremium() {
    const [scannedResult, setScannedResult] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [jsqrReady, setJsqrReady] = useState(false);
    const [history, setHistory] = useState<string[]>([]);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && !(window as any).jsQR) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js";
            script.onload = () => setJsqrReady(true);
            document.head.appendChild(script);
        } else {
            setJsqrReady(true);
        }

        // Load history from localStorage
        const saved = localStorage.getItem("qr_history");
        if (saved) setHistory(JSON.parse(saved));
    }, []);

    const addToHistory = (result: string) => {
        if (history.includes(result)) return;
        const newHistory = [result, ...history].slice(0, 10);
        setHistory(newHistory);
        localStorage.setItem("qr_history", JSON.stringify(newHistory));
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !jsqrReady) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (!ctx) return;
                ctx.drawImage(img, 0, 0);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const code = (window as any).jsQR(imageData.data, imageData.width, imageData.height);
                
                if (code) {
                    setScannedResult(code.data);
                    addToHistory(code.data);
                    toast.success("QR Code detected!");
                } else {
                    toast.error("No QR Code found in image");
                }
            };
            img.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    const copyToClipboard = () => {
        if (scannedResult) {
            navigator.clipboard.writeText(scannedResult);
            toast.success("Copied to clipboard");
        }
    };

    return (
        <div className="grid gap-6 md:grid-cols-[1fr,350px]">
            <Card className="border-2 shadow-2xl bg-card/40 backdrop-blur-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Scan className="w-6 h-6 text-primary" />
                        Premium QR Code Reader
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                    {/* Scanner Area */}
                    <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-3xl bg-muted/20 border-primary/20 hover:border-primary/40 transition-all relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        
                        <div className="relative z-0 flex flex-col items-center">
                            <div className="bg-primary/10 p-6 rounded-full mb-6 group-hover:scale-110 transition-transform">
                                <Upload className="w-12 h-12 text-primary" />
                            </div>
                            <p className="text-lg font-bold text-center">
                                Upload QR Image
                            </p>
                            <p className="text-sm text-muted-foreground mt-2 text-center max-w-xs">
                                Drag and drop or click to scan a QR code from any image file (PNG, JPG, WebP).
                            </p>
                        </div>
                    </div>

                    {/* Result Area */}
                    {scannedResult && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center justify-between">
                                <Label className="text-xs font-bold uppercase tracking-widest text-primary">Scan Result</Label>
                                <div className="flex gap-2">
                                    <Button size="icon" variant="ghost" onClick={copyToClipboard} className="h-8 w-8">
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                    {scannedResult.startsWith("http") && (
                                        <Button size="icon" variant="ghost" asChild className="h-8 w-8">
                                            <a href={scannedResult} target="_blank" rel="noreferrer">
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 font-mono text-sm break-all">
                                {scannedResult}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Sidebar: History */}
            <div className="space-y-6">
                <Card className="bg-card/30 border-border/40">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                            <History className="w-4 h-4" /> Scan History
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {history.length === 0 ? (
                            <p className="text-xs text-muted-foreground italic text-center py-4">
                                No recent scans
                            </p>
                        ) : (
                            history.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => setScannedResult(item)}
                                    className="w-full text-left p-2 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/40 group overflow-hidden"
                                >
                                    <p className="text-[10px] font-mono truncate text-muted-foreground group-hover:text-foreground">
                                        {item}
                                    </p>
                                </button>
                            ))
                        )}
                        {history.length > 0 && (
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className="w-full text-[10px] mt-2 opacity-50 hover:opacity-100"
                                onClick={() => {
                                    setHistory([]);
                                    localStorage.removeItem("qr_history");
                                }}
                            >
                                Clear History
                            </Button>
                        )}
                    </CardContent>
                </Card>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-500 font-medium leading-relaxed">
                    <div className="flex gap-2 items-start">
                        <Camera className="w-4 h-4 shrink-0" />
                        <p>Real-time camera scanning is optimized for mobile devices. For desktop, use the image uploader for best results.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
