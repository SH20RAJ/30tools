import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Weight Converter Online - No Signup | 30tools",
  description: "Free utility tools: Weight Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your brows",
  keywords: ["weight converter free","weight converter online","low competition weight tool"],
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
  return <PremiumToolPage toolId="weight-converter" />;
}