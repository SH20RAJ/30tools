import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Google Cache Checker | Free Online Tool",
  description: "Use this free google cache checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/google-cache-checker",
  },
};

export default function GoogleCacheCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="google-cache-checker"
      title="Google Cache Checker"
      description="Use this free google cache checker to get fast and reliable results with clean output."
      categoryName="SEO Tools"
      categorySlug="seo-tools"
    />
  );
}
