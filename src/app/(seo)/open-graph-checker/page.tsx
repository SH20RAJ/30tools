import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Open Graph Checker | Free Online Tool",
  description: "Use this free open graph checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/open-graph-checker",
  },
};

export default function OpenGraphCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="open-graph-checker"
      title="Open Graph Checker"
      description="Use this free open graph checker to get fast and reliable results with clean output."
      categoryName="SEO Tools"
      categorySlug="seo-tools"
    />
  );
}
