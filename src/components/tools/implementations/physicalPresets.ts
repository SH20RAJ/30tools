/**
 * Physical / unit presets for {@link PhysicalUnitConverter}.
 * Each preset uses a canonical numeric "base" value; units define affine maps to/from it.
 */

export type PhysicalUnit = {
	id: string;
	label: string;
	toBase: (v: number) => number;
	fromBase: (v: number) => number;
};

export type PhysicalPreset = {
	title: string;
	description: string;
	units: PhysicalUnit[];
	defaultFrom: string;
	defaultTo: string;
};

const lin = (
	id: string,
	label: string,
	factorToBase: number,
): PhysicalUnit => ({
	id,
	label,
	toBase: (v) => v * factorToBase,
	fromBase: (b) => b / factorToBase,
});

export const PHYSICAL_PRESETS: Record<string, PhysicalPreset> = {
	"length-converter": {
		title: "Length",
		description: "Convert common length units with SI-accurate factors.",
		defaultFrom: "m",
		defaultTo: "ft",
		units: [
			lin("m", "Meter (m)", 1),
			lin("km", "Kilometer (km)", 1000),
			lin("cm", "Centimeter (cm)", 0.01),
			lin("mm", "Millimeter (mm)", 0.001),
			lin("mi", "Mile (mi)", 1609.344),
			lin("yd", "Yard (yd)", 0.9144),
			lin("ft", "Foot (ft)", 0.3048),
			lin("in", "Inch (in)", 0.0254),
			lin("nm", "Nautical mile (nm)", 1852),
		],
	},
	"weight-converter": {
		title: "Mass / weight",
		description: "Convert mass units (kilogram-based).",
		defaultFrom: "kg",
		defaultTo: "lb",
		units: [
			lin("kg", "Kilogram (kg)", 1),
			lin("g", "Gram (g)", 0.001),
			lin("mg", "Milligram (mg)", 1e-6),
			lin("t", "Metric ton (t)", 1000),
			lin("lb", "Pound (lb)", 0.45359237),
			lin("oz", "Ounce (oz)", 0.028349523125),
			lin("st", "Stone (st)", 6.35029318),
		],
	},
	"volume-converter": {
		title: "Volume",
		description: "Convert liters, cubic meters, and US/imperial gallons.",
		defaultFrom: "l",
		defaultTo: "gal-us",
		units: [
			lin("m3", "Cubic meter (m³)", 1000),
			lin("l", "Liter (L)", 1),
			lin("ml", "Milliliter (mL)", 0.001),
			lin("cm3", "Cubic centimeter (cm³)", 0.001),
			lin("gal-us", "US gallon", 3.785411784),
			lin("gal-uk", "Imperial gallon", 4.54609),
			lin("qt-us", "US quart", 0.946352946),
			lin("cup-us", "US cup", 0.2365882365),
			lin("floz-us", "US fluid ounce", 0.0295735295625),
		],
	},
	"area-converter": {
		title: "Area",
		description: "Convert square meters, acres, hectares, and imperial area.",
		defaultFrom: "m2",
		defaultTo: "ft2",
		units: [
			lin("m2", "Square meter (m²)", 1),
			lin("km2", "Square kilometer (km²)", 1e6),
			lin("cm2", "Square centimeter (cm²)", 1e-4),
			lin("mm2", "Square millimeter (mm²)", 1e-6),
			lin("ha", "Hectare (ha)", 10000),
			lin("acre", "Acre", 4046.8564224),
			lin("ft2", "Square foot (ft²)", 0.09290304),
			lin("in2", "Square inch (in²)", 0.00064516),
		],
	},
	"temperature-converter": {
		title: "Temperature",
		description: "Kelvin, Celsius, Fahrenheit, and Rankine.",
		defaultFrom: "c",
		defaultTo: "f",
		units: [
			{
				id: "k",
				label: "Kelvin (K)",
				toBase: (v) => v,
				fromBase: (v) => v,
			},
			{
				id: "c",
				label: "Celsius (°C)",
				toBase: (v) => v + 273.15,
				fromBase: (v) => v - 273.15,
			},
			{
				id: "f",
				label: "Fahrenheit (°F)",
				toBase: (v) => ((v + 459.67) * 5) / 9,
				fromBase: (v) => (v * 9) / 5 - 459.67,
			},
			{
				id: "r",
				label: "Rankine (°R)",
				toBase: (v) => (v * 5) / 9,
				fromBase: (v) => (v * 9) / 5,
			},
		],
	},
	"energy-converter": {
		title: "Energy",
		description: "Joules, calories, kilowatt-hours, and BTU.",
		defaultFrom: "j",
		defaultTo: "kwh",
		units: [
			lin("j", "Joule (J)", 1),
			lin("kj", "Kilojoule (kJ)", 1000),
			lin("cal", "Calorie (cal)", 4.184),
			lin("kcal", "Kilocalorie (kcal)", 4184),
			lin("kwh", "Kilowatt-hour (kWh)", 3.6e6),
			lin("ev", "Electronvolt (eV)", 1.602176634e-19),
			lin("btu", "BTU (IT)", 1055.05585262),
		],
	},
	"pressure-converter": {
		title: "Pressure",
		description: "Pascal, bar, psi, atmosphere, and torr.",
		defaultFrom: "pa",
		defaultTo: "psi",
		units: [
			lin("pa", "Pascal (Pa)", 1),
			lin("kpa", "Kilopascal (kPa)", 1000),
			lin("mpa", "Megapascal (MPa)", 1e6),
			lin("bar", "Bar", 1e5),
			lin("mbar", "Millibar (mbar)", 100),
			lin("psi", "Pound-force per square inch (psi)", 6894.757293168),
			lin("atm", "Standard atmosphere (atm)", 101325),
			lin("torr", "Torr / mmHg", 133.322368421),
		],
	},
	"speed-converter": {
		title: "Speed",
		description: "Meters per second, km/h, mph, knots.",
		defaultFrom: "kmh",
		defaultTo: "mph",
		units: [
			lin("ms", "Meter per second (m/s)", 1),
			lin("kmh", "Kilometer per hour (km/h)", 1 / 3.6),
			lin("mph", "Mile per hour (mph)", 0.44704),
			lin("kn", "Knot (kn)", 0.514444),
			lin("fts", "Foot per second (ft/s)", 0.3048),
		],
	},
	"frequency-converter": {
		title: "Frequency",
		description: "Hertz and revolutions per minute.",
		defaultFrom: "hz",
		defaultTo: "rpm",
		units: [
			lin("hz", "Hertz (Hz)", 1),
			lin("khz", "Kilohertz (kHz)", 1000),
			lin("mhz", "Megahertz (MHz)", 1e6),
			lin("ghz", "Gigahertz (GHz)", 1e9),
			lin("rpm", "Revolutions per minute (rpm)", 1 / 60),
		],
	},
	"time-converter": {
		title: "Time",
		description: "Seconds through weeks.",
		defaultFrom: "h",
		defaultTo: "min",
		units: [
			lin("s", "Second (s)", 1),
			lin("min", "Minute (min)", 60),
			lin("h", "Hour (h)", 3600),
			lin("d", "Day (d)", 86400),
			lin("wk", "Week (wk)", 604800),
		],
	},
	"angle-converter": {
		title: "Angle",
		description: "Degrees, radians, gradians, and turns.",
		defaultFrom: "deg",
		defaultTo: "rad",
		units: [
			lin("rad", "Radian (rad)", 1),
			lin("deg", "Degree (°)", Math.PI / 180),
			lin("grad", "Gradian (gon)", Math.PI / 200),
			lin("turn", "Turn (rev)", Math.PI * 2),
		],
	},
	"voltage-converter": {
		title: "Electric potential",
		description: "Volts, millivolts, kilovolts.",
		defaultFrom: "v",
		defaultTo: "mv",
		units: [
			lin("v", "Volt (V)", 1),
			lin("mv", "Millivolt (mV)", 0.001),
			lin("kv", "Kilovolt (kV)", 1000),
			lin("uv", "Microvolt (µV)", 1e-6),
		],
	},
	"current-converter": {
		title: "Electric current",
		description: "Amperes and common submultiples.",
		defaultFrom: "a",
		defaultTo: "ma",
		units: [
			lin("a", "Ampere (A)", 1),
			lin("ma", "Milliampere (mA)", 0.001),
			lin("ka", "Kiloampere (kA)", 1000),
			lin("ua", "Microampere (µA)", 1e-6),
		],
	},
	"power-converter": {
		title: "Power",
		description: "Watts, horsepower, BTU per hour.",
		defaultFrom: "w",
		defaultTo: "hp",
		units: [
			lin("w", "Watt (W)", 1),
			lin("kw", "Kilowatt (kW)", 1000),
			lin("mw", "Megawatt (MW)", 1e6),
			lin("hp", "Mechanical horsepower (hp)", 745.69987158227022),
			lin("btuh", "BTU per hour", 0.29307107),
		],
	},
	"apparent-power-converter": {
		title: "Apparent power",
		description: "Volt-amperes (VA) conversions.",
		defaultFrom: "va",
		defaultTo: "kva",
		units: [
			lin("va", "Volt-ampere (VA)", 1),
			lin("kva", "Kilovolt-ampere (kVA)", 1000),
			lin("mva", "Megavolt-ampere (MVA)", 1e6),
		],
	},
	"reactive-power-converter": {
		title: "Reactive power",
		description: "VAR and kVAR (volt-ampere reactive).",
		defaultFrom: "var",
		defaultTo: "kvar",
		units: [
			lin("var", "VAR", 1),
			lin("kvar", "kVAR", 1000),
			lin("mvar", "MVAR", 1e6),
		],
	},
	"reactive-energy-converter": {
		title: "Reactive energy",
		description: "VAR-hour and kVAR-hour.",
		defaultFrom: "varh",
		defaultTo: "kvarh",
		units: [
			lin("varh", "VAR-hour (VARh)", 1),
			lin("kvarh", "kVAR-hour (kVARh)", 1000),
			lin("mvarh", "MVAR-hour (MVARh)", 1e6),
		],
	},
	"charge-converter": {
		title: "Electric charge",
		description: "Coulombs and common submultiples.",
		defaultFrom: "c",
		defaultTo: "mah",
		units: [
			lin("c", "Coulomb (C)", 1),
			lin("mc", "Millicoulomb (mC)", 0.001),
			lin("uc", "Microcoulomb (µC)", 1e-6),
			lin("ah", "Ampere-hour (Ah)", 3600),
			lin("mah", "Milliampere-hour (mAh)", 3.6),
		],
	},
	"illuminance-converter": {
		title: "Illuminance",
		description: "Lux and foot-candle.",
		defaultFrom: "lux",
		defaultTo: "fc",
		units: [
			lin("lux", "Lux (lx)", 1),
			lin("fc", "Foot-candle (fc)", 10.76391041671),
			lin("phot", "Phot (ph)", 10000),
		],
	},
	"torque-converter": {
		title: "Torque",
		description: "Newton-meter and pound-foot.",
		defaultFrom: "nm",
		defaultTo: "lbfft",
		units: [
			lin("nm", "Newton-meter (N·m)", 1),
			lin("lbfft", "Pound-foot (lb·ft)", 1.3558179483314004),
			lin("lbfin", "Pound-inch (lb·in)", 0.1129848290276167),
			lin("kgfm", "Kilogram-force meter (kgf·m)", 9.80665),
		],
	},
	"volumetric-flow-rate-converter": {
		title: "Volumetric flow rate",
		description: "Liters per second, cubic meters per hour, US GPM.",
		defaultFrom: "lps",
		defaultTo: "gpm-us",
		units: [
			lin("m3s", "Cubic meter per second (m³/s)", 1000),
			lin("m3h", "Cubic meter per hour (m³/h)", 1000 / 3600),
			lin("lps", "Liter per second (L/s)", 1),
			lin("lpm", "Liter per minute (L/min)", 1 / 60),
			lin("gpm-us", "US gallon per minute", 0.0630901964),
			lin("cfm", "Cubic foot per minute (CFM)", 0.4719474432),
		],
	},
	"pace-converter": {
		title: "Running pace",
		description: "Minutes per kilometer and per mile.",
		defaultFrom: "mpk",
		defaultTo: "mpm",
		units: [
			{
				id: "mpk",
				label: "Minutes per kilometer (min/km)",
				toBase: (v) => v,
				fromBase: (v) => v,
			},
			{
				id: "mpm",
				label: "Minutes per mile (min/mi)",
				toBase: (v) => v / 1.609344,
				fromBase: (v) => v * 1.609344,
			},
			{
				id: "spk",
				label: "Seconds per kilometer (s/km)",
				toBase: (v) => v / 60,
				fromBase: (v) => v * 60,
			},
		],
	},
	"digital-converter": {
		title: "Data size",
		description: "Decimal (SI) and binary (IEC) byte units.",
		defaultFrom: "mb",
		defaultTo: "mib",
		units: [
			lin("b", "Bit", 0.125),
			lin("B", "Byte (B)", 1),
			lin("kb", "Kilobyte — decimal (kB)", 1000),
			lin("mb", "Megabyte — decimal (MB)", 1e6),
			lin("gb", "Gigabyte — decimal (GB)", 1e9),
			lin("kib", "Kibibyte (KiB)", 1024),
			lin("mib", "Mebibyte (MiB)", 1048576),
			lin("gib", "Gibibyte (GiB)", 1073741824),
		],
	},
	"parts-per-converter": {
		title: "Parts per notation",
		description: "Percent, permille, ppm, ppb as fractions of whole.",
		defaultFrom: "pct",
		defaultTo: "ppm",
		units: [
			lin("frac", "Fraction (0–1)", 1),
			lin("pct", "Percent (%)", 0.01),
			lin("ppt", "Permille (‰)", 0.001),
			lin("ppm", "Parts per million (ppm)", 1e-6),
			lin("ppb", "Parts per billion (ppb)", 1e-9),
		],
	},
};
