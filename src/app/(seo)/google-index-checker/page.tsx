import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Google Index Checker Online - No Signup | 30tools",
  description: "SEO tools: Google Index Checker. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your browser",
  keywords: ["google index checker free","google index checker online","low competition google index tool"],
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
  return <PremiumToolPage toolId="google-index-checker" />;
}