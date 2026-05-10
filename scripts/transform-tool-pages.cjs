#!/usr/bin/env node
/**
 * Final fix for 30tools.com tool pages.
 * 1. Updates all pages using RegisteredToolMount to directly import and render specific components.
 * 2. Creates missing page files for tools that don't have them.
 * 3. Deletes the generic RegisteredToolMount component file.
 */

const fs = require('fs');
const path = require('path');

const BASE = process.cwd();
const APP_DIR = path.join(BASE, 'src/app');
const TOOLS_JSON_PATH = path.join(BASE, 'src/constants/tools.json');

// Load tools data
const toolsData = JSON.parse(fs.readFileSync(TOOLS_JSON_PATH, 'utf8'));
const tools = [];
for (const cat of Object.values(toolsData.categories)) {
  for (const t of cat.tools) {
    tools.push(t);
  }
}
const toolMap = new Map(tools.map(t => [t.id, t]));
const routeMap = new Map();
tools.forEach(t => {
  const primary = t.route.replace(/^\//, '');
  routeMap.set(primary, t);
  if (t.extraSlugs && Array.isArray(t.extraSlugs)) {
    t.extraSlugs.forEach(slug => routeMap.set(slug, t));
  }
});

const EXCLUDED_IDS = new Set([
  'about','contact','privacy','terms','search','blog',
  'best-free-tools-for-students','tools-for-developers','seo-tools-free-online',
  'ai-tools-alternatives-free','best-free-alternative-to-chatgpt',
  'top-10-free-online-tools-for-seo','top-10-json-tools-online',
  'how-to-format-json-properly','best-free-converters-in-2026',
  'image-tools','pdf-tools','video-tools','audio-tools','downloaders',
  'all-downloaders','text-tools','developer-tools','utilities','other-tools',
  'generators','seotoolkit','visual-sitemap','website-ranking-checker',
]);

// ── Mapping helpers ─────────────────────────────────────────────────────────

const imgMap = {
  "jpg-converter":"jpeg","png-to-jpg-converter":"jpeg","webp-to-jpg-converter":"jpeg",
  "jpg-to-png-converter":"png","webp-to-png-converter":"png","ico-to-png-converter":"png",
  "png-to-webp-converter":"webp","jpg-to-webp-converter":"webp",
  "png-to-gif-converter":"gif","jpg-to-gif-converter":"gif",
  "png-to-bmp-converter":"bmp","jpg-to-bmp-converter":"bmp",
  "jpg-to-ico-converter":"png","png-to-ico-converter":"png","convert-to-ico":"png"
};

const unitMap = {
  "length-converter":"length","weight-converter":"mass","temperature-converter":"temperature",
  "area-converter":"area","volume-converter":"volume","speed-converter":"speed",
  "time-converter":"time","angle-converter":"angle","pressure-converter":"pressure",
  "energy-converter":"energy","reactive-energy-converter":"energy","power-converter":"power",
  "reactive-power-converter":"reactivePower","apparent-power-converter":"apparentPower",
  "frequency-converter":"frequency","digital-converter":"digital","torque-converter":"torque",
  "current-converter":"current","voltage-converter":"voltage","charge-converter":"charge",
  "illuminance-converter":"illuminance","volumetric-flow-rate-converter":"flowVolume",
  "pace-converter":"pace","parts-per-converter":"dimensionless","each-converter":"typography"
};

const baseMap = {
  "text-to-binary-converter":"text-to-binary","text-to-hex-converter":"text-to-hex",
  "text-to-octal-converter":"text-to-octal","text-to-decimal-converter":"text-to-decimal",
  "text-to-ascii-converter":"text-to-ascii","hex-to-text-converter":"hex-to-text",
  "hex-to-octal-converter":"hex-to-octal","octal-to-binary-converter":"octal-to-binary",
  "octal-to-decimal-converter":"octal-to-decimal","octal-to-hex-converter":"octal-to-hex",
  "octal-to-text-converter":"octal-to-text","ascii-to-binary-converter":"ascii-to-binary",
  "ascii-to-text-converter":"ascii-to-text","binary-to-ascii-converter":"binary-to-ascii",
  "binary-to-decimal-converter":"binary-to-decimal","binary-to-hex-converter":"binary-to-hex",
  "binary-to-octal-converter":"binary-to-octal","binary-to-text-converter":"binary-to-text",
  "decimal-to-binary-converter":"decimal-to-binary","decimal-to-hex-converter":"decimal-to-hex",
  "decimal-to-octal-converter":"decimal-to-octal","decimal-to-text-converter":"decimal-to-text",
  "hex-to-binary-converter":"hex-to-binary","hex-to-decimal-converter":"hex-to-decimal"
};

const calcIds = new Set(["percentage-calculator","gst-calculator","discount-calculator","margin-calculator",
  "loan-calculator","age-calculator","sales-tax-calculator","average-calculator",
  "cpm-calculator","adsense-calculator","paypal-fee-calculator","probability-calculator",
  "confidence-interval-calculator","currency-converter"]);

const markupIds = new Set(["html-minifier","html-beautifier","css-minifier","css-beautifier",
  "javascript-minifier","javascript-beautifier","javascript-obfuscator","javascript-deobfuscator",
  "html-encoder","html-decoder"]);

const serialIds = new Set(["json-to-csv-converter","json-to-tsv-converter","json-to-text-converter",
  "csv-to-json-converter","tsv-to-json-converter","xml-to-json-converter","json-to-xml-converter"]);

const safeHttpIds = new Set(["redirect-checker","http-status-code-checker","get-http-headers",
  "page-size-checker","server-status-checker","hosting-checker","whois-domain-lookup",
  "domain-age-checker","wordpress-theme-detector","google-cache-checker","google-index-checker",
  "backlink-checker","seo-audit-tool","open-graph-checker","website-ranking-checker",
  "sitemap-generator","visual-sitemap","facebook-id-finder","indexnow-submitter",
  "bulk-keyword-rank-checker"]);

const DOWNLOADER_ALIAS_IDS = new Set([
  "mp4-to-mp3","fb-video-saver","reddit-media-saver","shrink-mp3-size",
  "modify-mp3-file","save-fb-stories-anonymous","save-instagram-clips",
  "ig-highlights-saver","save-insta-pfp","insta-reels-saver",
  "save-reels-video","save-twitter-videos","tiktok-saver-no-watermark",
  "save-tiktok-mp4","save-ig-content","mp3-from-tiktok",
  "pinterest-clip-saver","snapchat-saver-online","save-snaps-to-gallery"
]);

const textGenIds = new Set(["bio-generator","business-name-generator","ai-poem-generator","poetry-generator","excuse-generator"]);

// Extended inlineMap with component details
const inlineMap = {
  "number-to-roman-numerals": { comp:"RomanNumeralTool", prop:"toRoman={true}", file:"RomanNumeralTool" },
  "roman-numerals-to-number": { comp:"RomanNumeralTool", prop:"toRoman={false}", file:"RomanNumeralTool" },
  "rgb-to-hex-converter": { comp:"RgbHexConverter", prop:'mode="rgb2hex"', file:"RgbHexConverter" },
  "hex-to-rgb-converter": { comp:"RgbHexConverter", prop:'mode="hex2rgb"', file:"RgbHexConverter" },
  "color-converter": { comp:"RgbHexConverter", prop:'mode="rgb2hex"', file:"RgbHexConverter" },
  "random-uuid-generator": { comp:"UuidGeneratorTool", prop:'', file:"UuidGeneratorTool" },
  "credit-card-generator": { comp:"CreditCardGeneratorTool", prop:'', file:"CreditCardGeneratorTool" },
  "credit-card-validator": { comp:"CreditCardValidatorTool", prop:'', file:"CreditCardValidatorTool" },
  "url-encode": { comp:"UrlCodecTool", prop:'mode="enc"', file:"UrlCodecTool" },
  "url-decode": { comp:"UrlCodecTool", prop:'mode="dec"', file:"UrlCodecTool" },
  "url-parser": { comp:"UrlParserTool", prop:'', file:"UrlParserTool" },
  "url-opener": { comp:"UrlParserTool", prop:'', file:"UrlParserTool" },
  "url-rewriting-tool": { comp:"UrlParserTool", prop:'', file:"UrlParserTool" },
  "what-is-my-screen-resolution": { comp:"ScreenResolutionTool", prop:'', file:"ScreenResolutionTool" },
  "screen-resolution-simulator": { comp:"ScreenResolutionTool", prop:'', file:"ScreenResolutionTool" },
  "what-is-my-user-agent": { comp:"UserAgentTool", prop:'', file:"UserAgentTool" },
  "what-is-my-browser": { comp:"BrowserDetectTool", prop:'', file:"BrowserDetectTool" },
  "what-is-my-ip-address": { comp:"PublicIpTool", prop:'', file:"PublicIpTool" },
  "domain-to-ip-converter": { comp:"DomainToIPTool", prop:'', file:"DomainToIPTool" },
  "dns-records-checker": { comp:"DnsLookupTool", prop:'', file:"DnsLookupTool" },
  "meta-tag-generator": { comp:"MetaTagGenerator", prop:'', file:"MetaTagGenerator" },
  "open-graph-generator": { comp:"OpenGraphGenerator", prop:'', file:"OpenGraphGenerator" },
  "twitter-card-generator": { comp:"TwitterCardGenerator", prop:'', file:"TwitterCardGenerator" },
  "faq-schema-generator": { comp:"FaqSchemaGenerator", prop:'', file:"FaqSchemaGenerator" },
  "htaccess-redirect-generator": { comp:"HtaccessGenerator", prop:'', file:"HtaccessGenerator" },
  "privacy-policy-generator": { comp:"LegalTemplateGenerator", prop:'kind="privacy"', file:"LegalTemplateGenerator" },
  "terms-and-condition-generator": { comp:"LegalTemplateGenerator", prop:'kind="terms"', file:"LegalTemplateGenerator" },
  "disclaimer-generator": { comp:"LegalTemplateGenerator", prop:'kind="disclaimer"', file:"LegalTemplateGenerator" },
  "convert-srt-to-vtt": { comp:"SrtToVttTool", prop:'', file:"SrtToVttTool" },
  "convert-vtt-to-srt": { comp:"VttToSrtTool", prop:'', file:"VttToSrtTool" },
  "number-to-word-converter": { comp:"NumberToWordTool", prop:'', file:"NumberToWordTool" },
  "word-to-number-converter": { comp:"WordToNumberTool", prop:'', file:"WordToNumberTool" },
  // Extras
  "json-editor": { comp:"JsonFormatterTool", prop:'', file:"JsonFormatterTool" },
  "json-viewer": { comp:"JsonFormatterTool", prop:'', file:"JsonFormatterTool" },
  "json-validator": { comp:"JsonFormatterTool", prop:'', file:"JsonFormatterTool" },
  // Text tools extracted
  "text-compare": { comp:"TextCompareTool", prop:'', file:"TextCompareTool" },
  "text-repeater": { comp:"TextRepeaterTool", prop:'', file:"TextRepeaterTool" },
  "remove-line-breaks": { comp:"RemoveLineBreaksTool", prop:'', file:"RemoveLineBreaksTool" },
  "comma-separator": { comp:"CommaSeparatorTool", prop:'', file:"CommaSeparatorTool" },
  "text-to-slug-converter": { comp:"SlugTool", prop:'', file:"SlugTool" },
  "text-to-hashtags-converter": { comp:"TagsFromTextTool", prop:'prefix="#"', file:"TagsFromTextTool" },
  "text-to-tags-converter": { comp:"TagsFromTextTool", prop:'prefix=""', file:"TagsFromTextTool" },
  "word-counter": { comp:"WordCounterTool", prop:'', file:"WordCounterTool" }
};

// Known specific tools mapping from fix-all script (compact form)
// Format: toolId -> componentName
const known = {
  "image-compressor":"ImageCompressorTool","background-remover":"BackgroundRemoverTool",
  "image-to-pdf":"ImageToPDF","pdf-editor":"PDFEditor","pdf-unlocker":"PDFUnlock",
  "pdf-protect":"PDFProtect","pdf-grayscale":"PDFGrayscale","pdf-repair":"PDFRepair",
  "pdf-to-image":"PDFToImage","pdf-to-word":"PDFToWord","word-to-pdf":"WordToPDF",
  "exif-reader":"ExifReaderTool","favicon-generator":"FaviconGeneratorTool",
  "icon-generator":"FaviconGeneratorTool","logo-generator":"LogoGeneratorTool",
  "photo-enhancer":"PhotoEnhancerTool","image-resizer":"ImageResizerTool",
  "rotate-image":"ImageResizerTool","flip-image":"ImageResizerTool","image-cropper":"ImageResizerTool",
  "image-enlarger":"ImageResizerTool","image-editor":"ImageResizerTool",
  "image-converter":"ImageConverterTool","base64-to-image-converter":"Base64ToImageTool",
  "image-to-base64-converter":"ImageToBase64Tool",
  "pdf-merger":"PDFMerger","pdf-splitter":"PDFSplitter","pdf-compressor":"PDFCompressor",
  "pdf-size-reducer":"PDFCompressor","pdf-add-page-numbers":"PDFPageNumbers",
  "pdf-watermark":"PDFWatermark","pdf-metadata-editor":"PDFMetadataEditor",
  "html-to-pdf":"HTMLToPDF","pdf-rotation":"PDFRotation","delete-pdf-pages":"PDFPageDelete",
  "rearrange-pdf":"PDFRearrange",
  "lorem-ipsum-generator":"LoremIpsumGeneratorTool","markdown-to-text":"MarkdownToText",
  "text-sorter":"LineSorterTool","line-sorter":"LineSorterTool",
  "backwards-text-generator":"BackwardsTextGenerator","case-converter":"CaseConverter",
  "remove-duplicate-lines":"RemoveDuplicatesTool","text-reverser":"TextReverserTool",
  "text-encoder-decoder":"TextEncoderTool","url-extractor":"URLExtractorTool",
  "article-rewriter":"LineSorterTool","random-word-generator":"LineSorterTool",
  "json-formatter":"JsonFormatterTool","json-minify":"JSONMinifierTool",
  "json-to-tsv-converter":"JSONToTSVTool","json-to-json-schema":"JSONToSchemaTool",
  "base64-encode":"Base64Tool","base64-decode":"Base64Tool","base64-tool":"Base64Tool",
  "md5-generator":"HashGeneratorTool","sha256-generator":"HashGeneratorTool",
  "css-gradient-generator":"CSSGradientTool","css-shadow-generator":"CSSShadowTool",
  "jwt-decoder":"JWTDecoderTool","code-formatter":"JsonFormatterTool",
  "sql-formatter":"SQLFormatterTool","regex-tester":"RegexTesterTool","mcp-server-tool":"McpServerTool",
  "qr-code-generator":"QrGeneratorPremium","qr-code-decoder":"QrGeneratorPremium","qr-code-reader":"QrReaderPremium",
  "password-generator":"PasswordGeneratorTool","font-generator":"FontGeneratorTool",
  "number-generator":"NumberGeneratorTool","ascii-art-generator":"AsciiArtGeneratorTool",
  "emoji-copy-tool":"EmojiCopyTool","chatgpt-persona-generator":"ChatGPTPersonaGeneratorTool",
  "productivity-roast-generator":"ProductivityRoastGeneratorTool",
  "text-to-speech":"TextToSpeechTool","ai-voice-generator":"AIVoiceGeneratorTool","guitar-tuner":"GuitarTunerTool",
  "keyword-density-checker":"KeywordTool","keywords-suggestion-tool":"KeywordTool",
  "sitemap-generator":"SitemapGeneratorTool","visual-sitemap":"VisualSitemapTool",
  "seotoolkit":"SeoToolkit","indexnow-tool":"IndexnowTool",
  "ip-address-lookup":"IPLocationFinderTool","internet-speed-test":"InternetSpeedTestTool",
  "mailto-link-generator":"MailtoLinkGeneratorTool","notes-tool":"NotesTool",
  "phone-validator":"PhoneValidatorTool","url-shortener":"URLShortenerTool",
  "utm-builder":"UTMBuilderTool","user-agent-parser":"UserAgentParserTool",
  "password-checker":"PasswordCheckerTool",
  "video-watermark-remover":"VideoWatermarkRemoverTool","ai-video-summarizer":"AiVideoSummarizerTool",
  "tiktok-downloader":"TikTokDownloaderTool",
  "youtube-channel-id-extractor":"YouTubeChannelIDFinderTool","youtube-channel-id-finder":"YouTubeChannelIDFinderTool",
  "youtube-video-statistics":"YouTubeVideoAnalyticsTool","youtube-channel-statistics":"YouTubeVideoAnalyticsTool",
  "youtube-video-count-checker":"YouTubeVideoAnalyticsTool","youtube-views-ratio-calculator":"YouTubeVideoAnalyticsTool",
  "youtube-money-calculator":"YouTubeVideoAnalyticsTool","youtube-channel-age-checker":"YouTubeVideoAnalyticsTool",
  "youtube-trends-analyzer":"YouTubeTrendsAnalyzerTool",
  "youtube-script-generator":"YouTubeScriptGenerator","youtube-title-generator":"YouTubeScriptGenerator",
  "youtube-description-generator":"YouTubeScriptGenerator","youtube-hashtag-generator":"YouTubeScriptGenerator",
  "youtube-tag-generator":"YouTubeScriptGenerator","youtube-comment-generator":"YouTubeCommentGeneratorTool",
  "ai-image-generator":"AIImageGeneratorTool","ai-music-generator":"AIMusicGeneratorTool",
  "website-analyzer":"WebsiteAnalyzerTool",
  "image-tools":"ImageToolsHub","pdf-tools":"PDFToolsHub","video-tools":"VideoToolsHub",
  "audio-tools":"AudioToolsHub","generators":"GeneratorsHub","downloaders":"DownloadersHub",
  "developer-tools":"DeveloperToolsHub","text-tools":"TextToolsHub","utilities":"UtilitiesHub",
  "other-tools":"OtherToolsHub","all-downloaders":"AllDownloadersHub"
};

// Map category to folder name for component path resolution
const categoryFolder = {
  image: 'image',
  pdf: 'pdf',
  text: 'text',
  developer: 'developer',
  utilities: 'utilities',
  generators: 'generators',
  audio: 'audio',
  video: 'video',
  seo: 'seo',
  calculators: 'calculators',
  downloaders: 'downloaders',
  default: 'video' // fallback
};

function getComponentInfo(toolId) {
  const t = toolMap.get(toolId);
  const category = t ? t.category : '';

  // Image format converters
  if (imgMap[toolId]) {
    const fmt = imgMap[toolId];
    return { import:`@/components/tools/image/ImageConverterTool`, component:'ImageConverterTool', prop:`defaultOutputFormat="${fmt}"` };
  }
  // Unit converters
  if (unitMap[toolId]) {
    return { import:`@/components/tools/built-ins/UniversalUnitConverter`, component:'UniversalUnitConverter', prop:`preset="${unitMap[toolId]}"` };
  }
  // Base converters
  if (baseMap[toolId]) {
    return { import:`@/components/tools/shared/BaseConverter`, component:'BaseConverter', prop:`converterKind="${baseMap[toolId]}"` };
  }
  // Calculators
  if (calcIds.has(toolId)) {
    return { import:`@/components/tools/built-ins/BuiltInCalculators`, component:'BuiltInCalculators', prop:`kind="${toolId}"` };
  }
  // Markup
  if (markupIds.has(toolId)) {
    return { import:`@/components/tools/built-ins/BuiltInMarkup`, component:'BuiltInMarkup', prop:`toolId="${toolId}"` };
  }
  // Serialization
  if (serialIds.has(toolId)) {
    return { import:`@/components/tools/built-ins/BuiltInSerialization`, component:'BuiltInSerialization', prop:`toolId="${toolId}"` };
  }
  // SafeHttp
  if (safeHttpIds.has(toolId)) {
    return { import:`@/components/tools/built-ins/BuiltInSafeHttp`, component:'BuiltInSafeHttp', prop:`toolId="${toolId}"` };
  }
  // YouTube downloader
  if (toolId.includes('downloader') || toolId.includes('extractor') || DOWNLOADER_ALIAS_IDS.has(toolId)) {
    return { import:`@/components/tools/downloaders/DownloaderEngine`, component:'DownloaderEngine', prop:'' };
  }
  // YouTube other
  if (toolId.startsWith('youtube-') && !toolId.includes('downloader') && !toolId.includes('extractor')) {
    return { import:`@/components/tools/youtube/YouTubeChannelIDFinderTool`, component:'YouTubeChannelIDFinderTool', prop:'' };
  }
  // Text generators
  if (textGenIds.has(toolId)) {
    return { import:`@/components/tools/generators/TextGeneratorTool`, component:'TextGeneratorTool', prop:'' };
  }
  // Inline map specific
  if (inlineMap[toolId]) {
    const info = inlineMap[toolId];
     // Determine folder
     let folder;
     if (["TextCompareTool","WordCounterTool","TextRepeaterTool","RemoveLineBreaksTool","CommaSeparatorTool","SlugTool","TagsFromTextTool","SrtToVttTool","VttToSrtTool","NumberToWordTool","WordToNumberTool"].includes(info.comp)) {
       folder = "text";
     } else if (["CreditCardGeneratorTool","CreditCardValidatorTool"].includes(info.comp)) {
       folder = "security";
     } else if (info.comp === "JsonFormatterTool") {
       folder = "code";
     } else {
       folder = "built-ins";
     }
    const path = `@/components/tools/${folder}/${info.file || info.comp}`;
    return { import: path, component: info.comp, prop: info.prop };
  }
  // Known specific tools
  if (known[toolId]) {
    let comp = known[toolId];
    let importPath = '';
    // Map special components with explicit import paths
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
      const folder = categoryFolder[category] || categoryFolder.default;
      importPath = `@/components/tools/${folder}/${comp}`;
    } else {
      // Hubs – fallback
      importPath = `@/components/tools/shared/HubTool`;
    }
    return { import: importPath, component: comp, prop: '' };
  }

  return null;
}

