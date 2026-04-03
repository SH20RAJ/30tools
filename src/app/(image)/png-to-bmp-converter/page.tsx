import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "PNG to BMP Converter | Free Online Tool",
  description: "Use this free png to bmp converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/png-to-bmp-converter",
  },
};

export default function PngToBmpConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="png-to-bmp-converter"
      title="PNG to BMP Converter"
      description="Use this free png to bmp converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
