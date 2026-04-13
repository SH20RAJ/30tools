import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free JSON Editor Online - No Signup | 30tools",
  description: "Developer tools: JSON Editor. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser for",
  keywords: ["json editor free","json editor online","low competition json editor tool"],
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
  return <PremiumToolPage toolId="json-editor" />;
}