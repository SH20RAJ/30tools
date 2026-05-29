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

// Real AdSense ad units for ca-pub-1828915420581549 (hardcoded by request).
// One responsive DISPLAY unit is reused for in-flow slots; the large
// "autorelaxed" multiplex grids are used ONCE per page (bottom/related) and
// split by page type so we never stack multiple grids on a single page.
const DISPLAY = { slot: "6845038159", format: "auto" as const };
const MULTIPLEX = {
  home: { slot: "4669751596", format: "autorelaxed" as const },
  blog: { slot: "9420953810", format: "autorelaxed" as const },
  tool: { slot: "8187863815", format: "autorelaxed" as const },
};

export default function AdPlacement({
  placement,
  pageType = "tool",
  slug = "",
  category = "",
}: AdPlacementProps) {
  // Account-safety guard: never serve ads on copyright/downloader/risky pages.
  const isRiskyCategory = category && RISKY_CATEGORIES.some(c => category.toLowerCase().includes(c));
  const isRiskySlug = slug && RISKY_SLUGS.some(s => slug.toLowerCase().includes(s));

  if (isRiskyCategory || isRiskySlug) {
    return null;
  }

  // Bottom/related slots get the single multiplex grid for this page type.
  if (placement === "sidebar" || placement === "footer") {
    const unit =
      pageType === "home" ? MULTIPLEX.home :
      pageType === "blog" ? MULTIPLEX.blog :
      MULTIPLEX.tool;
    return <AdSlot slot={unit.slot} format={unit.format} label={true} />;
  }

  // All in-flow placements use the responsive display unit.
  return <AdSlot slot={DISPLAY.slot} format={DISPLAY.format} label={true} />;
}
