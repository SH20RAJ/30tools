import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Pace Converter | Free Online Tool",
  description: "Use this free pace converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/pace-converter",
  },
};

export default function PaceConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="pace-converter"
      title="Pace Converter"
      description="Use this free pace converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
