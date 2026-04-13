import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Server Status Checker Online - No Signup | 30tools",
  description: "Free utility tools: Server Status Checker. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your ",
  keywords: ["server status checker free","server status checker online","low competition server status tool"],
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
  return <PremiumToolPage toolId="server-status-checker" />;
}