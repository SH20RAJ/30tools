
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free HEX to RGB Converter Online - No Signup | 30tools",
  description: "Free hex to rgb converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "hex to rgb converter, free online tool, no signup, utilities, hex to rgb converter online, 30tools",
  alternates: {
    canonical: "https://30tools.com/hex-to-rgb-converter",
  },
  openGraph: {
    title: "Free HEX to RGB Converter Online - No Signup | 30tools",
    description: "Free hex to rgb converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/hex-to-rgb-converter",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HEX to RGB Converter Online - No Signup | 30tools",
    description: "Free hex to rgb converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "hex-to-rgb-converter",
  "name": "HEX to RGB Converter",
  "description": "Free hex to rgb converter tool to process your data instantly with privacy-friendly browser-based workflows.",
  "route": "/hex-to-rgb-converter",
  "extraSlugs": [
    "convert-hex-to-rgb",
    "free-hex-to-rgb-converter-online",
    "hex-rgb-hsl-tool",
    "hex-to-rgb-converter-tool",
    "rgb-to-hsl-converter"
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
    "name": "HEX to RGB Converter",
    "url": "/hex-to-rgb-converter"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"HEX to RGB Converter","description":"Free hex to rgb converter tool to process your data instantly with privacy-friendly browser-based workflows.","url":"https://30tools.com/hex-to-rgb-converter","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <PremiumToolPage toolId="hex-to-rgb-converter" />
      </ToolLayout>
    </>
  );
}
