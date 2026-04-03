import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Angle Converter | Free Online Tool",
  description: "Use this free angle converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/angle-converter",
  },
};

export default function AngleConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="angle-converter"
      title="Angle Converter"
      description="Use this free angle converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
