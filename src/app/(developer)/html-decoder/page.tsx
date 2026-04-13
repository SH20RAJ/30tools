import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free HTML Decoder Online - No Signup | 30tools",
  description: "Developer tools: HTML Decoder. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser fo",
  keywords: ["html decoder free","html decoder online","low competition html decoder tool"],
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
  return <PremiumToolPage toolId="html-decoder" />;
}