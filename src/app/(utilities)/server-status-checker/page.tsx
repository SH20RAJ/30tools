import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Server Status Checker | Free Online Tool",
  description: "Use this free server status checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/server-status-checker",
  },
};

export default function ServerStatusCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="server-status-checker"
      title="Server Status Checker"
      description="Use this free server status checker to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
