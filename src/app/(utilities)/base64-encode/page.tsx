import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Base64 Encode | Free Online Tool",
  description: "Use this free base64 encode to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/base64-encode",
  },
};

export default function Base64EncodePage() {
  return (
    <ToolPlaceholderPage
      toolId="base64-encode"
      title="Base64 Encode"
      description="Use this free base64 encode to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
