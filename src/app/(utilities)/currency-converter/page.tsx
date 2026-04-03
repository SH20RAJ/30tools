import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Currency Converter | Free Online Tool",
  description: "Use this free currency converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/currency-converter",
  },
};

export default function CurrencyConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="currency-converter"
      title="Currency Converter"
      description="Use this free currency converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
