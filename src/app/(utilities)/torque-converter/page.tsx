import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Torque Converter | Free Online Tool",
  description: "Use this free torque converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/torque-converter",
  },
};

export default function TorqueConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="torque-converter"
      title="Torque Converter"
      description="Use this free torque converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
