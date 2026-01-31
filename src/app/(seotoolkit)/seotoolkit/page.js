import SeoToolkit from "@/components/tools/seo/SeoToolkit";

export const metadata = {
    title: "SEO Toolkit - All-in-One SEO Analysis Tool",
    description: "Professional SEO toolkit with 27+ analysis tools. Free online site audit, keyword tracking, backlink monitoring, and more.",
    keywords: [
      "seo toolkit",
      "all in one seo tool",
      "complete seo analysis",
      "website seo checker",
      "seo audit toolkit",
      "free seo tools collection",
      "technical seo analysis",
      "on-page seo checker",
      "backlink monitor",
      "keyword rank tracker",
      "site health check",
      "seo performance analyzer"
    ].join(", "),
  openGraph: {
    title: "Seotoolkit - Free Online Tool | Professional Results",
    description: "Professional seotoolkit tool. Free online processing with high-quality results. No registration required, instant results.",
    url: "https://30tools.com/seotoolkit",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/seotoolkit.jpg",
        width: 1200,
        height: 630,
        alt: "Seotoolkit - Free Online Tool | Professional Results"
      }
    ],
    type: "website"
  }
,
  twitter: {
    card: "summary_large_image",
    title: "Seotoolkit - Free Online Tool | Professional Results",
    description: "Professional seotoolkit tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/seotoolkit.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/seotoolkit"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Seotoolkit",
  "description": "Professional seotoolkit tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/seotoolkit",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function SeoToolkitPage() {
    return <SeoToolkit />;
}
