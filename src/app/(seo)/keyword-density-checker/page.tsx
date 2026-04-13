import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Keyword Density Checker Online - No Signup | 30tools",
  description: "SEO tools: Keyword Density Checker. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your brow",
  keywords: ["keyword density checker free","keyword density checker online","low competition keyword density tool"],
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
  return <PremiumToolPage toolId="keyword-density-checker" />;
}