"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const ones = { "zero":0,"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"ten":10,"eleven":11,"twelve":12,"thirteen":13,"fourteen":14,"fifteen":15,"sixteen":16,"seventeen":17,"eighteen":18,"nineteen":19 };
const tens = { "twenty":20,"thirty":30,"forty":40,"fifty":50,"sixty":60,"seventy":70,"eighty":80,"ninety":90 };

function wordsToNumbers(str) {
  const tokens = str.toLowerCase().replace(/-/g, " ").split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return "";
  let total = 0, current = 0;
  for (const token of tokens) {
    if (ones[token] !== undefined) {
      current += ones[token];
    } else if (tens[token] !== undefined) {
      current += tens[token];
    } else if (token === "hundred") {
      current *= 100;
    } else if (token === "thousand") {
      total += current * 1000;
      current = 0;
    } else if (token === "million") {
      total += current * 1000000;
      current = 0;
    } else {
      return NaN;
    }
  }
  return total + current;
}

export default function WordToNumberTool() {
  const [text, setText] = useState("");
  const num = useMemo(() => {
    const n = wordsToNumbers(text);
    return isNaN(n) ? "" : n.toString();
  }, [text]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Words to Number</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea placeholder="Enter number words (e.g., one thousand two hundred thirty-four)" value={text} onChange={e => setText(e.target.value)} />
        {num && <p className="text-lg font-mono">{num}</p>}
      </CardContent>
    </Card>
  );
}
