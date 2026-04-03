import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text to Tags Converter | Free Online Tool",
  description: "Use this free text to tags converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-to-tags-converter",
  },
};

export default function TextToTagsConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="text-to-tags-converter"
      title="Text to Tags Converter"
      description="Use this free text to tags converter to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
