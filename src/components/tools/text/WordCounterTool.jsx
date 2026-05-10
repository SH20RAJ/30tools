"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function WordCounterTool() {
  const [t, setT] = useState("");
  const stats = useMemo(() => {
    const words = t.trim() ? t.trim().split(/\s+/).length : 0;
    const chars = t.length;
    const lines = t ? t.split(/\r?\n/).length : 0;
    return { words, chars, lines };
  }, [t]);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Word Counter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea className="min-h-[220px]" value={t} onChange={(e) => setT(e.target.value)} />
        <p className="text-sm text-muted-foreground">
          Words: <strong>{stats.words}</strong> · Characters: <strong>{stats.chars}</strong> · Lines:{" "}
          <strong>{stats.lines}</strong>
        </p>
      </CardContent>
    </Card>
  );
}
