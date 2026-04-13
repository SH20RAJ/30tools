import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free JPG to WebP Converter Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free JPG to WebP Converter. No registration required. Fast, secure, browser-based processing. All processing happens l",
  keywords: ["jpg to webp converter free","jpg to webp converter online","low competition jpg to webp tool"],
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
  return <PremiumToolPage toolId="jpg-to-webp-converter" />;
}