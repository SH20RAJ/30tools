import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Convert VTT to SRT | Free Online Tool",
  description: "Use this free convert vtt to srt to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/convert-vtt-to-srt",
  },
};

export default function ConvertVttToSrtPage() {
  return (
    <ToolPlaceholderPage
      toolId="convert-vtt-to-srt"
      title="Convert VTT to SRT"
      description="Use this free convert vtt to srt to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
