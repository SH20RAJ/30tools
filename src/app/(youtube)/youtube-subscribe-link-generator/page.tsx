
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";


export const metadata = {
  title: "Free YouTube Subscribe Link Generator Online - No Signup | 30tools",
  description: "Free youtube subscribe link generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "youtube subscribe link generator, free online tool, no signup, youtube, youtube subscribe link generator online, 30tools",
  alternates: {
    canonical: "https://30tools.com/youtube-subscribe-link-generator",
  },
  openGraph: {
    title: "Free YouTube Subscribe Link Generator Online - No Signup | 30tools",
    description: "Free youtube subscribe link generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/youtube-subscribe-link-generator",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Subscribe Link Generator Online - No Signup | 30tools",
    description: "Free youtube subscribe link generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "youtube-subscribe-link-generator",
  "name": "YouTube Subscribe Link Generator",
  "description": "Free youtube subscribe link generator tool to process your data instantly with privacy-friendly browser-based workflows.",
  "route": "/youtube-subscribe-link-generator",
  "extraSlugs": [
    "create-paypal-me-link",
    "create-short-link",
    "create-wa-link",
    "custom-payment-link-generator",
    "direct-paypal-link",
    "free-youtube-subscribe-link-generator-online",
    "link-scraper-online",
    "link-shortener-custom",
    "paypal-donation-link",
    "paypal-link-generator",
    "reduce-link-length",
    "shorten-link-free",
    "wa-me-link-generator",
    "website-link-validator",
    "whatsapp-chat-link",
    "whatsapp-direct-message-link",
    "whatsapp-link-generator",
    "youtube-subscribe-link-generator-tool"
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
    "name": "YouTube Subscribe Link Generator",
    "url": "/youtube-subscribe-link-generator"
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
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"YouTube Subscribe Link Generator","description":"Free youtube subscribe link generator tool to process your data instantly with privacy-friendly browser-based workflows.","url":"https://30tools.com/youtube-subscribe-link-generator","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <ToolPlaceholderPage toolId="youtube-subscribe-link-generator" />
      </ToolLayout>
    </>
  );
}
