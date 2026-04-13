import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Decimal to Octal Converter Online - No Signup | 30tools",
  description: "Developer tools: Decimal to Octal Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in y",
  keywords: ["decimal to octal converter free","decimal to octal converter online","low competition decimal to octal tool"],
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
  return <PremiumToolPage toolId="decimal-to-octal-converter" />;
}