"use client";

import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const MODE_MAP = {
  "redirect-checker": "Redirect Chain Checker",
  "http-status-code-checker": "HTTP Status Checker",
  "get-http-headers": "Fetch HTML Head",
  "page-size-checker": "Page Size Checker",
  "server-status-checker": "Server Reachability",
  "hosting-checker": "Hosting Checker",
  "google-index-checker": "Google Index Checker",
  "google-cache-checker": "Google Cache Checker",
  "seo-audit-tool": "Quick SEO Audit",
  "open-graph-checker": "Open Graph Inspector",
  "backlink-checker": "Backlink Inspector",
  "bulk-keyword-rank-checker": "Keyword Rank Checker",
  "sitemap-generator": "Sitemap Generator",
  "whois-domain-lookup": "WHOIS Lookup",
  "wordpress-theme-detector": "WP Theme Detector",
  "domain-age-checker": "Domain Age Checker",
  "facebook-id-finder": "Facebook ID Finder",
  "indexnow": "IndexNow Submission",
};

export default function ServerStatusChecker() {
  const [url, setUrl] = useState("https://example.com");
  const [out, setOut] = useState("");

  const runHead = async () => {
    try {
      const r = await fetch("/api/tools/safe-http", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, mode: "headChain" }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "failed");
      setOut(JSON.stringify(d.chain, null, 2));
      toast.success("OK");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error");
    }
  };

  const runGet = async () => {
    try {
      const r = await fetch("/api/tools/safe-http", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, mode: "getText", maxBytes: 120000 }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "failed");
      const tid = "server-status-checker";
      let text = "";
      if (tid === "page-size-checker") {
        const bytes = new Blob([d.text ?? ""]).size;
        text = `Final URL: ${d.finalUrl}\nHTTP ${d.status}\nApprox. bytes: ${bytes}`;
      } else if (tid === "get-http-headers") {
        text = (d.text || "").match(/<head[\s\S]*?<\/head>/i)?.[0] ?? d.text ?? "";
        text = text.slice(0, 8000);
      } else {
        text = `Final URL: ${d.finalUrl}\nHTTP ${d.status}\n\n--- body (truncated) ---\n${String(d.text || "").slice(0, 4000)}`;
      }
      setOut(text);
      toast.success("Fetched");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error");
    }
  };

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Server Status Checker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="secondary" onClick={runHead}>HEAD chain</Button>
          <Button type="button" onClick={runGet}>GET snippet</Button>
        </div>
        <Textarea readOnly className="min-h-[240px] font-mono text-xs bg-muted/30" value={out} placeholder="Results will appear here..." />
        <p className="text-xs text-muted-foreground">Uses a same-origin safety-checked fetch. Some sites block bots.</p>
      </CardContent>
    </Card>
  );
}
