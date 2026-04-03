import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Decimal to Binary Converter | Free Online Tool",
  description: "Use this free decimal to binary converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/decimal-to-binary-converter",
  },
};

export default function DecimalToBinaryConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="decimal-to-binary-converter"
      title="Decimal to Binary Converter"
      description="Use this free decimal to binary converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
