import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Base64 to Image Converter Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free Base64 to Image Converter. No registration required. Fast, secure, browser-based processing. All processing happe",
  keywords: ["base64 to image converter free","base64 to image converter online","low competition base64 to image tool"],
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
  return <PremiumToolPage toolId="base64-to-image-converter" />;
}