// ── Helper: transform a single page file ─────────────────────────────────────
function transformPage(filePath, toolId, info) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Build new import line
  const importLine = `import ${info.component} from "${info.import}";`;
  // Remove any existing RegisteredToolMount import (there should be exactly one)
  content = content.replace(/import\s+RegisteredToolMount\s+from\s+"@\/components\/tools\/shared\/RegisteredToolMount";?/, importLine);

  // Build JSX replacement
  const propPart = info.prop ? ` ${info.prop}` : '';
  const newJsx = `<${info.component}${propPart} />`;
  // Replace the JSX tag (might have whitespace)
  content = content.replace(/<RegisteredToolMount\s+toolId=\{tool\.id\}\s*\/>/, newJsx);

  fs.writeFileSync(filePath, content, 'utf8');
}

// ── Main: process existing pages ─────────────────────────────────────────────
let updated = 0, skipped = 0, created = 0;

// Walk src/app to find page.tsx files under group folders
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules etc; we only care about app dir
      walk(full);
      } else if (entry.name === 'page.tsx') {
        // Check if path matches pattern /app/(category)/slug/page.tsx
        const rel = path.relative(APP_DIR, full);
        const match = rel.match(/^\([^)]+\)\/([^/]+)\/page\.tsx$/);
        if (match) {
          const routeKey = match[1];
          const tool = routeMap.get(routeKey);
          if (!tool) {
            console.warn(`Unknown tool route: ${routeKey}, skipping`);
            skipped++;
            continue;
          }
          // Skip excluded
          if (EXCLUDED_IDS.has(tool.id)) {
            skipped++;
            continue;
          }
          const content = fs.readFileSync(full, 'utf8');
          if (!content.includes('RegisteredToolMount')) {
            // Already using direct component, skip
            skipped++;
            continue;
          }
          const info = getComponentInfo(tool.id);
          if (!info) {
            console.warn(`No component mapping for tool: ${tool.id}, skipping`);
            skipped++;
            continue;
          }
          transformPage(full, tool.id, info);
          updated++;
          console.log(`Updated: ${tool.id} -> ${full}`);
        }
      }
  }
}
walk(APP_DIR);

