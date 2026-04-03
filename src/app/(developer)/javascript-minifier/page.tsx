import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JavaScript Minifier | Free Online Tool",
  description: "Use this free javascript minifier to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/javascript-minifier",
  },
};

export default function JavascriptMinifierPage() {
  return (
    <ToolPlaceholderPage
      toolId="javascript-minifier"
      title="JavaScript Minifier"
      description="Use this free javascript minifier to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
