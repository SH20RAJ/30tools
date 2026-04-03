import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text to Octal Converter | Free Online Tool",
  description: "Use this free text to octal converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-to-octal-converter",
  },
};

export default function TextToOctalConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="text-to-octal-converter"
      title="Text to Octal Converter"
      description="Use this free text to octal converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
