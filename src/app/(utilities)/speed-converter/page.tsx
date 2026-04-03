import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Speed Converter | Free Online Tool",
  description: "Use this free speed converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/speed-converter",
  },
};

export default function SpeedConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="speed-converter"
      title="Speed Converter"
      description="Use this free speed converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
