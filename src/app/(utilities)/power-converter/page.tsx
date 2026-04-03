import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Power Converter | Free Online Tool",
  description: "Use this free power converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/power-converter",
  },
};

export default function PowerConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="power-converter"
      title="Power Converter"
      description="Use this free power converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
