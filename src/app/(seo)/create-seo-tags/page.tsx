
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";


export const metadata = {
  title: "Free Create Seo Tags Online - No Signup | 30tools",
  description: "Free Create Seo Tags online. Create Seo Tags allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "create seo tags, free online tool, no signup, seo, create seo tags online, 30tools",
  alternates: {
    canonical: "https://30tools.com/create-seo-tags",
  },
  openGraph: {
    title: "Free Create Seo Tags Online - No Signup | 30tools",
    description: "Free Create Seo Tags online. Create Seo Tags allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/create-seo-tags",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Create Seo Tags Online - No Signup | 30tools",
    description: "Free Create Seo Tags online. Create Seo Tags allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "create-seo-tags",
  "name": "Create Seo Tags",
  "description": "Free Create Seo Tags online. Create Seo Tags allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  "route": "/create-seo-tags",
  "extraSlugs": [
    "create-seo-tags"
  ],
  "category": "seo"
};
  const breadcrumbs = [
  {
    "name": "Seo Tools",
    "url": "/seo-tools"
  },
  {
    "name": "Create Seo Tags",
    "url": "/create-seo-tags"
  }
];
  const relatedTools = [
  {
    "id": "keyword-research-tool",
    "name": "Advanced Keyword Research",
    "description": "Comprehensive keyword research tool with search volume, difficulty, CPC data, and keyword suggestions. Find profitable keywords for SEO.",
    "route": "/keyword-research-tool",
    "extraSlugs": [
      "advanced-regex-tool",
      "bing-keyword-research",
      "bing-keyword-tool",
      "competitor-keyword-spy",
      "google-keyword-research",
      "keyword-counter-tool",
      "keyword-ideas-bing",
      "keyword-monitoring-tool",
      "keyword-tool-google",
      "long-tail-keyword-tool"
    ],
    "popular": true,
    "category": "seo"
  },
  {
    "id": "sitemap-generator",
    "name": "Advanced Sitemap Generator",
    "description": "Generate XML sitemaps for any website URL. Crawl websites and create comprehensive sitemaps with proper formatting and metadata.",
    "route": "/sitemap-generator",
    "extraSlugs": [
      "extract-urls-from-sitemap",
      "google-sitemap-generator",
      "xml-sitemap-builder"
    ],
    "popular": true,
    "category": "seo"
  },
  {
    "id": "broken-link-checker",
    "name": "Broken Link Checker",
    "description": "Find broken links on any website. Check for 404 errors, redirect chains, and link health across entire websites or specific pages.",
    "route": "/broken-link-checker",
    "extraSlugs": [
      "broken-link-scanner",
      "inbound-link-checker",
      "link-profile-checker"
    ],
    "popular": true,
    "category": "seo"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Create Seo Tags","description":"Free Create Seo Tags online. Create Seo Tags allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.","url":"https://30tools.com/create-seo-tags","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
