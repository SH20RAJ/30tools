import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Binary to HEX Converter Online - No Signup | 30tools",
  description: "Developer tools: Binary to HEX Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your",
  keywords: ["binary to hex converter free","binary to hex converter online","low competition binary to hex tool"],
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
  return <PremiumToolPage toolId="binary-to-hex-converter" />;
}