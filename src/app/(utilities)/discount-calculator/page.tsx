import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Discount Calculator Online - No Signup | 30tools",
  description: "Free utility tools: Discount Calculator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your br",
  keywords: ["discount calculator free","discount calculator online","low competition discount calculator tool"],
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
  return <PremiumToolPage toolId="discount-calculator" />;
}