import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Base64 Encode Online - No Signup | 30tools",
  description: "Free utility tools: Base64 Encode. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browser ",
  keywords: ["base64 encode free","base64 encode online","low competition base64 encode tool"],
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
  return <PremiumToolPage toolId="base64-encode" />;
}