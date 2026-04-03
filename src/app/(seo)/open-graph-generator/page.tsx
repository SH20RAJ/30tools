import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Open Graph Generator | Free Online Tool",
  description: "Use this free open graph generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/open-graph-generator",
  },
};

export default function OpenGraphGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="open-graph-generator"
      title="Open Graph Generator"
      description="Use this free open graph generator to get fast and reliable results with clean output."
      categoryName="SEO Tools"
      categorySlug="seo-tools"
    />
  );
}
