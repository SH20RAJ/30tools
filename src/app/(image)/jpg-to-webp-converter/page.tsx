import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JPG to WebP Converter | Free Online Tool",
  description: "Use this free jpg to webp converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/jpg-to-webp-converter",
  },
};

export default function JpgToWebpConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="jpg-to-webp-converter"
      title="JPG to WebP Converter"
      description="Use this free jpg to webp converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
