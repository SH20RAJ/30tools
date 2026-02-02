"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Trash2, ArrowDownAZ, ArrowUpAZ, Shuffle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function LineSorter() {
  const [text, setText] = useState("");
  const [ignoreCase, setIgnoreCase] = useState(true);

  const getLines = () => text.split("\n");

  const updateText = (lines) => setText(lines.join("\n"));

  const sortAZ = () => {
    const lines = getLines();
    lines.sort((a, b) => {
      const valA = ignoreCase ? a.toLowerCase() : a;
      const valB = ignoreCase ? b.toLowerCase() : b;
      return valA.localeCompare(valB);
    });
    updateText(lines);
  };

  const sortZA = () => {
    const lines = getLines();
    lines.sort((a, b) => {
      const valA = ignoreCase ? a.toLowerCase() : a;
      const valB = ignoreCase ? b.toLowerCase() : b;
      return valB.localeCompare(valA); // Reverse compare
    });
    updateText(lines);
  };

  const sortLengthShort = () => {
    const lines = getLines();
    lines.sort((a, b) => a.length - b.length);
    updateText(lines);
  };

  const sortLengthLong = () => {
    const lines = getLines();
    lines.sort((a, b) => b.length - a.length);
    updateText(lines);
  };

  const shuffleLines = () => {
    const lines = getLines();
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    updateText(lines);
  };
  
  const reverseOrder = () => {
      const lines = getLines();
      lines.reverse();
      updateText(lines);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col gap-4 p-4 bg-muted/20 rounded-lg border border-border">
         <div className="flex items-center space-x-2 mb-2">
            <Switch id="ignore-case-sort" checked={ignoreCase} onCheckedChange={setIgnoreCase} />
            <Label htmlFor="ignore-case-sort">Ignore Case</Label>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            <Button onClick={sortAZ} variant="outline" className="w-full">
            <ArrowDownAZ className="w-4 h-4 mr-2" /> Sort A-Z
            </Button>
            <Button onClick={sortZA} variant="outline" className="w-full">
            <ArrowUpAZ className="w-4 h-4 mr-2" /> Sort Z-A
            </Button>
            <Button onClick={sortLengthShort} variant="outline" className="w-full">
            Shortest First
            </Button>
            <Button onClick={sortLengthLong} variant="outline" className="w-full">
            Longest First
            </Button>
            <Button onClick={reverseOrder} variant="outline" className="w-full">
            Reverse Order
            </Button>
            <Button onClick={shuffleLines} variant="outline" className="w-full">
            <Shuffle className="w-4 h-4 mr-2" /> Shuffle
            </Button>
        </div>
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
    </div>
  );
}
