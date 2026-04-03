import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "CSV to JSON Converter | Free Online Tool",
  description: "Use this free csv to json converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/csv-to-json-converter",
  },
};

export default function CsvToJsonConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="csv-to-json-converter"
      title="CSV to JSON Converter"
      description="Use this free csv to json converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
