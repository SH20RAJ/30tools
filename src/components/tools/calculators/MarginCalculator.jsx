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

export default function MarginCalculator() {
  return <MarginCalcInner />;
}

function MarginCalcInner() {
  const [cost, setCost] = useState("40");
  const [sell, setSell] = useState("100");
  const margin = useMemo(() => {
    const c = Number(cost); const s = Number(sell);
    if (!Number.isFinite(c) || !Number.isFinite(s) || s === 0) return "";
    return `${(((s - c) / s) * 100).toFixed(2)}%`;
  }, [cost, sell]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Gross Margin Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="mc" label="Cost" value={cost} onChange={setCost} /><Field id="ms" label="Sell price" value={sell} onChange={setSell} /><div className="md:col-span-2"><Field id="mm" label="Gross margin" value={margin} onChange={()=>{}} /></div></CardContent></Card>; }
