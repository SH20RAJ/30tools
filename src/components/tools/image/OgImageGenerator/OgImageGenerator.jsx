"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, RefreshCw, Upload, Image as ImageIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TEMPLATES = {
  simple: {
    name: "Simple",
    background: "#ffffff",
    textColor: "#000000",
    layout: "center",
  },
  dark: {
    name: "Dark Mode",
    background: "#0f172a",
    textColor: "#ffffff",
    layout: "center",
  },
  gradient: {
    name: "Gradient",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    textColor: "#ffffff",
    layout: "left",
  },
  modern: {
    name: "Modern",
    background: "#f3f4f6",
    textColor: "#111827",
    layout: "card",
  },
};

export default function OgImageGenerator() {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({
    template: "simple",
    title: "My Awesome Article",
    description: "Learn how to create amazing things with this guide.",
    siteName: "mysite.com",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    accentColor: "#3b82f6",
    fontSize: 60,
    logoUrl: null,
    backgroundImageUrl: null,
  });

  // Draw canvas whenever config changes
  useEffect(() => {
    drawCanvas();
  }, [config]);

  const handleConfigChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageUpload = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        handleConfigChange(key, event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Standard OG Image size
    canvas.width = 1200;
    canvas.height = 630;

    // Background
    if (config.backgroundImageUrl) {
      const img = new Image();
      img.src = config.backgroundImageUrl;
      img.onload = () => {
        // Cover fit
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );
        const x = canvas.width / 2 - (img.width / 2) * scale;
        const y = canvas.height / 2 - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        
        // Add overlay for readability
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawText(ctx);
      };
    } else {
      if (config.background.startsWith("linear-gradient")) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        // Simplified gradient parsing for demo
        if (config.template === "gradient") {
            gradient.addColorStop(0, "#667eea");
            gradient.addColorStop(1, "#764ba2");
        } else {
            gradient.addColorStop(0, "#ffffff");
            gradient.addColorStop(1, "#e5e7eb");
        }
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = config.background;
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawText(ctx);
    }
  };

  const drawText = (ctx) => {
    const { title, description, siteName, textColor, fontSize, layout, logoUrl } = config;
    
    ctx.fillStyle = textColor;
    ctx.textAlign = layout === "center" ? "center" : "left";
    ctx.textBaseline = "middle";

    const x = layout === "center" ? canvas.width / 2 : 100;
    let y = canvas.height / 2;

    // Logo
    if (logoUrl) {
      const img = new Image();
      img.src = logoUrl;
      img.onload = () => {
        const logoSize = 80;
        const logoX = layout === "center" ? canvas.width / 2 - logoSize / 2 : 60; // Adjusted for padding
        const logoY = 60;
        ctx.drawImage(img, logoX, logoY, logoSize, logoSize);
      };
    }

    // Site Name
    ctx.font = `bold 30px Inter, sans-serif`;
    ctx.globalAlpha = 0.8;
    ctx.fillText(siteName, x, y - 150);
    ctx.globalAlpha = 1.0;

    // Title
    ctx.font = `bold ${fontSize}px Inter, sans-serif`;
    wrapText(ctx, title, x, y - 20, canvas.width - 200, fontSize * 1.2);

    // Description
    ctx.font = `medium ${fontSize * 0.5}px Inter, sans-serif`;
    ctx.globalAlpha = 0.9;
    wrapText(ctx, description, x, y + 100, canvas.width - 200, fontSize * 0.8);
  };

  const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(" ");
    let line = "";
    let testLine = "";
    let lineArray = [];

    for (let n = 0; n < words.length; n++) {
      testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        lineArray.push(line);
        line = words[n] + " ";
      } else {
        line = testLine;
      }
    }
    lineArray.push(line);

    // Center vertically based on number of lines
    const totalBlockHeight = lineArray.length * lineHeight;
    let startY = y - totalBlockHeight / 2; // Actually we want it relative to the y passed

    for (let k = 0; k < lineArray.length; k++) {
      ctx.fillText(lineArray[k], x, y + k * lineHeight);
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "og-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const applyTemplate = (templateKey) => {
      const t = TEMPLATES[templateKey];
      setConfig(prev => ({
          ...prev,
          template: templateKey,
          background: t.background,
          textColor: t.textColor,
          layout: t.layout
      }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {/* Controls */}
      <div className="lg:col-span-1 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label>Template</Label>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(TEMPLATES).map((t) => (
                  <Button
                    key={t}
                    variant={config.template === t ? "default" : "outline"}
                    className="w-full"
                    onClick={() => applyTemplate(t)}
                  >
                    {TEMPLATES[t].name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Textarea
                  value={config.title}
                  onChange={(e) => handleConfigChange("title", e.target.value)}
                  placeholder="Enter title..."
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={config.description}
                  onChange={(e) =>
                    handleConfigChange("description", e.target.value)
                  }
                  placeholder="Enter description..."
                />
              </div>
              <div className="space-y-2">
                <Label>Site Name</Label>
                <Input
                  value={config.siteName}
                  onChange={(e) =>
                    handleConfigChange("siteName", e.target.value)
                  }
                  placeholder="mysite.com"
                />
              </div>
            </div>

            <div className="space-y-4">
                <Label>Appearance</Label>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className="text-xs">Background</Label>
                        <div className="flex gap-2">
                           <Input type="color" value={config.backgroundColor} onChange={(e) => {
                               handleConfigChange("backgroundColor", e.target.value);
                               handleConfigChange("background", e.target.value);
                           }} className="w-12 p-1 h-8" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-xs">Text Color</Label>
                        <Input type="color" value={config.textColor} onChange={(e) => handleConfigChange("textColor", e.target.value)} className="w-12 p-1 h-8" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label className="text-xs">Font Size: {config.fontSize}px</Label>
                    <Slider 
                        value={[config.fontSize]} 
                        min={30} 
                        max={100} 
                        step={1} 
                        onValueChange={(v) => handleConfigChange("fontSize", v[0])} 
                    />
                </div>
            </div>

            <div className="space-y-4">
                <Label>Images</Label>
                <div className="grid grid-cols-2 gap-4">
                   <Button variant="outline" className="w-full relative">
                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" onChange={(e) => handleImageUpload(e, 'logoUrl')} />
                        <Upload className="w-4 h-4 mr-2" /> Logo
                   </Button>
                   <Button variant="outline" className="w-full relative">
                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" onChange={(e) => handleImageUpload(e, 'backgroundImageUrl')} />
                        <ImageIcon className="w-4 h-4 mr-2" /> BG Image
                   </Button>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preview */}
      <div className="lg:col-span-2 space-y-6">
        <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Preview</CardTitle>
                <Button onClick={handleDownload}>
                    <Download className="w-4 h-4 mr-2" /> Download
                </Button>
            </CardHeader>
            <CardContent className="p-0 bg-muted/50 flex items-center justify-center min-h-[400px]">
                <div className="transform scale-75 md:scale-90 lg:scale-100 transition-transform origin-top">
                    <canvas 
                        ref={canvasRef} 
                        className="shadow-2xl rounded-lg max-w-full h-auto"
                        style={{ width: '800px', height: '420px' }} // Display size (aspect ratio preserved)
                    />
                </div>
            </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-lg text-center text-sm">
                <p className="font-semibold text-foreground">Optimized for Socials</p>
                <p className="text-muted-foreground">Perfect 1200x630px resolution for Facebook, Twitter/X, and LinkedIn.</p>
            </div>
            <div className="bg-muted p-4 rounded-lg text-center text-sm">
                <p className="font-semibold text-foreground">Fast & Secure</p>
                <p className="text-muted-foreground">Generated instantly in your browser. No server uploads.</p>
            </div>
            <div className="bg-muted p-4 rounded-lg text-center text-sm">
                <p className="font-semibold text-foreground">Customizable</p>
                <p className="text-muted-foreground">Use your own brand colors, logos, and custom layout.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
