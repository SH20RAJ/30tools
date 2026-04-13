
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";


export const metadata = {
  title: "Free Title Tag Preview Online - No Signup | 30tools",
  description: "Free Title Tag Preview online. Title Tag Preview allows you to download YouTube content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "title tag preview, free online tool, no signup, youtube, title tag preview online, 30tools",
  alternates: {
    canonical: "https://30tools.com/title-tag-preview",
  },
  openGraph: {
    title: "Free Title Tag Preview Online - No Signup | 30tools",
    description: "Free Title Tag Preview online. Title Tag Preview allows you to download YouTube content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/title-tag-preview",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Title Tag Preview Online - No Signup | 30tools",
    description: "Free Title Tag Preview online. Title Tag Preview allows you to download YouTube content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "title-tag-preview",
  "name": "Title Tag Preview",
  "description": "Free Title Tag Preview online. Title Tag Preview allows you to download YouTube content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  "route": "/title-tag-preview",
  "extraSlugs": [
    "title-tag-preview"
  ],
  "category": "youtube"
};
  const breadcrumbs = [
  {
    "name": "Youtube Tools",
    "url": "/youtube-tools"
  },
  {
    "name": "Title Tag Preview",
    "url": "/title-tag-preview"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Title Tag Preview","description":"Free Title Tag Preview online. Title Tag Preview allows you to download YouTube content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.","url":"https://30tools.com/title-tag-preview","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <ToolPlaceholderPage toolId={tool.id} />
      </ToolLayout>
    </>
  );
}
