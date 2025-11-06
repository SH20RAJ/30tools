'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Play, Loader2, AlertCircle, Link as LinkIcon } from 'lucide-react';
import { fetchTeraboxVideo } from '@/lib/tera';
import Hls from 'hls.js';

export default function TeraboxVideoPlayer() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  // Cleanup HLS instance on unmount
  useEffect(() => {
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter a Terabox URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setVideoData(null);
    setIsPlaying(false);

    try {
      const data = await fetchTeraboxVideo(url);
      setVideoData(data);
    } catch (err) {
      setError(err.message || 'Failed to load video');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlay = () => {
    if (!videoData || !videoRef.current) return;

    // Initialize HLS.js for M3U8 streaming
    if (Hls.isSupported()) {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }

      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90,
      });

      hls.loadSource(videoData.source);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
        setIsPlaying(true);
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS Error:', data);
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              setError('Network error occurred. Please try again.');
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              setError('Media error occurred. Trying to recover...');
              hls.recoverMediaError();
              break;
            default:
              setError('Fatal error occurred. Cannot play video.');
              hls.destroy();
              break;
          }
        }
      });

      hlsRef.current = hls;
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      videoRef.current.src = videoData.source;
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      setError('Your browser does not support HLS streaming');
    }
  };

  const handleDownload = () => {
    if (!videoData?.download) return;

    const link = document.createElement('a');
    link.href = videoData.download;
    link.download = 'terabox-video.mp4';
    link.target = '_blank';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-2 border-border/20 shadow-lg">
        <CardHeader className="bg-background/20 dark:to-cyan-950/20">
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Play className="w-6 h-6 text-primary" />
            Terabox Video Player
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="Paste Terabox URL here (e.g., https://teraboxshare.com/s/1...)"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError('');
                }}
                className="flex-1 border-border focus:border-primary focus:ring-primary"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !url.trim()}
                className="bg-muted/500 hover:bg-primary text-white font-medium px-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Load Video
                  </>
                )}
              </Button>
            </div>

            {error && (
              <div className="bg-destructive/10 border border-destructive/50 text-destructive px-4 py-3 rounded-lg flex items-start gap-2">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </form>

          {videoData && (
            <div className="mt-6 space-y-4">
              {/* Video Player */}
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  controls
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Button
                      onClick={handlePlay}
                      size="lg"
                      className="bg-muted/500 hover:bg-primary text-white rounded-full w-20 h-20"
                    >
                      <Play className="w-10 h-10" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Download Button */}
              <div className="flex justify-center">
                <Button
                  onClick={handleDownload}
                  className="bg-muted/500 hover:bg-primary text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Video (MP4)
                </Button>
              </div>

              {/* Video Info */}
              <div className="bg-muted/50 dark:bg-blue-950/20 border border-border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-blue-200">
                  Video Ready
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ Video loaded successfully</p>
                  <p>✓ Streaming via HLS (adaptive quality)</p>
                  <p>✓ Download available in MP4 format</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-muted-foreground space-y-2">
            <p>
              <strong>How to use:</strong> Paste your Terabox share link and click "Load Video" to play or download.
            </p>
            <p className="text-xs">
              Supports: teraboxshare.com, terabox.com, 1024terabox.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
