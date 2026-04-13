import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free FAQ Schema Generator Online - No Signup | 30tools",
  description: "Free utility tools: FAQ Schema Generator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your b",
  keywords: ["faq schema generator free","faq schema generator online","low competition faq schema tool"],
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
  return <PremiumToolPage toolId="faq-schema-generator" />;
}