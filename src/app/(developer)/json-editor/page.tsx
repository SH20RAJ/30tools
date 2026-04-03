import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JSON Editor | Free Online Tool",
  description: "Use this free json editor to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/json-editor",
  },
};

export default function JsonEditorPage() {
  return (
    <ToolPlaceholderPage
      toolId="json-editor"
      title="JSON Editor"
      description="Use this free json editor to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
