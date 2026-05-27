"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  layout?: string;
  className?: string;
  label?: boolean;
}

export default function AdSlot({
  slot,
  format = "auto",
  layout,
  className = "",
  label = false,
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-1828915420581549";

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
    <div className={`relative min-h-[100px] w-full my-6 flex flex-col items-center justify-center overflow-hidden bg-muted/5 rounded-lg border border-border/10 ${className}`}>
      {label && (
        <span className="absolute top-1 left-2 text-[10px] text-muted-foreground uppercase tracking-wider font-semibold z-10">
          Advertisement
        </span>
      )}
      <ins
        ref={adRef}
        className="adsbygoogle w-full block"
        style={{ display: "block", minHeight: "100px" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { "data-ad-layout": layout } : {})}
        data-full-width-responsive="true"
      />
    </div>
  );
}
