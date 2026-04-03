"use client";

import { useMemo, useState } from "react";

interface ToolWorkbenchProps {
  toolId: string;
  title: string;
  description: string;
  keywords: string[];
}

function wordsToNumber(value: string) {
  const map: Record<string, number> = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
  };

  const tokens = value.toLowerCase().split(/\s|-/).filter(Boolean);
  let current = 0;
  let total = 0;

  for (const token of tokens) {
    if (!(token in map)) continue;
    const num = map[token];
    if (num === 100 || num === 1000) {
      current = (current || 1) * num;
      if (num === 1000) {
        total += current;
        current = 0;
      }
    } else {
      current += num;
    }
  }

  return total + current;
}

function numberToWords(n: number) {
  if (!Number.isFinite(n)) return "";
  if (n === 0) return "zero";
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  const underThousand = (x: number) => {
    let s = "";
    if (x >= 100) {
      s += `${ones[Math.floor(x / 100)]} hundred `;
      x %= 100;
    }
    if (x >= 20) {
      s += `${tens[Math.floor(x / 10)]} `;
      x %= 10;
    } else if (x >= 10) {
      s += `${teens[x - 10]} `;
      x = 0;
    }
    if (x > 0) s += `${ones[x]} `;
    return s.trim();
  };

  let num = Math.floor(Math.abs(n));
  const parts: string[] = [];

  if (num >= 1000) {
    parts.push(`${underThousand(Math.floor(num / 1000))} thousand`);
    num %= 1000;
  }

  if (num > 0) parts.push(underThousand(num));
  return parts.join(" ").trim();
}

function convertByTool(toolId: string, value: string): string {
  const raw = value ?? "";

  if (toolId === "word-counter") {
    const words = raw.trim() ? raw.trim().split(/\s+/).length : 0;
    const chars = raw.length;
    const lines = raw ? raw.split(/\n/).length : 0;
    return `Words: ${words}\nCharacters: ${chars}\nLines: ${lines}`;
  }

  if (toolId.includes("backwards") || toolId.includes("revers")) return raw.split("").reverse().join("");
  if (toolId.includes("remove-line-breaks")) return raw.replace(/\n+/g, " ").replace(/\s{2,}/g, " ").trim();
  if (toolId.includes("text-repeater")) return `${raw}\n${raw}\n${raw}`;
  if (toolId.includes("text-sorter") || toolId.includes("line-sorter")) return raw.split("\n").filter(Boolean).sort((a, b) => a.localeCompare(b)).join("\n");
  if (toolId.includes("comma-separator")) return raw.split(/\s|\n|,/).filter(Boolean).join(", ");
  if (toolId.includes("slug")) return raw.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (toolId.includes("hashtags")) return raw.split(/\s+/).filter(Boolean).map((w) => `#${w.replace(/[^a-zA-Z0-9]/g, "")}`).join(" ");
  if (toolId.includes("tags")) return raw.split(/\s+/).filter(Boolean).join(", ");
  if (toolId.includes("compare")) {
    const [a = "", b = ""] = raw.split("\n---\n");
    return a.trim() === b.trim() ? "Texts are identical" : "Texts are different";
  }

  if (toolId.includes("base64-encode")) return btoa(unescape(encodeURIComponent(raw)));
  if (toolId.includes("base64-decode")) {
    try {
      return decodeURIComponent(escape(atob(raw)));
    } catch {
      return "Invalid Base64 input";
    }
  }

  if (toolId.includes("url-encode")) return encodeURIComponent(raw);
  if (toolId.includes("url-decode")) return decodeURIComponent(raw);

  if (toolId.includes("text-to-binary")) return raw.split("").map((c) => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
  if (toolId.includes("binary-to-text")) return raw.split(/\s+/).filter(Boolean).map((b) => String.fromCharCode(parseInt(b, 2))).join("");
  if (toolId.includes("text-to-hex")) return raw.split("").map((c) => c.charCodeAt(0).toString(16)).join(" ");
  if (toolId.includes("hex-to-text")) return raw.split(/\s+/).filter(Boolean).map((h) => String.fromCharCode(parseInt(h, 16))).join("");
  if (toolId.includes("text-to-decimal")) return raw.split("").map((c) => c.charCodeAt(0).toString(10)).join(" ");
  if (toolId.includes("decimal-to-text")) return raw.split(/\s+/).filter(Boolean).map((d) => String.fromCharCode(parseInt(d, 10))).join("");

  if (toolId.includes("number-to-word")) return numberToWords(Number(raw));
  if (toolId.includes("word-to-number")) return String(wordsToNumber(raw));

  if (toolId.includes("json-minify")) return JSON.stringify(JSON.parse(raw));
  if (toolId.includes("json-format") || toolId.includes("json-view") || toolId.includes("json-editor") || toolId.includes("json-validator")) {
    const parsed = JSON.parse(raw);
    return JSON.stringify(parsed, null, 2);
  }

  if (toolId.includes("random-word-generator")) {
    const sample = ["velocity", "harbor", "syntax", "pixel", "momentum", "fusion"];
    return sample.sort(() => Math.random() - 0.5).slice(0, 3).join(" ");
  }

  return raw;
}

export default function ToolWorkbench({ toolId, title, description, keywords }: ToolWorkbenchProps) {
  const [input, setInput] = useState("");

  const output = useMemo(() => {
    if (!input.trim()) return "";
    try {
      return convertByTool(toolId, input);
    } catch {
      return "Unable to process this input for the selected tool.";
    }
  }, [input, toolId]);

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {keywords.slice(0, 8).map((keyword) => (
          <span key={keyword} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
            {keyword}
          </span>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">Input</label>
          <textarea
            className="w-full min-h-[220px] rounded-xl border bg-background p-3 text-sm"
            placeholder="Paste or type your content here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Output</label>
          <textarea
            className="w-full min-h-[220px] rounded-xl border bg-background p-3 text-sm"
            readOnly
            value={output}
            placeholder="Result appears here..."
          />
        </div>
      </div>
    </section>
  );
}
