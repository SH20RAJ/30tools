import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "HEX to Decimal Converter | Free Online Tool",
  description: "Use this free hex to decimal converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/hex-to-decimal-converter",
  },
};

export default function HexToDecimalConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="hex-to-decimal-converter"
      title="HEX to Decimal Converter"
      description="Use this free hex to decimal converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
