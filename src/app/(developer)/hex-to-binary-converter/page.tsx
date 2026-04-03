import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "HEX to Binary Converter | Free Online Tool",
  description: "Use this free hex to binary converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/hex-to-binary-converter",
  },
};

export default function HexToBinaryConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="hex-to-binary-converter"
      title="HEX to Binary Converter"
      description="Use this free hex to binary converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
