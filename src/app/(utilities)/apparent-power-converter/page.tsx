import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Apparent Power Converter | Free Online Tool",
  description: "Use this free apparent power converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/apparent-power-converter",
  },
};

export default function ApparentPowerConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="apparent-power-converter"
      title="Apparent Power Converter"
      description="Use this free apparent power converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
