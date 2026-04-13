import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Open Graph Checker Online - No Signup | 30tools",
  description: "SEO tools: Open Graph Checker. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your browser f",
  keywords: ["open graph checker free","open graph checker online","low competition open graph tool"],
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
  return <PremiumToolPage toolId="open-graph-checker" />;
}