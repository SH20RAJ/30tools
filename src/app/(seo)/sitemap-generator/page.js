import SitemapGenerator from "@/components/tools/seo/SitemapGeneratorTool";

export const metadata = {
  title: "Sitemap Generator - Generate XML Sitemaps | 30tools",
  description:
    "Generate Process instantly with our free sitemap generator. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
  keywords:
    "sitemap generator, xml sitemap, seo sitemap, website sitemap, search engine optimization",
  openGraph: {
    title: "Sitemap Generator - Generate XML Sitemaps | 30tools",
    description: "Generate XML sitemaps for websites.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sitemap Generator - Free Online Generator | Create Instantly",
    description:
      "Generate Process instantly with our free sitemap generator. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
    images: ["/og-images/sitemap-generator.jpg"],
    creator: "@30tools",
  },

  alternates: {
    canonical: "https://30tools.com/sitemap-generator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Sitemap Generator",
  description:
    "Generate Process instantly with our free sitemap generator. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
  url: "https://30tools.com/sitemap-generator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function SitemapGeneratorPage() {
  return <SitemapGenerator />;
}
