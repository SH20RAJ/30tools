import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Whois Domain Lookup Online - No Signup | 30tools",
  description: "Free utility tools: Whois Domain Lookup. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your br",
  keywords: ["whois domain lookup free","whois domain lookup online","low competition whois domain lookup tool"],
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
  return <PremiumToolPage toolId="whois-domain-lookup" />;
}