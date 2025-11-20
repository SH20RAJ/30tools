"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Copy, Square } from "lucide-react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

export default function CSSBoxShadowTool() {
  const [shadow, setShadow] = useState({
    hOffset: 10,
    vOffset: 10,
    blur: 15,
    spread: 0,
    color: "#000000",
    opacity: 50,
    inset: false
  });

  const generateCSS = () => {
    const { hOffset, vOffset, blur, spread, color, opacity, inset } = shadow;
    const alpha = (opacity / 100).toFixed(2);

    // Convert hex to rgba
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    const colorValue = `rgba(${r}, ${g}, ${b}, ${alpha})`;

    return `${inset ? 'inset ' : ''}${hOffset}px ${vOffset}px ${blur}px ${spread}px ${colorValue}`;
  };

  const cssCode = `box-shadow: ${generateCSS()};`;

  const copyCSS = () => {
    navigator.clipboard.writeText(cssCode);
    toast.success("CSS copied to clipboard!");
  };

  const presets = [
    { name: "Soft", value: { hOffset: 0, vOffset: 4, blur: 6, spread: -1, opacity: 30, inset: false } },
    { name: "Medium", value: { hOffset: 0, vOffset: 10, blur: 15, spread: -3, opacity: 30, inset: false } },
    { name: "Large", value: { hOffset: 0, vOffset: 20, blur: 25, spread: -5, opacity: 30, inset: false } },
    { name: "Inset", value: { hOffset: 0, vOffset: 2, blur: 4, spread: 0, opacity: 20, inset: true } },
  ];

  const applyPreset = (preset) => {
    setShadow({ ...shadow, ...preset.value });
    toast.success(`${preset.name} preset applied!`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-5 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Shadow Properties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Horizontal Offset</Label>
                  <span className="text-xs text-muted-foreground">{shadow.hOffset}px</span>
                </div>
                <Slider
                  value={[shadow.hOffset]}
                  min={-100}
                  max={100}
                  onValueChange={([v]) => setShadow({ ...shadow, hOffset: v })}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Vertical Offset</Label>
                  <span className="text-xs text-muted-foreground">{shadow.vOffset}px</span>
                </div>
                <Slider
                  value={[shadow.vOffset]}
                  min={-100}
                  max={100}
                  onValueChange={([v]) => setShadow({ ...shadow, vOffset: v })}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Blur Radius</Label>
                  <span className="text-xs text-muted-foreground">{shadow.blur}px</span>
                </div>
                <Slider
                  value={[shadow.blur]}
                  min={0}
                  max={100}
                  onValueChange={([v]) => setShadow({ ...shadow, blur: v })}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Spread Radius</Label>
                  <span className="text-xs text-muted-foreground">{shadow.spread}px</span>
                </div>
                <Slider
                  value={[shadow.spread]}
                  min={-50}
                  max={50}
                  onValueChange={([v]) => setShadow({ ...shadow, spread: v })}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Opacity</Label>
                  <span className="text-xs text-muted-foreground">{shadow.opacity}%</span>
                </div>
                <Slider
                  value={[shadow.opacity]}
                  min={0}
                  max={100}
                  onValueChange={([v]) => setShadow({ ...shadow, opacity: v })}
                />
              </div>

              <div className="space-y-2">
                <Label>Shadow Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={shadow.color}
                    onChange={(e) => setShadow({ ...shadow, color: e.target.value })}
                    className="w-20 h-10 p-1"
                  />
                  <Input
                    type="text"
                    value={shadow.color}
                    onChange={(e) => setShadow({ ...shadow, color: e.target.value })}
                    className="flex-1 font-mono text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="inset"
                  checked={shadow.inset}
                  onCheckedChange={(checked) => setShadow({ ...shadow, inset: checked })}
                />
                <Label htmlFor="inset" className="cursor-pointer">Inset Shadow</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Presets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {presets.map((preset) => (
                  <Button
                    key={preset.name}
                    variant="outline"
                    size="sm"
                    onClick={() => applyPreset(preset)}
                  >
                    {preset.name}
                  </Button>
                ))}
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
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-12 flex items-center justify-center min-h-[400px]">
                <div
                  className="w-48 h-48 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center"
                  style={{ boxShadow: generateCSS() }}
                >
                  <Square className="w-12 h-12 text-muted-foreground" />
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
                <code className="text-sm font-mono break-all">{cssCode}</code>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-sm">Browser Support</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>✅ Chrome, Edge, Safari, Firefox (Full Support)</p>
              <p>✅ All modern browsers support box-shadow</p>
              <p>💡 For older browsers, consider adding vendor prefixes</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
