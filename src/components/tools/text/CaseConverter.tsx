"use client";

import { Copy, Trash2, Type, ArrowDownUp, CaseUpper, CaseLower, CaseSensitive } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Mode = "upper" | "lower" | "title" | "sentence" | "alternating" | "inverse";

export default function CaseConverter() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState<Mode | null>(null);

  const transform = useCallback((text: string, type: Mode) => {
    if (!text) return "";
    let newText = "";
    switch (type) {
      case "upper":
        newText = text.toUpperCase();
        break;
      case "lower":
        newText = text.toLowerCase();
        break;
      case "title":
        newText = text
          .toLowerCase()
          .split(/(\s+)/)
          .map((word) => 
            word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
          )
          .join("");
        break;
      case "sentence":
        newText = text
          .toLowerCase()
          .replace(/(^\s*[a-z]|[\.\!\?]\s+[a-z])/g, (match) => match.toUpperCase());
        break;
      case "alternating":
        newText = text
          .split("")
          .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
          .join("");
        break;
      case "inverse":
        newText = text
          .split("")
          .map((c) =>
            c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
          )
          .join("");
        break;
      default:
        newText = text;
    }
    return newText;
  }, []);

  // Use a separate effect to update output when input OR mode changes
  useEffect(() => {
    if (mode) {
      setOutputText(transform(inputText, mode));
    } else {
      setOutputText(inputText);
    }
  }, [inputText, mode, transform]);

  const copyToClipboard = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    toast.success("Copied to clipboard!");
  };

  const clearText = () => {
    setInputText("");
    setMode(null);
    toast.info("Cleared text");
  };

  const handleModeClick = (newMode: Mode) => {
    setMode(newMode);
    toast.info(`Converted to ${newMode.replace("-", " ")}`);
  };

  const modes = [
    { id: "upper", label: "UPPER CASE", icon: CaseUpper },
    { id: "lower", label: "lower case", icon: CaseLower },
    { id: "title", label: "Title Case", icon: CaseSensitive },
    { id: "sentence", label: "Sentence case", icon: Type },
    { id: "alternating", label: "aLtErNaTiNg", icon: ArrowDownUp },
    { id: "inverse", label: "InVeRsE cAsE", icon: ArrowDownUp },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-4 md:p-0">
      {/* Mode Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {modes.map((m) => (
          <Button
            key={m.id}
            variant={mode === m.id ? "default" : "outline"}
            onClick={() => handleModeClick(m.id as Mode)}
            className={cn(
              "h-12 rounded-xl border-2 transition-all duration-200",
              mode === m.id ? "shadow-md scale-[1.02]" : "hover:border-primary/50"
            )}
          >
            <span className="truncate">{m.label}</span>
          </Button>
        ))}
      </div>

      {/* Editor Area */}
      <div className="relative group">
        <Textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="min-h-[400px] text-lg p-8 bg-card border-border/60 focus:border-primary/50 transition-all resize-none rounded-[2rem] shadow-sm font-medium"
        />
        
        {/* Floating Actions */}
        <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            size="sm"
            onClick={clearText}
            className="rounded-full shadow-lg h-10 px-6 bg-background/80 backdrop-blur-sm border border-border hover:bg-destructive hover:text-destructive-foreground transition-all"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear
          </Button>
          <Button
            size="sm"
            onClick={copyToClipboard}
            disabled={!outputText}
            className="rounded-full shadow-lg h-10 px-6 bg-primary text-primary-foreground transition-all hover:scale-105"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Result
          </Button>
        </div>

        {/* Real-time Indicator */}
        <div className="absolute top-6 right-8 hidden md:block">
          {mode && (
            <div className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-primary/20">
              Active: {mode}
            </div>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-4 p-6 bg-card border border-border/50 rounded-2xl shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Type className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{inputText.length}</span>
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Characters</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-6 bg-card border border-border/50 rounded-2xl shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <CaseSensitive className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">
              {inputText.trim() ? inputText.trim().split(/\s+/).length : 0}
            </span>
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Words</span>
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 bg-card border border-border/50 rounded-2xl shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <ArrowDownUp className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">
              {inputText.split("\n").filter(l => l.trim()).length}
            </span>
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Lines</span>
          </div>
        </div>
      </div>
    </div>
  );
}
