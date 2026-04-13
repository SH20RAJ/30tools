import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free RGB to HEX Converter Online - No Signup | 30tools",
  description: "Free utility tools: RGB to HEX Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your b",
  keywords: ["rgb to hex converter free","rgb to hex converter online","low competition rgb to hex tool"],
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
  return <PremiumToolPage toolId="rgb-to-hex-converter" />;
}