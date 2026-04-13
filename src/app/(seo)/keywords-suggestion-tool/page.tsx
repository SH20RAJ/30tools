import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Keywords Suggestion Tool Online - No Signup | 30tools",
  description: "SEO tools: Keywords Suggestion Tool. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your bro",
  keywords: ["keywords suggestion tool free","keywords suggestion tool online","low competition keywords suggestion tool tool"],
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
  return <PremiumToolPage toolId="keywords-suggestion-tool" />;
}