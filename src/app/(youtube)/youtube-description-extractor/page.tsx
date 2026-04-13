import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free YouTube Description Extractor Online - No Signup | 30tools",
  description: "YouTube tools: YouTube Description Extractor. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your br",
  keywords: ["youtube description extractor free","youtube description extractor online","low competition youtube description extractor tool"],
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
  return <PremiumToolPage toolId="youtube-description-extractor" />;
}