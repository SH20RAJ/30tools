import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "URL Rewriting Tool | Free Online Tool",
  description: "Use this free url rewriting tool to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/url-rewriting-tool",
  },
};

export default function UrlRewritingToolPage() {
  return (
    <ToolPlaceholderPage
      toolId="url-rewriting-tool"
      title="URL Rewriting Tool"
      description="Use this free url rewriting tool to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
