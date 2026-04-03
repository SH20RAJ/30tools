import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Weight Converter | Free Online Tool",
  description: "Use this free weight converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/weight-converter",
  },
};

export default function WeightConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="weight-converter"
      title="Weight Converter"
      description="Use this free weight converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
