"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  Download,
  RotateCcw,
  Wand2,
  Image as ImageIcon,
  Undo,
  Redo,
  Compare,
  Sun,
  Contrast,
  Droplets,
  Eye
} from "lucide-react";
import { toast } from "sonner";

export default function PhotoEnhancerTool() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [originalUrl, setOriginalUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  // Adjustments
  const [adjustments, setAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    sharpness: 0,
    blur: 0,
    warmth: 0
  });

  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size too large. Max 10MB allowed.");
        return;
      }

      const url = URL.createObjectURL(file);
      setImage(file);
      setOriginalUrl(url);
      setPreviewUrl(url);
      resetAdjustments();
    }
  };

  const resetAdjustments = () => {
    setAdjustments({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      sharpness: 0,
      blur: 0,
      warmth: 0
    });
  };

  const applyFilters = () => {
    if (!originalUrl || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Apply basic filters
      ctx.filter = `
        brightness(${adjustments.brightness}%) 
        contrast(${adjustments.contrast}%) 
        saturate(${adjustments.saturation}%)
        blur(${adjustments.blur}px)
      `;

      ctx.drawImage(img, 0, 0);

      // Apply Warmth (Overlay)
      if (adjustments.warmth !== 0) {
        ctx.fillStyle = adjustments.warmth > 0
          ? `rgba(255, 160, 0, ${adjustments.warmth / 200})` // Orange for warmth
          : `rgba(0, 100, 255, ${Math.abs(adjustments.warmth) / 200})`; // Blue for cool
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Apply Sharpness (Convolution Matrix) - Simplified simulation
      // Real sharpness requires pixel manipulation which is heavy for large images on main thread
      // For this demo, we'll skip heavy pixel manipulation to keep it responsive
      // or use a very simple approach if needed.

      // Update preview
      setPreviewUrl(canvas.toDataURL("image/jpeg", 0.9));
    };

    img.src = originalUrl;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (image) applyFilters();
    }, 100); // Debounce
    return () => clearTimeout(timer);
  }, [adjustments, image]);

  const handleDownload = () => {
    if (!previewUrl) return;
    const link = document.createElement("a");
    link.download = `enhanced-${image.name}`;
    link.href = previewUrl;
    link.click();
    toast.success("Image downloaded successfully!");
  };

  const autoEnhance = () => {
    setAdjustments({
      brightness: 110,
      contrast: 115,
      saturation: 120,
      sharpness: 0,
      blur: 0,
      warmth: 10
    });
    toast.success("Auto enhancement applied!");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {!image ? (
        <div
          className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-12 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Upload className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Upload a Photo to Enhance</h2>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Adjustments</h3>
                <Button variant="outline" size="sm" onClick={resetAdjustments}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              <div className="space-y-6">
                <Button className="w-full" onClick={autoEnhance} variant="secondary">
                  <Wand2 className="w-4 h-4 mr-2" />
                  Auto Enhance
                </Button>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="flex items-center gap-2"><Sun className="w-4 h-4" /> Brightness</Label>
                      <span className="text-xs text-muted-foreground">{adjustments.brightness}%</span>
                    </div>
                    <Slider
                      value={[adjustments.brightness]}
                      min={0} max={200}
                      onValueChange={([v]) => setAdjustments(prev => ({ ...prev, brightness: v }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="flex items-center gap-2"><Contrast className="w-4 h-4" /> Contrast</Label>
                      <span className="text-xs text-muted-foreground">{adjustments.contrast}%</span>
                    </div>
                    <Slider
                      value={[adjustments.contrast]}
                      min={0} max={200}
                      onValueChange={([v]) => setAdjustments(prev => ({ ...prev, contrast: v }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="flex items-center gap-2"><Droplets className="w-4 h-4" /> Saturation</Label>
                      <span className="text-xs text-muted-foreground">{adjustments.saturation}%</span>
                    </div>
                    <Slider
                      value={[adjustments.saturation]}
                      min={0} max={200}
                      onValueChange={([v]) => setAdjustments(prev => ({ ...prev, saturation: v }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="flex items-center gap-2"><Eye className="w-4 h-4" /> Blur</Label>
                      <span className="text-xs text-muted-foreground">{adjustments.blur}px</span>
                    </div>
                    <Slider
                      value={[adjustments.blur]}
                      min={0} max={10} step={0.1}
                      onValueChange={([v]) => setAdjustments(prev => ({ ...prev, blur: v }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="flex items-center gap-2">🌡️ Warmth</Label>
                      <span className="text-xs text-muted-foreground">{adjustments.warmth}</span>
                    </div>
                    <Slider
                      value={[adjustments.warmth]}
                      min={-100} max={100}
                      onValueChange={([v]) => setAdjustments(prev => ({ ...prev, warmth: v }))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1" variant="outline" onClick={() => fileInputRef.current?.click()}>
                Replace Image
              </Button>
              <Button className="flex-1" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-8">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 h-[600px] flex items-center justify-center relative overflow-hidden border">
              <img
                src={showCompare ? originalUrl : previewUrl}
                alt="Preview"
                className="max-w-full max-h-full object-contain shadow-lg rounded-lg transition-all duration-200"
              />

              <Button
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4 z-10"
                onMouseDown={() => setShowCompare(true)}
                onMouseUp={() => setShowCompare(false)}
                onMouseLeave={() => setShowCompare(false)}
                onTouchStart={() => setShowCompare(true)}
                onTouchEnd={() => setShowCompare(false)}
              >
                <Compare className="w-4 h-4 mr-2" />
                Hold to Compare
              </Button>

              {/* Hidden Canvas for processing */}
              <canvas ref={canvasRef} className="hidden" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
