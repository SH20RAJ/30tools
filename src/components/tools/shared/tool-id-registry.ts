import type { BaseConverterKind } from "@/components/tools/shared/BaseConverter";
import type { UnitPreset } from "@/components/tools/built-ins/UniversalUnitConverter";

export const UNIT_TOOL_MAP: Record<string, UnitPreset> = {
	"length-converter": "length",
	"weight-converter": "mass",
	"temperature-converter": "temperature",
	"area-converter": "area",
	"volume-converter": "volume",
	"speed-converter": "speed",
	"time-converter": "time",
	"angle-converter": "angle",
	"pressure-converter": "pressure",
	"energy-converter": "energy",
	"reactive-energy-converter": "energy",
	"power-converter": "power",
	"reactive-power-converter": "reactivePower",
	"apparent-power-converter": "apparentPower",
	"frequency-converter": "frequency",
	"digital-converter": "digital",
	"torque-converter": "torque",
	"current-converter": "current",
	"voltage-converter": "voltage",
	"charge-converter": "charge",
	"illuminance-converter": "illuminance",
	"volumetric-flow-rate-converter": "flowVolume",
	"pace-converter": "pace",
	"parts-per-converter": "dimensionless",
	"each-converter": "typography",
};

export const BASE_CONVERTER_MAP: Record<string, BaseConverterKind> = {
	"text-to-binary-converter": "text-to-binary",
	"text-to-hex-converter": "text-to-hex",
	"text-to-octal-converter": "text-to-octal",
	"text-to-decimal-converter": "text-to-decimal",
	"text-to-ascii-converter": "text-to-ascii",
	"hex-to-text-converter": "hex-to-text",
	"hex-to-octal-converter": "hex-to-octal",
	"octal-to-binary-converter": "octal-to-binary",
	"octal-to-decimal-converter": "octal-to-decimal",
	"octal-to-hex-converter": "octal-to-hex",
	"octal-to-text-converter": "octal-to-text",
};

/** defaultOutputFormat for ImageConverterTool (jpeg | png | webp | gif | bmp) */
export const IMAGE_FORMAT_TOOL_MAP: Record<string, string> = {
	"jpg-converter": "jpeg",
	"png-to-jpg-converter": "jpeg",
	"webp-to-jpg-converter": "jpeg",
	"jpg-to-png-converter": "png",
	"webp-to-png-converter": "png",
	"ico-to-png-converter": "png",
	"png-to-webp-converter": "webp",
	"jpg-to-webp-converter": "webp",
	"png-to-gif-converter": "gif",
	"jpg-to-gif-converter": "gif",
	"png-to-bmp-converter": "bmp",
	"jpg-to-bmp-converter": "bmp",
	"jpg-to-ico-converter": "png",
	"png-to-ico-converter": "png",
	"convert-to-ico": "png",
};
