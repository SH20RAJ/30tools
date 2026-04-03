import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Binary to HEX Converter | Free Online Tool",
  description: "Use this free binary to hex converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/binary-to-hex-converter",
  },
};

export default function BinaryToHexConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="binary-to-hex-converter"
      title="Binary to HEX Converter"
      description="Use this free binary to hex converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
