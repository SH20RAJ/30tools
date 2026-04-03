import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Adsense Calculator | Free Online Tool",
  description: "Use this free adsense calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/adsense-calculator",
  },
};

export default function AdsenseCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="adsense-calculator"
      title="Adsense Calculator"
      description="Use this free adsense calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
