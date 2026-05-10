#!/usr/bin/env node
/**
 * Comprehensive fix for 30tools.com tool pages.
 *
 * This script:
 * 1. Extracts inline mini components from RegisteredToolMount.tsx to dedicated files.
 * 2. Updates all existing tool pages that use RegisteredToolMount to directly import and render specific components.
 * 3. Creates missing page files for tools that don't have them.
 *
 * Run: node scripts/fix-tool-pages.cjs
 */

const fs = require('fs');
const path = require('path');

const BASE = process.cwd();
const APP_DIR = path.join(BASE, 'src/app');
const COMP_DIR = path.join(BASE, 'src/components/tools');
const TOOLS_JSON_PATH = path.join(BASE, 'src/constants/tools.json');

const toolsData = JSON.parse(fs.readFileSync(TOOLS_JSON_PATH, 'utf8'));

// Build tool list
const tools = [];
for (const cat of Object.values(toolsData.categories)) {
  for (const t of cat.tools) {
    tools.push(t);
  }
}
const toolMap = new Map(tools.map(t => [t.id, t]));

// Exclusions: static pages and hub pages
const EXCLUDED_IDS = new Set([
  'about', 'contact', 'privacy', 'terms', 'search', 'blog',
  'best-free-tools-for-students', 'tools-for-developers', 'seo-tools-free-online',
  'ai-tools-alternatives-free', 'best-free-alternative-to-chatgpt',
  'top-10-free-online-tools-for-seo', 'top-10-json-tools-online',
  'how-to-format-json-properly', 'best-free-converters-in-2026',
  'image-tools', 'pdf-tools', 'video-tools', 'audio-tools', 'downloaders',
  'all-downloaders', 'text-tools', 'developer-tools', 'utilities', 'other-tools',
  'generators', 'seotoolkit', 'visual-sitemap', 'website-ranking-checker',
]);

// ─── Component mapping ─────────────────────────────────────────────────────

// 1. Inline component extractions (component file will be created)
const INLINE_TOOLS = {
  // Format: toolId -> { component: 'Name', props: 'prop=value', file: 'FileName', extraImports: [] }
  'number-to-roman-numerals': { component: 'RomanNumeralTool', props: 'toRoman={true}', file: 'RomanNumeralTool', extra: [] },
  'roman-numerals-to-number': { component: 'RomanNumeralTool', props: 'toRoman={false}', file: 'RomanNumeralTool', extra: [] },
  'rgb-to-hex-converter': { component: 'RgbHexConverter', props: 'mode="rgb2hex"', file: 'RgbHexConverter', extra: [] },
  'hex-to-rgb-converter': { component: 'RgbHexConverter', props: 'mode="hex2rgb"', file: 'RgbHexConverter', extra: [] },
  'color-converter': { component: 'RgbHexConverter', props: 'mode="rgb2hex"', file: 'RgbHexConverter', extra: [] },
  'random-uuid-generator': { component: 'UuidGenerator', props: '', file: 'UuidGenerator', extra: [] },
  'credit-card-generator': { component: 'UuidGenerator', props: '', file: 'UuidGenerator', extra: [] },
  'credit-card-validator': { component: 'UuidGenerator', props: '', file: 'UuidGenerator', extra: [] },
  'url-encode': { component: 'UrlCodecTool', props: 'mode="enc"', file: 'UrlCodecTool', extra: [] },
  'url-decode': { component: 'UrlCodecTool', props: 'mode="dec"', file: 'UrlCodecTool', extra: [] },
  'url-parser': { component: 'UrlParserTool', props: '', file: 'UrlParserTool', extra: [] },
  'url-opener': { component: 'UrlParserTool', props: '', file: 'UrlParserTool', extra: [] },
  'url-rewriting-tool': { component: 'UrlParserTool', props: '', file: 'UrlParserTool', extra: [] },
  'what-is-my-screen-resolution': { component: 'ScreenResolutionTool', props: '', file: 'ScreenResolutionTool', extra: [] },
  'screen-resolution-simulator': { component: 'ScreenResolutionTool', props: '', file: 'ScreenResolutionTool', extra: [] },
  'what-is-my-user-agent': { component: 'UserAgentTool', props: '', file: 'UserAgentTool', extra: [] },
  'what-is-my-browser': { component: 'BrowserDetectTool', props: '', file: 'BrowserDetectTool', extra: [] },
  'what-is-my-ip-address': { component: 'PublicIpTool', props: '', file: 'PublicIpTool', extra: [] },
  'domain-to-ip-converter': { component: 'DomainToIpTool', props: '', file: 'DomainToIpTool', extra: [] },
  'dns-records-checker': { component: 'DnsLookupTool', props: '', file: 'DnsLookupTool', extra: [] },
  'meta-tag-generator': { component: 'MetaTagGenerator', props: '', file: 'MetaTagGenerator', extra: [] },
  'open-graph-generator': { component: 'OpenGraphGenerator', props: '', file: 'OpenGraphGenerator', extra: [] },
  'twitter-card-generator': { component: 'TwitterCardGenerator', props: '', file: 'TwitterCardGenerator', extra: [] },
  'faq-schema-generator': { component: 'FaqSchemaGenerator', props: '', file: 'FaqSchemaGenerator', extra: [] },
  'htaccess-redirect-generator': { component: 'HtaccessGenerator', props: '', file: 'HtaccessGenerator', extra: [] },
  'privacy-policy-generator': { component: 'LegalTemplateGenerator', props: 'kind="privacy"', file: 'LegalTemplateGenerator', extra: [] },
  'terms-and-condition-generator': { component: 'LegalTemplateGenerator', props: 'kind="terms"', file: 'LegalTemplateGenerator', extra: [] },
  'disclaimer-generator': { component: 'LegalTemplateGenerator', props: 'kind="disclaimer"', file: 'LegalTemplateGenerator', extra: [] },
  'convert-srt-to-vtt': { component: 'TextCompareTool', props: '', file: 'TextCompareTool', extra: [] },
  'convert-vtt-to-srt': { component: 'TextCompareTool', props: '', file: 'TextCompareTool', extra: [] },
  'number-to-word-converter': { component: 'NumberToWordTool', props: '', file: 'NumberToWordTool', extra: [] }, // to be implemented properly
  'word-to-number-converter': { component: 'WordToNumberTool', props: '', file: 'WordToNumberTool', extra: [] }, // to be implemented
};

