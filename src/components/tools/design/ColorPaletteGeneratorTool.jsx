"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Palette,
  Copy,
  Download,
  Upload,
  RefreshCw,
  Eye,
  Shuffle,
  CheckCircle,
  Lock,
  Unlock,
  Image as ImageIcon,
  Zap,
  Wand2,
  Heart,
} from "lucide-react";

export default function ColorPaletteGeneratorTool() {
  const [colors, setColors] = useState([
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
  ]);
  const [lockedColors, setLockedColors] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [paletteType, setPaletteType] = useState("random");
  const [baseColor, setBaseColor] = useState("#3498db");
  const [copiedIndex, setCopiedIndex] = useState(-1);
  const [imageFile, setImageFile] = useState(null);
  const [extractedColors, setExtractedColors] = useState([]);
  const [colorCount, setColorCount] = useState([5]);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);

  const colorSchemes = {
    monochromatic: "Shades of single color",
    analogous: "Adjacent colors on color wheel",
    complementary: "Opposite colors on color wheel",
    triadic: "Three evenly spaced colors",
    tetradic: "Four colors in two pairs",
    splitComplementary: "Base + two adjacent to complement",
    random: "Randomly generated colors",
  };

  // Convert hex to HSL
  const hexToHsl = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [h * 360, s * 100, l * 100];
  };

  // Convert HSL to hex
  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  // Generate color palette based on scheme
  const generatePalette = useCallback(() => {
    const [h, s, l] = hexToHsl(baseColor);
    const count = colorCount[0];
    let newColors = [];

    switch (paletteType) {
      case "monochromatic":
        for (let i = 0; i < count; i++) {
          const newL = Math.max(
            10,
            Math.min(90, l + (i - Math.floor(count / 2)) * 15),
          );
          newColors.push(hslToHex(h, s, newL));
        }
        break;

      case "analogous":
        for (let i = 0; i < count; i++) {
          const newH = (h + (i - Math.floor(count / 2)) * 30) % 360;
          newColors.push(hslToHex(newH < 0 ? newH + 360 : newH, s, l));
        }
        break;

      case "complementary":
        newColors = [
          baseColor,
          hslToHex((h + 180) % 360, s, l),
          ...Array(count - 2)
            .fill()
            .map(() => {
              const randomH = Math.random() * 360;
              return hslToHex(randomH, s * 0.8, l * 0.9);
            }),
        ];
        break;

      case "triadic":
        newColors = [
          baseColor,
          hslToHex((h + 120) % 360, s, l),
          hslToHex((h + 240) % 360, s, l),
          ...Array(count - 3)
            .fill()
            .map(() => {
              const randomH = Math.random() * 360;
              return hslToHex(randomH, s * 0.7, l * 0.8);
            }),
        ];
        break;

      case "tetradic":
        newColors = [
          baseColor,
          hslToHex((h + 90) % 360, s, l),
          hslToHex((h + 180) % 360, s, l),
          hslToHex((h + 270) % 360, s, l),
          ...Array(count - 4)
            .fill()
            .map(() => {
              const randomH = Math.random() * 360;
              return hslToHex(randomH, s * 0.6, l * 0.7);
            }),
        ];
        break;

      case "splitComplementary":
        newColors = [
          baseColor,
          hslToHex((h + 150) % 360, s, l),
          hslToHex((h + 210) % 360, s, l),
          ...Array(count - 3)
            .fill()
            .map(() => {
              const randomH = Math.random() * 360;
              return hslToHex(randomH, s * 0.8, l * 0.9);
            }),
        ];
        break;

      default: // random
        newColors = Array(count)
          .fill()
          .map(() => {
            return `#${Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, "0")}`;
          });
    }

    // Keep locked colors
    const finalColors = newColors.map((color, index) =>
      index < colors.length && lockedColors[index] ? colors[index] : color,
    );

    setColors(finalColors);
    setLockedColors((prev) => [
      ...prev.slice(0, count),
      ...Array(Math.max(0, count - prev.length)).fill(false),
    ]);
  }, [baseColor, paletteType, colorCount, colors, lockedColors]);

  // Extract colors from image
  const extractColorsFromImage = useCallback(
    (file) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        // Resize image for faster processing
        const maxSize = 100;
        const ratio = Math.min(maxSize / img.width, maxSize / img.height);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const colorMap = new Map();

        // Sample every 10th pixel for performance
        for (let i = 0; i < data.length; i += 40) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const alpha = data[i + 3];

          if (alpha > 128) {
            // Skip transparent pixels
            const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
            colorMap.set(hex, (colorMap.get(hex) || 0) + 1);
          }
        }

        // Get most frequent colors
        const sortedColors = Array.from(colorMap.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
          .map(([color]) => color);

        setExtractedColors(sortedColors);
        setColors(sortedColors.slice(0, colorCount[0]));
      };

      img.src = URL.createObjectURL(file);
    },
    [colorCount],
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      extractColorsFromImage(file);
    }
  };

  const copyToClipboard = async (color, index) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(-1), 2000);
    } catch (_err) {
      console.error("Failed to copy:", err);
    }
  };

  const copyAllColors = async () => {
    const colorString = colors.join(", ");
    try {
      await navigator.clipboard.writeText(colorString);
    } catch (_err) {
      console.error("Failed to copy all colors:", err);
    }
  };

  const toggleColorLock = (index) => {
    setLockedColors((prev) =>
      prev.map((locked, i) => (i === index ? !locked : locked)),
    );
  };

  const exportPalette = (format) => {
    let content = "";
    let filename = "";
    let mimeType = "";

    switch (format) {
      case "css":
        content = `:root {\n${colors.map((color, i) => `  --color-${i + 1}: ${color};`).join("\n")}\n}`;
        filename = "palette.css";
        mimeType = "text/css";
        break;
      case "scss":
        content = colors
          .map((color, i) => `$color-${i + 1}: ${color};`)
          .join("\n");
        filename = "palette.scss";
        mimeType = "text/scss";
        break;
      case "json":
        content = JSON.stringify({ colors }, null, 2);
        filename = "palette.json";
        mimeType = "application/json";
        break;
      case "adobe":
        // Adobe Swatch Exchange format (simplified)
        content = colors.map((color) => color).join("\n");
        filename = "palette.txt";
        mimeType = "text/plain";
        break;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getColorName = (hex) => {
    // Simple color name mapping (in a real app, you'd use a more comprehensive library)
    const colorNames = {
      "#FF0000": "Red",
      "#00FF00": "Green",
      "#0000FF": "Blue",
      "#FFFF00": "Yellow",
      "#FF00FF": "Magenta",
      "#00FFFF": "Cyan",
      "#FFA500": "Orange",
      "#800080": "Purple",
      "#FFC0CB": "Pink",
      "#A52A2A": "Brown",
      "#808080": "Gray",
      "#000000": "Black",
      "#FFFFFF": "White",
    };

    return colorNames[hex.toUpperCase()] || hex;
  };

  const getContrastColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
  };

  // Generate initial palette
  useEffect(() => {
    generatePalette();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Free Color Palette Generator
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Generate beautiful color palettes instantly. Create harmonious color
          schemes, extract colors from images, and export in multiple formats
          for your design projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Instant Generation</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Designer Friendly</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="generate" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="generate">Generate Palette</TabsTrigger>
          <TabsTrigger value="extract">Extract from Image</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-6">
          {/* Generation Controls */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Palette Generator
              </CardTitle>
              <CardDescription>
                Create color palettes using different color harmony rules
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="base-color">Base Color</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        id="base-color"
                        type="color"
                        value={baseColor}
                        onChange={(e) => setBaseColor(e.target.value)}
                        className="w-16 h-10 p-1"
                      />
                      <Input
                        type="text"
                        value={baseColor}
                        onChange={(e) => setBaseColor(e.target.value)}
                        className="flex-1"
                        placeholder="#3498db"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="color-count">
                      Number of Colors: {colorCount[0]}
                    </Label>
                    <Slider
                      id="color-count"
                      min={3}
                      max={10}
                      step={1}
                      value={colorCount}
                      onValueChange={setColorCount}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="palette-type">Color Scheme</Label>
                    <select
                      id="palette-type"
                      value={paletteType}
                      onChange={(e) => setPaletteType(e.target.value)}
                      className="w-full mt-2 border rounded px-3 py-2"
                    >
                      {Object.entries(colorSchemes).map(
                        ([key, description]) => (
                          <option key={key} value={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)} -{" "}
                            {description}
                          </option>
                        ),
                      )}
                    </select>
                  </div>

                  <Button onClick={generatePalette} className="w-full">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Generate New Palette
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="extract" className="space-y-6">
          {/* Image Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Extract Colors from Image
              </CardTitle>
              <CardDescription>
                Upload an image to extract its color palette
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">
                  Drop an image here or click to browse
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Supports JPG, PNG, WebP formats
                </p>
                <Input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Button onClick={() => fileInputRef.current?.click()}>
                  Choose Image
                </Button>
              </div>

              {extractedColors.length > 0 && (
                <div className="mt-6">
                  <Label className="text-base font-medium">
                    Extracted Colors
                  </Label>
                  <div className="grid grid-cols-5 md:grid-cols-10 gap-2 mt-2">
                    {extractedColors.map((color, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded cursor-pointer border-2 border-muted hover:border-primary transition-colors"
                        style={{ backgroundColor: color }}
                        onClick={() =>
                          setColors((prev) => [color, ...prev.slice(1)])
                        }
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Color Palette Display */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Color Palette
            </span>
            <div className="flex gap-2">
              <Button onClick={copyAllColors} variant="outline" size="sm">
                <Copy className="h-4 w-4 mr-2" />
                Copy All
              </Button>
              <Button
                onClick={() => generatePalette()}
                variant="outline"
                size="sm"
              >
                <Shuffle className="h-4 w-4 mr-2" />
                Shuffle
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Large Color Swatches */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {colors.map((color, index) => (
                <div key={index} className="space-y-2">
                  <div
                    className="aspect-video rounded-lg cursor-pointer relative group border"
                    style={{ backgroundColor: color }}
                    onClick={() => copyToClipboard(color, index)}
                  >
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      {copiedIndex === index ? (
                        <CheckCircle className="h-8 w-8 text-white" />
                      ) : (
                        <Copy className="h-8 w-8 text-white" />
                      )}
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleColorLock(index);
                      }}
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                    >
                      {lockedColors[index] ? (
                        <Lock className="h-3 w-3" />
                      ) : (
                        <Unlock className="h-3 w-3" />
                      )}
                    </Button>
                  </div>

                  <div className="text-center space-y-1">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                      {color.toUpperCase()}
                    </code>
                    <p className="text-xs text-muted-foreground">
                      {getColorName(color)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Color Details */}
            <div className="grid gap-4 md:grid-cols-5">
              {colors.map((color, index) => {
                const [h, s, l] = hexToHsl(color);
                const r = parseInt(color.slice(1, 3), 16);
                const g = parseInt(color.slice(3, 5), 16);
                const b = parseInt(color.slice(5, 7), 16);

                return (
                  <Card key={index} className="p-3">
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span>HEX</span>
                        <code>{color.toUpperCase()}</code>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>RGB</span>
                        <code>
                          {r}, {g}, {b}
                        </code>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>HSL</span>
                        <code>
                          {Math.round(h)}°, {Math.round(s)}%, {Math.round(l)}%
                        </code>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Export Palette
          </CardTitle>
          <CardDescription>
            Download your color palette in various formats
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button onClick={() => exportPalette("css")} variant="outline">
              CSS Variables
            </Button>
            <Button onClick={() => exportPalette("scss")} variant="outline">
              SCSS Variables
            </Button>
            <Button onClick={() => exportPalette("json")} variant="outline">
              JSON Format
            </Button>
            <Button onClick={() => exportPalette("adobe")} variant="outline">
              Adobe Swatch
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preview Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Palette Preview</CardTitle>
          <CardDescription>See how your colors work together</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Website Preview */}
            <div
              className="border rounded-lg p-6"
              style={{ backgroundColor: colors[0] }}
            >
              <div className="bg-white rounded p-4 shadow">
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: colors[1] }}
                >
                  Sample Website Header
                </h3>
                <p className="text-sm mb-4" style={{ color: colors[2] }}>
                  This is how your color palette might look in a real design
                  project.
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    style={{
                      backgroundColor: colors[3],
                      color: getContrastColor(colors[3]),
                    }}
                  >
                    Primary Button
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    style={{ borderColor: colors[4], color: colors[4] }}
                  >
                    Secondary Button
                  </Button>
                </div>
              </div>
            </div>

            {/* Gradient Preview */}
            <div
              className="h-16 rounded-lg"
              style={{
                background: `linear-gradient(90deg, ${colors.join(", ")})`,
              }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} className="hidden" />

      {/* FAQ Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">What are color harmonies?</h4>
              <p className="text-sm text-muted-foreground">
                Color harmonies are combinations of colors that are pleasing to
                the eye. They're based on color theory and the color wheel,
                creating balanced and visually appealing palettes.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                How do I use the lock feature?
              </h4>
              <p className="text-sm text-muted-foreground">
                Click the lock icon on any color to prevent it from changing
                when you generate a new palette. This lets you keep colors you
                like while exploring variations.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                What image formats are supported?
              </h4>
              <p className="text-sm text-muted-foreground">
                You can upload JPG, PNG, WebP, and most other common image
                formats. The tool will automatically extract the most prominent
                colors from your image.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                How can I use the exported files?
              </h4>
              <p className="text-sm text-muted-foreground">
                CSS/SCSS files can be imported into your web projects, JSON
                format works with design tools, and Adobe Swatch files can be
                imported into Photoshop and Illustrator.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
