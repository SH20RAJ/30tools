"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function HtaccessGenerator() {
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const [status, setStatus] = useState("301");

  const generate = () => {
    return `Redirect ${status} ${source} ${target}`;
  };

  const output = source && target ? generate() : "";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">.htaccess Redirect Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Source path (e.g., /old-page)" value={source} onChange={e => setSource(e.target.value)} />
        <Input placeholder="Target URL (e.g., https://example.com/new-page)" value={target} onChange={e => setTarget(e.target.value)} />
        <div className="flex gap-2 items-center">
          <label className="text-sm">Status:</label>
          <select value={status} onChange={e => setStatus(e.target.value)} className="border rounded px-2 py-1">
            <option value="301">301 Moved Permanently</option>
            <option value="302">302 Found (Temporary)</option>
            <option value="307">307 Temporary Redirect</option>
          </select>
        </div>
        {output && (
          <>
            <Textarea readOnly value={output} className="font-mono text-sm min-h-[80px]" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(output); toast.success("Copied!"); }}>Copy</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
