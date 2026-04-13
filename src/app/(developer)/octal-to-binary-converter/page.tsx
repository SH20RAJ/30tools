import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Octal to Binary Converter Online - No Signup | 30tools",
  description: "Developer tools: Octal to Binary Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in yo",
  keywords: ["octal to binary converter free","octal to binary converter online","low competition octal to binary tool"],
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
  return <PremiumToolPage toolId="octal-to-binary-converter" />;
}