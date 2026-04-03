import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "ASCII to Text Converter | Free Online Tool",
  description: "Use this free ascii to text converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/ascii-to-text-converter",
  },
};

export default function AsciiToTextConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="ascii-to-text-converter"
      title="ASCII to Text Converter"
      description="Use this free ascii to text converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
