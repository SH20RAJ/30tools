import dynamic from "next/dynamic";
import type { ComponentType } from "react";

// Dynamic imports for all tool components
export const TOOL_COMPONENTS: Record<string, ComponentType<any>> = {
    // PDF Tools
    "pdf-merger": dynamic(() => import("@/components/tools/pdf/PDFMerger"), { ssr: false }),
    "pdf-splitter": dynamic(() => import("@/components/tools/pdf/PDFSplitter"), { ssr: false }),
    "pdf-compressor": dynamic(() => import("@/components/tools/pdf/PDFCompressor"), { ssr: false }),
    "pdf-size-reducer": dynamic(() => import("@/components/tools/pdf/PDFCompressor"), { ssr: false }),
    "pdf-grayscale": dynamic(() => import("@/components/tools/pdf/PDFGrayscale"), { ssr: false }),
    "pdf-repair": dynamic(() => import("@/components/tools/pdf/PDFRepair"), { ssr: false }),
    "pdf-unlocker": dynamic(() => import("@/components/tools/pdf/PDFUnlock"), { ssr: false }),
    "pdf-protect": dynamic(() => import("@/components/tools/pdf/PDFProtect"), { ssr: false }),
    "pdf-to-image": dynamic(() => import("@/components/tools/pdf/PDFToImage"), { ssr: false }),
    "image-to-pdf": dynamic(() => import("@/components/tools/pdf/ImageToPDF"), { ssr: false }),
    "word-to-pdf": dynamic(() => import("@/components/tools/pdf/WordToPDF"), { ssr: false }),
    "pdf-to-word": dynamic(() => import("@/components/tools/pdf/PDFToWord"), { ssr: false }),
    "pdf-add-page-numbers": dynamic(() => import("@/components/tools/pdf/PDFPageNumbers"), { ssr: false }),
    "pdf-watermark": dynamic(() => import("@/components/tools/pdf/PDFWatermark"), { ssr: false }),
    "pdf-metadata-editor": dynamic(() => import("@/components/tools/pdf/PDFMetadataEditor"), { ssr: false }),
    "html-to-pdf": dynamic(() => import("@/components/tools/pdf/HTMLToPDF"), { ssr: false }),
    "pdf-editor": dynamic(() => import("@/components/tools/pdf/PDFEditor"), { ssr: false }),
    "pdf-rotation": dynamic(() => import("@/components/tools/pdf/PDFRotation"), { ssr: false }),
    "delete-pdf-pages": dynamic(() => import("@/components/tools/pdf/PDFPageDelete"), { ssr: false }),
    "rearrange-pdf": dynamic(() => import("@/components/tools/pdf/PDFRearrange"), { ssr: false }),

    // Image Tools
    "image-converter": dynamic(() => import("@/components/tools/image/ImageConverterTool.jsx"), { ssr: false }),
    "image-compressor": dynamic(() => import("@/components/tools/image/ImageCompressorTool.jsx"), { ssr: false }),
    "favicon-generator": dynamic(() => import("@/components/tools/image/FaviconGeneratorTool.jsx"), { ssr: false }),
    "icon-generator": dynamic(() => import("@/components/tools/image/FaviconGeneratorTool.jsx"), { ssr: false }),
    "background-remover": dynamic(() => import("@/components/tools/image/BackgroundRemoverTool.jsx"), { ssr: false }),
    "exif-reader": dynamic(() => import("@/components/tools/image/ExifReaderTool.jsx"), { ssr: false }),
    "logo-generator": dynamic(() => import("@/components/tools/image/LogoGeneratorTool.jsx"), { ssr: false }),
    "photo-enhancer": dynamic(() => import("@/components/tools/image/PhotoEnhancerTool.jsx"), { ssr: false }),
    "image-resizer": dynamic(() => import("@/components/tools/image/ImageResizerTool.jsx"), { ssr: false }),
    "rotate-image": dynamic(() => import("@/components/tools/image/ImageResizerTool.jsx"), { ssr: false }),
    "flip-image": dynamic(() => import("@/components/tools/image/ImageResizerTool.jsx"), { ssr: false }),
    "image-cropper": dynamic(() => import("@/components/tools/image/ImageResizerTool.jsx"), { ssr: false }),
    "image-enlarger": dynamic(() => import("@/components/tools/image/ImageResizerTool.jsx"), { ssr: false }),
    "image-editor": dynamic(() => import("@/components/tools/image/ImageResizerTool.jsx"), { ssr: false }),
    "image-color-picker": dynamic(() => import("@/components/tools/image/ImageColorPicker"), { ssr: false }),
    "image-to-base64-converter": dynamic(() => import("@/components/tools/image/ImageToBase64Tool"), { ssr: false }),
    "base64-to-image-converter": dynamic(() => import("@/components/tools/image/Base64ToImageTool"), { ssr: false }),

    // Text Tools
    "word-counter": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.WordCounterMount), { ssr: false }),
    "text-compare": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.TextCompareMount), { ssr: false }),
    "text-repeater": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.SimpleRepeater), { ssr: false }),
    "text-sorter": dynamic(() => import("@/components/tools/text/LineSorterTool.jsx"), { ssr: false }),
    "line-sorter": dynamic(() => import("@/components/tools/text/LineSorterTool.jsx"), { ssr: false }),
    "remove-line-breaks": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.RemoveBreaks), { ssr: false }),
    "comma-separator": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.CommaSeparatorMount), { ssr: false }),
    "text-to-slug-converter": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.SlugMount), { ssr: false }),
    "text-to-hashtags-converter": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.TagsFromText), { ssr: false }),
    "text-to-tags-converter": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.TagsFromText), { ssr: false }),
    "markdown-to-text": dynamic(() => import("@/components/tools/text/MarkdownToText.jsx"), { ssr: false }),
    "lorem-ipsum-generator": dynamic(() => import("@/components/tools/text/LoremIpsumTool"), { ssr: false }),
    "backwards-text-generator": dynamic(() => import("@/components/tools/text/BackwardsTextGenerator"), { ssr: false }),
    "case-converter": dynamic(() => import("@/components/tools/text/CaseConverter"), { ssr: false }),
    "remove-duplicate-lines": dynamic(() => import("@/components/tools/text/RemoveDuplicatesTool.jsx"), { ssr: false }),
    "text-reverser": dynamic(() => import("@/components/tools/text/TextReverserTool.jsx"), { ssr: false }),
    "text-encoder-decoder": dynamic(() => import("@/components/tools/text/TextEncoderTool.jsx"), { ssr: false }),
    "url-extractor": dynamic(() => import("@/components/tools/text/URLExtractorTool.jsx"), { ssr: false }),
    "article-rewriter": dynamic(() => import("@/components/tools/text/LineSorterTool.jsx"), { ssr: false }),
    "random-word-generator": dynamic(() => import("@/components/tools/text/LineSorterTool.jsx"), { ssr: false }),

    // Developer Tools
    "json-formatter": dynamic(() => import("@/components/tools/code/JsonFormatterTool.jsx"), { ssr: false }),
    "json-minify": dynamic(() => import("@/components/tools/developer/JSONMinifierTool.jsx"), { ssr: false }),
    "json-to-tsv-converter": dynamic(() => import("@/components/tools/developer/JSONToTSVTool.jsx"), { ssr: false }),
    "json-to-json-schema": dynamic(() => import("@/components/tools/developer/JSONToSchemaTool.jsx"), { ssr: false }),
    "base64-encode": dynamic(() => import("@/components/tools/developer/Base64Tool.jsx"), { ssr: false }),
    "base64-decode": dynamic(() => import("@/components/tools/developer/Base64Tool.jsx"), { ssr: false }),
    "base64-tool": dynamic(() => import("@/components/tools/developer/Base64Tool.jsx"), { ssr: false }),
    "md5-generator": dynamic(() => import("@/components/tools/security/HashGeneratorTool.jsx"), { ssr: false }),
    "sha256-generator": dynamic(() => import("@/components/tools/security/HashGeneratorTool.jsx"), { ssr: false }),
    "css-gradient-generator": dynamic(() => import("@/components/tools/developer/CSSGradientTool"), { ssr: false }),
    "css-shadow-generator": dynamic(() => import("@/components/tools/developer/CSSShadowTool"), { ssr: false }),
    "jwt-decoder": dynamic(() => import("@/components/tools/developer/JWTDecoderTool.jsx"), { ssr: false }),
    "code-formatter": dynamic(() => import("@/components/tools/code/JsonFormatterTool.jsx"), { ssr: false }),
    "sql-formatter": dynamic(() => import("@/components/tools/code/SQLFormatterTool.jsx"), { ssr: false }),
    "regex-tester": dynamic(() => import("@/components/tools/code/RegexTesterTool.jsx"), { ssr: false }),
    "mcp-server-tool": dynamic(() => import("@/components/tools/developer/McpServerTool.jsx"), { ssr: false }),

    // Generators
    "qr-code-generator": dynamic(() => import("@/components/tools/utilities/QrGeneratorPremium"), { ssr: false }),
    "qr-code-decoder": dynamic(() => import("@/components/tools/utilities/QrGeneratorPremium"), { ssr: false }),
    "qr-code-reader": dynamic(() => import("@/components/tools/utilities/QrReaderPremium"), { ssr: false }),
    "password-generator": dynamic(() => import("@/components/tools/utilities/PasswordGeneratorTool"), { ssr: false }),
    "font-generator": dynamic(() => import("@/components/tools/generators/FontGeneratorTool"), { ssr: false }),
    "number-generator": dynamic(() => import("@/components/tools/generators/NumberGeneratorTool"), { ssr: false }),
    "emoji-copy-tool": dynamic(() => import("@/components/tools/generators/EmojiCopyTool.jsx"), { ssr: false }),
    "chatgpt-persona-generator": dynamic(() => import("@/components/tools/generators/ChatGPTPersonaGeneratorTool.jsx"), { ssr: false }),

    // Audio Tools
    "text-to-speech": dynamic(() => import("@/components/tools/audio/TextToSpeechTool.jsx"), { ssr: false }),
    "ai-voice-generator": dynamic(() => import("@/components/tools/generators/AIVoiceGeneratorTool.jsx"), { ssr: false }),
    "guitar-tuner": dynamic(() => import("@/components/tools/audio/GuitarTunerTool"), { ssr: false }),

    // SEO Tools
    "keyword-density-checker": dynamic(() => import("@/components/tools/seo/KeywordTool.jsx"), { ssr: false }),
    "keyword-research-tool": dynamic(() => import("@/components/tools/seo/KeywordTool.jsx"), { ssr: false }),
    "keywords-suggestion-tool": dynamic(() => import("@/components/tools/seo/KeywordTool.jsx"), { ssr: false }),
    "sitemap-generator": dynamic(() => import("@/components/tools/seo/SitemapGeneratorTool.jsx"), { ssr: false }),
    "visual-sitemap": dynamic(() => import("@/components/tools/seo/VisualSitemapTool.jsx"), { ssr: false }),
    "seotoolkit": dynamic(() => import("@/components/tools/seo/SeoToolkit.jsx"), { ssr: false }),

    // Utilities
    "ip-address-lookup": dynamic(() => import("@/components/tools/utilities/IPLocationFinderTool.jsx"), { ssr: false }),
    "internet-speed-test": dynamic(() => import("@/components/tools/utilities/InternetSpeedTestTool.jsx"), { ssr: false }),
    "mailto-link-generator": dynamic(() => import("@/components/tools/utilities/MailtoLinkGeneratorTool.jsx"), { ssr: false }),
    "notes-tool": dynamic(() => import("@/components/tools/utilities/NotesTool.jsx"), { ssr: false }),
    "phone-validator": dynamic(() => import("@/components/tools/utilities/PhoneValidatorTool.jsx"), { ssr: false }),
    "url-shortener": dynamic(() => import("@/components/tools/utilities/URLShortenerTool.jsx"), { ssr: false }),
    "utm-builder": dynamic(() => import("@/components/tools/utilities/UTMBuilderTool.jsx"), { ssr: false }),
    "user-agent-parser": dynamic(() => import("@/components/tools/utilities/UserAgentParserTool.jsx"), { ssr: false }),

    // Video Tools
    "video-watermark-remover": dynamic(() => import("@/components/tools/video/VideoWatermarkRemoverTool.jsx"), { ssr: false }),

    // YouTube Tools
    "youtube-channel-id-extractor": dynamic(() => import("@/components/tools/youtube/YouTubeChannelIDFinderTool.jsx"), { ssr: false }),
    "youtube-channel-id-finder": dynamic(() => import("@/components/tools/youtube/YouTubeChannelIDFinderTool.jsx"), { ssr: false }),
    "youtube-video-statistics": dynamic(() => import("@/components/tools/youtube/YouTubeVideoAnalyticsTool.jsx"), { ssr: false }),
    "youtube-channel-statistics": dynamic(() => import("@/components/tools/youtube/YouTubeVideoAnalyticsTool.jsx"), { ssr: false }),
    "youtube-video-count-checker": dynamic(() => import("@/components/tools/youtube/YouTubeVideoAnalyticsTool.jsx"), { ssr: false }),
    "youtube-views-ratio-calculator": dynamic(() => import("@/components/tools/youtube/YouTubeVideoAnalyticsTool.jsx"), { ssr: false }),
    "youtube-money-calculator": dynamic(() => import("@/components/tools/youtube/YouTubeVideoAnalyticsTool.jsx"), { ssr: false }),
    "youtube-channel-age-checker": dynamic(() => import("@/components/tools/youtube/YouTubeVideoAnalyticsTool.jsx"), { ssr: false }),
    "youtube-trends-analyzer": dynamic(() => import("@/components/tools/youtube/YouTubeTrendsAnalyzerTool.jsx"), { ssr: false }),
    "youtube-script-generator": dynamic(() => import("@/components/tools/youtube/YouTubeScriptGenerator.jsx"), { ssr: false }),
    "youtube-title-generator": dynamic(() => import("@/components/tools/youtube/YouTubeScriptGenerator.jsx"), { ssr: false }),
    "youtube-description-generator": dynamic(() => import("@/components/tools/youtube/YouTubeScriptGenerator.jsx"), { ssr: false }),
    "youtube-hashtag-generator": dynamic(() => import("@/components/tools/youtube/YouTubeScriptGenerator.jsx"), { ssr: false }),
    "youtube-tag-generator": dynamic(() => import("@/components/tools/youtube/YouTubeScriptGenerator.jsx"), { ssr: false }),
    "youtube-comment-generator": dynamic(() => import("@/components/tools/generators/YouTubeCommentGeneratorTool.jsx"), { ssr: false }),

    // AI Tools
    "ai-image-generator": dynamic(() => import("@/components/tools/generators/AIImageGeneratorTool.jsx"), { ssr: false }),

    // Website / Web Tools
    "website-analyzer": dynamic(() => import("@/components/tools/web/WebsiteAnalyzerTool.jsx"), { ssr: false }),

    // Downloaders (generic engine)
    "downloader-engine": dynamic(() => import("@/components/tools/downloaders/DownloaderEngine.jsx"), { ssr: false }),
};

