import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Article Rewriter | Free Online Tool",
  description: "Use this free article rewriter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/article-rewriter",
  },
};

export default function ArticleRewriterPage() {
  return (
    <ToolPlaceholderPage
      toolId="article-rewriter"
      title="Article Rewriter"
      description="Use this free article rewriter to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
