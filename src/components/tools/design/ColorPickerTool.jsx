'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeftIcon, 
  PaletteIcon, 
  CopyIcon,
  CheckCircleIcon,
  EyeDropperIcon,
  RefreshCwIcon,
  DownloadIcon,
  WandIcon,
  HeartIcon
} from 'lucide-react';
import Link from 'next/link';
import SocialShareButtons from '@/components/shared/SocialShareButtons';

export default function ColorPickerTool() {
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const [colorFormats, setColorFormats] = useState({});
  const [copied, setCopied] = useState('');
  const [savedColors, setSavedColors] = useState([]);
  const [colorHarmony, setColorHarmony] = useState([]);

  // Color conversion functions
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const hexToHsl = (hex) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;
    
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  const hexToCmyk = (hex) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;

    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const k = 1 - Math.max(r, g, b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;

    return {
      c: Math.round(c * 100),
      m: Math.round(m * 100),
      y: Math.round(y * 100),
      k: Math.round(k * 100)
    };
  };

  const generateColorHarmony = (hex) => {
    const hsl = hexToHsl(hex);
    if (!hsl) return [];

    const harmonies = [];
    const baseHue = hsl.h;

    // Complementary
    const compHue = (baseHue + 180) % 360;
    harmonies.push({
      name: 'Complementary',
      colors: [
        hex,
        hslToHex(compHue, hsl.s, hsl.l)
      ]
    });

    // Triadic
    const triad1 = (baseHue + 120) % 360;
    const triad2 = (baseHue + 240) % 360;
    harmonies.push({
      name: 'Triadic',
      colors: [
        hex,
        hslToHex(triad1, hsl.s, hsl.l),
        hslToHex(triad2, hsl.s, hsl.l)
      ]
    });

    // Analogous
    const analog1 = (baseHue + 30) % 360;
    const analog2 = (baseHue - 30 + 360) % 360;
    harmonies.push({
      name: 'Analogous',
      colors: [
        hslToHex(analog2, hsl.s, hsl.l),
        hex,
        hslToHex(analog1, hsl.s, hsl.l)
      ]
    });

    // Monochromatic
    harmonies.push({
      name: 'Monochromatic',
      colors: [
        hslToHex(baseHue, hsl.s, Math.max(10, hsl.l - 30)),
        hslToHex(baseHue, hsl.s, Math.max(10, hsl.l - 15)),
        hex,
        hslToHex(baseHue, hsl.s, Math.min(90, hsl.l + 15)),
        hslToHex(baseHue, hsl.s, Math.min(90, hsl.l + 30))
      ]
    });

    return harmonies;
  };

  const hslToHex = (h, s, l) => {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return "#" + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  };

  useEffect(() => {
    const rgb = hexToRgb(selectedColor);
    const hsl = hexToHsl(selectedColor);
    const cmyk = hexToCmyk(selectedColor);

    setColorFormats({
      hex: selectedColor.toUpperCase(),
      rgb: rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : '',
      rgba: rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)` : '',
      hsl: hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : '',
      hsla: hsl ? `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 1)` : '',
      cmyk: cmyk ? `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)` : '',
      name: getColorName(selectedColor)
    });

    setColorHarmony(generateColorHarmony(selectedColor));
  }, [selectedColor]);

  const getColorName = (hex) => {
    // Simplified color name mapping
    const colorNames = {
      '#FF0000': 'Red',
      '#00FF00': 'Lime',
      '#0000FF': 'Blue',
      '#FFFF00': 'Yellow',
      '#FF00FF': 'Magenta',
      '#00FFFF': 'Cyan',
      '#000000': 'Black',
      '#FFFFFF': 'White',
      '#808080': 'Gray',
      '#800000': 'Maroon',
      '#008000': 'Green',
      '#000080': 'Navy'
    };
    
    return colorNames[hex.toUpperCase()] || 'Custom Color';
  };

  const copyToClipboard = (text, format) => {
    navigator.clipboard.writeText(text);
    setCopied(format);
    setTimeout(() => setCopied(''), 2000);
  };

  const saveColor = () => {
    if (!savedColors.includes(selectedColor)) {
      setSavedColors(prev => [...prev, selectedColor]);
    }
  };

  const removeColor = (color) => {
    setSavedColors(prev => prev.filter(c => c !== color));
  };

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setSelectedColor(randomColor);
  };

  const predefinedColors = [
    '#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#00FF00', '#00FF80',
    '#00FFFF', '#0080FF', '#0000FF', '#8000FF', '#FF00FF', '#FF0080',
    '#800000', '#804000', '#808000', '#408000', '#008000', '#008040',
    '#008080', '#004080', '#000080', '#400080', '#800080', '#800040',
    '#000000', '#404040', '#808080', '#C0C0C0', '#FFFFFF', '#FFE4E1'
  ];

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
          <h1 className="text-3xl font-bold">Color Picker</h1>
          <p className="text-muted-foreground">Pick colors and get values in all formats with color harmony suggestions</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">All Color Formats</Badge>
        <Badge variant="secondary">Color Harmonies</Badge>
        <Badge variant="secondary">Palette Generator</Badge>
        <Badge variant="secondary">Color Library</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Color Picker */}
        <div className="lg:col-span-2 space-y-6">
          {/* Color Display */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <EyeDropperIcon className="h-5 w-5" />
                Color Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div 
                  className="w-32 h-32 rounded-lg border-2 border-gray-200 shadow-inner"
                  style={{ backgroundColor: selectedColor }}
                />
                <div className="flex-1 space-y-3">
                  <div>
                    <Label htmlFor="color-input">Color Picker</Label>
                    <input
                      id="color-input"
                      type="color"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-full h-12 rounded-lg border cursor-pointer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hex-input">Hex Value</Label>
                    <Input
                      id="hex-input"
                      value={selectedColor}
                      onChange={(e) => {
                        if (/^#[0-9A-F]{6}$/i.test(e.target.value) || e.target.value === '#') {
                          setSelectedColor(e.target.value);
                        }
                      }}
                      className="font-mono"
                      placeholder="#000000"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={generateRandomColor} variant="outline" className="flex-1">
                  <RefreshCwIcon className="h-4 w-4 mr-2" />
                  Random Color
                </Button>
                <Button onClick={saveColor} variant="outline" className="flex-1">
                  <HeartIcon className="h-4 w-4 mr-2" />
                  Save Color
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Color Formats */}
          <Card>
            <CardHeader>
              <CardTitle>Color Formats</CardTitle>
              <CardDescription>
                All color format representations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(colorFormats).map(([format, value]) => (
                  <div key={format} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm uppercase">{format}</div>
                      <div className="font-mono text-sm text-muted-foreground">{value}</div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(value, format)}
                    >
                      {copied === format ? (
                        <CheckCircleIcon className="h-4 w-4 text-green-600" />
                      ) : (
                        <CopyIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Color Harmonies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <WandIcon className="h-5 w-5" />
                Color Harmonies
              </CardTitle>
              <CardDescription>
                Color schemes based on your selected color
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {colorHarmony.map((harmony, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium">{harmony.name}</h4>
                    <div className="flex gap-2">
                      {harmony.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-16 h-16 rounded-lg border cursor-pointer transition-transform hover:scale-105"
                          style={{ backgroundColor: color }}
                          onClick={() => setSelectedColor(color)}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Predefined Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>
                Click to select a predefined color
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-6 gap-2">
                {predefinedColors.map((color, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-lg border cursor-pointer transition-transform hover:scale-110"
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    title={color}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Saved Colors */}
          {savedColors.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Saved Colors</CardTitle>
                <CardDescription>
                  Your saved color collection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2">
                  {savedColors.map((color, index) => (
                    <div key={index} className="relative group">
                      <div
                        className="w-12 h-12 rounded-lg border cursor-pointer transition-transform hover:scale-110"
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        title={color}
                      />
                      <Button
                        size="sm"
                        variant="destructive"
                        className="absolute -top-1 -right-1 w-5 h-5 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeColor(color)}
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Color Info */}
          <Card>
            <CardHeader>
              <CardTitle>Color Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {colorFormats.hex && (
                <>
                  <div>
                    <div className="text-sm font-medium">Brightness</div>
                    <div className="text-sm text-muted-foreground">
                      {(() => {
                        const rgb = hexToRgb(selectedColor);
                        if (!rgb) return 'Unknown';
                        const brightness = Math.round((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000);
                        return `${brightness}/255 (${brightness < 128 ? 'Dark' : 'Light'})`;
                      })()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Contrast</div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex gap-2 mt-1">
                        <div 
                          className="px-2 py-1 rounded text-xs"
                          style={{ 
                            backgroundColor: selectedColor,
                            color: '#000000'
                          }}
                        >
                          Black Text
                        </div>
                        <div 
                          className="px-2 py-1 rounded text-xs"
                          style={{ 
                            backgroundColor: selectedColor,
                            color: '#FFFFFF'
                          }}
                        >
                          White Text
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <PaletteIcon className="h-5 w-5" />
              Multiple Formats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get color values in HEX, RGB, HSL, CMYK, and more formats with one-click copying.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <WandIcon className="h-5 w-5" />
              Color Harmonies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Generate complementary, triadic, analogous, and monochromatic color schemes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <HeartIcon className="h-5 w-5" />
              Save & Organize
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Save your favorite colors and build custom palettes for your projects.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="Color Picker"
          toolDescription="Pick colors and get values in all formats with color harmony suggestions. Free online color picker tool"
          toolUrl="https://30tools.com/color-picker"
          category="design"
        />
      </div>
    </div>
  );
}
