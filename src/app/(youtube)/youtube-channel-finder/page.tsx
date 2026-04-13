import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free YouTube Channel Finder Online - No Signup | 30tools",
  description: "YouTube tools: YouTube Channel Finder. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your browser f",
  keywords: ["youtube channel finder free","youtube channel finder online","low competition youtube channel finder tool"],
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
  return <PremiumToolPage toolId="youtube-channel-finder" />;
}