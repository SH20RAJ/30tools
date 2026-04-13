import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Htaccess Redirect Generator Online - No Signup | 30tools",
  description: "Free utility tools: Htaccess Redirect Generator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in",
  keywords: ["htaccess redirect generator free","htaccess redirect generator online","low competition htaccess redirect tool"],
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
  return <PremiumToolPage toolId="htaccess-redirect-generator" />;
}