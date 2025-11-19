import KeywordResearchTool from "@/components/tools/seo/KeywordResearchTool";

export const metadata = {
  title:
    "Google Keyword Research Tool - Free Google SEO Keyword Research | 30tools",
  description:
    "Free Google keyword research tool to find valuable keywords for your SEO strategy. Discover Google-specific search volumes, difficulty scores, and related keyword suggestions.",
  keywords:
    "google keyword research, google keywords, google keyword tool, google keyword planner, google seo, google keyword research tool free, google seo keyword research",
  openGraph: {
    title: "Google Keyword Research Tool - Free Google SEO Keyword Research",
    description:
      "Free Google keyword research tool to find valuable keywords for your SEO strategy. Discover Google-specific search volumes, difficulty scores, and related keyword suggestions.",
    url: "https://30tools.com/google-keyword-research",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/google-keyword-research.jpg",
        width: 1200,
        height: 630,
        alt: "Google Keyword Research Tool",
      },
    ],
    type: "website",
  },
};

export default function GoogleKeywordResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <KeywordResearchTool searchEngine="google" />
    </div>
  );
}
