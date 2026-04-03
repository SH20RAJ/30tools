import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Current Converter | Free Online Tool",
  description: "Use this free current converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/current-converter",
  },
};

export default function CurrentConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="current-converter"
      title="Current Converter"
      description="Use this free current converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
