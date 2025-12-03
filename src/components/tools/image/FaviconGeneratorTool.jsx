"use client";

import { useState, useRef, useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Upload, Download, Type, Smile, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";

export default function FaviconGeneratorTool() {
    const [mode, setMode] = useState("text"); // text, emoji, image
    const [text, setText] = useState("F");
    const [emoji, setEmoji] = useState("⚡");
    const [uploadedImage, setUploadedImage] = useState(null);
    const [textColor, setTextColor] = useState("#ffffff");
    const [backgroundColor, setBackgroundColor] = useState("#2563eb");
    const [borderRadius, setBorderRadius] = useState(8);
    const [fontSize, setFontSize] = useState(20);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isExporting, setIsExporting] = useState(false);

    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setUploadedImage(url);
            setMode("image");
        }
    };

    const drawFavicon = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const size = 32; // Standard favicon size for preview/generation base
        const scale = 16; // Internal scaling for high res (512x512)

        canvas.width = size * scale;
        canvas.height = size * scale;

        // Clear
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background
        if (mode !== "image" || !uploadedImage) {
            ctx.fillStyle = backgroundColor;

            // Draw rounded rectangle
            const radius = (borderRadius / 100) * (size * scale) / 2;
            ctx.beginPath();
            ctx.roundRect(0, 0, canvas.width, canvas.height, radius);
            ctx.fill();
        }

        // Content
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (mode === "text") {
            ctx.fillStyle = textColor;
            ctx.font = `bold ${(fontSize / 10) * scale}px sans-serif`;
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        } else if (mode === "emoji") {
            ctx.font = `${(fontSize / 10) * scale}px serif`;
            ctx.fillText(emoji, canvas.width / 2, canvas.height / 2 + (scale * 2)); // slight adjustment for emoji baseline
        } else if (mode === "image" && uploadedImage) {
            const img = new Image();
            img.src = uploadedImage;
            img.onload = () => {
                // Draw image with border radius
                ctx.save();
                const radius = (borderRadius / 100) * (size * scale) / 2;
                ctx.beginPath();
                ctx.roundRect(0, 0, canvas.width, canvas.height, radius);
                ctx.clip();
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                ctx.restore();
                setPreviewUrl(canvas.toDataURL());
            };
        }

        if (mode !== "image" || !uploadedImage) {
            setPreviewUrl(canvas.toDataURL());
        }
    };

    useEffect(() => {
        drawFavicon();
    }, [mode, text, emoji, uploadedImage, textColor, backgroundColor, borderRadius, fontSize]);

    // Redraw when image loads
    useEffect(() => {
        if (mode === "image" && uploadedImage) {
            const img = new Image();
            img.onload = drawFavicon;
            img.src = uploadedImage;
        }
    }, [uploadedImage]);


    const downloadFavicon = (size) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Create a temporary canvas for resizing
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = size;
        tempCanvas.height = size;
        const ctx = tempCanvas.getContext("2d");

        ctx.drawImage(canvas, 0, 0, size, size);

        const link = document.createElement("a");
        link.download = `favicon-${size}x${size}.png`;
        link.href = tempCanvas.toDataURL("image/png");
        link.click();
        toast.success(`Downloaded ${size}x${size} favicon!`);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Controls */}
            <div className="space-y-6 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Favicon Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Tabs value={mode} onValueChange={setMode}>
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="text"><Type className="w-4 h-4 mr-2" /> Text</TabsTrigger>
                                <TabsTrigger value="emoji"><Smile className="w-4 h-4 mr-2" /> Emoji</TabsTrigger>
                                <TabsTrigger value="image"><ImageIcon className="w-4 h-4 mr-2" /> Image</TabsTrigger>
                            </TabsList>

                            <TabsContent value="text" className="space-y-4 pt-4">
                                <div>
                                    <Label>Initials / Text</Label>
                                    <Input
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        maxLength={2}
                                        placeholder="Ab"
                                    />
                                </div>
                                <div>
                                    <Label>Font Size</Label>
                                    <Slider
                                        value={[fontSize]}
                                        onValueChange={(v) => setFontSize(v[0])}
                                        min={10}
                                        max={40}
                                        step={1}
                                        className="mt-2"
                                    />
                                </div>
                            </TabsContent>

                            <TabsContent value="emoji" className="space-y-4 pt-4">
                                <div>
                                    <Label>Emoji</Label>
                                    <Input
                                        value={emoji}
                                        onChange={(e) => setEmoji(e.target.value)}
                                        placeholder="⚡"
                                    />
                                </div>
                                <div>
                                    <Label>Size</Label>
                                    <Slider
                                        value={[fontSize]}
                                        onValueChange={(v) => setFontSize(v[0])}
                                        min={10}
                                        max={40}
                                        step={1}
                                        className="mt-2"
                                    />
                                </div>
                            </TabsContent>

                            <TabsContent value="image" className="space-y-4 pt-4">
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <Upload className="w-4 h-4 mr-2" />
                                    Upload Image
                                </Button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileUpload}
                                />
                            </TabsContent>
                        </Tabs>

                        <div className="space-y-4">
                            {mode !== "image" && (
                                <>
                                    <div>
                                        <Label>Background Color</Label>
                                        <div className="flex gap-2 mt-2">
                                            <Input
                                                type="color"
                                                value={backgroundColor}
                                                onChange={(e) => setBackgroundColor(e.target.value)}
                                                className="w-12 h-10 p-1 cursor-pointer"
                                            />
                                            <Input
                                                type="text"
                                                value={backgroundColor}
                                                onChange={(e) => setBackgroundColor(e.target.value)}
                                                className="flex-1"
                                            />
                                        </div>
                                    </div>
                                    {mode === "text" && (
                                        <div>
                                            <Label>Text Color</Label>
                                            <div className="flex gap-2 mt-2">
                                                <Input
                                                    type="color"
                                                    value={textColor}
                                                    onChange={(e) => setTextColor(e.target.value)}
                                                    className="w-12 h-10 p-1 cursor-pointer"
                                                />
                                                <Input
                                                    type="text"
                                                    value={textColor}
                                                    onChange={(e) => setTextColor(e.target.value)}
                                                    className="flex-1"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            <div>
                                <Label>Shape / Roundness</Label>
                                <Slider
                                    value={[borderRadius]}
                                    onValueChange={(v) => setBorderRadius(v[0])}
                                    min={0}
                                    max={100}
                                    step={1}
                                    className="mt-2"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                    <span>Square</span>
                                    <span>Circle</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <Button onClick={() => downloadFavicon(32)} variant="outline">
                                <Download className="w-4 h-4 mr-2" /> 32x32
                            </Button>
                            <Button onClick={() => downloadFavicon(512)}>
                                <Download className="w-4 h-4 mr-2" /> 512x512
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Preview */}
            <div className="lg:col-span-2 space-y-6">
                {/* Browser Preview */}
                <Card className="bg-gray-100 border-b-0 rounded-b-none">
                    <div className="bg-gray-200 px-4 py-2 rounded-t-lg flex items-center gap-2 border-b border-gray-300">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="ml-4 bg-white px-3 py-1.5 rounded-t-md text-xs flex items-center gap-2 shadow-sm border-t border-x border-gray-300 relative top-[9px]">
                            {previewUrl && (
                                <img
                                    src={previewUrl}
                                    className="w-4 h-4 object-contain"
                                    alt="Favicon Preview"
                                />
                            )}
                            <span className="w-24 truncate">New Tab</span>
                            <span className="ml-2 text-gray-400">×</span>
                        </div>
                    </div>
                    <div className="bg-white h-64 border-x border-b rounded-b-lg flex items-center justify-center text-muted-foreground">
                        Browser Preview
                    </div>
                </Card>

                {/* Large Preview */}
                <Card>
                    <CardHeader>
                        <CardTitle>Large Preview</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center p-12 bg-gray-50/50">
                        <div className="w-32 h-32 shadow-lg rounded-xl overflow-hidden flex items-center justify-center bg-white">
                            <canvas
                                ref={canvasRef}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
