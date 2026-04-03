import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Parts Per Converter | Free Online Tool",
  description: "Use this free parts per converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/parts-per-converter",
  },
};

export default function PartsPerConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="parts-per-converter"
      title="Parts Per Converter"
      description="Use this free parts per converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
