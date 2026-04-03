import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Rotate Image | Free Online Tool",
  description: "Use this free rotate image to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/rotate-image",
  },
};

export default function RotateImagePage() {
  return (
    <ToolPlaceholderPage
      toolId="rotate-image"
      title="Rotate Image"
      description="Use this free rotate image to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
