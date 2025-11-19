"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download, Upload, FileText, AlertCircle } from "lucide-react";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

export default function MarkdownToHtmlTool() {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const [error, setError] = useState("");

  // Use marked from CDN
  const convertMarkdown = async () => {
    if (!window.marked) {
      await loadMarked();
    }
    try {
      const htmlResult = window.marked.parse(markdown);
      setHtml(htmlResult);
      setError("");
    } catch (e) {
      setError("Invalid Markdown.");
      setHtml("");
    }
  };

  const loadMarked = () => {
    return new Promise((resolve, reject) => {
      if (window.marked) return resolve();
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  const handleDownload = () => {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Markdown to HTML Converter
          </CardTitle>
          <CardDescription>
            Convert Markdown text to HTML instantly. Paste your Markdown, click
            convert, and copy or download the result.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Textarea
            rows={8}
            placeholder="Paste your Markdown here..."
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="font-mono"
          />
          <Button onClick={convertMarkdown} disabled={!markdown}>
            <Upload className="w-4 h-4 mr-2" /> Convert to HTML
          </Button>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {html && (
            <div>
              <h3 className="font-medium mb-2">HTML Output</h3>
              <Textarea
                rows={8}
                value={html}
                readOnly
                className="font-mono bg-gray-50"
              />
              <Button onClick={handleDownload} className="mt-2">
                <Download className="w-4 h-4 mr-2" /> Download HTML
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Social Share */}
      <div className="mt-8 max-w-2xl mx-auto">
        <SocialShareButtons
          toolName="Markdown to HTML Converter"
          toolDescription="Convert Markdown text to HTML instantly. Free online tool with live preview and download options"
          toolUrl="https://30tools.com/markdown-to-html"
          category="developer"
        />
      </div>
    </div>
  );
}
