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

export default function AgeCalculator() {
  return <AgeCalcInner />;
}

function AgeCalcInner() {
  const [dob, setDob] = useState("2000-01-01");
  const age = useMemo(() => {
    const t = Date.parse(dob);
    if (Number.isNaN(t)) return "";
    const diff = Date.now() - t;
    if (diff < 0) return "";
    return `${Math.floor(diff / (365.25 * 24 * 3600 * 1000))} years (approx.)`;
  }, [dob]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Age Calculator</CardTitle></CardHeader><CardContent className="space-y-4"><Field id="ad" label="Date of birth" value={dob} onChange={setDob} type="date" /><Field id="aa" label="Approximate age" value={age} onChange={()=>{}} /></CardContent></Card>; }
