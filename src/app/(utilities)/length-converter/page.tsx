import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Length Converter | Free Online Tool",
  description: "Use this free length converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/length-converter",
  },
};

export default function LengthConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="length-converter"
      title="Length Converter"
      description="Use this free length converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
