import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Number to Word Converter Online - No Signup | 30tools",
  description: "Free text tools: Number to Word Converter. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in yo",
  keywords: ["number to word converter free","number to word converter online","low competition number to word tool"],
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
  return <PremiumToolPage toolId="number-to-word-converter" />;
}