import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JPG to BMP Converter | Free Online Tool",
  description: "Use this free jpg to bmp converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/jpg-to-bmp-converter",
  },
};

export default function JpgToBmpConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="jpg-to-bmp-converter"
      title="JPG to BMP Converter"
      description="Use this free jpg to bmp converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
