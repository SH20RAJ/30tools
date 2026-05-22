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

export default function AdsenseCalculator() {
  return <AdsenseCalcInner />;
}

function AdsenseCalcInner() {
  const [rpm, setRpm] = useState("4");
  const [pv, setPv] = useState("50000");
  const earn = useMemo(() => {
    const r = Number(rpm); const p = Number(pv);
    if (!Number.isFinite(r) || !Number.isFinite(p)) return "";
    return ((r * p) / 1000).toFixed(2);
  }, [rpm, pv]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />AdSense Revenue Estimator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="ar" label="RPM (USD)" value={rpm} onChange={setRpm} /><Field id="ap" label="Pageviews" value={pv} onChange={setPv} /><div className="md:col-span-2"><Field id="ae" label="Estimated earnings (USD)" value={earn} onChange={()=>{}} /></div></CardContent></Card>; }
