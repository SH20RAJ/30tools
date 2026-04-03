import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Probability Calculator | Free Online Tool",
  description: "Use this free probability calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/probability-calculator",
  },
};

export default function ProbabilityCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="probability-calculator"
      title="Probability Calculator"
      description="Use this free probability calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
