
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";


export const metadata = {
  title: "Free Power Converter Online - No Signup | 30tools",
  description: "Free power converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "power converter, free online tool, no signup, utilities, power converter online, 30tools",
  alternates: {
    canonical: "https://30tools.com/power-converter",
  },
  openGraph: {
    title: "Free Power Converter Online - No Signup | 30tools",
    description: "Free power converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/power-converter",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Power Converter Online - No Signup | 30tools",
    description: "Free power converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "power-converter",
  "name": "Power Converter",
  "description": "Free power converter tool to process your data instantly with privacy-friendly browser-based workflows.",
  "route": "/power-converter",
  "extraSlugs": [
    "free-power-converter-online",
    "power-converter-tool"
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
    "name": "Power Converter",
    "url": "/power-converter"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Power Converter","description":"Free power converter tool to process your data instantly with privacy-friendly browser-based workflows.","url":"https://30tools.com/power-converter","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <ToolPlaceholderPage toolId="power-converter" />
      </ToolLayout>
    </>
  );
}
