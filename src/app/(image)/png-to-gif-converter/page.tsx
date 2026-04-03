import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "PNG to GIF Converter | Free Online Tool",
  description: "Use this free png to gif converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/png-to-gif-converter",
  },
};

export default function PngToGifConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="png-to-gif-converter"
      title="PNG to GIF Converter"
      description="Use this free png to gif converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
