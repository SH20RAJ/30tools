import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Terms And Condition Generator Online - No Signup | 30tools",
  description: "Free utility tools: Terms And Condition Generator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally ",
  keywords: ["terms and condition generator free","terms and condition generator online","low competition terms and condition tool"],
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
  return <PremiumToolPage toolId="terms-and-condition-generator" />;
}