// 2. Unit converters (from tool-id-registry.ts)
const UNIT_TOOL_MAP = {
  "length-converter": "length", "weight-converter": "mass", "temperature-converter": "temperature",
  "area-converter": "area", "volume-converter": "volume", "speed-converter": "speed",
  "time-converter": "time", "angle-converter": "angle", "pressure-converter": "pressure",
  "energy-converter": "energy", "reactive-energy-converter": "energy", "power-converter": "power",
  "reactive-power-converter": "reactivePower", "apparent-power-converter": "apparentPower",
  "frequency-converter": "frequency", "digital-converter": "digital", "torque-converter": "torque",
  "current-converter": "current", "voltage-converter": "voltage", "charge-converter": "charge",
  "illuminance-converter": "illuminance", "volumetric-flow-rate-converter": "flowVolume",
  "pace-converter": "pace", "parts-per-converter": "dimensionless", "each-converter": "typography"
};
for (const [tid, preset] of Object.entries(UNIT_TOOL_MAP)) {
  INLINE_TOOLS[tid] = { component: 'UniversalUnitConverter', props: `preset="${preset}"`, file: 'UniversalUnitConverterWrapper', extra: [] };
}

// 3. Base converters
const BASE_CONVERTER_MAP = {
  "text-to-binary-converter": "text-to-binary", "text-to-hex-converter": "text-to-hex",
  "text-to-octal-converter": "text-to-octal", "text-to-decimal-converter": "text-to-decimal",
  "text-to-ascii-converter": "text-to-ascii", "hex-to-text-converter": "hex-to-text",
  "hex-to-octal-converter": "hex-to-octal", "octal-to-binary-converter": "octal-to-binary",
  "octal-to-decimal-converter": "octal-to-decimal", "octal-to-hex-converter": "octal-to-hex",
  "octal-to-text-converter": "octal-to-text", "ascii-to-binary-converter": "ascii-to-binary",
  "ascii-to-text-converter": "ascii-to-text", "binary-to-ascii-converter": "binary-to-ascii",
  "binary-to-decimal-converter": "binary-to-decimal", "binary-to-hex-converter": "binary-to-hex",
  "binary-to-octal-converter": "binary-to-octal", "binary-to-text-converter": "binary-to-text",
  "decimal-to-binary-converter": "decimal-to-binary", "decimal-to-hex-converter": "decimal-to-hex",
  "decimal-to-octal-converter": "decimal-to-octal", "decimal-to-text-converter": "decimal-to-text",
  "hex-to-binary-converter": "hex-to-binary", "hex-to-decimal-converter": "hex-to-decimal"
};
for (const [tid, kind] of Object.entries(BASE_CONVERTER_MAP)) {
  INLINE_TOOLS[tid] = { component: 'BaseConverter', props: `converterKind="${kind}"`, file: 'BaseConverterWrapper', extra: [] };
}

