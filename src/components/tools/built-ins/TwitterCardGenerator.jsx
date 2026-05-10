"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function TwitterCardGenerator() {
  const [cardType, setCardType] = useState("summary_large_image");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [site, setSite] = useState("");

  const output = `<meta name="twitter:card" content="${cardType}" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
${image ? `<meta name="twitter:image" content="${image}" />` : ''}
${site ? `<meta name="twitter:site" content="@${site.replace('@','')}" />` : ''}`.trim();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Twitter Card Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Card type (summary or summary_large_image)" value={cardType} onChange={e => setCardType(e.target.value)} />
        <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <Textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <Input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <Input placeholder="Twitter @username (optional)" value={site} onChange={e => setSite(e.target.value)} />
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
