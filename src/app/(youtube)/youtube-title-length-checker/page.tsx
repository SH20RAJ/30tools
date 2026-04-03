import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Title Length Checker | Free Online Tool",
  description: "Use this free youtube title length checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-title-length-checker",
  },
};

export default function YoutubeTitleLengthCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-title-length-checker"
      title="YouTube Title Length Checker"
      description="Use this free youtube title length checker to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
