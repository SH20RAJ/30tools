import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JPG to GIF Converter | Free Online Tool",
  description: "Use this free jpg to gif converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/jpg-to-gif-converter",
  },
};

export default function JpgToGifConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="jpg-to-gif-converter"
      title="JPG to GIF Converter"
      description="Use this free jpg to gif converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
