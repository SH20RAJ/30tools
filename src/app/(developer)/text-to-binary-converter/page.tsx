import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text to Binary Converter | Free Online Tool",
  description: "Use this free text to binary converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-to-binary-converter",
  },
};

export default function TextToBinaryConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="text-to-binary-converter"
      title="Text to Binary Converter"
      description="Use this free text to binary converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
