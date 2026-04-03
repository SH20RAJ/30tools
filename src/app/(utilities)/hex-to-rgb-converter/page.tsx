import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "HEX to RGB Converter | Free Online Tool",
  description: "Use this free hex to rgb converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/hex-to-rgb-converter",
  },
};

export default function HexToRgbConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="hex-to-rgb-converter"
      title="HEX to RGB Converter"
      description="Use this free hex to rgb converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
