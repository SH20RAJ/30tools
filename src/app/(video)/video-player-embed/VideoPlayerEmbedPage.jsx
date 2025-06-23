'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function VideoPlayerEmbedPage() {
  const [playerConfig, setPlayerConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const data = searchParams.get('data');
    
    if (!data) {
      setError('No video data provided');
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
      setError('Invalid video data');
      setLoading(false);
    }
  }, [searchParams]);

  const initializePlayer = (config) => {
    const playerId = 'embedded-video-player';
    const player = config.player || 'plyr';
    
    // Remove existing scripts and styles
    const existingScripts = document.querySelectorAll('script[data-player]');
    const existingStyles = document.querySelectorAll('link[data-player]');
    existingScripts.forEach(script => script.remove());
    existingStyles.forEach(style => style.remove());

    switch (player) {
      case 'plyr':
        loadPlyrPlayer(config, playerId);
        break;
      case 'fluidplayer':
        loadFluidPlayer(config, playerId);
        break;
      case 'videojs':
        loadVideoJsPlayer(config, playerId);
        break;
      case 'mediaelement':
        loadMediaElementPlayer(config, playerId);
        break;
    }
  };

  const loadPlyrPlayer = (config, playerId) => {
    // Load CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.min.css';
    css.setAttribute('data-player', 'plyr');
    document.head.appendChild(css);

    // Load JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.min.js';
    script.setAttribute('data-player', 'plyr');
    script.onload = () => {
      const player = new window.Plyr(`#${playerId}`, {
        controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'settings', 'fullscreen'],
        settings: ['quality', 'speed'],
        autoplay: config.autoplay || false,
        muted: config.muted || false,
        loop: { active: config.loop || false }
      });
    };
    document.head.appendChild(script);
  };

  const loadFluidPlayer = (config, playerId) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/fluid-player@3.6.0/dist/fluidplayer.min.js';
    script.setAttribute('data-player', 'fluidplayer');
    script.onload = () => {
      window.fluidPlayer(playerId, {
        layoutControls: {
          autoPlay: config.autoplay || false,
          mute: config.muted || false,
          loop: config.loop || false,
          allowTheatre: true,
          playbackRates: [0.5, 1, 1.5, 2],
          primaryColor: config.theme === 'dark' ? '#ffffff' : '#007cba'
        }
      });
    };
    document.head.appendChild(script);
  };

  const loadVideoJsPlayer = (config, playerId) => {
    // Load CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://cdn.jsdelivr.net/npm/video.js@8.6.1/dist/video-js.css';
    css.setAttribute('data-player', 'videojs');
    document.head.appendChild(css);

    // Load theme CSS if needed
    if (config.theme && config.theme !== 'default') {
      const themeCss = document.createElement('link');
      themeCss.rel = 'stylesheet';
      themeCss.href = `https://cdn.jsdelivr.net/npm/videojs-themes@1.0.1/dist/video-js-${config.theme}.css`;
      themeCss.setAttribute('data-player', 'videojs-theme');
      document.head.appendChild(themeCss);
    }

    // Load JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/video.js@8.6.1/dist/video.min.js';
    script.setAttribute('data-player', 'videojs');
    script.onload = () => {
      const player = window.videojs(playerId, {
        autoplay: config.autoplay || false,
        muted: config.muted || false,
        loop: config.loop || false,
        controls: config.controls !== false,
        responsive: true,
        playbackRates: [0.5, 1, 1.25, 1.5, 2]
      });
    };
    document.head.appendChild(script);
  };

  const loadMediaElementPlayer = (config, playerId) => {
    // Load CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://cdn.jsdelivr.net/npm/mediaelement@6.0.2/build/mediaelementplayer.min.css';
    css.setAttribute('data-player', 'mediaelement');
    document.head.appendChild(css);

    // Load JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mediaelement@6.0.2/build/mediaelement-and-player.min.js';
    script.setAttribute('data-player', 'mediaelement');
    script.onload = () => {
      new window.MediaElementPlayer(playerId, {
        autoplay: config.autoplay || false,
        loop: config.loop || false,
        muted: config.muted || false,
        features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume', 'fullscreen']
      });
    };
    document.head.appendChild(script);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading video player...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-red-600">Error</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p>{error}</p>
            <Link href="/video-player">
              <Button>
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Video Player Generator
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/video-player">
                <Button variant="ghost" size="sm">
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Back to Generator
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">{playerConfig.title || 'Video Player'}</h1>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline">{playerConfig.player || 'plyr'}</Badge>
                  <Badge variant="outline">{playerConfig.theme || 'default'}</Badge>
                </div>
              </div>
            </div>
            <Link href="/video-player" target="_blank">
              <Button size="sm">
                <ExternalLinkIcon className="w-4 h-4 mr-2" />
                Create Your Own
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Player Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Video Player */}
          <div className="mb-6">
            <video
              id="embedded-video-player"
              className={`w-full ${playerConfig.theme === 'dark' ? 'bg-black' : 'bg-gray-100'}`}
              style={{ 
                height: playerConfig.height || '400px',
                maxHeight: '70vh'
              }}
              controls={playerConfig.controls !== false}
              autoPlay={playerConfig.autoplay || false}
              muted={playerConfig.muted || false}
              loop={playerConfig.loop || false}
              poster={playerConfig.posterUrl || ''}
              data-setup="{}"
            >
              <source src={playerConfig.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Info */}
          {(playerConfig.title || playerConfig.description) && (
            <Card>
              <CardContent className="pt-6">
                {playerConfig.title && (
                  <h2 className="text-2xl font-bold mb-2">{playerConfig.title}</h2>
                )}
                {playerConfig.description && (
                  <p className="text-muted-foreground leading-relaxed">
                    {playerConfig.description}
                  </p>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t bg-muted/30 mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground">
            Created with{' '}
            <Link href="/video-player" className="font-medium text-primary hover:underline">
              Video Player Generator
            </Link>
            {' '}by 30tools
          </p>
        </div>
      </div>
    </div>
  );
}
