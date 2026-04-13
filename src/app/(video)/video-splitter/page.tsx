
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free Video Splitter Online - No Signup | 30tools",
  description: "Video Splitter - Coming Soon 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "video splitter, free online tool, no signup, others, video splitter online, 30tools",
  alternates: {
    canonical: "https://30tools.com/video-splitter",
  },
  openGraph: {
    title: "Free Video Splitter Online - No Signup | 30tools",
    description: "Video Splitter - Coming Soon 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/video-splitter",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Video Splitter Online - No Signup | 30tools",
    description: "Video Splitter - Coming Soon 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "video-splitter",
  "name": "Video Splitter",
  "description": "Video Splitter - Coming Soon",
  "route": "/video-splitter",
  "extraSlugs": [],
  "popular": false,
  "category": "others"
};
  const breadcrumbs = [
  {
    "name": "Others Tools",
    "url": "/others-tools"
  },
  {
    "name": "Video Splitter",
    "url": "/video-splitter"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Video Splitter","description":"Video Splitter - Coming Soon","url":"https://30tools.com/video-splitter","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <div>{/* Tool component placeholder */}</div>
      </ToolLayout>
    </>
  );
}
