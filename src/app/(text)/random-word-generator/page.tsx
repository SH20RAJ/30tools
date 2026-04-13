import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Random Word Generator Online - No Signup | 30tools",
  description: "Free text tools: Random Word Generator. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your ",
  keywords: ["random word generator free","random word generator online","low competition random word tool"],
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
  return <PremiumToolPage toolId="random-word-generator" />;
}