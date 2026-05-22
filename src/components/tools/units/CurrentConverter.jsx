"use client";

import { useMemo, useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type UnitDef = { id: string; label: string; toBase: (v: number) => number; fromBase: (v: number) => number };
function linear(f: number) { return { toBase: (v: number) => v * f, fromBase: (v: number) => v / f }; }

function buildUnits() {
  switch ("current") {
    case "length": return [
      { id: "nm", label: "Nanometer", ...linear(1e-9) }, { id: "mm", label: "Millimeter", ...linear(1e-3) },
      { id: "cm", label: "Centimeter", ...linear(0.01) }, { id: "m", label: "Meter", ...linear(1) },
      { id: "km", label: "Kilometer", ...linear(1000) }, { id: "in", label: "Inch", ...linear(0.0254) },
      { id: "ft", label: "Foot", ...linear(0.3048) }, { id: "yd", label: "Yard", ...linear(0.9144) },
      { id: "mi", label: "Mile", ...linear(1609.344) },
    ];
    case "mass": return [
      { id: "mg", label: "Milligram", ...linear(1e-6) }, { id: "g", label: "Gram", ...linear(0.001) },
      { id: "kg", label: "Kilogram", ...linear(1) }, { id: "oz", label: "Ounce", ...linear(0.028349523125) },
      { id: "lb", label: "Pound", ...linear(0.45359237) }, { id: "st", label: "Stone", ...linear(6.35029318) },
    ];
    case "temperature": return [
      { id: "C", label: "Celsius", toBase: (v) => v + 273.15, fromBase: (v) => v - 273.15 },
      { id: "F", label: "Fahrenheit", toBase: (v) => ((v - 32) * 5) / 9 + 273.15, fromBase: (v) => ((v - 273.15) * 9) / 5 + 32 },
      { id: "K", label: "Kelvin", ...linear(1) },
    ];
    case "area": return [
      { id: "mm2", label: "Square mm", ...linear(1e-6) }, { id: "cm2", label: "Square cm", ...linear(1e-4) },
      { id: "m2", label: "Square m", ...linear(1) }, { id: "km2", label: "Square km", ...linear(1e6) },
      { id: "ft2", label: "Square ft", ...linear(0.09290304) }, { id: "ac", label: "Acre", ...linear(4046.8564224) },
      { id: "ha", label: "Hectare", ...linear(10000) },
    ];
    case "volume": return [
      { id: "ml", label: "Milliliter", ...linear(1e-6) }, { id: "l", label: "Liter", ...linear(0.001) },
      { id: "m3", label: "Cubic m", ...linear(1) }, { id: "gal_us", label: "US gal", ...linear(0.003785411784) },
      { id: "ft3", label: "Cubic ft", ...linear(0.028316846592) }, { id: "cup_us", label: "US cup", ...linear(0.0002365882365) },
    ];
    case "speed": return [
      { id: "mps", label: "m/s", ...linear(1) }, { id: "kmh", label: "km/h", ...linear(1 / 3.6) },
      { id: "mph", label: "mph", ...linear(0.44704) }, { id: "kn", label: "Knot", ...linear(0.514444) },
    ];
    case "time": return [
      { id: "ns", label: "Nanosecond", ...linear(1e-9) }, { id: "us", label: "Microsecond", ...linear(1e-6) },
      { id: "ms", label: "Millisecond", ...linear(0.001) }, { id: "s", label: "Second", ...linear(1) },
      { id: "min", label: "Minute", ...linear(60) }, { id: "h", label: "Hour", ...linear(3600) },
      { id: "d", label: "Day", ...linear(86400) }, { id: "wk", label: "Week", ...linear(604800) },
      { id: "yr", label: "Year", ...linear(31536000) },
    ];
    case "angle": return [
      { id: "deg", label: "Degree", toBase: (v) => (v * Math.PI) / 180, fromBase: (v) => (v * 180) / Math.PI },
      { id: "rad", label: "Radian", ...linear(1) },
      { id: "grad", label: "Gradian", toBase: (v) => (v * Math.PI) / 200, fromBase: (v) => (v * 200) / Math.PI },
    ];
    case "pressure": return [
      { id: "Pa", label: "Pascal", ...linear(1) }, { id: "kPa", label: "Kilopascal", ...linear(1000) },
      { id: "bar", label: "Bar", ...linear(100000) }, { id: "psi", label: "PSI", ...linear(6894.757293168) },
      { id: "atm", label: "Atmosphere", ...linear(101325) }, { id: "mmHg", label: "mmHg", ...linear(133.322387415) },
    ];
    case "energy": return [
      { id: "J", label: "Joule", ...linear(1) }, { id: "kJ", label: "Kilojoule", ...linear(1000) },
      { id: "cal", label: "Calorie", ...linear(4.184) }, { id: "kcal", label: "Kilocalorie", ...linear(4184) },
      { id: "kWh", label: "kWh", ...linear(3.6e6) }, { id: "BTU", label: "BTU", ...linear(1055.056) },
    ];
    case "power": case "reactivePower": case "apparentPower": return [
      { id: "W", label: "Watt", ...linear(1) },
      { id: "kW", label: "Kilowatt-scale", ...linear(1000) }, { id: "hp", label: "HP", ...linear(745.69987158227022) },
    ];
    case "frequency": return [
      { id: "Hz", label: "Hertz", ...linear(1) }, { id: "kHz", label: "Kilohertz", ...linear(1000) },
      { id: "MHz", label: "Megahertz", ...linear(1e6) }, { id: "rpm", label: "RPM", ...linear(1 / 60) },
    ];
    case "digital": return [
      { id: "b", label: "Bit", ...linear(0.125) }, { id: "B", label: "Byte", ...linear(1) },
      { id: "KB", label: "KB", ...linear(1024) }, { id: "MB", label: "MB", ...linear(1024 ** 2) },
      { id: "GB", label: "GB", ...linear(1024 ** 3) },
    ];
    case "torque": return [
      { id: "Nm", label: "Newton meter", ...linear(1) }, { id: "lbfft", label: "Pound-foot", ...linear(1.3558179483314004) },
    ];
    case "current": return [
      { id: "A", label: "Ampere", ...linear(1) }, { id: "mA", label: "Milliampere", ...linear(0.001) },
    ];
    case "voltage": return [
      { id: "V", label: "Volt", ...linear(1) }, { id: "mV", label: "Millivolt", ...linear(0.001) },
      { id: "kV", label: "Kilovolt", ...linear(1000) },
    ];
    case "charge": return [
      { id: "C", label: "Coulomb", ...linear(1) }, { id: "mAh", label: "mAh (at 3.7V)", ...linear(3.7 * 3.6) },
    ];
    case "illuminance": return [
      { id: "lux", label: "Lux", ...linear(1) }, { id: "fc", label: "Foot-candle", ...linear(10.76391041671) },
    ];
    case "flowVolume": return [
      { id: "m3s", label: "m³/s", ...linear(1) }, { id: "Lmin", label: "L/min", ...linear(1 / 60000) },
      { id: "gpm", label: "US gal/min", ...linear(6.30901964e-5) },
    ];
    case "pace": return [
      { id: "spm", label: "s/m", toBase: (v) => v, fromBase: (v) => v },
      { id: "mpkm", label: "min/km", toBase: (v) => (v * 60) / 1000, fromBase: (v) => (v * 1000) / 60 },
      { id: "mpmi", label: "min/mi", toBase: (v) => (v * 60) / 1609.344, fromBase: (v) => (v * 1609.344) / 60 },
    ];
    case "dimensionless": return [
      { id: "ratio", label: "Ratio", ...linear(1) }, { id: "pct", label: "Percent", ...linear(0.01) },
      { id: "ppm", label: "ppm", ...linear(1e-6) }, { id: "ppb", label: "ppb", ...linear(1e-9) },
    ];
    default: return [{ id: "x", label: "Unit", ...linear(1) }];
  }
}

export default function CurrentConverter() {
  const units = useMemo(() => buildUnits(), []);
  const [fromId, setFromId] = useState(units[0]?.id ?? "");
  const [toId, setToId] = useState(units[1]?.id ?? units[0]?.id ?? "");
  const [input, setInput] = useState("1");
  const from = units.find((u) => u.id === fromId) ?? units[0];
  const to = units.find((u) => u.id === toId) ?? units[0];
  const output = useMemo(() => {
    const raw = Number.parseFloat(String(input).replace(/,/g, ""));
    if (Number.isNaN(raw) || !from || !to) return "";
    const base = from.toBase(raw);
    const v = to.fromBase(base);
    if (!Number.isFinite(v)) return "";
    return String(Number(v.toPrecision(8)));
  }, [input, from, to]);

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg"><ArrowRightLeft className="h-5 w-5 text-primary" />Current Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="from-u">From</Label>
            <Select value={fromId} onValueChange={setFromId}>
              <SelectTrigger id="from-u"><SelectValue /></SelectTrigger>
              <SelectContent>{units.map((u) => (<SelectItem key={u.id} value={u.id}>{u.label}</SelectItem>))}</SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="to-u">To</Label>
            <Select value={toId} onValueChange={setToId}>
              <SelectTrigger id="to-u"><SelectValue /></SelectTrigger>
              <SelectContent>{units.map((u) => (<SelectItem key={"t-"+u.id} value={u.id}>{u.label}</SelectItem>))}</SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="val-in">Value</Label>
            <Input id="val-in" inputMode="decimal" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="val-out">Result</Label>
            <Input id="val-out" readOnly className="bg-muted/40 font-mono" value={output} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
