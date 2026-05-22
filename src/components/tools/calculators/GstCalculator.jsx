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

export default function GstCalculator() {
  return <GstCalcInner />;
}

function GstCalcInner() {
  const [amount, setAmount] = useState("100");
  const [rate, setRate] = useState("18");
  const { base, tax, total } = useMemo(() => {
    const a = Number(amount); const r = Number(rate) / 100;
    if (!Number.isFinite(a) || !Number.isFinite(r)) return { base: "", tax: "", total: "" };
    const t = a * r;
    return { base: a.toFixed(2), tax: t.toFixed(2), total: (a + t).toFixed(2) };
  }, [amount, rate]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />GST Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="ga" label="Exclusive base amount" value={amount} onChange={setAmount} /><Field id="gr" label="GST rate (%)" value={rate} onChange={setRate} /><Input readOnly className="bg-muted/40" value={`Base: ${base}`} /><Input readOnly className="bg-muted/40" value={`Tax: ${tax}`} /><div className="md:col-span-2"><Input readOnly className="bg-muted/40" value={`Total: ${total}`} /></div></CardContent></Card>; }
