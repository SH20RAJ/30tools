import SEOToolsNavbar from "@/components/navigation/SEOToolsNavbar";
import SEOToolsFooter from "@/components/footers/SEOToolsFooter";

export const metadata = {
  title: "SEO Tools - Free Online SEO Audit, Keywords & Backlinks | 30Tools",
  description:
    "Boost your rankings with our free SEO tools. Keyword planner, backlink checker, site audit, and more. 100% free with no limits.",
  keywords:
    "seo tools, keyword research tool, backlink checker, seo audit tool, free seo software, google seo tools, website analyzer",
  openGraph: {
    title: "SEO Tools - Free Online SEO Suite",
    description:
      "Boost your rankings with our free SEO tools. Keyword planner, backlink checker, site audit, and more.",
    url: "https://30tools.com/seo-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/seo-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free SEO Tools Collection",
      },
    ],
    type: "website",
  },
};

const jsonLdSchemas = {
  collectionPage: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Free SEO Tools Collection",
    "description": "A complete suite of free SEO tools for keyword research, backlink analysis, and website auditing.",
    "url": "https://30tools.com/seo-tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://30tools.com/keyword-research-tool", "name": "Keyword Research Tool" },
        { "@type": "ListItem", "position": 2, "url": "https://30tools.com/backlink-checker", "name": "Backlink Checker" },
        { "@type": "ListItem", "position": 3, "url": "https://30tools.com/seo-audit-tool", "name": "SEO Audit Tool" },
        { "@type": "ListItem", "position": 4, "url": "https://30tools.com/bulk-keyword-rank-checker", "name": "Bulk Keyword Rank Checker" },
        { "@type": "ListItem", "position": 5, "url": "https://30tools.com/sitemap-generator", "name": "Sitemap Generator" },
        { "@type": "ListItem", "position": 6, "url": "https://30tools.com/robots-txt-generator", "name": "Robots.txt Generator" }
      ]
    }
  }
};

export default function SEOToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.collectionPage) }} />
      <SEOToolsNavbar />
      <main className="flex-1">{children}</main>
      <SEOToolsFooter />
    </div>
  );
}
