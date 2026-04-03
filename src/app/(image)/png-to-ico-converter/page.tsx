import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "PNG to ICO Converter | Free Online Tool",
  description: "Use this free png to ico converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/png-to-ico-converter",
  },
};

export default function PngToIcoConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="png-to-ico-converter"
      title="PNG to ICO Converter"
      description="Use this free png to ico converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
