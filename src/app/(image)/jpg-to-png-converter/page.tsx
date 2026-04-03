import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JPG to PNG Converter | Free Online Tool",
  description: "Use this free jpg to png converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/jpg-to-png-converter",
  },
};

export default function JpgToPngConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="jpg-to-png-converter"
      title="JPG to PNG Converter"
      description="Use this free jpg to png converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