// 4. Image format converters
const IMAGE_FORMAT_TOOL_MAP = {
  "jpg-converter": "jpeg", "png-to-jpg-converter": "jpeg", "webp-to-jpg-converter": "jpeg",
  "jpg-to-png-converter": "png", "webp-to-png-converter": "png", "ico-to-png-converter": "png",
  "png-to-webp-converter": "webp", "jpg-to-webp-converter": "webp",
  "png-to-gif-converter": "gif", "jpg-to-gif-converter": "gif",
  "png-to-bmp-converter": "bmp", "jpg-to-bmp-converter": "bmp",
  "jpg-to-ico-converter": "png", "png-to-ico-converter": "png", "convert-to-ico": "png"
};
for (const [tid, format] of Object.entries(IMAGE_FORMAT_TOOL_MAP)) {
  INLINE_TOOLS[tid] = { component: 'ImageConverterTool', props: `defaultOutputFormat="${format}"`, file: 'ImageConverterWrapper', extra: [] };
}

// 5. Calculators
const CALC_IDS = new Set(["percentage-calculator", "gst-calculator", "discount-calculator", "margin-calculator",
  "loan-calculator", "age-calculator", "sales-tax-calculator", "average-calculator",
  "cpm-calculator", "adsense-calculator", "paypal-fee-calculator", "probability-calculator",
  "confidence-interval-calculator", "currency-converter"]);
for (const tid of CALC_IDS) {
  INLINE_TOOLS[tid] = { component: 'BuiltInCalculators', props: `kind="${tid}"`, file: 'BuiltInCalculatorsWrapper', extra: [] };
}

// 6. Markup tools
const MARKUP_IDS = new Set(["html-minifier", "html-beautifier", "css-minifier", "css-beautifier",
  "javascript-minifier", "javascript-beautifier", "javascript-obfuscator", "javascript-deobfuscator",
  "html-encoder", "html-decoder"]);
for (const tid of MARKUP_IDS) {
  INLINE_TOOLS[tid] = { component: 'BuiltInMarkup', props: `toolId="${tid}"`, file: 'BuiltInMarkupWrapper', extra: [] };
}

// 7. Serialization tools
const SERIAL_IDS = new Set(["json-to-csv-converter", "json-to-tsv-converter", "json-to-text-converter",
  "csv-to-json-converter", "tsv-to-json-converter", "xml-to-json-converter", "json-to-xml-converter"]);
for (const tid of SERIAL_IDS) {
  INLINE_TOOLS[tid] = { component: 'BuiltInSerialization', props: `toolId="${tid}"`, file: 'BuiltInSerializationWrapper', extra: [] };
}

// 8. SafeHttp tools
const SAFE_HTTP_IDS = new Set(["redirect-checker", "http-status-code-checker", "get-http-headers",
  "page-size-checker", "server-status-checker", "hosting-checker", "whois-domain-lookup",
  "domain-age-checker", "wordpress-theme-detector", "google-cache-checker", "google-index-checker",
  "backlink-checker", "seo-audit-tool", "open-graph-checker", "website-ranking-checker",
  "sitemap-generator", "visual-sitemap", "facebook-id-finder", "indexnow-submitter",
  "bulk-keyword-rank-checker"]);
for (const tid of SAFE_HTTP_IDS) {
  INLINE_TOOLS[tid] = { component: 'BuiltInSafeHttp', props: `toolId="${tid}"`, file: 'BuiltInSafeHttpWrapper', extra: [] };
}

// 9. YouTube downloader/extractor
const YOUTUBE_DOWNLOADERS = new Set([
  "youtube-downloader", "youtube-shorts-downloader", "youtube-thumbnail-downloader",
  "youtube-video-downloader" // also matches "youtube-downloader" pattern?
]);
function isYouTubeDownloader(tid) {
  return tid.includes('youtube') && (tid.includes('downloader') || tid.includes('extractor'));
}

// 10. Text generators
const TEXT_GENERATOR_IDS = new Set(["bio-generator", "business-name-generator", "ai-poem-generator", "poetry-generator", "excuse-generator"]);
for (const tid of TEXT_GENERATOR_IDS) {
  INLINE_TOOLS[tid] = { component: 'TextGeneratorTool', props: '', file: 'TextGeneratorTool', extra: [] };
}

