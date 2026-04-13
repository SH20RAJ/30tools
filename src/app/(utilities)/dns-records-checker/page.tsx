import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free DNS Records Checker Online - No Signup | 30tools",
  description: "Free utility tools: DNS Records Checker. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your br",
  keywords: ["dns records checker free","dns records checker online","low competition dns records tool"],
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
  return <PremiumToolPage toolId="dns-records-checker" />;
}