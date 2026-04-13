import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free IP Address Lookup Online - No Signup | 30tools",
  description: "Free utility tools: IP Address Lookup. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your brow",
  keywords: ["ip address lookup free","ip address lookup online","low competition ip address lookup tool"],
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
  return <PremiumToolPage toolId="ip-address-lookup" />;
}