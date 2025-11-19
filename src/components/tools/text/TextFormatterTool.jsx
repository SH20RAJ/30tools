"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { AlignLeft, RotateCcw, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { ToolSEOLayout } from "@/components/seo";

const TOOL_FAQS = [
  {
    question: "What formatting options are available?",
    answer: "You can convert text to uppercase, lowercase, capitalize words, remove extra spaces, remove empty lines, and more."
  },
  {
    question: "Is my text secure?",
    answer: "Yes, all formatting is done locally in your browser. No text is sent to any server."
  },
  {
    question: "Is there a character limit?",
    answer: "There is no strict limit, but very large texts might slow down your browser slightly."
  }
];

const TOOL_FEATURES = [
  "Case Conversion",
  "Whitespace Removal",
  "Line Operations",
  "Instant Formatting",
  "Copy to Clipboard",
  "Privacy Focused"
];

export default function TextFormatterTool() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const format = (type) => {
    if (!text) return;
    let newText = text;
    switch (type) {
      case "upper": newText = text.toUpperCase(); break;
      case "lower": newText = text.toLowerCase(); break;
      case "capitalize": 
        newText = text.replace(/\b\w/g, l => l.toUpperCase()); 
        break;
      case "sentence":
        newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
        break;
      case "trim": newText = text.trim(); break;
      case "spaces": newText = text.replace(/\s+/g, " "); break;
      case "lines": newText = text.replace(/^\s*[\r\n]/gm, ""); break;
      case "reverse": newText = text.split("").reverse().join(""); break;
      default: break;
    }
    setText(newText);
    toast.success("Text formatted!");
  };

  const copyToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const clear = () => {
    setText("");
  };

  return (
    <ToolSEOLayout
      toolId="text-formatter"
      faqs={TOOL_FAQS}
      features={TOOL_FEATURES}
    >
      <div className="space-y-8">
        <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlignLeft className="w-6 h-6" />
              Text Formatter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="outline" onClick={() => format("upper")}>UPPERCASE</Button>
              <Button variant="outline" onClick={() => format("lower")}>lowercase</Button>
              <Button variant="outline" onClick={() => format("capitalize")}>Capitalize Words</Button>
              <Button variant="outline" onClick={() => format("sentence")}>Sentence case</Button>
              <Button variant="outline" onClick={() => format("spaces")}>Remove Extra Spaces</Button>
              <Button variant="outline" onClick={() => format("lines")}>Remove Empty Lines</Button>
              <Button variant="outline" onClick={() => format("reverse")}>Reverse Text</Button>
            </div>

            <Textarea
              placeholder="Type or paste your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="h-64 font-mono text-sm"
            />

            <div className="flex justify-center gap-4">
              <Button onClick={copyToClipboard} className="w-32">
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Copied" : "Copy"}
              </Button>
              <Button variant="outline" onClick={clear}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ToolSEOLayout>
  );
}
