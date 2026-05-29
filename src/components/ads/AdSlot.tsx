"use client";

import { useEffect, useRef, useState } from "react";

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
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const [unfilled, setUnfilled] = useState(false);

  // Reserve more vertical space for multiplex (autorelaxed) grids to avoid layout shift.
  const reservedHeight = format === "autorelaxed" ? 280 : 100;

  useEffect(() => {
    if (!slot || pushed.current) return;
    pushed.current = true;

    try {
      // Queue the ad request. The adsbygoogle script is loaded lazily, so it may
      // not exist yet when this effect runs — pushing to the array stub queues
      // the request and AdSense drains the queue once the script loads.
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }

    // If the slot stays unfilled (no ad inventory for this view), collapse the
    // reserved box so we don't show an empty bordered placeholder.
    const timer = setTimeout(() => {
      if (insRef.current?.getAttribute("data-ad-status") === "unfilled") {
        setUnfilled(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [slot]);

  if (!slot || unfilled) return null;

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
        ref={insRef}
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
