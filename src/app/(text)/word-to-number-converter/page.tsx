import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Word to Number Converter | Free Online Tool",
  description: "Use this free word to number converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/word-to-number-converter",
  },
};

export default function WordToNumberConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="word-to-number-converter"
      title="Word to Number Converter"
      description="Use this free word to number converter to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
