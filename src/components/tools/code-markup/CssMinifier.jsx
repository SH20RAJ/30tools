"use client";

import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function CssMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const run = () => {
    try {
      let out = input;
      const mode = "css-min";
      switch (mode) {
        case "html-min": case "css-min": case "js-min":
          out = input.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/\s+/g, " ").trim();
          break;
        case "html-beauty":
          out = input.replace(/>\s+</g, ">\n<").replace(/(<[^/][^>]*>)/g, "\n$1");
          break;
        case "css-beauty":
          out = input.replace(/\{/g, " {\n  ").replace(/;/g, ";\n  ").replace(/\}/g, "\n}\n");
          break;
        case "js-beauty":
          out = input.replace(/;/g, ";\n").replace(/\{/g, " {\n").replace(/\}/g, "\n}\n");
          break;
        case "js-ob":
          out = input.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").trim().split("").map(c => `\\u${"0000".slice(0, 4 - c.charCodeAt(0).toString(16).length)}${c.charCodeAt(0).toString(16)}`).join("");
          break;
        case "js-de":
          out = input;
          break;
        case "enc":
          out = input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
          break;
        case "dec": {
          const ta = document.createElement("textarea");
          ta.innerHTML = input;
          out = ta.value;
          break;
        }
        default: out = input;
      }
      setOutput(out);
      toast.success("Done");
    } catch { toast.error("Operation failed"); }
  };

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">CSS Minifier</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea className="min-h-[200px] font-mono text-sm" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste your code here..." />
        <div className="flex flex-wrap gap-2"><Button type="button" variant="secondary" onClick={run}>Minify CSS</Button></div>
        <Textarea className="min-h-[200px] font-mono text-sm bg-muted/30" readOnly value={output} placeholder="Output will appear here..." />
        <p className="text-xs text-muted-foreground">Heuristic processor — always keep originals and verify output before shipping to production.</p>
      </CardContent>
    </Card>
  );
}
