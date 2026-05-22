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

export default function CurrencyConverter() {
  return <CurrencyInner />;
}

import { toast } from "sonner";
function CurrencyInner() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [rates, setRates] = useState(null);
  const [out, setOut] = useState("");
  const load = async () => {
    try {
      const res = await fetch(`https://api.frankfurter.app/latest?from=${encodeURIComponent(from)}`);
      if (!res.ok) throw new Error("rate fetch failed");
      const data = await res.json();
      setRates(data.rates);
      const r = data.rates[to];
      const a = Number(amount);
      if (!Number.isFinite(a) || r === undefined) { setOut(""); return; }
      setOut((a * r).toFixed(4));
      toast.success("Rates updated");
    } catch { toast.error("Could not load exchange rates"); }
  };
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Currency Converter</CardTitle></CardHeader><CardContent className="space-y-4"><div className="grid gap-4 md:grid-cols-3"><Field id="ca" label="Amount" value={amount} onChange={setAmount} /><Field id="cf" label="From (ISO)" value={from} onChange={setFrom} /><Field id="ct" label="To (ISO)" value={to} onChange={setTo} /></div><Button type="button" onClick={load}>Convert</Button><Field id="cr" label="Result" value={out} onChange={()=>{}} /><p className="text-xs text-muted-foreground">Live rates via Frankfurter (ECB).</p></CardContent></Card>; }
