"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical" | "autorelaxed";
  layout?: string;
  className?: string;
  label?: boolean;
}

// Publisher account (ca-pub-1828915420581549). Hardcoded by request — no env vars.
const ADSENSE_CLIENT = "ca-pub-1828915420581549";

export default function AdSlot({
  slot,
  format = "auto",
  layout,
  className = "",
  label = false,
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  // Reserve more vertical space for multiplex (autorelaxed) grids to avoid layout shift.
  const reservedHeight = format === "autorelaxed" ? 280 : 100;

  useEffect(() => {
    if (!slot || isLoaded.current) return;

    try {
      // @ts-ignore
      if (typeof window !== "undefined" && window.adsbygoogle) {
        // @ts-ignore
        window.adsbygoogle.push({});
        isLoaded.current = true;
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <div
      className={`relative w-full my-6 flex flex-col items-center justify-center overflow-hidden bg-muted/5 rounded-lg border border-border/10 ${className}`}
      style={{ minHeight: `${reservedHeight}px` }}
    >
      {label && (
        <span className="absolute top-1 left-2 text-[10px] text-muted-foreground uppercase tracking-wider font-semibold z-10">
          Advertisement
        </span>
      )}
      <ins
        ref={adRef}
        className="adsbygoogle w-full block"
        style={{ display: "block", minHeight: `${reservedHeight}px` }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { "data-ad-layout": layout } : {})}
        {...(format !== "autorelaxed" ? { "data-full-width-responsive": "true" } : {})}
      />
    </div>
  );
}
