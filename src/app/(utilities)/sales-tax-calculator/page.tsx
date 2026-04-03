import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Sales Tax Calculator | Free Online Tool",
  description: "Use this free sales tax calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/sales-tax-calculator",
  },
};

export default function SalesTaxCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="sales-tax-calculator"
      title="Sales Tax Calculator"
      description="Use this free sales tax calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
