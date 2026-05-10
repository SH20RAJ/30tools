"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function SlugTool() {
  const [t, setT] = useState("");
  const slug = useMemo(
    () =>
      t
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
    [t],
  );
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Slug</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea value={t} onChange={(e) => setT(e.target.value)} />
        <Input readOnly className="font-mono bg-muted/30" value={slug} />
      </CardContent>
    </Card>
  );
}
