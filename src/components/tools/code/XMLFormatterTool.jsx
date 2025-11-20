"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Code, Copy, Download, Check, X } from "lucide-react";
import { toast } from "sonner";

export default function XMLFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState("");

  const formatXML = (xml) => {
    const PADDING = '  ';
    const reg = /(>)(<)(\/*)/g;
    let formatted = '';
    let pad = 0;

    xml = xml.replace(reg, '$1\n$2$3');
    xml.split('\n').forEach((node) => {
      let indent = 0;
      if (node.match(/.+<\/\w[^>]*>$/)) {
        indent = 0;
      } else if (node.match(/^<\/\w/) && pad > 0) {
        pad -= 1;
      } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
        indent = 1;
      } else {
        indent = 0;
      }

      formatted += PADDING.repeat(pad) + node + '\n';
      pad += indent;
    });

    return formatted.trim();
  };

  const validateAndFormat = () => {
    if (!input.trim()) {
      toast.error("Please enter some XML");
      return;
    }

    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(input, "text/xml");

      const parserError = xmlDoc.getElementsByTagName("parsererror");
      if (parserError.length > 0) {
        setIsValid(false);
        setError(parserError[0].textContent || "XML parsing error");
        setOutput("");
        toast.error("Invalid XML");
        return;
      }

      const formatted = formatXML(input);
      setOutput(formatted);
      setIsValid(true);
      setError("");
      toast.success("XML formatted successfully!");
    } catch (err) {
      setIsValid(false);
      setError(err.message);
      setOutput("");
      toast.error("XML parsing failed");
    }
  };

  const minifyXML = () => {
    if (!input.trim()) {
      toast.error("Please enter some XML");
      return;
    }

    try {
      const minified = input
        .replace(/\s+/g, ' ')
        .replace(/>\s+</g, '><')
        .trim();

      setOutput(minified);
      setIsValid(true);
      setError("");
      toast.success("XML minified successfully!");
    } catch (err) {
      toast.error("Minification failed");
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  const downloadXML = () => {
    const blob = new Blob([output], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'formatted.xml';
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded!");
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>XML Input</Label>
            <Textarea
              placeholder="Paste your XML here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[500px] font-mono text-sm"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={validateAndFormat} className="flex-1">
              <Code className="w-4 h-4 mr-2" />
              Format & Validate
            </Button>
            <Button variant="outline" onClick={minifyXML}>
              Minify
            </Button>
            <Button variant="outline" onClick={() => { setInput(''); setOutput(''); setIsValid(null); setError(''); }}>
              Clear
            </Button>
          </div>

          {isValid !== null && (
            <div className={`p-3 rounded-lg flex items-start gap-2 ${isValid
                ? 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900'
                : 'bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900'
              }`}>
              {isValid ? (
                <>
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900 dark:text-green-100">Valid XML</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Your XML is well-formed</p>
                  </div>
                </>
              ) : (
                <>
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-900 dark:text-red-100">Invalid XML</p>
                    <p className="text-sm text-red-700 dark:text-red-300 font-mono">{error}</p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Output */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Formatted Output
                </CardTitle>
                {output && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={copyOutput}>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button size="sm" variant="outline" onClick={downloadXML}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {output ? (
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto max-h-[500px] overflow-y-auto">
                  <code className="text-sm font-mono">{output}</code>
                </pre>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Formatted XML will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
