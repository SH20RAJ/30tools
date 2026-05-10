"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function UrlCodecTool({ mode }) {
  const [input, setInput] = useState("");
  const output = useMemo(() => {
    try {
      if (mode === "enc") {
        return encodeURIComponent(input);
      } else if (mode === "dec") {
        return decodeURIComponent(input);
      }
    } catch (e) {
      return "Error: " + e.message;
    }
    return "";
  }, [input, mode]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{mode === "enc" ? "URL Encode" : "URL Decode"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea placeholder={mode === "enc" ? "Enter text to encode..." : "Enter encoded URL to decode..."} value={input} onChange={(e) => setInput(e.target.value)} />
        <Textarea readOnly value={output} placeholder="Result..." />
        {output && (
          <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(output); toast.success("Copied!"); }}>Copy</Button>
        )}
      </CardContent>
    </Card>
  );
}
