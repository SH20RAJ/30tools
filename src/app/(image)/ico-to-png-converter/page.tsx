import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "ICO to PNG Converter | Free Online Tool",
  description: "Use this free ico to png converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/ico-to-png-converter",
  },
};

export default function IcoToPngConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="ico-to-png-converter"
      title="ICO to PNG Converter"
      description="Use this free ico to png converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
