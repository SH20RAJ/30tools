import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Volume Converter | Free Online Tool",
  description: "Use this free volume converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/volume-converter",
  },
};

export default function VolumeConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="volume-converter"
      title="Volume Converter"
      description="Use this free volume converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
