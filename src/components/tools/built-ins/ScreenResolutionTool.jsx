"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ScreenResolutionTool() {
  const [dims, setDims] = useState({ width: 0, height: 0, pixelRatio: 0 });

  useEffect(() => {
    const update = () => {
      setDims({
        width: window.screen.width,
        height: window.screen.height,
        pixelRatio: window.devicePixelRatio || 1,
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Screen Resolution</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Width: <strong>{dims.width}px</strong></p>
        <p>Height: <strong>{dims.height}px</strong></p>
        <p>Pixel Ratio: <strong>{dims.pixelRatio}</strong></p>
      </CardContent>
    </Card>
  );
}
