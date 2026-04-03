import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JSON to Text Converter | Free Online Tool",
  description: "Use this free json to text converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/json-to-text-converter",
  },
};

export default function JsonToTextConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="json-to-text-converter"
      title="JSON to Text Converter"
      description="Use this free json to text converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
