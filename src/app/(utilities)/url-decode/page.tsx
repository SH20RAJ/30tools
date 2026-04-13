import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free URL Decode Online - No Signup | 30tools",
  description: "Free utility tools: URL Decode. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browser for",
  keywords: ["url decode free","url decode online","low competition url decode tool"],
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
  return <PremiumToolPage toolId="url-decode" />;
}