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

export default function CpmCalculator() {
  return <CpmCalcInner />;
}

function CpmCalcInner() {
  const [imp, setImp] = useState("100000");
  const [cost, setCost] = useState("500");
  const cpm = useMemo(() => {
    const i = Number(imp); const c = Number(cost);
    if (!Number.isFinite(i) || i <= 0 || !Number.isFinite(c)) return "";
    return ((c / i) * 1000).toFixed(4);
  }, [imp, cost]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />CPM Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="ci" label="Impressions" value={imp} onChange={setImp} /><Field id="cc" label="Campaign cost" value={cost} onChange={setCost} /><div className="md:col-span-2"><Field id="co" label="CPM" value={cpm} onChange={()=>{}} /></div></CardContent></Card>; }
