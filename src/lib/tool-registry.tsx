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
    "remove-line-breaks": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.RemoveBreaks), { ssr: false }),
    "comma-separator": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.CommaSeparatorMount), { ssr: false }),
    "text-to-slug-converter": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.SlugMount), { ssr: false }),
    "text-to-hashtags-converter": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.TagsFromText), { ssr: false }),
    "text-to-tags-converter": dynamic(() => import("@/components/tools/shared/RegisteredToolMount").then(m => m.TagsFromText), { ssr: false }),
    "markdown-to-text": dynamic(() => import("@/components/tools/text/MarkdownToText.jsx"), { ssr: false }),
    "lorem-ipsum-generator": dynamic(() => import("@/components/tools/text/LoremIpsumTool"), { ssr: false }),

    // Developer Tools
    "json-formatter": dynamic(() => import("@/components/tools/code/JsonFormatterTool.jsx"), { ssr: false }),
    "json-minify": dynamic(() => import("@/components/tools/developer/JSONMinifierTool.jsx"), { ssr: false }),
    "json-to-tsv-converter": dynamic(() => import("@/components/tools/developer/JSONToTSVTool.jsx"), { ssr: false }),
    "json-to-json-schema": dynamic(() => import("@/components/tools/developer/JSONToSchemaTool.jsx"), { ssr: false }),
    "base64-encode": dynamic(() => import("@/components/tools/developer/Base64Tool.jsx"), { ssr: false }),
    "base64-decode": dynamic(() => import("@/components/tools/developer/Base64Tool.jsx"), { ssr: false }),
    "base64-tool": dynamic(() => import("@/components/tools/developer/Base64Tool.jsx"), { ssr: false }),
    "md5-generator": dynamic(() => import("@/components/tools/security/HashGeneratorTool.jsx"), { ssr: false }),
    "css-gradient-generator": dynamic(() => import("@/components/tools/developer/CSSGradientTool"), { ssr: false }),
    "css-shadow-generator": dynamic(() => import("@/components/tools/developer/CSSShadowTool"), { ssr: false }),

    // Generators
    "qr-code-generator": dynamic(() => import("@/components/tools/utilities/QrGeneratorPremium"), { ssr: false }),
    "qr-code-decoder": dynamic(() => import("@/components/tools/utilities/QrGeneratorPremium"), { ssr: false }),
    "qr-code-reader": dynamic(() => import("@/components/tools/utilities/QrReaderPremium"), { ssr: false }),
    "password-generator": dynamic(() => import("@/components/tools/utilities/PasswordGeneratorTool"), { ssr: false }),
    "font-generator": dynamic(() => import("@/components/tools/generators/FontGeneratorTool"), { ssr: false }),
    "number-generator": dynamic(() => import("@/components/tools/generators/NumberGeneratorTool"), { ssr: false }),

    // YouTube Tools
    "youtube-channel-id-extractor": dynamic(() => import("@/components/tools/youtube/YouTubeChannelIDFinderTool.jsx"), { ssr: false }),
    "youtube-channel-id-finder": dynamic(() => import("@/components/tools/youtube/YouTubeChannelIDFinderTool.jsx"), { ssr: false }),

    // Downloaders
    "downloader-engine": dynamic(() => import("@/components/tools/downloaders/DownloaderEngine.jsx"), { ssr: false }),
};

export function getToolComponent(toolId: string): ComponentType<any> | null {
    // Check direct map
    if (TOOL_COMPONENTS[toolId]) return TOOL_COMPONENTS[toolId];

    // Handle generic groups
    if (toolId.includes("downloader") || toolId.includes("extractor")) {
        return TOOL_COMPONENTS["downloader-engine"];
    }

    return null;
}
