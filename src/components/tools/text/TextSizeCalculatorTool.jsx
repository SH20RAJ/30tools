"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calculator, Copy, Check, FileText, BarChart3 } from "lucide-react";
import { toast } from "sonner";

export default function TextSizeCalculatorTool() {
  const [text, setText] = useState("");
  const [results, setResults] = useState(null);
  const [copied, setCopied] = useState(false);

  const calculateTextSize = () => {
    if (!text) {
      toast.error("Please enter some text");
      return;
    }

    const textBlob = new Blob([text], { type: "text/plain" });
    const sizeInBytes = textBlob.size;

    const stats = {
      characters: text.length,
      charactersNoSpaces: text.replace(/\s/g, "").length,
      words: text.trim() ? text.trim().split(/\s+/).length : 0,
      sentences: text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length,
      paragraphs: text.split(/\n\s*\n/).filter((p) => p.trim().length > 0)
        .length,
      lines: text.split("\n").length,
      bytes: sizeInBytes,
      kilobytes: (sizeInBytes / 1024).toFixed(2),
      megabytes: (sizeInBytes / (1024 * 1024)).toFixed(6),
      averageWordsPerSentence: 0,
      averageCharsPerWord: 0,
      readingTime: 0,
    };

    if (stats.sentences > 0) {
      stats.averageWordsPerSentence = (stats.words / stats.sentences).toFixed(
        1,
      );
    }

    if (stats.words > 0) {
      stats.averageCharsPerWord = (
        stats.charactersNoSpaces / stats.words
      ).toFixed(1);
      stats.readingTime = Math.ceil(stats.words / 200); // Average reading speed
    }

    setResults(stats);
    toast.success("Text analysis completed!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Text Size Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate text size, character count, word count, and get detailed
            text statistics and analysis.
          </p>
        </div>

        {/* Input Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Text Input
            </CardTitle>
            <CardDescription>
              Paste or type your text to analyze
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter or paste your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={12}
              className="resize-y"
            />

            <Button
              onClick={calculateTextSize}
              disabled={!text.trim()}
              className="w-full"
            >
              <Calculator className="h-4 w-4 mr-2" />
              Calculate Text Statistics
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {results && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Text Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    {results.characters}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Characters
                  </div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    {results.words}
                  </div>
                  <div className="text-sm text-muted-foreground">Words</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    {results.sentences}
                  </div>
                  <div className="text-sm text-muted-foreground">Sentences</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    {results.paragraphs}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Paragraphs
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
