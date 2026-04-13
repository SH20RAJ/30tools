import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free WebP to PNG Converter Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free WebP to PNG Converter. No registration required. Fast, secure, browser-based processing. All processing happens l",
  keywords: ["webp to png converter free","webp to png converter online","low competition webp to png tool"],
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
  return <PremiumToolPage toolId="webp-to-png-converter" />;
}