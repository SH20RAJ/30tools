import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Voltage Converter | Free Online Tool",
  description: "Use this free voltage converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/voltage-converter",
  },
};

export default function VoltageConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="voltage-converter"
      title="Voltage Converter"
      description="Use this free voltage converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
