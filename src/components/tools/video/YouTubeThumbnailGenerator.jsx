"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Download, Image as ImageIcon, Type, Palette, LayoutTemplate, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export default function YouTubeThumbnailGenerator() {
    const canvasRef = useRef(null);
    const [text, setText] = useState("Your Title Here");
    const [bgColor, setBgColor] = useState("#1a1a1a");
    const [textColor, setTextColor] = useState("#ffffff");
    const [fontSize, setFontSize] = useState("80");
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        drawCanvas();
    }, [text, bgColor, textColor, fontSize, backgroundImage]);

    const drawCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas dimensions (YouTube Thumbnail 1280x720)
        canvas.width = 1280;
        canvas.height = 720;

        // Background
        if (backgroundImage) {
            const img = new Image();
            img.src = backgroundImage;
            img.onload = () => {
                // Cover fit
                const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
                const x = (canvas.width / 2) - (img.width / 2) * scale;
                const y = (canvas.height / 2) - (img.height / 2) * scale;
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

                // Add overlay for text readability
                ctx.fillStyle = "rgba(0,0,0,0.5)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                drawText(ctx);
            };
        } else {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            drawText(ctx);
        }
    };

    const drawText = (ctx) => {
        ctx.fillStyle = textColor;
        ctx.font = `bold ${fontSize}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Word wrap logic specifically for canvas
        const words = text.split(" ");
        let line = "";
        const lines = [];
        const maxWidth = 1100;

        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                lines.push(line);
                line = words[n] + " ";
            } else {
                line = testLine;
            }
        }
        lines.push(line);

        const lineHeight = parseInt(fontSize) * 1.2;
        const startY = 360 - ((lines.length - 1) * lineHeight) / 2;

        lines.forEach((line, i) => {
            ctx.fillText(line.trim(), 640, startY + (i * lineHeight));
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setBackgroundImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const downloadThumbnail = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const link = document.createElement("a");
        link.download = "youtube-thumbnail.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        toast.success("Thumbnail downloaded!");
    };

    const templates = [
        { name: "Gaming", bg: "#4f46e5", text: "EPIC GAMEPLAY" },
        { name: "Vlog", bg: "#ec4899", text: "MY DAY IN LIFE" },
        { name: "Tech", bg: "#0f172a", text: "REVIEW 2025" },
        { name: "Finance", bg: "#22c55e", text: "MAKE MONEY" },
    ];

    const applyTemplate = (t) => {
        setBgColor(t.bg);
        setText(t.text);
        setBackgroundImage(null);
    };

    return (
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Controls */}
            <div className="lg:col-span-1 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Editor</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label>Text Overlay</Label>
                            <Input
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Enter title..."
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Background Image</Label>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" className="w-full relative" onClick={() => document.getElementById('bg-upload').click()}>
                                    <ImageIcon className="w-4 h-4 mr-2" />
                                    Upload Image
                                    <input
                                        id="bg-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                </Button>
                                {backgroundImage && (
                                    <Button variant="ghost" size="icon" onClick={() => setBackgroundImage(null)}>
                                        <RotateCcw className="w-4 h-4" />
                                    </Button>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Text Color</Label>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded border" style={{ backgroundColor: textColor }} />
                                    <Input
                                        type="color"
                                        value={textColor}
                                        onChange={(e) => setTextColor(e.target.value)}
                                        className="w-full h-8 p-1"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Bg Color</Label>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded border" style={{ backgroundColor: bgColor }} />
                                    <Input
                                        type="color"
                                        value={bgColor}
                                        onChange={(e) => setBgColor(e.target.value)}
                                        className="w-full h-8 p-1"
                                        disabled={!!backgroundImage}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Font Size: {fontSize}px</Label>
                            <Input
                                type="range"
                                min="40"
                                max="200"
                                value={fontSize}
                                onChange={(e) => setFontSize(e.target.value)}
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm">Quick Templates</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-2">
                        {templates.map((t, i) => (
                            <Button key={i} variant="outline" size="sm" onClick={() => applyTemplate(t)} className="w-full text-xs">
                                {t.name}
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Preview */}
            <div className="lg:col-span-2 space-y-6">
                <Card className="overflow-hidden bg-muted/50">
                    <CardContent className="p-4 md:p-8 flex items-center justify-center">
                        <canvas
                            ref={canvasRef}
                            className="max-w-full h-auto shadow-2xl rounded-xl"
                            style={{ maxHeight: '500px' }}
                        />
                    </CardContent>
                </Card>

                <div className="flex justify-end gap-4">
                    <Button size="lg" className="px-8 rounded-xl font-bold" onClick={downloadThumbnail}>
                        <Download className="w-5 h-5 mr-2" />
                        Download Thumbnail (HD)
                    </Button>
                </div>
            </div>
        </div>
    );
}
