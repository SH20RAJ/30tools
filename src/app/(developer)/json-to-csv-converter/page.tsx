import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JSON to CSV Converter | Free Online Tool",
  description: "Use this free json to csv converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/json-to-csv-converter",
  },
};

export default function JsonToCsvConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="json-to-csv-converter"
      title="JSON to CSV Converter"
      description="Use this free json to csv converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
