import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Discount Calculator | Free Online Tool",
  description: "Use this free discount calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/discount-calculator",
  },
};

export default function DiscountCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="discount-calculator"
      title="Discount Calculator"
      description="Use this free discount calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
