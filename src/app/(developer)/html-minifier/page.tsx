import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "HTML Minifier | Free Online Tool",
  description: "Use this free html minifier to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/html-minifier",
  },
};

export default function HtmlMinifierPage() {
  return (
    <ToolPlaceholderPage
      toolId="html-minifier"
      title="HTML Minifier"
      description="Use this free html minifier to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
