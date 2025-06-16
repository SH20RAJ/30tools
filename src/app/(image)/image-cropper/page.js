import ImageCropper from "@/components/tools/image/ImageCropperTool";

export const metadata = {
  title: 'Image Cropper - Crop Images Online | 30tools',
  description: 'Crop images to specific dimensions or aspect ratios. Perfect for social media, profiles, and custom sizing needs.',
  keywords: 'image cropper, crop images, aspect ratio, resize, dimensions, social media sizing',
  openGraph: {
    title: 'Image Cropper - Crop Images Online | 30tools',
    description: 'Crop images to specific dimensions or aspect ratios.',
    type: 'website',
  },
};

export default function ImageCropperPage() {
  return <ImageCropper />;
}
