import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Power Converter Online - No Signup | 30tools",
  description: "Free utility tools: Power Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browse",
  keywords: ["power converter free","power converter online","low competition power tool"],
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
  return <PremiumToolPage toolId="power-converter" />;
}