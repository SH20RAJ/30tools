"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function TagsFromTextTool({ prefix = "#" }) {
  const [t, setT] = useState("");
  const out = useMemo(() => {
    const words = t.toLowerCase().match(/[a-z0-9]{3,}/g) ?? [];
    const uniq = [...new Set(words)].slice(0, 60);
    return uniq.map((w) => `${prefix}${w}`).join(prefix === "#" ? " " : ", ");
  }, [t, prefix]);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{prefix === "#" ? "Hashtags" : "Tags"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea className="min-h-[180px]" value={t} onChange={(e) => setT(e.target.value)} />
        <Textarea readOnly className="min-h-[100px] bg-muted/30" value={out} />
      </CardContent>
    </Card>
  );
}
