import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Volumetric Flow Rate Converter | Free Online Tool",
  description: "Use this free volumetric flow rate converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/volumetric-flow-rate-converter",
  },
};

export default function VolumetricFlowRateConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="volumetric-flow-rate-converter"
      title="Volumetric Flow Rate Converter"
      description="Use this free volumetric flow rate converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
