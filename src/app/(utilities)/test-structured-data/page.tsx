
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free Test Structured Data Online - No Signup | 30tools",
  description: "Free Test Structured Data online. Test Structured Data allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "test structured data, free online tool, no signup, others, test structured data online, 30tools",
  alternates: {
    canonical: "https://30tools.com/test-structured-data",
  },
  openGraph: {
    title: "Free Test Structured Data Online - No Signup | 30tools",
    description: "Free Test Structured Data online. Test Structured Data allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/test-structured-data",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Test Structured Data Online - No Signup | 30tools",
    description: "Free Test Structured Data online. Test Structured Data allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "test-structured-data",
  "name": "Test Structured Data",
  "description": "Free Test Structured Data online. Test Structured Data allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  "route": "/test-structured-data",
  "extraSlugs": [
    "google-structured-data-helper",
    "test-structured-data"
  ],
  "category": "others"
};
  const breadcrumbs = [
  {
    "name": "Others Tools",
    "url": "/others-tools"
  },
  {
    "name": "Test Structured Data",
    "url": "/test-structured-data"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Test Structured Data","description":"Free Test Structured Data online. Test Structured Data allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.","url":"https://30tools.com/test-structured-data","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
