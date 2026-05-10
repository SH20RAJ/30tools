"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ones = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

function numberToWords(n) {
  if (n < 0) return "minus " + numberToWords(-n);
  if (n < 20) return ones[n];
  if (n < 100) {
    return tens[Math.floor(n/10)] + (n%10 ? " " + ones[n%10] : "");
  }
  if (n < 1000) {
    return ones[Math.floor(n/100)] + " hundred" + (n%100 ? " " + numberToWords(n%100) : "");
  }
  if (n < 1000000) {
    return numberToWords(Math.floor(n/1000)) + " thousand" + (n%1000 ? " " + numberToWords(n%1000) : "");
  }
  if (n < 1000000000) {
    return numberToWords(Math.floor(n/1000000)) + " million" + (n%1000000 ? " " + numberToWords(n%1000000) : "");
  }
  return "number too large";
}

export default function NumberToWordTool() {
  const [num, setNum] = useState("");
  const words = useMemo(() => {
    const n = parseInt(num, 10);
    if (isNaN(n)) return "";
    return numberToWords(n);
  }, [num]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Number to Words</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input type="number" placeholder="Enter a number" value={num} onChange={e => setNum(e.target.value)} />
        {words && <p className="text-lg font-mono">{words}</p>}
      </CardContent>
    </Card>
  );
}
