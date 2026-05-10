#!/usr/bin/env node
/**
 * Tool: Fix all 30tools.com tool pages
 * Purpose: Replace generic RegisteredToolMount with dedicated component imports
 *          and ensure each tool has a dedicated page file with proper SEO.
 */

const fs = require('fs');
const path = require('path');

const BASE = process.cwd();
const APP_DIR = path.join(BASE, 'src/app');
const COMP_DIR = path.join(BASE, 'src/components/tools');

// Category mapping from tool ID prefix? Not always. Use tools.json.
const toolsJson = JSON.parse(fs.readFileSync(path.join(BASE, 'src/constants/tools.json'), 'utf8'));

// Build tool map: id -> {route, category, ...}
const tools = [];
for (const cat of Object.values(toolsJson.categories)) {
  for (const t of cat.tools) {
    tools.push(t);
  }
}
const toolMap = new Map(tools.map(t => [t.id, t]));

// ============ Helper: get component import for a tool
function getComponentInfo(toolId, category) {
  // Known mappings from tool-registry and other sets.
  // Use the same logic as RegisteredToolMount but return a string path or inline code.

  // 1. Image format tools
  const imgMap = {
    "jpg-converter": "ImageConverterTool", "png-to-jpg-converter": "ImageConverterTool",
    "webp-to-jpg-converter": "ImageConverterTool", "jpg-to-png-converter": "ImageConverterTool",
    "webp-to-png-converter": "ImageConverterTool", "ico-to-png-converter": "ImageConverterTool",
    "png-to-webp-converter": "ImageConverterTool", "jpg-to-webp-converter": "ImageConverterTool",
    "png-to-gif-converter": "ImageConverterTool", "jpg-to-gif-converter": "ImageConverterTool",
    "png-to-bmp-converter": "ImageConverterTool", "jpg-to-bmp-converter": "ImageConverterTool",
    "jpg-to-ico-converter": "ImageConverterTool", "png-to-ico-converter": "ImageConverterTool",
    "convert-to-ico": "ImageConverterTool"
  };
  if (imgMap[toolId]) {
    return { import: `@/components/tools/image/ImageConverterTool`, component: 'ImageConverterTool', prop: imgMap[toolId] === "ImageConverterTool" ? `defaultOutputFormat="${toolId.includes('png') ? 'png' : toolId.includes('jpg') || toolId.includes('jpeg') ? 'jpeg' : toolId.includes('webp') ? 'webp' : toolId.includes('gif') ? 'gif' : toolId.includes('bmp') ? 'bmp' : 'jpeg'}"` : '' };
  }

  // For image-compressor already handled; background-remover, exif-reader etc have dedicated.

  // 2. Unit converters
  const unitMap = {
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
  if (unitMap[toolId]) {
    return { import: `@/components/tools/built-ins/UniversalUnitConverter`, component: 'UniversalUnitConverter', prop: `preset="${unitMap[toolId]}"` };
  }

  // 3. Base converters
  const baseMap = {
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
  if (baseMap[toolId]) {
    return { import: `@/components/tools/shared/BaseConverter`, component: 'BaseConverter', prop: `converterKind="${baseMap[toolId]}"` };
  }

  // 4. Calculators
  const calcIds = new Set(["percentage-calculator", "gst-calculator", "discount-calculator", "margin-calculator",
    "loan-calculator", "age-calculator", "sales-tax-calculator", "average-calculator",
    "cpm-calculator", "adsense-calculator", "paypal-fee-calculator", "probability-calculator",
    "confidence-interval-calculator", "currency-converter"]);
  if (calcIds.has(toolId)) {
    return { import: `@/components/tools/built-ins/BuiltInCalculators`, component: 'BuiltInCalculators', prop: `kind="${toolId}"` };
  }

  // 5. Markup tools
  const markupIds = new Set(["html-minifier", "html-beautifier", "css-minifier", "css-beautifier",
    "javascript-minifier", "javascript-beautifier", "javascript-obfuscator", "javascript-deobfuscator",
    "html-encoder", "html-decoder"]);
  if (markupIds.has(toolId)) {
    return { import: `@/components/tools/built-ins/BuiltInMarkup`, component: 'BuiltInMarkup', prop: `toolId="${toolId}"` };
  }

  // 6. Serialization tools
  const serialIds = new Set(["json-to-csv-converter", "json-to-tsv-converter", "json-to-text-converter",
    "csv-to-json-converter", "tsv-to-json-converter", "xml-to-json-converter", "json-to-xml-converter"]);
  if (serialIds.has(toolId)) {
    return { import: `@/components/tools/built-ins/BuiltInSerialization`, component: 'BuiltInSerialization', prop: `toolId="${toolId}"` };
  }

  // 7. SafeHTTP tools
  const safeHttpIds = new Set(["redirect-checker", "http-status-code-checker", "get-http-headers",
    "page-size-checker", "server-status-checker", "hosting-checker", "whois-domain-lookup",
    "domain-age-checker", "wordpress-theme-detector", "google-cache-checker", "google-index-checker",
    "backlink-checker", "seo-audit-tool", "open-graph-checker", "website-ranking-checker",
    "sitemap-generator", "visual-sitemap", "facebook-id-finder", "indexnow-submitter",
    "bulk-keyword-rank-checker"]);
  if (safeHttpIds.has(toolId)) {
    return { import: `@/components/tools/built-ins/BuiltInSafeHttp`, component: 'BuiltInSafeHttp', prop: `toolId="${toolId}"` };
  }

  // 8. YouTube downloader/extractor → DownloaderEngine
  if (toolId.includes('downloader') || toolId.includes('extractor') || ["mp4-to-mp3","fb-video-saver","reddit-media-saver","shrink-mp3-size","modify-mp3-file","save-fb-stories-anonymous","save-instagram-clips","ig-highlights-saver","save-insta-pfp","insta-reels-saver","save-reels-video","save-twitter-videos","tiktok-saver-no-watermark","save-tiktok-mp4","save-ig-content","mp3-from-tiktok","pinterest-clip-saver","snapchat-saver-online","save-snaps-to-gallery"].includes(toolId)) {
    return { import: `@/components/tools/downloaders/DownloaderEngine`, component: 'DownloaderEngine', prop: '' };
  }

  // 9. YouTube other → YouTubeChannelIDFinderTool
  if (toolId.startsWith('youtube-') && !toolId.includes('downloader') && !toolId.includes('extractor')) {
    return { import: `@/components/tools/youtube/YouTubeChannelIDFinderTool`, component: 'YouTubeChannelIDFinderTool', prop: '' };
  }

  // 10. Text generators
  const textGenIds = new Set(["bio-generator", "business-name-generator", "ai-poem-generator", "poetry-generator", "excuse-generator"]);
  if (textGenIds.has(toolId)) {
    return { import: `@/components/tools/generators/TextGeneratorTool`, component: 'TextGeneratorTool', prop: '' };
  }

  // 11. Inline mini components (extracted to separate files):
  // These will map to files we create in src/components/tools/built-ins/
  const inlineMap = {
    "number-to-roman-numerals": "RomanNumeralTool",
    "roman-numerals-to-number": "RomanNumeralTool",
    "rgb-to-hex-converter": "RgbHexConverter",
    "hex-to-rgb-converter": "RgbHexConverter",
    "color-converter": "RgbHexConverter",
    "random-uuid-generator": "UuidGenerator",
    "credit-card-generator": "UuidGenerator",
    "credit-card-validator": "UuidGenerator",
    "url-encode": "UrlCodecTool",
    "url-decode": "UrlCodecTool",
    "url-parser": "UrlParserTool",
    "url-opener": "UrlParserTool",
    "url-rewriting-tool": "UrlParserTool",
    "what-is-my-screen-resolution": "ScreenResolutionTool",
    "screen-resolution-simulator": "ScreenResolutionTool",
    "what-is-my-user-agent": "UserAgentTool",
    "what-is-my-browser": "BrowserDetectTool",
    "what-is-my-ip-address": "PublicIpTool",
    "domain-to-ip-converter": "DomainToIPTool",
    "dns-records-checker": "DnsLookupTool",
    "meta-tag-generator": "MetaTagGenerator",
    "open-graph-generator": "OpenGraphGenerator",
    "twitter-card-generator": "TwitterCardGenerator",
    "faq-schema-generator": "FaqSchemaGenerator",
    "htaccess-redirect-generator": "HtaccessGenerator",
    "privacy-policy-generator": "LegalTemplateGenerator",
    "terms-and-condition-generator": "LegalTemplateGenerator",
    "disclaimer-generator": "LegalTemplateGenerator",
    "convert-srt-to-vtt": "TextCompareTool",
    "convert-vtt-to-srt": "TextCompareTool",
    "number-to-word-converter": "WordCounterTool",
    "word-to-number-converter": "WordCounterTool",
    "json-editor": "JsonFormatterTool", "json-viewer": "JsonFormatterTool", "json-validator": "JsonFormatterTool"
  };
  if (inlineMap[toolId]) {
    const compName = inlineMap[toolId];
    // Determine path: most in built-ins, some in other folders
    if (["TextCompareTool","WordCounterTool"].includes(compName)) {
      return { import: `@/components/tools/text/${compName}`, component: compName, prop: '' };
    } else if (compName === "JsonFormatterTool") {
      return { import: `@/components/tools/code/JsonFormatterTool`, component: compName, prop: '' };
    } else {
      return { import: `@/components/tools/built-ins/${compName}`, component: compName, prop: '' };
    }
  }

  // 12. Specific known components:
  const known = {
    "image-compressor": "ImageCompressorTool",
    "background-remover": "BackgroundRemoverTool",
    "image-to-pdf": "ImageToPDF",
    "pdf-editor": "PDFEditor",
    "pdf-unlocker": "PDFUnlock",
    "pdf-grayscale": "PDFGrayscale",
    "pdf-repair": "PDFRepair",
    "pdf-to-image": "PDFToImage",
    "pdf-to-word": "PDFToWord",
    "word-to-pdf": "WordToPDF",
    "exif-reader": "ExifReaderTool",
    "favicon-generator": "FaviconGeneratorTool",
    "icon-generator": "FaviconGeneratorTool",
    "logo-generator": "LogoGeneratorTool",
    "photo-enhancer": "PhotoEnhancerTool",
    "image-resizer": "ImageResizerTool",
    "rotate-image": "ImageResizerTool",
    "flip-image": "ImageResizerTool",
    "image-cropper": "ImageResizerTool",
    "image-enlarger": "ImageResizerTool",
    "image-editor": "ImageResizerTool",
    "base64-to-image-converter": "Base64ToImageTool",
    "image-to-base64-converter": "ImageToBase64Tool",
    "convert-to-ico": "ImageConverterTool", // already handled
    "image-converter": "ImageConverterTool",
    // PDF tools
    "pdf-merger": "PDFMerger", "pdf-splitter": "PDFSplitter", "pdf-compressor": "PDFCompressor",
    "pdf-size-reducer": "PDFCompressor", "pdf-add-page-numbers": "PDFPageNumbers",
    "pdf-watermark": "PDFWatermark", "pdf-metadata-editor": "PDFMetadataEditor",
    "html-to-pdf": "HTMLToPDF", "pdf-rotation": "PDFRotation", "delete-pdf-pages": "PDFPageDelete", "rearrange-pdf": "PDFRearrange",
    // Text tools
    "lorem-ipsum-generator": "LoremIpsumGeneratorTool",
    "markdown-to-text": "MarkdownToText",
    "text-sorter": "LineSorterTool", "line-sorter": "LineSorterTool",
    // Developer tools
    "json-formatter": "JsonFormatterTool", "json-minify": "JSONMinifierTool",
    "json-to-tsv-converter": "JSONToTSVTool", "json-to-json-schema": "JSONToSchemaTool",
    "base64-encode": "Base64Tool", "base64-decode": "Base64Tool", "base64-tool": "Base64Tool",
    "md5-generator": "HashGeneratorTool", "sha256-generator": "HashGeneratorTool",
    "css-gradient-generator": "CSSGradientTool", "css-shadow-generator": "CSSShadowTool",
    "jwt-decoder": "JWTDecoderTool", "code-formatter": "JsonFormatterTool",
    "sql-formatter": "SQLFormatterTool", "regex-tester": "RegexTesterTool", "mcp-server-tool": "McpServerTool",
    // Generators
    "qr-code-generator": "QrGeneratorPremium", "qr-code-decoder": "QrGeneratorPremium", "qr-code-reader": "QrReaderPremium",
    "password-generator": "PasswordGeneratorTool", "font-generator": "FontGeneratorTool",
    "number-generator": "NumberGeneratorTool", "ascii-art-generator": "AsciiArtGeneratorTool",
    "emoji-copy-tool": "EmojiCopyTool", "chatgpt-persona-generator": "ChatGPTPersonaGeneratorTool",
    "productivity-roast-generator": "ProductivityRoastGeneratorTool",
    // Audio
    "text-to-speech": "TextToSpeechTool", "ai-voice-generator": "AIVoiceGeneratorTool", "guitar-tuner": "GuitarTunerTool",
    // Image other
    "image-color-picker": "ImageColorPicker",
    // SEO
    "keyword-density-checker": "KeywordTool", "keywords-suggestion-tool": "KeywordTool",
    "sitemap-generator": "SitemapGeneratorTool", "visual-sitemap": "VisualSitemapTool",
    "seotoolkit": "SeoToolkit", "indexnow-tool": "IndexnowTool",
    // Utilities
    "ip-address-lookup": "IPLocationFinderTool", "internet-speed-test": "InternetSpeedTestTool",
    "mailto-link-generator": "MailtoLinkGeneratorTool", "notes-tool": "NotesTool",
    "phone-validator": "PhoneValidatorTool", "url-shortener": "URLShortenerTool",
    "utm-builder": "UTMBuilderTool", "user-agent-parser": "UserAgentParserTool",
    "password-checker": "PasswordCheckerTool",
    // Video
    "video-watermark-remover": "VideoWatermarkRemoverTool", "ai-video-summarizer": "AiVideoSummarizerTool",
    "tiktok-downloader": "TikTokDownloaderTool",
    // YouTube
    "youtube-channel-id-extractor": "YouTubeChannelIDFinderTool", "youtube-channel-id-finder": "YouTubeChannelIDFinderTool",
    "youtube-video-statistics": "YouTubeVideoAnalyticsTool", "youtube-channel-statistics": "YouTubeVideoAnalyticsTool",
    "youtube-video-count-checker": "YouTubeVideoAnalyticsTool", "youtube-views-ratio-calculator": "YouTubeVideoAnalyticsTool",
    "youtube-money-calculator": "YouTubeVideoAnalyticsTool", "youtube-channel-age-checker": "YouTubeVideoAnalyticsTool",
    "youtube-trends-analyzer": "YouTubeTrendsAnalyzerTool",
    "youtube-script-generator": "YouTubeScriptGenerator", "youtube-title-generator": "YouTubeScriptGenerator",
    "youtube-description-generator": "YouTubeScriptGenerator", "youtube-hashtag-generator": "YouTubeScriptGenerator",
    "youtube-tag-generator": "YouTubeScriptGenerator", "youtube-comment-generator": "YouTubeCommentGeneratorTool",
    "youtube-thumbnail-downloader": "DownloaderEngine", // treat as downloader
    // AI
    "ai-image-generator": "AIImageGeneratorTool", "ai-music-generator": "AIMusicGeneratorTool",
    // Web
    "website-analyzer": "WebsiteAnalyzerTool",
    // Others
    "image-tools": "ImageToolsHub", "pdf-tools": "PDFToolsHub", "video-tools": "VideoToolsHub",
    "audio-tools": "AudioToolsHub", "generators": "GeneratorsHub", "downloaders": "DownloadersHub",
    "developer-tools": "DeveloperToolsHub", "text-tools": "TextToolsHub", "utilities": "UtilitiesHub",
    "other-tools": "OtherToolsHub", "all-downloaders": "AllDownloadersHub"
  };

  if (known[toolId]) {
    let comp = known[toolId];
    // Determine import path heuristically
    let importPath = '';
    if (comp === 'ImageConverterTool') importPath = '@/components/tools/image/ImageConverterTool';
    else if (comp === 'UniversalUnitConverter') importPath = '@/components/tools/built-ins/UniversalUnitConverter';
    else if (comp === 'BaseConverter') importPath = '@/components/tools/shared/BaseConverter';
    else if (comp === 'BuiltInCalculators') importPath = '@/components/tools/built-ins/BuiltInCalculators';
    else if (comp === 'BuiltInMarkup') importPath = '@/components/tools/built-ins/BuiltInMarkup';
    else if (comp === 'BuiltInSerialization') importPath = '@/components/tools/built-ins/BuiltInSerialization';
    else if (comp === 'BuiltInSafeHttp') importPath = '@/components/tools/built-ins/BuiltInSafeHttp';
    else if (comp === 'DownloaderEngine') importPath = '@/components/tools/downloaders/DownloaderEngine';
    else if (comp === 'YouTubeChannelIDFinderTool') importPath = '@/components/tools/youtube/YouTubeChannelIDFinderTool';
    else if (comp === 'TextGeneratorTool') importPath = '@/components/tools/generators/TextGeneratorTool';
    else if (comp.endsWith('Tool')) {
      // Guess subfolder based on category
      const folder = category === 'image' ? 'image' :
                     category === 'pdf' ? 'pdf' :
                     category === 'text' ? 'text' :
                     category === 'developer' || category === 'utilities' ? category :
                     category === 'generators' ? 'generators' :
                     category === 'audio' ? 'audio' : 'video';
      importPath = `@/components/tools/${folder}/${comp}`;
    } else {
      // Hubs
      importPath = `@/components/tools/shared/HubTool`; // but likely not used
    }
    return { import: importPath, component: comp, prop: '' };
  }

  // If no mapping, unknown tool – will use generic notice eventually? But want dedicated page anyway.
  return null;
}

// ============ Scaffold: generate a page component for a tool
function generatePageContent(tool) {
  const info = getComponentInfo(tool.id, tool.category);
  if (!info) {
    console.warn(`No component mapping for tool: ${tool.id}`);
    return null;
  }

  // Generate unique metadata using tool name and category
  const title = `${tool.name} Online – Free & No Signup | 30tools`;
  const description = tool.description || `Use our free ${tool.name} tool to process your data instantly. Privacy-friendly, browser-based, no signup required.`;
  const canonical = `https://30tools.com${tool.route}`;

  // Component import statement
  const importLine = `import ${info.component} from "${info.import}";`;
  const propUsage = info.prop ? `<${info.component} ${info.prop} />` : `<${info.component} />`;

  // If tool is PDF Editor, mark noindex
  const robots = tool.id === 'pdf-editor' ? '{ index: false, follow: true }' : '{ index: true, follow: true }';

  // Page content
  return `import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ${info.component} from "${info.import}";

export const metadata = {
	title: "${title}",
	description: "${description.replace(/"/g, '')}",
	alternates: {
		canonical: "${canonical}",
	},
	openGraph: {
		title: "${tool.name} – Free Online Tool",
		description: "${description.replace(/"/g, '').substring(0, 160)}",
		url: "${canonical}",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "${tool.name} – Fast & Secure",
		description: "${description.replace(/"/g, '').substring(0, 160)}",
		images: ["/og-image.jpg"],
	},
	robots: ${robots},
};

export default async function ToolPage() {
	const tool = getToolByRoute("${tool.route}");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			${propUsage}
		</ToolLayout>
	);
}
`;
}

// ============ Main: iterate all tools
let updated = 0, created = 0, skipped = 0;

for (const tool of tools) {
  // Skip category pages, static pages
  if (['generators', 'image-tools', 'pdf-tools', 'video-tools', 'downloaders', 'all-downloaders',
       'text-tools', 'developer-tools', 'utilities', 'other-tools', 'about', 'contact', 'privacy', 'terms', 'search',
       'blog', 'seo-tools-free-online', 'ai-tools-alternatives-free', 'best-free-tools-for-students', 'tools-for-developers',
       'best-free-alternative-to-chatgpt', 'top-10-free-online-tools-for-seo', 'top-10-json-tools-online',
       'how-to-format-json-properly', 'best-free-converters-in-2026'].includes(tool.id)) {
    skipped++;
    continue;
  }

  const routePath = tool.route.replace(/^\//, '');
  const groupFolder = `(${tool.category})`;
  const pageDir = path.join(APP_DIR, groupFolder, routePath);
  const pagePath = path.join(pageDir, 'page.tsx');

  // Determine if page exists and whether it uses RegisteredToolMount
  let existingContent = '';
  let needsUpdate = false;
  if (fs.existsSync(pagePath)) {
    existingContent = fs.readFileSync(pagePath, 'utf8');
    if (existingContent.includes('RegisteredToolMount') || existingContent.includes('ToolPageContent')) {
      needsUpdate = true;
    } else {
      // Already using direct component? Skip for now if it doesn't use generic mount
      // But still may need to ensure imports are correct.
      // For safety, we'll skip for now; but we could still update metadata.
      skipped++;
      continue;
    }
  } else {
    needsUpdate = true; // need to create
  }

  const newContent = generatePageContent(tool);
  if (!newContent) {
    console.warn(`Skipping ${tool.id}: cannot generate page content (no component mapping)`);
    skipped++;
    continue;
  }

  if (existingContent && !needsUpdate) {
    skipped++;
    continue;
  }

  // Write file
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  fs.writeFileSync(pagePath, newContent, 'utf8');
  if (existingContent) {
    updated++;
    console.log(`Updated: ${tool.id} -> ${pagePath}`);
  } else {
    created++;
    console.log(`Created: ${tool.id} -> ${pagePath}`);
  }
}

console.log(`\nDone. Updated: ${updated}, Created: ${created}, Skipped: ${skipped}`);
