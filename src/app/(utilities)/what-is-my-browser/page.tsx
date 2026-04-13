
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free What Is My Browser Online - No Signup | 30tools",
  description: "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "what is my browser, free online tool, no signup, utilities, what is my browser online, 30tools",
  alternates: {
    canonical: "https://30tools.com/what-is-my-browser",
  },
  openGraph: {
    title: "Free What Is My Browser Online - No Signup | 30tools",
    description: "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/what-is-my-browser",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free What Is My Browser Online - No Signup | 30tools",
    description: "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "what-is-my-browser",
  "name": "What Is My Browser",
  "description": "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows.",
  "route": "/what-is-my-browser",
  "extraSlugs": [
    "free-what-is-my-browser-online",
    "how-strong-is-my-password",
    "is-on-whatsapp",
    "record-browser-tab",
    "what-is-my-browser-tool"
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
    "name": "What Is My Browser",
    "url": "/what-is-my-browser"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"What Is My Browser","description":"Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows.","url":"https://30tools.com/what-is-my-browser","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <PremiumToolPage toolId="what-is-my-browser" />
      </ToolLayout>
    </>
  );
}
