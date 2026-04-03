import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Octal to Decimal Converter | Free Online Tool",
  description: "Use this free octal to decimal converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/octal-to-decimal-converter",
  },
};

export default function OctalToDecimalConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="octal-to-decimal-converter"
      title="Octal to Decimal Converter"
      description="Use this free octal to decimal converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
