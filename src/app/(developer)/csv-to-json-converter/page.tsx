import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free CSV to JSON Converter Online - No Signup | 30tools",
  description: "Developer tools: CSV to JSON Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your b",
  keywords: ["csv to json converter free","csv to json converter online","low competition csv to json tool"],
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
  return <PremiumToolPage toolId="csv-to-json-converter" />;
}