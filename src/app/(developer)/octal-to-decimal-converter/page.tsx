import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Octal to Decimal Converter Online - No Signup | 30tools",
  description: "Developer tools: Octal to Decimal Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in y",
  keywords: ["octal to decimal converter free","octal to decimal converter online","low competition octal to decimal tool"],
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
  return <PremiumToolPage toolId="octal-to-decimal-converter" />;
}