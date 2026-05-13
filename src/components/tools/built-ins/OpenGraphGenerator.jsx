"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function OpenGraphGenerator() {
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [ogUrl, setOgUrl] = useState("");
  const [ogType, setOgType] = useState("website");

  const output = ` <meta property="og:title" content="${ogTitle}" />
<meta property="og:description" content="${ogDescription}" />
<meta property="og:image" content="${ogImage}" />
<meta property="og:url" content="${ogUrl}" />
<meta property="og:type" content="${ogType}" />`.trim();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Open Graph Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="OG Title" value={ogTitle} onChange={e => setOgTitle(e.target.value)} />
        <Input placeholder="OG Description" value={ogDescription} onChange={e => setOgDescription(e.target.value)} />
        <Input placeholder="OG Image URL" value={ogImage} onChange={e => setOgImage(e.target.value)} />
        <Input placeholder="OG URL" value={ogUrl} onChange={e => setOgUrl(e.target.value)} />
        <Input placeholder="OG Type (e.g., website, article)" value={ogType} onChange={e => setOgType(e.target.value)} />
        {output && (
          <>
            <Textarea readOnly value={output} className="font-mono text-sm min-h-[120px]" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(output); toast.success("Copied!"); }}>Copy</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
