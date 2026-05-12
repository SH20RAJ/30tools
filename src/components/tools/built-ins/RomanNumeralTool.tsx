"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function RomanNumeralTool({ toRoman }: { toRoman?: boolean }) {
  const [val, setVal] = useState("");
  const romanMap: [number, string][] = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
  const toR = (n: number) => { let s=""; for(const [v,r] of romanMap){while(n>=v){s+=r;n-=v;}} return s; };
  const fromR = (s: string) => { let n=0; const u=s.toUpperCase(); const m: Record<string,number>={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}; for(let i=0;i<u.length;i++){const c=m[u[i]]||0;const nx=m[u[i+1]]||0;if(c<nx){n-=c;}else{n+=c;}} return n; };
  const result = toRoman ? toR(Number(val)||0) : String(fromR(val));
  return (
    <Card>
      <CardContent className="pt-6 space-y-3">
        <Input placeholder={toRoman ? "Enter a number..." : "Enter Roman numerals..."} value={val} onChange={(e) => setVal(e.target.value)} />
        <div className="p-4 rounded-lg bg-muted/40 font-mono text-lg text-center">{result || "—"}</div>
        <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(String(result)); toast.success("Copied!"); }}>Copy</Button>
      </CardContent>
    </Card>
  );
}
