import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Convert to ICO | Free Online Tool",
  description: "Use this free convert to ico to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/convert-to-ico",
  },
};

export default function ConvertToIcoPage() {
  return (
    <ToolPlaceholderPage
      toolId="convert-to-ico"
      title="Convert to ICO"
      description="Use this free convert to ico to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
