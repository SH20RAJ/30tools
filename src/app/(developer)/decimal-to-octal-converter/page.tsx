import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Decimal to Octal Converter | Free Online Tool",
  description: "Use this free decimal to octal converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/decimal-to-octal-converter",
  },
};

export default function DecimalToOctalConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="decimal-to-octal-converter"
      title="Decimal to Octal Converter"
      description="Use this free decimal to octal converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
