
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free Find Copied Content Online - No Signup | 30tools",
  description: "Free Find Copied Content online. Find Copied Content allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "find copied content, free online tool, no signup, others, find copied content online, 30tools",
  alternates: {
    canonical: "https://30tools.com/find-copied-content",
  },
  openGraph: {
    title: "Free Find Copied Content Online - No Signup | 30tools",
    description: "Free Find Copied Content online. Find Copied Content allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/find-copied-content",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Find Copied Content Online - No Signup | 30tools",
    description: "Free Find Copied Content online. Find Copied Content allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "find-copied-content",
  "name": "Find Copied Content",
  "description": "Free Find Copied Content online. Find Copied Content allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  "route": "/find-copied-content",
  "extraSlugs": [
    "find-copied-content"
  ],
  "category": "others"
};
  const breadcrumbs = [
  {
    "name": "Others Tools",
    "url": "/others-tools"
  },
  {
    "name": "Find Copied Content",
    "url": "/find-copied-content"
  }
];
  const relatedTools = [
  {
    "id": "ai-video-summarizer",
    "name": "Ai Video Summarizer",
    "description": "Ai Video Summarizer - Coming Soon",
    "route": "/ai-video-summarizer",
    "extraSlugs": [],
    "popular": false,
    "category": "others"
  },
  {
    "id": "all-downloaders",
    "name": "All Downloaders",
    "description": "All Downloaders - Coming Soon",
    "route": "/all-downloaders",
    "extraSlugs": [],
    "popular": false,
    "category": "others"
  },
  {
    "id": "audio-equalizer",
    "name": "Audio Equalizer",
    "description": "Audio Equalizer - Coming Soon",
    "route": "/audio-equalizer",
    "extraSlugs": [
      "audio-tools",
      "audio-trimmer",
      "change-audio-format",
      "mp4-audio-ripper",
      "optimize-audio-files",
      "shorten-audio-clip",
      "split-audio-file"
    ],
    "popular": false,
    "category": "others"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Find Copied Content","description":"Free Find Copied Content online. Find Copied Content allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.","url":"https://30tools.com/find-copied-content","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <PremiumToolPage toolId={TOOL_ID} />
      </ToolLayout>
    </>
  );
}
