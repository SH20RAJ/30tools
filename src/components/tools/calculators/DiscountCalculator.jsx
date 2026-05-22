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

export default function DiscountCalculator() {
  return <DiscountCalcInner />;
}

function DiscountCalcInner() {
  const [price, setPrice] = useState("100");
  const [off, setOff] = useState("20");
  const { pay, save } = useMemo(() => {
    const p = Number(price); const d = Number(off);
    if (!Number.isFinite(p) || !Number.isFinite(d)) return { pay: "", save: "" };
    const s = (p * d) / 100;
    return { pay: (p - s).toFixed(2), save: s.toFixed(2) };
  }, [price, off]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Discount Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="dp" label="Original price" value={price} onChange={setPrice} /><Field id="dd" label="Discount %" value={off} onChange={setOff} /><Field id="ds" label="You save" value={save} onChange={()=>{}} /><Field id="dy" label="You pay" value={pay} onChange={()=>{}} /></CardContent></Card>; }
