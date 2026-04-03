import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Percentage Calculator | Free Online Tool",
  description: "Use this free percentage calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/percentage-calculator",
  },
};

export default function PercentageCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="percentage-calculator"
      title="Percentage Calculator"
      description="Use this free percentage calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
