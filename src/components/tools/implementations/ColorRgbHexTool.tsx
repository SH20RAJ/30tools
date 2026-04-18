"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function hexToRgb(hex: string) {
	const h = hex.replace("#", "").trim();
	if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
	return {
		r: Number.parseInt(h.slice(0, 2), 16),
		g: Number.parseInt(h.slice(2, 4), 16),
		b: Number.parseInt(h.slice(4, 6), 16),
	};
}

function rgbToHex(r: number, g: number, b: number) {
	const f = (n: number) =>
		Math.max(0, Math.min(255, Math.round(n)))
			.toString(16)
			.padStart(2, "0");
	return `#${f(r)}${f(g)}${f(b)}`.toUpperCase();
}

export default function ColorRgbHexTool({ mode }: { mode: "hex-rgb" | "rgb-hex" | "color" }) {
	const [hex, setHex] = useState("#30D58C");
	const [r, setR] = useState("48");
	const [g, setG] = useState("213");
	const [b, setB] = useState("140");

	const preview = useMemo(() => {
		if (mode === "hex-rgb" || mode === "color") {
			const v = hexToRgb(hex);
			return v ? `rgb(${v.r}, ${v.g}, ${v.b})` : "Invalid hex";
		}
		const rr = Number.parseInt(r, 10);
		const gg = Number.parseInt(g, 10);
		const bb = Number.parseInt(b, 10);
		if ([rr, gg, bb].some((n) => Number.isNaN(n))) return "Invalid RGB";
		return rgbToHex(rr, gg, bb);
	}, [mode, hex, r, g, b]);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">
					{mode === "rgb-hex" ? "RGB → hex" : mode === "hex-rgb" ? "Hex → RGB" : "Color converter"}
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 max-w-lg">
				{mode === "rgb-hex" ? (
					<div className="grid grid-cols-3 gap-3">
						<div>
							<Label>R</Label>
							<Input value={r} onChange={(e) => setR(e.target.value)} />
						</div>
						<div>
							<Label>G</Label>
							<Input value={g} onChange={(e) => setG(e.target.value)} />
						</div>
						<div>
							<Label>B</Label>
							<Input value={b} onChange={(e) => setB(e.target.value)} />
						</div>
					</div>
				) : (
					<div>
						<Label>Hex</Label>
						<Input value={hex} onChange={(e) => setHex(e.target.value)} />
					</div>
				)}
				<div
					className="h-24 w-full "
					style={{
						backgroundColor:
							mode === "rgb-hex" && preview.startsWith("#") ? preview : hexToRgb(hex) ? hex : "#ccc",
					}}
				/>
				<pre className="rounded border bg-muted/40 p-3 font-mono text-sm">{preview}</pre>
			</CardContent>
		</Card>
	);
}
