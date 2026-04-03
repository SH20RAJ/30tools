import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Binary to Decimal Converter | Free Online Tool",
  description: "Use this free binary to decimal converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/binary-to-decimal-converter",
  },
};

export default function BinaryToDecimalConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="binary-to-decimal-converter"
      title="Binary to Decimal Converter"
      description="Use this free binary to decimal converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
