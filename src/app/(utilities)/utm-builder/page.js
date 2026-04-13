
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UTMBuilderTool from "@/components/tools/utilities/UTMBuilderTool"

export const metadata = {
  title: "Free UTM Builder Online - No Signup | 30tools",
  description: "Easily build campaign URLs with UTM parameters for Google Analytics tracking. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "utm builder, free online tool, no signup, utilities, utm builder online, 30tools",
  alternates: {
    canonical: "https://30tools.com/utm-builder",
  },
  openGraph: {
    title: "Free UTM Builder Online - No Signup | 30tools",
    description: "Easily build campaign URLs with UTM parameters for Google Analytics tracking. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/utm-builder",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free UTM Builder Online - No Signup | 30tools",
    description: "Easily build campaign URLs with UTM parameters for Google Analytics tracking. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "utm-builder",
  "name": "UTM Builder",
  "description": "Easily build campaign URLs with UTM parameters for Google Analytics tracking.",
  "route": "/utm-builder",
  "extraSlugs": [
    "utm-link-builder-for-google-analytics-4",
    "ga4-utm-generator"
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
    "name": "UTM Builder",
    "url": "/utm-builder"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"UTM Builder","description":"Easily build campaign URLs with UTM parameters for Google Analytics tracking.","url":"https://30tools.com/utm-builder","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <UTMBuilderTool />
      </ToolLayout>
    </>
  );
}
