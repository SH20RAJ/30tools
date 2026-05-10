"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function RgbHexConverter({ mode }) {
  const [val, setVal] = useState(mode === "rgb2hex" ? "255, 100, 50" : "#FF6432");
  const result = useMemo(() => {
    if (mode === "rgb2hex") {
      const parts = val.split(",").map(s => parseInt(s.trim()));
      if (parts.length >= 3 && parts.every(n => !isNaN(n) && n >= 0 && n <= 255)) {
        return "#" + parts.slice(0,3).map(n => n.toString(16).padStart(2,"0")).join("").toUpperCase();
      }
      return "Invalid";
    }
    const hex = val.replace("#", "");
    if (/^[0-9a-f]{6}$/i.test(hex)) {
      return `rgb(${parseInt(hex.slice(0,2),16)}, ${parseInt(hex.slice(2,4),16)}, ${parseInt(hex.slice(4,6),16)})`;
    }
    return "Invalid";
  }, [val, mode]);
  return (
    <Card>
      <CardContent className="pt-6 space-y-3">
        <Input placeholder={mode === "rgb2hex" ? "255, 100, 50" : "#FF6432"} value={val} onChange={(e) => setVal(e.target.value)} />
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded border" style={{ backgroundColor: result.startsWith("Invalid") ? "#ccc" : (mode === "rgb2hex" ? result : val) }} />
          <span className="font-mono text-lg">{result}</span>
        </div>
        <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(result); toast.success("Copied!"); }}>Copy</Button>
      </CardContent>
    </Card>
  );
}
