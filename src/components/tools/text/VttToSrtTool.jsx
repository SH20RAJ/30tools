"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

function convertVttToSrt(vtt) {
  const lines = vtt.split(/\r?\n/).filter(l => !l.startsWith('WEBVTT') && l.trim() !== '');
  let result = "";
  let counter = 1;
  for (let line of lines) {
    const timestampMatch = line.match(/^(\d+:\d+:\d+)\.(\d+) --> (\d+:\d+:\d+)\.(\d+)/);
    if (timestampMatch) {
      result += `${counter}\n`;
      counter++;
      result += `${timestampMatch[1]},${timestampMatch[2]} --> ${timestampMatch[3]},${timestampMatch[4]}\n`;
    } else if (line.trim() === "") {
      result += "\n";
    } else {
      result += line + "\n";
    }
  }
  return result.trim();
}

export default function VttToSrtTool() {
  const [input, setInput] = useState("");
  const output = convertVttToSrt(input);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">VTT to SRT Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea placeholder="Paste VTT content" value={input} onChange={e => setInput(e.target.value)} className="min-h-[200px]" />
        {input && (
          <Textarea readOnly value={output} className="min-h-[200px] font-mono text-sm" />
        )}
      </CardContent>
    </Card>
  );
}
