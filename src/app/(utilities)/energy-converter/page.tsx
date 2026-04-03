import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Energy Converter | Free Online Tool",
  description: "Use this free energy converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/energy-converter",
  },
};

export default function EnergyConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="energy-converter"
      title="Energy Converter"
      description="Use this free energy converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
