import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Loan Calculator | Free Online Tool",
  description: "Use this free loan calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/loan-calculator",
  },
};

export default function LoanCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="loan-calculator"
      title="Loan Calculator"
      description="Use this free loan calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
