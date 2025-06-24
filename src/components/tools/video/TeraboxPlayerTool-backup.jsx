'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  PlayIcon, 
  CopyIcon, 
  DownloadIcon, 
  ShareIcon, 
  SettingsIcon,
  ExternalLinkIcon,
  MonitorIcon,
  LinkIcon,
  WandIcon,
  RefreshCwIcon,
  LoaderIcon,
  AlertCircleIcon,
  CheckCircleIcon
} from 'lucide-react';
import { toast } from 'sonner';
import CodeBlock from '@/components/ui/code-block';
import { fetchTeraboxOGData, fetchTeraboxVideoData } from '@/lib/terabox-actions';

export default function TeraboxPlayerTool() {
  const [formData, setFormData] = useState({
    teraboxUrl: '',
    width: '100%',
    height: '400px',
    autoplay: false,
    controls: true,
    muted: false,
    loop: false
  });

  const [selectedPlayer, setSelectedPlayer] = useState('plyr');
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [generatedIframeCode, setGeneratedIframeCode] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOG, setIsLoadingOG] = useState(false);
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  const [ogData, setOgData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState('');
  const previewRef = useRef(null);

  // Sample data
  const sampleData = {
    teraboxUrl: 'https://teraboxapp.com/s/1EWkWY66FhZKS2WfxwBgd0Q',
    width: '100%',
    height: '500px'
  };

  const playerOptions = {
    plyr: {
      name: 'Plyr',
      themes: ['default', 'dark'],
      cdn: 'https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.min.css',
      js: 'https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.min.js'
    },
    fluidplayer: {
      name: 'Fluid Player',
      themes: ['default', 'dark', 'minimal'],
      cdn: '',
      js: 'https://cdn.jsdelivr.net/npm/fluid-player@3.6.0/dist/fluidplayer.min.js'
    },
    videojs: {
      name: 'Video.js',
      themes: ['default', 'forest', 'sea', 'city'],
      cdn: 'https://cdn.jsdelivr.net/npm/video.js@8.6.1/dist/video-js.css',
      js: 'https://cdn.jsdelivr.net/npm/video.js@8.6.1/dist/video.min.js'
    },
    mediaelements: {
      name: 'MediaElement.js',
      themes: ['default', 'mejs', 'wmp'],
      cdn: 'https://cdn.jsdelivr.net/npm/mediaelement@7.0.3/build/mediaelementplayer.min.css',
      js: 'https://cdn.jsdelivr.net/npm/mediaelement@7.0.3/build/mediaelement-and-player.min.js'
    }
  };

  const fillSampleData = () => {
    setFormData({
      ...formData,
      ...sampleData
    });
    toast.success('Sample data filled!');
  };

  const clearForm = () => {
    setFormData({
      teraboxUrl: '',
      width: '100%',
      height: '400px',
      autoplay: false,
      controls: true,
      muted: false,
      loop: false
    });
    setGeneratedIframeCode('');
    setShareUrl('');
    setOgData(null);
    setVideoData(null);
    setError('');
    toast.success('Form cleared!');
  };

  const fetchTeraboxData = async (url) => {
    try {
      const apiUrl = `https://terabox-latest.shraj.workers.dev/?url=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch video data');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Unable to fetch video from Terabox. Please check the URL and try again.');
    }
  };

  const generateEmbedCode = async () => {
    if (!formData.teraboxUrl) {
      toast.error('Please enter a Terabox URL');
      return;
    }

    if (!formData.teraboxUrl.includes('teraboxapp.com')) {
      toast.error('Please enter a valid Terabox URL');
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
      const ogPromise = fetchTeraboxOGData(formData.teraboxUrl);
      const videoPromise = fetchTeraboxVideoData(formData.teraboxUrl);

      // Get OG data first for quick preview
      const ogResult = await ogPromise;
      setIsLoadingOG(false);
      
      if (ogResult && !ogResult.error) {
        setOgData(ogResult);
        toast.success('Video preview loaded!');
      }

      // Wait for full video data
      const videoResult = await videoPromise;
      setIsLoadingVideo(false);

      if (videoResult.error) {
        throw new Error(videoResult.error);
      }

      if (!videoResult.data || !videoResult.data.download_links || !videoResult.data.download_links.url_2) {
        throw new Error('Invalid video data received');
      }

      setVideoData(videoResult.data);

      // Generate iframe code using the fetched video URL
      const iframeCode = generateIframeCode(
        videoResult.data.download_links.url_2, 
        videoResult.data.name || ogResult?.title || 'Terabox Video', 
        videoResult.data.image || ogResult?.image
      );
      setGeneratedIframeCode(iframeCode);

      // Generate share URL
      const shareData = btoa(JSON.stringify({
        ...formData,
        player: selectedPlayer,
        theme: selectedTheme,
        videoUrl: videoResult.data.download_links.url_2,
        title: videoResult.data.name || ogResult?.title || 'Terabox Video',
        posterUrl: videoResult.data.image || ogResult?.image
      }));
      const baseUrl = window.location.origin;
      setShareUrl(`${baseUrl}/video-player-embed?data=${shareData}`);

      toast.success('Terabox video player generated successfully!');
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
      setIsLoadingOG(false);
      setIsLoadingVideo(false);
    }
  };

  const generateIframeCode = (videoUrl, title, posterUrl) => {
    const shareData = btoa(JSON.stringify({
      ...formData,
      player: selectedPlayer,
      theme: selectedTheme,
      videoUrl: videoUrl,
      title: title || 'Terabox Video',
      posterUrl: posterUrl
    }));

    return `<iframe 
  src="${window.location.origin}/video-player-embed?data=${shareData}" 
  width="${formData.width}" 
  height="${formData.height}"
  style="border: none; border-radius: 8px;"
  allowfullscreen
  title="${title || 'Terabox Video Player'}"
></iframe>`;
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copied to clipboard!`);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const getCleanEmbedUrl = () => {
    if (!videoData) return '';
    
    const shareData = btoa(JSON.stringify({
      ...formData,
      player: selectedPlayer,
      theme: selectedTheme,
      videoUrl: videoData.download_links.url_2,
      title: videoData.name,
      posterUrl: videoData.image
    }));
    return `${window.location.origin}/video-player-embed?data=${shareData}`;
  };

  const openFullscreen = () => {
    if (!generatedIframeCode) {
      toast.error('Please generate the player first');
      return;
    }

    const cleanEmbedUrl = getCleanEmbedUrl();
    window.open(cleanEmbedUrl, '_blank');
  };

  const downloadVideo = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'terabox-video.mp4';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Download started!');
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Terabox Video Player & Downloader</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download and play Terabox videos with custom players. Extract direct download links and create embeddable video players with themes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <SettingsIcon className="h-5 w-5 mr-2" />
                  Terabox Configuration
                </CardTitle>
                <CardDescription>
                  Enter your Terabox URL and configure player settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 pb-4 border-b">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={fillSampleData}
                    className="flex items-center"
                  >
                    <WandIcon className="w-4 h-4 mr-2" />
                    Fill Sample URL
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearForm}
                    className="flex items-center"
                  >
                    <RefreshCwIcon className="w-4 h-4 mr-2" />
                    Clear Form
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teraboxUrl">Terabox URL *</Label>
                  <Input
                    id="teraboxUrl"
                    placeholder="https://teraboxapp.com/s/..."
                    value={formData.teraboxUrl}
                    onChange={(e) => setFormData({ ...formData, teraboxUrl: e.target.value })}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Paste your Terabox share link here
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-2">
                    <AlertCircleIcon className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-destructive">{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      placeholder="100% or 800px"
                      value={formData.width}
                      onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      placeholder="400px or 50vh"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="controls"
                      checked={formData.controls}
                      onChange={(e) => setFormData({ ...formData, controls: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="controls" className="text-sm">Show Controls</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="autoplay"
                      checked={formData.autoplay}
                      onChange={(e) => setFormData({ ...formData, autoplay: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="autoplay" className="text-sm">Autoplay</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="muted"
                      checked={formData.muted}
                      onChange={(e) => setFormData({ ...formData, muted: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="muted" className="text-sm">Muted</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="loop"
                      checked={formData.loop}
                      onChange={(e) => setFormData({ ...formData, loop: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="loop" className="text-sm">Loop</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Player & Theme Selection</CardTitle>
                <CardDescription>
                  Choose your preferred video player library and theme
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Video Player</Label>
                  <Select value={selectedPlayer} onValueChange={setSelectedPlayer}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(playerOptions).map(([key, player]) => (
                        <SelectItem key={key} value={key}>
                          {player.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Theme</Label>
                  <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {playerOptions[selectedPlayer].themes.map((theme) => (
                        <SelectItem key={theme} value={theme}>
                          {theme.charAt(0).toUpperCase() + theme.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={generateEmbedCode}
                    disabled={isLoading || !formData.teraboxUrl}
                    className="w-full"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <LoaderIcon className="h-4 w-4 mr-2 animate-spin" />
                        {isLoadingOG ? 'Fetching preview...' : isLoadingVideo ? 'Loading video...' : 'Processing...'}
                      </>
                    ) : (
                      <>
                        <PlayIcon className="h-4 w-4 mr-2" />
                        Generate Player & Download Links
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Panel */}
          <div className="space-y-6">
            {/* Loading state when fetching initial data */}
            {isLoadingOG && !ogData && !videoData && (
              <Card>
                <CardContent className="py-8">
                  <div className="text-center space-y-3">
                    <LoaderIcon className="h-8 w-8 animate-spin mx-auto text-blue-500" />
                    <div>
                      <h3 className="font-semibold">Fetching Video Preview</h3>
                      <p className="text-sm text-muted-foreground">Getting basic video information...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Show OG data immediately while video data loads */}
            {(ogData || videoData) && (
              <>
                {/* Video Info Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {videoData ? (
                        <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500" />
                      ) : (
                        <LoaderIcon className="h-5 w-5 mr-2 text-blue-500 animate-spin" />
                      )}
                      Video Information
                    </CardTitle>
                    {isLoadingVideo && !videoData && (
                      <CardDescription>Loading video details...</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      {(videoData?.image || ogData?.image) && (
                        <img
                          src={videoData?.image || ogData?.image}
                          alt={videoData?.name || ogData?.title || 'Video thumbnail'}
                          className="w-24 h-16 object-cover rounded border"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {videoData?.name || ogData?.title || 'Loading...'}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {videoData ? (
                            <>
                              <Badge variant="outline">{videoData.type}</Badge>
                              <Badge variant="outline">{formatFileSize(parseInt(videoData.size))}</Badge>
                            </>
                          ) : ogData ? (
                            <Badge variant="outline">{ogData.type}</Badge>
                          ) : (
                            <Badge variant="outline">Loading...</Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Download Buttons - Only show when video data is available */}
                    {videoData && (
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold">Download Options</Label>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadVideo(videoData.download_links.url_1, videoData.name)}
                          >
                            <DownloadIcon className="h-4 w-4 mr-2" />
                            Download (Mirror 1)
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadVideo(videoData.download_links.url_2, videoData.name)}
                          >
                            <DownloadIcon className="h-4 w-4 mr-2" />
                            Download (Mirror 2)
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Loading state for video data */}
                    {isLoadingVideo && !videoData && (
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold">Download Options</Label>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" disabled>
                            <LoaderIcon className="h-4 w-4 mr-2 animate-spin" />
                            Loading...
                          </Button>
                          <Button variant="outline" size="sm" disabled>
                            <LoaderIcon className="h-4 w-4 mr-2 animate-spin" />
                            Loading...
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Player Preview - Only show when video data is available */}
                {videoData && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center">
                          <MonitorIcon className="h-5 w-5 mr-2" />
                          Player Preview
                        </span>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={openFullscreen}
                          >
                            <ExternalLinkIcon className="h-4 w-4 mr-2" />
                            Fullscreen
                          </Button>
                        </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <iframe
                        ref={previewRef}
                        src={shareUrl ? getCleanEmbedUrl() : ''}
                        className="w-full h-64 border-0 rounded"
                        title="Video Player Preview"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      This preview shows your Terabox video player as it will appear when embedded.
                    </div>
                  </CardContent>
                </Card>
                )}

                {/* Generated Output - Only show when video data is available */}
                {videoData && (
                  <>
                    <Card>
                      <CardHeader>
                        <CardTitle>Generated Output</CardTitle>
                        <CardDescription>
                          Copy iframe embed code and share link
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Tabs defaultValue="embed" className="w-full">
                          <TabsList className="grid w-full grid-cols-1">
                            <TabsTrigger value="embed">Embed & Share</TabsTrigger>
                          </TabsList>

                      <TabsContent value="embed" className="space-y-6">
                        {/* Iframe Section */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-lg font-semibold">Iframe Embed Code</Label>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(generatedIframeCode, 'Iframe code')}
                            >
                              <CopyIcon className="h-4 w-4 mr-2" />
                              Copy Iframe
                            </Button>
                          </div>
                          <CodeBlock code={generatedIframeCode} language="html" />
                          <div className="text-sm text-muted-foreground">
                            <p>Use this iframe to embed the Terabox video player in any website.</p>
                          </div>
                        </div>

                        {/* Share Section */}
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <Label className="text-lg font-semibold">Shareable Link</Label>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyToClipboard(shareUrl, 'Share link')}
                              >
                                <CopyIcon className="h-4 w-4 mr-2" />
                                Copy Link
                              </Button>
                            </div>
                            <Input
                              value={shareUrl}
                              readOnly
                              className="font-mono text-xs"
                            />
                            <p className="text-sm text-muted-foreground mt-1">
                              Share this link to let others view your Terabox video player
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={openFullscreen}
                            >
                              <ExternalLinkIcon className="h-4 w-4 mr-2" />
                              Open Fullscreen
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => shareUrl && window.open(shareUrl, '_blank')}
                            >
                              <MonitorIcon className="h-4 w-4 mr-2" />
                              Preview
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Player Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Player:</span>
                        <Badge variant="outline">{playerOptions[selectedPlayer].name}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Theme:</span>
                        <Badge variant="outline">{selectedTheme}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Dimensions:</span>
                        <Badge variant="outline">{formData.width} × {formData.height}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">File Size:</span>
                        <Badge variant="outline">{formatFileSize(parseInt(videoData.size))}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Features:</span>
                        <div className="flex space-x-1">
                          {formData.autoplay && <Badge variant="secondary" className="text-xs">Autoplay</Badge>}
                          {formData.loop && <Badge variant="secondary" className="text-xs">Loop</Badge>}
                          {formData.muted && <Badge variant="secondary" className="text-xs">Muted</Badge>}
                          {formData.controls && <Badge variant="secondary" className="text-xs">Controls</Badge>}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            )}
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 space-y-12">
          {/* How to Use Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">How to Download and Play Terabox Videos</CardTitle>
                <CardDescription>
                  Free Terabox video downloader and player generator in 3 simple steps
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                    <h3 className="font-semibold mb-2">Paste Terabox URL</h3>
                    <p className="text-sm text-muted-foreground">Copy your Terabox share link and paste it into the URL field. Works with all Terabox video formats and sizes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                    <h3 className="font-semibold mb-2">Generate Player</h3>
                    <p className="text-sm text-muted-foreground">Choose your preferred video player and theme, then click generate to fetch download links and create embeddable player</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                    <h3 className="font-semibold mb-2">Download or Embed</h3>
                    <p className="text-sm text-muted-foreground">Download the video directly or copy the iframe code to embed the player in your website or blog</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Advanced Terabox Video Features</CardTitle>
                <CardDescription>
                  Professional Terabox video downloader and player with multiple download mirrors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">🚀 Fast Downloads</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Multiple download mirrors</li>
                      <li>• High-speed direct links</li>
                      <li>• No download limits</li>
                      <li>• Resume support</li>
                      <li>• Original quality preservation</li>
                      <li>• Batch download ready</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">🎮 Player Options</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 4 premium video players</li>
                      <li>• Custom themes and styling</li>
                      <li>• Mobile-responsive design</li>
                      <li>• Fullscreen support</li>
                      <li>• Autoplay and loop options</li>
                      <li>• Volume and speed controls</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">🌐 Universal Compatibility</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• WordPress embedding</li>
                      <li>• Shopify integration</li>
                      <li>• HTML5 iframe support</li>
                      <li>• Cross-browser compatible</li>
                      <li>• Mobile device optimized</li>
                      <li>• Social media ready</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Terabox Video Downloader FAQ</CardTitle>
                <CardDescription>
                  Common questions about downloading and playing Terabox videos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">How to download videos from Terabox for free?</h3>
                    <p className="text-muted-foreground">Simply paste your Terabox share URL into our tool and click generate. You'll get multiple download mirrors with direct links to download Terabox videos without any restrictions or premium accounts required.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Can I download large Terabox files and movies?</h3>
                    <p className="text-muted-foreground">Yes! Our Terabox downloader supports files of any size including full movies, TV shows, and large video files. The download links work for both small clips and multi-gigabyte movies stored on Terabox.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Is this Terabox video downloader safe and legal?</h3>
                    <p className="text-muted-foreground">Our tool is completely safe and only extracts publicly shared Terabox links. We don't store any videos or personal data. Always ensure you have permission to download content and respect copyright laws.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Why are there two download links for each Terabox video?</h3>
                    <p className="text-muted-foreground">We provide multiple download mirrors to ensure maximum download speed and reliability. If one link is slow or doesn't work, you can try the alternate mirror for better performance and faster downloads.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Can I embed Terabox videos on my website or blog?</h3>
                    <p className="text-muted-foreground">Absolutely! Our tool generates embeddable iframe code that you can paste into any website, WordPress blog, or social media platform. The embedded player is responsive and works on all devices.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Does this work with password-protected Terabox links?</h3>
                    <p className="text-muted-foreground">Currently, our tool works best with publicly shared Terabox links. For password-protected links, make sure the link is accessible without requiring additional authentication.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">What video quality can I download from Terabox?</h3>
                    <p className="text-muted-foreground">You can download videos in their original quality as uploaded to Terabox. This includes HD, Full HD, 4K, and even higher resolutions depending on the source video quality.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Can I use this on mobile devices to download Terabox videos?</h3>
                    <p className="text-muted-foreground">Yes! Our Terabox video downloader is fully mobile-responsive and works perfectly on smartphones and tablets. You can download and stream Terabox videos on any mobile device.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Use Cases Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Perfect for Every Terabox Video Need</CardTitle>
                <CardDescription>
                  Download, stream, and embed Terabox videos for any purpose
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">🎬 Movie Downloads</h4>
                    <p className="text-sm text-muted-foreground">Download full movies and TV shows from Terabox with multiple mirrors for fast, reliable downloads in original quality.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">📚 Educational Content</h4>
                    <p className="text-sm text-muted-foreground">Access educational videos, courses, and tutorials shared on Terabox for offline learning and study purposes.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">💼 Business Presentations</h4>
                    <p className="text-sm text-muted-foreground">Download corporate videos, training materials, and business presentations shared via Terabox links.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🌐 Website Embedding</h4>
                    <p className="text-sm text-muted-foreground">Embed Terabox videos on websites, blogs, and social media with custom players and professional styling.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">📱 Mobile Streaming</h4>
                    <p className="text-sm text-muted-foreground">Stream Terabox videos directly on mobile devices with optimized players for smartphones and tablets.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🎵 Media Collections</h4>
                    <p className="text-sm text-muted-foreground">Download and organize video collections, music videos, and media libraries shared on Terabox platforms.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
