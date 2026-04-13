
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";


export const metadata = {
  title: "Free DNS Records Checker Online - No Signup | 30tools",
  description: "Free dns records checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "dns records checker, free online tool, no signup, utilities, dns records checker online, 30tools",
  alternates: {
    canonical: "https://30tools.com/dns-records-checker",
  },
  openGraph: {
    title: "Free DNS Records Checker Online - No Signup | 30tools",
    description: "Free dns records checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/dns-records-checker",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free DNS Records Checker Online - No Signup | 30tools",
    description: "Free dns records checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "dns-records-checker",
  "name": "DNS Records Checker",
  "description": "Free dns records checker tool to process your data instantly with privacy-friendly browser-based workflows.",
  "route": "/dns-records-checker",
  "extraSlugs": [
    "free-dns-records-checker-online",
    "dns-records-checker-tool"
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
    "name": "DNS Records Checker",
    "url": "/dns-records-checker"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"DNS Records Checker","description":"Free dns records checker tool to process your data instantly with privacy-friendly browser-based workflows.","url":"https://30tools.com/dns-records-checker","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <ToolPlaceholderPage toolId="dns-records-checker" />
      </ToolLayout>
    </>
  );
}
