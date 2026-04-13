
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";


export const metadata = {
  title: "Free Human Readable Time Online - No Signup | 30tools",
  description: "Free Human Readable Time online. Human Readable Time allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "human readable time, free online tool, no signup, utilities, human readable time online, 30tools",
  alternates: {
    canonical: "https://30tools.com/human-readable-time",
  },
  openGraph: {
    title: "Free Human Readable Time Online - No Signup | 30tools",
    description: "Free Human Readable Time online. Human Readable Time allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/human-readable-time",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Human Readable Time Online - No Signup | 30tools",
    description: "Free Human Readable Time online. Human Readable Time allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "human-readable-time",
  "name": "Human Readable Time",
  "description": "Free Human Readable Time online. Human Readable Time allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  "route": "/human-readable-time",
  "extraSlugs": [
    "human-readable-time"
  ],
  "category": "utilities"
};
  const breadcrumbs = [
  {
    "name": "Utilities Tools",
    "url": "/utilities-tools"
  },
  {
    "name": "Human Readable Time",
    "url": "/human-readable-time"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Human Readable Time","description":"Free Human Readable Time online. Human Readable Time allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.","url":"https://30tools.com/human-readable-time","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
