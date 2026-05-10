"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UrlParserTool() {
  const [url, setUrl] = useState("");
  const parsed = useMemo(() => {
    try {
      const u = new URL(url);
      return {
        protocol: u.protocol,
        hostname: u.hostname,
        port: u.port,
        pathname: u.pathname,
        search: u.search,
        hash: u.hash,
        href: u.href
      };
    } catch {
      return null;
    }
  }, [url]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">URL Parser</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Enter URL..." value={url} onChange={(e) => setUrl(e.target.value)} />
        {parsed && (
          <div className="space-y-2 text-sm">
            <p><strong>Protocol:</strong> {parsed.protocol}</p>
            <p><strong>Hostname:</strong> {parsed.hostname}</p>
            <p><strong>Port:</strong> {parsed.port || "(default)"}</p>
            <p><strong>Path:</strong> {parsed.pathname}</p>
            <p><strong>Query:</strong> {parsed.search}</p>
            <p><strong>Hash:</strong> {parsed.hash}</p>
            <Button variant="outline" size="sm" onClick={() => window.open(parsed.href, '_blank')}>Open URL</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
