import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "XML to JSON Converter | Free Online Tool",
  description: "Use this free xml to json converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/xml-to-json-converter",
  },
};

export default function XmlToJsonConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="xml-to-json-converter"
      title="XML to JSON Converter"
      description="Use this free xml to json converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
