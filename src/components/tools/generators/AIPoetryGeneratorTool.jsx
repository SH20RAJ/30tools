"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCwIcon, SparklesIcon, CopyIcon } from "lucide-react";

export default function AIPoetryGeneratorTool() {
  const [theme, setTheme] = useState("");
  const [poem, setPoem] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setPoem("");
    try {
      const url = `https://text.pollinations.ai/${encodeURIComponent("Write a short poem about " + theme)}`;
      const res = await fetch(url);
      const text = await res.text();
      setPoem(text.trim());
    } catch (e) {
      setError("Failed to generate poem.");
    }
    setLoading(false);
  };

  const handleCopy = async () => {
    if (poem) {
      await navigator.clipboard.writeText(poem);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SparklesIcon className="h-5 w-5 text-primary" />
            AI Poetry Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input
              placeholder="Enter a theme or topic (e.g. sunrise, love, technology)"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              disabled={loading}
              className="mb-2"
            />
            <Button
              onClick={handleGenerate}
              disabled={loading || !theme}
              className="w-full"
            >
              {loading ? (
                <RefreshCwIcon className="animate-spin h-4 w-4 mr-2" />
              ) : (
                <SparklesIcon className="h-4 w-4 mr-2" />
              )}
              Generate Poem
            </Button>
          </div>
          {error && <div className="text-destructive text-sm">{error}</div>}
          {poem && (
            <div className="flex flex-col items-center gap-2 mt-4">
              <pre className="rounded border bg-muted p-4 w-full whitespace-pre-wrap text-sm font-medium">
                {poem}
              </pre>
              <Button variant="outline" size="sm" onClick={handleCopy}>
                <CopyIcon className="h-4 w-4 mr-1" />{" "}
                {copied ? "Copied!" : "Copy Poem"}
              </Button>
            </div>
          )}
          <div className="flex gap-2 mt-4">
            <Badge variant="secondary">Free AI</Badge>
            <Badge variant="secondary">No Signup</Badge>
            <Badge variant="secondary">Instant Results</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
