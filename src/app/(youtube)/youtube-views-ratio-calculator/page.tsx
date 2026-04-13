import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free YouTube Views Ratio Calculator Online - No Signup | 30tools",
  description: "YouTube tools: YouTube Views Ratio Calculator. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your b",
  keywords: ["youtube views ratio calculator free","youtube views ratio calculator online","low competition youtube views ratio calculator tool"],
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
  return <PremiumToolPage toolId="youtube-views-ratio-calculator" />;
}