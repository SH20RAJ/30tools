import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Margin Calculator | Free Online Tool",
  description: "Use this free margin calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/margin-calculator",
  },
};

export default function MarginCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="margin-calculator"
      title="Margin Calculator"
      description="Use this free margin calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
