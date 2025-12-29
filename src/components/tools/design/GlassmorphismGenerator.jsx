"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Copy, Square } from "lucide-react";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";

export default function GlassmorphismGenerator() {
  const [glass, setGlass] = useState({
    blur: 16,
    transparency: 0.6, // 0-1
    saturation: 180, // %
    color: "#ffffff",
    outline: true,
    borderRadius: 16,
  });

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 255, g: 255, b: 255 };
  };

  const generateCSS = () => {
    const { blur, transparency, saturation, color, outline, borderRadius } = glass;
    const { r, g, b } = hexToRgb(color);
    
    // Calculate background color with opacity
    const bg = `rgba(${r}, ${g}, ${b}, ${transparency})`;
    
    let css = `background: ${bg};\n`;
    css += `backdrop-filter: blur(${blur}px) saturate(${saturation}%);\n`;
    css += `webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);\n`; // Safari support
    css += `border-radius: ${borderRadius}px;\n`;
    
    if (outline) {
      css += `border: 1px solid rgba(255, 255, 255, 0.3);\n`;
    } else {
        css += `border: none;\n`;
    }

    // Standard glassmorphism shadow
    // css += `box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);`;
    
    return css;
  };

  const copyCSS = () => {
    navigator.clipboard.writeText(generateCSS());
    toast.success("CSS copied to clipboard!");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-5 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Glass Properties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Blur</Label>
                  <span className="text-xs text-muted-foreground">{glass.blur}px</span>
                </div>
                <Slider
                  value={[glass.blur]}
                  min={0}
                  max={40}
                  onValueChange={([v]) => setGlass({ ...glass, blur: v })}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Transparency</Label>
                  <span className="text-xs text-muted-foreground">{Math.round(glass.transparency * 100)}%</span>
                </div>
                <Slider
                  value={[glass.transparency]}
                  min={0}
                  max={1}
                  step={0.01}
                  onValueChange={([v]) => setGlass({ ...glass, transparency: v })}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Saturation</Label>
                  <span className="text-xs text-muted-foreground">{glass.saturation}%</span>
                </div>
                <Slider
                  value={[glass.saturation]}
                  min={0}
                  max={200}
                  onValueChange={([v]) => setGlass({ ...glass, saturation: v })}
                />
              </div>

              <div className="space-y-2">
                 <div className="flex justify-between">
                  <Label>Border Radius</Label>
                  <span className="text-xs text-muted-foreground">{glass.borderRadius}px</span>
                </div>
                <Slider
                  value={[glass.borderRadius]}
                  min={0}
                  max={100}
                  onValueChange={([v]) => setGlass({ ...glass, borderRadius: v })}
                />
              </div>

              <div className="space-y-2">
                <Label>Glass Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={glass.color}
                    onChange={(e) => setGlass({ ...glass, color: e.target.value })}
                    className="w-20 h-10 p-1"
                  />
                  <Input
                    type="text"
                    value={glass.color}
                    onChange={(e) => setGlass({ ...glass, color: e.target.value })}
                    className="flex-1 font-mono text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="outline"
                  checked={glass.outline}
                  onCheckedChange={(checked) => setGlass({ ...glass, outline: checked })}
                />
                <Label htmlFor="outline" className="cursor-pointer">Border Outline</Label>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Preview & CSS */}
        <div className="lg:col-span-7 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Complex background for glass effect verification */}
              <div className="relative rounded-lg overflow-hidden h-[400px] flex items-center justify-center p-8 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                {/* Floating elements behind for depth */}
                <div className="absolute top-10 left-10 w-24 h-24 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                {/* The Glass Element */}
                <div
                  className="relative flex flex-col items-center justify-center w-full max-w-sm p-8 text-center text-white"
                  style={{
                    backgroundColor: `rgba(${hexToRgb(glass.color).r}, ${hexToRgb(glass.color).g}, ${hexToRgb(glass.color).b}, ${glass.transparency})`,
                    backdropFilter: `blur(${glass.blur}px) saturate(${glass.saturation}%)`,
                    WebkitBackdropFilter: `blur(${glass.blur}px) saturate(${glass.saturation}%)`,
                    borderRadius: `${glass.borderRadius}px`,
                    border: glass.outline ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3 className="text-xl font-bold mb-2 text-black/80 dark:text-white/90">Glassmorphism</h3>
                  <p className="text-sm text-black/60 dark:text-white/80">
                    This is how your element will look against a background.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>CSS Code</CardTitle>
                <Button size="sm" variant="outline" onClick={copyCSS}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm font-mono whitespace-pre-wrap break-all">
                  {generateCSS()}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-sm">Tips</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>💡 Performs best over colorful, complex backgrounds.</p>
              <p>💡 The 'border' adds a nice crisp edge to separate it from the background.</p>
              <p>💡 'Backdrop-filter' has great support in modern browsers.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
