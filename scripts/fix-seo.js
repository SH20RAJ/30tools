const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

const seoUpdates = {
    "tiktok-video-resizer": {
        keywords: ["tiktok resizer", "resize video for tiktok", "tiktok video size", "video aspect ratio"],
        longTailKeywords: ["resize video for tiktok online free", "convert video to 9:16", "tiktok video format converter"],
        primaryKeyword: "tiktok video resizer",
        features: ["9:16 Aspect Ratio", "No Watermark", "Fast Processing", "MP4 Support"]
    },
    "audio-compressor": {
        keywords: ["audio compressor", "compress mp3", "reduce audio size", "shrink audio"],
        longTailKeywords: ["compress mp3 online free", "reduce audio file size without losing quality", "audio size reducer"],
        primaryKeyword: "audio compressor",
        features: ["Reduce MP3 Size", "Batch Compression", "High Quality", "Multiple Formats"]
    },
    "audio-converter": {
        keywords: ["audio converter", "mp3 converter", "wav converter", "convert audio"],
        longTailKeywords: ["convert audio to mp3 online", "wav to mp3 converter free", "audio format converter"],
        primaryKeyword: "audio converter",
        features: ["Support All Formats", "Batch Conversion", "High Quality Output", "Fast Processing"]
    },
    "audio-editor": {
        keywords: ["audio editor", "edit mp3", "cut audio", "trim audio"],
        longTailKeywords: ["online audio editor free", "cut mp3 online", "trim audio file online"],
        primaryKeyword: "audio editor",
        features: ["Trim & Cut", "Fade In/Out", "Volume Control", "Mix Audio"]
    },
    "character-counter": {
        keywords: ["character counter", "word counter", "letter count", "text length"],
        longTailKeywords: ["online character counter with spaces", "word count tool free", "check text length online"],
        primaryKeyword: "character counter",
        features: ["Real-time Count", "Word Count", "Character Count", "Line Count"]
    },
    "text-case-converter": {
        keywords: ["case converter", "text converter", "uppercase to lowercase", "capitalization tool"],
        longTailKeywords: ["convert text to uppercase online", "sentence case converter", "title case generator"],
        primaryKeyword: "text case converter",
        features: ["Upper/Lower Case", "Title Case", "Sentence Case", "Instant Conversion"]
    },
    "password-generator": {
        keywords: ["password generator", "secure password", "random password", "strong password"],
        longTailKeywords: ["strong password generator online", "random password creator", "secure password maker"],
        primaryKeyword: "password generator",
        features: ["Custom Length", "Include Symbols", "Exclude Ambiguous", "Copy to Clipboard"]
    },
    "password-generator2": {
        keywords: ["advanced password generator", "secure password", "random password", "strong password"],
        longTailKeywords: ["strong password generator online", "random password creator", "secure password maker"],
        primaryKeyword: "password generator",
        features: ["Custom Length", "Include Symbols", "Exclude Ambiguous", "Copy to Clipboard"]
    },
    "password-strength-checker": {
        keywords: ["password strength", "check password", "password security", "test password"],
        longTailKeywords: ["check password strength online", "how strong is my password", "password security tester"],
        primaryKeyword: "password strength checker",
        features: ["Instant Analysis", "Security Tips", "Crack Time Estimate", "Offline Check"]
    },
    "lorem-ipsum-generator": {
        keywords: ["lorem ipsum", "dummy text", "placeholder text", "text generator"],
        longTailKeywords: ["lorem ipsum generator html", "dummy text generator for design", "placeholder text creator"],
        primaryKeyword: "lorem ipsum generator",
        features: ["Paragraphs/Words", "HTML Tags", "Copy to Clipboard", "Multiple Variations"]
    },
    "text-diff": {
        keywords: ["diff checker", "text compare", "compare text", "difference checker"],
        longTailKeywords: ["compare two text files online", "find differences between two texts", "online diff tool"],
        primaryKeyword: "text diff checker",
        features: ["Side-by-Side View", "Highlight Differences", "Ignore Whitespace", "Merge Mode"]
    },
    "text-formatter": {
        keywords: ["text formatter", "format text", "clean text", "beautify text"],
        longTailKeywords: ["online text formatter free", "remove extra spaces from text", "clean up text formatting"],
        primaryKeyword: "text formatter",
        features: ["Remove Spaces", "Fix Punctuation", "Capitalization", "HTML Stripping"]
    },
    "file-converter": {
        keywords: ["file converter", "convert files", "universal converter", "format changer"],
        longTailKeywords: ["convert any file format online", "universal file converter free", "change file type online"],
        primaryKeyword: "file converter",
        features: ["Support 100+ Formats", "Batch Conversion", "Secure Processing", "Cloud Integration"]
    },
    "document-converter": {
        keywords: ["document converter", "convert docs", "word to pdf", "pdf to word"],
        longTailKeywords: ["convert document formats online", "doc to pdf converter free", "office document converter"],
        primaryKeyword: "document converter",
        features: ["Word/Excel/PPT", "PDF Support", "Preserve Formatting", "OCR Support"]
    },
    "epub-converter": {
        keywords: ["epub converter", "ebook converter", "pdf to epub", "epub to pdf"],
        longTailKeywords: ["convert pdf to epub online", "epub to mobi converter", "ebook format converter"],
        primaryKeyword: "epub converter",
        features: ["EPUB/MOBI/PDF", "Metadata Editor", "Cover Art", "Batch Processing"]
    },
    "html-to-pdf": {
        keywords: ["html to pdf", "webpage to pdf", "convert html", "save as pdf"],
        longTailKeywords: ["convert webpage to pdf online", "html file to pdf converter", "save website as pdf"],
        primaryKeyword: "html to pdf",
        features: ["URL to PDF", "Raw HTML Support", "Custom Page Size", "Preserve CSS"]
    },
    "hash-generator": {
        keywords: ["hash generator", "md5 generator", "sha256 generator", "encrypt text"],
        longTailKeywords: ["online hash generator md5 sha", "generate hash from text", "password hash creator"],
        primaryKeyword: "hash generator",
        features: ["MD5/SHA1/SHA256", "Real-time Generation", "Multiple Algorithms", "Copy to Clipboard"]
    },
    "hash-generator2": {
        keywords: ["advanced hash generator", "md5 generator", "sha256 generator", "encrypt text"],
        longTailKeywords: ["online hash generator md5 sha", "generate hash from text", "password hash creator"],
        primaryKeyword: "hash generator",
        features: ["MD5/SHA1/SHA256", "Real-time Generation", "Multiple Algorithms", "Copy to Clipboard"]
    },
    "regex-tester2": {
        keywords: ["regex tester", "regular expression", "test regex", "regex debugger"],
        longTailKeywords: ["online regex tester and debugger", "test regular expressions javascript", "regex match highlighter"],
        primaryKeyword: "regex tester",
        features: ["Real-time Matching", "Explanation", "Quick Reference", "Save Patterns"]
    },
    "api-tester": {
        keywords: ["api tester", "rest client", "http request", "test api"],
        longTailKeywords: ["online rest api tester", "send http requests online", "debug api endpoints"],
        primaryKeyword: "api tester",
        features: ["GET/POST/PUT/DELETE", "Headers & Body", "Response Viewer", "Save Requests"]
    },
    "jwt-decoder": {
        keywords: ["jwt decoder", "decode token", "jwt debugger", "inspect jwt"],
        longTailKeywords: ["decode jwt token online", "json web token debugger", "verify jwt signature"],
        primaryKeyword: "jwt decoder",
        features: ["Decode Header/Payload", "Verify Signature", "Human Readable", "Secure Processing"]
    },
    "code-formatter": {
        keywords: ["code formatter", "beautify code", "format code", "prettier online"],
        longTailKeywords: ["online code formatter for javascript", "html css js beautifier", "clean up code formatting"],
        primaryKeyword: "code formatter",
        features: ["Multi-language", "Custom Indentation", "Minify Option", "Syntax Highlighting"]
    },
    "code-minifier": {
        keywords: ["code minifier", "minify js", "minify css", "compress code"],
        longTailKeywords: ["minify javascript online", "css minifier free", "reduce code size"],
        primaryKeyword: "code minifier",
        features: ["JS/CSS/HTML", "High Compression", "Preserve Functionality", "Source Maps"]
    },
    "csv-to-json": {
        keywords: ["csv to json", "convert csv", "csv parser", "json converter"],
        longTailKeywords: ["convert csv file to json online", "csv to json converter free", "parse csv data"],
        primaryKeyword: "csv to json",
        features: ["Upload or Paste", "Custom Delimiter", "Download JSON", "Table Preview"]
    },
    "markdown-to-html": {
        keywords: ["markdown to html", "convert markdown", "md to html", "markdown editor"],
        longTailKeywords: ["convert markdown to html online", "markdown previewer", "md file converter"],
        primaryKeyword: "markdown to html",
        features: ["Live Preview", "GitHub Flavored", "Copy HTML", "Export File"]
    },
    "xml-formatter": {
        keywords: ["xml formatter", "beautify xml", "xml viewer", "format xml"],
        longTailKeywords: ["online xml formatter and validator", "xml beautifier free", "pretty print xml"],
        primaryKeyword: "xml formatter",
        features: ["Tree View", "Minify/Beautify", "Validation", "XPath Search"]
    },
    "color-picker": {
        keywords: ["color picker", "hex code", "rgb color", "color selector"],
        longTailKeywords: ["online color picker from image", "get hex code from color", "web color picker"],
        primaryKeyword: "color picker",
        features: ["HEX/RGB/HSL", "Eye Dropper", "Color History", "Palette Generation"]
    },
    "color-palette-generator": {
        keywords: ["color palette", "scheme generator", "color combinations", "design colors"],
        longTailKeywords: ["generate color palette from image", "website color scheme generator", "random color palette"],
        primaryKeyword: "color palette generator",
        features: ["AI Generation", "Extract from Image", "Export CSS", "Save Palettes"]
    },
    "css-gradient-generator": {
        keywords: ["gradient generator", "css gradient", "background gradient", "color gradient"],
        longTailKeywords: ["css linear gradient generator", "background gradient maker", "css3 gradient tool"],
        primaryKeyword: "css gradient generator",
        features: ["Linear/Radial", "Multi-stop", "CSS Output", "Presets"]
    },
    "logo-maker": {
        keywords: ["logo maker", "create logo", "logo generator", "design logo"],
        longTailKeywords: ["free logo maker online", "design logo for business", "custom logo generator"],
        primaryKeyword: "logo maker",
        features: ["Templates", "Icon Library", "Custom Text", "High Res Download"]
    },
    "css-box-shadow": {
        keywords: ["box shadow", "css shadow", "shadow generator", "css effects"],
        longTailKeywords: ["css box shadow generator", "create drop shadow css", "css shadow maker"],
        primaryKeyword: "css box shadow generator",
        features: ["Interactive Preview", "Multiple Shadows", "CSS Code", "Inset Support"]
    },
    "unit-converter": {
        keywords: ["unit converter", "convert units", "measurement converter", "metric converter"],
        longTailKeywords: ["online unit converter all in one", "convert metric to imperial", "measurement conversion tool"],
        primaryKeyword: "unit converter",
        features: ["Length/Weight/Temp", "Currency Support", "Scientific Units", "Instant Calculation"]
    },
    "zip-creator": {
        keywords: ["zip creator", "create zip", "compress files", "archive maker"],
        longTailKeywords: ["create zip file online", "compress multiple files to zip", "online archive creator"],
        primaryKeyword: "zip creator",
        features: ["Multiple Files", "Compression Level", "Password Protection", "Fast Processing"]
    },
    "url-shortener": {
        keywords: ["url shortener", "shorten link", "link shrinker", "short url"],
        longTailKeywords: ["free url shortener custom alias", "shorten long links", "link shortener with analytics"],
        primaryKeyword: "url shortener",
        features: ["Custom Alias", "QR Code", "Click Analytics", "No Expiration"]
    },
    "timestamp-converter": {
        keywords: ["timestamp converter", "unix time", "epoch converter", "date to timestamp"],
        longTailKeywords: ["unix timestamp converter", "convert date to epoch", "human readable time"],
        primaryKeyword: "timestamp converter",
        features: ["Unix/Epoch", "ISO 8601", "Timezone Support", "Current Time"]
    },
    "calculator": {
        keywords: ["calculator", "online calculator", "scientific calculator", "math tool"],
        longTailKeywords: ["free online scientific calculator", "math calculator with history", "advanced calculator tool"],
        primaryKeyword: "calculator",
        features: ["Scientific Mode", "History Tape", "Keyboard Support", "Unit Conversion"]
    },
    "random-generator": {
        keywords: ["random generator", "random number", "random picker", "randomizer"],
        longTailKeywords: ["random number generator", "random name picker", "list randomizer"],
        primaryKeyword: "random generator",
        features: ["Numbers", "Names/Lists", "Passwords", "Dice/Coin"]
    },
    "meta-tags-generator": {
        keywords: ["meta tags", "seo tags", "generate meta", "seo generator"],
        longTailKeywords: ["meta tags generator for website", "seo meta description generator", "open graph tag generator"],
        primaryKeyword: "meta tags generator",
        features: ["Title/Description", "Open Graph", "Twitter Cards", "Live Preview"]
    },
    "keyword-density": {
        keywords: ["keyword density", "seo checker", "word frequency", "content analysis"],
        longTailKeywords: ["keyword density checker online", "check keyword frequency in text", "seo content analyzer"],
        primaryKeyword: "keyword density checker",
        features: ["1/2/3 Word Phrases", "Percentage Calc", "Stop Words Filter", "Top Keywords"]
    }
};

Object.entries(toolsData.categories).forEach(([categoryKey, category]) => {
    category.tools.forEach(tool => {
        if (seoUpdates[tool.id]) {
            const update = seoUpdates[tool.id];
            tool.keywords = update.keywords;
            tool.longTailKeywords = update.longTailKeywords;
            tool.primaryKeyword = update.primaryKeyword;
            tool.features = update.features;
        }
    });
});

fs.writeFileSync(toolsPath, JSON.stringify(toolsData, null, 2));
console.log('Updated tools.json with SEO data');
