import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free What Is My Screen Resolution Online - No Signup | 30tools",
  description: "Free utility tools: What Is My Screen Resolution. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally i",
  keywords: ["what is my screen resolution free","what is my screen resolution online","low competition what is my screen resolution tool"],
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
  return <PremiumToolPage toolId="what-is-my-screen-resolution" />;
}