import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Meta Tag Generator Online - No Signup | 30tools",
  description: "SEO tools: Meta Tag Generator. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your browser f",
  keywords: ["meta tag generator free","meta tag generator online","low competition meta tag tool"],
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
  return <PremiumToolPage toolId="meta-tag-generator" />;
}