import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "WebP to PNG Converter | Free Online Tool",
  description: "Use this free webp to png converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/webp-to-png-converter",
  },
};

export default function WebpToPngConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="webp-to-png-converter"
      title="WebP to PNG Converter"
      description="Use this free webp to png converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
