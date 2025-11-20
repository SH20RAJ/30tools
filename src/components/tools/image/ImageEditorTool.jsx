"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  Download,
  RotateCw,
  RotateCcw,
  Crop,
  Palette,
  Eraser,
  Undo,
  Redo,
  Sun,
  Contrast as ContrastIcon,
  Droplets,
  Sparkles,
  FlipHorizontal,
  FlipVertical
} from "lucide-react";
import { toast } from "sonner";

export default function ImageEditorTool() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);

  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    hueRotate: 0
  });

  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const imgRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size too large. Max 10MB allowed.");
        return;
      }

      const url = URL.createObjectURL(file);
      setImage(file);
      setPreviewUrl(url);
      resetAll();
    }
  };

  const resetAll = () => {
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setFilters({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      blur: 0,
      grayscale: 0,
      sepia: 0,
      hueRotate: 0
    });
  };

  const applyEffects = () => {
    if (!previewUrl || !canvasRef.current || !imgRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imgRef.current;

    // Calculate dimensions based on rotation
    const rad = (rotation * Math.PI) / 180;
    const isRotated90or270 = rotation === 90 || rotation === 270;

    canvas.width = isRotated90or270 ? img.height : img.width;
    canvas.height = isRotated90or270 ? img.width : img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply transformations
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rad);
    ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);

    // Apply filters
    ctx.filter = `
      brightness(${filters.brightness}%)
      contrast(${filters.contrast}%)
      saturate(${filters.saturation}%)
      blur(${filters.blur}px)
      grayscale(${filters.grayscale}%)
      sepia(${filters.sepia}%)
      hue-rotate(${filters.hueRotate}deg)
    `;

    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();
  };

  useEffect(() => {
    if (image && imgRef.current && imgRef.current.complete) {
      applyEffects();
    }
  }, [filters, rotation, flipH, flipV]);

  const handleImageLoad = () => {
    applyEffects();
  };

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = `edited-${image.name}`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
    toast.success("Image downloaded successfully!");
  };

  const rotate90 = () => setRotation((prev) => (prev + 90) % 360);
  const rotate90CCW = () => setRotation((prev) => (prev - 90 + 360) % 360);

  const applyPreset = (preset) => {
    const presets = {
      vintage: { brightness: 110, contrast: 120, saturation: 80, sepia: 40, hueRotate: 10 },
      vivid: { brightness: 110, contrast: 130, saturation: 150, sepia: 0, hueRotate: 0 },
      bw: { brightness: 100, contrast: 110, saturation: 0, grayscale: 100, sepia: 0 },
      cool: { brightness: 105, contrast: 100, saturation: 110, hueRotate: 180 },
    };
    setFilters({ ...filters, ...presets[preset] });
    toast.success("Preset applied!");
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {!image ? (
        <div
          className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-12 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Upload className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Upload Image to Edit</h2>
          <p className="text-muted-foreground mb-6">
            Support for JPG, PNG, WebP up to 10MB
          </p>
          <Button size="lg">Select Image</Button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-card border rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Transform</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" onClick={rotate90CCW}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    90° CCW
                  </Button>
                  <Button variant="outline" size="sm" onClick={rotate90}>
                    <RotateCw className="w-4 h-4 mr-2" />
                    90° CW
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" onClick={() => setFlipH(!flipH)}>
                    <FlipHorizontal className="w-4 h-4 mr-2" />
                    Flip H
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setFlipV(!flipV)}>
                    <FlipVertical className="w-4 h-4 mr-2" />
                    Flip V
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Filters</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="flex items-center gap-2 text-xs">
                      <Sun className="w-3 h-3" /> Brightness
                    </Label>
                    <span className="text-xs text-muted-foreground">{filters.brightness}%</span>
                  </div>
                  <Slider
                    value={[filters.brightness]}
                    min={0} max={200}
                    onValueChange={([v]) => setFilters(prev => ({ ...prev, brightness: v }))}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-xs">Contrast</Label>
                    <span className="text-xs text-muted-foreground">{filters.contrast}%</span>
                  </div>
                  <Slider
                    value={[filters.contrast]}
                    min={0} max={200}
                    onValueChange={([v]) => setFilters(prev => ({ ...prev, contrast: v }))}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-xs">Saturation</Label>
                    <span className="text-xs text-muted-foreground">{filters.saturation}%</span>
                  </div>
                  <Slider
                    value={[filters.saturation]}
                    min={0} max={200}
                    onValueChange={([v]) => setFilters(prev => ({ ...prev, saturation: v }))}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-xs">Blur</Label>
                    <span className="text-xs text-muted-foreground">{filters.blur}px</span>
                  </div>
                  <Slider
                    value={[filters.blur]}
                    min={0} max={10} step={0.1}
                    onValueChange={([v]) => setFilters(prev => ({ ...prev, blur: v }))}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-xs">Grayscale</Label>
                    <span className="text-xs text-muted-foreground">{filters.grayscale}%</span>
                  </div>
                  <Slider
                    value={[filters.grayscale]}
                    min={0} max={100}
                    onValueChange={([v]) => setFilters(prev => ({ ...prev, grayscale: v }))}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-xs">Sepia</Label>
                    <span className="text-xs text-muted-foreground">{filters.sepia}%</span>
                  </div>
                  <Slider
                    value={[filters.sepia]}
                    min={0} max={100}
                    onValueChange={([v]) => setFilters(prev => ({ ...prev, sepia: v }))}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-xs">Hue Rotate</Label>
                    <span className="text-xs text-muted-foreground">{filters.hueRotate}°</span>
                  </div>
                  <Slider
                    value={[filters.hueRotate]}
                    min={0} max={360}
                    onValueChange={([v]) => setFilters(prev => ({ ...prev, hueRotate: v }))}
                  />
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Presets
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" onClick={() => applyPreset('vintage')}>
                  Vintage
                </Button>
                <Button variant="outline" size="sm" onClick={() => applyPreset('vivid')}>
                  Vivid
                </Button>
                <Button variant="outline" size="sm" onClick={() => applyPreset('bw')}>
                  B&W
                </Button>
                <Button variant="outline" size="sm" onClick={() => applyPreset('cool')}>
                  Cool
                </Button>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={resetAll}>
                Reset
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => fileInputRef.current?.click()}>
                Replace
              </Button>
            </div>
            <Button className="w-full" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          {/* Canvas Preview */}
          <div className="lg:col-span-9">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 min-h-[600px] flex items-center justify-center border overflow-auto">
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  className="max-w-full h-auto shadow-2xl rounded-lg"
                />
                <img
                  ref={imgRef}
                  src={previewUrl}
                  alt="Original"
                  className="hidden"
                  onLoad={handleImageLoad}
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
