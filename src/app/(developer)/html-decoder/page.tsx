import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "HTML Decoder | Free Online Tool",
  description: "Use this free html decoder to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/html-decoder",
  },
};

export default function HtmlDecoderPage() {
  return (
    <ToolPlaceholderPage
      toolId="html-decoder"
      title="HTML Decoder"
      description="Use this free html decoder to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
