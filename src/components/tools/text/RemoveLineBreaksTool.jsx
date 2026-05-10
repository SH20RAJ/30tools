"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function RemoveLineBreaksTool() {
  const [t, setT] = useState("");
  const out = useMemo(() => t.replace(/\r?\n+/g, " ").replace(/\s+/g, " ").trim(), [t]);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Remove Line Breaks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea className="min-h-[200px]" value={t} onChange={(e) => setT(e.target.value)} />
        <Textarea readOnly className="min-h-[120px] bg-muted/30" value={out} />
      </CardContent>
    </Card>
  );
}
