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

export default function ConfidenceIntervalCalculator() {
  return <CiCalcInner />;
}

function CiCalcInner() {
  const [mean, setMean] = useState("50");
  const [sd, setSd] = useState("5");
  const [n, setN] = useState("30");
  const [z, setZ] = useState("1.96");
  const { lo, hi } = useMemo(() => {
    const m = Number(mean); const s = Number(sd); const nn = Number(n); const zz = Number(z);
    if (!Number.isFinite(m) || !Number.isFinite(s) || !Number.isFinite(nn) || nn <= 1 || !Number.isFinite(zz)) return { lo: "", hi: "" };
    const se = s / Math.sqrt(nn);
    return { lo: (m - zz * se).toFixed(4), hi: (m + zz * se).toFixed(4) };
  }, [mean, sd, n, z]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Confidence Interval Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="cm" label="Sample mean" value={mean} onChange={setMean} /><Field id="cs" label="Sample SD" value={sd} onChange={setSd} /><Field id="cn" label="Sample size" value={n} onChange={setN} /><Field id="cz" label="z" value={z} onChange={setZ} /><Field id="cl" label="Lower" value={lo} onChange={()=>{}} /><Field id="ch" label="Upper" value={hi} onChange={()=>{}} /></CardContent></Card>; }
