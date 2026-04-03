import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "HTML Beautifier | Free Online Tool",
  description: "Use this free html beautifier to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/html-beautifier",
  },
};

export default function HtmlBeautifierPage() {
  return (
    <ToolPlaceholderPage
      toolId="html-beautifier"
      title="HTML Beautifier"
      description="Use this free html beautifier to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
