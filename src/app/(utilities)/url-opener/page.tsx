import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "URL Opener | Free Online Tool",
  description: "Use this free url opener to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/url-opener",
  },
};

export default function UrlOpenerPage() {
  return (
    <ToolPlaceholderPage
      toolId="url-opener"
      title="URL Opener"
      description="Use this free url opener to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
