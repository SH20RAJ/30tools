import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Comment Picker | Free Online Tool",
  description: "Use this free youtube comment picker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-comment-picker",
  },
};

export default function YoutubeCommentPickerPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-comment-picker"
      title="YouTube Comment Picker"
      description="Use this free youtube comment picker to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
