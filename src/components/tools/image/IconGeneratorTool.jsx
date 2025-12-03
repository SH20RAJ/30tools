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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Upload, Download, Type, Smile, Image as ImageIcon, Smartphone } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";

const GRADIENTS = [
    { id: "none", label: "Solid Color", value: "" },
    { id: "sunset", label: "Sunset", value: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)" },
    { id: "ocean", label: "Ocean", value: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { id: "purple", label: "Deep Purple", value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { id: "fire", label: "Fire", value: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)" },
    { id: "night", label: "Night", value: "linear-gradient(135deg, #09203f 0%, #537895 100%)" },
];

export default function IconGeneratorTool() {
    const [mode, setMode] = useState("emoji"); // text, emoji, image
    const [text, setText] = useState("A");
    const [emoji, setEmoji] = useState("🚀");
    const [uploadedImage, setUploadedImage] = useState(null);
    const [textColor, setTextColor] = useState("#ffffff");
    const [backgroundColor, setBackgroundColor] = useState("#2563eb");
    const [gradient, setGradient] = useState("none");
    const [fontSize, setFontSize] = useState(50);
    const [previewMode, setPreviewMode] = useState("ios"); // ios, android, square
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

    const drawIcon = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const size = 1024; // Master size

        canvas.width = size;
        canvas.height = size;

        // Clear
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background
        if (mode !== "image" || !uploadedImage) {
            if (gradient !== "none" && gradient) {
                const gradId = GRADIENTS.find(g => g.id === gradient);
                // Canvas gradients are complex to parse from CSS strings.
                // For simplicity, we'll implement a few hardcoded gradients matching the IDs
                // or just fallback to solid color if "none".
                // To properly support CSS gradients in canvas, we'd need a parser or manual mapping.
                // Let's do manual mapping for the presets.

                const grd = ctx.createLinearGradient(0, 0, size, size);
                if (gradient === "sunset") { grd.addColorStop(0, "#ff9a9e"); grd.addColorStop(1, "#fecfef"); }
                else if (gradient === "ocean") { grd.addColorStop(0, "#4facfe"); grd.addColorStop(1, "#00f2fe"); }
                else if (gradient === "purple") { grd.addColorStop(0, "#667eea"); grd.addColorStop(1, "#764ba2"); }
                else if (gradient === "fire") { grd.addColorStop(0, "#ff0844"); grd.addColorStop(1, "#ffb199"); }
                else if (gradient === "night") { grd.addColorStop(0, "#09203f"); grd.addColorStop(1, "#537895"); }
                else { grd.addColorStop(0, backgroundColor); grd.addColorStop(1, backgroundColor); }

                ctx.fillStyle = grd;
            } else {
                ctx.fillStyle = backgroundColor;
            }

            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Content
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (mode === "text") {
            ctx.fillStyle = textColor;
            ctx.font = `bold ${(fontSize / 100) * size}px sans-serif`;
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        } else if (mode === "emoji") {
            ctx.font = `${(fontSize / 100) * size}px serif`;
            ctx.fillText(emoji, canvas.width / 2, canvas.height / 2 + (size * 0.05));
        } else if (mode === "image" && uploadedImage) {
            const img = new Image();
            img.src = uploadedImage;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        }
    };

    useEffect(() => {
        drawIcon();
    }, [mode, text, emoji, uploadedImage, textColor, backgroundColor, gradient, fontSize]);

    // Redraw when image loads
    useEffect(() => {
        if (mode === "image" && uploadedImage) {
            const img = new Image();
            img.onload = drawIcon;
            img.src = uploadedImage;
        }
    }, [uploadedImage]);


    const downloadIcon = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const link = document.createElement("a");
        link.download = "app-icon-1024.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        toast.success("Downloaded 1024x1024 App Icon!");
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Controls */}
            <div className="space-y-6 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Icon Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Tabs value={mode} onValueChange={setMode}>
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="emoji"><Smile className="w-4 h-4 mr-2" /> Emoji</TabsTrigger>
                                <TabsTrigger value="text"><Type className="w-4 h-4 mr-2" /> Text</TabsTrigger>
                                <TabsTrigger value="image"><ImageIcon className="w-4 h-4 mr-2" /> Image</TabsTrigger>
                            </TabsList>

                            <TabsContent value="text" className="space-y-4 pt-4">
                                <div>
                                    <Label>Text</Label>
                                    <Input
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        maxLength={3}
                                        placeholder="App"
                                    />
                                </div>
                            </TabsContent>

                            <TabsContent value="emoji" className="space-y-4 pt-4">
                                <div>
                                    <Label>Emoji</Label>
                                    <Input
                                        value={emoji}
                                        onChange={(e) => setEmoji(e.target.value)}
                                        placeholder="🚀"
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
                                        <Label>Background Style</Label>
                                        <Select value={gradient} onValueChange={setGradient}>
                                            <SelectTrigger className="mt-2">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {GRADIENTS.map(g => (
                                                    <SelectItem key={g.id} value={g.id}>{g.label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {(gradient === "none" || !gradient) && (
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
                                    )}

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
                                <Label>Size</Label>
                                <Slider
                                    value={[fontSize]}
                                    onValueChange={(v) => setFontSize(v[0])}
                                    min={10}
                                    max={90}
                                    step={1}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <Button onClick={downloadIcon} className="w-full">
                            <Download className="w-4 h-4 mr-2" /> Download 1024x1024 PNG
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Preview */}
            <div className="lg:col-span-2 space-y-6">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Preview</CardTitle>
                            <div className="flex gap-2">
                                <Button
                                    variant={previewMode === "ios" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setPreviewMode("ios")}
                                >
                                    iOS
                                </Button>
                                <Button
                                    variant={previewMode === "android" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setPreviewMode("android")}
                                >
                                    Android
                                </Button>
                                <Button
                                    variant={previewMode === "square" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setPreviewMode("square")}
                                >
                                    Square
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex justify-center p-12 bg-gray-50/50 min-h-[400px] items-center">
                        <div
                            className="w-64 h-64 shadow-2xl overflow-hidden relative"
                            style={{
                                borderRadius: previewMode === "ios" ? "22%" : previewMode === "android" ? "50%" : "0",
                                transition: "border-radius 0.3s ease"
                            }}
                        >
                            <canvas
                                ref={canvasRef}
                                className="w-full h-full object-contain"
                            />
                            {/* Gloss effect for iOS */}
                            {previewMode === "ios" && (
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                            )}
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-4">
                    <Card className="p-4 flex flex-col items-center justify-center text-center">
                        <Smartphone className="w-8 h-8 mb-2 text-muted-foreground" />
                        <h3 className="font-semibold text-sm">App Store</h3>
                        <p className="text-xs text-muted-foreground">Requires 1024x1024</p>
                    </Card>
                    <Card className="p-4 flex flex-col items-center justify-center text-center">
                        <Smartphone className="w-8 h-8 mb-2 text-muted-foreground" />
                        <h3 className="font-semibold text-sm">Google Play</h3>
                        <p className="text-xs text-muted-foreground">Requires 512x512</p>
                    </Card>
                    <Card className="p-4 flex flex-col items-center justify-center text-center">
                        <ImageIcon className="w-8 h-8 mb-2 text-muted-foreground" />
                        <h3 className="font-semibold text-sm">Universal</h3>
                        <p className="text-xs text-muted-foreground">PNG Format</p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
