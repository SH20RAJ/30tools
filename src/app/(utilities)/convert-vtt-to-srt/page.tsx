
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free Convert VTT to SRT Online - No Signup | 30tools",
  description: "Free convert vtt to srt tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "convert vtt to srt, free online tool, no signup, utilities, convert vtt to srt online, 30tools",
  alternates: {
    canonical: "https://30tools.com/convert-vtt-to-srt",
  },
  openGraph: {
    title: "Free Convert VTT to SRT Online - No Signup | 30tools",
    description: "Free convert vtt to srt tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/convert-vtt-to-srt",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Convert VTT to SRT Online - No Signup | 30tools",
    description: "Free convert vtt to srt tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "convert-vtt-to-srt",
  "name": "Convert VTT to SRT",
  "description": "Free convert vtt to srt tool to process your data instantly with privacy-friendly browser-based workflows.",
  "route": "/convert-vtt-to-srt",
  "extraSlugs": [
    "free-convert-vtt-to-srt-online",
    "convert-vtt-to-srt-tool"
  ],
  "popular": false,
  "category": "utilities"
};
  const breadcrumbs = [
  {
    "name": "Utilities Tools",
    "url": "/utilities-tools"
  },
  {
    "name": "Convert VTT to SRT",
    "url": "/convert-vtt-to-srt"
  }
];
  const relatedTools = [
  {
    "id": "adsense-calculator",
    "name": "Adsense Calculator",
    "description": "Free adsense calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
    "route": "/adsense-calculator",
    "extraSlugs": [
      "free-adsense-calculator-online",
      "adsense-calculator-tool"
    ],
    "popular": false,
    "category": "utilities"
  },
  {
    "id": "age-calculator",
    "name": "Age Calculator",
    "description": "Free age calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
    "route": "/age-calculator",
    "extraSlugs": [
      "free-age-calculator-online",
      "age-calculator-tool"
    ],
    "popular": false,
    "category": "utilities"
  },
  {
    "id": "angle-converter",
    "name": "Angle Converter",
    "description": "Free angle converter tool to process your data instantly with privacy-friendly browser-based workflows.",
    "route": "/angle-converter",
    "extraSlugs": [
      "free-angle-converter-online",
      "angle-converter-tool"
    ],
    "popular": false,
    "category": "utilities"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Convert VTT to SRT","description":"Free convert vtt to srt tool to process your data instantly with privacy-friendly browser-based workflows.","url":"https://30tools.com/convert-vtt-to-srt","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <PremiumToolPage toolId="convert-vtt-to-srt" />
      </ToolLayout>
    </>
  );
}
