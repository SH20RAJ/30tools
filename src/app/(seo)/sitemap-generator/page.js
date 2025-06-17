import SitemapGenerator from "@/components/tools/seo/SitemapGeneratorTool";

export const metadata = {
  title: 'Sitemap Generator - Generate XML Sitemaps | 30tools',
  description: 'Generate XML sitemaps for websites to improve SEO and search engine crawling. Create sitemaps automatically.',
  keywords: 'sitemap generator, xml sitemap, seo sitemap, website sitemap, search engine optimization',
  openGraph: {
    title: 'Sitemap Generator - Generate XML Sitemaps | 30tools',
    description: 'Generate XML sitemaps for websites.',
    type: 'website',
  },
};

export default function SitemapGeneratorPage() {
  return <SitemapGenerator />;
}
