"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

function convertSrtToVtt(srt) {
  let lines = srt.split(/\r?\n/);
  let result = "WEBVTT\n\n";
  for (let line of lines) {
    if (line.includes('-->')) {
      result += line.replace(/,/g, '.') + '\n';
    } else {
      result += line + '\n';
    }
  }
  return result;
}

export default function SrtToVttTool() {
  const [input, setInput] = useState("");
  const output = convertSrtToVtt(input);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">SRT to VTT Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea placeholder="Paste SRT content" value={input} onChange={e => setInput(e.target.value)} className="min-h-[200px]" />
        {input && (
          <Textarea readOnly value={output} className="min-h-[200px] font-mono text-sm" />
        )}
      </CardContent>
    </Card>
  );
}
