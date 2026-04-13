import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Volumetric Flow Rate Converter Online - No Signup | 30tools",
  description: "Free utility tools: Volumetric Flow Rate Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally",
  keywords: ["volumetric flow rate converter free","volumetric flow rate converter online","low competition volumetric flow rate tool"],
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
  return <PremiumToolPage toolId="volumetric-flow-rate-converter" />;
}