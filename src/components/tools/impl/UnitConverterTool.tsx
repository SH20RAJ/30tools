"use client";

import { useEffect, useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

type UnitDef = { id: string; label: string; toBase: (v: number) => number; fromBase: (v: number) => number };

function linearUnits(defs: { id: string; label: string; factorToM: number }[]): UnitDef[] {
	return defs.map((d) => ({
		id: d.id,
		label: d.label,
		toBase: (v) => v * d.factorToM,
		fromBase: (v) => v / d.factorToM,
	}));
}

const LENGTH = linearUnits([
	{ id: "mm", label: "Millimeter", factorToM: 0.001 },
	{ id: "cm", label: "Centimeter", factorToM: 0.01 },
	{ id: "m", label: "Meter", factorToM: 1 },
	{ id: "km", label: "Kilometer", factorToM: 1000 },
	{ id: "in", label: "Inch", factorToM: 0.0254 },
	{ id: "ft", label: "Foot", factorToM: 0.3048 },
	{ id: "yd", label: "Yard", factorToM: 0.9144 },
	{ id: "mi", label: "Mile", factorToM: 1609.344 },
]);

const WEIGHT = linearUnits([
	{ id: "mg", label: "Milligram", factorToM: 1e-6 },
	{ id: "g", label: "Gram", factorToM: 0.001 },
	{ id: "kg", label: "Kilogram", factorToM: 1 },
	{ id: "t", label: "Metric ton", factorToM: 1000 },
	{ id: "oz", label: "Ounce", factorToM: 0.0283495 },
	{ id: "lb", label: "Pound", factorToM: 0.453592 },
]);

const SPEED = linearUnits([
	{ id: "mps", label: "Meters / second", factorToM: 1 },
	{ id: "kph", label: "Kilometers / hour", factorToM: 1 / 3.6 },
	{ id: "mph", label: "Miles / hour", factorToM: 0.44704 },
	{ id: "knot", label: "Knot", factorToM: 0.514444 },
]);

const AREA = linearUnits([
	{ id: "mm2", label: "mm²", factorToM: 1e-6 },
	{ id: "cm2", label: "cm²", factorToM: 1e-4 },
	{ id: "m2", label: "m²", factorToM: 1 },
	{ id: "ha", label: "Hectare", factorToM: 10000 },
	{ id: "km2", label: "km²", factorToM: 1e6 },
	{ id: "ft2", label: "ft²", factorToM: 0.092903 },
	{ id: "ac", label: "Acre", factorToM: 4046.86 },
]);

const VOLUME = linearUnits([
	{ id: "ml", label: "Milliliter", factorToM: 1e-6 },
	{ id: "l", label: "Liter", factorToM: 0.001 },
	{ id: "m3", label: "m³", factorToM: 1 },
	{ id: "gal_us", label: "US gallon", factorToM: 0.00378541 },
	{ id: "ft3", label: "ft³", factorToM: 0.0283168 },
]);

const PRESSURE = linearUnits([
	{ id: "pa", label: "Pascal", factorToM: 1 },
	{ id: "kpa", label: "Kilopascal", factorToM: 1000 },
	{ id: "bar", label: "Bar", factorToM: 100000 },
	{ id: "psi", label: "PSI", factorToM: 6894.76 },
	{ id: "atm", label: "Atmosphere", factorToM: 101325 },
]);

const ENERGY = linearUnits([
	{ id: "j", label: "Joule", factorToM: 1 },
	{ id: "kj", label: "Kilojoule", factorToM: 1000 },
	{ id: "cal", label: "Calorie", factorToM: 4.184 },
	{ id: "kcal", label: "Kilocalorie", factorToM: 4184 },
	{ id: "wh", label: "Watt-hour", factorToM: 3600 },
	{ id: "kwh", label: "Kilowatt-hour", factorToM: 3.6e6 },
]);

const POWER = linearUnits([
	{ id: "w", label: "Watt", factorToM: 1 },
	{ id: "kw", label: "Kilowatt", factorToM: 1000 },
	{ id: "hp", label: "Mechanical HP", factorToM: 745.7 },
]);

const FREQUENCY: UnitDef[] = [
	{ id: "hz", label: "Hertz", toBase: (v) => v, fromBase: (v) => v },
	{ id: "khz", label: "Kilohertz", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
	{ id: "mhz", label: "Megahertz", toBase: (v) => v * 1e6, fromBase: (v) => v / 1e6 },
	{ id: "rpm", label: "RPM", toBase: (v) => v / 60, fromBase: (v) => v * 60 },
];

const VOLTAGE = linearUnits([
	{ id: "v", label: "Volt", factorToM: 1 },
	{ id: "mv", label: "Millivolt", factorToM: 0.001 },
	{ id: "kv", label: "Kilovolt", factorToM: 1000 },
]);

const CURRENT = linearUnits([
	{ id: "a", label: "Ampere", factorToM: 1 },
	{ id: "ma", label: "Milliampere", factorToM: 0.001 },
]);

const CHARGE = linearUnits([
	{ id: "c", label: "Coulomb", factorToM: 1 },
	{ id: "mah", label: "Milliamp-hour", factorToM: 3.6 },
]);

const ILLUMINANCE = linearUnits([
	{ id: "lux", label: "Lux", factorToM: 1 },
	{ id: "fc", label: "Foot-candle", factorToM: 10.7639 },
]);

const TORQUE = linearUnits([
	{ id: "nm", label: "Newton-meter", factorToM: 1 },
	{ id: "lbft", label: "Pound-foot", factorToM: 1.35582 },
]);

const ANGLE: UnitDef[] = [
	{ id: "deg", label: "Degrees", toBase: (v) => (v * Math.PI) / 180, fromBase: (v) => (v * 180) / Math.PI },
	{ id: "rad", label: "Radians", toBase: (v) => v, fromBase: (v) => v },
	{ id: "rev", label: "Revolutions", toBase: (v) => v * 2 * Math.PI, fromBase: (v) => v / (2 * Math.PI) },
];

const PACE: UnitDef[] = [
	{ id: "mpkm", label: "Minutes / km", toBase: (v) => v, fromBase: (v) => v },
	{
		id: "mpmi",
		label: "Minutes / mile",
		toBase: (v) => v / 1.60934,
		fromBase: (v) => v * 1.60934,
	},
];

const DIGITAL: UnitDef[] = [
	{ id: "b", label: "Bits", toBase: (v) => v / 8, fromBase: (v) => v * 8 },
	{ id: "B", label: "Bytes", toBase: (v) => v, fromBase: (v) => v },
	{ id: "KB", label: "KB (1024)", toBase: (v) => v * 1024, fromBase: (v) => v / 1024 },
	{ id: "MB", label: "MB", toBase: (v) => v * 1024 ** 2, fromBase: (v) => v / 1024 ** 2 },
	{ id: "GB", label: "GB", toBase: (v) => v * 1024 ** 3, fromBase: (v) => v / 1024 ** 3 },
	{ id: "TB", label: "TB", toBase: (v) => v * 1024 ** 4, fromBase: (v) => v / 1024 ** 4 },
];

const PARTS: UnitDef[] = [
	{ id: "ratio", label: "Ratio (0–1)", toBase: (v) => v * 1e6, fromBase: (v) => v / 1e6 },
	{ id: "pct", label: "Percent", toBase: (v) => v * 1e4, fromBase: (v) => v / 1e4 },
	{ id: "ppm", label: "ppm", toBase: (v) => v, fromBase: (v) => v },
	{ id: "ppb", label: "ppb", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
];

const REACTIVE_POWER = linearUnits([
	{ id: "var", label: "VAR", factorToM: 1 },
	{ id: "kvar", label: "kVAR", factorToM: 1000 },
]);

const APPARENT_POWER = linearUnits([
	{ id: "va", label: "VA", factorToM: 1 },
	{ id: "kva", label: "kVA", factorToM: 1000 },
]);

const REACTIVE_ENERGY = linearUnits([
	{ id: "varh", label: "VAR-hour", factorToM: 1 },
	{ id: "kvarh", label: "kVARh", factorToM: 1000 },
]);

const FLOW = linearUnits([
	{ id: "lps", label: "Liters / second", factorToM: 0.001 },
	{ id: "lpm", label: "Liters / minute", factorToM: 0.001 / 60 },
	{ id: "m3s", label: "m³ / second", factorToM: 1 },
	{ id: "gpm", label: "US gal / minute", factorToM: 0.00378541 / 60 },
]);

const EACH: UnitDef[] = [
	{ id: "ea", label: "Each (piece)", toBase: (v) => v, fromBase: (v) => v },
	{ id: "pair", label: "Pair (2 pc)", toBase: (v) => v * 2, fromBase: (v) => v / 2 },
	{ id: "dozen", label: "Dozen (12 pc)", toBase: (v) => v * 12, fromBase: (v) => v / 12 },
	{ id: "gross", label: "Gross (144 pc)", toBase: (v) => v * 144, fromBase: (v) => v / 144 },
];

const TOOL_UNITS: Record<string, UnitDef[]> = {
	"length-converter": LENGTH,
	"weight-converter": WEIGHT,
	"speed-converter": SPEED,
	"area-converter": AREA,
	"volume-converter": VOLUME,
	"pressure-converter": PRESSURE,
	"energy-converter": ENERGY,
	"power-converter": POWER,
	"frequency-converter": FREQUENCY,
	"voltage-converter": VOLTAGE,
	"current-converter": CURRENT,
	"charge-converter": CHARGE,
	"illuminance-converter": ILLUMINANCE,
	"torque-converter": TORQUE,
	"angle-converter": ANGLE,
	"pace-converter": PACE,
	"digital-converter": DIGITAL,
	"parts-per-converter": PARTS,
	"volumetric-flow-rate-converter": FLOW,
	"reactive-power-converter": REACTIVE_POWER,
	"apparent-power-converter": APPARENT_POWER,
	"reactive-energy-converter": REACTIVE_ENERGY,
	"each-converter": EACH,
};

const TIME: UnitDef[] = [
	{ id: "ms", label: "Millisecond", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
	{ id: "s", label: "Second", toBase: (v) => v, fromBase: (v) => v },
	{ id: "min", label: "Minute", toBase: (v) => v * 60, fromBase: (v) => v / 60 },
	{ id: "h", label: "Hour", toBase: (v) => v * 3600, fromBase: (v) => v / 3600 },
	{ id: "d", label: "Day", toBase: (v) => v * 86400, fromBase: (v) => v / 86400 },
	{ id: "wk", label: "Week", toBase: (v) => v * 604800, fromBase: (v) => v / 604800 },
];

TOOL_UNITS["time-converter"] = TIME;

function tempConvert(value: number, from: string, to: string): number {
	const toK = (v: number, f: string) => {
		if (f === "K") return v;
		if (f === "C") return v + 273.15;
		if (f === "F") return ((v - 32) * 5) / 9 + 273.15;
		return v;
	};
	const fromK = (k: number, t: string) => {
		if (t === "K") return k;
		if (t === "C") return k - 273.15;
		if (t === "F") return ((k - 273.15) * 9) / 5 + 32;
		return k;
	};
	return fromK(toK(value, from), to);
}

export function UnitConverterTool({ toolId }: { toolId: string }) {
	const units = TOOL_UNITS[toolId];
	const [fromId, setFromId] = useState(
		toolId === "temperature-converter" ? "C" : units?.[0]?.id ?? "m",
	);
	const [toId, setToId] = useState(
		toolId === "temperature-converter" ? "F" : units?.[1]?.id ?? units?.[0]?.id ?? "m",
	);
	const [input, setInput] = useState("1");
	const [out, setOut] = useState("");

	useEffect(() => {
		const raw = Number.parseFloat(input.replace(/,/g, ""));
		if (Number.isNaN(raw)) {
			setOut("");
			return;
		}
		if (toolId === "temperature-converter") {
			setOut(String(tempConvert(raw, fromId, toId)));
			return;
		}
		if (!units) return;
		const fromU = units.find((u) => u.id === fromId);
		const toU = units.find((u) => u.id === toId);
		if (!fromU || !toU) return;
		const base = fromU.toBase(raw);
		const res = toU.fromBase(base);
		setOut(Number.isFinite(res) ? String(res) : "");
	}, [input, fromId, toId, units, toolId]);

	if (toolId === "temperature-converter") {
		const opts = [
			{ id: "C", label: "Celsius" },
			{ id: "F", label: "Fahrenheit" },
			{ id: "K", label: "Kelvin" },
		];
		return (
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<ArrowRightLeft className="h-5 w-5" />
						Temperature converter
					</CardTitle>
					<CardDescription>Convert between °C, °F, and K in your browser.</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4 md:grid-cols-3">
					<div className="space-y-2">
						<Label>From</Label>
						<Select value={fromId} onValueChange={setFromId}>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{opts.map((o) => (
									<SelectItem key={o.id} value={o.id}>
										{o.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<Label>To</Label>
						<Select value={toId} onValueChange={setToId}>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{opts.map((o) => (
									<SelectItem key={o.id} value={o.id}>
										{o.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2 md:col-span-3">
						<Label>Value</Label>
						<Input value={input} onChange={(e) => setInput(e.target.value)} className="font-mono" />
					</div>
					<div className="md:col-span-3 rounded-lg border bg-muted/40 p-4 font-mono text-lg">
						Result: {out || "—"}
					</div>
				</CardContent>
			</Card>
		);
	}

	if (!units) {
		return null;
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<ArrowRightLeft className="h-5 w-5" />
					Unit converter
				</CardTitle>
				<CardDescription>Pick units and enter a number. Conversions run locally.</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-3">
				<div className="space-y-2">
					<Label>From</Label>
					<Select value={fromId} onValueChange={setFromId}>
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{units.map((u) => (
								<SelectItem key={u.id} value={u.id}>
									{u.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label>To</Label>
					<Select value={toId} onValueChange={setToId}>
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{units.map((u) => (
								<SelectItem key={u.id} value={u.id}>
									{u.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2 md:col-span-3">
					<Label>Value</Label>
					<Input value={input} onChange={(e) => setInput(e.target.value)} className="font-mono" />
				</div>
				<div className="flex flex-wrap gap-2 md:col-span-3">
					<Button
						type="button"
						variant="secondary"
						size="sm"
						onClick={() => {
							navigator.clipboard.writeText(out);
							toast.success("Copied");
						}}
						disabled={!out}
					>
						Copy result
					</Button>
				</div>
				<div className="md:col-span-3 rounded-lg border bg-muted/40 p-4 font-mono text-lg">
					Result: {out || "—"}
				</div>
			</CardContent>
		</Card>
	);
}

export function isUnitTool(toolId: string) {
	return toolId === "temperature-converter" || toolId in TOOL_UNITS;
}
