import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "CSS Beautifier | Free Online Tool",
  description: "Use this free css beautifier to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/css-beautifier",
  },
};

export default function CssBeautifierPage() {
  return (
    <ToolPlaceholderPage
      toolId="css-beautifier"
      title="CSS Beautifier"
      description="Use this free css beautifier to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
