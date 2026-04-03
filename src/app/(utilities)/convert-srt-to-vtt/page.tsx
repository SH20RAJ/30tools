import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Convert SRT to VTT | Free Online Tool",
  description: "Use this free convert srt to vtt to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/convert-srt-to-vtt",
  },
};

export default function ConvertSrtToVttPage() {
  return (
    <ToolPlaceholderPage
      toolId="convert-srt-to-vtt"
      title="Convert SRT to VTT"
      description="Use this free convert srt to vtt to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
