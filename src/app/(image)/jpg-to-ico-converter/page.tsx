import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JPG to ICO Converter | Free Online Tool",
  description: "Use this free jpg to ico converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/jpg-to-ico-converter",
  },
};

export default function JpgToIcoConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="jpg-to-ico-converter"
      title="JPG to ICO Converter"
      description="Use this free jpg to ico converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
