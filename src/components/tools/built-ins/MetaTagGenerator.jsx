"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function MetaTagGenerator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [ogUrl, setOgUrl] = useState("");

  const generate = () => {
    const lines = [];
    if (title) lines.push(`<title>${title}</title>`);
    if (description) lines.push(`<meta name="description" content="${description}" />`);
    if (keywords) lines.push(`<meta name="keywords" content="${keywords}" />`);
    if (ogTitle || ogDescription || ogImage || ogUrl) {
      if (ogTitle) lines.push(`<meta property="og:title" content="${ogTitle}" />`);
      if (ogDescription) lines.push(`<meta property="og:description" content="${ogDescription}" />`);
      if (ogImage) lines.push(`<meta property="og:image" content="${ogImage}" />`);
      if (ogUrl) lines.push(`<meta property="og:url" content="${ogUrl}" />`);
    }
    return lines.join("\n");
  };

  const output = generate();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Meta Tag Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <Textarea placeholder="Meta description" value={description} onChange={e => setDescription(e.target.value)} />
        <Input placeholder="Keywords (comma-separated)" value={keywords} onChange={e => setKeywords(e.target.value)} />
        <hr />
        <Input placeholder="OG Title (optional)" value={ogTitle} onChange={e => setOgTitle(e.target.value)} />
        <Textarea placeholder="OG Description" value={ogDescription} onChange={e => setOgDescription(e.target.value)} />
        <Input placeholder="OG Image URL" value={ogImage} onChange={e => setOgImage(e.target.value)} />
        <Input placeholder="OG URL" value={ogUrl} onChange={e => setOgUrl(e.target.value)} />
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
