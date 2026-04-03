import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Each Converter | Free Online Tool",
  description: "Use this free each converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/each-converter",
  },
};

export default function EachConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="each-converter"
      title="Each Converter"
      description="Use this free each converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
