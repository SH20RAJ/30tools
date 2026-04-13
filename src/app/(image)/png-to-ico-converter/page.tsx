import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free PNG to ICO Converter Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free PNG to ICO Converter. No registration required. Fast, secure, browser-based processing. All processing happens lo",
  keywords: ["png to ico converter free","png to ico converter online","low competition png to ico tool"],
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
  return <PremiumToolPage toolId="png-to-ico-converter" />;
}