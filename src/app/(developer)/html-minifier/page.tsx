import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free HTML Minifier Online - No Signup | 30tools",
  description: "Developer tools: HTML Minifier. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser f",
  keywords: ["html minifier free","html minifier online","low competition html minifier tool"],
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
  return <PremiumToolPage toolId="html-minifier" />;
}