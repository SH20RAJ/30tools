import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free YouTube Region Restriction Checker Online - No Signup | 30tools",
  description: "YouTube tools: YouTube Region Restriction Checker. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in yo",
  keywords: ["youtube region restriction checker free","youtube region restriction checker online","low competition youtube region restriction tool"],
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
  return <PremiumToolPage toolId="youtube-region-restriction-checker" />;
}