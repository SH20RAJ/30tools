"use client";

import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function XmlToJsonConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const run = () => {
    try {
      let out = "";
      switch ("xml-to-json") {
        case "json-to-csv": {
          const parsed = JSON.parse(input);
          const rows = Array.isArray(parsed) ? parsed : [parsed];
          if (!rows.length || typeof rows[0] !== "object" || rows[0] === null) throw new Error("JSON must be an object or array of objects");
          const keys = Object.keys(rows[0]);
          const esc = (v) => { const s = v === null || v === undefined ? "" : typeof v === "object" ? JSON.stringify(v) : String(v); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
          out = [keys.join(","), ...rows.map((row) => keys.map((k) => esc(row[k])).join(","))].join("\n");
          break;
        }
        case "json-to-tsv": {
          const p = JSON.parse(input);
          const r = Array.isArray(p) ? p : [p];
          if (!r.length || typeof r[0] !== "object" || r[0] === null) throw new Error("JSON must be an object or array of objects");
          const k = Object.keys(r[0]);
          out = [k.join("\t"), ...r.map((row) => k.map((key) => String(row[key] ?? "")).join("\t"))].join("\n");
          break;
        }
        case "json-to-text":
          out = JSON.stringify(JSON.parse(input), null, 2);
          break;
        case "csv-to-json": {
          const lines = input.trim().split(/\r?\n/);
          if (!lines.length) { out = "[]"; break; }
          const headers = lines[0].split(",").map((h) => h.trim());
          const arr = lines.slice(1).map((line) => { const cells = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); const o = {}; headers.forEach((h, i) => { o[h] = (cells[i] ?? "").replace(/^"|"$/g, ""); }); return o; });
          out = JSON.stringify(arr, null, 2);
          break;
        }
        case "tsv-to-json": {
          const l = input.trim().split(/\r?\n/);
          if (!l.length) { out = "[]"; break; }
          const h = l[0].split("\t");
          const a = l.slice(1).map((line) => { const c = line.split("\t"); const o = {}; h.forEach((hh, i) => { o[hh] = c[i] ?? ""; }); return o; });
          out = JSON.stringify(a, null, 2);
          break;
        }
        case "xml-to-json": {
          const doc = new DOMParser().parseFromString(input, "application/xml");
          const err = doc.querySelector("parsererror");
          if (err) throw new Error("Invalid XML");
          const nodeToObj = (el) => { const kids = Array.from(el.children); if (!kids.length) return el.textContent ?? ""; const o = {}; for (const c of kids) { const n = c.nodeName; const v = nodeToObj(c); o[n] = o[n] !== undefined ? (Array.isArray(o[n]) ? [...o[n], v] : [o[n], v]) : v; } return o; };
          const root = doc.documentElement;
          out = JSON.stringify({ [root.nodeName]: nodeToObj(root) }, null, 2);
          break;
        }
        case "json-to-xml": {
          const o = JSON.parse(input);
          const walk = (tag, val, depth) => { const pad = "  ".repeat(depth); if (val === null || typeof val !== "object") return pad + "<" + tag + ">" + String(val) + "</" + tag + ">\n"; if (Array.isArray(val)) return val.map((v) => walk(tag, v, depth)).join(""); return pad + "<" + tag + ">\n" + Object.entries(val).map(([k, v]) => walk(k, v, depth + 1)).join("") + pad + "</" + tag + ">\n"; };
          const [[k, v]] = Object.entries(o);
          out = '<?xml version="1.0" encoding="UTF-8"?>\n' + walk(k, v, 0);
          break;
        }
        default: out = "";
      }
      setOutput(out);
      toast.success("Converted");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Conversion failed");
      setOutput("");
    }
  };

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">XML to JSON Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea className="min-h-[220px] font-mono text-sm" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste XML here..." />
        <Button type="button" onClick={run}>Convert to JSON</Button>
        <Textarea className="min-h-[220px] font-mono text-sm bg-muted/30" readOnly value={output} placeholder="JSON output" />
      </CardContent>
    </Card>
  );
}
