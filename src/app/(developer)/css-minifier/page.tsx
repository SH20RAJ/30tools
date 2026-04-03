import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "CSS Minifier | Free Online Tool",
  description: "Use this free css minifier to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/css-minifier",
  },
};

export default function CssMinifierPage() {
  return (
    <ToolPlaceholderPage
      toolId="css-minifier"
      title="CSS Minifier"
      description="Use this free css minifier to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
