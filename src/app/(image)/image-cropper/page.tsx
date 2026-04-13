import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Image Cropper Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free Image Cropper. No registration required. Fast, secure, browser-based processing. All processing happens locally i",
  keywords: ["image cropper free","image cropper online","low competition image cropper tool"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ToolPage() {
  return <PremiumToolPage toolId="image-cropper" />;
}