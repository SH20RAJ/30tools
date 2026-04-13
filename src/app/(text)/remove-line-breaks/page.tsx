import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Remove Line Breaks Online - No Signup | 30tools",
  description: "Free text tools: Remove Line Breaks. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your bro",
  keywords: ["remove line breaks free","remove line breaks online","low competition remove line breaks tool"],
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
  return <PremiumToolPage toolId="remove-line-breaks" />;
}