"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";

export default function EmbedPlayer({ player, videoId }) {
  const searchParams = useSearchParams();
  const autoplay = searchParams?.get("autoplay") === "1";
  const _loop = searchParams?.get("loop") === "1";
  const controls = searchParams?.get("controls") !== "0";
  const _theme = searchParams?.get("theme") || "dark";
  const start = searchParams?.get("start") || "0";

  useEffect(() => {
    // Nothing fancy: For now, we just leave the page to render an iframe
    // If advanced player integration is required, dynamic imports and
    // initialization of player libraries can be added here.
  }, [player, videoId, searchParams]);

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&controls=${controls ? 1 : 0}&start=${start}&rel=0`;

  // Render the appropriate player wrapper: For now, use an iframe wrapper
  // with minimal chrome, allowing the chosen player's scripts to be loaded
  return (
    <div style={{ width: "100%", maxWidth: "1280px" }}>
      {/* Load the player CDN only if necessary. Use the player's own wrappers later. */}
      {player === "plyr" && (
        <Script
          src="https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.min.js"
          strategy="beforeInteractive"
        />
      )}
      {player === "videojs" && (
        <Script
          src="https://vjs.zencdn.net/8.2.4/video.min.js"
          strategy="beforeInteractive"
        />
      )}
      {player === "fluid" && (
        <Script
          src="https://cdn.jsdelivr.net/npm/fluid-player@6.3.0/dist/fluidplayer.min.js"
          strategy="beforeInteractive"
        />
      )}
      {player === "mediaelement" && (
        <Script
          src="https://cdn.jsdelivr.net/npm/mediaelement@4.2.16/build/mediaelement-and-player.min.js"
          strategy="beforeInteractive"
        />
      )}

      {/* Basic iframe fallback — fully responsive */}
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src={src}
          title={`embedded-${videoId}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
}
