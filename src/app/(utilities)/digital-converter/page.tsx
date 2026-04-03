import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Digital Converter | Free Online Tool",
  description: "Use this free digital converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/digital-converter",
  },
};

export default function DigitalConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="digital-converter"
      title="Digital Converter"
      description="Use this free digital converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
