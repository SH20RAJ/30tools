import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free HEX to Text Converter Online - No Signup | 30tools",
  description: "Developer tools: HEX to Text Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your b",
  keywords: ["hex to text converter free","hex to text converter online","low competition hex to text tool"],
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
  return <PremiumToolPage toolId="hex-to-text-converter" />;
}