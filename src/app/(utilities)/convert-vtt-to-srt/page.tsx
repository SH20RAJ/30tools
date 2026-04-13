import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Convert VTT to SRT Online - No Signup | 30tools",
  description: "Free utility tools: Convert VTT to SRT. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your bro",
  keywords: ["convert vtt to srt free","convert vtt to srt online","low competition convert vtt to srt tool"],
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
  return <PremiumToolPage toolId="convert-vtt-to-srt" />;
}