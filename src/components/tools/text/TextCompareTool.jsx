"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { diffChars } from "diff";

export default function TextCompareTool() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const diff = useMemo(() => diffChars(a, b), [a, b]);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Text Compare</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <Textarea className="min-h-[200px] font-mono text-sm" value={a} onChange={(e) => setA(e.target.value)} />
        <Textarea className="min-h-[200px] font-mono text-sm" value={b} onChange={(e) => setB(e.target.value)} />
        <div className="md:col-span-2 sm font-mono whitespace-pre-wrap">
          {diff.map((part, i) => (
            <span
              key={i}
              className={
                part.added ? "bg-emerald-500/25" : part.removed ? "bg-rose-500/25" : undefined
              }
            >
              {part.value}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
