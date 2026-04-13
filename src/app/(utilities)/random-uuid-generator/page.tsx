import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Random UUID Generator Online - No Signup | 30tools",
  description: "Free utility tools: Random UUID Generator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your ",
  keywords: ["random uuid generator free","random uuid generator online","low competition random uuid tool"],
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
  return <PremiumToolPage toolId="random-uuid-generator" />;
}