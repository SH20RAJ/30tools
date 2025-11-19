"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { GitCompare, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { ToolSEOLayout } from "@/components/seo";
import * as Diff from "diff";

const TOOL_FAQS = [
  {
    question: "How does the text diff checker work?",
    answer: "It compares two blocks of text character by character or word by word and highlights the differences (additions and removals)."
  },
  {
    question: "Is my text saved?",
    answer: "No, all processing happens in your browser. We do not store or send your text to any server."
  },
  {
    question: "Can I compare code?",
    answer: "Yes, this tool works great for comparing code snippets, JSON, XML, or any plain text."
  }
];

const TOOL_FEATURES = [
  "Character & Word Diff",
  "Side-by-Side Comparison",
  "Syntax Highlighting",
  "Instant Results",
  "Privacy Focused",
  "Large Text Support"
];

export default function TextDiffTool() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");
  const [diffResult, setDiffResult] = useState([]);
  const [mode, setMode] = useState("chars"); // chars, words, lines

  const handleCompare = () => {
    if (!oldText && !newText) {
      toast.error("Please enter some text to compare");
      return;
    }

    let diff;
    if (mode === "chars") {
      diff = Diff.diffChars(oldText, newText);
    } else if (mode === "words") {
      diff = Diff.diffWords(oldText, newText);
    } else {
      diff = Diff.diffLines(oldText, newText);
    }
    setDiffResult(diff);
  };

  const clear = () => {
    setOldText("");
    setNewText("");
    setDiffResult([]);
  };

  return (
    <ToolSEOLayout
      toolId="text-diff"
      faqs={TOOL_FAQS}
      features={TOOL_FEATURES}
    >
      <div className="space-y-8">
        <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitCompare className="w-6 h-6" />
              Text Diff Checker
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4 justify-center">
              <Button 
                variant={mode === "chars" ? "default" : "outline"}
                onClick={() => setMode("chars")}
              >
                Characters
              </Button>
              <Button 
                variant={mode === "words" ? "default" : "outline"}
                onClick={() => setMode("words")}
              >
                Words
              </Button>
              <Button 
                variant={mode === "lines" ? "default" : "outline"}
                onClick={() => setMode("lines")}
              >
                Lines
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Original Text</label>
                <Textarea
                  placeholder="Paste original text here..."
                  value={oldText}
                  onChange={(e) => setOldText(e.target.value)}
                  className="h-64 font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">New Text</label>
                <Textarea
                  placeholder="Paste new text here..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="h-64 font-mono text-sm"
                />
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button onClick={handleCompare} className="w-32">
                Compare
              </Button>
              <Button variant="outline" onClick={clear}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {diffResult.length > 0 && (
          <Card className="border-2 border-primary/20 shadow-xl animate-in fade-in slide-in-from-bottom-4">
            <CardHeader>
              <CardTitle>Comparison Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/30 rounded-xl font-mono text-sm whitespace-pre-wrap break-words leading-relaxed border border-border">
                {diffResult.map((part, index) => {
                  const color = part.added ? "bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-100" : part.removed ? "bg-red-200 dark:bg-red-900/50 text-red-800 dark:text-red-100 decoration-slice line-through opacity-70" : "text-foreground";
                  return (
                    <span key={index} className={`${color} px-0.5 rounded-xs`}>
                      {part.value}
                    </span>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </ToolSEOLayout>
  );
}
