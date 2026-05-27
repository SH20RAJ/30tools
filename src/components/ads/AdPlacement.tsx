"use client";

import AdSlot from "./AdSlot";

interface AdPlacementProps {
  placement: "after-hero" | "before-tool" | "after-tool" | "in-content" | "sidebar" | "footer";
  pageType?: "tool" | "blog" | "category" | "home";
  slug?: string;
  category?: string;
}

const RISKY_SLUGS = [
  "downloader", "saver", "mp3-from", "mp4-to-mp3", "video-downloader", 
  "no-watermark", "story-downloader", "reels-saver", 
  "fake-chat-generator", "credit-card-generator"
];

const RISKY_CATEGORIES = [
  "downloaders", "youtube", "social", "video", "youtube-redirects"
];

export default function AdPlacement({
  placement,
  pageType = "tool",
  slug = "",
  category = "",
}: AdPlacementProps) {
  // Check if page is risky
  const isRiskyCategory = category && RISKY_CATEGORIES.some(c => category.toLowerCase().includes(c));
  const isRiskySlug = slug && RISKY_SLUGS.some(s => slug.toLowerCase().includes(s));
  
  if (isRiskyCategory || isRiskySlug) {
    return null;
  }

  let slot = "";

  switch (placement) {
    case "after-hero":
    case "before-tool":
      slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP || "";
      break;
    case "after-tool":
      slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_MID || "";
      break;
    case "in-content":
      slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE || "";
      break;
    case "sidebar":
    case "footer":
      slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM || "";
      break;
  }

  // Do not render if the env variable is missing or empty
  if (!slot) return null;

  return <AdSlot slot={slot} label={true} />;
}
