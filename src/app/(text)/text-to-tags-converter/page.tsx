import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Text to Tags Converter Online - No Signup | 30tools",
  description: "Free text tools: Text to Tags Converter. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your",
  keywords: ["text to tags converter free","text to tags converter online","low competition text to tags tool"],
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
  return <PremiumToolPage toolId="text-to-tags-converter" />;
}