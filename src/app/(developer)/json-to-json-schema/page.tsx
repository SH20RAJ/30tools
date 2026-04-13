import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free JSON to JSON Schema Online - No Signup | 30tools",
  description: "Developer tools: JSON to JSON Schema. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your bro",
  keywords: ["json to json schema free","json to json schema online","low competition json to json schema tool"],
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
  return <PremiumToolPage toolId="json-to-json-schema" />;
}