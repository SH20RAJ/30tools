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

export default function ProbabilityCalculator() {
  return <ProbCalcInner />;
}

function ProbCalcInner() {
  const [p, setP] = useState("0.5");
  const [n, setN] = useState("10");
  const [k, setK] = useState("5");
  const pmf = useMemo(() => {
    const prob = Number(p); const trials = Math.round(Number(n)); const kk = Math.round(Number(k));
    if (!Number.isFinite(prob) || trials < 0 || kk < 0 || kk > trials) return "";
    function binom(ni, ki) { if (ki < 0 || ki > ni) return 0; let c = 1; for (let i = 0; i < ki; i++) c = (c * (ni - i)) / (i + 1); return c; }
    const b = binom(trials, kk);
    const val = b * prob ** kk * (1 - prob) ** (trials - kk);
    return Number.isFinite(val) ? val.toExponential(4) : "";
  }, [p, n, k]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Binomial Probability Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-3"><Field id="bp" label="p (success)" value={p} onChange={setP} /><Field id="bn" label="n trials" value={n} onChange={setN} /><Field id="bk" label="k successes" value={k} onChange={setK} /><div className="md:col-span-3"><Field id="br" label="Probability mass" value={pmf} onChange={()=>{}} /></div></CardContent></Card>; }
