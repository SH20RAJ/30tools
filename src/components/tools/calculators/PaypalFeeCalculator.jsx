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

export default function PaypalFeeCalculator() {
  return <PaypalCalcInner />;
}

function PaypalCalcInner() {
  const [amt, setAmt] = useState("100");
  const [feePct, setFeePct] = useState("2.9");
  const [fixed, setFixed] = useState("0.30");
  const net = useMemo(() => {
    const a = Number(amt); const f = Number(feePct) / 100; const fx = Number(fixed);
    if (!Number.isFinite(a) || !Number.isFinite(f) || !Number.isFinite(fx)) return "";
    return (a - a * f - fx).toFixed(2);
  }, [amt, feePct, fixed]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />PayPal Fee Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-3"><Field id="pa" label="Gross received" value={amt} onChange={setAmt} /><Field id="pp" label="Percent fee" value={feePct} onChange={setFeePct} /><Field id="pf" label="Fixed fee" value={fixed} onChange={setFixed} /><div className="md:col-span-3"><Field id="pn" label="Net (approx.)" value={net} onChange={()=>{}} /></div></CardContent></Card>; }
