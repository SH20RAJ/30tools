import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Confidence Interval Calculator | Free Online Tool",
  description: "Use this free confidence interval calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/confidence-interval-calculator",
  },
};

export default function ConfidenceIntervalCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="confidence-interval-calculator"
      title="Confidence Interval Calculator"
      description="Use this free confidence interval calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
