import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "HEX to Octal Converter | Free Online Tool",
  description: "Use this free hex to octal converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/hex-to-octal-converter",
  },
};

export default function HexToOctalConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="hex-to-octal-converter"
      title="HEX to Octal Converter"
      description="Use this free hex to octal converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