// Downloaders with non-standard names
const DOWNLOADER_ALIAS_IDS = new Set([
    "mp4-to-mp3", "fb-video-saver", "reddit-media-saver", "shrink-mp3-size",
    "modify-mp3-file", "save-fb-stories-anonymous", "save-instagram-clips",
    "ig-highlights-saver", "save-insta-pfp", "insta-reels-saver",
    "save-reels-video", "save-twitter-videos", "tiktok-saver-no-watermark",
    "save-tiktok-mp4", "save-ig-content", "mp3-from-tiktok",
    "pinterest-clip-saver", "snapchat-saver-online", "save-snaps-to-gallery",
]);

// Text generator tool IDs
const TEXT_GENERATOR_IDS = new Set([
    "bio-generator", "business-name-generator", "ai-poem-generator",
    "poetry-generator", "excuse-generator",
]);

// Lazy loaders for less common tools
const TextGeneratorTool = dynamic(() => import("@/components/tools/generators/TextGeneratorTool"), { ssr: false });
const YouTubeChannelIDFinderTool = dynamic(() => import("@/components/tools/youtube/YouTubeChannelIDFinderTool.jsx"), { ssr: false });
const DownloaderEngine = dynamic(() => import("@/components/tools/downloaders/DownloaderEngine.jsx"), { ssr: false });

export function getToolComponent(toolId: string): ComponentType<any> | null {
    // Check direct map
    if (TOOL_COMPONENTS[toolId]) return TOOL_COMPONENTS[toolId];

    // Handle generic groups
    if (toolId.includes("downloader") || toolId.includes("extractor") || DOWNLOADER_ALIAS_IDS.has(toolId)) {
        return TOOL_COMPONENTS["downloader-engine"];
    }

    // Text generators
    if (TEXT_GENERATOR_IDS.has(toolId)) {
        return TextGeneratorTool;
    }

    // YouTube tools — most route to the channel ID finder or the downloader engine
    if (toolId.startsWith("youtube-") && !TOOL_COMPONENTS[toolId]) {
        if (toolId.includes("downloader") || toolId.includes("extractor")) {
            return DownloaderEngine;
        }
        return YouTubeChannelIDFinderTool;
    }

    // API key testers — format validation
    if (toolId.includes("api-key-tester")) {
        return TOOL_COMPONENTS["base64-tool"];
    }

    return null;
}
