import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Roman Numerals to Number Online - No Signup | 30tools",
  description: "Free utility tools: Roman Numerals to Number. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in yo",
  keywords: ["roman numerals to number free","roman numerals to number online","low competition roman numerals to number tool"],
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
  return <PremiumToolPage toolId="roman-numerals-to-number" />;
}