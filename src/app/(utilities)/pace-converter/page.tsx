import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Pace Converter Online - No Signup | 30tools",
  description: "Free utility tools: Pace Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browser",
  keywords: ["pace converter free","pace converter online","low competition pace tool"],
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
  return <PremiumToolPage toolId="pace-converter" />;
}