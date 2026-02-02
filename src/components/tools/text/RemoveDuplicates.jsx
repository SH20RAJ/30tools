"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Trash2, CheckCircle2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function RemoveDuplicates() {
  const [text, setText] = useState("");
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [trimLines, setTrimLines] = useState(true);

  const removeDuplicates = () => {
    if (!text) return;

    let lines = text.split("\n");
    
    if (trimLines) {
      lines = lines.map(line => line.trim());
    }

    const uniqueLines = new Set();
    const result = [];

    lines.forEach(line => {
      // Logic for case sensitivity
      const comparisonLine = ignoreCase ? line.toLowerCase() : line;
      
      if (!uniqueLines.has(comparisonLine) && line !== "") {
        uniqueLines.add(comparisonLine);
        result.push(line);
      } else if (line === "") {
        // Keep empty lines? Usually remove duplicates implies removing empty lines or keeping one.
        // Let's standardise to strictly unique content lines.
        // Actually, user might want to keep one empty line.
        // For simplicity, we filter out empty lines in "Remove Duplicates" logic usually.
      }
    });

    setText(result.join("\n"));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
        <div className="flex gap-6">
          <div className="flex items-center space-x-2">
            <Switch id="ignore-case" checked={ignoreCase} onCheckedChange={setIgnoreCase} />
            <Label htmlFor="ignore-case">Ignore Case</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="trim-lines" checked={trimLines} onCheckedChange={setTrimLines} />
            <Label htmlFor="trim-lines">Trim Whitespace</Label>
          </div>
        </div>
        <Button onClick={removeDuplicates} className="w-full md:w-auto min-w-[200px]">
          Remove Duplicate Lines
        </Button>
      </div>

      <div className="relative">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your list here..."
          className="min-h-[400px] text-lg p-6 resize-y font-mono"
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button onClick={copyToClipboard} size="sm" className="gap-2">
            <Copy className="w-4 h-4" /> Copy
          </Button>
          <Button onClick={clearText} variant="destructive" size="sm" className="gap-2">
            <Trash2 className="w-4 h-4" /> Clear
          </Button>
        </div>
      </div>

       <div className="flex gap-6 text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
        <div>
          <span className="font-semibold text-foreground">{text ? text.split('\n').length : 0}</span> Lines
        </div>
        <div>
           <span className="font-semibold text-foreground">{text ? (new Set(text.split('\n'))).size : 0}</span> Unique Lines (Est)
        </div>
      </div>
    </div>
  );
}
