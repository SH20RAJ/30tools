import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "URL Parser | Free Online Tool",
  description: "Use this free url parser to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/url-parser",
  },
};

export default function UrlParserPage() {
  return (
    <ToolPlaceholderPage
      toolId="url-parser"
      title="URL Parser"
      description="Use this free url parser to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