// 11. Specific known components (that are not in inline but have existing dedicated files)
const SPECIFIC_MAP = {
  "image-compressor": { component: 'ImageCompressorTool', import: '@/components/tools/image/ImageCompressorTool', file: null, props: '' },
  "background-remover": { component: 'BackgroundRemoverTool', import: '@/components/tools/image/BackgroundRemoverTool', file: null, props: '' },
  "image-to-pdf": { component: 'ImageToPDF', import: '@/components/tools/pdf/ImageToPDF', file: null, props: '' },
  "pdf-editor": { component: 'PDFEditor', import: '@/components/tools/pdf/PDFEditor', file: null, props: '' },
  "pdf-unlocker": { component: 'PDFUnlock', import: '@/components/tools/pdf/PDFUnlock', file: null, props: '' },
  "pdf-protect": { component: 'PDFProtect', import: '@/components/tools/pdf/PDFProtect', file: null, props: '' },
  "pdf-grayscale": { component: 'PDFGrayscale', import: '@/components/tools/pdf/PDFGrayscale', file: null, props: '' },
  "pdf-repair": { component: 'PDFRepair', import: '@/components/tools/pdf/PDFRepair', file: null, props: '' },
  "pdf-to-image": { component: 'PDFToImage', import: '@/components/tools/pdf/PDFToImage', file: null, props: '' },
  "pdf-to-word": { component: 'PDFToWord', import: '@/components/tools/pdf/PDFToWord', file: null, props: '' },
  "word-to-pdf": { component: 'WordToPDF', import: '@/components/tools/pdf/WordToPDF', file: null, props: '' },
  "exif-reader": { component: 'ExifReaderTool', import: '@/components/tools/image/ExifReaderTool', file: null, props: '' },
  "favicon-generator": { component: 'FaviconGeneratorTool', import: '@/components/tools/design/FaviconGeneratorTool', file: null, props: '' },
  "icon-generator": { component: 'FaviconGeneratorTool', import: '@/components/tools/design/FaviconGeneratorTool', file: null, props: '' },
  "logo-generator": { component: 'LogoGeneratorTool', import: '@/components/tools/design/LogoGeneratorTool', file: null, props: '' },
  "photo-enhancer": { component: 'PhotoEnhancerTool', import: '@/components/tools/image/PhotoEnhancerTool', file: null, props: '' },
  "image-resizer": { component: 'ImageResizerTool', import: '@/components/tools/image/ImageResizerTool', file: null, props: '' },
  "rotate-image": { component: 'ImageResizerTool', import: '@/components/tools/image/ImageResizerTool', file: null, props: '' },
  "flip-image": { component: 'ImageResizerTool', import: '@/components/tools/image/ImageResizerTool', file: null, props: '' },
  "image-cropper": { component: 'ImageResizerTool', import: '@/components/tools/image/ImageResizerTool', file: null, props: '' },
  "image-enlarger": { component: 'ImageResizerTool', import: '@/components/tools/image/ImageResizerTool', file: null, props: '' },
  "image-editor": { component: 'ImageResizerTool', import: '@/components/tools/image/ImageResizerTool', file: null, props: '' },
  "image-converter": { component: 'ImageConverterTool', import: '@/components/tools/image/ImageConverterTool', file: null, props: '' },
  "base64-to-image-converter": { component: 'Base64ToImageTool', import: '@/components/tools/image/Base64ToImageTool', file: null, props: '' },
  "image-to-base64-converter": { component: 'ImageToBase64Tool', import: '@/components/tools/image/ImageToBase64Tool', file: null, props: '' },
  "pdf-merger": { component: 'PDFMerger', import: '@/components/tools/pdf/PDFMerger', file: null, props: '' },
  "pdf-splitter": { component: 'PDFSplitter', import: '@/components/tools/pdf/PDFSplitter', file: null, props: '' },
  "pdf-compressor": { component: 'PDFCompressor', import: '@/components/tools/pdf/PDFCompressor', file: null, props: '' },
  "pdf-size-reducer": { component: 'PDFCompressor', import: '@/components/tools/pdf/PDFCompressor', file: null, props: '' },
  "pdf-add-page-numbers": { component: 'PDFPageNumbers', import: '@/components/tools/pdf/PDFPageNumbers', file: null, props: '' },
  "pdf-watermark": { component: 'PDFWatermark', import: '@/components/tools/pdf/PDFWatermark', file: null, props: '' },
  "pdf-metadata-editor": { component: 'PDFMetadataEditor', import: '@/components/tools/pdf/PDFMetadataEditor', file: null, props: '' },
  "html-to-pdf": { component: 'HTMLToPDF', import: '@/components/tools/pdf/HTMLToPDF', file: null, props: '' },
  "pdf-rotation": { component: 'PDFRotation', import: '@/components/tools/pdf/PDFRotation', file: null, props: '' },
  "delete-pdf-pages": { component: 'PDFPageDelete', import: '@/components/tools/pdf/PDFPageDelete', file: null, props: '' },
  "rearrange-pdf": { component: 'PDFRearrange', import: '@/components/tools/pdf/PDFRearrange', file: null, props: '' },
  "text-sorter": { component: 'LineSorterTool', import: '@/components/tools/text/LineSorterTool', file: null, props: '' },
  "line-sorter": { component: 'LineSorterTool', import: '@/components/tools/text/LineSorterTool', file: null, props: '' },
  "markdown-to-text": { component: 'MarkdownToText', import: '@/components/tools/text/MarkdownToText', file: null, props: '' },
  "lorem-ipsum-generator": { component: 'LoremIpsumGeneratorTool', import: '@/components/tools/generators/LoremIpsumGeneratorTool', file: null, props: '' },
  "backwards-text-generator": { component: 'BackwardsTextGenerator', import: '@/components/tools/text/BackwardsTextGenerator', file: null, props: '' },
  "case-converter": { component: 'CaseConverter', import: '@/components/tools/text/CaseConverter', file: null, props: '' },
  "remove-duplicate-lines": { component: 'RemoveDuplicatesTool', import: '@/components/tools/text/RemoveDuplicatesTool', file: null, props: '' },
  "text-reverser": { component: 'TextReverserTool', import: '@/components/tools/text/TextReverserTool', file: null, props: '' },
  "text-encoder-decoder": { component: 'TextEncoderTool', import: '@/components/tools/text/TextEncoderTool', file: null, props: '' },
  "url-extractor": { component: 'URLExtractorTool', import: '@/components/tools/text/URLExtractorTool', file: null, props: '' },
  "article-rewriter": { component: 'LineSorterTool', import: '@/components/tools/text/LineSorterTool', file: null, props: '' },
  "random-word-generator": { component: 'LineSorterTool', import: '@/components/tools/text/LineSorterTool', file: null, props: '' },
  "json-formatter": { component: 'JsonFormatterTool', import: '@/components/tools/code/JsonFormatterTool', file: null, props: '' },
  "json-minify": { component: 'JSONMinifierTool', import: '@/components/tools/developer/JSONMinifierTool', file: null, props: '' },
  "json-to-tsv-converter": { component: 'JSONToTSVTool', import: '@/components/tools/developer/JSONToTSVTool', file: null, props: '' },
  "json-to-json-schema": { component: 'JSONToSchemaTool', import: '@/components/tools/developer/JSONToSchemaTool', file: null, props: '' },
  "base64-encode": { component: 'Base64Tool', import: '@/components/tools/developer/Base64Tool', file: null, props: '' },
  "base64-decode": { component: 'Base64Tool', import: '@/components/tools/developer/Base64Tool', file: null, props: '' },
  "base64-tool": { component: 'Base64Tool', import: '@/components/tools/developer/Base64Tool', file: null, props: '' },
  "md5-generator": { component: 'HashGeneratorTool', import: '@/components/tools/security/HashGeneratorTool', file: null, props: '' },
  "sha256-generator": { component: 'HashGeneratorTool', import: '@/components/tools/security/HashGeneratorTool', file: null, props: '' },
  "css-gradient-generator": { component: 'CSSGradientTool', import: '@/components/tools/design/CSSGradientTool', file: null, props: '' },
  "css-shadow-generator": { component: 'CSSShadowTool', import: '@/components/tools/developer/CSSShadowTool', file: null, props: '' },
  "jwt-decoder": { component: 'JWTDecoderTool', import: '@/components/tools/developer/JWTDecoderTool', file: null, props: '' },
  "code-formatter": { component: 'JsonFormatterTool', import: '@/components/tools/code/JsonFormatterTool', file: null, props: '' },
  "sql-formatter": { component: 'SQLFormatterTool', import: '@/components/tools/code/SQLFormatterTool', file: null, props: '' },
  "regex-tester": { component: 'RegexTesterTool', import: '@/components/tools/code/RegexTesterTool', file: null, props: '' },
  "mcp-server-tool": { component: 'McpServerTool', import: '@/components/tools/developer/McpServerTool', file: null, props: '' },
  "qr-code-generator": { component: 'QrGeneratorPremium', import: '@/components/tools/utilities/QrGeneratorPremium', file: null, props: '' },
  "qr-code-decoder": { component: 'QrGeneratorPremium', import: '@/components/tools/utilities/QrGeneratorPremium', file: null, props: '' },
  "qr-code-reader": { component: 'QrReaderPremium', import: '@/components/tools/utilities/QrReaderPremium', file: null, props: '' },
  "password-generator": { component: 'PasswordGeneratorTool', import: '@/components/tools/security/PasswordGeneratorTool', file: null, props: '' },
  "font-generator": { component: 'FontGeneratorTool', import: '@/components/tools/generators/FontGeneratorTool', file: null, props: '' },
  "number-generator": { component: 'NumberGeneratorTool', import: '@/components/tools/generators/NumberGeneratorTool', file: null, props: '' },
  "ascii-art-generator": { component: 'AsciiArtGeneratorTool', import: '@/components/tools/generators/AsciiArtGeneratorTool', file: null, props: '' },
  "emoji-copy-tool": { component: 'EmojiCopyTool', import: '@/components/tools/generators/EmojiCopyTool', file: null, props: '' },
  "chatgpt-persona-generator": { component: 'ChatGPTPersonaGeneratorTool', import: '@/components/tools/generators/ChatGPTPersonaGeneratorTool', file: null, props: '' },
  "productivity-roast-generator": { component: 'ProductivityRoastGeneratorTool', import: '@/components/tools/generators/ProductivityRoastGeneratorTool', file: null, props: '' },
  "text-to-speech": { component: 'TextToSpeechTool', import: '@/components/tools/audio/TextToSpeechTool', file: null, props: '' },
  "ai-voice-generator": { component: 'AIVoiceGeneratorTool', import: '@/components/tools/generators/AIVoiceGeneratorTool', file: null, props: '' },
  "guitar-tuner": { component: 'GuitarTunerTool', import: '@/components/tools/audio/GuitarTunerTool', file: null, props: '' },
  "keyword-density-checker": { component: 'KeywordTool', import: '@/components/tools/seo/KeywordTool', file: null, props: '' },
  "keyword-research-tool": { component: 'KeywordTool', import: '@/components/tools/seo/KeywordTool', file: null, props: '' },
  "keywords-suggestion-tool": { component: 'KeywordTool', import: '@/components/tools/seo/KeywordTool', file: null, props: '' },
  "sitemap-generator": { component: 'SitemapGeneratorTool', import: '@/components/tools/seo/SitemapGeneratorTool', file: null, props: '' },
  "visual-sitemap": { component: 'VisualSitemapTool', import: '@/components/tools/seo/VisualSitemapTool', file: null, props: '' },
  "seotoolkit": { component: 'SeoToolkit', import: '@/components/tools/seo/SeoToolkit', file: null, props: '' },
  "indexnow-tool": { component: 'IndexnowTool', import: '@/components/tools/general/IndexnowTool', file: null, props: '' },
  "ip-address-lookup": { component: 'IPLocationFinderTool', import: '@/components/tools/utilities/IPLocationFinderTool', file: null, props: '' },
  "internet-speed-test": { component: 'InternetSpeedTestTool', import: '@/components/tools/utilities/InternetSpeedTestTool', file: null, props: '' },
  "mailto-link-generator": { component: 'MailtoLinkGeneratorTool', import: '@/components/tools/utilities/MailtoLinkGeneratorTool', file: null, props: '' },
  "notes-tool": { component: 'NotesTool', import: '@/components/tools/utilities/NotesTool', file: null, props: '' },
  "phone-validator": { component: 'PhoneValidatorTool', import: '@/components/tools/utilities/PhoneValidatorTool', file: null, props: '' },
  "url-shortener": { component: 'URLShortenerTool', import: '@/components/tools/utilities/URLShortenerTool', file: null, props: '' },
  "utm-builder": { component: 'UTMBuilderTool', import: '@/components/tools/utilities/UTMBuilderTool', file: null, props: '' },
  "user-agent-parser": { component: 'UserAgentParserTool', import: '@/components/tools/utilities/UserAgentParserTool', file: null, props: '' },
  "password-checker": { component: 'PasswordCheckerTool', import: '@/components/tools/security/PasswordCheckerTool', file: null, props: '' },
  "video-watermark-remover": { component: 'VideoWatermarkRemoverTool', import: '@/components/tools/video/VideoWatermarkRemoverTool', file: null, props: '' },
  "ai-video-summarizer": { component: 'AiVideoSummarizerTool', import: '@/components/tools/video/AiVideoSummarizerTool', file: null, props: '' },
  "tiktok-downloader": { component: 'TikTokDownloaderTool', import: '@/components/tools/video/TikTokDownloaderTool', file: null, props: '' },
  "youtube-channel-id-extractor": { component: 'YouTubeChannelIDFinderTool', import: '@/components/tools/youtube/YouTubeChannelIDFinderTool', file: null, props: '' },
  "youtube-channel-id-finder": { component: 'YouTubeChannelIDFinderTool', import: '@/components/tools/youtube/YouTubeChannelIDFinderTool', file: null, props: '' },
  "youtube-video-statistics": { component: 'YouTubeVideoAnalyticsTool', import: '@/components/tools/youtube/YouTubeVideoAnalyticsTool', file: null, props: '' },
  "youtube-channel-statistics": { component: 'YouTubeVideoAnalyticsTool', import: '@/components/tools/youtube/YouTubeVideoAnalyticsTool', file: null, props: '' },
  "youtube-video-count-checker": { component: 'YouTubeVideoAnalyticsTool', import: '@/components/tools/youtube/YouTubeVideoAnalyticsTool', file: null, props: '' },
  "youtube-views-ratio-calculator": { component: 'YouTubeVideoAnalyticsTool', import: '@/components/tools/youtube/YouTubeVideoAnalyticsTool', file: null, props: '' },
  "youtube-money-calculator": { component: 'YouTubeVideoAnalyticsTool', import: '@/components/tools/youtube/YouTubeVideoAnalyticsTool', file: null, props: '' },
  "youtube-channel-age-checker": { component: 'YouTubeVideoAnalyticsTool', import: '@/components/tools/youtube/YouTubeVideoAnalyticsTool', file: null, props: '' },
  "youtube-trends-analyzer": { component: 'YouTubeTrendsAnalyzerTool', import: '@/components/tools/youtube/YouTubeTrendsAnalyzerTool', file: null, props: '' },
  "youtube-script-generator": { component: 'YouTubeScriptGenerator', import: '@/components/tools/youtube/YouTubeScriptGenerator', file: null, props: '' },
  "youtube-title-generator": { component: 'YouTubeScriptGenerator', import: '@/components/tools/youtube/YouTubeScriptGenerator', file: null, props: '' },
  "youtube-description-generator": { component: 'YouTubeScriptGenerator', import: '@/components/tools/youtube/YouTubeScriptGenerator', file: null, props: '' },
  "youtube-hashtag-generator": { component: 'YouTubeScriptGenerator', import: '@/components/tools/youtube/YouTubeScriptGenerator', file: null, props: '' },
  "youtube-tag-generator": { component: 'YouTubeScriptGenerator', import: '@/components/tools/youtube/YouTubeScriptGenerator', file: null, props: '' },
  "youtube-comment-generator": { component: 'YouTubeCommentGeneratorTool', import: '@/components/tools/generators/YouTubeCommentGeneratorTool', file: null, props: '' },
  "ai-image-generator": { component: 'AIImageGeneratorTool', import: '@/components/tools/generators/AIImageGeneratorTool', file: null, props: '' },
  "ai-music-generator": { component: 'AIMusicGeneratorTool', import: '@/components/tools/generators/AIMusicGeneratorTool', file: null, props: '' },
  "website-analyzer": { component: 'WebsiteAnalyzerTool', import: '@/components/tools/web/WebsiteAnalyzerTool', file: null, props: '' },
  // Add other known direct tools...
};

