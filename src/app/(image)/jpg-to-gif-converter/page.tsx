import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free JPG to GIF Converter Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free JPG to GIF Converter. No registration required. Fast, secure, browser-based processing. All processing happens lo",
  keywords: ["jpg to gif converter free","jpg to gif converter online","low competition jpg to gif tool"],
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
  return <PremiumToolPage toolId="jpg-to-gif-converter" />;
}