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
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Download,
  Type,
  RefreshCw,
  Zap,
  Sparkles,
  Copy,
  Check,
  Image,
  Share2,
} from "lucide-react";
import { toast } from "sonner";

const fonts = [
  { name: "Inter", value: "Inter, sans-serif", category: "Modern" },
  { name: "Roboto", value: "Roboto, sans-serif", category: "Modern" },
  { name: "Poppins", value: "Poppins, sans-serif", category: "Modern" },
  { name: "Montserrat", value: "Montserrat, sans-serif", category: "Modern" },
  { name: "Open Sans", value: "Open Sans, sans-serif", category: "Modern" },
  {
    name: "Playfair Display",
    value: "Playfair Display, serif",
    category: "Elegant",
  },
  { name: "Merriweather", value: "Merriweather, serif", category: "Elegant" },
  { name: "Lora", value: "Lora, serif", category: "Elegant" },
  {
    name: "Dancing Script",
    value: "Dancing Script, cursive",
    category: "Script",
  },
  { name: "Pacifico", value: "Pacifico, cursive", category: "Script" },
  { name: "Righteous", value: "Righteous, cursive", category: "Bold" },
  { name: "Fredoka One", value: "Fredoka One, cursive", category: "Bold" },
  { name: "Oswald", value: "Oswald, sans-serif", category: "Bold" },
  { name: "Ubuntu", value: "Ubuntu, sans-serif", category: "Tech" },
  {
    name: "Source Code Pro",
    value: "Source Code Pro, monospace",
    category: "Tech",
  },
];

const colorPalettes = [
  {
    name: "Professional Blue",
    colors: ["#2563eb", "#1d4ed8", "#1e40af", "#3b82f6"],
  },
  {
    name: "Modern Purple",
    colors: ["#7c3aed", "#8b5cf6", "#a855f7", "#c084fc"],
  },
  {
    name: "Energy Orange",
    colors: ["#ea580c", "#f97316", "#fb923c", "#fed7aa"],
  },
  {
    name: "Growth Green",
    colors: ["#059669", "#10b981", "#34d399", "#86efac"],
  },
  { name: "Trust Blue", colors: ["#0ea5e9", "#06b6d4", "#22d3ee", "#67e8f9"] },
  {
    name: "Creative Pink",
    colors: ["#db2777", "#ec4899", "#f472b6", "#fbcfe8"],
  },
  { name: "Bold Red", colors: ["#dc2626", "#ef4444", "#f87171", "#fca5a5"] },
  {
    name: "Minimal Gray",
    colors: ["#374151", "#6b7280", "#9ca3af", "#d1d5db"],
  },
];

const logoStyles = [
  { name: "Simple Text", gradient: false, shadow: false, border: false },
  { name: "With Shadow", gradient: false, shadow: true, border: false },
  { name: "Gradient Fill", gradient: true, shadow: false, border: false },
  { name: "Bordered", gradient: false, shadow: false, border: true },
  { name: "Premium", gradient: true, shadow: true, border: false },
];

