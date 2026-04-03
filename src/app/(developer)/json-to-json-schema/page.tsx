import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JSON to JSON Schema | Free Online Tool",
  description: "Use this free json to json schema to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/json-to-json-schema",
  },
};

export default function JsonToJsonSchemaPage() {
  return (
    <ToolPlaceholderPage
      toolId="json-to-json-schema"
      title="JSON to JSON Schema"
      description="Use this free json to json schema to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
