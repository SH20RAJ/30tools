import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "HEX to Text Converter | Free Online Tool",
  description: "Use this free hex to text converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/hex-to-text-converter",
  },
};

export default function HexToTextConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="hex-to-text-converter"
      title="HEX to Text Converter"
      description="Use this free hex to text converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
