"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Trash2, ArrowLeftRight } from "lucide-react";

export default function TextReverser() {
  const [text, setText] = useState("");

  const reverseText = () => {
    setText(text.split("").reverse().join(""));
  };

  const reverseWords = () => {
    setText(text.split(" ").reverse().join(" "));
  };

  const reverseLines = () => {
    setText(text.split("\n").reverse().join("\n"));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Button onClick={reverseText} variant="outline" className="w-full">
          Reverse Text
        </Button>
        <Button onClick={reverseWords} variant="outline" className="w-full">
          Reverse Words
        </Button>
        <Button onClick={reverseLines} variant="outline" className="w-full">
          Reverse Lines
        </Button>
      </div>

      <div className="relative">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here to reverse it..."
          className="min-h-[300px] text-lg p-6 resize-y font-mono"
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
