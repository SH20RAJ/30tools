import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free JavaScript DeObfuscator Online - No Signup | 30tools",
  description: "Developer tools: JavaScript DeObfuscator. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your",
  keywords: ["javascript deobfuscator free","javascript deobfuscator online","low competition javascript deobfuscator tool"],
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
  return <PremiumToolPage toolId="javascript-deobfuscator" />;
}