import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Reactive Power Converter | Free Online Tool",
  description: "Use this free reactive power converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/reactive-power-converter",
  },
};

export default function ReactivePowerConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="reactive-power-converter"
      title="Reactive Power Converter"
      description="Use this free reactive power converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
