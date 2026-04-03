import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Pressure Converter | Free Online Tool",
  description: "Use this free pressure converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/pressure-converter",
  },
};

export default function PressureConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="pressure-converter"
      title="Pressure Converter"
      description="Use this free pressure converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
