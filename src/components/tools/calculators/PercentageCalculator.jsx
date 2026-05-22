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

export default function PercentageCalculator() {
  return <PctCalcInner />;
}

function PctCalcInner() {
  const [part, setPart] = useState("");
  const [whole, setWhole] = useState("");
  const out = useMemo(() => {
    const p = Number(part);
    const w = Number(whole);
    if (!Number.isFinite(p) || !Number.isFinite(w) || w === 0) return "";
    return `${((p / w) * 100).toFixed(4)}%`;
  }, [part, whole]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Percentage Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="p" label="Part" value={part} onChange={setPart} /><Field id="w" label="Whole" value={whole} onChange={setWhole} /><div className="md:col-span-2 space-y-1"><Label>Result</Label><Input readOnly className="font-mono bg-muted/40" value={out} /></div></CardContent></Card>; }
