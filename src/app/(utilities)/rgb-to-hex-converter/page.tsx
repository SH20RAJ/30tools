import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "RGB to HEX Converter | Free Online Tool",
  description: "Use this free rgb to hex converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/rgb-to-hex-converter",
  },
};

export default function RgbToHexConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="rgb-to-hex-converter"
      title="RGB to HEX Converter"
      description="Use this free rgb to hex converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
