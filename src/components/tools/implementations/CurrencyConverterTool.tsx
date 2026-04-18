"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function CurrencyConverterTool() {
	const [amount, setAmount] = useState("100");
	const [from, setFrom] = useState("USD");
	const [to, setTo] = useState("EUR");
	const [out, setOut] = useState("");

	const run = async () => {
		try {
			const r = await fetch(
				`https://api.frankfurter.app/latest?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`,
			);
			const j = (await r.json()) as { rates?: Record<string, number> };
			const rate = j.rates?.[to];
			if (!rate) throw new Error("No rate");
			const v = Number.parseFloat(amount.replace(/,/g, ""));
			if (!Number.isFinite(v)) throw new Error("Bad amount");
			setOut(`${v} ${from} ≈ ${(v * rate).toFixed(4)} ${to} (ECB via Frankfurter)`);
			toast.success("Updated");
		} catch {
			toast.error("Could not load rates");
			setOut("");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">Currency converter</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 max-w-md">
				<div className="space-y-2">
					<Label>Amount</Label>
					<Input value={amount} onChange={(e) => setAmount(e.target.value)} />
				</div>
				<div className="grid grid-cols-2 gap-3">
					<div>
						<Label>From</Label>
						<Input value={from} onChange={(e) => setFrom(e.target.value.toUpperCase())} />
					</div>
					<div>
						<Label>To</Label>
						<Input value={to} onChange={(e) => setTo(e.target.value.toUpperCase())} />
					</div>
				</div>
				<Button type="button" onClick={run}>
					Convert
				</Button>
				<pre className="rounded border bg-muted/40 p-3 text-sm">{out}</pre>
			</CardContent>
		</Card>
	);
}
