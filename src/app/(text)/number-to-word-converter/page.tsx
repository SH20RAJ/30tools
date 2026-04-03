import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Number to Word Converter | Free Online Tool",
  description: "Use this free number to word converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/number-to-word-converter",
  },
};

export default function NumberToWordConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="number-to-word-converter"
      title="Number to Word Converter"
      description="Use this free number to word converter to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
