import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JSON Viewer | Free Online Tool",
  description: "Use this free json viewer to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/json-viewer",
  },
};

export default function JsonViewerPage() {
  return (
    <ToolPlaceholderPage
      toolId="json-viewer"
      title="JSON Viewer"
      description="Use this free json viewer to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
