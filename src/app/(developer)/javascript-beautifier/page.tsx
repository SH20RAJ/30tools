import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JavaScript Beautifier | Free Online Tool",
  description: "Use this free javascript beautifier to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/javascript-beautifier",
  },
};

export default function JavascriptBeautifierPage() {
  return (
    <ToolPlaceholderPage
      toolId="javascript-beautifier"
      title="JavaScript Beautifier"
      description="Use this free javascript beautifier to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
