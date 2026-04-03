import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Base64 to Image Converter | Free Online Tool",
  description: "Use this free base64 to image converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/base64-to-image-converter",
  },
};

export default function Base64ToImageConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="base64-to-image-converter"
      title="Base64 to Image Converter"
      description="Use this free base64 to image converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
