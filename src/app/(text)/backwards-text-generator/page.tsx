import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Backwards Text Generator | Free Online Tool",
  description: "Use this free backwards text generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/backwards-text-generator",
  },
};

export default function BackwardsTextGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="backwards-text-generator"
      title="Backwards Text Generator"
      description="Use this free backwards text generator to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
