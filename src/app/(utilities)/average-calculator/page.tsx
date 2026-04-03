import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Average Calculator | Free Online Tool",
  description: "Use this free average calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/average-calculator",
  },
};

export default function AverageCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="average-calculator"
      title="Average Calculator"
      description="Use this free average calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
