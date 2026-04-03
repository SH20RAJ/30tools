import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Facebook ID Finder | Free Online Tool",
  description: "Use this free facebook id finder to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/facebook-id-finder",
  },
};

export default function FacebookIdFinderPage() {
  return (
    <ToolPlaceholderPage
      toolId="facebook-id-finder"
      title="Facebook ID Finder"
      description="Use this free facebook id finder to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
