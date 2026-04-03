import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JPG Converter | Free Online Tool",
  description: "Use this free jpg converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/jpg-converter",
  },
};

export default function JpgConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="jpg-converter"
      title="JPG Converter"
      description="Use this free jpg converter to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
