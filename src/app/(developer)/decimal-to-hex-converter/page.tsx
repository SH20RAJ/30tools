import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Decimal to HEX Converter | Free Online Tool",
  description: "Use this free decimal to hex converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/decimal-to-hex-converter",
  },
};

export default function DecimalToHexConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="decimal-to-hex-converter"
      title="Decimal to HEX Converter"
      description="Use this free decimal to hex converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
