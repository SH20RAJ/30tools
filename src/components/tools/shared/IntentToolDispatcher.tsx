"use client";

import dynamic from "next/dynamic";
import React from "react";

const AIImageGeneratorTool = dynamic(() => import("@/components/tools/generators/AIImageGeneratorTool"), { ssr: false });
const AIMusicGeneratorTool = dynamic(() => import("@/components/tools/generators/AIMusicGeneratorTool"), { ssr: false });
const AIVoiceGeneratorTool = dynamic(() => import("@/components/tools/generators/AIVoiceGeneratorTool"), { ssr: false });
const AcademicGradesCalculator = dynamic(() => import("@/components/tools/calculators/AcademicGradesCalculator"), { ssr: false });
const AkillitvDownloader = dynamic(() => import("@/components/tools/downloaders/AkillitvDownloader"), { ssr: false });
const AllDownloaders = dynamic(() => import("@/components/tools/downloaders/AllDownloaders"), { ssr: false });
const AsciiArtGeneratorTool = dynamic(() => import("@/components/tools/generators/AsciiArtGeneratorTool"), { ssr: false });
const AttendanceCalculator = dynamic(() => import("@/components/tools/calculators/AttendanceCalculator"), { ssr: false });
const BackgroundRemoverTool = dynamic(() => import("@/components/tools/image/BackgroundRemoverTool"), { ssr: false });
const BandcampDownloader = dynamic(() => import("@/components/tools/downloaders/BandcampDownloader"), { ssr: false });
const Base64ToImageTool = dynamic(() => import("@/components/tools/image/Base64ToImageTool"), { ssr: false });
const Base64Tool = dynamic(() => import("@/components/tools/developer/Base64Tool"), { ssr: false });
const BaseConverter = dynamic(() => import("@/components/tools/shared/BaseConverter"), { ssr: false });
const BilibiliDownloader = dynamic(() => import("@/components/tools/downloaders/BilibiliDownloader"), { ssr: false });
const BioDataMaker = dynamic(() => import("@/components/tools/generators/BioDataMaker"), { ssr: false });
const BitchuteDownloader = dynamic(() => import("@/components/tools/downloaders/BitchuteDownloader"), { ssr: false });
const BloggerDownloader = dynamic(() => import("@/components/tools/downloaders/BloggerDownloader"), { ssr: false });
const BlutvDownloader = dynamic(() => import("@/components/tools/downloaders/BlutvDownloader"), { ssr: false });
const BrowserDetectTool = dynamic(() => import("@/components/tools/built-ins/BrowserDetectTool"), { ssr: false });
const BuiltInCalculators = dynamic(() => import("@/components/tools/built-ins/BuiltInCalculators"), { ssr: false });
const BuiltInMarkup = dynamic(() => import("@/components/tools/built-ins/BuiltInMarkup"), { ssr: false });
const BuiltInSafeHttp = dynamic(() => import("@/components/tools/built-ins/BuiltInSafeHttp"), { ssr: false });
const BuiltInSerialization = dynamic(() => import("@/components/tools/built-ins/BuiltInSerialization"), { ssr: false });
const BuzzfeedDownloader = dynamic(() => import("@/components/tools/downloaders/BuzzfeedDownloader"), { ssr: false });
const CSSGradientTool = dynamic(() => import("@/components/tools/developer/CSSGradientTool"), { ssr: false });
const CSSShadowTool = dynamic(() => import("@/components/tools/developer/CSSShadowTool"), { ssr: false });
const CapcutDownloader = dynamic(() => import("@/components/tools/downloaders/CapcutDownloader"), { ssr: false });
const ChingariDownloader = dynamic(() => import("@/components/tools/downloaders/ChingariDownloader"), { ssr: false });
const CommaSeparatorTool = dynamic(() => import("@/components/tools/text/CommaSeparatorTool"), { ssr: false });
const ConstructionCalculator = dynamic(() => import("@/components/tools/calculators/ConstructionCalculator"), { ssr: false });
const CreditCardGeneratorTool = dynamic(() => import("@/components/tools/security/CreditCardGeneratorTool"), { ssr: false });
const CreditCardValidatorTool = dynamic(() => import("@/components/tools/security/CreditCardValidatorTool"), { ssr: false });
const DailymotionDownloader = dynamic(() => import("@/components/tools/downloaders/DailymotionDownloader"), { ssr: false });
const DnsLookupTool = dynamic(() => import("@/components/tools/built-ins/DnsLookupTool"), { ssr: false });
const DomainToIPTool = dynamic(() => import("@/components/tools/built-ins/DomainToIPTool"), { ssr: false });
const DouyinDownloader = dynamic(() => import("@/components/tools/downloaders/DouyinDownloader"), { ssr: false });
const EspnDownloader = dynamic(() => import("@/components/tools/downloaders/EspnDownloader"), { ssr: false });
const ExamPhotoResizer = dynamic(() => import("@/components/tools/exam/ExamPhotoResizer"), { ssr: false });
const ExamPillar = dynamic(() => import("@/components/pillars/ExamPillar"), { ssr: false });
const ExifReaderTool = dynamic(() => import("@/components/tools/image/ExifReaderTool"), { ssr: false });
const FacebookDownloader = dynamic(() => import("@/components/tools/downloaders/FacebookDownloader"), { ssr: false });
const FacebookStoryDownloader = dynamic(() => import("@/components/tools/downloaders/FacebookStoryDownloader"), { ssr: false });
const FakeChatGeneratorTool = dynamic(() => import("@/components/tools/generators/FakeChatGeneratorTool"), { ssr: false });
const FaqSchemaGenerator = dynamic(() => import("@/components/tools/built-ins/FaqSchemaGenerator"), { ssr: false });
const FaviconGeneratorTool = dynamic(() => import("@/components/tools/image/FaviconGeneratorTool"), { ssr: false });
const FebspotDownloader = dynamic(() => import("@/components/tools/downloaders/FebspotDownloader"), { ssr: false });
const FlickrDownloader = dynamic(() => import("@/components/tools/downloaders/FlickrDownloader"), { ssr: false });
const FontGeneratorTool = dynamic(() => import("@/components/tools/generators/FontGeneratorTool"), { ssr: false });
const FormImageSizeChecker = dynamic(() => import("@/components/tools/exam/FormImageSizeChecker"), { ssr: false });
const GaanaDownloader = dynamic(() => import("@/components/tools/downloaders/GaanaDownloader"), { ssr: false });
const GuitarTunerTool = dynamic(() => import("@/components/tools/audio/GuitarTunerTool"), { ssr: false });
const HashGeneratorTool = dynamic(() => import("@/components/tools/security/HashGeneratorTool"), { ssr: false });
const HindiTypingTool = dynamic(() => import("@/components/tools/text/HindiTypingTool"), { ssr: false });
const HtaccessGenerator = dynamic(() => import("@/components/tools/built-ins/HtaccessGenerator"), { ssr: false });
const IPLocationFinderTool = dynamic(() => import("@/components/tools/utilities/IPLocationFinderTool"), { ssr: false });
const IfunnyDownloader = dynamic(() => import("@/components/tools/downloaders/IfunnyDownloader"), { ssr: false });
const ImageCompressorTool = dynamic(() => import("@/components/tools/image/ImageCompressorTool"), { ssr: false });
const ImageConverterTool = dynamic(() => import("@/components/tools/image/ImageConverterTool"), { ssr: false });
const ImagePillar = dynamic(() => import("@/components/pillars/ImagePillar"), { ssr: false });
const ImageResizerTool = dynamic(() => import("@/components/tools/image/ImageResizerTool"), { ssr: false });
const ImageToBase64Tool = dynamic(() => import("@/components/tools/image/ImageToBase64Tool"), { ssr: false });
const ImageToPDFTool = dynamic(() => import("@/components/tools/pdf/ImageToPDF"), { ssr: false });
const ImdbDownloader = dynamic(() => import("@/components/tools/downloaders/ImdbDownloader"), { ssr: false });
const ImgurDownloader = dynamic(() => import("@/components/tools/downloaders/ImgurDownloader"), { ssr: false });
const InstagramDPDownloader = dynamic(() => import("@/components/tools/downloaders/InstagramDPDownloader"), { ssr: false });
const InstagramDownloader = dynamic(() => import("@/components/tools/downloaders/InstagramDownloader"), { ssr: false });
const InstagramReelDownloader = dynamic(() => import("@/components/tools/downloaders/InstagramReelDownloader"), { ssr: false });
const InstagramStoryDownloader = dynamic(() => import("@/components/tools/downloaders/InstagramStoryDownloader"), { ssr: false });
const InternetSpeedTestTool = dynamic(() => import("@/components/tools/utilities/InternetSpeedTestTool"), { ssr: false });
const InvoiceGenerator = dynamic(() => import("@/components/tools/generators/InvoiceGenerator"), { ssr: false });
const IzleseneDownloader = dynamic(() => import("@/components/tools/downloaders/IzleseneDownloader"), { ssr: false });
const JSONFormatterTool = dynamic(() => import("@/components/tools/developer/JSONFormatterTool"), { ssr: false });
const JSONMinifierTool = dynamic(() => import("@/components/tools/developer/JSONMinifierTool"), { ssr: false });
const JSONToSchemaTool = dynamic(() => import("@/components/tools/developer/JSONToSchemaTool"), { ssr: false });
const JpgToPdfExam = dynamic(() => import("@/components/tools/exam/JpgToPdfExam"), { ssr: false });
const JsonFormatterTool = dynamic(() => import("@/components/tools/code/JsonFormatterTool"), { ssr: false });
const KeywordTool = dynamic(() => import("@/components/tools/seo/KeywordTool"), { ssr: false });
const KickstarterDownloader = dynamic(() => import("@/components/tools/downloaders/KickstarterDownloader"), { ssr: false });
const KrutiDevConverter = dynamic(() => import("@/components/tools/text/KrutiDevConverter"), { ssr: false });
const KwaiDownloader = dynamic(() => import("@/components/tools/downloaders/KwaiDownloader"), { ssr: false });
const LeaveLetterGenerator = dynamic(() => import("@/components/tools/generators/LeaveLetterGenerator"), { ssr: false });
const LegalTemplateGenerator = dynamic(() => import("@/components/tools/built-ins/LegalTemplateGenerator"), { ssr: false });
const LikeeDownloader = dynamic(() => import("@/components/tools/downloaders/LikeeDownloader"), { ssr: false });
const LineSorterTool = dynamic(() => import("@/components/tools/text/LineSorterTool"), { ssr: false });
const LinkedinDownloader = dynamic(() => import("@/components/tools/downloaders/LinkedinDownloader"), { ssr: false });
const LogoGeneratorTool = dynamic(() => import("@/components/tools/image/LogoGeneratorTool"), { ssr: false });
const LoremIpsumGeneratorTool = dynamic(() => import("@/components/tools/generators/LoremIpsumGeneratorTool"), { ssr: false });
const M3u8Downloader = dynamic(() => import("@/components/tools/downloaders/M3u8Downloader"), { ssr: false });
const MarkdownToText = dynamic(() => import("@/components/tools/text/MarkdownToText"), { ssr: false });
const MashableDownloader = dynamic(() => import("@/components/tools/downloaders/MashableDownloader"), { ssr: false });
const MetaTagGenerator = dynamic(() => import("@/components/tools/built-ins/MetaTagGenerator"), { ssr: false });
const MixcloudDownloader = dynamic(() => import("@/components/tools/downloaders/MixcloudDownloader"), { ssr: false });
const MxTakaTakDownloader = dynamic(() => import("@/components/tools/downloaders/MxTakaTakDownloader"), { ssr: false });
const NinegagDownloader = dynamic(() => import("@/components/tools/downloaders/NinegagDownloader"), { ssr: false });
const NumberGeneratorTool = dynamic(() => import("@/components/tools/generators/NumberGeneratorTool"), { ssr: false });
const NumberToWordTool = dynamic(() => import("@/components/tools/text/NumberToWordTool"), { ssr: false });
const OdnoklassnikiDownloader = dynamic(() => import("@/components/tools/downloaders/OdnoklassnikiDownloader"), { ssr: false });
const OnlineVideoDownloader = dynamic(() => import("@/components/tools/downloaders/OnlineVideoDownloader"), { ssr: false });
const OpenGraphGenerator = dynamic(() => import("@/components/tools/built-ins/OpenGraphGenerator"), { ssr: false });
const PDFEditor = dynamic(() => import("@/components/tools/pdf/PDFEditor"), { ssr: false });
const PDFGrayscale = dynamic(() => import("@/components/tools/pdf/PDFGrayscale"), { ssr: false });
const PDFPillar = dynamic(() => import("@/components/pillars/PDFPillar"), { ssr: false });
const PDFProtect = dynamic(() => import("@/components/tools/pdf/PDFProtect"), { ssr: false });
const PDFRepair = dynamic(() => import("@/components/tools/pdf/PDFRepair"), { ssr: false });
const PDFToImage = dynamic(() => import("@/components/tools/pdf/PDFToImage"), { ssr: false });
const PDFToWord = dynamic(() => import("@/components/tools/pdf/PDFToWord"), { ssr: false });
const PDFUnlock = dynamic(() => import("@/components/tools/pdf/PDFUnlock"), { ssr: false });
const PanCardResizer = dynamic(() => import("@/components/tools/exam/PanCardResizer"), { ssr: false });
const PassportPhotoMaker = dynamic(() => import("@/components/tools/exam/PassportPhotoMaker"), { ssr: false });
const PasswordGeneratorTool = dynamic(() => import("@/components/tools/utilities/PasswordGeneratorTool"), { ssr: false });
const PdfCompressor200kb = dynamic(() => import("@/components/tools/exam/PdfCompressor200kb"), { ssr: false });
const PeriscopeDownloader = dynamic(() => import("@/components/tools/downloaders/PeriscopeDownloader"), { ssr: false });
const PhotoCompressor50kb = dynamic(() => import("@/components/tools/exam/PhotoCompressor50kb"), { ssr: false });
const PhotoEnhancerTool = dynamic(() => import("@/components/tools/image/PhotoEnhancerTool"), { ssr: false });
const PhotoNameDateEditor = dynamic(() => import("@/components/tools/exam/PhotoNameDateEditor"), { ssr: false });
const PinterestDownloader = dynamic(() => import("@/components/tools/downloaders/PinterestDownloader"), { ssr: false });
const PublicIpTool = dynamic(() => import("@/components/tools/built-ins/PublicIpTool"), { ssr: false });
const PuhutvDownloader = dynamic(() => import("@/components/tools/downloaders/PuhutvDownloader"), { ssr: false });
const QrGeneratorPremium = dynamic(() => import("@/components/tools/utilities/QrGeneratorPremium"), { ssr: false });
const QrReaderPremium = dynamic(() => import("@/components/tools/utilities/QrReaderPremium"), { ssr: false });
const RedditDownloader = dynamic(() => import("@/components/tools/downloaders/RedditDownloader"), { ssr: false });
const RemoveLineBreaksTool = dynamic(() => import("@/components/tools/text/RemoveLineBreaksTool"), { ssr: false });
const RentReceiptGenerator = dynamic(() => import("@/components/tools/generators/RentReceiptGenerator"), { ssr: false });
const ResignationLetterGenerator = dynamic(() => import("@/components/tools/generators/ResignationLetterGenerator"), { ssr: false });
const ResizeImageCm = dynamic(() => import("@/components/tools/image/ResizeImageCm"), { ssr: false });
const RgbHexConverter = dynamic(() => import("@/components/tools/built-ins/RgbHexConverter"), { ssr: false });
const RomanNumeralTool = dynamic(() => import("@/components/tools/built-ins/RomanNumeralTool"), { ssr: false });
const RumbleDownloader = dynamic(() => import("@/components/tools/downloaders/RumbleDownloader"), { ssr: false });
const ScreenResolutionTool = dynamic(() => import("@/components/tools/built-ins/ScreenResolutionTool"), { ssr: false });
const SeoToolkit = dynamic(() => import("@/components/tools/seo/SeoToolkit"), { ssr: false });
const SharechatDownloader = dynamic(() => import("@/components/tools/downloaders/SharechatDownloader"), { ssr: false });
const SignatureResizer = dynamic(() => import("@/components/tools/exam/SignatureResizer"), { ssr: false });
const SitemapUrlDownloader = dynamic(() => import("@/components/tools/downloaders/SitemapUrlDownloader"), { ssr: false });
const SlugTool = dynamic(() => import("@/components/tools/text/SlugTool"), { ssr: false });
const SnapchatDownloader = dynamic(() => import("@/components/tools/downloaders/SnapchatDownloader"), { ssr: false });
const SoundcloudDownloader = dynamic(() => import("@/components/tools/downloaders/SoundcloudDownloader"), { ssr: false });
const SrtToVttTool = dynamic(() => import("@/components/tools/text/SrtToVttTool"), { ssr: false });
const StreamableDownloader = dynamic(() => import("@/components/tools/downloaders/StreamableDownloader"), { ssr: false });
const TagsFromTextTool = dynamic(() => import("@/components/tools/text/TagsFromTextTool"), { ssr: false });
const TedDownloader = dynamic(() => import("@/components/tools/downloaders/TedDownloader"), { ssr: false });
const TelegramDownloader = dynamic(() => import("@/components/tools/downloaders/TelegramDownloader"), { ssr: false });
const TextCompareTool = dynamic(() => import("@/components/tools/text/TextCompareTool"), { ssr: false });
const TextGeneratorTool = dynamic(() => import("@/components/tools/generators/TextGeneratorTool"), { ssr: false });
const TextRepeaterTool = dynamic(() => import("@/components/tools/text/TextRepeaterTool"), { ssr: false });
const TextToSpeechTool = dynamic(() => import("@/components/tools/audio/TextToSpeechTool"), { ssr: false });
const ThreadsDownloader = dynamic(() => import("@/components/tools/downloaders/ThreadsDownloader"), { ssr: false });
const TikTokAudioDownloader = dynamic(() => import("@/components/tools/downloaders/TikTokAudioDownloader"), { ssr: false });
const TikTokDownloader = dynamic(() => import("@/components/tools/downloaders/TikTokDownloader"), { ssr: false });
const TikTokMP3Converter = dynamic(() => import("@/components/tools/downloaders/TikTokMP3Converter"), { ssr: false });
const TumblrVideoDownloader = dynamic(() => import("@/components/tools/downloaders/TumblrVideoDownloader"), { ssr: false });
const TwitchDownloader = dynamic(() => import("@/components/tools/downloaders/TwitchDownloader"), { ssr: false });
const TwitterCardGenerator = dynamic(() => import("@/components/tools/built-ins/TwitterCardGenerator"), { ssr: false });
const TwitterDownloader = dynamic(() => import("@/components/tools/downloaders/TwitterDownloader"), { ssr: false });
const URLShortenerTool = dynamic(() => import("@/components/tools/utilities/URLShortenerTool"), { ssr: false });
const UTMBuilderTool = dynamic(() => import("@/components/tools/utilities/UTMBuilderTool"), { ssr: false });
const UniversalUnitConverter = dynamic(() => import("@/components/tools/built-ins/UniversalUnitConverter"), { ssr: false });
const UniversalVideoDownloader = dynamic(() => import("@/components/tools/downloaders/UniversalVideoDownloader"), { ssr: false });
const UrlCodecTool = dynamic(() => import("@/components/tools/built-ins/UrlCodecTool"), { ssr: false });
const UrlParserTool = dynamic(() => import("@/components/tools/built-ins/UrlParserTool"), { ssr: false });
const UserAgentTool = dynamic(() => import("@/components/tools/built-ins/UserAgentTool"), { ssr: false });
const UuidGeneratorTool = dynamic(() => import("@/components/tools/built-ins/UuidGeneratorTool"), { ssr: false });
const VideoConverterTool = dynamic(() => import("@/components/tools/video/VideoConverterTool"), { ssr: false });
const VideoEditorTool = dynamic(() => import("@/components/tools/video/VideoEditorTool"), { ssr: false });
const VimeoDownloader = dynamic(() => import("@/components/tools/downloaders/VimeoDownloader"), { ssr: false });
const VisualSitemapTool = dynamic(() => import("@/components/tools/seo/VisualSitemapTool"), { ssr: false });
const VkontakteDownloader = dynamic(() => import("@/components/tools/downloaders/VkontakteDownloader"), { ssr: false });
const VttToSrtTool = dynamic(() => import("@/components/tools/text/VttToSrtTool"), { ssr: false });
const WebsiteRankingCheckerTool = dynamic(() => import("@/components/tools/seo/WebsiteRankingCheckerTool"), { ssr: false });
const WordCounterTool = dynamic(() => import("@/components/tools/text/WordCounterTool"), { ssr: false });
const WordToNumberTool = dynamic(() => import("@/components/tools/text/WordToNumberTool"), { ssr: false });
const WordToPDF = dynamic(() => import("@/components/tools/pdf/WordToPDF"), { ssr: false });
const YouTubeChannelIDFinderTool = dynamic(() => import("@/components/tools/youtube/YouTubeChannelIDFinderTool"), { ssr: false });
const YouTubeDownloader = dynamic(() => import("@/components/tools/downloaders/YouTubeDownloader"), { ssr: false });
const YouTubeShortsDownloader = dynamic(() => import("@/components/tools/downloaders/YouTubeShortsDownloader"), { ssr: false });

