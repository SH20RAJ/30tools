"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Download,
  Type,
  Circle,
  Square,
  Heart,
  Star,
  Zap,
  Code,
  Palette
} from "lucide-react";
import { toast } from "sonner";

const shapes = [
  {
    name: "Circle", icon: Circle, draw: (ctx, x, y, size) => {
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  },
  {
    name: "Square", icon: Square, draw: (ctx, x, y, size) => {
      ctx.fillRect(x - size / 2, y - size / 2, size, size);
    }
  },
  {
    name: "Star", icon: Star, draw: (ctx, x, y, size) => {
      const points = 5;
      const outerRadius = size / 2;
      const innerRadius = size / 4;
      ctx.beginPath();
      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / points - Math.PI / 2;
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
    }
  },
  {
    name: "Heart", icon: Heart, draw: (ctx, x, y, size) => {
      const topCurveHeight = size * 0.3;
      ctx.beginPath();
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.3, x, y + size);
      ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.3, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.closePath();
      ctx.fill();
    }
  },
];

const colorPresets = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8",
  "#6C5CE7", "#A8E6CF", "#FFD93D", "#95E1D3", "#F38181"
];

export default function LogoMakerTool() {
  const [text, setText] = useState("LOGO");
  const [fontSize, setFontSize] = useState(80);
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [selectedShape, setSelectedShape] = useState(0);
  const [shapeSize, setShapeSize] = useState(120);
  const [shapeColor, setShapeColor] = useState("#4ECDC4");
  const [showShape, setShowShape] = useState(true);
  const [showText, setShowText] = useState(true);

  const canvasRef = useRef(null);

  const drawLogo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Shape
    if (showShape) {
      ctx.fillStyle = shapeColor;
      shapes[selectedShape].draw(ctx, canvas.width / 2, canvas.height / 2, shapeSize);
    }

    // Draw Text
    if (showText && text) {
      ctx.fillStyle = textColor;
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    }
  };

  useEffect(() => {
    drawLogo();
  }, [text, fontSize, textColor, bgColor, selectedShape, shapeSize, shapeColor, showShape, showText]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `logo-${text.toLowerCase().replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast.success("Logo downloaded successfully!");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-4 space-y-6">
          {/* Text Settings */}
          <div className="bg-card border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Type className="w-4 h-4" />
                Text
              </h3>
              <Button
                size="sm"
                variant={showText ? "default" : "outline"}
                onClick={() => setShowText(!showText)}
              >
                {showText ? "Hide" : "Show"}
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Logo Text</Label>
                <Input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter text"
                  maxLength={20}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Font Size</Label>
                  <span className="text-xs text-muted-foreground">{fontSize}px</span>
                </div>
                <Slider
                  value={[fontSize]}
                  min={20}
                  max={150}
                  onValueChange={([v]) => setFontSize(v)}
                />
              </div>

              <div className="space-y-2">
                <Label>Text Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-20 h-10 p-1"
                  />
                  <Input
                    type="text"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="flex-1 font-mono text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shape Settings */}
          <div className="bg-card border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Circle className="w-4 h-4" />
                Shape
              </h3>
              <Button
                size="sm"
                variant={showShape ? "default" : "outline"}
                onClick={() => setShowShape(!showShape)}
              >
                {showShape ? "Hide" : "Show"}
              </Button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-2">
                {shapes.map((shape, idx) => {
                  const Icon = shape.icon;
                  return (
                    <Button
                      key={idx}
                      variant={selectedShape === idx ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedShape(idx)}
                      className="aspect-square p-0"
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  );
                })}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Size</Label>
                  <span className="text-xs text-muted-foreground">{shapeSize}px</span>
                </div>
                <Slider
                  value={[shapeSize]}
                  min={50}
                  max={300}
                  onValueChange={([v]) => setShapeSize(v)}
                />
              </div>

              <div className="space-y-2">
                <Label>Shape Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={shapeColor}
                    onChange={(e) => setShapeColor(e.target.value)}
                    className="w-20 h-10 p-1"
                  />
                  <Input
                    type="text"
                    value={shapeColor}
                    onChange={(e) => setShapeColor(e.target.value)}
                    className="flex-1 font-mono text-sm"
                  />
                </div>
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {colorPresets.map((color, idx) => (
                    <button
                      key={idx}
                      className="w-full aspect-square rounded-md border-2 hover:scale-110 transition-transform"
                      style={{ backgroundColor: color, borderColor: shapeColor === color ? '#000' : 'transparent' }}
                      onClick={() => setShapeColor(color)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Background */}
          <div className="bg-card border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Background
            </h3>
            <div className="space-y-2">
              <Label>Background Color</Label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-20 h-10 p-1"
                />
                <Input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="flex-1 font-mono text-sm"
                />
              </div>
            </div>
          </div>

          <Button className="w-full" size="lg" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            Download Logo
          </Button>
        </div>

        {/* Canvas */}
        <div className="lg:col-span-8">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 flex items-center justify-center border min-h-[600px]">
            <canvas
              ref={canvasRef}
              className="max-w-full h-auto shadow-2xl rounded-lg bg-white"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
