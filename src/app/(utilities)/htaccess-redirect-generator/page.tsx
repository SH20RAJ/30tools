import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Htaccess Redirect Generator | Free Online Tool",
  description: "Use this free htaccess redirect generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/htaccess-redirect-generator",
  },
};

export default function HtaccessRedirectGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="htaccess-redirect-generator"
      title="Htaccess Redirect Generator"
      description="Use this free htaccess redirect generator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
