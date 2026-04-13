import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Article Rewriter Online - No Signup | 30tools",
  description: "Free text tools: Article Rewriter. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your brows",
  keywords: ["article rewriter free","article rewriter online","low competition article rewriter tool"],
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
  return <PremiumToolPage toolId="article-rewriter" />;
}