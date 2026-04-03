import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Illuminance Converter | Free Online Tool",
  description: "Use this free illuminance converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/illuminance-converter",
  },
};

export default function IlluminanceConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="illuminance-converter"
      title="Illuminance Converter"
      description="Use this free illuminance converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
