import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text to Decimal Converter | Free Online Tool",
  description: "Use this free text to decimal converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-to-decimal-converter",
  },
};

export default function TextToDecimalConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="text-to-decimal-converter"
      title="Text to Decimal Converter"
      description="Use this free text to decimal converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
