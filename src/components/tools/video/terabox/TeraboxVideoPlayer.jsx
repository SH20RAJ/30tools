'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PlayIcon, ExternalLinkIcon, AlertCircleIcon, InfoIcon } from 'lucide-react';
import Script from 'next/script';

export default function TeraboxVideoPlayer({ videoData }) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [hlsLoaded, setHlsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!videoData || !videoRef.current) return;

    const video = videoRef.current;
    const streamUrl = videoData.stream_url;

    // Reset states
    setVideoError(false);
    setIsLoading(true);

    // Clean up previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    // Handle M3U8 streams with HLS.js
    if (streamUrl && streamUrl.includes('.m3u8')) {
      if (hlsLoaded && typeof window !== 'undefined' && window.Hls && window.Hls.isSupported()) {
        console.log('🎵 Loading M3U8 stream with HLS.js:', streamUrl);
        
        const hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: false,
          backBufferLength: 90,
          debug: false
        });

        hlsRef.current = hls;
        hls.loadSource(streamUrl);
        hls.attachMedia(video);

        hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
          console.log('✅ HLS manifest parsed successfully');
          setIsLoading(false);
        });

        hls.on(window.Hls.Events.ERROR, (event, data) => {
          console.error('❌ HLS error:', event, data);
          if (data.fatal) {
            setVideoError(true);
            setShowFallback(true);
          }
          setIsLoading(false);
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari, iOS)
        console.log('🍎 Using native HLS support for M3U8');
        video.src = streamUrl;
        setIsLoading(false);
      } else {
        console.warn('⚠️ HLS not supported, will try after loading script');
        // HLS.js not loaded yet, wait for it
        if (!hlsLoaded) {
          return; // Wait for HLS.js to load
        }
        setVideoError(true);
        setShowFallback(true);
        setIsLoading(false);
      }
    } else {
      // Regular MP4 video
      console.log('🎬 Loading regular video:', streamUrl);
      video.src = streamUrl;
      setIsLoading(false);
    }

    // Cleanup function
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [videoData, hlsLoaded]);

  if (!videoData) return null;

  const streamUrl = videoData.stream_url;
  const isM3u8 = streamUrl && streamUrl.includes('.m3u8');

  const handleVideoError = (e) => {
    console.error('Video playback error:', e);
    setVideoError(true);
    setShowFallback(true);
    setIsLoading(false);
  };

  const handleVideoLoadStart = () => {
    setVideoError(false);
    setIsLoading(true);
  };

  const handleVideoCanPlay = () => {
    setIsLoading(false);
  };

  const openInNewTab = () => {
    window.open(videoData.stream_url, '_blank', 'noopener,noreferrer');
  };

  const openSegmentUrl = (segmentUrl) => {
    window.open(segmentUrl, '_blank', 'noopener,noreferrer');
  };

  const onHlsLoad = () => {
    console.log('📦 HLS.js loaded successfully');
    setHlsLoaded(true);
  };

  return (
    <div className="space-y-4">
      {/* Load HLS.js script if we have M3U8 */}
      {isM3u8 && (
        <Script
          src="https://cdn.jsdelivr.net/npm/hls.js@latest"
          onLoad={onHlsLoad}
          strategy="lazyOnload"
        />
      )}

      {/* Primary Video Player */}
      {!showFallback ? (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full h-64 rounded"
              controls
              poster={videoData.image}
              preload="metadata"
              crossOrigin="anonymous"
              playsInline
              onError={handleVideoError}
              onLoadStart={handleVideoLoadStart}
              onCanPlay={handleVideoCanPlay}
            >
              {!isM3u8 && <source src={streamUrl} type="video/mp4" />}
              <p className="text-center p-4 text-sm text-muted-foreground">
                Your browser does not support the video tag.
              </p>
            </video>
            
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                  <p className="text-sm">
                    {isM3u8 ? 'Loading M3U8 stream...' : 'Loading video...'}
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* M3U8 Info */}
          {isM3u8 && (
            <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
              <div className="flex items-center">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm text-blue-700 dark:text-blue-300">
                  M3U8 streaming format{videoData.total_segments ? ` with ${videoData.total_segments} segments` : ''}
                  {hlsLoaded ? ' (HLS.js enabled)' : ' (Loading HLS.js...)'}
                </span>
              </div>
            </div>
          )}
          
          {videoError && (
            <div className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
              <div className="flex items-center">
                <AlertCircleIcon className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mr-2" />
                <span className="text-sm text-yellow-700 dark:text-yellow-300">
                  Having trouble? Try the fallback options below.
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
                Embedded player failed. Try the options below.
              </p>
            </div>
            
            {/* Fallback options */}
            <div className="flex flex-col space-y-2">
              <Button
                onClick={openInNewTab}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <PlayIcon className="h-5 w-5 mr-2" />
                Play Video in New Tab
              </Button>
              
              {/* If we have segments, show the first segment */}
              {videoData.segments && videoData.segments.length > 0 && (
                <Button
                  variant="outline"
                  onClick={() => openSegmentUrl(videoData.segments[0].url)}
                  size="sm"
                >
                  <PlayIcon className="h-4 w-4 mr-2" />
                  Play First Segment
                </Button>
              )}
            </div>
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
            onClick={() => {
              setShowFallback(false);
              setVideoError(false);
            }}
          >
            <PlayIcon className="h-4 w-4 mr-2" />
            Try Embedded Again
          </Button>
        )}
        
        {/* Show segments if available */}
        {videoData.segments && videoData.segments.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => openSegmentUrl(videoData.segments[0].url)}
          >
            <PlayIcon className="h-4 w-4 mr-2" />
            Direct Segment ({videoData.total_segments} available)
          </Button>
        )}
      </div>

      {/* Technical Info */}
      <div className="text-xs text-muted-foreground text-center space-y-1">
        <div>
          {isM3u8 ? 'M3U8 HLS streaming with mdiskplay' : 'Direct video streaming'} 
        </div>
        {videoData.segments && videoData.segments.length > 0 && (
          <div>
            Video segments: {videoData.total_segments} • Base URL: streams.mdiskplay.com
          </div>
        )}
        {videoData.mdiskplay_source && (
          <div>
            Source: mdiskplay API • {isM3u8 ? 'M3U8 playlist' : 'Direct video'}
          </div>
        )}
      </div>
    </div>
  );
}