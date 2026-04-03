import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text to Hashtags Converter | Free Online Tool",
  description: "Use this free text to hashtags converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-to-hashtags-converter",
  },
};

export default function TextToHashtagsConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="text-to-hashtags-converter"
      title="Text to Hashtags Converter"
      description="Use this free text to hashtags converter to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
