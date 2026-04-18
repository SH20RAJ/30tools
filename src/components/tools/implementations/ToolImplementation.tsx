"use client";

import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { MixedBrowserTools, MIXED_BROWSER_IDS } from "@/components/tools/impl/MixedBrowserTools";
import QRCodeGeneratorTool from "@/components/tools/utilities/QRCodeGeneratorTool";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import CurrencyConverterTool from "./CurrencyConverterTool";
import ProgressiveToolNotice from "./ProgressiveToolNotice";
import { BASE_CONVERTER_BY_TOOL_ID } from "./baseConverterRoutes";
import Base64QuickTool from "./Base64QuickTool";
import CalculatorSuite, { CALCULATOR_TOOL_IDS } from "./CalculatorSuite";
import CanvasImageWorkbench from "./CanvasImageWorkbench";
import CodeSquashTool from "./CodeSquashTool";
import ColorRgbHexTool from "./ColorRgbHexTool";
import DataInterchangeTool from "./DataInterchangeTool";
import DomainIpTool from "./DomainIpTool";
import JsonSchemaInferTool from "./JsonSchemaInferTool";
import JsonWorkbenchTool from "./JsonWorkbenchTool";
import PhysicalUnitConverter from "./PhysicalUnitConverter";
import { PHYSICAL_PRESETS } from "./physicalPresets";
import SafeHttpPanel from "./SafeHttpPanel";
import SeoToolsSuite, { SEO_SUITE_IDS } from "./SeoToolsSuite";
import SubtitleConvertTool from "./SubtitleConvertTool";
import TextManipSuite, { TEXT_MANIP_TOOL_IDS } from "./TextManipSuite";
import WordCounterTool from "./WordCounterTool";
import YouTubeSuite from "./YouTubeSuite";
import { IMAGE_CONVERT_DEFAULT_FORMAT } from "./imageFormatDefaults";

function QrDecodeTool() {
	return (
		<div className="rounded-xl border border-dashed p-8 text-center text-muted-foreground">
			<p className="mb-2 font-medium text-foreground">Decode QR from camera</p>
			<p className="text-sm">
				On Chromium browsers you can use the in-app camera scanner from our QR generator tool
				family. For file-based decode, upload a sharp screenshot in a desktop image editor
				first, then try Google Lens or your OS decoder.
			</p>
		</div>
	);
}

function PolicyDraftTool({ kind }: { kind: "privacy" | "terms" | "disclaimer" }) {
	const body =
		kind === "privacy"
			? "We collect minimal analytics data to operate the service. Contact: support@example.com."
			: kind === "terms"
				? "By using this site you agree to follow applicable laws. Service provided as-is without warranties."
				: "This site provides tools as-is; verify critical outputs independently.";
	return (
		<div className="prose prose-sm dark:prose-invert max-w-none rounded-xl border bg-card p-6">
			<h3 className="mt-0">Starter template</h3>
			<p>{body}</p>
			<p className="text-muted-foreground text-xs">
				Replace bracketed fields and have counsel review before publishing.
			</p>
		</div>
	);
}

