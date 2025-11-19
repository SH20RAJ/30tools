"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function EmbedVideoPlayer() {
  const searchParams = useSearchParams();
  const [videoConfig, setVideoConfig] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const data = searchParams.get("data");
      if (!data) {
        setError("No video data provided");
        setLoading(false);
        return;
      }

      const decodedData = JSON.parse(atob(data));
      if (!decodedData.videoUrl) {
        setError("Invalid video configuration");
        setLoading(false);
        return;
      }

      setVideoConfig(decodedData);
      setLoading(false);
    } catch (err) {
      console.error("Error parsing video data:", err);
      setError("Invalid video data format");
      setLoading(false);
    }
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
          <p>Loading video...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Error</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!videoConfig) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <p>No video configuration found</p>
        </div>
      </div>
    );
  }

  const containerStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  };

  return (
    <div style={containerStyle}>
      {videoConfig.showTitle && videoConfig.title && (
        <div className="bg-black bg-opacity-75 text-white p-4">
          <h1 className="text-lg font-semibold">{videoConfig.title}</h1>
        </div>
      )}

      <div className="flex-1 relative">
        <video
          src={videoConfig.videoUrl}
          poster={videoConfig.poster}
          controls={videoConfig.controls !== false}
          autoPlay={videoConfig.autoplay || false}
          muted={videoConfig.muted || false}
          loop={videoConfig.loop || false}
          preload="metadata"
          style={videoStyle}
          className="w-full h-full object-contain"
        >
          Your browser does not support the video tag.
        </video>

        {videoConfig.appearance?.showLogo &&
          videoConfig.appearance?.logoUrl && (
            <div className="absolute top-4 right-4 z-10">
              <img
                src={videoConfig.appearance.logoUrl}
                alt="Logo"
                className="h-8 w-auto opacity-75"
              />
            </div>
          )}
      </div>

      {videoConfig.showDescription && videoConfig.description && (
        <div className="bg-black bg-opacity-75 text-white p-4">
          <p className="text-sm">{videoConfig.description}</p>
        </div>
      )}

      {/* Custom CSS injection */}
      {videoConfig.appearance?.customCSS && (
        <style
          dangerouslySetInnerHTML={{ __html: videoConfig.appearance.customCSS }}
        />
      )}
    </div>
  );
}
