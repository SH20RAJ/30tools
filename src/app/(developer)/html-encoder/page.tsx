import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "HTML Encoder | Free Online Tool",
  description: "Use this free html encoder to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/html-encoder",
  },
};

export default function HtmlEncoderPage() {
  return (
    <ToolPlaceholderPage
      toolId="html-encoder"
      title="HTML Encoder"
      description="Use this free html encoder to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
