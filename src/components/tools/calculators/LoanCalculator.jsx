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

export default function LoanCalculator() {
  return <LoanCalcInner />;
}

function LoanCalcInner() {
  const [p, setP] = useState("200000");
  const [apr, setApr] = useState("6.5");
  const [years, setYears] = useState("30");
  const pay = useMemo(() => {
    const principal = Number(p); const r = Number(apr) / 100 / 12; const n = Number(years) * 12;
    if (!Number.isFinite(principal) || !Number.isFinite(r) || !Number.isFinite(n) || n <= 0) return "";
    if (r === 0) return (principal / n).toFixed(2);
    const pow = (1 + r) ** n;
    const m = (principal * r * pow) / (pow - 1);
    return Number.isFinite(m) ? m.toFixed(2) : "";
  }, [p, apr, years]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Loan Payment Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-3"><Field id="lp" label="Principal" value={p} onChange={setP} /><Field id="lr" label="APR %" value={apr} onChange={setApr} /><Field id="ly" label="Years" value={years} onChange={setYears} /><div className="md:col-span-3"><Field id="lm" label="Monthly payment" value={pay} onChange={()=>{}} /></div></CardContent></Card>; }
