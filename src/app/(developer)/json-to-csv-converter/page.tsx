import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free JSON to CSV Converter Online - No Signup | 30tools",
  description: "Developer tools: JSON to CSV Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your b",
  keywords: ["json to csv converter free","json to csv converter online","low competition json to csv tool"],
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
  return <PremiumToolPage toolId="json-to-csv-converter" />;
}