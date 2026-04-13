import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Paypal Fee Calculator Online - No Signup | 30tools",
  description: "Free utility tools: Paypal Fee Calculator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your ",
  keywords: ["paypal fee calculator free","paypal fee calculator online","low competition paypal fee calculator tool"],
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
  return <PremiumToolPage toolId="paypal-fee-calculator" />;
}