import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free JPG Converter Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free JPG Converter. No registration required. Fast, secure, browser-based processing. All processing happens locally i",
  keywords: ["jpg converter free","jpg converter online","low competition jpg tool"],
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
  return <PremiumToolPage toolId="jpg-converter" />;
}