export default function ToolImplementation({ toolId }: { toolId: string }) {
	if (MIXED_BROWSER_IDS.has(toolId)) {
		return <MixedBrowserTools toolId={toolId} />;
	}

	const physical = PHYSICAL_PRESETS[toolId];
	if (physical) {
		return <PhysicalUnitConverter preset={physical} />;
	}

	const imgFmt = IMAGE_CONVERT_DEFAULT_FORMAT[toolId];
	if (imgFmt) {
		return <ImageConverterTool defaultOutputFormat={imgFmt} />;
	}

	if (toolId === "image-enlarger") {
		return <CanvasImageWorkbench mode="enlarge" title="Image scale" />;
	}
	if (toolId === "flip-image") {
		return <CanvasImageWorkbench mode="flip" title="Flip image" />;
	}
	if (toolId === "rotate-image") {
		return <CanvasImageWorkbench mode="rotate" title="Rotate image" />;
	}
	if (toolId === "image-cropper") {
		return <CanvasImageWorkbench mode="crop" title="Center crop" />;
	}

	const base = BASE_CONVERTER_BY_TOOL_ID[toolId];
	if (base) {
		return (
			<BaseConverter
				title={base.title}
				inputPlaceholder={base.inputPlaceholder}
				outputPlaceholder={base.outputPlaceholder}
				converterKind={base.kind}
			/>
		);
	}

	if (toolId === "word-counter") {
		return <WordCounterTool />;
	}

	if (CALCULATOR_TOOL_IDS.has(toolId)) {
		return <CalculatorSuite toolId={toolId} />;
	}

	if (TEXT_MANIP_TOOL_IDS.has(toolId)) {
		return <TextManipSuite toolId={toolId} />;
	}

	if (toolId.startsWith("youtube-")) {
		return <YouTubeSuite toolId={toolId} />;
	}

	if (SEO_SUITE_IDS.has(toolId)) {
		return <SeoToolsSuite toolId={toolId} />;
	}

	if (
		toolId === "json-viewer" ||
		toolId === "json-minify" ||
		toolId === "json-validator" ||
		toolId === "json-editor"
	) {
		return <JsonWorkbenchTool />;
	}

	if (toolId === "json-to-json-schema") {
		return <JsonSchemaInferTool />;
	}

	if (toolId === "csv-to-json-converter") {
		return <DataInterchangeTool mode="csv-to-json" />;
	}
	if (toolId === "tsv-to-json-converter") {
		return <DataInterchangeTool mode="tsv-to-json" />;
	}
	if (toolId === "json-to-csv-converter") {
		return <DataInterchangeTool mode="json-to-csv" />;
	}
	if (toolId === "json-to-tsv-converter") {
		return <DataInterchangeTool mode="json-to-tsv" />;
	}
	if (toolId === "json-to-text-converter") {
		return <DataInterchangeTool mode="json-to-text" />;
	}
	if (toolId === "xml-to-json-converter") {
		return <DataInterchangeTool mode="xml-to-json" />;
	}
	if (toolId === "json-to-xml-converter") {
		return <DataInterchangeTool mode="json-to-xml" />;
	}

	if (toolId === "redirect-checker") {
		return (
			<SafeHttpPanel
				mode="redirect"
				title="Redirect chain"
				description="Follows redirects with HEAD requests via the 30tools safe HTTP proxy."
			/>
		);
	}
	if (toolId === "get-http-headers") {
		return (
			<SafeHttpPanel
				mode="response-headers"
				title="Response headers"
				description="Fetches response headers from the final URL after redirects (server-side)."
			/>
		);
	}
	if (toolId === "page-size-checker") {
		return (
			<SafeHttpPanel
				mode="page-size"
				title="Page weight (capped download)"
				description="Downloads up to the configured cap to estimate HTML payload size."
			/>
		);
	}
	if (toolId === "http-status-code-checker") {
		return (
			<SafeHttpPanel
				mode="status"
				title="HTTP status"
				description="Inspects the first hop status via redirect chain mode."
			/>
		);
	}
	if (toolId === "dns-records-checker") {
		return (
			<SafeHttpPanel
				mode="dns-note"
				title="DNS records"
				description="Guidance for TXT, MX, and NS checks."
			/>
		);
	}

	if (toolId === "convert-srt-to-vtt") {
		return <SubtitleConvertTool mode="srt-vtt" />;
	}
	if (toolId === "convert-vtt-to-srt") {
		return <SubtitleConvertTool mode="vtt-srt" />;
	}

	if (toolId === "hex-to-rgb-converter") {
		return <ColorRgbHexTool mode="hex-rgb" />;
	}
	if (toolId === "rgb-to-hex-converter") {
		return <ColorRgbHexTool mode="rgb-hex" />;
	}
	if (toolId === "color-converter") {
		return <ColorRgbHexTool mode="color" />;
	}

	if (toolId === "base64-encode") {
		return <Base64QuickTool mode="encode" />;
	}
	if (toolId === "base64-decode") {
		return <Base64QuickTool mode="decode" />;
	}

	if (toolId === "html-beautifier" || toolId === "html-minifier") {
		return <CodeSquashTool language="html" />;
	}
	if (toolId === "css-beautifier" || toolId === "css-minifier") {
		return <CodeSquashTool language="css" />;
	}
	if (
		toolId === "javascript-beautifier" ||
		toolId === "javascript-minifier" ||
		toolId === "javascript-obfuscator" ||
		toolId === "javascript-deobfuscator"
	) {
		return <CodeSquashTool language="js" />;
	}

	if (toolId === "qr-code-generator") {
		return <QRCodeGeneratorTool />;
	}
	if (toolId === "qr-code-decoder") {
		return <QrDecodeTool />;
	}

	if (toolId === "privacy-policy-generator") {
		return <PolicyDraftTool kind="privacy" />;
	}
	if (toolId === "terms-and-condition-generator") {
		return <PolicyDraftTool kind="terms" />;
	}
	if (toolId === "disclaimer-generator") {
		return <PolicyDraftTool kind="disclaimer" />;
	}

	if (toolId === "domain-to-ip-converter" || toolId === "ip-address-lookup") {
		return <DomainIpTool />;
	}

	if (toolId === "currency-converter") {
		return <CurrencyConverterTool />;
	}

	if (toolId === "server-status-checker" || toolId === "hosting-checker") {
		return (
			<SafeHttpPanel
				mode="status"
				title="HTTP status check"
				description="Shows the first hop in the redirect chain (HEAD)."
			/>
		);
	}

	if (toolId === "htaccess-redirect-generator") {
		return (
			<pre className="rounded-xl border bg-muted/40 p-4 text-xs leading-relaxed">
				{`RewriteEngine On
RewriteRule ^old-path$ /new-path [R=301,L]`}
			</pre>
		);
	}

	if (toolId === "faq-schema-generator") {
		return (
			<pre className="rounded-xl border bg-muted/40 p-4 text-xs leading-relaxed">
				{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Your question?",
    "acceptedAnswer": { "@type": "Answer", "text": "Your answer." }
  }]
}`}
			</pre>
		);
	}

	return <ProgressiveToolNotice toolId={toolId} />;
}
