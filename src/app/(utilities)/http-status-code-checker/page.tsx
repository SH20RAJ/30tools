import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "HTTP Status Code Checker | Free Online Tool",
  description: "Use this free http status code checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/http-status-code-checker",
  },
};

export default function HttpStatusCodeCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="http-status-code-checker"
      title="HTTP Status Code Checker"
      description="Use this free http status code checker to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
