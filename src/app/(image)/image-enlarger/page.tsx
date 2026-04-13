import type { Metadata } from "next";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
  title: "Free Image Enlarger Online - No Signup | 30tools",
  description: "Convert, resize, and edit images with our free Image Enlarger. No registration required. Fast, secure, browser-based processing. All processing happens locally ",
  keywords: ["image enlarger free","image enlarger online","low competition image enlarger tool"],
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
  return <PremiumToolPage toolId="image-enlarger" />;
}