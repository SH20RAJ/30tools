import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "CPM Calculator | Free Online Tool",
  description: "Use this free cpm calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/cpm-calculator",
  },
};

export default function CpmCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="cpm-calculator"
      title="CPM Calculator"
      description="Use this free cpm calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
