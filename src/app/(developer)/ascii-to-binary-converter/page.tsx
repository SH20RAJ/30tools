import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "ASCII to Binary Converter | Free Online Tool",
  description: "Use this free ascii to binary converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/ascii-to-binary-converter",
  },
};

export default function AsciiToBinaryConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="ascii-to-binary-converter"
      title="ASCII to Binary Converter"
      description="Use this free ascii to binary converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
