"use client";

import { useState, useRef, useCallback } from "react";
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
import { Slider } from "@/components/ui/slider";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Upload, Download, X, LayoutGrid, LayoutList, Columns } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";

const LAYOUTS = [
    { id: "grid-2", label: "Grid 2x2", icon: LayoutGrid, cols: 2 },
    { id: "grid-3", label: "Grid 3x3", icon: LayoutGrid, cols: 3 },
    { id: "row", label: "Horizontal Row", icon: Columns, cols: "flex" },
    { id: "col", label: "Vertical Column", icon: LayoutList, cols: 1 },
];

export default function PhotoCollageMakerTool() {
    const [images, setImages] = useState([]);
    const [layout, setLayout] = useState("grid-2");
    const [gap, setGap] = useState(10);
    const [padding, setPadding] = useState(10);
    const [borderRadius, setBorderRadius] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [isExporting, setIsExporting] = useState(false);
    const collageRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prev) => [...prev, ...newImages]);
    };

    const removeImage = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    const downloadCollage = async () => {
        if (!collageRef.current || images.length === 0) return;

        setIsExporting(true);
        try {
            const canvas = await html2canvas(collageRef.current, {
                useCORS: true,
                scale: 2, // High resolution
                backgroundColor: null,
            });

            const link = document.createElement("a");
            link.download = "photo-collage.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
            toast.success("Collage downloaded successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate collage.");
        } finally {
            setIsExporting(false);
        }
    };

    const getGridStyle = () => {
        if (layout === "row") {
            return {
                display: "flex",
                flexDirection: "row",
                gap: `${gap}px`,
            };
        }
        if (layout === "col") {
            return {
                display: "flex",
                flexDirection: "column",
                gap: `${gap}px`,
            };
        }

        const cols = LAYOUTS.find(l => l.id === layout)?.cols || 2;
        return {
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: `${gap}px`,
        };
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Controls */}
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Collage Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <Label>Layout</Label>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {LAYOUTS.map((l) => (
                                    <Button
                                        key={l.id}
                                        variant={layout === l.id ? "default" : "outline"}
                                        className="justify-start"
                                        onClick={() => setLayout(l.id)}
                                    >
                                        <l.icon className="w-4 h-4 mr-2" />
                                        {l.label}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <Label>Spacing ({gap}px)</Label>
                                <Slider
                                    value={[gap]}
                                    onValueChange={(v) => setGap(v[0])}
                                    max={50}
                                    step={1}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label>Padding ({padding}px)</Label>
                                <Slider
                                    value={[padding]}
                                    onValueChange={(v) => setPadding(v[0])}
                                    max={50}
                                    step={1}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label>Roundness ({borderRadius}px)</Label>
                                <Slider
                                    value={[borderRadius]}
                                    onValueChange={(v) => setBorderRadius(v[0])}
                                    max={50}
                                    step={1}
                                    className="mt-2"
                                />
                            </div>
                        </div>

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

                        <div className="space-y-2">
                            <Button
                                className="w-full"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <Upload className="w-4 h-4 mr-2" />
                                Add Photos
                            </Button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileUpload}
                            />

                            <Button
                                variant="secondary"
                                className="w-full"
                                onClick={downloadCollage}
                                disabled={images.length === 0 || isExporting}
                            >
                                <Download className="w-4 h-4 mr-2" />
                                {isExporting ? "Generating..." : "Download Collage"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Images ({images.length})</CardTitle>
                        <CardDescription>Drag to reorder (coming soon)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-3 gap-2">
                            {images.map((img, i) => (
                                <div key={i} className="relative group aspect-square">
                                    <img
                                        src={img}
                                        alt={`Upload ${i + 1}`}
                                        className="w-full h-full object-cover rounded-md border"
                                    />
                                    <button
                                        onClick={() => removeImage(i)}
                                        className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Preview */}
            <div className="lg:col-span-2">
                <Card className="h-full min-h-[500px] flex items-center justify-center bg-gray-50/50 overflow-hidden">
                    <CardContent className="p-6 w-full overflow-auto">
                        {images.length > 0 ? (
                            <div
                                ref={collageRef}
                                style={{
                                    backgroundColor,
                                    padding: `${padding}px`,
                                    width: "100%",
                                    maxWidth: "800px",
                                    margin: "0 auto",
                                }}
                            >
                                <div style={getGridStyle()}>
                                    {images.map((img, i) => (
                                        <div
                                            key={i}
                                            className="relative overflow-hidden"
                                            style={{
                                                borderRadius: `${borderRadius}px`,
                                                aspectRatio: "1/1", // Force square for grid consistency
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt={`Collage item ${i}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-muted-foreground">
                                <LayoutGrid className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                <p>Add photos to start creating your collage</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
