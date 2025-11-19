"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeftIcon,
  PaletteIcon,
  CopyIcon,
  CheckCircleIcon,
  RefreshCwIcon,
  DownloadIcon,
  PlayIcon,
  EyeIcon,
  CodeIcon,
  GradientIcon,
  WandIcon,
} from "lucide-react";
import Link from "next/link";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

export default function CSSGradientTool() {
  const [gradientType, setGradientType] = useState("linear");
  const [direction, setDirection] = useState("45deg");
  const [colors, setColors] = useState([
    { color: "#FF6B6B", position: 0 },
    { color: "#4ECDC4", position: 100 },
  ]);
  const [cssOutput, setCssOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const presetGradients = [
    {
      name: "Sunset",
      colors: [
        { color: "#FF512F", position: 0 },
        { color: "#F09819", position: 100 },
      ],
    },
    {
      name: "Ocean",
      colors: [
        { color: "#667eea", position: 0 },
        { color: "#764ba2", position: 100 },
      ],
    },
    {
      name: "Forest",
      colors: [
        { color: "#11998e", position: 0 },
        { color: "#38ef7d", position: 100 },
      ],
    },
    {
      name: "Purple Dream",
      colors: [
        { color: "#667eea", position: 0 },
        { color: "#764ba2", position: 100 },
      ],
    },
    {
      name: "Fire",
      colors: [
        { color: "#FF512F", position: 0 },
        { color: "#DD2476", position: 100 },
      ],
    },
    {
      name: "Cool Blues",
      colors: [
        { color: "#2196F3", position: 0 },
        { color: "#21CBF3", position: 100 },
      ],
    },
    {
      name: "Warm Sunset",
      colors: [
        { color: "#fa709a", position: 0 },
        { color: "#fee140", position: 100 },
      ],
    },
    {
      name: "Deep Space",
      colors: [
        { color: "#000428", position: 0 },
        { color: "#004e92", position: 100 },
      ],
    },
  ];

  const directions = [
    { label: "↗ Top Right", value: "45deg" },
    { label: "→ Right", value: "90deg" },
    { label: "↘ Bottom Right", value: "135deg" },
    { label: "↓ Bottom", value: "180deg" },
    { label: "↙ Bottom Left", value: "225deg" },
    { label: "← Left", value: "270deg" },
    { label: "↖ Top Left", value: "315deg" },
    { label: "↑ Top", value: "0deg" },
  ];

  const generateCSS = () => {
    const colorStops = colors
      .sort((a, b) => a.position - b.position)
      .map((c) => `${c.color} ${c.position}%`)
      .join(", ");

    let css = "";
    if (gradientType === "linear") {
      css = `background: linear-gradient(${direction}, ${colorStops});`;
    } else {
      css = `background: radial-gradient(circle, ${colorStops});`;
    }

    setCssOutput(css);
    return css;
  };

  useEffect(() => {
    generateCSS();
  }, [gradientType, direction, colors]);

  const addColor = () => {
    const newPosition = colors.length > 1 ? 50 : 100;
    setColors([...colors, { color: "#FFB6C1", position: newPosition }]);
  };

  const removeColor = (index) => {
    if (colors.length > 2) {
      setColors(colors.filter((_, i) => i !== index));
    }
  };

  const updateColor = (index, property, value) => {
    const newColors = [...colors];
    newColors[index][property] = value;
    setColors(newColors);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const applyPreset = (preset) => {
    setColors(preset.colors);
  };

  const randomizeGradient = () => {
    const randomColors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
      "#DDA0DD",
      "#98D8C8",
      "#F7DC6F",
      "#BB8FCE",
      "#85C1E9",
    ];

    const newColors = [
      {
        color: randomColors[Math.floor(Math.random() * randomColors.length)],
        position: 0,
      },
      {
        color: randomColors[Math.floor(Math.random() * randomColors.length)],
        position: 100,
      },
    ];

    setColors(newColors);
    setDirection(
      directions[Math.floor(Math.random() * directions.length)].value,
    );
  };

  const exportGradient = (format) => {
    const css = generateCSS();
    let content = "";

    switch (format) {
      case "css":
        content = `.gradient {\n  ${css}\n}`;
        break;
      case "scss":
        content = `$gradient: ${css.replace("background: ", "").replace(";", "")};\n\n.gradient {\n  background: $gradient;\n}`;
        break;
      case "svg":
        const svgColors = colors
          .map(
            (c, i) =>
              `<stop offset="${c.position}%" style="stop-color:${c.color}" />`,
          )
          .join("\n    ");
        content = `<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      ${svgColors}
    </linearGradient>
  </defs>
  <rect width="400" height="200" fill="url(#gradient)" />
</svg>`;
        break;
    }

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `gradient.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
          <PaletteIcon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">CSS Gradient Generator</h1>
          <p className="text-muted-foreground">
            Create beautiful CSS gradients with live preview and export options
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Linear Gradients</Badge>
        <Badge variant="secondary">Radial Gradients</Badge>
        <Badge variant="secondary">Live Preview</Badge>
        <Badge variant="secondary">CSS Export</Badge>
        <Badge variant="secondary">Preset Library</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="lg:col-span-1 space-y-6">
          {/* Gradient Type */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Gradient Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={gradientType} onValueChange={setGradientType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="linear">Linear Gradient</SelectItem>
                  <SelectItem value="radial">Radial Gradient</SelectItem>
                </SelectContent>
              </Select>

              {gradientType === "linear" && (
                <div>
                  <Label className="text-sm font-medium">Direction</Label>
                  <Select value={direction} onValueChange={setDirection}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {directions.map((dir) => (
                        <SelectItem key={dir.value} value={dir.value}>
                          {dir.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Color Stops */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Colors</CardTitle>
              <CardDescription>Add and adjust color stops</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {colors.map((color, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <Label className="text-sm">Color {index + 1}</Label>
                      <div className="flex gap-2">
                        <Input
                          type="color"
                          value={color.color}
                          onChange={(e) =>
                            updateColor(index, "color", e.target.value)
                          }
                          className="w-16 h-10 p-1"
                        />
                        <Input
                          type="text"
                          value={color.color}
                          onChange={(e) =>
                            updateColor(index, "color", e.target.value)
                          }
                          className="flex-1"
                        />
                      </div>
                    </div>
                    {colors.length > 2 && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeColor(index)}
                        className="mt-6"
                      >
                        ×
                      </Button>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm">
                      Position: {color.position}%
                    </Label>
                    <Slider
                      value={[color.position]}
                      onValueChange={([value]) =>
                        updateColor(index, "position", value)
                      }
                      max={100}
                      step={1}
                      className="mt-1"
                    />
                  </div>
                </div>
              ))}

              <Button onClick={addColor} variant="outline" className="w-full">
                <PaletteIcon className="h-4 w-4 mr-2" />
                Add Color
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                onClick={randomizeGradient}
                variant="outline"
                className="w-full"
              >
                <RefreshCwIcon className="h-4 w-4 mr-2" />
                Randomize
              </Button>

              <div className="grid grid-cols-3 gap-2">
                <Button
                  onClick={() => exportGradient("css")}
                  variant="outline"
                  size="sm"
                >
                  CSS
                </Button>
                <Button
                  onClick={() => exportGradient("scss")}
                  variant="outline"
                  size="sm"
                >
                  SCSS
                </Button>
                <Button
                  onClick={() => exportGradient("svg")}
                  variant="outline"
                  size="sm"
                >
                  SVG
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview and Output */}
        <div className="lg:col-span-2 space-y-6">
          {/* Live Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-64 rounded-lg border"
                style={{
                  background: cssOutput
                    .replace("background: ", "")
                    .replace(";", ""),
                }}
              />
            </CardContent>
          </Card>

          {/* CSS Output */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CodeIcon className="h-5 w-5" />
                CSS Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{cssOutput}</code>
                </pre>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(cssOutput)}
                >
                  {copied ? (
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preset Gradients */}
          <Card>
            <CardHeader>
              <CardTitle>Preset Gradients</CardTitle>
              <CardDescription>
                Click to apply popular gradient combinations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {presetGradients.map((preset, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-20 p-2 flex flex-col"
                    onClick={() => applyPreset(preset)}
                    style={{
                      background: `linear-gradient(45deg, ${preset.colors[0].color}, ${preset.colors[1].color})`,
                    }}
                  >
                    <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">
                      {preset.name}
                    </span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Usage Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList>
              <TabsTrigger value="basic">Basic Usage</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">HTML + CSS</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`<div class="gradient-bg">
  <h1>Beautiful Gradient Background</h1>
</div>

<style>
.gradient-bg {
  ${cssOutput}
  padding: 2rem;
  color: white;
  text-align: center;
}
</style>`}</code>
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">With Animation</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`.animated-gradient {
  ${cssOutput}
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`}</code>
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="frameworks" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">Tailwind CSS</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`<!-- Add to tailwind.config.js -->
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': '${cssOutput.replace("background: ", "").replace(";", "")}'
      }
    }
  }
}

<!-- Use in HTML -->
<div class="bg-custom-gradient p-8 text-white">
  Your content here
</div>`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="CSS Gradient Generator"
          toolDescription="Create beautiful CSS gradients with live preview and export options. Free online gradient tool for web designers"
          toolUrl="https://30tools.com/css-gradient-generator"
          category="web design"
        />
      </div>
    </div>
  );
}
