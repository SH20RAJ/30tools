import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JSON to TSV Converter | Free Online Tool",
  description: "Use this free json to tsv converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/json-to-tsv-converter",
  },
};

export default function JsonToTsvConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="json-to-tsv-converter"
      title="JSON to TSV Converter"
      description="Use this free json to tsv converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
