import fs from 'fs';
import path from 'path';

// Read all page.tsx files to find toolIds
function findToolIds(dir: string, toolIds: string[]) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findToolIds(fullPath, toolIds);
        } else if (file === 'page.tsx') {
            const content = fs.readFileSync(fullPath, 'utf8');
            const match = content.match(/<RegisteredToolMount\s+toolId=\{([^}]+)\}/);
            if (match) {
                // If it's a variable like `tool.id`, we need to get the directory name as tool id
                const toolId = path.basename(path.dirname(fullPath));
                toolIds.push(toolId);
            }
        }
    }
}

const toolIds: string[] = [];
findToolIds('src/app', toolIds);
console.log(`Found ${toolIds.length} tools using RegisteredToolMount.`);

import { UNIT_TOOL_MAP, BASE_CONVERTER_MAP, IMAGE_FORMAT_TOOL_MAP } from '../src/components/tools/shared/tool-id-registry';

const JSON_FORMATTER_IDS = new Set(["json-editor", "json-viewer", "json-validator"]);
const CALC_IDS = new Set([
	"percentage-calculator", "gst-calculator", "discount-calculator", "margin-calculator",
	"loan-calculator", "age-calculator", "sales-tax-calculator", "average-calculator",
	"cpm-calculator", "adsense-calculator", "paypal-fee-calculator", "probability-calculator",
	"confidence-interval-calculator", "currency-converter"
]);
const MARKUP_IDS = new Set([
	"html-minifier", "html-beautifier", "css-minifier", "css-beautifier",
	"javascript-minifier", "javascript-beautifier", "javascript-obfuscator",
	"javascript-deobfuscator", "html-encoder", "html-decoder"
]);
const SERIAL_IDS = new Set([
	"json-to-csv-converter", "json-to-tsv-converter", "json-to-text-converter",
	"csv-to-json-converter", "tsv-to-json-converter", "xml-to-json-converter",
	"json-to-xml-converter"
]);
const IMAGE_RESIZER_IDS = new Set(["rotate-image", "flip-image", "image-cropper", "image-enlarger"]);
const safeHttpIds = new Set([
    "redirect-checker", "http-status-code-checker", "get-http-headers",
    "page-size-checker", "server-status-checker", "hosting-checker",
]);

const unhandled: string[] = [];

for (const toolId of toolIds) {
    let handled = false;
    
    if (toolId in UNIT_TOOL_MAP) handled = true;
    else if (toolId in BASE_CONVERTER_MAP) handled = true;
    else if (toolId in IMAGE_FORMAT_TOOL_MAP) handled = true;
    else if (IMAGE_RESIZER_IDS.has(toolId)) handled = true;
    else if (JSON_FORMATTER_IDS.has(toolId)) handled = true;
    else if (toolId === "json-minify") handled = true;
    else if (toolId === "json-to-tsv-converter") handled = true;
    else if (toolId === "json-to-json-schema") handled = true;
    else if (SERIAL_IDS.has(toolId)) handled = true;
    else if (MARKUP_IDS.has(toolId)) handled = true;
    else if (CALC_IDS.has(toolId)) handled = true;
    else if (toolId === "text-compare") handled = true;
    else if (toolId === "text-repeater") handled = true;
    else if (toolId === "text-sorter") handled = true;
    else if (toolId === "word-counter") handled = true;
    else if (toolId === "remove-line-breaks") handled = true;
    else if (toolId === "comma-separator") handled = true;
    else if (toolId === "text-to-slug-converter") handled = true;
    else if (toolId === "text-to-hashtags-converter") handled = true;
    else if (toolId === "text-to-tags-converter") handled = true;
    else if (toolId === "base64-encode" || toolId === "base64-decode" || toolId === "base64-tool") handled = true;
    else if (toolId === "md5-generator") handled = true;
    else if (toolId === "qr-code-generator" || toolId === "qr-code-decoder") handled = true;
    else if (toolId === "youtube-channel-id-extractor" || toolId === "youtube-channel-id-finder") handled = true;
    else if (toolId === "word-to-number-converter") handled = true;
    else if (toolId === "markdown-to-text") handled = true;
    else if (toolId.includes("downloader") || toolId.includes("extractor")) handled = true;
    else if (toolId === "number-to-roman-numerals") handled = true;
    else if (toolId === "roman-numerals-to-number") handled = true;
    else if (toolId === "rgb-to-hex-converter") handled = true;
    else if (toolId === "hex-to-rgb-converter") handled = true;
    else if (toolId === "random-uuid-generator") handled = true;
    else if (toolId === "url-encode") handled = true;
    else if (toolId === "url-decode") handled = true;
    else if (toolId === "url-parser") handled = true;
    else if (toolId === "what-is-my-screen-resolution") handled = true;
    else if (toolId === "what-is-my-user-agent") handled = true;
    else if (toolId === "what-is-my-browser") handled = true;
    else if (toolId === "what-is-my-ip-address") handled = true;
    else if (toolId === "keyword-density-checker") handled = true;
    else if (safeHttpIds.has(toolId)) handled = true;
    else if (toolId === "domain-to-ip-converter") handled = true;
    else if (toolId === "dns-records-checker") handled = true;
    else if (toolId === "meta-tag-generator") handled = true;
    else if (toolId === "open-graph-generator") handled = true;
    else if (toolId === "twitter-card-generator") handled = true;
    else if (toolId === "faq-schema-generator") handled = true;
    else if (toolId === "htaccess-redirect-generator") handled = true;
    else if (toolId === "privacy-policy-generator") handled = true;
    else if (toolId === "terms-and-condition-generator") handled = true;
    else if (toolId === "disclaimer-generator") handled = true;

    if (!handled) {
        unhandled.push(toolId);
    }
}
console.log("UNHANDLED_START");
console.log(unhandled.join("\n"));
console.log("UNHANDLED_END");
