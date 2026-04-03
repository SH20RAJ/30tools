import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Region Restriction Checker | Free Online Tool",
  description: "Use this free youtube region restriction checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-region-restriction-checker",
  },
};

export default function YoutubeRegionRestrictionCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-region-restriction-checker"
      title="YouTube Region Restriction Checker"
      description="Use this free youtube region restriction checker to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
