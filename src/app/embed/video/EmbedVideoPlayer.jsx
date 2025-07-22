'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function EmbedVideoPlayer() {
  const searchParams = useSearchParams();
  const [videoConfig, setVideoConfig] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const data = searchParams.get('data');
      if (!data) {
        setError('No video data provided');
        return;
      }

      const decodedData = JSON.parse(atob(data));
      setVideoConfig(decodedData);
    } catch (err) {
      setError('Invalid video data');
    }
  }, [searchParams]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Error</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!videoConfig) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
          <p>Loading video...</p>
        </div>
      </div>
    );
  }

  const getPlayerStyles = () => {
    const baseStyles = {
      width: '100%',
      height: '100vh',
      backgroundColor: '#000'
    };

    if (videoConfig.appearance) {
      return {
        ...baseStyles,
        '--primary-color': videoConfig.appearance.primaryColor || '#3b82f6',
        '--accent-color': videoConfig.appearance.accentColor || '#10b981'
      };
    }

    return baseStyles;
  };

  const renderPlayer = () => {
    const playerProps = {
      src: videoConfig.videoUrl,
      poster: videoConfig.poster,
      controls: videoConfig.controls !== false,
      autoPlay: videoConfig.autoplay || false,
      muted: videoConfig.muted || false,
      loop: videoConfig.loop || false,
      preload: videoConfig.performance?.preload || 'metadata',
      style: {
        width: '100%',
        height: '100%',
        borderRadius: videoConfig.appearance?.borderRadius ? `${videoConfig.appearance.borderRadius}px` : '0'
      }
    };

    switch (videoConfig.player) {
      case 'plyr':
        return <PlyrPlayer {...playerProps} theme={videoConfig.theme} />;
      case 'videojs':
        return <VideoJSPlayer {...playerProps} theme={videoConfig.theme} />;
      case 'mediaelements':
        return <MediaElementPlayer {...playerProps} theme={videoConfig.theme} />;
      case 'fluidplayer':
        return <FluidPlayer {...playerProps} theme={videoConfig.theme} />;
      default:
        return <NativePlayer {...playerProps} />;
    }
  };

  return (
    <div style={getPlayerStyles()}>
      {videoConfig.showTitle && (
        <div className="bg-black bg-opacity-75 text-white p-4">
          <h1 className="text-lg font-semibold">{videoConfig.title}</h1>
        </div>
      )}
      
      <div className="relative w-full h-full">
        {renderPlayer()}
        
        {videoConfig.appearance?.showLogo && videoConfig.appearance?.logoUrl && (
          <div className="absolute top-4 right-4 z-10">
            <img 
              src={videoConfig.appearance.logoUrl} 
              alt="Logo" 
              className="h-8 w-auto opacity-75"
            />
          </div>
        )}
      </div>

      {videoConfig.showDescription && (
        <div className="bg-black bg-opacity-75 text-white p-4">
          <p className="text-sm">{videoConfig.description || `Watch ${videoConfig.title}`}</p>
        </div>
      )}

      {/* Custom CSS injection */}
      {videoConfig.appearance?.customCSS && (
        <style dangerouslySetInnerHTML={{ __html: videoConfig.appearance.customCSS }} />
      )}
    </div>
  );
}

// Native HTML5 Video Player
function NativePlayer({ src, poster, controls, autoPlay, muted, loop, preload, style }) {
  return (
    <video
      src={src}
      poster={poster}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      preload={preload}
      style={style}
      className="w-full h-full object-contain"
    >
      Your browser does not support the video tag.
    </video>
  );
}

// Plyr Player Component
function PlyrPlayer({ src, poster, controls, autoPlay, muted, loop, theme, style }) {
  useEffect(() => {
    // Load Plyr CSS and JS
    const loadPlyr = async () => {
      if (typeof window !== 'undefined' && !window.Plyr) {
        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.plyr.io/3.7.8/plyr.css';
        document.head.appendChild(link);

        // Load JS
        const script = document.createElement('script');
        script.src = 'https://cdn.plyr.io/3.7.8/plyr.polyfilled.js';
        script.onload = () => {
          const player = new window.Plyr('#plyr-player', {
            controls: controls ? ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'] : [],
            autoplay: autoPlay,
            muted: muted,
            loop: { active: loop }
          });
        };
        document.head.appendChild(script);
      }
    };

    loadPlyr();
  }, []);

  return (
    <video
      id="plyr-player"
      src={src}
      poster={poster}
      style={style}
      className={`plyr-${theme || 'default'}`}
    />
  );
}

// Video.js Player Component
function VideoJSPlayer({ src, poster, controls, autoPlay, muted, loop, theme, style }) {
  useEffect(() => {
    const loadVideoJS = async () => {
      if (typeof window !== 'undefined' && !window.videojs) {
        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://vjs.zencdn.net/8.6.1/video-js.css';
        document.head.appendChild(link);

        // Load JS
        const script = document.createElement('script');
        script.src = 'https://vjs.zencdn.net/8.6.1/video.min.js';
        script.onload = () => {
          const player = window.videojs('videojs-player', {
            controls: controls,
            autoplay: autoPlay,
            muted: muted,
            loop: loop,
            responsive: true,
            fluid: true
          });
        };
        document.head.appendChild(script);
      }
    };

    loadVideoJS();
  }, []);

  return (
    <video
      id="videojs-player"
      className={`video-js vjs-theme-${theme || 'default'}`}
      src={src}
      poster={poster}
      style={style}
      data-setup="{}"
    />
  );
}

// MediaElement Player Component
function MediaElementPlayer({ src, poster, controls, autoPlay, muted, loop, theme, style }) {
  useEffect(() => {
    const loadMediaElement = async () => {
      if (typeof window !== 'undefined' && !window.MediaElementPlayer) {
        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/mediaelement@5.1.1/build/mediaelementplayer.min.css';
        document.head.appendChild(link);

        // Load JS
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mediaelement@5.1.1/build/mediaelement-and-player.min.js';
        script.onload = () => {
          new window.MediaElementPlayer('#mediaelements-player', {
            features: controls ? ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume', 'fullscreen'] : [],
            autoplay: autoPlay,
            loop: loop,
            startVolume: muted ? 0 : 0.8
          });
        };
        document.head.appendChild(script);
      }
    };

    loadMediaElement();
  }, []);

  return (
    <video
      id="mediaelements-player"
      src={src}
      poster={poster}
      style={style}
      className={`mejs-${theme || 'default'}`}
    />
  );
}

// Fluid Player Component
function FluidPlayer({ src, poster, controls, autoPlay, muted, loop, theme, style }) {
  useEffect(() => {
    const loadFluidPlayer = async () => {
      if (typeof window !== 'undefined' && !window.fluidPlayer) {
        const script = document.createElement('script');
        script.src = 'https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js';
        script.onload = () => {
          window.fluidPlayer('fluid-player', {
            layoutControls: {
              autoPlay: autoPlay,
              mute: muted,
              loop: loop,
              allowTheatre: false,
              playPauseAnimation: true,
              playbackRateEnabled: true,
              allowDownload: false,
              playButtonShowing: true,
              fillToContainer: true,
              posterImage: poster
            }
          });
        };
        document.head.appendChild(script);
      }
    };

    loadFluidPlayer();
  }, []);

  return (
    <video
      id="fluid-player"
      src={src}
      poster={poster}
      style={style}
      className={`fluid-${theme || 'default'}`}
    />
  );
}