// ── Create missing pages ─────────────────────────────────────────────────────
for (const tool of tools) {
  if (EXCLUDED_IDS.has(tool.id)) continue;
  const routePath = tool.route.replace(/^\//, '');
  const groupFolder = `(${tool.category})`;
  const pageDir = path.join(APP_DIR, groupFolder, routePath);
  const pagePath = path.join(pageDir, 'page.tsx');
  if (fs.existsSync(pagePath)) continue; // already handled

  // Page missing, create
  const info = getComponentInfo(tool.id);
  if (!info) {
    console.warn(`Cannot create page for ${tool.id}: no component mapping`);
    skipped++;
    continue;
  }
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  // Generate basic metadata using tool data
  const title = `${tool.name} Online – Free & No Signup | 30tools`;
  const description = tool.description || `Use our free ${tool.name} tool. Privacy-friendly, browser-based, no signup required.`;
  const canonical = `https://30tools.com${tool.route}`;
  const robots = tool.id === 'pdf-editor' ? '{ index: false, follow: true }' : '{ index: true, follow: true }';
  // Component usage
  const propUsage = info.prop ? `<${info.component} ${info.prop} />` : `<${info.component} />`;
  const pageContent = `import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ${info.component} from "${info.import}";

export const metadata = {
	title: "${title.replace(/"/g, '')}",
	description: "${description.replace(/"/g, '').substring(0, 160)}",
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
  fs.writeFileSync(pagePath, pageContent, 'utf8');
  created++;
  console.log(`Created: ${tool.id} -> ${pagePath}`);
}

console.log(`\nDone. Updated: ${updated}, Created: ${created}, Skipped: ${skipped}`);
