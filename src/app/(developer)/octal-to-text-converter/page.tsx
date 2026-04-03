import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Octal to Text Converter | Free Online Tool",
  description: "Use this free octal to text converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/octal-to-text-converter",
  },
};

export default function OctalToTextConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="octal-to-text-converter"
      title="Octal to Text Converter"
      description="Use this free octal to text converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
