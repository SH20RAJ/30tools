"use client";

import dynamic from "next/dynamic";
import { getToolComponent } from "@/lib/tool-registry";
import {
    UNIT_TOOL_MAP,
    BASE_CONVERTER_MAP,
    IMAGE_FORMAT_TOOL_MAP
} from "@/components/tools/shared/tool-id-registry";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import BaseConverter, { type BaseConverterKind } from "@/components/tools/shared/BaseConverter";
import BuiltInCalculators, { type CalcKind } from "@/components/tools/built-ins/BuiltInCalculators";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import BuiltInSerialization from "@/components/tools/built-ins/BuiltInSerialization";

import {
    TextCompareMount,
    SimpleRepeater,
    WordCounterMount,
    RemoveBreaks,
    CommaSeparatorMount,
    SlugMount,
    TagsFromText
} from "./ToolMiniComponents";

// Special case imports that are still needed here for logic or aren't in registry yet
const ImageConverterTool = dynamic(() => import("@/components/tools/image/ImageConverterTool.jsx"), { ssr: false });

function titleCaseId(id: string) {
    return id
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

function BaseConvMount({ toolId }: { toolId: string }) {
    const k = BASE_CONVERTER_MAP[toolId] as BaseConverterKind | undefined;
    if (!k) return null;
    const t = titleCaseId(toolId.replace(/-converter$/, "").replace(/-/g, " "));
    return (
        <BaseConverter
            title={t}
            inputPlaceholder="Paste values here..."
            outputPlaceholder="Converted output"
            converterKind={k}
        />
    );
}

function GenericNotice({ toolId }: { toolId: string }) {
    return (
        <Card className="border-dashed">
            <CardHeader className="">
                <CardTitle className="text-lg">{titleCaseId(toolId)}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                    Interactive workflow for this page is being expanded. You can still use breadcrumbs and related
                    tools below. 
                </p>
                <p className="font-medium text-foreground">
                    Want to request this tool or contribute?
                </p>
                <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild className="gap-2">
                        <a href="https://github.com/sh20raj/30tools" target="_blank" rel="noreferrer">
                            Create PR/Issue
                        </a>
                    </Button>
                    <Button variant="secondary" size="sm" asChild>
                        <a href="mailto:mail@30tools.com">
                            Email Request
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

const CALC_IDS = new Set([
    "percentage-calculator", "gst-calculator", "discount-calculator", "margin-calculator",
    "loan-calculator", "age-calculator", "sales-tax-calculator", "average-calculator",
    "cpm-calculator", "adsense-calculator", "paypal-fee-calculator", "probability-calculator",
    "confidence-interval-calculator", "currency-converter",
]);

const MARKUP_IDS = new Set([
    "html-minifier", "html-beautifier", "css-minifier", "css-beautifier",
    "javascript-minifier", "javascript-beautifier", "javascript-obfuscator", "javascript-deobfuscator",
    "html-encoder", "html-decoder",
]);

const SERIAL_IDS = new Set([
    "json-to-csv-converter", "json-to-tsv-converter", "json-to-text-converter",
    "csv-to-json-converter", "tsv-to-json-converter", "xml-to-json-converter", "json-to-xml-converter",
]);

const SAFE_HTTP_IDS = new Set([
    "redirect-checker", "http-status-code-checker", "get-http-headers", "page-size-checker",
    "server-status-checker", "hosting-checker", "whois-domain-lookup", "domain-age-checker",
    "wordpress-theme-detector", "google-cache-checker", "google-index-checker", "backlink-checker",
    "seo-audit-tool", "open-graph-checker", "website-ranking-checker", "sitemap-generator",
    "visual-sitemap", "facebook-id-finder", "indexnow-submitter",
]);

export default function RegisteredToolMount({ toolId }: { toolId: string }) {
    // 1. Check unit converters
    const preset = UNIT_TOOL_MAP[toolId as keyof typeof UNIT_TOOL_MAP];
    if (preset) return <UniversalUnitConverter preset={preset} />;

    // 2. Check base converters
    if (toolId in BASE_CONVERTER_MAP) return <BaseConvMount toolId={toolId} />;

    // 3. Check image format tools
    const imgFmt = IMAGE_FORMAT_TOOL_MAP[toolId as keyof typeof IMAGE_FORMAT_TOOL_MAP];
    if (imgFmt) return <ImageConverterTool defaultOutputFormat={imgFmt} />;

    // 4. Check special sets
    if (CALC_IDS.has(toolId)) return <BuiltInCalculators kind={toolId as CalcKind} />;
    if (MARKUP_IDS.has(toolId)) return <BuiltInMarkup toolId={toolId} />;
    if (SERIAL_IDS.has(toolId)) return <BuiltInSerialization toolId={toolId} />;
    if (SAFE_HTTP_IDS.has(toolId)) return <BuiltInSafeHttp toolId={toolId} />;

    // 5. Text tools (Mini components)
    if (toolId === "text-compare") return <TextCompareMount />;
    if (toolId === "text-repeater") return <SimpleRepeater />;
    if (toolId === "word-counter") return <WordCounterMount />;
    if (toolId === "remove-line-breaks") return <RemoveBreaks />;
    if (toolId === "comma-separator") return <CommaSeparatorMount />;
    if (toolId === "text-to-slug-converter") return <SlugMount />;
    if (toolId === "text-to-hashtags-converter") return <TagsFromText prefix="#" />;
    if (toolId === "text-to-tags-converter") return <TagsFromText prefix="" />;

    // 6. Check main registry
    const Component = getToolComponent(toolId);
    if (Component) return <Component toolId={toolId} />;

    // Fallback
    return <GenericNotice toolId={toolId} />;
}
