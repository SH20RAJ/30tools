'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  PaletteIcon, 
  CopyIcon, 
  ArrowLeftIcon,
  RefreshCwIcon
} from 'lucide-react';
import Link from 'next/link';

export default function ColorConverterTool() {
  const [hex, setHex] = useState('#FF6B6B');
  const [rgb, setRgb] = useState({ r: 255, g: 107, b: 107 });
  const [hsl, setHsl] = useState({ h: 0, s: 100, l: 71 });
  const [hsv, setHsv] = useState({ h: 0, s: 58, v: 100 });

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
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
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  const hslToRgb = (h, s, l) => {
    h /= 360;
    s /= 100;
    l /= 100;
    
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  };

  const updateFromHex = (hexValue) => {
    setHex(hexValue);
    const rgbValue = hexToRgb(hexValue);
    if (rgbValue) {
      setRgb(rgbValue);
      const hslValue = rgbToHsl(rgbValue.r, rgbValue.g, rgbValue.b);
      setHsl(hslValue);
    }
  };

  const updateFromRgb = (r, g, b) => {
    const newRgb = { r, g, b };
    setRgb(newRgb);
    setHex(rgbToHex(r, g, b));
    const hslValue = rgbToHsl(r, g, b);
    setHsl(hslValue);
  };

  const updateFromHsl = (h, s, l) => {
    const newHsl = { h, s, l };
    setHsl(newHsl);
    const rgbValue = hslToRgb(h, s, l);
    setRgb(rgbValue);
    setHex(rgbToHex(rgbValue.r, rgbValue.g, rgbValue.b));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const generateRandomColor = () => {
    const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    updateFromHex(randomHex);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
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
              <h1 className="text-3xl font-bold">Color Converter</h1>
              <p className="text-muted-foreground">Convert colors between HEX, RGB, and HSL formats</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">HEX to RGB</Badge>
            <Badge variant="secondary">RGB to HSL</Badge>
            <Badge variant="secondary">Color Preview</Badge>
            <Badge variant="secondary">Copy Values</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Color Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Color Preview</CardTitle>
              <CardDescription>Live preview of your selected color</CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="w-full h-32 rounded-lg border mb-4"
                style={{ backgroundColor: hex }}
              ></div>
              <div className="flex gap-2">
                <Button onClick={generateRandomColor} variant="outline" className="flex-1">
                  <RefreshCwIcon className="h-4 w-4 mr-2" />
                  Random Color
                </Button>
                <Button onClick={() => copyToClipboard(hex)} variant="outline">
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Color Values */}
          <Card>
            <CardHeader>
              <CardTitle>Color Formats</CardTitle>
              <CardDescription>All color format values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* HEX */}
              <div>
                <Label htmlFor="hex">HEX</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    id="hex"
                    value={hex}
                    onChange={(e) => updateFromHex(e.target.value)}
                    className="font-mono"
                  />
                  <Button onClick={() => copyToClipboard(hex)} variant="outline" size="sm">
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* RGB */}
              <div>
                <Label>RGB</Label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <Input
                    type="number"
                    value={rgb.r}
                    onChange={(e) => updateFromRgb(parseInt(e.target.value) || 0, rgb.g, rgb.b)}
                    min="0"
                    max="255"
                    placeholder="R"
                  />
                  <Input
                    type="number"
                    value={rgb.g}
                    onChange={(e) => updateFromRgb(rgb.r, parseInt(e.target.value) || 0, rgb.b)}
                    min="0"
                    max="255"
                    placeholder="G"
                  />
                  <Input
                    type="number"
                    value={rgb.b}
                    onChange={(e) => updateFromRgb(rgb.r, rgb.g, parseInt(e.target.value) || 0)}
                    min="0"
                    max="255"
                    placeholder="B"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  <code className="flex-1 text-sm bg-muted p-2 rounded">rgb({rgb.r}, {rgb.g}, {rgb.b})</code>
                  <Button onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)} variant="outline" size="sm">
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* HSL */}
              <div>
                <Label>HSL</Label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <Input
                    type="number"
                    value={hsl.h}
                    onChange={(e) => updateFromHsl(parseInt(e.target.value) || 0, hsl.s, hsl.l)}
                    min="0"
                    max="360"
                    placeholder="H"
                  />
                  <Input
                    type="number"
                    value={hsl.s}
                    onChange={(e) => updateFromHsl(hsl.h, parseInt(e.target.value) || 0, hsl.l)}
                    min="0"
                    max="100"
                    placeholder="S"
                  />
                  <Input
                    type="number"
                    value={hsl.l}
                    onChange={(e) => updateFromHsl(hsl.h, hsl.s, parseInt(e.target.value) || 0)}
                    min="0"
                    max="100"
                    placeholder="L"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  <code className="flex-1 text-sm bg-muted p-2 rounded">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</code>
                  <Button onClick={() => copyToClipboard(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)} variant="outline" size="sm">
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Color Theory Info */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Color Format Guide</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">HEX</h4>
              <p className="text-muted-foreground">
                Hexadecimal color codes use base-16 numbering. Format: #RRGGBB where each pair represents red, green, and blue values.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">RGB</h4>
              <p className="text-muted-foreground">
                Red, Green, Blue color model. Each value ranges from 0-255, representing the intensity of each color channel.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">HSL</h4>
              <p className="text-muted-foreground">
                Hue (0-360°), Saturation (0-100%), Lightness (0-100%). More intuitive for color manipulation and design.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