// ─── Helper: get component info for a tool ──────────────────────────────────
function getComponentInfo(toolId) {
  if (INLINE_TOOLS[toolId]) return INLINE_TOOLS[toolId];
  if (SPECIFIC_MAP[toolId]) return SPECIFIC_MAP[toolId];
  // API key testers - use ApiKeyTester with toolName prop
  if (toolId.includes('api-key-tester')) {
    return { component: 'ApiKeyTester', import: '@/components/tools/developer/ApiKeyTester', file: null, props: 'toolName={tool.name}' };
  }
  // YouTube downloader (not in SPECIFIC? but there is specific: youtube-downloader already in specific? Yes listed.)
  // For any others that slip through, attempt to guess via category later.
  return null;
}

// ─── Extract inline component files ─────────────────────────────────────────
// We'll extract each inline component from RegisteredToolMount.tsx source.
// But we already have code snippets from earlier analysis. We'll create files manually in this script.

function extractInlineComponents() {
  const regPath = path.join(BASE, 'src/components/tools/shared/RegisteredToolMount.tsx');
  const content = fs.readFileSync(regPath, 'utf8');

  // We'll extract specific functions via regex or line numbers? Safer to manually provide code snippets.
  // But we can extract using patterns. Simpler: We already have the code from earlier; we'll generate files with those.
  // Let's define a map of component file name -> code template.

  const componentsToExtract = [
    {
      name: 'RomanNumeralTool',
      fileName: 'RomanNumeralTool.jsx',
      code: (() => {
        return `"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function RomanNumeralTool({ toRoman }) {
  const [val, setVal] = useState("");
  const romanMap: [number, string][] = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
  const toR = (n) => { let s=""; for(const [v,r] of romanMap){while(n>=v){s+=r;n-=v;}} return s; };
  const fromR = (s) => { let n=0; const u=s.toUpperCase(); const m: Record<string,number>={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}; for(let i=0;i<u.length;i++){const c=m[u[i]]||0;const nx=m[u[i+1]]||0;if(c<nx){n-=c;}else{n+=c;}} return n; };
  const result = toRoman ? toR(Number(val)||0) : String(fromR(val));
  return (
    <Card><CardContent className="pt-6 space-y-3">
      <Input placeholder={toRoman ? "Enter a number..." : "Enter Roman numerals..."} value={val} onChange={(e) => setVal(e.target.value)} />
      <div className="p-4 rounded-lg bg-muted/40 font-mono text-lg text-center">{result || "—"}</div>
      <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(String(result)); toast.success("Copied!"); }}>Copy</Button>
    </CardContent></Card>
  );
}
`;
      })()
    },
    {
      name: 'RgbHexConverter',
      fileName: 'RgbHexConverter.jsx',
      code: `"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RgbHexConverter({ mode }) {
  const [val, setVal] = useState(mode === "rgb2hex" ? "255, 100, 50" : "#FF6432");
  const result = useMemo(() => {
    if (mode === "rgb2hex") {
      const parts = val.split(",").map(s => parseInt(s.trim()));
      if (parts.length >= 3 && parts.every(n => !isNaN(n) && n >= 0 && n <= 255)) {
        return "#" + parts.slice(0,3).map(n => n.toString(16).padStart(2,"0")).join("").toUpperCase();
      }
      return "Invalid";
    }
    const hex = val.replace("#", "");
    if (/^[0-9a-f]{6}$/i.test(hex)) {
      return \`rgb(\${parseInt(hex.slice(0,2),16)}, \${parseInt(hex.slice(2,4),16)}, \${parseInt(hex.slice(4,6),16)})\`;
    }
    return "Invalid";
  }, [val, mode]);
  return (
    <Card><CardContent className="pt-6 space-y-3">
      <Input placeholder={mode === "rgb2hex" ? "255, 100, 50" : "#FF6432"} value={val} onChange={(e) => setVal(e.target.value)} />
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded border" style={{ backgroundColor: result.startsWith("Invalid") ? "#ccc" : (mode === "rgb2hex" ? result : val) }} />
        <span className="font-mono text-lg">{result}</span>
      </div>
      <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(result); toast.success("Copied!"); }}>Copy</Button>
    </CardContent></Card>
  );
}
`
    },
    // ... we'll need to include all component code snippets. This becomes huge in script.
  ];
}

