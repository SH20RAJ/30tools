"use client";

import type { BaseConverterKind } from "@/components/tools/shared/BaseConverter";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import NumberBaseConverter from "@/components/tools/converter/NumberBaseConverter";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import JSONMinifierTool from "@/components/tools/developer/JSONMinifierTool";
import JSONToTSVTool from "@/components/tools/developer/JSONToTSVTool";
import JSONToSchemaTool from "@/components/tools/developer/JSONToSchemaTool";
import JsonFormatterTool from "@/components/tools/code/JsonFormatterTool";
import Base64Tool from "@/components/tools/developer/Base64Tool";
import CodeMinifier from "@/components/tools/developer/CodeMinifier";
import { UnitConverterTool, isUnitTool } from "./UnitConverterTool";
import { FinancialCalculatorsTool, FINANCE_TOOL_IDS } from "./FinancialCalculatorsTool";
import { MixedBrowserTools, MIXED_BROWSER_IDS } from "./MixedBrowserTools";
import { TextProcessingTools, TEXT_TOOL_IDS } from "./TextProcessingTools";
import { JsonCsvXmlTools, JSON_CSV_XML_IDS } from "./JsonCsvXmlTools";
import { YouTubeBulkTool, YOUTUBE_TOOL_IDS } from "./YouTubeBulkTool";
import { SeoNetworkPolicyTools, SEO_NETWORK_POLICY_IDS } from "./SeoNetworkPolicyTools";
import { NaiveBeautifyTool } from "./NaiveBeautifyTool";
import { Base64ImageBridge } from "./Base64ImageBridge";

const IMAGE_OUTPUT: Record<string, "jpeg" | "png" | "webp" | "gif" | "bmp"> = {
	"jpg-to-png-converter": "png",
	"png-to-jpg-converter": "jpeg",
	"webp-to-jpg-converter": "jpeg",
	"webp-to-png-converter": "png",
	"jpg-to-webp-converter": "webp",
	"png-to-webp-converter": "webp",
	"jpg-to-gif-converter": "gif",
	"png-to-gif-converter": "gif",
	"jpg-to-bmp-converter": "bmp",
	"png-to-bmp-converter": "bmp",
	"jpg-to-ico-converter": "png",
	"png-to-ico-converter": "png",
	"convert-to-ico": "png",
	"ico-to-png-converter": "png",
	"jpg-converter": "png",
	"flip-image": "png",
	"rotate-image": "png",
	"image-cropper": "png",
	"image-enlarger": "png",
};

const TEXT_KIND: Record<string, BaseConverterKind> = {
	"text-to-binary-converter": "text-to-binary",
	"text-to-decimal-converter": "text-to-decimal",
	"text-to-octal-converter": "text-to-octal",
	"text-to-hex-converter": "text-to-hex",
	"text-to-ascii-converter": "text-to-ascii",
	"hex-to-text-converter": "hex-to-text",
	"octal-to-text-converter": "octal-to-text",
	"octal-to-binary-converter": "octal-to-binary",
	"octal-to-decimal-converter": "octal-to-decimal",
	"octal-to-hex-converter": "octal-to-hex",
};

const NUMBER_BASE: Record<string, { defaultFrom: string; defaultTo: string }> = {
	"hex-to-octal-converter": { defaultFrom: "hexadecimal", defaultTo: "octal" },
};

function titleCaseId(toolId: string) {
	return toolId
		.split("-")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");
}

export default function ToolImplementation({ toolId }: { toolId: string }) {
	if (FINANCE_TOOL_IDS.has(toolId)) {
		return <FinancialCalculatorsTool toolId={toolId} />;
	}
	if (isUnitTool(toolId)) {
		return <UnitConverterTool toolId={toolId} />;
	}
	if (MIXED_BROWSER_IDS.has(toolId)) {
		return <MixedBrowserTools toolId={toolId} />;
	}
	if (TEXT_TOOL_IDS.has(toolId)) {
		return <TextProcessingTools toolId={toolId} />;
	}
	if (JSON_CSV_XML_IDS.has(toolId)) {
		return <JsonCsvXmlTools toolId={toolId} />;
	}
	if (YOUTUBE_TOOL_IDS.has(toolId)) {
		return <YouTubeBulkTool toolId={toolId} />;
	}
	if (SEO_NETWORK_POLICY_IDS.has(toolId)) {
		return <SeoNetworkPolicyTools toolId={toolId} />;
	}

	const img = IMAGE_OUTPUT[toolId];
	if (img) {
		return <ImageConverterTool defaultOutputFormat={img} />;
	}

	if (toolId === "base64-to-image-converter") {
		return <Base64ImageBridge mode="to-image" />;
	}
	if (toolId === "image-to-base64-converter") {
		return <Base64ImageBridge mode="from-image" />;
	}

	const kind = TEXT_KIND[toolId];
	if (kind) {
		const t = titleCaseId(toolId);
		return (
			<BaseConverter
				title={t}
				inputPlaceholder="Paste input..."
				outputPlaceholder="Output..."
				converterKind={kind}
			/>
		);
	}

	const nb = NUMBER_BASE[toolId];
	if (nb) {
		return <NumberBaseConverter defaultFrom={nb.defaultFrom} defaultTo={nb.defaultTo} />;
	}

	switch (toolId) {
		case "json-minify":
			return <JSONMinifierTool />;
		case "json-validator":
		case "json-viewer":
		case "json-editor":
			return <JsonFormatterTool />;
		case "json-to-tsv-converter":
			return <JSONToTSVTool />;
		case "json-to-json-schema":
			return <JSONToSchemaTool />;
		case "base64-encode":
			return <Base64Tool initialMode="encode" />;
		case "base64-decode":
			return <Base64Tool initialMode="decode" />;
		case "javascript-minifier":
			return <CodeMinifier language="javascript" />;
		case "css-minifier":
			return <CodeMinifier language="css" />;
		case "html-minifier":
			return <CodeMinifier language="html" />;
		case "javascript-beautifier":
			return <NaiveBeautifyTool language="javascript" />;
		case "css-beautifier":
			return <NaiveBeautifyTool language="css" />;
		case "html-beautifier":
			return <NaiveBeautifyTool language="html" />;
		case "javascript-obfuscator":
			return <CodeMinifier language="javascript" />;
		case "javascript-deobfuscator":
			return <NaiveBeautifyTool language="javascript" />;
		default:
			break;
	}

	return (
		<div className="shed p-8 text-center text-muted-foreground">
			<p className="font-medium text-foreground">{titleCaseId(toolId)}</p>
			<p className="mt-2 text-sm">
				Interactive module is not mapped for this id yet. Please report the tool name on GitHub issues.
			</p>
		</div>
	);
}
