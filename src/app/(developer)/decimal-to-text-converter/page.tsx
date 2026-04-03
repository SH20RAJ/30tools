import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Decimal to Text Converter | Free Online Tool",
  description: "Use this free decimal to text converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/decimal-to-text-converter",
  },
};

export default function DecimalToTextConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="decimal-to-text-converter"
      title="Decimal to Text Converter"
      description="Use this free decimal to text converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