export default function LogoGeneratorTool() {
  const [logoText, setLogoText] = useState("Your Logo");
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [fontSize, setFontSize] = useState([48]);
  const [letterSpacing, setLetterSpacing] = useState([0]);
  const [selectedColor, setSelectedColor] = useState("#2563eb");
  const [selectedPalette, setSelectedPalette] = useState(colorPalettes[0]);
  const [selectedStyle, setSelectedStyle] = useState(logoStyles[0]);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [isTransparent, setIsTransparent] = useState(false);
  const [copied, setCopied] = useState(false);

  const canvasRef = useRef(null);
  const downloadLinkRef = useRef(null);

  useEffect(() => {
    generateLogo();
  }, [
    logoText,
    selectedFont,
    fontSize,
    letterSpacing,
    selectedColor,
    selectedStyle,
    backgroundColor,
    isTransparent,
  ]);

  const generateLogo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    // Set canvas size
    canvas.width = 400 * dpr;
    canvas.height = 200 * dpr;
    canvas.style.width = "400px";
    canvas.style.height = "200px";

    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, 400, 200);

    // Background
    if (!isTransparent) {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, 400, 200);
    }

    // Set font
    ctx.font = `${fontSize[0]}px ${selectedFont.value}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Measure text
    const metrics = ctx.measureText(logoText);
    const textWidth = metrics.width;
    const textHeight = fontSize[0];

    const x = 200;
    const y = 100;

    // Apply letter spacing
    if (letterSpacing[0] !== 0) {
      drawTextWithSpacing(ctx, logoText, x, y);
    } else {
      drawStyledText(ctx, logoText, x, y);
    }
  };

  const drawTextWithSpacing = (ctx, text, x, y) => {
    const chars = text.split("");
    const totalWidth =
      chars.reduce((acc, char) => acc + ctx.measureText(char).width, 0) +
      (chars.length - 1) * letterSpacing[0];
    let currentX = x - totalWidth / 2;

    chars.forEach((char) => {
      drawStyledText(ctx, char, currentX + ctx.measureText(char).width / 2, y);
      currentX += ctx.measureText(char).width + letterSpacing[0];
    });
  };

  const drawStyledText = (ctx, text, x, y) => {
    // Shadow
    if (selectedStyle.shadow) {
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
    } else {
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
    }

    // Fill
    if (selectedStyle.gradient) {
      const gradient = ctx.createLinearGradient(
        x - 100,
        y - 25,
        x + 100,
        y + 25,
      );
      gradient.addColorStop(0, selectedColor);
      gradient.addColorStop(1, adjustColorBrightness(selectedColor, -30));
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = selectedColor;
    }

    ctx.fillText(text, x, y);

    // Border
    if (selectedStyle.border) {
      ctx.strokeStyle = adjustColorBrightness(selectedColor, -50);
      ctx.lineWidth = 2;
      ctx.strokeText(text, x, y);
    }

    // Reset shadow
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  };

  const adjustColorBrightness = (hex, percent) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;
    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  };

  const downloadLogo = (format = "png") => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const link = downloadLinkRef.current;
      link.download = `logo-${logoText.replace(/\s+/g, "-").toLowerCase()}.${format}`;
      link.href = canvas.toDataURL(`image/${format}`);
      link.click();

      toast.success(`Logo downloaded as ${format.toUpperCase()}!`);
    } catch (_error) {
      toast.error("Failed to download logo. Please try again.");
    }
  };

  const copyToClipboard = async () => {
    try {
      const canvas = canvasRef.current;
      canvas.toBlob(async (blob) => {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        setCopied(true);
        toast.success("Logo copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
      });
    } catch (_error) {
      toast.error("Failed to copy logo. Please try again.");
    }
  };

  const randomizeLogo = () => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomPalette =
      colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    const randomColor =
      randomPalette.colors[
        Math.floor(Math.random() * randomPalette.colors.length)
      ];
    const randomStyle =
      logoStyles[Math.floor(Math.random() * logoStyles.length)];

    setSelectedFont(randomFont);
    setSelectedPalette(randomPalette);
    setSelectedColor(randomColor);
    setSelectedStyle(randomStyle);
    setFontSize([40 + Math.random() * 40]);
    setLetterSpacing([Math.random() * 10 - 5]);

    toast.success("Logo randomized!");
  };

  return (
    <div className="min-h-screen bg-gradient-cute py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-background">
              <Palette className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Free Logo Generator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create professional logos instantly with our free logo generator.
            Choose from text-based designs, custom fonts, colors, and effects.
            No design skills required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Text Input */}
            <Card className="card-cute">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Type className="w-5 h-5" />
                  <span>Logo Text</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="logoText">Your Logo Text</Label>
                  <Input
                    id="logoText"
                    value={logoText}
                    onChange={(e) => setLogoText(e.target.value)}
                    placeholder="Enter your logo text"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Font Selection */}
            <Card className="card-cute">
              <CardHeader>
                <CardTitle>Font & Typography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Font Family</Label>
                  <Select
                    value={selectedFont.name}
                    onValueChange={(value) => {
                      const font = fonts.find((f) => f.name === value);
                      setSelectedFont(font);
                    }}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {fonts.map((font) => (
                        <SelectItem key={font.name} value={font.name}>
                          <div className="flex items-center justify-between w-full">
                            <span style={{ fontFamily: font.value }}>
                              {font.name}
                            </span>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {font.category}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Font Size: {fontSize[0]}px</Label>
                  <Slider
                    value={fontSize}
                    onValueChange={setFontSize}
                    max={80}
                    min={20}
                    step={2}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Letter Spacing: {letterSpacing[0]}px</Label>
                  <Slider
                    value={letterSpacing}
                    onValueChange={setLetterSpacing}
                    max={10}
                    min={-5}
                    step={0.5}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Colors */}
            <Card className="card-cute">
              <CardHeader>
                <CardTitle>Colors & Style</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Color Palettes</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {colorPalettes.map((palette) => (
                      <div
                        key={palette.name}
                        className={`p-2 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedPalette.name === palette.name
                            ? "border-primary"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => {
                          setSelectedPalette(palette);
                          setSelectedColor(palette.colors[0]);
                        }}
                      >
                        <div className="text-xs font-medium mb-1">
                          {palette.name}
                        </div>
                        <div className="flex space-x-1">
                          {palette.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-4 h-4 rounded"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Selected Color</Label>
                  <div className="flex space-x-2 mt-2">
                    {selectedPalette.colors.map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-lg border-2 ${
                          selectedColor === color
                            ? "border-foreground"
                            : "border-border"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                  <Input
                    type="color"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="mt-2 h-10"
                  />
                </div>

                <div>
                  <Label>Logo Style</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {logoStyles.map((style) => (
                      <button
                        key={style.name}
                        className={`p-3 text-left rounded-lg border transition-all ${
                          selectedStyle.name === style.name
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedStyle(style)}
                      >
                        <div className="font-medium">{style.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {style.gradient && "Gradient • "}
                          {style.shadow && "Shadow • "}
                          {style.border && "Border • "}
                          {!style.gradient &&
                            !style.shadow &&
                            !style.border &&
                            "Clean & Simple"}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Background */}
            <Card className="card-cute">
              <CardHeader>
                <CardTitle>Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="transparent"
                    checked={isTransparent}
                    onChange={(e) => setIsTransparent(e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="transparent">Transparent Background</Label>
                </div>

                {!isTransparent && (
                  <div>
                    <Label>Background Color</Label>
                    <Input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="mt-1 h-10"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Preview & Download */}
          <div className="lg:col-span-2 space-y-6">
            {/* Preview */}
            <Card className="card-cute">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Image className="w-5 h-5" />
                    <span>Logo Preview</span>
                  </span>
                  <Button onClick={randomizeLogo} variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Randomize
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center p-8 bg-background">
                  <canvas
                    ref={canvasRef}
                    className="border border-border rounded-lg shadow-lg"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Download Options */}
            <Card className="card-cute">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Your Logo</span>
                </CardTitle>
                <CardDescription>
                  Download your logo in high quality formats for web and print
                  use
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => downloadLogo("png")}
                    className="btn-cute"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PNG
                  </Button>
                  <Button
                    onClick={() => downloadLogo("jpeg")}
                    variant="outline"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download JPEG
                  </Button>
                  <Button onClick={copyToClipboard} variant="outline">
                    {copied ? (
                      <Check className="w-4 h-4 mr-2" />
                    ) : (
                      <Copy className="w-4 h-4 mr-2" />
                    )}
                    {copied ? "Copied!" : "Copy to Clipboard"}
                  </Button>
                </div>

                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">💡 Pro Tips:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• PNG format supports transparency for web use</li>
                    <li>• JPEG format is smaller for social media</li>
                    <li>• Use high contrast colors for better visibility</li>
                    <li>• Keep text readable at small sizes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="card-cute">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary dark:text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Instant Generation</h4>
                      <p className="text-sm text-muted-foreground">
                        Create logos in seconds with real-time preview
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                      <Type className="w-4 h-4 text-primary dark:text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Professional Fonts</h4>
                      <p className="text-sm text-muted-foreground">
                        15+ carefully selected fonts for any brand
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                      <Palette className="w-4 h-4 text-primary dark:text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Color Palettes</h4>
                      <p className="text-sm text-muted-foreground">
                        Curated color schemes for different industries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-muted dark:bg-primary/30 rounded-lg flex items-center justify-center">
                      <Download className="w-4 h-4 text-primary dark:text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Multiple Formats</h4>
                      <p className="text-sm text-muted-foreground">
                        Download as PNG, JPEG, or copy to clipboard
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Hidden download link */}
        <a ref={downloadLinkRef} style={{ display: "none" }} />
      </div>
    </div>
  );
}
