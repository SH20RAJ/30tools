"use client";

import { ArrowLeftRight, Copy, Info } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import type { PhysicalPreset } from "./physicalPresets";

type Props = {
	preset: PhysicalPreset;
};

function formatNumber(n: number): string {
	if (!Number.isFinite(n)) return "—";
	const abs = Math.abs(n);
	if (abs >= 1e9 || (abs > 0 && abs < 1e-6))
		return n.toExponential(6).replace(/\.?0+e/, "e");
	return Number(n.toPrecision(12)).toString();
}

export default function PhysicalUnitConverter({ preset }: Props) {
	const [fromId, setFromId] = useState(preset.defaultFrom);
	const [toId, setToId] = useState(preset.defaultTo);
	const [raw, setRaw] = useState("1");

	const fromUnit = useMemo(
		() => preset.units.find((u) => u.id === fromId) ?? preset.units[0],
		[fromId, preset.units],
	);
	const toUnit = useMemo(
		() => preset.units.find((u) => u.id === toId) ?? preset.units[1],
		[toId, preset.units],
	);

	const output = useMemo(() => {
		const v = Number(String(raw).replace(/,/g, ""));
		if (raw.trim() === "" || Number.isNaN(v)) return "";
		const base = fromUnit.toBase(v);
		return formatNumber(toUnit.fromBase(base));
	}, [raw, fromUnit, toUnit]);

	const swap = () => {
		setFromId(toId);
		setToId(fromId);
		setRaw(output || raw);
	};

	return (
		<Card className="border-border/80 shadow-sm">
			<CardHeader className="space-y-1">
				<CardTitle className="text-xl tracking-tight">{preset.title}</CardTitle>
				<CardDescription>{preset.description}</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="flex items-start gap-2 sm text-muted-foreground">
					<Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
					<p>
						All math runs in your browser. For temperature, conversions use ITS-90
						consistent thermodynamic offsets; for data sizes, both decimal (1000) and
						binary (1024) labels are included where applicable.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-end">
					<div className="space-y-2">
						<Label htmlFor="from-unit">From</Label>
						<Select value={fromId} onValueChange={setFromId}>
							<SelectTrigger id="from-unit" className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{preset.units.map((u) => (
									<SelectItem key={u.id} value={u.id}>
										{u.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<Input
							inputMode="decimal"
							value={raw}
							onChange={(e) => setRaw(e.target.value)}
							className="font-mono text-lg"
							placeholder="Enter a value"
							aria-label="Value to convert"
						/>
					</div>

					<div className="flex justify-center pb-1 md:pb-8">
						<Button
							type="button"
							variant="outline"
							size="icon"
							className=""
							onClick={swap}
							aria-label="Swap units"
						>
							<ArrowLeftRight className="h-4 w-4" />
						</Button>
					</div>

					<div className="space-y-2">
						<Label htmlFor="to-unit">To</Label>
						<Select value={toId} onValueChange={setToId}>
							<SelectTrigger id="to-unit" className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{preset.units.map((u) => (
									<SelectItem key={u.id} value={u.id}>
										{u.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<div className="flex gap-2">
							<Input
								readOnly
								value={output}
								className="font-mono text-lg bg-muted/40"
								placeholder="Result"
								aria-label="Conversion result"
							/>
							<Button
								type="button"
								variant="secondary"
								size="icon"
								disabled={!output}
								onClick={() => {
									navigator.clipboard.writeText(output);
									toast.success("Copied result");
								}}
								aria-label="Copy result"
							>
								<Copy className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
