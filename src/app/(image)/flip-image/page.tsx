import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Flip Image | Free Online Tool",
  description: "Use this free flip image to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/flip-image",
  },
};

export default function FlipImagePage() {
  return (
    <ToolPlaceholderPage
      toolId="flip-image"
      title="Flip Image"
      description="Use this free flip image to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
