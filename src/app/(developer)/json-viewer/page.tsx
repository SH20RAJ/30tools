import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free JSON Viewer Online - No Signup | 30tools",
  description: "Developer tools: JSON Viewer. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser for",
  keywords: ["json viewer free","json viewer online","low competition json viewer tool"],
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
  return <PremiumToolPage toolId="json-viewer" />;
}