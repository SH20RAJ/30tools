import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Google Index Checker | Free Online Tool",
  description: "Use this free google index checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/google-index-checker",
  },
};

export default function GoogleIndexCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="google-index-checker"
      title="Google Index Checker"
      description="Use this free google index checker to get fast and reliable results with clean output."
      categoryName="SEO Tools"
      categorySlug="seo-tools"
    />
  );
}
