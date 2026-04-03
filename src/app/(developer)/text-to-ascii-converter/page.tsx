import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text to ASCII Converter | Free Online Tool",
  description: "Use this free text to ascii converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-to-ascii-converter",
  },
};

export default function TextToAsciiConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="text-to-ascii-converter"
      title="Text to ASCII Converter"
      description="Use this free text to ascii converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
