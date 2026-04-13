import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free YouTube Subscribe Link Generator Online - No Signup | 30tools",
  description: "YouTube tools: YouTube Subscribe Link Generator. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your",
  keywords: ["youtube subscribe link generator free","youtube subscribe link generator online","low competition youtube subscribe link tool"],
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
  return <PremiumToolPage toolId="youtube-subscribe-link-generator" />;
}