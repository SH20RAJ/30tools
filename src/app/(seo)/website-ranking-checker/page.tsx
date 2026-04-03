import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Website Ranking Checker | Free Online Tool",
  description: "Use this free website ranking checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/website-ranking-checker",
  },
};

export default function WebsiteRankingCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="website-ranking-checker"
      title="Website Ranking Checker"
      description="Use this free website ranking checker to get fast and reliable results with clean output."
      categoryName="SEO Tools"
      categorySlug="seo-tools"
    />
  );
}
