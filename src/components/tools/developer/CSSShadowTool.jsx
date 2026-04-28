"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy, Layers } from "lucide-react";

export default function CSSShadowTool() {
	const [hOffset, setHOffset] = useState(4);
	const [vOffset, setVOffset] = useState(4);
	const [blur, setBlur] = useState(16);
	const [spread, setSpread] = useState(0);
	const [color, setColor] = useState("#000000");
	const [opacity, setOpacity] = useState(25);
	const [inset, setInset] = useState(false);

	const shadowValue = useMemo(() => {
		const r = parseInt(color.slice(1, 3), 16);
		const g = parseInt(color.slice(3, 5), 16);
		const b = parseInt(color.slice(5, 7), 16);
		const a = (opacity / 100).toFixed(2);
		return `${inset ? "inset " : ""}${hOffset}px ${vOffset}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${a})`;
	}, [hOffset, vOffset, blur, spread, color, opacity, inset]);

	const cssCode = `box-shadow: ${shadowValue};`;

	const sliders = [
		{ label: "Horizontal Offset", value: hOffset, set: setHOffset, min: -50, max: 50 },
		{ label: "Vertical Offset", value: vOffset, set: setVOffset, min: -50, max: 50 },
		{ label: "Blur Radius", value: blur, set: setBlur, min: 0, max: 100 },
		{ label: "Spread Radius", value: spread, set: setSpread, min: -50, max: 50 },
		{ label: "Opacity", value: opacity, set: setOpacity, min: 0, max: 100, suffix: "%" },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg flex items-center gap-2">
					<Layers className="h-5 w-5 text-primary" />
					CSS Shadow Generator
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Preview */}
				<div className="flex items-center justify-center p-12 bg-muted/20 rounded-xl">
					<div
						className="w-48 h-48 rounded-2xl bg-card border border-border/50 transition-shadow duration-300"
						style={{ boxShadow: shadowValue }}
					/>
				</div>

				{/* Sliders */}
				<div className="space-y-4">
					{sliders.map(({ label, value, set, min, max, suffix }) => (
						<div key={label} className="space-y-1">
							<div className="flex justify-between text-xs">
								<span className="font-medium text-muted-foreground">{label}</span>
								<span className="font-mono">{value}{suffix || "px"}</span>
							</div>
							<input
								type="range"
								min={min}
								max={max}
								value={value}
								onChange={(e) => set(Number(e.target.value))}
								className="w-full"
							/>
						</div>
					))}
				</div>

				{/* Color + Inset */}
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2">
						<input
							type="color"
							value={color}
							onChange={(e) => setColor(e.target.value)}
							className="w-10 h-10 rounded cursor-pointer border-0"
						/>
						<Input
							value={color}
							onChange={(e) => setColor(e.target.value)}
							className="w-28 font-mono text-sm"
						/>
					</div>
					<label className="flex items-center gap-2 text-sm cursor-pointer">
						<input
							type="checkbox"
							checked={inset}
							onChange={(e) => setInset(e.target.checked)}
							className="rounded"
						/>
						Inset
					</label>
				</div>

				{/* Output */}
				<div className="space-y-2">
					<label className="text-xs font-medium text-muted-foreground">CSS Code</label>
					<div className="relative">
						<Textarea readOnly className="min-h-[60px] font-mono text-sm bg-muted/30 pr-12" value={cssCode} />
						<Button
							variant="ghost"
							size="sm"
							className="absolute top-2 right-2"
							onClick={() => {
								navigator.clipboard.writeText(cssCode);
								toast.success("CSS copied!");
							}}
						>
							<Copy className="h-3.5 w-3.5" />
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
