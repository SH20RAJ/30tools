import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Octal to HEX Converter Online - No Signup | 30tools",
  description: "Developer tools: Octal to HEX Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your ",
  keywords: ["octal to hex converter free","octal to hex converter online","low competition octal to hex tool"],
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
  return <PremiumToolPage toolId="octal-to-hex-converter" />;
}