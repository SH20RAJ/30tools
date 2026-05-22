"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Copy, Trash2, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function splitTokens(input) {
  return input.trim().split(/[\s,]+/);
}

function hexByteTokens(input) {
  const compact = input.replace(/\s+/g, "");
  if (!compact) return [];
  return compact.includes(" ") || compact.includes(",")
    ? splitTokens(input).filter(Boolean)
    : compact.match(/.{1,2}/g) || [];
}

export default function BinaryToTextConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const convertNow = useCallback(() => {
    if (!input.trim()) { setOutput(""); return; }
    try {
      const kind = "binary-to-text";
      let out = "";
      switch (kind) {
        case "binary-to-text": case "binary-to-ascii":
          out = splitTokens(input).map(bin => { const n = parseInt(bin, 2); return Number.isNaN(n) ? "" : String.fromCharCode(n); }).join(""); break;
        case "binary-to-decimal":
          out = splitTokens(input).map(bin => { const n = parseInt(bin, 2); return Number.isNaN(n) ? "" : n.toString(10); }).join(" "); break;
        case "binary-to-hex":
          out = splitTokens(input).map(bin => { const n = parseInt(bin, 2); return Number.isNaN(n) ? "" : n.toString(16).toUpperCase(); }).join(" "); break;
        case "binary-to-octal":
          out = splitTokens(input).map(bin => { const n = parseInt(bin, 2); return Number.isNaN(n) ? "" : n.toString(8); }).join(" "); break;
        case "decimal-to-text": case "ascii-to-text": case "text-to-ascii":
          out = splitTokens(input).map(dec => { const n = parseInt(dec, 10); return Number.isNaN(n) ? "" : String.fromCharCode(n); }).join(""); break;
        case "decimal-to-hex":
          out = splitTokens(input).map(dec => { const n = parseInt(dec, 10); return Number.isNaN(n) ? "" : n.toString(16).toUpperCase(); }).join(" "); break;
        case "decimal-to-binary":
          out = splitTokens(input).map(dec => { const n = parseInt(dec, 10); return Number.isNaN(n) ? "" : n.toString(2); }).join(" "); break;
        case "decimal-to-octal":
          out = splitTokens(input).map(dec => { const n = parseInt(dec, 10); return Number.isNaN(n) ? "" : n.toString(8); }).join(" "); break;
        case "ascii-to-binary": case "text-to-binary":
          out = input.split("").map(char => { const b = char.charCodeAt(0).toString(2); return "00000000".slice(b.length) + b; }).join(" "); break;
        case "text-to-hex":
          out = Array.from(input).map(char => char.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")).join(" "); break;
        case "text-to-octal":
          out = Array.from(input).map(char => char.charCodeAt(0).toString(8).padStart(3, "0")).join(" "); break;
        case "text-to-decimal":
          out = Array.from(input).map(char => String(char.charCodeAt(0))).join(" "); break;
        case "hex-to-text":
          out = hexByteTokens(input).map(h => { const n = parseInt(h, 16); return Number.isNaN(n) ? "" : String.fromCharCode(n & 0xff); }).join(""); break;
        case "hex-to-binary":
          out = hexByteTokens(input).map(h => { const n = parseInt(h, 16); return Number.isNaN(n) ? "" : n.toString(2).padStart(8, "0"); }).join(" "); break;
        case "hex-to-decimal":
          out = hexByteTokens(input).map(h => { const n = parseInt(h, 16); return Number.isNaN(n) ? "" : String(n); }).join(" "); break;
        case "hex-to-octal":
          out = hexByteTokens(input).map(h => { const n = parseInt(h, 16); return Number.isNaN(n) ? "" : n.toString(8); }).join(" "); break;
        case "octal-to-text":
          out = splitTokens(input).map(o => { const n = parseInt(o, 8); return Number.isNaN(n) ? "" : String.fromCharCode(n & 0xff); }).join(""); break;
        case "octal-to-binary":
          out = splitTokens(input).map(o => { const n = parseInt(o, 8); return Number.isNaN(n) ? "" : n.toString(2); }).join(" "); break;
        case "octal-to-decimal":
          out = splitTokens(input).map(o => { const n = parseInt(o, 8); return Number.isNaN(n) ? "" : String(n); }).join(" "); break;
        case "octal-to-hex":
          out = splitTokens(input).map(o => { const n = parseInt(o, 8); return Number.isNaN(n) ? "" : n.toString(16).toUpperCase(); }).join(" "); break;
        default: out = input;
      }
      setOutput(out);
    } catch { toast.error("Conversion error"); }
  }, [input]);

  useEffect(() => { convertNow(); }, [input, convertNow]);

  const handleCopy = () => { if (!output) return; navigator.clipboard.writeText(output); setIsCopied(true); toast.success("Copied"); setTimeout(() => setIsCopied(false), 2000); };
  const handleClear = () => { setInput(""); setOutput(""); };
  const handleDownload = () => { if (!output) return; const blob = new Blob([output], { type: "text/plain" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "converted.txt"; a.click(); URL.revokeObjectURL(url); };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold tracking-tight uppercase opacity-60">Input (binary)</label>
            <Button variant="ghost" size="sm" onClick={handleClear} disabled={!input} className="h-8 px-2 text-xs"><Trash2 className="w-3.5 h-3.5 mr-1" />Clear</Button>
          </div>
          <Textarea placeholder="Enter binary here..." value={input} onChange={e => setInput(e.target.value)} className="min-h-[300px] font-mono text-sm resize-none bg-background/50" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold tracking-tight uppercase opacity-60">Output (plain text)</label>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleCopy} disabled={!output} className="h-8 px-2 text-xs">{isCopied ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}Copy</Button>
              <Button variant="ghost" size="sm" onClick={handleDownload} disabled={!output} className="h-8 px-2 text-xs"><Download className="w-3.5 h-3.5 mr-1" />Download</Button>
            </div>
          </div>
          <Textarea placeholder="Result will appear here..." value={output} readOnly className="min-h-[300px] font-mono text-sm resize-none bg-muted/30" />
        </div>
      </div>
    </div>
  );
}
