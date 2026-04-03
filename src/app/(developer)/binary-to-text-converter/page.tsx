import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Binary to Text Converter | Free Online Tool",
  description: "Use this free binary to text converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/binary-to-text-converter",
  },
};

export default function BinaryToTextConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="binary-to-text-converter"
      title="Binary to Text Converter"
      description="Use this free binary to text converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
