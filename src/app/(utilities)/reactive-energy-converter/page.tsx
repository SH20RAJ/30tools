import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Reactive Energy Converter Online - No Signup | 30tools",
  description: "Free utility tools: Reactive Energy Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in y",
  keywords: ["reactive energy converter free","reactive energy converter online","low competition reactive energy tool"],
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
  return <PremiumToolPage toolId="reactive-energy-converter" />;
}