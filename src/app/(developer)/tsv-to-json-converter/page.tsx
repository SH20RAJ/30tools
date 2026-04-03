import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "TSV to JSON Converter | Free Online Tool",
  description: "Use this free tsv to json converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/tsv-to-json-converter",
  },
};

export default function TsvToJsonConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="tsv-to-json-converter"
      title="TSV to JSON Converter"
      description="Use this free tsv to json converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
