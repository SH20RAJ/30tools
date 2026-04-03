import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text to Slug Converter | Free Online Tool",
  description: "Use this free text to slug converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-to-slug-converter",
  },
};

export default function TextToSlugConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="text-to-slug-converter"
      title="Text to Slug Converter"
      description="Use this free text to slug converter to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
