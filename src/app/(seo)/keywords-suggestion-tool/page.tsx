import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Keywords Suggestion Tool | Free Online Tool",
  description: "Use this free keywords suggestion tool to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/keywords-suggestion-tool",
  },
};

export default function KeywordsSuggestionToolPage() {
  return (
    <ToolPlaceholderPage
      toolId="keywords-suggestion-tool"
      title="Keywords Suggestion Tool"
      description="Use this free keywords suggestion tool to get fast and reliable results with clean output."
      categoryName="SEO Tools"
      categorySlug="seo-tools"
    />
  );
}
