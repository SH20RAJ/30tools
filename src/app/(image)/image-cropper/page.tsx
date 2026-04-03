import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Image Cropper | Free Online Tool",
  description: "Use this free image cropper to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/image-cropper",
  },
};

export default function ImageCropperPage() {
  return (
    <ToolPlaceholderPage
      toolId="image-cropper"
      title="Image Cropper"
      description="Use this free image cropper to get fast and reliable results with clean output."
      categoryName="Image Tools"
      categorySlug="image-tools"
    />
  );
}
