import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Image Enlarger | Free Online Tool",
  description: "Use this free image enlarger to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/image-enlarger",
  },
};

export default function ImageEnlargerPage() {
  return (
    <ToolPlaceholderPage
      toolId="image-enlarger"
      title="Image Enlarger"
      description="Use this free image enlarger to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
