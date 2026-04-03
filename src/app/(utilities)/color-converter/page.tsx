import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Color Converter | Free Online Tool",
  description: "Use this free color converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/color-converter",
  },
};

export default function ColorConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="color-converter"
      title="Color Converter"
      description="Use this free color converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
