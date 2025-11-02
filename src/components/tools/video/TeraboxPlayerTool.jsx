'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoaderIcon, AlertCircleIcon, PlayIcon } from 'lucide-react';
import { fetchTeraboxOGData, fetchTeraboxVideoData } from '@/lib/terabox-actions';

// Import modular components
import TeraboxUrlInput from './terabox/TeraboxUrlInput';
import TeraboxVideoPlayer from './terabox/TeraboxVideoPlayer';
import TeraboxVideoInfo from './terabox/TeraboxVideoInfo';
import TeraboxSharingTools from './terabox/TeraboxSharingTools';
import TeraboxEmbedTools from './terabox/TeraboxEmbedTools';
import TeraboxPlayerSelector from './terabox/TeraboxPlayerSelector';
import TeraboxAdvancedTools from './terabox/TeraboxAdvancedTools';

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
  
  // Player and theme settings
  const [selectedPlayer, setSelectedPlayer] = useState('plyr');
  const [selectedTheme, setSelectedTheme] = useState('default');
  
  // Advanced settings
  const [advancedSettings, setAdvancedSettings] = useState({
    appearance: {
      primaryColor: '#3b82f6',
      accentColor: '#10b981',
      borderRadius: 8,
      shadowIntensity: 3,
      customCSS: '',
      logoUrl: '',
      showLogo: false
    },
    behavior: {
      autoQuality: true,
      rememberPosition: false,
      keyboardShortcuts: true,
      clickToPlay: true,
      defaultVolume: 80,
      defaultSpeed: 1,
      seekStep: 10
    },
    performance: {
      preload: 'metadata',
      bufferSize: 30,
      preferredQuality: 'auto',
      hardwareAcceleration: true,
      lazyLoading: false,
      adaptiveStreaming: true
    },
    security: {
      allowedDomains: '',
      disableRightClick: false,
      disableDownload: false,
      requireHttps: true,
      analyticsTracking: false,
      linkExpiration: 'never',
      password: ''
    }
  });

  // Load URL from search params on component mount
  useEffect(() => {
    const urlParam = searchParams.get('url');
    if (urlParam && (urlParam.includes('teraboxapp.com') || urlParam.includes('teraboxshare.com'))) {
      setTeraboxUrl(urlParam);
      loadVideoFromUrl(urlParam);
    }
  }, [searchParams]);

  // Update URL parameters
  const updateUrlParams = (url) => {
    const params = new URLSearchParams(window.location.search);
    if (url && (url.includes('teraboxapp.com') || url.includes('teraboxshare.com'))) {
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
    if (!url || (!url.includes('teraboxapp.com') && !url.includes('teraboxshare.com'))) {
      setVideoData(null);
      setOgData(null);
      setError('');
      setShareUrl('');
    }
  };

  // Load video from URL
  const loadVideoFromUrl = async (url) => {
    if (!url || (!url.includes('teraboxapp.com') && !url.includes('teraboxshare.com'))) {
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

        {/* Announcement Banner */}
        <div className="mb-8">
          <Card className="border-blue-500 bg-blue-50 dark:bg-blue-950/30">
            <CardContent className="py-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <AlertCircleIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    🎉 Terabox Player Has Moved!
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-3">
                    Our Terabox player has been upgraded and moved to a dedicated platform for better performance and features.
                  </p>
                  <a
                    href="https://terabox.beer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Visit terabox.beer →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
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

            {/* Player Selection */}
            <TeraboxPlayerSelector
              selectedPlayer={selectedPlayer}
              onPlayerChange={setSelectedPlayer}
              selectedTheme={selectedTheme}
              onThemeChange={setSelectedTheme}
              videoData={videoData}
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

        {/* Advanced Tools Section */}
        {videoData && (
          <div className="mt-12">
            <Tabs defaultValue="sharing" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="sharing">Sharing & Embedding</TabsTrigger>
                <TabsTrigger value="embed">Embed Tools</TabsTrigger>
                <TabsTrigger value="advanced">Advanced Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="sharing" className="mt-6">
                <TeraboxSharingTools
                  shareUrl={shareUrl}
                  videoData={videoData}
                />
              </TabsContent>

              <TabsContent value="embed" className="mt-6">
                <TeraboxEmbedTools
                  videoData={videoData}
                  shareUrl={shareUrl}
                  selectedPlayer={selectedPlayer}
                  selectedTheme={selectedTheme}
                />
              </TabsContent>

              <TabsContent value="advanced" className="mt-6">
                <TeraboxAdvancedTools
                  advancedSettings={advancedSettings}
                  onSettingsChange={setAdvancedSettings}
                  selectedPlayer={selectedPlayer}
                  selectedTheme={selectedTheme}
                />
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* SEO Content Section */}
        <div className="mt-16 space-y-8">
          {/* Main SEO Content */}
          <Card>
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Watch Terabox Videos Online Without App - Use 30Tools.com!</h2>
                
                <p className="text-lg leading-relaxed mb-6">
                  Are you tired of downloading the Terabox app just to watch a video someone shared with you? Good news - now you don't have to! With <strong>30Tools.com</strong>, you can open Terabox links, play videos online, and enjoy smooth streaming directly from your browser - no downloads, no signup, no app needed.
                </p>

                <h3 className="text-2xl font-semibold mb-4">What Is 30Tools Terabox Player?</h3>
                <p className="mb-4">30Tools.com is a free online Terabox video player that lets you:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Open any Terabox link in your browser</li>
                  <li>Watch Terabox videos without downloading the app</li>
                  <li>Stream videos instantly with full-screen support</li>
                  <li>Skip the hassle and save time</li>
                </ul>
                <p className="mb-6">It's the easiest way to turn a Terabox link into a playable video on any device.</p>

                <h3 className="text-2xl font-semibold mb-4">How to Use Terabox Link Opener on 30Tools.com</h3>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>Get your Terabox video link (example: https://teraboxapp.com/s/xyz...)</li>
                  <li>Go to 30Tools.com/terabox-downloader</li>
                  <li>Paste your link in the box</li>
                  <li>Wait for automatic loading</li>
                  <li>Sit back and watch your video online for free</li>
                </ol>
                <p className="mb-6 font-semibold">No login. No Terabox app. Just paste, and enjoy!</p>

                <h3 className="text-2xl font-semibold mb-4">Why Use 30Tools as Your Terabox Player?</h3>
                <p className="mb-4">People use 30Tools.com for many reasons:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Terabox Link Opener</strong> - instantly access Terabox files</li>
                  <li><strong>Terabox Link Player</strong> - play Terabox video links in one click</li>
                  <li><strong>Terabox Viewer</strong> - stream your video securely in-browser</li>
                  <li><strong>Online Terabox Video Player</strong> - full-screen support, fast buffering</li>
                  <li><strong>No Ads</strong> - clean and smooth experience</li>
                  <li><strong>Works on All Devices</strong> - mobile, tablet, or desktop</li>
                </ul>
                <p className="mb-6">Whether you're looking to watch Terabox video online, open a Terabox movie, or preview large files without downloading - 30Tools.com is the tool you need.</p>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Features of 30Tools Terabox Player</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Online Terabox Link Player</h4>
                  <p className="text-sm text-muted-foreground">Play any Terabox video directly in your browser</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">No Login Required</h4>
                  <p className="text-sm text-muted-foreground">Watch Terabox videos without creating an account</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">App-Free Experience</h4>
                  <p className="text-sm text-muted-foreground">No need to download the Terabox app</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Fast Streaming</h4>
                  <p className="text-sm text-muted-foreground">Instant video loading with smooth playback</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Mobile Compatible</h4>
                  <p className="text-sm text-muted-foreground">Works perfectly on phones, tablets, and desktops</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Download Options</h4>
                  <p className="text-sm text-muted-foreground">Multiple download links for offline viewing</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Use Cases */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Popular Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Watch viral Terabox videos online</h4>
                      <p className="text-sm text-muted-foreground">Access trending content shared on social media</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Play Terabox videos on school or office PCs</h4>
                      <p className="text-sm text-muted-foreground">No app installation needed on restricted computers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Open Terabox video links instantly</h4>
                      <p className="text-sm text-muted-foreground">Quick access to shared educational content</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Terabox video viewer on mobile</h4>
                      <p className="text-sm text-muted-foreground">Stream videos on phones without app storage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Access content from friends</h4>
                      <p className="text-sm text-muted-foreground">View shared videos without signing up</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Preview large video files</h4>
                      <p className="text-sm text-muted-foreground">Check content before downloading</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What is a Terabox Player?</h3>
                  <p className="text-muted-foreground">A Terabox Player is an online tool that allows you to watch Terabox videos directly in your web browser without downloading the Terabox app. 30Tools.com provides a free Terabox player that supports instant streaming, full-screen viewing, and download options.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">How do I use a Terabox Link Opener?</h3>
                  <p className="text-muted-foreground">Simply paste your Terabox link into the URL field on 30Tools.com. The video will automatically load and start playing in your browser. No registration, no app download, and no complicated setup required.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can I watch Terabox videos online without the app?</h3>
                  <p className="text-muted-foreground">Yes! 30Tools.com lets you watch any Terabox video online without installing the Terabox app. Our online player works on all devices including phones, tablets, and computers.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Is the Terabox Player free to use?</h3>
                  <p className="text-muted-foreground">Absolutely! 30Tools.com offers a completely free Terabox video player. There are no hidden fees, no premium subscriptions, and no limits on how many videos you can watch.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Does the online Terabox player work on mobile and desktop?</h3>
                  <p className="text-muted-foreground">Yes, our Terabox player is fully responsive and works seamlessly on mobile phones, tablets, and desktop computers. The interface automatically adapts to your screen size for the best viewing experience.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Are there any ads or popups in the Terabox Player?</h3>
                  <p className="text-muted-foreground">No, 30Tools.com offers an ad-free Terabox video player experience. Enjoy smooth, uninterrupted streaming of your Terabox videos online without annoying advertisements.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Watch Terabox Videos Online?</h2>
              <p className="text-lg mb-6">
                If you ever received a Terabox video link and didn't know how to play it without installing the Terabox app - just remember one thing:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  Go to 30Tools.com and start watching instantly!
                </p>
              </div>
              <p className="text-muted-foreground">
                It's the best Terabox link player online - fast, free, and user-friendly. No app downloads, no signups, just paste your link and enjoy seamless video streaming.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}