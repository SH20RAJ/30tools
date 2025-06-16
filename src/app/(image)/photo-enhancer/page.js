import PhotoEnhancer from "@/components/tools/image/PhotoEnhancerTool";

export const metadata = {
  title: 'Photo Enhancer - AI Image Enhancement | 30tools',
  description: 'Enhance photo quality with AI-powered image enhancement. Improve sharpness, reduce noise, and enhance colors automatically.',
  keywords: 'photo enhancer, AI image enhancement, photo quality, image upscaling, noise reduction, sharpness',
  openGraph: {
    title: 'Photo Enhancer - AI Image Enhancement | 30tools',
    description: 'Enhance photo quality with AI-powered image enhancement.',
    type: 'website',
  },
};

export default function PhotoEnhancerPage() {
  return <PhotoEnhancer />;
}
