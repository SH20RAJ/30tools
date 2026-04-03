import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Frequency Converter | Free Online Tool",
  description: "Use this free frequency converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/frequency-converter",
  },
};

export default function FrequencyConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="frequency-converter"
      title="Frequency Converter"
      description="Use this free frequency converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
