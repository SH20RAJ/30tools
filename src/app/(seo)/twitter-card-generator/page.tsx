import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Twitter Card Generator | Free Online Tool",
  description: "Use this free twitter card generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/twitter-card-generator",
  },
};

export default function TwitterCardGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="twitter-card-generator"
      title="Twitter Card Generator"
      description="Use this free twitter card generator to get fast and reliable results with clean output."
      categoryName="SEO Tools"
      categorySlug="seo-tools"
    />
  );
}
