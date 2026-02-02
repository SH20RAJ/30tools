"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Trash2, Type } from "lucide-react";
import { toast } from "sonner"; // Assuming sonner is used, or use standard toast

export default function CaseConverter() {
  const [text, setText] = useState("");

  const transform = (type) => {
    let newText = "";
    switch (type) {
      case "upper":
        newText = text.toUpperCase();
        break;
      case "lower":
        newText = text.toLowerCase();
        break;
      case "title":
        newText = text.toLowerCase().split(' ').map(function(word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
        break;
      case "sentence":
        newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) {
          return c.toUpperCase();
        });
        break;
      case "alternating":
        newText = text.split("").map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join("");
        break;
      case "inverse":
        newText = text.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("");
        break;
      default:
        newText = text;
    }
    setText(newText);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    // You might want to implement a toast here
    // toast.success("Copied to clipboard!");
  };

  const clearText = () => {
    setText("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        <Button onClick={() => transform("upper")} variant="outline" className="w-full">
          UPPER CASE
        </Button>
        <Button onClick={() => transform("lower")} variant="outline" className="w-full">
          lower case
        </Button>
        <Button onClick={() => transform("title")} variant="outline" className="w-full">
          Title Case
        </Button>
        <Button onClick={() => transform("sentence")} variant="outline" className="w-full">
          Sentence case
        </Button>
        <Button onClick={() => transform("alternating")} variant="outline" className="w-full">
          aLtErNaTiNg
        </Button>
        <Button onClick={() => transform("inverse")} variant="outline" className="w-full">
          InVeRsE cAsE
        </Button>
      </div>

      <div className="relative">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="min-h-[300px] text-lg p-6 resize-y"
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
          <span className="font-semibold text-foreground">{text.length}</span> Characters
        </div>
        <div>
          <span className="font-semibold text-foreground">{text.split(/\s+/).filter(w => w.length > 0).length}</span> Words
        </div>
        <div>
          <span className="font-semibold text-foreground">{text.split('\n').length}</span> Lines
        </div>
      </div>
    </div>
  );
}
