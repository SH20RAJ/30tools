'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { LoaderIcon, AlertCircleIcon, PlayIcon } from 'lucide-react';
import { fetchTeraboxOGData, fetchTeraboxVideoData } from '@/lib/terabox-actions';

// Import modular components
import TeraboxUrlInput from './terabox/TeraboxUrlInput';
import TeraboxVideoPlayer from './terabox/TeraboxVideoPlayer';
import TeraboxVideoInfo from './terabox/TeraboxVideoInfo';

export default function TeraboxPlayerTool() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // State management
  const [teraboxUrl, setTeraboxUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOG, setIsLoadingOG] = useState(false);
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  const [ogData, setOgData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState('');
  const [shareUrl, setShareUrl] = useState('');

  // Load URL from search params on component mount
  useEffect(() => {
    const urlParam = searchParams.get('url');
    if (urlParam && urlParam.includes('teraboxapp.com')) {
      setTeraboxUrl(urlParam);
      loadVideoFromUrl(urlParam);
    }
  }, [searchParams]);

  // Update URL parameters
  const updateUrlParams = (url) => {
    const params = new URLSearchParams(window.location.search);
    if (url && url.includes('teraboxapp.com')) {
      params.set('url', url);
    } else {
      params.delete('url');
    }
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    router.replace(newUrl, { scroll: false });
  };

  // Handle URL change
  const handleUrlChange = (url) => {
    setTeraboxUrl(url);
    updateUrlParams(url);
    
    // Clear data if URL is invalid or empty
    if (!url || !url.includes('teraboxapp.com')) {
      setVideoData(null);
      setOgData(null);
      setError('');
      setShareUrl('');
    }
  };

  // Load video from URL
  const loadVideoFromUrl = async (url) => {
    if (!url || !url.includes('teraboxapp.com')) {
      return;
    }

    setIsLoading(true);
    setIsLoadingOG(true);
    setIsLoadingVideo(true);
    setError('');
    setOgData(null);
    setVideoData(null);

    try {
      // Start both API calls in parallel
      const ogPromise = fetchTeraboxOGData(url);
      const videoPromise = fetchTeraboxVideoData(url);

      // Get OG data first for quick preview
      const ogResult = await ogPromise;
      setIsLoadingOG(false);
      
      if (ogResult && !ogResult.error) {
        setOgData(ogResult);
      }

      // Wait for full video data
      const videoResult = await videoPromise;
      setIsLoadingVideo(false);

      if (videoResult.error) {
        throw new Error(videoResult.error);
      }

      if (!videoResult.data || !videoResult.data.stream_url) {
        throw new Error('Invalid video data received');
      }

      setVideoData(videoResult.data);

      // Generate shareable URL for this specific video
      const currentUrl = new URL(window.location);
      currentUrl.searchParams.set('url', url);
      setShareUrl(currentUrl.toString());

    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setIsLoadingOG(false);
      setIsLoadingVideo(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Terabox Video Player & Downloader</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Paste a Terabox URL to instantly play and download videos. Auto-loading with shareable links.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Input and Controls */}
          <div className="space-y-6">
            <TeraboxUrlInput
              teraboxUrl={teraboxUrl}
              onUrlChange={handleUrlChange}
              onLoadVideo={loadVideoFromUrl}
              isLoading={isLoading}
            />

            {/* Video Information */}
            {(ogData || videoData) && (
              <TeraboxVideoInfo
                videoData={videoData}
                ogData={ogData}
                isLoadingVideo={isLoadingVideo}
                shareUrl={shareUrl}
              />
            )}
          </div>

          {/* Right Panel - Video Player and Status */}
          <div className="space-y-6">
            {/* Loading State */}
            {isLoadingOG && !ogData && !videoData && (
              <Card>
                <CardContent className="py-8">
                  <div className="text-center space-y-3">
                    <LoaderIcon className="h-8 w-8 animate-spin mx-auto text-blue-500" />
                    <div>
                      <h3 className="font-semibold">Loading Video</h3>
                      <p className="text-sm text-muted-foreground">Fetching video information...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Error State */}
            {error && (
              <Card>
                <CardContent className="py-6">
                  <div className="flex items-center p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                    <AlertCircleIcon className="h-5 w-5 text-destructive mr-2" />
                    <span className="text-sm text-destructive">{error}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Video Player */}
            {videoData && (
              <Card>
                <CardContent className="p-6">
                  <TeraboxVideoPlayer videoData={videoData} />
                </CardContent>
              </Card>
            )}

            {/* Instructions */}
            {!teraboxUrl && !isLoading && (
              <Card>
                <CardContent className="py-8">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto">
                      <PlayIcon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Ready to Play Videos</h3>
                      <p className="text-sm text-muted-foreground">
                        Paste a Terabox URL above to automatically load and play the video
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 space-y-8">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                  <h3 className="font-semibold mb-2">Paste URL</h3>
                  <p className="text-sm text-muted-foreground">Copy your Terabox link and paste it - video loads automatically</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                  <h3 className="font-semibold mb-2">Instant Play</h3>
                  <p className="text-sm text-muted-foreground">Video player loads with CORS-friendly proxy for seamless streaming</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                  <h3 className="font-semibold mb-2">Share & Download</h3>
                  <p className="text-sm text-muted-foreground">Get shareable links and direct download options instantly</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Auto-Loading</h4>
                  <p className="text-sm text-muted-foreground">Videos load automatically when you paste a URL - no buttons to click</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Shareable URLs</h4>
                  <p className="text-sm text-muted-foreground">Copy the page URL to share videos with others instantly</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">CORS-Free Playback</h4>
                  <p className="text-sm text-muted-foreground">Custom proxy ensures videos play in any browser without restrictions</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Multiple Downloads</h4>
                  <p className="text-sm text-muted-foreground">Direct and fast download options with original quality</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}