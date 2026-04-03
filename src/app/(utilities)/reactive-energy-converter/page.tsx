import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Reactive Energy Converter | Free Online Tool",
  description: "Use this free reactive energy converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/reactive-energy-converter",
  },
};

export default function ReactiveEnergyConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="reactive-energy-converter"
      title="Reactive Energy Converter"
      description="Use this free reactive energy converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
