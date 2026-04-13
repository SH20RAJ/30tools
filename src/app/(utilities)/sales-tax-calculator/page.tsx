import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Sales Tax Calculator Online - No Signup | 30tools",
  description: "Free utility tools: Sales Tax Calculator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your b",
  keywords: ["sales tax calculator free","sales tax calculator online","low competition sales tax calculator tool"],
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
  return <PremiumToolPage toolId="sales-tax-calculator" />;
}