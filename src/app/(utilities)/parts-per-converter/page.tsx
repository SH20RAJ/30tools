import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Parts Per Converter Online - No Signup | 30tools",
  description: "Free utility tools: Parts Per Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your br",
  keywords: ["parts per converter free","parts per converter online","low competition parts per tool"],
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
  return <PremiumToolPage toolId="parts-per-converter" />;
}