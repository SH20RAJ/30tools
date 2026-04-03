import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Keyword Density Checker | Free Online Tool",
  description: "Use this free keyword density checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/keyword-density-checker",
  },
};

export default function KeywordDensityCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="keyword-density-checker"
      title="Keyword Density Checker"
      description="Use this free keyword density checker to get fast and reliable results with clean output."
      categoryName="SEO Tools"
      categorySlug="seo-tools"
    />
  );
}
