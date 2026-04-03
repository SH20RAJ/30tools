import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text to HEX Converter | Free Online Tool",
  description: "Use this free text to hex converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-to-hex-converter",
  },
};

export default function TextToHexConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="text-to-hex-converter"
      title="Text to HEX Converter"
      description="Use this free text to hex converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
