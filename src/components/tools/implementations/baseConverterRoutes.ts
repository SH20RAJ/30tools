import type { BaseConverterKind } from "@/components/tools/shared/BaseConverter";

export type BaseRoute = {
	kind: BaseConverterKind;
	title: string;
	inputPlaceholder: string;
	outputPlaceholder: string;
};

export const BASE_CONVERTER_BY_TOOL_ID: Record<string, BaseRoute> = {
	"octal-to-decimal-converter": {
		kind: "octal-to-decimal",
		title: "Octal → decimal",
		inputPlaceholder: "e.g. 377 12",
		outputPlaceholder: "Decimal values appear here…",
	},
	"octal-to-binary-converter": {
		kind: "octal-to-binary",
		title: "Octal → binary",
		inputPlaceholder: "e.g. 755 12",
		outputPlaceholder: "Binary output…",
	},
	"octal-to-hex-converter": {
		kind: "octal-to-hex",
		title: "Octal → hexadecimal",
		inputPlaceholder: "e.g. 377",
		outputPlaceholder: "Hex output…",
	},
	"octal-to-text-converter": {
		kind: "octal-to-text",
		title: "Octal codes → text",
		inputPlaceholder: "Space-separated octal byte values",
		outputPlaceholder: "Decoded text…",
	},
	"hex-to-text-converter": {
		kind: "hex-to-text",
		title: "Hex → text",
		inputPlaceholder: "e.g. 48 65 6C 6C 6F or 48656C6C6F",
		outputPlaceholder: "Decoded text…",
	},
	"hex-to-octal-converter": {
		kind: "hex-to-octal",
		title: "Hex → octal",
		inputPlaceholder: "Hex bytes (pairs or spaced)",
		outputPlaceholder: "Octal output…",
	},
	"text-to-binary-converter": {
		kind: "text-to-binary",
		title: "Text → binary",
		inputPlaceholder: "Plain text",
		outputPlaceholder: "8-bit binary groups…",
	},
	"text-to-hex-converter": {
		kind: "text-to-hex",
		title: "Text → hexadecimal",
		inputPlaceholder: "Plain text",
		outputPlaceholder: "Hex byte pairs…",
	},
	"text-to-octal-converter": {
		kind: "text-to-octal",
		title: "Text → octal",
		inputPlaceholder: "Plain text",
		outputPlaceholder: "Octal codes…",
	},
	"text-to-decimal-converter": {
		kind: "text-to-decimal",
		title: "Text → decimal codes",
		inputPlaceholder: "Plain text",
		outputPlaceholder: "Decimal code points…",
	},
	"text-to-ascii-converter": {
		kind: "text-to-decimal",
		title: "Text → ASCII / Unicode code points",
		inputPlaceholder: "Plain text",
		outputPlaceholder: "Decimal code points (space-separated)…",
	},
};
