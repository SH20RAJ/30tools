import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Octal to Text Converter Online - No Signup | 30tools",
  description: "Developer tools: Octal to Text Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your",
  keywords: ["octal to text converter free","octal to text converter online","low competition octal to text tool"],
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
  return <PremiumToolPage toolId="octal-to-text-converter" />;
}