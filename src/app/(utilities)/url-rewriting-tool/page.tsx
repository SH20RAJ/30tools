import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free URL Rewriting Tool Online - No Signup | 30tools",
  description: "Free utility tools: URL Rewriting Tool. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your bro",
  keywords: ["url rewriting tool free","url rewriting tool online","low competition url rewriting tool tool"],
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
  return <PremiumToolPage toolId="url-rewriting-tool" />;
}