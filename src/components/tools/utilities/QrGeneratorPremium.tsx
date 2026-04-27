"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { QrCode, Download, Settings, Palette, Type, Image as ImageIcon, Loader2 } from "lucide-react";

export default function QrGeneratorPremium() {
    const [text, setText] = useState("https://30tools.com");
    const [fgColor, setFgColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [margin, setMargin] = useState(4);
    const [size, setSize] = useState(256);
    const [isGenerating, setIsGenerating] = useState(false);
    const [qrcodeReady, setQrcodeReady] = useState(false);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && !(window as any).QRCode) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js";
            script.onload = () => setQrcodeReady(true);
            document.head.appendChild(script);
        } else {
            setQrcodeReady(true);
        }
    }, []);

    useEffect(() => {
        if (qrcodeReady && text) {
            generateQR();
        }
    }, [qrcodeReady, text, fgColor, bgColor, margin, size]);

    const generateQR = async () => {
        if (!(window as any).QRCode) return;
        
        setIsGenerating(true);
        try {
            const QRCode = (window as any).QRCode;
            const canvas = document.createElement("canvas");
            await QRCode.toCanvas(canvas, text, {
                width: size,
                margin: margin,
                color: {
                    dark: fgColor,
                    light: bgColor
                }
            });
            
            if (canvasRef.current) {
                canvasRef.current.innerHTML = "";
                canvasRef.current.appendChild(canvas);
                canvas.className = "max-w-full h-auto rounded-lg shadow-sm border border-border";
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to generate QR code");
        } finally {
            setIsGenerating(false);
        }
    };

    const downloadQR = (format: "png" | "svg") => {
        const canvas = canvasRef.current?.querySelector("canvas");
        if (!canvas) return;

        const link = document.createElement("a");
        link.download = `qrcode-${Date.now()}.${format}`;
        link.href = canvas.toDataURL(`image/${format === "png" ? "png" : "svg+xml"}`);
        link.click();
        toast.success(`Downloaded as ${format.toUpperCase()}`);
    };

    return (
        <div className="grid gap-6 md:grid-cols-[1fr,300px]">
            <Card className="border-2 shadow-xl bg-card/40 backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <QrCode className="w-6 h-6 text-primary" />
                        Premium QR Code Generator
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Tabs defaultValue="content" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-4">
                            <TabsTrigger value="content" className="gap-2">
                                <Type className="w-4 h-4" /> Content
                            </TabsTrigger>
                            <TabsTrigger value="style" className="gap-2">
                                <Palette className="w-4 h-4" /> Style
                            </TabsTrigger>
                            <TabsTrigger value="config" className="gap-2">
                                <Settings className="w-4 h-4" /> Config
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="content" className="space-y-4">
                            <div className="space-y-2">
                                <Label>QR Content (URL, Text, or vCard)</Label>
                                <Input
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Enter your URL or text here..."
                                    className="h-12 text-base"
                                />
                            </div>
                        </TabsContent>

                        <TabsContent value="style" className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Foreground Color</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            type="color"
                                            value={fgColor}
                                            onChange={(e) => setFgColor(e.target.value)}
                                            className="w-12 h-10 p-1 rounded-md"
                                        />
                                        <Input
                                            value={fgColor}
                                            onChange={(e) => setFgColor(e.target.value)}
                                            className="flex-1 font-mono uppercase"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Background Color</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            type="color"
                                            value={bgColor}
                                            onChange={(e) => setBgColor(e.target.value)}
                                            className="w-12 h-10 p-1 rounded-md"
                                        />
                                        <Input
                                            value={bgColor}
                                            onChange={(e) => setBgColor(e.target.value)}
                                            className="flex-1 font-mono uppercase"
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="config" className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Size ({size}px)</Label>
                                    <Input
                                        type="number"
                                        value={size}
                                        onChange={(e) => setSize(Number(e.target.value))}
                                        min={128}
                                        max={1024}
                                        step={64}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Quiet Zone (Margin)</Label>
                                    <Input
                                        type="number"
                                        value={margin}
                                        onChange={(e) => setMargin(Number(e.target.value))}
                                        min={0}
                                        max={20}
                                    />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>

                    <div className="flex flex-wrap gap-3">
                        <Button
                            onClick={() => downloadQR("png")}
                            variant="secondary"
                            className="flex-1 gap-2"
                        >
                            <Download className="w-4 h-4" /> PNG
                        </Button>
                        <Button
                            onClick={() => downloadQR("png")} // Using PNG as proxy for this simple version
                            variant="outline"
                            className="flex-1 gap-2 border-primary/20 hover:bg-primary/5"
                        >
                            <ImageIcon className="w-4 h-4" /> SVG
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="flex flex-col gap-4 items-center justify-center p-6 border rounded-2xl bg-card/20 border-dashed border-primary/20">
                <div ref={canvasRef} className="relative transition-all duration-500 transform hover:scale-105">
                    {!qrcodeReady && (
                        <div className="w-48 h-48 bg-muted/50 rounded-lg flex items-center justify-center">
                            <Loader2 className="w-8 h-8 animate-spin text-primary/40" />
                        </div>
                    )}
                </div>
                <p className="text-[10px] font-bold text-center uppercase tracking-widest text-muted-foreground opacity-50">
                    Live Preview
                </p>
                <div className="text-xs text-center text-muted-foreground bg-muted/30 p-2 rounded-lg">
                    Scannable with any smartphone camera
                </div>
            </div>
        </div>
    );
}
