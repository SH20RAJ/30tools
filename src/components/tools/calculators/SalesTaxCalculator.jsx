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

export default function SalesTaxCalculator() {
  return <SalesTaxCalcInner />;
}

function SalesTaxCalcInner() {
  const [net, setNet] = useState("100");
  const [rate, setRate] = useState("8");
  const { tax, gross } = useMemo(() => {
    const n = Number(net); const r = Number(rate) / 100;
    if (!Number.isFinite(n) || !Number.isFinite(r)) return { tax: "", gross: "" };
    const t = n * r;
    return { tax: t.toFixed(2), gross: (n + t).toFixed(2) };
  }, [net, rate]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Sales Tax Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="sn" label="Net amount" value={net} onChange={setNet} /><Field id="sr" label="Tax rate %" value={rate} onChange={setRate} /><Field id="st" label="Tax" value={tax} onChange={()=>{}} /><Field id="sg" label="Gross" value={gross} onChange={()=>{}} /></CardContent></Card>; }
