import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Binary to ASCII Converter | Free Online Tool",
  description: "Use this free binary to ascii converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/binary-to-ascii-converter",
  },
};

export default function BinaryToAsciiConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="binary-to-ascii-converter"
      title="Binary to ASCII Converter"
      description="Use this free binary to ascii converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
