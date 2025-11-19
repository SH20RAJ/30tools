"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function VideoPlayerEmbedClean() {
  const [playerConfig, setPlayerConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const data = searchParams.get("data");

    if (!data) {
      setError("No video data provided");
      setLoading(false);
      return;
    }

    try {
      const decodedData = JSON.parse(atob(data));
      setPlayerConfig(decodedData);
      setLoading(false);

      // Load the player after config is set
      setTimeout(() => {
        initializePlayer(decodedData);
      }, 100);
    } catch (err) {
      setError("Invalid video data");
      setLoading(false);
    }
  }, [searchParams]);

  const initializePlayer = (config) => {
    const playerId = "clean-video-player";
    const player = config.player || "plyr";

    // Remove existing scripts and styles
    const existingScripts = document.querySelectorAll("script[data-player]");
    const existingStyles = document.querySelectorAll("link[data-player]");
    existingScripts.forEach((script) => script.remove());
    existingStyles.forEach((style) => style.remove());

    // Remove any existing body styles
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor =
      config.theme === "dark" ? "#000" : "#f0f0f0";

    switch (player) {
      case "plyr":
        loadPlyrPlayer(config, playerId);
        break;
      case "fluidplayer":
        loadFluidPlayer(config, playerId);
        break;
      case "videojs":
        loadVideoJsPlayer(config, playerId);
        break;
      case "mediaelement":
        loadMediaElementPlayer(config, playerId);
        break;
    }
  };

  const loadPlyrPlayer = (config, playerId) => {
    // Load CSS
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.min.css";
    css.setAttribute("data-player", "plyr");
    document.head.appendChild(css);

    // Add custom styles for clean embed
    const customCss = document.createElement("style");
    customCss.textContent = `
      .plyr {
        width: 100% !important;
        height: 100vh !important;
      }
      .plyr__video-wrapper {
        background: ${config.theme === "dark" ? "#000" : "#f0f0f0"};
      }
      ${
        config.theme === "dark"
          ? `
      .plyr {
        --plyr-color-main: #00b3ff;
        --plyr-video-background: #000;
        --plyr-menu-background: rgba(0, 0, 0, 0.9);
        --plyr-menu-color: #fff;
      }`
          : ""
      }
    `;
    document.head.appendChild(customCss);

    // Load JS
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.min.js";
    script.setAttribute("data-player", "plyr");
    script.onload = () => {
      const player = new window.Plyr(`#${playerId}`, {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "duration",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
        settings: ["quality", "speed"],
        autoplay: config.autoplay || false,
        muted: config.muted || false,
        loop: { active: config.loop || false },
      });
    };
    document.head.appendChild(script);
  };

  const loadFluidPlayer = (config, playerId) => {
    // Add custom styles for clean embed
    const customCss = document.createElement("style");
    customCss.textContent = `
      #${playerId} {
        width: 100% !important;
        height: 100vh !important;
        object-fit: contain;
      }
    `;
    document.head.appendChild(customCss);

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/fluid-player@3.6.0/dist/fluidplayer.min.js";
    script.setAttribute("data-player", "fluidplayer");
    script.onload = () => {
      window.fluidPlayer(playerId, {
        layoutControls: {
          autoPlay: config.autoplay || false,
          mute: config.muted || false,
          loop: config.loop || false,
          allowTheatre: true,
          playbackRates: [0.5, 1, 1.5, 2],
          primaryColor: config.theme === "dark" ? "#ffffff" : "#007cba",
        },
      });
    };
    document.head.appendChild(script);
  };

  const loadVideoJsPlayer = (config, playerId) => {
    // Load CSS
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/npm/video.js@8.6.1/dist/video-js.css";
    css.setAttribute("data-player", "videojs");
    document.head.appendChild(css);

    // Load theme CSS if needed
    if (config.theme && config.theme !== "default") {
      const themeCss = document.createElement("link");
      themeCss.rel = "stylesheet";
      themeCss.href = `https://cdn.jsdelivr.net/npm/videojs-themes@1.0.1/dist/video-js-${config.theme}.css`;
      themeCss.setAttribute("data-player", "videojs-theme");
      document.head.appendChild(themeCss);
    }

    // Add custom styles for clean embed
    const customCss = document.createElement("style");
    customCss.textContent = `
      .video-js {
        width: 100% !important;
        height: 100vh !important;
      }
      .vjs-fluid {
        padding-top: 0 !important;
      }
    `;
    document.head.appendChild(customCss);

    // Load JS
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/video.js@8.6.1/dist/video.min.js";
    script.setAttribute("data-player", "videojs");
    script.onload = () => {
      const player = window.videojs(playerId, {
        autoplay: config.autoplay || false,
        muted: config.muted || false,
        loop: config.loop || false,
        controls: config.controls !== false,
        responsive: true,
        fluid: true,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
      });
    };
    document.head.appendChild(script);
  };

  const loadMediaElementPlayer = (config, playerId) => {
    // Load CSS
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href =
      "https://cdn.jsdelivr.net/npm/mediaelement@6.0.2/build/mediaelementplayer.min.css";
    css.setAttribute("data-player", "mediaelement");
    document.head.appendChild(css);

    // Add custom styles for clean embed
    const customCss = document.createElement("style");
    customCss.textContent = `
      #${playerId} {
        width: 100% !important;
        height: 100vh !important;
      }
      .mejs__container {
        width: 100% !important;
        height: 100vh !important;
      }
    `;
    document.head.appendChild(customCss);

    // Load JS
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/mediaelement@6.0.2/build/mediaelement-and-player.min.js";
    script.setAttribute("data-player", "mediaelement");
    script.onload = () => {
      new window.MediaElementPlayer(playerId, {
        autoplay: config.autoplay || false,
        loop: config.loop || false,
        muted: config.muted || false,
        features: [
          "playpause",
          "progress",
          "current",
          "duration",
          "tracks",
          "volume",
          "fullscreen",
        ],
      });
    };
    document.head.appendChild(script);
  };

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              border: "2px solid #fff",
              borderTop: "2px solid transparent",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              animation: "spin 1s linear infinite",
              margin: "0 auto 15px",
            }}
          ></div>
          <p>Loading video player...</p>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "#ff4444", marginBottom: "10px" }}>Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: playerConfig.theme === "dark" ? "#000" : "#f0f0f0",
        }}
      >
        <video
          id="clean-video-player"
          className={`${playerConfig.player === "videojs" ? `video-js ${playerConfig.theme !== "default" ? `vjs-theme-${playerConfig.theme}` : ""}` : ""}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          controls={playerConfig.controls !== false}
          autoPlay={playerConfig.autoplay || false}
          muted={playerConfig.muted || false}
          loop={playerConfig.loop || false}
          poster={playerConfig.posterUrl || ""}
          data-setup="{}"
        >
          <source src={playerConfig.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Global styles for clean embed */}
      <style jsx global>{`
        html,
        body {
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
          width: 100% !important;
          height: 100% !important;
        }

        #__next {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </>
  );
}
