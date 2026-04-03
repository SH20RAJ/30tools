import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Meta Tag Generator | Free Online Tool",
  description: "Use this free meta tag generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/meta-tag-generator",
  },
};

export default function MetaTagGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="meta-tag-generator"
      title="Meta Tag Generator"
      description="Use this free meta tag generator to get fast and reliable results with clean output."
      categoryName="SEO Tools"
      categorySlug="seo-tools"
    />
  );
}