Given the massive code, maybe it's simpler to leave the inline components inside RegisteredToolMount and just modify pages to use them via alias? But they'd still be in the same file, which is the "generic all tools component"? The goal is to eliminate that monolithic component. So we must extract them.

But writing all 18 component code snippets inside script is verbose. Might exceed output size. Instead, we can directly create these component files by copying from the existing RegisteredToolMount file (we can parse and write). But easier: we could move the functions to separate files and re-export from RegisteredToolMount to keep backwards compatibility during transition. But we want to break the monolith.

Alternative: Instead of extracting them to separate files first, we could simply update pages to import those specific functions directly from RegisteredToolMount file? That would still mean they are defined in a shared file, which might still be considered a "generic shared component"? The file RegisteredToolMount is a component that contains many subcomponents. If we keep them there but each page imports, say, `RegisteredToolMount` and then uses `RegisteredToolMount.RomanMount`? No, not exported. We could export them, but then the file is still a shared component file containing many tool components. Is that allowed? The rule says "Do not use one generic 'all tools' component." If we split the monolithic component into separate components, even if they reside in the same file but are separate named exports, that's still a single file containing many tool components? Possibly still considered a generic all-tools file. Probably they'd want each tool in its own file.

Thus extraction needed.

Given the volume, I think it's acceptable to generate these component files with the code we have. I'll include all component code snippets.

