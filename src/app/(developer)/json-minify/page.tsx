import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JSON Minify | Free Online Tool",
  description: "Use this free json minify to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/json-minify",
  },
};

export default function JsonMinifyPage() {
  return (
    <ToolPlaceholderPage
      toolId="json-minify"
      title="JSON Minify"
      description="Use this free json minify to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
