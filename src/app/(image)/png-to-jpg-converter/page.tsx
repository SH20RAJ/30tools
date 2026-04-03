import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "PNG to JPG Converter | Free Online Tool",
  description: "Use this free png to jpg converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/png-to-jpg-converter",
  },
};

export default function PngToJpgConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="png-to-jpg-converter"
      title="PNG to JPG Converter"
      description="Use this free png to jpg converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
