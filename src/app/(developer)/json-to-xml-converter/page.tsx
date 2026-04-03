import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JSON to XML Converter | Free Online Tool",
  description: "Use this free json to xml converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/json-to-xml-converter",
  },
};

export default function JsonToXmlConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="json-to-xml-converter"
      title="JSON to XML Converter"
      description="Use this free json to xml converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
