import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free PNG to BMP Converter Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free PNG to BMP Converter. No registration required. Fast, secure, browser-based processing. All processing happens lo",
  keywords: ["png to bmp converter free","png to bmp converter online","low competition png to bmp tool"],
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
  return <PremiumToolPage toolId="png-to-bmp-converter" />;
}