'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlayIcon, ExternalLinkIcon, AlertCircleIcon } from 'lucide-react';

export default function TeraboxVideoPlayer({ videoData }) {
  const [videoError, setVideoError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  if (!videoData) return null;

  // Create proxy URL for our CORS-friendly endpoint
  const proxyVideoUrl = `/api/video-proxy?url=${encodeURIComponent(videoData.proxy_url)}`;

  const handleVideoError = (e) => {
    console.error('Video playback error:', e);
    setVideoError(true);
    setShowFallback(true);
  };

  const openInNewTab = () => {
    window.open(videoData.proxy_url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-4">
      {/* Primary Video Player */}
      {!showFallback ? (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <video
            className="w-full h-64 rounded"
            controls
            poster={videoData.image}
            preload="metadata"
            crossOrigin="anonymous"
            playsInline
            onError={handleVideoError}
            onLoadStart={() => setVideoError(false)}
          >
            <source src={proxyVideoUrl} type="video/mp4" />
            <p className="text-center p-4 text-sm text-muted-foreground">
              Your browser does not support the video tag.
            </p>
          </video>
          
          {videoError && (
            <div className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
              <div className="flex items-center">
                <AlertCircleIcon className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mr-2" />
                <span className="text-sm text-yellow-700 dark:text-yellow-300">
                  Having trouble? Try the button below for guaranteed playback.
                </span>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Fallback Player */
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="flex flex-col items-center justify-center h-64 space-y-4">
            {videoData.image && (
              <img
                src={videoData.image}
                alt={videoData.name}
                className="w-32 h-20 object-cover rounded border"
              />
            )}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">{videoData.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Embedded player failed. Click below for direct playback.
              </p>
            </div>
            <Button
              onClick={openInNewTab}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <PlayIcon className="h-5 w-5 mr-2" />
              Play Video in New Tab
            </Button>
          </div>
        </div>
      )}

      {/* Alternative Options */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={openInNewTab}
        >
          <ExternalLinkIcon className="h-4 w-4 mr-2" />
          Open in New Tab
        </Button>
        
        {showFallback && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFallback(false)}
          >
            <PlayIcon className="h-4 w-4 mr-2" />
            Try Embedded Again
          </Button>
        )}
      </div>

      <div className="text-xs text-muted-foreground text-center">
        Using CORS-friendly proxy for seamless video streaming
      </div>
    </div>
  );
}