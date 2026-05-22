"use client";

import { useMemo, useState, type ChangeEvent } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Field({ id, label, value, onChange, type = "text" }: { id: string; label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
    </div>
  );
}

export default function AverageCalculator() {
  return <AverageCalcInner />;
}

function AverageCalcInner() {
  const [txt, setTxt] = useState("1, 2, 3, 4");
  const avg = useMemo(() => {
    const nums = txt.split(/[\s,]+/).map(Number).filter(n => Number.isFinite(n));
    if (!nums.length) return "";
    return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(6);
  }, [txt]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Average Calculator</CardTitle></CardHeader><CardContent className="space-y-3"><Field id="avn" label="Numbers (comma/space separated)" value={txt} onChange={setTxt} /><Field id="avr" label="Mean" value={avg} onChange={()=>{}} /></CardContent></Card>; }
