import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Percentage Calculator Online - No Signup | 30tools",
  description: "Free utility tools: Percentage Calculator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your ",
  keywords: ["percentage calculator free","percentage calculator online","low competition percentage calculator tool"],
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
  return <PremiumToolPage toolId="percentage-calculator" />;
}