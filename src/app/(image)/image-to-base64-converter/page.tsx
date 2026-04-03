import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Image to Base64 Converter | Free Online Tool",
  description: "Use this free image to base64 converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/image-to-base64-converter",
  },
};

export default function ImageToBase64ConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="image-to-base64-converter"
      title="Image to Base64 Converter"
      description="Use this free image to base64 converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
