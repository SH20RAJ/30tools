import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "WordPress Theme Detector | Free Online Tool",
  description: "Use this free wordpress theme detector to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/wordpress-theme-detector",
  },
};

export default function WordpressThemeDetectorPage() {
  return (
    <ToolPlaceholderPage
      toolId="wordpress-theme-detector"
      title="WordPress Theme Detector"
      description="Use this free wordpress theme detector to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
