import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "WebP to JPG Converter | Free Online Tool",
  description: "Use this free webp to jpg converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/webp-to-jpg-converter",
  },
};

export default function WebpToJpgConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="webp-to-jpg-converter"
      title="WebP to JPG Converter"
      description="Use this free webp to jpg converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
