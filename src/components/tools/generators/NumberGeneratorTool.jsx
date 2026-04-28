"use client";

import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy, Dices, RefreshCw } from "lucide-react";

export default function NumberGeneratorTool() {
	const [min, setMin] = useState("1");
	const [max, setMax] = useState("100");
	const [count, setCount] = useState("5");
	const [unique, setUnique] = useState(true);
	const [results, setResults] = useState([]);

	const generate = useCallback(() => {
		const lo = Math.floor(Number(min) || 0);
		const hi = Math.floor(Number(max) || 100);
		const n = Math.max(1, Math.min(1000, Math.floor(Number(count) || 1)));

		if (lo >= hi) {
			toast.error("Min must be less than max");
			return;
		}

		if (unique && n > hi - lo + 1) {
			toast.error("Not enough unique numbers in range");
			return;
		}

		const nums = [];
		const used = new Set();

		for (let i = 0; i < n; i++) {
			let val;
			do {
				val = lo + Math.floor(Math.random() * (hi - lo + 1));
			} while (unique && used.has(val));
			used.add(val);
			nums.push(val);
		}

		setResults(nums);
		toast.success(`Generated ${n} number${n > 1 ? "s" : ""}!`);
	}, [min, max, count, unique]);

	const output = results.join(", ");

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg flex items-center gap-2">
					<Dices className="h-5 w-5 text-primary" />
					Random Number Generator
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="grid grid-cols-3 gap-3">
					<div className="space-y-1">
						<label className="text-xs font-medium text-muted-foreground">Min</label>
						<Input type="number" value={min} onChange={(e) => setMin(e.target.value)} />
					</div>
					<div className="space-y-1">
						<label className="text-xs font-medium text-muted-foreground">Max</label>
						<Input type="number" value={max} onChange={(e) => setMax(e.target.value)} />
					</div>
					<div className="space-y-1">
						<label className="text-xs font-medium text-muted-foreground">Count</label>
						<Input type="number" min="1" max="1000" value={count} onChange={(e) => setCount(e.target.value)} />
					</div>
				</div>

				<label className="flex items-center gap-2 text-sm cursor-pointer">
					<input
						type="checkbox"
						checked={unique}
						onChange={(e) => setUnique(e.target.checked)}
						className="rounded"
					/>
					Unique numbers only
				</label>

				<div className="flex gap-2">
					<Button onClick={generate} className="gap-2">
						<RefreshCw className="h-4 w-4" />
						Generate
					</Button>
					{results.length > 0 && (
						<Button
							variant="outline"
							onClick={() => {
								navigator.clipboard.writeText(output);
								toast.success("Copied!");
							}}
							className="gap-2"
						>
							<Copy className="h-4 w-4" />
							Copy
						</Button>
					)}
				</div>

				{results.length > 0 && (
					<Textarea readOnly className="min-h-[120px] font-mono text-sm bg-muted/30" value={output} />
				)}

				{results.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{results.map((n, i) => (
							<span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono font-medium">
								{n}
							</span>
						))}
					</div>
				)}
			</CardContent>
		</Card>
	);
}
