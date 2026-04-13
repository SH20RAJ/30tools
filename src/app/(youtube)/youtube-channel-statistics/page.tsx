import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free YouTube Channel Statistics Online - No Signup | 30tools",
  description: "YouTube tools: YouTube Channel Statistics. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your brows",
  keywords: ["youtube channel statistics free","youtube channel statistics online","low competition youtube channel statistics tool"],
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
  return <PremiumToolPage toolId="youtube-channel-statistics" />;
}