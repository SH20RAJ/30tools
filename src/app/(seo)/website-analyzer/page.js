import WebsiteAnalyzerTool from '@/components/tools/web/WebsiteAnalyzerTool';

export const metadata = {
  title: "Website Performance Analyzer - Free SEO & Speed Test",
  description: "Comprehensive website analysis tool. Check performance, SEO, accessibility, security, and mobile optimization. Free online website audit.",
  keywords: "website analyzer, performance test, SEO audit, accessibility check, website speed test, site analyzer",
  openGraph: {
    title: "Website Performance Analyzer - Free SEO & Speed Test",
    description: "Get comprehensive analysis of your website's performance, SEO, accessibility, and security.",
    url: "https://30tools.com/website-analyzer",
    images: [
      {
        url: "/og-images/website-analyzer.jpg",
        width: 1200,
        height: 630,
        alt: "Website Performance Analyzer Tool"
      }
    ],
  },
};

export default function WebsiteAnalyzerPage() {
  return <WebsiteAnalyzerTool />;
}
