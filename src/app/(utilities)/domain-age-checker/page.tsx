import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Domain Age Checker Online - No Signup | 30tools",
  description: "Free utility tools: Domain Age Checker. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your bro",
  keywords: ["domain age checker free","domain age checker online","low competition domain age tool"],
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
  return <PremiumToolPage toolId="domain-age-checker" />;
}