import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Area Converter | Free Online Tool",
  description: "Use this free area converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/area-converter",
  },
};

export default function AreaConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="area-converter"
      title="Area Converter"
      description="Use this free area converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
