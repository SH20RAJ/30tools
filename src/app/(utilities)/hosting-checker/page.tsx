import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Hosting Checker Online - No Signup | 30tools",
  description: "Free utility tools: Hosting Checker. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browse",
  keywords: ["hosting checker free","hosting checker online","low competition hosting tool"],
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
  return <PremiumToolPage toolId="hosting-checker" />;
}