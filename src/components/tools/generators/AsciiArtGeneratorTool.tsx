"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { Copy, ImageIcon, RefreshCw, Download, FileText } from "lucide-react";

const ASCII_CHARS = "@%#*+=-:. ";

export default function AsciiArtGeneratorTool() {
    const [image, setImage] = useState<string | null>(null);
    const [ascii, setAscii] = useState<string>("");
    const [width, setWidth] = useState([100]);
    const [contrast, setContrast] = useState([1]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const generateAscii = () => {
        if (!image) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new Image();
        img.onload = () => {
            const w = width[0];
            const h = (img.height / img.width) * w * 0.55; // 0.55 to adjust for character aspect ratio
            
            canvas.width = w;
            canvas.height = h;
            
            ctx.drawImage(img, 0, 0, w, h);
            
            const imageData = ctx.getImageData(0, 0, w, h);
            const data = imageData.data;
            let asciiResult = "";

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                
                // Convert to grayscale
                let gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                
                // Apply contrast
                gray = ((gray / 255 - 0.5) * contrast[0] + 0.5) * 255;
                gray = Math.max(0, Math.min(255, gray));

                const charIndex = Math.floor((gray / 255) * (ASCII_CHARS.length - 1));
                asciiResult += ASCII_CHARS[charIndex];

                if (((i / 4) + 1) % w === 0) {
                    asciiResult += "\n";
                }
            }
            setAscii(asciiResult);
        };
        img.src = image;
    };

    useEffect(() => {
        if (image) generateAscii();
    }, [image, width, contrast]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(ascii);
        toast.success("ASCII Art copied to clipboard!");
    };

    const downloadTxt = () => {
        const element = document.createElement("a");
        const file = new Blob([ascii], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "ascii-art.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <Card className="w-full max-w-5xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Image to ASCII Art Generator
                </CardTitle>
                <CardDescription>
                    Convert your images into beautiful text-based ASCII art.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="image-upload">Upload Image</Label>
                            <Input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} />
                        </div>
                        
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <Label>Resolution (Width)</Label>
                                <span className="text-sm font-mono">{width[0]} chars</span>
                            </div>
                            <Slider value={width} onValueChange={setWidth} min={20} max={200} step={1} />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <Label>Contrast</Label>
                                <span className="text-sm font-mono">{contrast[0].toFixed(1)}x</span>
                            </div>
                            <Slider value={contrast} onValueChange={setContrast} min={0.5} max={3} step={0.1} />
                        </div>

                        <div className="flex gap-2">
                            <Button onClick={copyToClipboard} disabled={!ascii} variant="outline" className="flex-1">
                                <Copy className="mr-2 h-4 w-4" /> Copy
                            </Button>
                            <Button onClick={downloadTxt} disabled={!ascii} variant="outline" className="flex-1">
                                <Download className="mr-2 h-4 w-4" /> Download .txt
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Label>Preview</Label>
                        <div className="bg-muted rounded-lg aspect-square flex items-center justify-center overflow-hidden border-2 border-dashed border-primary/20">
                            {image ? (
                                <img src={image} alt="Preview" className="max-w-full max-h-full object-contain" />
                            ) : (
                                <div className="text-center text-muted-foreground">
                                    <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-20" />
                                    <p>Upload an image to start</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-3 pt-6 border-t">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">ASCII Output</h3>
                        <Button variant="ghost" size="sm" onClick={generateAscii} disabled={!image}>
                            <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
                        </Button>
                    </div>
                    <div className="relative">
                        <pre className="bg-black text-white p-4 rounded-lg overflow-auto font-mono text-[6px] leading-[4px] min-h-[400px] selection:bg-primary selection:text-primary-foreground">
                            {ascii || "ASCII Art will appear here..."}
                        </pre>
                    </div>
                </div>

                <canvas ref={canvasRef} style={{ display: 'none' }} />
            </CardContent>
        </Card>
    );
}
