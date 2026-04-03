import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Get HTTP Headers | Free Online Tool",
  description: "Use this free get http headers to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/get-http-headers",
  },
};

export default function GetHttpHeadersPage() {
  return (
    <ToolPlaceholderPage
      toolId="get-http-headers"
      title="Get HTTP Headers"
      description="Use this free get http headers to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
