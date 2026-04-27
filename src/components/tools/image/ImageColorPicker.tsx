"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    Pipette, 
    Copy, 
    Download, 
    ImageIcon,
    Loader2,
    RefreshCw,
    History,
    Check,
    ZoomIn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ImageColorPicker() {
    const [image, setImage] = useState<string | null>(null);
    const [pickedColor, setPickedColor] = useState<string>("#000000");
    const [rgb, setRgb] = useState<{r: number, g: number, b: number}>({r: 0, g: 0, b: 0});
    const [history, setHistory] = useState<string[]>([]);
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target?.result as string);
                setHistory([]);
            };
            reader.readAsDataURL(file);
            toast.success("Image loaded successfully");
        } else if (file) {
            toast.error("Please select a valid image file");
        }
    }, []);

    const rgbToHex = (r: number, g: number, b: number) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current || !canvasRef.current) return;
        
        const rect = imageRef.current.getBoundingClientRect();
        const x = Math.floor(e.clientX - rect.left);
        const y = Math.floor(e.clientY - rect.top);
        
        // Calculate original coordinates (account for scaling)
        const scaleX = imageRef.current.naturalWidth / rect.width;
        const scaleY = imageRef.current.naturalHeight / rect.height;
        const origX = Math.floor(x * scaleX);
        const origY = Math.floor(y * scaleY);

        setMousePos({ x, y });
        setZoomPos({ x: origX, y: origY });

        const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });
        if (ctx) {
            const pixel = ctx.getImageData(origX, origY, 1, 1).data;
            const r = pixel[0];
            const g = pixel[1];
            const b = pixel[2];
            setRgb({ r, g, b });
            setPickedColor(rgbToHex(r, g, b));
        }
    };

    const handlePickColor = () => {
        if (pickedColor) {
            setHistory(prev => [pickedColor, ...prev.filter(c => c !== pickedColor)].slice(0, 12));
            navigator.clipboard.writeText(pickedColor);
            toast.success(`Copied ${pickedColor} to clipboard`);
        }
    };

    useEffect(() => {
        if (image && canvasRef.current) {
            const img = new Image();
            img.onload = () => {
                const canvas = canvasRef.current!;
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.drawImage(img, 0, 0);
                }
            };
            img.src = image;
        }
    }, [image]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success(`Copied ${text}`);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card/50 p-6 border border-border/40 rounded-none backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary">
                        <Pipette className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Image Color Picker</h2>
                        <p className="text-sm text-muted-foreground">Extract hex, rgb, and hsl color codes from any image instantly</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-none border-primary/20 hover:border-primary/50"
                    >
                        <Upload className="mr-2 h-4 w-4" /> {image ? "Change Image" : "Upload Image"}
                    </Button>
                    {image && (
                        <Button 
                            variant="ghost" 
                            onClick={() => setImage(null)}
                            className="rounded-none hover:bg-destructive/10 hover:text-destructive"
                        >
                            <RefreshCw className="mr-2 h-4 w-4" /> Reset
                        </Button>
                    )}
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
                    {!image ? (
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="group cursor-pointer flex flex-col items-center justify-center p-12 md:p-24 border-2 border-dashed border-primary/20 hover:border-primary/40 bg-card/30 hover:bg-card/50 transition-all rounded-none text-center"
                        >
                            <div className="p-6 bg-primary/5 rounded-none group-hover:scale-110 transition-transform">
                                <ImageIcon className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Upload Image to Pick Colors</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Get hex codes from your photos. All processing happens in your browser for 100% privacy.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">HEX</Badge>
                                <Badge variant="outline">RGB</Badge>
                                <Badge variant="outline">HSL</Badge>
                            </div>
                        </div>
                    ) : (
                        <div className="relative group cursor-crosshair overflow-hidden border border-border/40 bg-muted/20">
                            <div 
                                className="relative inline-block"
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                onClick={handlePickColor}
                            >
                                <img 
                                    ref={imageRef}
                                    src={image} 
                                    alt="Color Picker Source" 
                                    className="max-w-full block select-none"
                                />
                                
                                {isHovering && (
                                    <div 
                                        className="absolute pointer-events-none border-2 border-white shadow-2xl rounded-full w-24 h-24 overflow-hidden -translate-x-1/2 -translate-y-1/2"
                                        style={{ 
                                            left: mousePos.x, 
                                            top: mousePos.y,
                                            boxShadow: '0 0 0 2px rgba(0,0,0,0.2)'
                                        }}
                                    >
                                        <canvas 
                                            ref={canvasRef} 
                                            className="hidden"
                                        />
                                        <div 
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `url(${image})`,
                                                backgroundPosition: `${-(zoomPos.x * 4) + 48}px ${-(zoomPos.y * 4) + 48}px`,
                                                backgroundSize: `${(imageRef.current?.naturalWidth || 0) * 4}px ${(imageRef.current?.naturalHeight || 0) * 4}px`,
                                                backgroundRepeat: 'no-repeat',
                                                imageRendering: 'pixelated'
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-1 h-1 bg-white ring-1 ring-black/50" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="absolute top-4 left-4 pointer-events-none">
                                <Badge className="rounded-none bg-black/60 backdrop-blur-md border-none font-bold tracking-widest px-3 py-1">
                                    Click to Pick
                                </Badge>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Controls */}
                <div className="space-y-6">
                    {/* Picked Color Display */}
                    <Card className="rounded-none border-border/40 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4 border-b border-border/40">
                            <CardTitle className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <ZoomIn className="h-4 w-4 text-primary" /> Active Color
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="flex flex-col items-center gap-4">
                                <div 
                                    className="w-full h-24 border border-border/40 shadow-inner"
                                    style={{ backgroundColor: pickedColor }}
                                />
                                <div className="w-full space-y-4">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">HEX Code</Label>
                                        <div className="flex gap-2">
                                            <Input readOnly value={pickedColor} className="rounded-none h-9 font-mono text-xs" />
                                            <Button size="icon" variant="outline" className="rounded-none h-9 w-9 shrink-0" onClick={() => copyToClipboard(pickedColor)}>
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">RGB Values</Label>
                                        <div className="flex gap-2">
                                            <Input readOnly value={`${rgb.r}, ${rgb.g}, ${rgb.b}`} className="rounded-none h-9 font-mono text-xs" />
                                            <Button size="icon" variant="outline" className="rounded-none h-9 w-9 shrink-0" onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}>
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* History */}
                    {history.length > 0 && (
                        <Card className="rounded-none border-border/40 bg-card/50 backdrop-blur-sm">
                            <CardHeader className="pb-4 border-b border-border/40">
                                <CardTitle className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    <History className="h-4 w-4 text-primary" /> Recent Colors
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="grid grid-cols-4 gap-2">
                                    {history.map((color, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => {
                                                setPickedColor(color);
                                                copyToClipboard(color);
                                            }}
                                            className="aspect-square border border-border/40 hover:scale-110 transition-transform shadow-sm"
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Check className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Designer Tip</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Click anywhere on the image to save the color to your history and copy it to your clipboard automatically.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
