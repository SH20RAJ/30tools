import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Domain to IP Converter Online - No Signup | 30tools",
  description: "Free utility tools: Domain to IP Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your",
  keywords: ["domain to ip converter free","domain to ip converter online","low competition domain to ip tool"],
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
  return <PremiumToolPage toolId="domain-to-ip-converter" />;
}