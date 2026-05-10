"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function TextRepeaterTool() {
  const [t, setT] = useState("Hello");
  const [n, setN] = useState("3");
  const out = useMemo(() => {
    const c = Math.max(0, Math.min(5000, Math.floor(Number(n) || 0)));
    return Array(c).fill(t).join("");
  }, [t, n]);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Text Repeater</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea value={t} onChange={(e) => setT(e.target.value)} />
        <Input type="number" min={0} max={5000} value={n} onChange={(e) => setN(e.target.value)} />
        <Textarea readOnly className="min-h-[160px] font-mono text-sm bg-muted/30" value={out} />
      </CardContent>
    </Card>
  );
}
