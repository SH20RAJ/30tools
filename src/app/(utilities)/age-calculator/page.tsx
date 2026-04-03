import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Age Calculator | Free Online Tool",
  description: "Use this free age calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/age-calculator",
  },
};

export default function AgeCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="age-calculator"
      title="Age Calculator"
      description="Use this free age calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
