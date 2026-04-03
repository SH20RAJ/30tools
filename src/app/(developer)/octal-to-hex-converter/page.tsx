import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Octal to HEX Converter | Free Online Tool",
  description: "Use this free octal to hex converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/octal-to-hex-converter",
  },
};

export default function OctalToHexConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="octal-to-hex-converter"
      title="Octal to HEX Converter"
      description="Use this free octal to hex converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
