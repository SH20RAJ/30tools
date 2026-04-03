import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "URL Decode | Free Online Tool",
  description: "Use this free url decode to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/url-decode",
  },
};

export default function UrlDecodePage() {
  return (
    <ToolPlaceholderPage
      toolId="url-decode"
      title="URL Decode"
      description="Use this free url decode to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
