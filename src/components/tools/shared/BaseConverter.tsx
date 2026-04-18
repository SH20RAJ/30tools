"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Copy, Trash2, Download, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface BaseConverterProps {
  title: string;
  inputPlaceholder: string;
  outputPlaceholder: string;
  convertFn: (input: string) => string;
  onCopy?: (text: string) => void;
  onClear?: () => void;
  onDownload?: (text: string) => void;
  autoConvert?: boolean;
}

export default function BaseConverter({
  title,
  inputPlaceholder,
  outputPlaceholder,
  convertFn,
  autoConvert = true,
}: BaseConverterProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleConvert = useCallback(() => {
    if (!input.trim()) {
      setOutput("");
      return;
    }
    try {
      const result = convertFn(input);
      setOutput(result);
    } catch (error) {
      console.error("Conversion error:", error);
      toast.error("Error during conversion. Please check your input.");
    }
  }, [input, convertFn]);

  useEffect(() => {
    if (autoConvert) {
      handleConvert();
    }
  }, [input, handleConvert, autoConvert]);

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setIsCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    toast.success("Cleared");
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted-data.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Downloaded");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold tracking-tight uppercase opacity-60">
              Input
            </label>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              disabled={!input}
              className="h-8 px-2 text-xs"
            >
              <Trash2 className="w-3.5 h-3.5 mr-1" />
              Clear
            </Button>
          </div>
          <Textarea
            placeholder={inputPlaceholder}
            value={input}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
            className="min-h-[300px] font-mono text-sm resize-none bg-background/50 focus:bg-background transition-colors"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold tracking-tight uppercase opacity-60">
              Output
            </label>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                disabled={!output}
                className="h-8 px-2 text-xs"
              >
                {isCopied ? (
                  <Check className="w-3.5 h-3.5 mr-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 mr-1" />
                )}
                Copy
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                disabled={!output}
                className="h-8 px-2 text-xs"
              >
                <Download className="w-3.5 h-3.5 mr-1" />
                Download
              </Button>
            </div>
          </div>
          <Textarea
            placeholder={outputPlaceholder}
            value={output}
            readOnly
            className="min-h-[300px] font-mono text-sm resize-none bg-muted/30"
          />
        </div>
      </div>

      {!autoConvert && (
        <div className="flex justify-center">
          <Button onClick={handleConvert} size="lg" className="px-8">
            <RefreshCw className="w-4 h-4 mr-2" />
            Convert Now
          </Button>
        </div>
      )}
    </div>
  );
}
