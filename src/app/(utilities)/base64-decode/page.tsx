import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Base64 Decode | Free Online Tool",
  description: "Use this free base64 decode to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/base64-decode",
  },
};

export default function Base64DecodePage() {
  return (
    <ToolPlaceholderPage
      toolId="base64-decode"
      title="Base64 Decode"
      description="Use this free base64 decode to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
