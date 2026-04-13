
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";


export const metadata = {
  title: "Free Base64 Encode Online - No Signup | 30tools",
  description: "Free base64 encode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "base64 encode, free online tool, no signup, utilities, base64 encode online, 30tools",
  alternates: {
    canonical: "https://30tools.com/base64-encode",
  },
  openGraph: {
    title: "Free Base64 Encode Online - No Signup | 30tools",
    description: "Free base64 encode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/base64-encode",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Base64 Encode Online - No Signup | 30tools",
    description: "Free base64 encode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "base64-encode",
  "name": "Base64 Encode",
  "description": "Free base64 encode tool to process your data instantly with privacy-friendly browser-based workflows.",
  "route": "/base64-encode",
  "extraSlugs": [
    "base64-encode-tool",
    "encode-base64-online",
    "free-base64-encode-online"
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
    "name": "Base64 Encode",
    "url": "/base64-encode"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Base64 Encode","description":"Free base64 encode tool to process your data instantly with privacy-friendly browser-based workflows.","url":"https://30tools.com/base64-encode","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <ToolPlaceholderPage toolId="base64-encode" />
      </ToolLayout>
    </>
  );
}
