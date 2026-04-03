import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "URL Encode | Free Online Tool",
  description: "Use this free url encode to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/url-encode",
  },
};

export default function UrlEncodePage() {
  return (
    <ToolPlaceholderPage
      toolId="url-encode"
      title="URL Encode"
      description="Use this free url encode to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
