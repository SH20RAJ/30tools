import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free WordPress Theme Detector Online - No Signup | 30tools",
  description: "Free utility tools: WordPress Theme Detector. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in yo",
  keywords: ["wordpress theme detector free","wordpress theme detector online","low competition wordpress theme detector tool"],
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
  return <PremiumToolPage toolId="wordpress-theme-detector" />;
}