// Registry of tool ID to dynamic component and preset props
export const INTENT_TOOL_REGISTRY: Record<string, { component: React.ComponentType<any>; props: any }> = {
    "75-attendance-calculator": { component: AttendanceCalculator, props: {} },
    "adsense-calculator": { component: BuiltInCalculators, props: {"kind": "adsense-calculator"} },
    "age-calculator": { component: BuiltInCalculators, props: {"kind": "age-calculator"} },
    "ai-image-generator": { component: AIImageGeneratorTool, props: {} },
    "ai-music-generator": { component: AIMusicGeneratorTool, props: {} },
    "ai-poem-generator": { component: TextGeneratorTool, props: {} },
    "ai-voice-generator": { component: AIVoiceGeneratorTool, props: {} },
    "akillitv-video-downloader": { component: AkillitvDownloader, props: {} },
    "all-downloaders": { component: AllDownloaders, props: {} },
    "angle-converter": { component: UniversalUnitConverter, props: {"preset": "angle"} },
    "apparent-power-converter": { component: UniversalUnitConverter, props: {"preset": "apparentPower"} },
    "area-converter": { component: UniversalUnitConverter, props: {"preset": "area"} },
    "article-rewriter": { component: LineSorterTool, props: {} },
    "ascii-art-generator": { component: AsciiArtGeneratorTool, props: {} },
    "ascii-to-binary-converter": { component: BaseConverter, props: {"converterKind": "ascii-to-binary"} },
    "ascii-to-text-converter": { component: BaseConverter, props: {"converterKind": "ascii-to-text"} },
    "average-calculator": { component: BuiltInCalculators, props: {"kind": "average-calculator"} },
    "background-remover": { component: BackgroundRemoverTool, props: {} },
    "backlink-checker": { component: BuiltInSafeHttp, props: {"toolId": "backlink-checker"} },
    "bandcamp-video-downloader": { component: BandcampDownloader, props: {} },
    "base64-decode": { component: Base64Tool, props: {"initialMode": "decode"} },
    "base64-encode": { component: Base64Tool, props: {"initialMode": "encode"} },
    "base64-to-image-converter": { component: Base64ToImageTool, props: {} },
    "base64-tool": { component: Base64Tool, props: {} },
    "bilibili-video-downloader": { component: BilibiliDownloader, props: {} },
    "binary-to-ascii-converter": { component: BaseConverter, props: {"converterKind": "binary-to-ascii"} },
    "binary-to-decimal-converter": { component: BaseConverter, props: {"converterKind": "binary-to-decimal"} },
    "binary-to-hex-converter": { component: BaseConverter, props: {"converterKind": "binary-to-hex"} },
    "binary-to-octal-converter": { component: BaseConverter, props: {"converterKind": "binary-to-octal"} },
    "binary-to-text-converter": { component: BaseConverter, props: {"converterKind": "binary-to-text"} },
    "bio-data-maker": { component: BioDataMaker, props: {} },
    "bio-generator": { component: TextGeneratorTool, props: {} },
    "bitchute-video-downloader": { component: BitchuteDownloader, props: {} },
    "blogger-video-downloader": { component: BloggerDownloader, props: {} },
    "blutv-video-downloader": { component: BlutvDownloader, props: {} },
    "brick-calculator": { component: ConstructionCalculator, props: {"defaultTab": "brick"} },
    "bulk-keyword-rank-checker": { component: BuiltInSafeHttp, props: {"toolId": "bulk-keyword-rank-checker"} },
    "business-name-generator": { component: TextGeneratorTool, props: {} },
    "buzzfeed-video-downloader": { component: BuzzfeedDownloader, props: {} },
    "capcut-video-downloader": { component: CapcutDownloader, props: {} },
    "cgpa-calculator": { component: AcademicGradesCalculator, props: {"defaultTab": "cgpa"} },
    "cgpa-to-percentage-calculator": { component: AcademicGradesCalculator, props: {"defaultTab": "cgpa-pct"} },
    "charge-converter": { component: UniversalUnitConverter, props: {"preset": "charge"} },
    "chingari-video-downloader": { component: ChingariDownloader, props: {} },
    "code-formatter": { component: JSONFormatterTool, props: {} },
    "color-converter": { component: RgbHexConverter, props: {"mode": "color"} },
    "comma-separator": { component: CommaSeparatorTool, props: {} },
    "compress-image-to-100kb": { component: ExamPhotoResizer, props: {"examName": "100KB Limit", "disclaimer": "Compress your images to exactly under 100KB for online form portals."} },
    "compress-image-to-10kb": { component: ExamPhotoResizer, props: {"examName": "10KB Limit", "disclaimer": "Compress your images to exactly under 10KB for online form portals."} },
    "compress-image-to-200kb": { component: ExamPhotoResizer, props: {"examName": "200KB Limit", "disclaimer": "Compress your images to exactly under 200KB for online form portals."} },
    "compress-image-to-20kb": { component: ExamPhotoResizer, props: {"examName": "20KB Limit", "disclaimer": "Compress your images to exactly under 20KB for online form portals."} },
    "compress-image-to-30kb": { component: ExamPhotoResizer, props: {"examName": "30KB Limit", "disclaimer": "Compress your images to exactly under 30KB for online form portals."} },
    "confidence-interval-calculator": { component: BuiltInCalculators, props: {"kind": "confidence-interval-calculator"} },
    "convert-srt-to-vtt": { component: SrtToVttTool, props: {} },
    "convert-to-ico": { component: ImageConverterTool, props: {} },
    "convert-vtt-to-srt": { component: VttToSrtTool, props: {} },
    "cpm-calculator": { component: BuiltInCalculators, props: {"kind": "cpm-calculator"} },
    "credit-card-generator": { component: CreditCardGeneratorTool, props: {} },
    "credit-card-validator": { component: CreditCardValidatorTool, props: {} },
    "css-beautifier": { component: BuiltInMarkup, props: {"toolId": "css-beautifier"} },
    "css-gradient-generator": { component: CSSGradientTool, props: {} },
    "css-minifier": { component: BuiltInMarkup, props: {"toolId": "css-minifier"} },
    "css-shadow-generator": { component: CSSShadowTool, props: {} },
    "csv-to-json-converter": { component: BuiltInSerialization, props: {"toolId": "csv-to-json-converter"} },
    "cuet-photo-resizer": { component: ExamPhotoResizer, props: {"examName": "CUET"} },
    "currency-converter": { component: BuiltInCalculators, props: {"kind": "currency-converter"} },
    "current-converter": { component: UniversalUnitConverter, props: {"preset": "current"} },
    "dailymotion-video-downloader": { component: DailymotionDownloader, props: {} },
    "decimal-to-binary-converter": { component: BaseConverter, props: {"converterKind": "decimal-to-binary"} },
    "decimal-to-hex-converter": { component: BaseConverter, props: {"converterKind": "decimal-to-hex"} },
    "decimal-to-octal-converter": { component: BaseConverter, props: {"converterKind": "decimal-to-octal"} },
    "decimal-to-text-converter": { component: BaseConverter, props: {"converterKind": "decimal-to-text"} },
    "digital-converter": { component: UniversalUnitConverter, props: {"preset": "digital"} },
    "disclaimer-generator": { component: LegalTemplateGenerator, props: {} },
    "discount-calculator": { component: BuiltInCalculators, props: {"kind": "discount-calculator"} },
    "dns-records-checker": { component: DnsLookupTool, props: {} },
    "domain-age-checker": { component: BuiltInSafeHttp, props: {"toolId": "domain-age-checker"} },
    "domain-to-ip-converter": { component: DomainToIPTool, props: {} },
    "douyin-video-downloader": { component: DouyinDownloader, props: {} },
    "downloaders": { component: AllDownloaders, props: {} },
    "each-converter": { component: UniversalUnitConverter, props: {"preset": "dimensionless"} },
    "energy-converter": { component: UniversalUnitConverter, props: {"preset": "energy"} },
    "espn-video-downloader": { component: EspnDownloader, props: {} },
    "exam-tools": { component: ExamPillar, props: {} },
    "excuse-generator": { component: TextGeneratorTool, props: {} },
    "exif-reader": { component: ExifReaderTool, props: {} },
    "facebook-id-finder": { component: BuiltInSafeHttp, props: {"toolId": "facebook-id-finder"} },
    "facebook-story-downloader": { component: FacebookStoryDownloader, props: {} },
    "facebook-video-downloader": { component: FacebookDownloader, props: {} },
    "fake-chat-generator": { component: FakeChatGeneratorTool, props: {} },
    "faq-schema-generator": { component: FaqSchemaGenerator, props: {} },
    "favicon-generator": { component: FaviconGeneratorTool, props: {} },
    "fb-clip-downloader": { component: FacebookDownloader, props: {} },
    "fb-video-saver": { component: FacebookDownloader, props: {} },
    "febspot-video-downloader": { component: FebspotDownloader, props: {} },
    "flickr-video-downloader": { component: FlickrDownloader, props: {} },
    "flip-image": { component: ImageResizerTool, props: {} },
    "font-generator": { component: FontGeneratorTool, props: {} },
    "form-image-size-checker": { component: FormImageSizeChecker, props: {} },
    "free-mp3-extractor": { component: TikTokAudioDownloader, props: {} },
    "frequency-converter": { component: UniversalUnitConverter, props: {"preset": "frequency"} },
    "gaana-video-downloader": { component: GaanaDownloader, props: {} },
    "get-http-headers": { component: BuiltInSafeHttp, props: {"toolId": "get-http-headers"} },
    "google-cache-checker": { component: BuiltInSafeHttp, props: {"toolId": "google-cache-checker"} },
    "google-index-checker": { component: BuiltInSafeHttp, props: {"toolId": "google-index-checker"} },
    "gst-calculator": { component: BuiltInCalculators, props: {"kind": "gst-calculator"} },
    "guitar-tuner": { component: GuitarTunerTool, props: {} },
    "hex-to-binary-converter": { component: BaseConverter, props: {"converterKind": "hex-to-binary"} },
    "hex-to-decimal-converter": { component: BaseConverter, props: {"converterKind": "hex-to-decimal"} },
    "hex-to-octal-converter": { component: BaseConverter, props: {"converterKind": "hex-to-octal"} },
    "hex-to-rgb-converter": { component: RgbHexConverter, props: {"mode": "hex-rgb"} },
    "hex-to-text-converter": { component: BaseConverter, props: {"converterKind": "hex-to-text"} },
    "hindi-typing-tool": { component: HindiTypingTool, props: {} },
    "hinglish-to-hindi": { component: KrutiDevConverter, props: {"defaultMode": "hinglish-to-hindi"} },
    "hosting-checker": { component: BuiltInSafeHttp, props: {"toolId": "hosting-checker"} },
    "htaccess-redirect-generator": { component: HtaccessGenerator, props: {} },
    "html-beautifier": { component: BuiltInMarkup, props: {"toolId": "html-beautifier"} },
    "html-decoder": { component: BuiltInMarkup, props: {"toolId": "html-decoder"} },
    "html-encoder": { component: BuiltInMarkup, props: {"toolId": "html-encoder"} },
    "html-minifier": { component: BuiltInMarkup, props: {"toolId": "html-minifier"} },
    "http-status-code-checker": { component: BuiltInSafeHttp, props: {"toolId": "http-status-code-checker"} },
    "ibps-photo-resizer": { component: ExamPhotoResizer, props: {"examName": "IBPS"} },
    "ico-to-png-converter": { component: ImageConverterTool, props: {} },
    "icon-generator": { component: FaviconGeneratorTool, props: {} },
    "ifunny-video-downloader": { component: IfunnyDownloader, props: {} },
    "ig-highlights-saver": { component: InstagramStoryDownloader, props: {} },
    "ig-reels-downloader-hd": { component: InstagramReelDownloader, props: {} },
    "illuminance-converter": { component: UniversalUnitConverter, props: {"preset": "illuminance"} },
    "image-compressor": { component: ImageCompressorTool, props: {} },
    "image-converter": { component: ImageConverterTool, props: {} },
    "image-cropper": { component: ImageResizerTool, props: {} },
    "image-dpi-converter": { component: ResizeImageCm, props: {"defaultUnit": "inch", "defaultDpi": "300"} },
    "image-editor": { component: ImageResizerTool, props: {} },
    "image-enlarger": { component: ImageResizerTool, props: {} },
    "image-resizer": { component: ImageResizerTool, props: {} },
    "image-to-base64-converter": { component: ImageToBase64Tool, props: {} },
    "image-to-pdf": { component: ImageToPDFTool, props: {} },
    "image-tools": { component: ImagePillar, props: {} },
    "imdb-video-downloader": { component: ImdbDownloader, props: {} },
    "imgur-video-downloader": { component: ImgurDownloader, props: {} },
    "indexnow": { component: BuiltInSafeHttp, props: {"toolId": "indexnow"} },
    "insta-reels-saver": { component: InstagramReelDownloader, props: {} },
    "instagram-downloader": { component: InstagramDownloader, props: {} },
    "instagram-image-downloader": { component: InstagramDPDownloader, props: {} },
    "instagram-reel-downloader": { component: InstagramReelDownloader, props: {} },
    "instagram-story-downloader": { component: InstagramStoryDownloader, props: {} },
    "instagram-videos-downloader": { component: InstagramDownloader, props: {} },
    "internet-speed-test": { component: InternetSpeedTestTool, props: {} },
    "ip-address-lookup": { component: IPLocationFinderTool, props: {} },
    "izlesene-video-downloader": { component: IzleseneDownloader, props: {} },
    "javascript-beautifier": { component: BuiltInMarkup, props: {"toolId": "javascript-beautifier"} },
    "javascript-deobfuscator": { component: BuiltInMarkup, props: {"toolId": "javascript-deobfuscator"} },
    "javascript-minifier": { component: BuiltInMarkup, props: {"toolId": "javascript-minifier"} },
    "javascript-obfuscator": { component: BuiltInMarkup, props: {"toolId": "javascript-obfuscator"} },
    "jee-photo-resizer": { component: ExamPhotoResizer, props: {"examName": "JEE"} },
    "jpg-converter": { component: ImageConverterTool, props: {} },
    "jpg-to-bmp-converter": { component: ImageConverterTool, props: {} },
    "jpg-to-gif-converter": { component: ImageConverterTool, props: {} },
    "jpg-to-ico-converter": { component: ImageConverterTool, props: {} },
    "jpg-to-pdf-exam-forms": { component: JpgToPdfExam, props: {} },
    "jpg-to-png-converter": { component: ImageConverterTool, props: {} },
    "jpg-to-webp-converter": { component: ImageConverterTool, props: {} },
    "json-editor": { component: JsonFormatterTool, props: {} },
    "json-formatter": { component: JSONFormatterTool, props: {} },
    "json-minify": { component: JSONMinifierTool, props: {} },
    "json-to-csv-converter": { component: BuiltInSerialization, props: {"toolId": "json-to-csv-converter"} },
    "json-to-json-schema": { component: JSONToSchemaTool, props: {} },
    "json-to-text-converter": { component: BuiltInSerialization, props: {"toolId": "json-to-text-converter"} },
    "json-to-tsv-converter": { component: BuiltInSerialization, props: {"toolId": "json-to-tsv-converter"} },
    "json-to-xml-converter": { component: BuiltInSerialization, props: {"toolId": "json-to-xml-converter"} },
    "json-validator": { component: JsonFormatterTool, props: {} },
    "json-viewer": { component: JsonFormatterTool, props: {} },
    "keyword-density-checker": { component: KeywordTool, props: {} },
    "keyword-research-tool": { component: KeywordTool, props: {} },
    "keywords-suggestion-tool": { component: KeywordTool, props: {} },
    "kickstarter-video-downloader": { component: KickstarterDownloader, props: {} },
    "kruti-dev-to-unicode": { component: KrutiDevConverter, props: {} },
    "kwai-video-downloader": { component: KwaiDownloader, props: {} },
    "leave-application-generator": { component: LeaveLetterGenerator, props: {} },
    "length-converter": { component: UniversalUnitConverter, props: {"preset": "length"} },
    "likee-video-downloader": { component: LikeeDownloader, props: {} },
    "line-sorter": { component: LineSorterTool, props: {} },
    "linkedin-video-downloader": { component: LinkedinDownloader, props: {} },
    "loan-calculator": { component: BuiltInCalculators, props: {"kind": "loan-calculator"} },
    "logo-generator": { component: LogoGeneratorTool, props: {} },
    "lorem-ipsum": { component: LoremIpsumGeneratorTool, props: {} },
    "m3u8-downloader": { component: M3u8Downloader, props: {} },
    "margin-calculator": { component: BuiltInCalculators, props: {"kind": "margin-calculator"} },
    "markdown-to-text": { component: MarkdownToText, props: {} },
    "mashable-video-downloader": { component: MashableDownloader, props: {} },
    "md5-generator": { component: HashGeneratorTool, props: {} },
    "meta-tag-generator": { component: MetaTagGenerator, props: {} },
    "mixcloud-video-downloader": { component: MixcloudDownloader, props: {} },
    "modify-mp3-file": { component: TikTokMP3Converter, props: {} },
    "mp3-from-tiktok": { component: TikTokAudioDownloader, props: {} },
    "mp4-to-mp3": { component: TikTokMP3Converter, props: {} },
    "mxtakatak-video-downloader": { component: MxTakaTakDownloader, props: {} },
    "neet-photo-resizer": { component: ExamPhotoResizer, props: {"examName": "NEET"} },
    "ninegag-video-downloader": { component: NinegagDownloader, props: {} },
    "number-generator": { component: NumberGeneratorTool, props: {} },
    "number-to-roman-numerals": { component: RomanNumeralTool, props: {} },
    "number-to-word-converter": { component: NumberToWordTool, props: {} },
    "octal-to-binary-converter": { component: BaseConverter, props: {"converterKind": "octal-to-binary"} },
    "octal-to-decimal-converter": { component: BaseConverter, props: {"converterKind": "octal-to-decimal"} },
    "octal-to-hex-converter": { component: BaseConverter, props: {"converterKind": "octal-to-hex"} },
    "octal-to-text-converter": { component: BaseConverter, props: {"converterKind": "octal-to-text"} },
    "odnoklassniki-video-downloader": { component: OdnoklassnikiDownloader, props: {} },
    "online-video-downloader": { component: OnlineVideoDownloader, props: {} },
    "open-graph-checker": { component: BuiltInSafeHttp, props: {"toolId": "open-graph-checker"} },
    "open-graph-generator": { component: OpenGraphGenerator, props: {} },
    "pace-converter": { component: UniversalUnitConverter, props: {"preset": "pace"} },
    "page-size-checker": { component: BuiltInSafeHttp, props: {"toolId": "page-size-checker"} },
    "paint-calculator": { component: ConstructionCalculator, props: {"defaultTab": "paint"} },
    "pan-card-photo-resizer": { component: PanCardResizer, props: {} },
    "parts-per-converter": { component: UniversalUnitConverter, props: {"preset": "dimensionless"} },
    "passport-photo-maker": { component: PassportPhotoMaker, props: {} },
    "password-generator": { component: PasswordGeneratorTool, props: {} },
    "paypal-fee-calculator": { component: BuiltInCalculators, props: {"kind": "paypal-fee-calculator"} },
    "pdf-compressor-under-200kb": { component: PdfCompressor200kb, props: {} },
    "pdf-editor": { component: PDFEditor, props: {} },
    "pdf-grayscale": { component: PDFGrayscale, props: {} },
    "pdf-protect": { component: PDFProtect, props: {} },
    "pdf-repair": { component: PDFRepair, props: {} },
    "pdf-to-image": { component: PDFToImage, props: {} },
    "pdf-to-word": { component: PDFToWord, props: {} },
    "pdf-tools": { component: PDFPillar, props: {} },
    "pdf-unlocker": { component: PDFUnlock, props: {} },
    "percentage-calculator": { component: BuiltInCalculators, props: {"kind": "percentage-calculator"} },
    "periscope-video-downloader": { component: PeriscopeDownloader, props: {} },
    "photo-compressor-under-50kb": { component: PhotoCompressor50kb, props: {} },
    "photo-enhancer": { component: PhotoEnhancerTool, props: {} },
    "photo-name-date-editor": { component: PhotoNameDateEditor, props: {} },
    "pinterest-clip-saver": { component: PinterestDownloader, props: {} },
    "pinterest-gif-downloader": { component: PinterestDownloader, props: {} },
    "pinterest-image-downloader": { component: PinterestDownloader, props: {} },
    "pinterest-video-downloader": { component: PinterestDownloader, props: {} },
    "png-to-bmp-converter": { component: ImageConverterTool, props: {} },
    "png-to-gif-converter": { component: ImageConverterTool, props: {} },
    "png-to-ico-converter": { component: ImageConverterTool, props: {} },
    "png-to-jpg-converter": { component: ImageConverterTool, props: {} },
    "png-to-webp-converter": { component: ImageConverterTool, props: {} },
    "poetry-generator": { component: TextGeneratorTool, props: {} },
    "power-converter": { component: UniversalUnitConverter, props: {"preset": "power"} },
    "pressure-converter": { component: UniversalUnitConverter, props: {"preset": "pressure"} },
    "privacy-policy-generator": { component: LegalTemplateGenerator, props: {} },
    "probability-calculator": { component: BuiltInCalculators, props: {"kind": "probability-calculator"} },
    "puhutv-video-downloader": { component: PuhutvDownloader, props: {} },
    "qr-code-decoder": { component: QrGeneratorPremium, props: {} },
    "qr-code-generator": { component: QrGeneratorPremium, props: {} },
    "qr-code-reader": { component: QrReaderPremium, props: {} },
    "railway-exam-photo-resizer": { component: ExamPhotoResizer, props: {"examName": "Railway"} },
    "random-uuid-generator": { component: UuidGeneratorTool, props: {} },
    "random-word-generator": { component: LineSorterTool, props: {} },
    "reactive-energy-converter": { component: UniversalUnitConverter, props: {"preset": "reactivePower"} },
    "reactive-power-converter": { component: UniversalUnitConverter, props: {"preset": "reactivePower"} },
    "reddit-downloader": { component: RedditDownloader, props: {"toolName": "Reddit Video Downloader"} },
    "reddit-media-saver": { component: RedditDownloader, props: {} },
    "reddit-video-downloader": { component: RedditDownloader, props: {} },
    "redirect-checker": { component: BuiltInSafeHttp, props: {"toolId": "redirect-checker"} },
    "remove-line-breaks": { component: RemoveLineBreaksTool, props: {} },
    "rent-receipt-generator": { component: RentReceiptGenerator, props: {} },
    "required-marks-calculator": { component: AcademicGradesCalculator, props: {"defaultTab": "req-marks"} },
    "resignation-letter-generator": { component: ResignationLetterGenerator, props: {} },
    "resize-image-in-cm": { component: ResizeImageCm, props: {} },
    "resize-image-in-mm": { component: ResizeImageCm, props: {"defaultUnit": "mm"} },
    "resize-image-in-pixels": { component: ResizeImageCm, props: {"defaultUnit": "px"} },
    "rgb-to-hex-converter": { component: RgbHexConverter, props: {"mode": "rgb-hex"} },
    "roman-numerals-to-number": { component: RomanNumeralTool, props: {} },
    "rotate-image": { component: ImageResizerTool, props: {} },
    "rumble-video-downloader": { component: RumbleDownloader, props: {} },
    "sales-tax-calculator": { component: BuiltInCalculators, props: {"kind": "sales-tax-calculator"} },
    "save-fb-stories-anonymous": { component: FacebookStoryDownloader, props: {} },
    "save-ig-content": { component: InstagramDownloader, props: {} },
    "save-insta-pfp": { component: InstagramDPDownloader, props: {} },
    "save-instagram-clips": { component: InstagramReelDownloader, props: {} },
    "save-reels-video": { component: InstagramReelDownloader, props: {} },
    "save-snaps-to-gallery": { component: SnapchatDownloader, props: {} },
    "save-tiktok-mp4": { component: TikTokDownloader, props: {} },
    "save-twitter-videos": { component: TwitterDownloader, props: {} },
    "screen-resolution-simulator": { component: ScreenResolutionTool, props: {} },
    "seo-audit-tool": { component: BuiltInSafeHttp, props: {"toolId": "seo-audit-tool"} },
    "seotoolkit": { component: SeoToolkit, props: {} },
    "server-status-checker": { component: BuiltInSafeHttp, props: {"toolId": "server-status-checker"} },
    "sgpa-calculator": { component: AcademicGradesCalculator, props: {"defaultTab": "sgpa"} },
    "sharechat-video-downloader": { component: SharechatDownloader, props: {} },
    "shrink-mp3-size": { component: TikTokMP3Converter, props: {} },
    "signature-resizer-under-20kb": { component: SignatureResizer, props: {} },
    "simple-invoice-generator": { component: InvoiceGenerator, props: {} },
    "sitemap-generator": { component: BuiltInSafeHttp, props: {"toolId": "sitemap-generator"} },
    "sitemap-url-downloader": { component: SitemapUrlDownloader, props: {} },
    "snapchat-saver-online": { component: SnapchatDownloader, props: {} },
    "snapchat-video-downloader": { component: SnapchatDownloader, props: {} },
    "soundcloud-video-downloader": { component: SoundcloudDownloader, props: {} },
    "speed-converter": { component: UniversalUnitConverter, props: {"preset": "speed"} },
    "ssc-photo-resizer": { component: ExamPhotoResizer, props: {"examName": "SSC"} },
    "streamable-video-downloader": { component: StreamableDownloader, props: {} },
    "ted-video-downloader": { component: TedDownloader, props: {} },
    "telegram-video-downloader": { component: TelegramDownloader, props: {} },
    "temperature-converter": { component: UniversalUnitConverter, props: {"preset": "temperature"} },
    "terms-and-condition-generator": { component: LegalTemplateGenerator, props: {} },
    "text-compare": { component: TextCompareTool, props: {} },
    "text-repeater": { component: TextRepeaterTool, props: {} },
    "text-sorter": { component: LineSorterTool, props: {} },
    "text-to-ascii-converter": { component: BaseConverter, props: {"converterKind": "text-to-ascii"} },
    "text-to-binary-converter": { component: BaseConverter, props: {"converterKind": "text-to-binary"} },
    "text-to-decimal-converter": { component: BaseConverter, props: {"converterKind": "text-to-decimal"} },
    "text-to-hashtags-converter": { component: TagsFromTextTool, props: {} },
    "text-to-hex-converter": { component: BaseConverter, props: {"converterKind": "text-to-hex"} },
    "text-to-octal-converter": { component: BaseConverter, props: {"converterKind": "text-to-octal"} },
    "text-to-slug-converter": { component: SlugTool, props: {} },
    "text-to-speech": { component: TextToSpeechTool, props: {} },
    "text-to-tags-converter": { component: TagsFromTextTool, props: {} },
    "threads-video-downloader": { component: ThreadsDownloader, props: {} },
    "tiktok-downloader": { component: TikTokDownloader, props: {} },
    "tiktok-saver-no-watermark": { component: TikTokDownloader, props: {} },
    "tiktok-videos-downloader": { component: TikTokDownloader, props: {} },
    "tile-calculator": { component: ConstructionCalculator, props: {"defaultTab": "tile"} },
    "time-converter": { component: UniversalUnitConverter, props: {"preset": "time"} },
    "torque-converter": { component: UniversalUnitConverter, props: {"preset": "torque"} },
    "tsv-to-json-converter": { component: BuiltInSerialization, props: {"toolId": "tsv-to-json-converter"} },
    "tumblr-video-downloader": { component: TumblrVideoDownloader, props: {} },
    "twitch-video-downloader": { component: TwitchDownloader, props: {} },
    "twitter-card-generator": { component: TwitterCardGenerator, props: {} },
    "twitter-video-downloader": { component: TwitterDownloader, props: {} },
    "unicode-to-kruti-dev": { component: KrutiDevConverter, props: {"defaultMode": "uni-to-kruti"} },
    "universal-video-downloader": { component: UniversalVideoDownloader, props: {} },
    "upsc-photo-resizer": { component: ExamPhotoResizer, props: {"examName": "UPSC"} },
    "url-decode": { component: UrlCodecTool, props: {"mode": "dec"} },
    "url-encode": { component: UrlCodecTool, props: {"mode": "enc"} },
    "url-opener": { component: UrlParserTool, props: {} },
    "url-parser": { component: UrlParserTool, props: {} },
    "url-rewriting-tool": { component: UrlParserTool, props: {} },
    "url-shortener": { component: URLShortenerTool, props: {} },
    "utm-builder": { component: UTMBuilderTool, props: {} },
    "video-converter": { component: VideoConverterTool, props: {} },
    "video-editor": { component: VideoEditorTool, props: {} },
    "vimeo-video-downloader": { component: VimeoDownloader, props: {} },
    "visual-sitemap": { component: VisualSitemapTool, props: {} },
    "vkontakte-video-downloader": { component: VkontakteDownloader, props: {} },
    "voltage-converter": { component: UniversalUnitConverter, props: {"preset": "voltage"} },
    "volume-converter": { component: UniversalUnitConverter, props: {"preset": "volume"} },
    "volumetric-flow-rate-converter": { component: UniversalUnitConverter, props: {"preset": "flowVolume"} },
    "webp-to-jpg-converter": { component: ImageConverterTool, props: {} },
    "webp-to-png-converter": { component: ImageConverterTool, props: {} },
    "website-ranking-checker": { component: WebsiteRankingCheckerTool, props: {} },
    "weight-converter": { component: UniversalUnitConverter, props: {"preset": "mass"} },
    "what-is-my-browser": { component: BrowserDetectTool, props: {} },
    "what-is-my-ip-address": { component: PublicIpTool, props: {} },
    "what-is-my-screen-resolution": { component: ScreenResolutionTool, props: {} },
    "what-is-my-user-agent": { component: UserAgentTool, props: {} },
    "whois-domain-lookup": { component: BuiltInSafeHttp, props: {"toolId": "whois-domain-lookup"} },
    "word-counter": { component: WordCounterTool, props: {} },
    "word-to-number-converter": { component: WordToNumberTool, props: {} },
    "word-to-pdf": { component: WordToPDF, props: {} },
    "wordpress-theme-detector": { component: BuiltInSafeHttp, props: {"toolId": "wordpress-theme-detector"} },
    "xml-to-json-converter": { component: BuiltInSerialization, props: {"toolId": "xml-to-json-converter"} },
    "youtube-channel-age-checker": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-channel-banner-downloader": { component: YouTubeDownloader, props: {} },
    "youtube-channel-finder": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-channel-id-extractor": { component: YouTubeDownloader, props: {} },
    "youtube-channel-logo-downloader": { component: YouTubeDownloader, props: {} },
    "youtube-channel-statistics": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-comment-picker": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-description-extractor": { component: YouTubeDownloader, props: {} },
    "youtube-description-generator": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-downloader": { component: YouTubeDownloader, props: {} },
    "youtube-hashtag-extractor": { component: YouTubeDownloader, props: {} },
    "youtube-hashtag-generator": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-money-calculator": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-region-restriction-checker": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-shorts-downloader": { component: YouTubeShortsDownloader, props: {} },
    "youtube-subscribe-link-generator": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-tag-extractor": { component: YouTubeDownloader, props: {} },
    "youtube-tag-generator": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-thumbnail-downloader": { component: YouTubeDownloader, props: {} },
    "youtube-timestamp-link-generator": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-title-extractor": { component: YouTubeDownloader, props: {} },
    "youtube-title-generator": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-title-length-checker": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-video-count-checker": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-video-downloader": { component: YouTubeDownloader, props: {} },
    "youtube-video-statistics": { component: YouTubeChannelIDFinderTool, props: {} },
    "youtube-views-ratio-calculator": { component: YouTubeChannelIDFinderTool, props: {} },
};

interface IntentToolDispatcherProps {
    toolId: string;
}

export default function IntentToolDispatcher({ toolId }: IntentToolDispatcherProps) {
    const entry = INTENT_TOOL_REGISTRY[toolId];
    if (!entry) return <p className="p-4 text-center text-red-500">Tool component not found.</p>;
    
    const Component = entry.component;
    return <Component {...entry.props} />;
}
