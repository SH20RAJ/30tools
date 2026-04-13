import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free JPG to BMP Converter Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free JPG to BMP Converter. No registration required. Fast, secure, browser-based processing. All processing happens lo",
  keywords: ["jpg to bmp converter free","jpg to bmp converter online","low competition jpg to bmp tool"],
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
  return <PremiumToolPage toolId="jpg-to-bmp-converter" />;
}