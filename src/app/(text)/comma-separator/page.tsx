import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Comma Separator Online - No Signup | 30tools",
  description: "Free text tools: Comma Separator. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your browse",
  keywords: ["comma separator free","comma separator online","low competition comma separator tool"],
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
  return <PremiumToolPage toolId="comma-separator" />;
}