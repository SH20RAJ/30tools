import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JSON Validator | Free Online Tool",
  description: "Use this free json validator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/json-validator",
  },
};

export default function JsonValidatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="json-validator"
      title="JSON Validator"
      description="Use this free json validator to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
