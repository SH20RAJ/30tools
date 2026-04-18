"use client";

import { useMemo, useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export type UnitPreset =
	| "length"
	| "mass"
	| "temperature"
	| "area"
	| "volume"
	| "speed"
	| "time"
	| "angle"
	| "pressure"
	| "energy"
	| "power"
	| "frequency"
	| "digital"
	| "torque"
	| "current"
	| "voltage"
	| "charge"
	| "illuminance"
	| "flowVolume"
	| "pace"
	| "dimensionless"
	| "typography"
	| "reactivePower"
	| "apparentPower";

type UnitDef = { id: string; label: string; toBase: (v: number) => number; fromBase: (v: number) => number };

function linear(f: number): Pick<UnitDef, "toBase" | "fromBase"> {
	return {
		toBase: (v: number) => v * f,
		fromBase: (v: number) => v / f,
	};
}

const K = linear(1);

function buildUnits(preset: UnitPreset): UnitDef[] {
	switch (preset) {
		case "length": {
			const m = linear(1);
			return [
				{ id: "nm", label: "Nanometer", ...linear(1e-9) },
				{ id: "mm", label: "Millimeter", ...linear(1e-3) },
				{ id: "cm", label: "Centimeter", ...linear(0.01) },
				{ id: "m", label: "Meter", ...m },
				{ id: "km", label: "Kilometer", ...linear(1000) },
				{ id: "in", label: "Inch", ...linear(0.0254) },
				{ id: "ft", label: "Foot", ...linear(0.3048) },
				{ id: "yd", label: "Yard", ...linear(0.9144) },
				{ id: "mi", label: "Mile", ...linear(1609.344) },
			];
		}
		case "mass":
			return [
				{ id: "mg", label: "Milligram", ...linear(1e-6) },
				{ id: "g", label: "Gram", ...linear(0.001) },
				{ id: "kg", label: "Kilogram", ...linear(1) },
				{ id: "oz", label: "Ounce (oz)", ...linear(0.028349523125) },
				{ id: "lb", label: "Pound (lb)", ...linear(0.45359237) },
				{ id: "st", label: "Stone", ...linear(6.35029318) },
			];
		case "temperature":
			return [
				{
					id: "C",
					label: "Celsius",
					toBase: (v) => v + 273.15,
					fromBase: (v) => v - 273.15,
				},
				{
					id: "F",
					label: "Fahrenheit",
					toBase: (v) => ((v - 32) * 5) / 9 + 273.15,
					fromBase: (v) => ((v - 273.15) * 9) / 5 + 32,
				},
				{ id: "K", label: "Kelvin", ...K },
			];
		case "area":
			return [
				{ id: "mm2", label: "Square millimeter", ...linear(1e-6) },
				{ id: "cm2", label: "Square centimeter", ...linear(1e-4) },
				{ id: "m2", label: "Square meter", ...linear(1) },
				{ id: "km2", label: "Square kilometer", ...linear(1e6) },
				{ id: "ft2", label: "Square foot", ...linear(0.09290304) },
				{ id: "ac", label: "Acre", ...linear(4046.8564224) },
				{ id: "ha", label: "Hectare", ...linear(10000) },
			];
		case "volume":
			return [
				{ id: "ml", label: "Milliliter", ...linear(1e-6) },
				{ id: "l", label: "Liter", ...linear(0.001) },
				{ id: "m3", label: "Cubic meter", ...linear(1) },
				{ id: "gal_us", label: "US gallon", ...linear(0.003785411784) },
				{ id: "ft3", label: "Cubic foot", ...linear(0.028316846592) },
				{ id: "cup_us", label: "US cup", ...linear(0.0002365882365) },
			];
		case "speed":
			return [
				{ id: "mps", label: "Meter / second", ...linear(1) },
				{ id: "kmh", label: "Kilometer / hour", ...linear(1 / 3.6) },
				{ id: "mph", label: "Mile / hour", ...linear(0.44704) },
				{ id: "kn", label: "Knot", ...linear(0.514444) },
				{ id: "fts", label: "Foot / second", ...linear(0.3048) },
			];
		case "time":
			return [
				{ id: "ns", label: "Nanosecond", ...linear(1e-9) },
				{ id: "us", label: "Microsecond", ...linear(1e-6) },
				{ id: "ms", label: "Millisecond", ...linear(0.001) },
				{ id: "s", label: "Second", ...linear(1) },
				{ id: "min", label: "Minute", ...linear(60) },
				{ id: "h", label: "Hour", ...linear(3600) },
				{ id: "d", label: "Day", ...linear(86400) },
				{ id: "wk", label: "Week", ...linear(604800) },
				{ id: "yr", label: "Year (365 d)", ...linear(31536000) },
			];
		case "angle":
			return [
				{
					id: "deg",
					label: "Degree",
					toBase: (v) => (v * Math.PI) / 180,
					fromBase: (v) => (v * 180) / Math.PI,
				},
				{ id: "rad", label: "Radian", ...K },
				{
					id: "grad",
					label: "Gradian",
					toBase: (v) => (v * Math.PI) / 200,
					fromBase: (v) => (v * 200) / Math.PI,
				},
			];
		case "pressure":
			return [
				{ id: "Pa", label: "Pascal", ...linear(1) },
				{ id: "kPa", label: "Kilopascal", ...linear(1000) },
				{ id: "bar", label: "Bar", ...linear(100000) },
				{ id: "psi", label: "PSI", ...linear(6894.757293168) },
				{ id: "atm", label: "Atmosphere", ...linear(101325) },
				{ id: "mmHg", label: "mmHg", ...linear(133.322387415) },
			];
		case "energy":
			return [
				{ id: "J", label: "Joule", ...linear(1) },
				{ id: "kJ", label: "Kilojoule", ...linear(1000) },
				{ id: "cal", label: "Calorie (therm.)", ...linear(4.184) },
				{ id: "kcal", label: "Kilocalorie", ...linear(4184) },
				{ id: "kWh", label: "Kilowatt-hour", ...linear(3.6e6) },
				{ id: "BTU", label: "BTU (ISO)", ...linear(1055.056) },
			];
		case "power":
		case "reactivePower":
		case "apparentPower":
			return [
				{ id: "W", label: preset === "reactivePower" ? "var" : preset === "apparentPower" ? "VA" : "Watt", ...linear(1) },
				{ id: "kW", label: "Kilowatt-scale", ...linear(1000) },
				{ id: "hp", label: "Mechanical HP", ...linear(745.69987158227022) },
			];
		case "frequency":
			return [
				{ id: "Hz", label: "Hertz", ...linear(1) },
				{ id: "kHz", label: "Kilohertz", ...linear(1000) },
				{ id: "MHz", label: "Megahertz", ...linear(1e6) },
				{ id: "rpm", label: "RPM", ...linear(1 / 60) },
			];
		case "digital":
			return [
				{ id: "b", label: "Bit", ...linear(0.125) },
				{ id: "B", label: "Byte", ...linear(1) },
				{ id: "KB", label: "Kilobyte (1024)", ...linear(1024) },
				{ id: "MB", label: "Megabyte (1024²)", ...linear(1024 ** 2) },
				{ id: "GB", label: "Gigabyte (1024³)", ...linear(1024 ** 3) },
			];
		case "torque":
			return [
				{ id: "Nm", label: "Newton meter", ...linear(1) },
				{ id: "lbfft", label: "Pound-foot", ...linear(1.3558179483314004) },
			];
		case "current":
			return [
				{ id: "A", label: "Ampere", ...linear(1) },
				{ id: "mA", label: "Milliampere", ...linear(0.001) },
			];
		case "voltage":
			return [
				{ id: "V", label: "Volt", ...linear(1) },
				{ id: "mV", label: "Millivolt", ...linear(0.001) },
				{ id: "kV", label: "Kilovolt", ...linear(1000) },
			];
		case "charge":
			return [
				{ id: "C", label: "Coulomb", ...linear(1) },
				{ id: "mAh", label: "Milliamp-hour (at 3.7 V)", ...linear(3.7 * 3.6) },
			];
		case "illuminance":
			return [
				{ id: "lux", label: "Lux", ...linear(1) },
				{ id: "fc", label: "Foot-candle", ...linear(10.76391041671) },
			];
		case "flowVolume":
			return [
				{ id: "m3s", label: "m³ / second", ...linear(1) },
				{ id: "Lmin", label: "Liter / minute", ...linear(1 / 60000) },
				{ id: "gpm", label: "US gallon / minute", ...linear(6.30901964e-5) },
			];
		case "pace": {
			// Base unit: seconds per meter (s/m)
			return [
				{
					id: "spm",
					label: "Seconds / meter",
					toBase: (v) => v,
					fromBase: (v) => v,
				},
				{
					id: "mpkm",
					label: "Minutes / kilometer",
					toBase: (v) => (v * 60) / 1000,
					fromBase: (v) => (v * 1000) / 60,
				},
				{
					id: "mpmi",
					label: "Minutes / mile",
					toBase: (v) => (v * 60) / 1609.344,
					fromBase: (v) => (v * 1609.344) / 60,
				},
			];
		}
		case "dimensionless":
			return [
				{ id: "ratio", label: "Ratio (×1)", ...linear(1) },
				{ id: "pct", label: "Percent", ...linear(0.01) },
				{ id: "ppm", label: "ppm", ...linear(1e-6) },
				{ id: "ppb", label: "ppb", ...linear(1e-9) },
			];
		case "typography":
			return [
				{ id: "px", label: "CSS px", ...linear(1) },
				{ id: "rem16", label: "rem (1 rem = 16px)", ...linear(16) },
				{ id: "em16", label: "em (1 em = 16px)", ...linear(16) },
			];
		default: {
			const _x: never = preset;
			return _x;
		}
	}
}

export default function UniversalUnitConverter({ preset }: { preset: UnitPreset }) {
	const units = useMemo(() => buildUnits(preset), [preset]);
	const [fromId, setFromId] = useState(units[0]?.id ?? "m");
	const [toId, setToId] = useState(units[1]?.id ?? units[0]?.id ?? "m");
	const [input, setInput] = useState("1");

	const from = units.find((u) => u.id === fromId) ?? units[0];
	const to = units.find((u) => u.id === toId) ?? units[0];

	const output = useMemo(() => {
		const raw = Number.parseFloat(String(input).replace(/,/g, ""));
		if (Number.isNaN(raw) || !from || !to) return "";
		const base = from.toBase(raw);
		const v = to.fromBase(base);
		if (!Number.isFinite(v)) return "";
		const abs = Math.abs(v);
		const digits = abs >= 1000 || (abs > 0 && abs < 0.001) ? 6 : 8;
		return String(Number(v.toPrecision(digits)));
	}, [input, from, to]);

	return (
		<Card className="border-border/60 shadow-sm">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<ArrowRightLeft className="h-5 w-5 text-primary" />
					Unit converter
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="space-y-2">
						<Label className="" htmlFor="from-u">
							From
						</Label>
						<Select value={fromId} onValueChange={setFromId}>
							<SelectTrigger className="" id="from-u">
								<SelectValue />
							</SelectTrigger>
							<SelectContent className="">
								{units.map((u) => (
									<SelectItem className="" key={u.id} value={u.id}>
										{u.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<Label className="" htmlFor="to-u">
							To
						</Label>
						<Select value={toId} onValueChange={setToId}>
							<SelectTrigger className="" id="to-u">
								<SelectValue />
							</SelectTrigger>
							<SelectContent className="">
								{units.map((u) => (
									<SelectItem className="" key={`t-${u.id}`} value={u.id}>
										{u.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					<div className="space-y-2">
						<Label className="" htmlFor="val-in">
							Value
						</Label>
						<Input
							className=""
							id="val-in"
							inputMode="decimal"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Enter a number"
						/>
					</div>
					<div className="space-y-2">
						<Label className="" htmlFor="val-out">
							Result
						</Label>
						<Input className="bg-muted/40 font-mono" id="val-out" readOnly value={output} />
					</div>
				</div>
				<p className="text-xs text-muted-foreground">
					Conversions run in your browser. Electrical “var” and “VA” presets use the same numeric
					scaling as watts for quick estimates — always confirm with domain-specific standards when
					it matters.
				</p>
			</CardContent>
		</Card>
	);
}