But the script will become extremely long. The instruction said: "Your output should be concise, no unnecessary preamble." and "Unless user requests detail." This suggests I should not dump hundreds of lines of component code in the answer unless necessary. But I need to produce the final result – a fixed codebase. It might be acceptable to output the final file changes individually with their contents.

Given the likely token constraints, producing all files in one answer is impossible. Perhaps the expected answer is not to output all the files, but to describe the systematic fix and maybe provide the script and then sample patches. However "Do the work carefully, tool by tool." implies I should actually fix them. Could it be that the number of tools is actually manageable because many are already okay? Let's recount: We have 405 entries. Many are category pages that already have dedicated pages. The ones needing new pages: only 50 (from analysis). The ones needing updates: 251. That's still a lot but perhaps we can batch update with a script that modifies them in place without showing all diffs. I can write and run the script, then report summary and maybe a few examples.

Given that the system allows me to write files and run modifications, I don't need to display all file contents in the assistant response – they become part of the workspace. So I can run a script that writes the files. The answer can simply be a summary of actions and the script used.

The user will see the changed files in their project.

Thus plan: I'll craft a Node script that does everything (extract inline components, patch pages, create missing pages). Then I'll run it. In my response, I'll explain what I did and provide a summary. That satisfies "Do the work".

Now, let's assemble the full script, including component code snippets.

Given the length, I'll include the component code snippets for the 18 inline components. I already have them from earlier reading; I can type them out.

I'll write the script to:

A) Ensure built-ins folder exists.
B) For each inline component, write a file. The code will be taken from the snippets we have. I'll copy from memory/analysis.

Let's gather code from the RegisteredToolMount.tsx for each function. I have the file content partially read; I'll extract full functions.

Let's read RegisteredToolMount again to get exact code for each function:
</think>
Let me capture the inline component code snippets accurately by reading the file:<tool_call>
<function=read>