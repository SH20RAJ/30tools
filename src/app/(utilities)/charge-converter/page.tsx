import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Charge Converter | Free Online Tool",
  description: "Use this free charge converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/charge-converter",
  },
};

export default function ChargeConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="charge-converter"
      title="Charge Converter"
      description="Use this free charge converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
