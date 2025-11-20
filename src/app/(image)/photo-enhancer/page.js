import PhotoEnhancer from "@/components/tools/image/PhotoEnhancerTool";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";

export const metadata = {
  title: "Photo Enhancer - AI Image Enhancement | 30tools",
  description:
    "Enhance photo quality with AI-powered image enhancement. Improve sharpness, reduce noise, and enhance colors automatically.",
  keywords:
    "photo enhancer, AI image enhancement, photo quality, image upscaling, noise reduction, sharpness",
  openGraph: {
    title: "Photo Enhancer - AI Image Enhancement | 30tools",
    description: "Enhance photo quality with AI-powered image enhancement.",
    type: "website",
    images: [
      {
        url: "/og-images/photo-enhancer.jpg",
        width: 1200,
        height: 630,
        alt: "Photo Enhancer Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Enhancer - Free Image Tool | Professional Quality",
    description:
      "Professional photo enhancer for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
    images: ["/og-images/photo-enhancer.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/photo-enhancer",
  },
};

export default function PhotoEnhancerPage() {
  return (
    <ToolSEOLayout toolId="photo-enhancer">
      <PhotoEnhancer />
    </ToolSEOLayout>
  );
}
