import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free YouTube Title Extractor Online - No Signup | 30tools",
  description: "YouTube tools: YouTube Title Extractor. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your browser ",
  keywords: ["youtube title extractor free","youtube title extractor online","low competition youtube title extractor tool"],
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
  return <PremiumToolPage toolId="youtube-title-extractor" />;
}