
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free YouTube Channel Age Checker Online - No Signup | 30tools",
  description: "Free youtube channel age checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "youtube channel age checker, free online tool, no signup, youtube, youtube channel age checker online, 30tools",
  alternates: {
    canonical: "https://30tools.com/youtube-channel-age-checker",
  },
  openGraph: {
    title: "Free YouTube Channel Age Checker Online - No Signup | 30tools",
    description: "Free youtube channel age checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/youtube-channel-age-checker",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Channel Age Checker Online - No Signup | 30tools",
    description: "Free youtube channel age checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "youtube-channel-age-checker",
  "name": "YouTube Channel Age Checker",
  "description": "Free youtube channel age checker tool to process your data instantly with privacy-friendly browser-based workflows.",
  "route": "/youtube-channel-age-checker",
  "extraSlugs": [
    "compromised-email-checker",
    "diff-checker-online",
    "email-breach-checker",
    "free-youtube-channel-age-checker-online",
    "html-checker",
    "html-error-checker",
    "html-syntax-checker",
    "https-checker",
    "load-time-checker",
    "mobile-seo-checker",
    "plagiarism-checker-seo",
    "readability-score-checker",
    "responsive-design-checker",
    "schema-checker-online",
    "search-volume-checker",
    "seo-competitor-checker",
    "seo-meta-checker",
    "seo-score-checker",
    "ssl-checker",
    "temp-email-checker",
    "whatsapp-checker",
    "youtube-channel-age-checker-tool"
  ],
  "popular": false,
  "category": "youtube"
};
  const breadcrumbs = [
  {
    "name": "Youtube Tools",
    "url": "/youtube-tools"
  },
  {
    "name": "YouTube Channel Age Checker",
    "url": "/youtube-channel-age-checker"
  }
];
  const relatedTools = [
  {
    "id": "youtube-script-generator",
    "name": "AI YouTube Script Generator",
    "description": "Generate engaging YouTube video scripts with AI assistance",
    "route": "/youtube-script-generator",
    "extraSlugs": [
      "ai-youtube-script-writer-for-gaming",
      "download-youtube-transcript",
      "download-youtube-videos-1080p",
      "extract-youtube-subtitles",
      "save-youtube-captions",
      "youtube-analytics",
      "youtube-cover-maker",
      "youtube-gif-maker",
      "youtube-idea-generator",
      "youtube-thumbnail-generator",
      "youtube-trends",
      "youtube-video-script-maker-free"
    ],
    "popular": false,
    "category": "youtube"
  },
  {
    "id": "youtube-video-summarizer",
    "name": "AI YouTube Video Summarizer",
    "description": "Get instant AI-powered summaries, key points, and insights from any YouTube video",
    "route": "/youtube-video-summarizer",
    "extraSlugs": [
      "summarize-youtube-video-chatgpt-free",
      "youtube-video-to-text-summary"
    ],
    "popular": true,
    "category": "youtube"
  },
  {
    "id": "youtube-channel-banner-downloader",
    "name": "YouTube Channel Banner Downloader",
    "description": "Free youtube channel banner downloader tool to process your data instantly with privacy-friendly browser-based workflows.",
    "route": "/youtube-channel-banner-downloader",
    "extraSlugs": [
      "fast-youtube-downloader",
      "free-youtube-channel-banner-downloader-online",
      "secure-youtube-downloader",
      "youtube-caption-downloader",
      "youtube-channel-banner-downloader-tool",
      "youtube-downloader-4k",
      "youtube-downloader-android",
      "youtube-downloader-free",
      "youtube-downloader-iphone",
      "youtube-pack-downloader",
      "youtube-srt-downloader",
      "youtube-subtitle-downloader",
      "youtube-subtitles-downloader",
      "youtube-transcript-downloader"
    ],
    "popular": false,
    "category": "youtube"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"YouTube Channel Age Checker","description":"Free youtube channel age checker tool to process your data instantly with privacy-friendly browser-based workflows.","url":"https://30tools.com/youtube-channel-age-checker","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <PremiumToolPage toolId="youtube-channel-age-checker" />
      </ToolLayout>
    </>
  );
}
