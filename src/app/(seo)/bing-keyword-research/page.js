import KeywordResearchTool from "@/components/tools/seo/KeywordResearchTool";

export const metadata = {
  title:
    "Bing Keyword Research Tool - Free Bing SEO Keyword Research | 30tools",
  description:
    "Free Bing keyword research tool to find valuable keywords for your SEO strategy. Discover Bing-specific search volumes, difficulty scores, and related keyword suggestions.",
  keywords:
    "bing keyword research, bing seo, bing keywords, bing keyword tool, bing keyword planner, bing keyword research tool free, bing seo keyword research",
  openGraph: {
    title: "Bing Keyword Research Tool - Free Bing SEO Keyword Research",
    description:
      "Free Bing keyword research tool to find valuable keywords for your SEO strategy. Discover Bing-specific search volumes, difficulty scores, and related keyword suggestions.",
    url: "https://30tools.com/bing-keyword-research",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/bing-keyword-research.jpg",
        width: 1200,
        height: 630,
        alt: "Bing Keyword Research Tool",
      },
    ],
    type: "website",
  },
};

export default function BingKeywordResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <KeywordResearchTool searchEngine="bing" />
    </div>
  );
}
