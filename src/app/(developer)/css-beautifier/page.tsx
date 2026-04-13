import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free CSS Beautifier Online - No Signup | 30tools",
  description: "Developer tools: CSS Beautifier. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser ",
  keywords: ["css beautifier free","css beautifier online","low competition css beautifier tool"],
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
  return <PremiumToolPage toolId="css-beautifier" />;
}