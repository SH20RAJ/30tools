const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const tools = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

// New tools to add
const newTools = [
    {
        id: "exif-reader",
        name: "EXIF Reader",
        description: "Extract metadata and EXIF data from images including camera settings and GPS location",
        route: "/exif-reader",
        popular: true,
        category: "image",
        keywords: ["exif reader", "exif data", "image metadata", "camera settings", "gps location"],
        longTailKeywords: ["exif reader online free", "extract exif data from photos", "read image metadata online", "camera exif information viewer"],
        primaryKeyword: "exif reader",
        features: ["Camera settings extraction", "GPS location data", "Timestamp information", "Image properties", "Raw metadata view"]
    },
    {
        id: "image-editor",
        name: "Image Editor",
        description: "Edit images online with filters, effects, rotation, flip, and adjustments",
        route: "/image-editor",
        popular: true,
        category: "image",
        keywords: ["image editor", "photo editor", "online image editing", "filters", "effects"],
        longTailKeywords: ["image editor online free", "photo editing tool browser", "edit images with filters online"],
        primaryKeyword: "image editor",
        features: ["Rotate and flip", "Brightness/contrast", "Filters and effects", "Saturation control", "Live preview"]
    },
    {
        id: "logo-maker",
        name: "Logo Maker",
        description: "Create simple logos and brand graphics with text and shapes",
        route: "/logo-maker",
        popular: true,
        category: "design",
        keywords: ["logo maker", "logo creator", "logo designer", "brand graphics"],
        longTailKeywords: ["logo maker online free", "create logo with text and shapes", "simple logo generator tool"],
        primaryKeyword: "logo maker",
        features: ["Text customization", "Shape library", "Color picker", "Download as PNG", "Custom backgrounds"]
    },
    {
        id: "keyword-density",
        name: "Keyword Density Checker",
        description: "Check keyword density and frequency in text for SEO optimization",
        route: "/keyword-density",
        popular: true,
        category: "seo",
        keywords: ["keyword density", "keyword checker", "seo analyzer", "keyword frequency"],
        longTailKeywords: ["keyword density checker free online", "analyze keyword frequency in text", "seo keyword density tool"],
        primaryKeyword: "keyword density checker",
        features: ["1/2/3-word phrase analysis", "Stop word filtering", "Density percentage", "Frequency count", "Export results"]
    },
    {
        id: "email-extractor",
        name: "Email Extractor",
        description: "Extract email addresses from text and documents automatically",
        route: "/email-extractor",
        popular: true,
        category: "text",
        keywords: ["email extractor", "email finder", "extract emails", "email harvester"],
        longTailKeywords: ["email extractor from text online", "extract email addresses from document", "find emails in text free"],
        primaryKeyword: "email extractor",
        features: ["Extract from text", "Remove duplicates", "Copy all emails", "Download as file", "Bulk extraction"]
    },
    {
        id: "whatsapp-link-generator",
        name: "WhatsApp Link Generator",
        description: "Create WhatsApp click-to-chat links with custom messages",
        route: "/whatsapp-link-generator",
        popular: true,
        category: "utilities",
        keywords: ["whatsapp link", "wa.me generator", "whatsapp chat link", "whatsapp link creator"],
        longTailKeywords: ["whatsapp link generator with message", "create wa.me link online", "whatsapp direct chat link maker"],
        primaryKeyword: "whatsapp link generator",
        features: ["Pre-filled messages", "Phone validation", "Direct chat links", "QR code ready", "Business friendly"]
    },
    {
        id: "paypal-link-generator",
        name: "PayPal Link Generator",
        description: "Generate PayPal payment links for donations and payments",
        route: "/paypal-link-generator",
        popular: false,
        category: "utilities",
        keywords: ["paypal link", "paypal payment link", "paypal generator", "payment link creator"],
        longTailKeywords: ["paypal payment link generator free", "create paypal donation link", "paypal.me link generator"],
        primaryKeyword: "paypal link generator",
        features: ["Set amounts", "Currency selection", "Item descriptions", "Instant links", "No account needed"]
    },
    {
        id: "timestamp-converter",
        name: "Timestamp Converter",
        description: "Convert between Unix timestamps and readable dates bidirectionally",
        route: "/timestamp-converter",
        popular: true,
        category: "utilities",
        keywords: ["timestamp converter", "unix timestamp", "epoch converter", "time converter"],
        longTailKeywords: ["unix timestamp converter online", "timestamp to date converter free", "epoch time converter tool"],
        primaryKeyword: "timestamp converter",
        features: ["Unix to human", "Human to unix", "Current timestamp", "Timezone support", "Multiple formats"]
    },
    {
        id: "whatsapp-checker",
        name: "WhatsApp Checker",
        description: "Check if a phone number is active on WhatsApp",
        route: "/whatsapp-checker",
        popular: false,
        category: "utilities",
        keywords: ["whatsapp checker", "whatsapp number check", "verify whatsapp number"],
        longTailKeywords: ["whatsapp number checker online free", "check if number uses whatsapp", "verify whatsapp account exists"],
        primaryKeyword: "whatsapp checker",
        features: ["Number verification", "No contact saving", "Direct wa.me links", "Bulk checking", "Privacy focused"]
    },
    {
        id: "xml-formatter",
        name: "XML Formatter",
        description: "Format and validate XML documents with syntax highlighting",
        route: "/xml-formatter",
        popular: false,
        category: "code",
        keywords: ["xml formatter", "xml validator", "xml beautifier", "format xml"],
        longTailKeywords: ["xml formatter online free", "validate and format xml code", "xml beautifier tool"],
        primaryKeyword: "xml formatter",
        features: ["Format XML", "Validate syntax", "Minify XML", "Error detection", "Download formatted"]
    },
    {
        id: "css-box-shadow",
        name: "CSS Box Shadow Generator",
        description: "Generate CSS box-shadow effects visually with live preview",
        route: "/css-box-shadow",
        popular: true,
        category: "design",
        keywords: ["css box shadow", "shadow generator", "css shadow maker", "box shadow tool"],
        longTailKeywords: ["css box shadow generator online", "visual box shadow creator", "css shadow code generator"],
        primaryKeyword: "css box shadow generator",
        features: ["Live preview", "Multiple shadows", "Color picker", "Preset shadows", "Copy CSS code"]
    },
    {
        id: "html-to-pdf",
        name: "HTML to PDF",
        description: "Convert HTML pages and content to PDF documents",
        route: "/html-to-pdf",
        popular: true,
        category: "converter",
        keywords: ["html to pdf", "html pdf converter", "webpage to pdf", "html export pdf"],
        longTailKeywords: ["html to pdf converter online free", "convert html page to pdf", "html to pdf generator tool"],
        primaryKeyword: "html to pdf converter",
        features: ["HTML rendering", "CSS support", "Live preview", "A4 page size", "Download PDF"]
    },
    {
        id: "pdf-editor",
        name: "PDF Editor",
        description: "Edit PDF files - rotate, extract, delete pages and more",
        route: "/pdf-editor",
        popular: true,
        category: "pdf",
        keywords: ["pdf editor", "edit pdf", "pdf manipulation", "pdf tool"],
        longTailKeywords: ["pdf editor online free no signup", "edit pdf pages rotate extract", "online pdf editing tool"],
        primaryKeyword: "pdf editor",
        features: ["Rotate pages", "Extract pages", "Delete pages", "Merge PDFs", "Browser-based"]
    },
    {
        id: "screen-recorder",
        name: "Screen Recorder",
        description: "Record your screen and save as video file with audio",
        route: "/screen-recorder",
        popular: true,
        category: "video",
        keywords: ["screen recorder", "screen capture", "record screen", "screen recording"],
        longTailKeywords: ["screen recorder online free", "record screen with audio browser", "web screen recording tool"],
        primaryKeyword: "screen recorder",
        features: ["Screen + audio", "Pause/resume", "Download recording", "No installation", "High quality"]
    },
    {
        id: "video-trimmer",
        name: "Video Trimmer",
        description: "Trim and cut video clips to specific lengths",
        route: "/video-trimmer",
        popular: true,
        category: "video",
        keywords: ["video trimmer", "video cutter", "trim video", "cut video"],
        longTailKeywords: ["video trimmer online free", "cut video clips browser", "trim video length tool"],
        primaryKeyword: "video trimmer",
        features: ["Precise trimming", "Time selectors", "Format support", "Preview changes", "Download trimmed"]
    },
    {
        id: "youtube-analytics",
        name: "YouTube Video Analytics",
        description: "Analyze YouTube video performance and engagement metrics",
        route: "/youtube-analytics",
        popular: true,
        category: "youtube",
        keywords: ["youtube analytics", "youtube stats", "video analytics", "youtube metrics"],
        longTailKeywords: ["youtube video analytics tool", "analyze youtube video performance", "youtube engagement metrics"],
        primaryKeyword: "youtube analytics",
        features: ["View counts", "Engagement metrics", "Video details", "Channel info", "Performance tracking"]
    },
    {
        id: "youtube-trends",
        name: "YouTube Trends Analyzer",
        description: "Analyze trending videos and popular topics on YouTube",
        route: "/youtube-trends",
        popular: true,
        category: "youtube",
        keywords: ["youtube trends", "trending videos", "youtube analytics", "viral videos"],
        longTailKeywords: ["youtube trends analyzer tool", "analyze trending youtube videos", "youtube viral content finder"],
        primaryKeyword: "youtube trends analyzer",
        features: ["Trending videos", "Popular topics", "Category analysis", "Regional trends", "Best upload times"]
    },
    {
        id: "video-editor",
        name: "Video Editor",
        description: "Advanced video editing with filters, effects, and transitions",
        route: "/video-editor",
        popular: false,
        category: "video",
        keywords: ["video editor", "edit video", "video editing", "video effects"],
        longTailKeywords: ["video editor online free", "edit videos with effects browser", "online video editing tool"],
        primaryKeyword: "video editor",
        features: ["Server-side recommended", "Professional editing", "Filters and effects", "Export options", "High quality"]
    },
    {
        id: "video-converter",
        name: "Video Format Converter",
        description: "Convert videos between different formats and codecs",
        route: "/video-converter",
        popular: true,
        category: "video",
        keywords: ["video converter", "convert video", "video format converter", "video transcoder"],
        longTailKeywords: ["video format converter online free", "convert video to mp4 online", "video codec converter tool"],
        primaryKeyword: "video converter",
        features: ["Multiple formats", "Quality presets", "Server conversion", "Batch processing", "Format optimization"]
    },
    {
        id: "url-encoder",
        name: "URL Encoder/Decoder",
        description: "Encode and decode URLs and query parameters",
        route: "/url-encoder",
        popular: true,
        category: "developer",
        keywords: ["url encoder", "url decoder", "encode url", "decode url"],
        longTailKeywords: ["url encoder decoder online", "encode decode url parameters", "url encoding tool free"],
        primaryKeyword: "url encoder",
        features: ["Encode URLs", "Decode URLs", "Swap function", "Examples provided", "Batch processing"]
    }
];

// Add new tools to appropriate categories
newTools.forEach(tool => {
    const category = tool.category;

    // Find category in categories object
    if (!tools.categories[category]) {
        console.log(`Category ${category} not found, skipping ${tool.id}`);
        return;
    }

    // Check if tool already exists
    const exists = tools.categories[category].tools.some(t => t.id === tool.id);
    if (!exists) {
        tools.categories[category].tools.push(tool);
        console.log(`Added: ${tool.id} to ${category}`);
    } else {
        console.log(`Skipped (exists): ${tool.id}`);
    }
});

// Write back
fs.writeFileSync(toolsPath, JSON.stringify(tools, null, 2));
console.log('\n✅ Successfully updated tools.json');

// Count total tools
let totalTools = 0;
Object.values(tools.categories).forEach(cat => {
    totalTools += cat.tools.length;
});
console.log(`Total tools now: ${totalTools}`);
