import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free YouTube Title Length Checker Online - No Signup | 30tools",
  description: "YouTube tools: YouTube Title Length Checker. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your bro",
  keywords: ["youtube title length checker free","youtube title length checker online","low competition youtube title length tool"],
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
  return <PremiumToolPage toolId="youtube-title-length-checker" />;
}