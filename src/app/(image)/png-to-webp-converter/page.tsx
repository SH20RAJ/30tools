import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "PNG to WebP Converter | Free Online Tool",
  description: "Use this free png to webp converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/png-to-webp-converter",
  },
};

export default function PngToWebpConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="png-to-webp-converter"
      title="PNG to WebP Converter"
      description="Use this free png to webp converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
