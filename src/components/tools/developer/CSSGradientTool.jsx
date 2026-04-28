"use client";

import { useState, useMemo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy, Plus, Trash2, Paintbrush } from "lucide-react";

export default function CSSGradientTool() {
	const [type, setType] = useState("linear");
	const [angle, setAngle] = useState(135);
	const [stops, setStops] = useState([
		{ color: "#667eea", position: 0 },
		{ color: "#764ba2", position: 100 },
	]);

	const gradient = useMemo(() => {
		const stopsStr = stops.map((s) => `${s.color} ${s.position}%`).join(", ");
		if (type === "linear") return `linear-gradient(${angle}deg, ${stopsStr})`;
		if (type === "radial") return `radial-gradient(circle, ${stopsStr})`;
		return `conic-gradient(from ${angle}deg, ${stopsStr})`;
	}, [type, angle, stops]);

	const cssCode = `background: ${gradient};`;

	const addStop = () => {
		if (stops.length >= 8) return;
		setStops([...stops, { color: "#000000", position: 50 }]);
	};

	const removeStop = (index) => {
		if (stops.length <= 2) return;
		setStops(stops.filter((_, i) => i !== index));
	};

	const updateStop = (index, field, value) => {
		const updated = [...stops];
		updated[index] = { ...updated[index], [field]: value };
		setStops(updated);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg flex items-center gap-2">
					<Paintbrush className="h-5 w-5 text-primary" />
					CSS Gradient Generator
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Preview */}
				<div
					className="w-full h-48 rounded-xl border border-border/50 shadow-inner"
					style={{ background: gradient }}
				/>

				{/* Controls */}
				<div className="grid grid-cols-2 gap-3">
					<div className="space-y-1">
						<label className="text-xs font-medium text-muted-foreground">Type</label>
						<select
							value={type}
							onChange={(e) => setType(e.target.value)}
							className="w-full h-10 px-3 rounded-md border bg-background text-sm"
						>
							<option value="linear">Linear</option>
							<option value="radial">Radial</option>
							<option value="conic">Conic</option>
						</select>
					</div>
					{type !== "radial" && (
						<div className="space-y-1">
							<label className="text-xs font-medium text-muted-foreground">Angle: {angle}°</label>
							<input
								type="range"
								min="0"
								max="360"
								value={angle}
								onChange={(e) => setAngle(Number(e.target.value))}
								className="w-full mt-3"
							/>
						</div>
					)}
				</div>

				{/* Color Stops */}
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<label className="text-xs font-medium text-muted-foreground">Color Stops</label>
						<Button variant="ghost" size="sm" onClick={addStop} disabled={stops.length >= 8}>
							<Plus className="h-3.5 w-3.5 mr-1" /> Add
						</Button>
					</div>
					{stops.map((stop, i) => (
						<div key={i} className="flex items-center gap-2">
							<input
								type="color"
								value={stop.color}
								onChange={(e) => updateStop(i, "color", e.target.value)}
								className="w-10 h-10 rounded cursor-pointer border-0"
							/>
							<Input
								value={stop.color}
								onChange={(e) => updateStop(i, "color", e.target.value)}
								className="flex-1 font-mono text-sm"
							/>
							<Input
								type="number"
								min="0"
								max="100"
								value={stop.position}
								onChange={(e) => updateStop(i, "position", Number(e.target.value))}
								className="w-20 text-sm"
							/>
							<span className="text-xs text-muted-foreground">%</span>
							{stops.length > 2 && (
								<Button variant="ghost" size="sm" onClick={() => removeStop(i)} className="h-8 w-8 p-0">
									<Trash2 className="h-3.5 w-3.5" />
								</Button>
							)}
						</div>
					))}
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
