import dynamic from "next/dynamic";

/**
 * Registry of all tool components to enable dynamic SSG rendering.
 * This maps the 'id' of a tool to its corresponding UI component.
 */
export const toolComponentRegistry: Record<string, any> = {
  // Image Tools
  "image-compressor": dynamic(() => import("@/components/tools/image/ImageCompressorTool")),
  "image-resizer": dynamic(() => import("@/components/tools/image/ImageResizerTool")),
  "background-remover": dynamic(() => import("@/components/tools/image/BackgroundRemoverTool")),
  "image-converter": dynamic(() => import("@/components/tools/image/ImageConverterTool")),
  "photo-enhancer": dynamic(() => import("@/components/tools/image/PhotoEnhancerTool")),
  "logo-generator": dynamic(() => import("@/components/tools/image/LogoGeneratorTool")),
  "favicon-generator": dynamic(() => import("@/components/tools/image/FaviconGeneratorTool")),
  "exif-reader": dynamic(() => import("@/components/tools/image/ExifReaderTool")),
  
  // PDF Tools
  "pdf-to-word": dynamic(() => import("@/components/tools/pdf/PdfToWordTool")),
  "merge-pdf": dynamic(() => import("@/components/tools/pdf/MergePdfTool")),
  "split-pdf": dynamic(() => import("@/components/tools/pdf/SplitPdfTool")),
  "compress-pdf": dynamic(() => import("@/components/tools/pdf/CompressPdfTool")),
  "unlock-pdf": dynamic(() => import("@/components/tools/pdf/UnlockPdfTool")),
  "word-to-pdf": dynamic(() => import("@/components/tools/pdf/WordToPdfTool")),
  
  // Video Tools
  "video-downloader": dynamic(() => import("@/components/tools/video/VideoDownloaderTool")),
  "terabox-downloader": dynamic(() => import("@/components/tools/video/TeraBoxDownloaderTool")),
  "video-to-gif": dynamic(() => import("@/components/tools/video/VideoToGifTool")),
  
  // YouTube Tools
  "youtube-downloader": dynamic(() => import("@/components/tools/youtube/YoutubeDownloaderTool")),
  "youtube-to-mp3": dynamic(() => import("@/components/tools/youtube/YoutubeToMp3Tool")),
  "youtube-thumbnail-downloader": dynamic(() => import("@/components/tools/youtube/YoutubeThumbnailDownloaderTool")),
  
  // Developer Tools
  "json-formatter": dynamic(() => import("@/components/tools/developer/JsonFormatterTool")),
  "base64-tool": dynamic(() => import("@/components/tools/developer/Base64Tool")),
  "api-key-tester": dynamic(() => import("@/components/tools/developer/ApiKeyTesterTool")),
  "html-to-markdown": dynamic(() => import("@/components/tools/developer/HtmlToMarkdownTool")),
  
  // Audio Tools
  "text-to-speech": dynamic(() => import("@/components/audio/TextToSpeechTool")),
  "mp3-cutter": dynamic(() => import("@/components/audio/Mp3CutterTool")),
  
  // Text Tools
  "word-counter": dynamic(() => import("@/components/tools/text/WordCounterTool")),
  "case-converter": dynamic(() => import("@/components/tools/text/CaseConverterTool")),
  "lorem-ipsum-generator": dynamic(() => import("@/components/tools/text/LoremIpsumGenerator")),
  
  // SEO Tools
  "meta-tag-analyzer": dynamic(() => import("@/components/tools/seo/MetaTagAnalyzer")),
  "keyword-research-tool": dynamic(() => import("@/components/tools/seo/KeywordResearchTool")),
  "visual-sitemap": dynamic(() => import("@/components/tools/seo/VisualSitemap")),
  
  // Utility Tools
  "url-shortener": dynamic(() => import("@/components/tools/utilities/UrlShortener")),
  "qr-code-generator": dynamic(() => import("@/components/tools/utilities/QrCodeGenerator")),
  "password-generator": dynamic(() => import("@/components/tools/utilities/PasswordGenerator")),
};

/**
 * Fallback mapping for category-specific generic tools if needed.
 */
export const categoryDefaults: Record<string, any> = {
  image: dynamic(() => import("@/components/tools/image/ImageCompressorTool")), // Placeholder
  pdf: dynamic(() => import("@/components/tools/pdf/PdfToWordTool")), // Placeholder
};
