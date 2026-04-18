"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Copy, Trash2, Download, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export type BaseConverterKind =
  | "ascii-to-binary"
  | "binary-to-text"
  | "binary-to-decimal"
  | "binary-to-hex"
  | "binary-to-octal"
  | "decimal-to-text"
  | "ascii-to-text"
  | "decimal-to-hex"
  | "binary-to-ascii"
  | "decimal-to-binary"
  | "decimal-to-octal"
  | "text-to-binary"
  | "text-to-hex"
  | "text-to-octal"
  | "text-to-decimal"
  | "text-to-ascii"
  | "hex-to-text"
  | "hex-to-binary"
  | "hex-to-decimal"
  | "hex-to-octal"
  | "octal-to-text"
  | "octal-to-binary"
  | "octal-to-decimal"
  | "octal-to-hex";

function splitTokens(input: string) {
  return input.trim().split(/[\s,]+/);
}

function hexByteTokens(input: string): string[] {
  const compact = input.replace(/\s+/g, "");
  if (!compact) return [];
  if (compact.includes(" ") || compact.includes(",")) {
    return splitTokens(input).filter(Boolean);
  }
  const pairs: string[] = [];
  for (let i = 0; i < compact.length; i += 2) {
    pairs.push(compact.slice(i, i + 2));
  }
  return pairs.filter((p) => p.length > 0);
}

function convertByKind(kind: BaseConverterKind, input: string): string {
  switch (kind) {
    case "binary-to-text":
    case "binary-to-ascii":
      return splitTokens(input)
        .map((bin) => {
          const num = parseInt(bin, 2);
          return Number.isNaN(num) ? "" : String.fromCharCode(num);
        })
        .join("");
    case "binary-to-decimal":
      return splitTokens(input)
        .map((bin) => {
          const num = parseInt(bin, 2);
          return Number.isNaN(num) ? "" : num.toString(10);
        })
        .join(" ");
    case "binary-to-hex":
      return splitTokens(input)
        .map((bin) => {
          const num = parseInt(bin, 2);
          return Number.isNaN(num) ? "" : num.toString(16).toUpperCase();
        })
        .join(" ");
    case "binary-to-octal":
      return splitTokens(input)
        .map((bin) => {
          const num = parseInt(bin, 2);
          return Number.isNaN(num) ? "" : num.toString(8);
        })
        .join(" ");
    case "decimal-to-text":
    case "ascii-to-text":
    case "text-to-ascii":
      return splitTokens(input)
        .map((dec) => {
          const num = parseInt(dec, 10);
          return Number.isNaN(num) ? "" : String.fromCharCode(num);
        })
        .join("");
    case "decimal-to-hex":
      return splitTokens(input)
        .map((dec) => {
          const num = parseInt(dec, 10);
          return Number.isNaN(num) ? "" : num.toString(16).toUpperCase();
        })
        .join(" ");
    case "decimal-to-binary":
      return splitTokens(input)
        .map((dec) => {
          const num = parseInt(dec, 10);
          return Number.isNaN(num) ? "" : num.toString(2);
        })
        .join(" ");
    case "decimal-to-octal":
      return splitTokens(input)
        .map((dec) => {
          const num = parseInt(dec, 10);
          return Number.isNaN(num) ? "" : num.toString(8);
        })
        .join(" ");
    case "ascii-to-binary":
    case "text-to-binary":
      return input
        .split("")
        .map((char) => {
          const binary = char.charCodeAt(0).toString(2);
          return "00000000".slice(binary.length) + binary;
        })
        .join(" ");
    case "text-to-hex":
      return Array.from(input)
        .map((char) => char.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"))
        .join(" ");
    case "text-to-octal":
      return Array.from(input)
        .map((char) => char.charCodeAt(0).toString(8).padStart(3, "0"))
        .join(" ");
    case "text-to-decimal":
      return Array.from(input)
        .map((char) => String(char.charCodeAt(0)))
        .join(" ");
    case "hex-to-text":
      return hexByteTokens(input)
        .map((h) => {
          const num = parseInt(h, 16);
          return Number.isNaN(num) ? "" : String.fromCharCode(num & 0xff);
        })
        .join("");
    case "hex-to-binary":
      return hexByteTokens(input)
        .map((h) => {
          const num = parseInt(h, 16);
          return Number.isNaN(num) ? "" : num.toString(2).padStart(8, "0");
        })
        .join(" ");
    case "hex-to-decimal":
      return hexByteTokens(input)
        .map((h) => {
          const num = parseInt(h, 16);
          return Number.isNaN(num) ? "" : String(num);
        })
        .join(" ");
    case "hex-to-octal":
      return hexByteTokens(input)
        .map((h) => {
          const num = parseInt(h, 16);
          return Number.isNaN(num) ? "" : num.toString(8);
        })
        .join(" ");
    case "octal-to-text":
      return splitTokens(input)
        .map((o) => {
          const num = parseInt(o, 8);
          return Number.isNaN(num) ? "" : String.fromCharCode(num & 0xff);
        })
        .join("");
    case "octal-to-binary":
      return splitTokens(input)
        .map((o) => {
          const num = parseInt(o, 8);
          return Number.isNaN(num) ? "" : num.toString(2);
        })
        .join(" ");
    case "octal-to-decimal":
      return splitTokens(input)
        .map((o) => {
          const num = parseInt(o, 8);
          return Number.isNaN(num) ? "" : String(num);
        })
        .join(" ");
    case "octal-to-hex":
      return splitTokens(input)
        .map((o) => {
          const num = parseInt(o, 8);
          return Number.isNaN(num) ? "" : num.toString(16).toUpperCase();
        })
        .join(" ");
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}

interface BaseConverterProps {
  title: string;
  inputPlaceholder: string;
  outputPlaceholder: string;
  converterKind: BaseConverterKind;
  onCopy?: (text: string) => void;
  onClear?: () => void;
  onDownload?: (text: string) => void;
  autoConvert?: boolean;
}

export default function BaseConverter({
  title,
  inputPlaceholder,
  outputPlaceholder,
  converterKind,
  autoConvert = true,
}: BaseConverterProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const convertInput = useMemo(
    () => (value: string) => convertByKind(converterKind, value),
    [converterKind],
  );

  const handleConvert = useCallback(() => {
    if (!input.trim()) {
      setOutput("");
      return;
    }
    try {
      const result = convertInput(input);
      setOutput(result);
    } catch (error) {
      console.error("Conversion error:", error);
      toast.error("Error during conversion. Please check your input.");
    }
  }, [input, convertInput]);

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
      <h2 className="sr-only">{title}</h2>
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
