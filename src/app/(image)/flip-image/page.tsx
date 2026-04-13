import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Flip Image Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free Flip Image. No registration required. Fast, secure, browser-based processing. All processing happens locally in y",
  keywords: ["flip image free","flip image online","low competition flip image tool"],
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
  return <PremiumToolPage toolId="flip-image" />;
}