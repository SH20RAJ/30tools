import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Temperature Converter | Free Online Tool",
  description: "Use this free temperature converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/temperature-converter",
  },
};

export default function TemperatureConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="temperature-converter"
      title="Temperature Converter"
      description="Use this free temperature converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
