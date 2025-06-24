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
    height: '400px',
    autoplay: false,
    controls: true,
    muted: false,
    loop: false
  };

  const playerOptions = {
    plyr: { name: 'Plyr.js', description: 'Modern HTML5 video player' },
    videojs: { name: 'Video.js', description: 'HTML5 video player' },
    jwplayer: { name: 'JW Player', description: 'Professional video player' },
    flowplayer: { name: 'Flowplayer', description: 'Commercial HTML5 player' }
  };

  const themeOptions = [
    'default', 'dark', 'light', 'blue', 'red', 'green', 'purple', 'orange'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const loadSampleData = () => {
    setFormData(sampleData);
    toast.success('Sample data loaded!');
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
        ogResult?.image || videoResult.data.image 
      );
      setGeneratedIframeCode(iframeCode);

      // Generate share URL
      const shareData = btoa(JSON.stringify({
        ...formData,
        player: selectedPlayer,
        theme: selectedTheme,
        videoUrl: videoResult.data.download_links.url_2,
        title: videoResult.data.name || ogResult?.title || 'Terabox Video',
        posterUrl: ogResult?.image || videoResult.data.image 
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
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const downloadVideo = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'terabox-video';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Download started!');
  };

  const openFullscreen = () => {
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  const getCleanEmbedUrl = () => {
    return shareUrl.replace('/video-player-embed', '/video-player-embed');
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
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
            {/* URL Input */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LinkIcon className="h-5 w-5 mr-2" />
                  Terabox URL
                </CardTitle>
                <CardDescription>
                  Enter your Terabox video share link to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="terabox-url">Video URL</Label>
                  <Input
                    id="terabox-url"
                    placeholder="https://teraboxapp.com/s/..."
                    value={formData.teraboxUrl}
                    onChange={(e) => handleInputChange('teraboxUrl', e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={loadSampleData}
                  >
                    <WandIcon className="h-4 w-4 mr-2" />
                    Load Sample
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearForm}
                  >
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Player Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PlayIcon className="h-5 w-5 mr-2" />
                  Player & Theme
                </CardTitle>
                <CardDescription>
                  Choose your preferred video player and theme
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Video Player</Label>
                    <Select value={selectedPlayer} onValueChange={setSelectedPlayer}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(playerOptions).map(([key, option]) => (
                          <SelectItem key={key} value={key}>
                            {option.name}
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
                        {themeOptions.map(theme => (
                          <SelectItem key={theme} value={theme}>
                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>{playerOptions[selectedPlayer].name}:</strong> {playerOptions[selectedPlayer].description}
                </div>
              </CardContent>
            </Card>

            {/* Video Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <SettingsIcon className="h-5 w-5 mr-2" />
                  Video Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      value={formData.width}
                      onChange={(e) => handleInputChange('width', e.target.value)}
                      placeholder="100%"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      value={formData.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      placeholder="400px"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="autoplay"
                      checked={formData.autoplay}
                      onChange={(e) => handleInputChange('autoplay', e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="autoplay" className="text-sm">Autoplay</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="controls"
                      checked={formData.controls}
                      onChange={(e) => handleInputChange('controls', e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="controls" className="text-sm">Show Controls</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="muted"
                      checked={formData.muted}
                      onChange={(e) => handleInputChange('muted', e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="muted" className="text-sm">Muted</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="loop"
                      checked={formData.loop}
                      onChange={(e) => handleInputChange('loop', e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="loop" className="text-sm">Loop</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Generate Button */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {error && (
                    <div className="flex items-center p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                      <AlertCircleIcon className="h-5 w-5 text-destructive mr-2" />
                      <span className="text-sm text-destructive">{error}</span>
                    </div>
                  )}
                  <Button
                    onClick={generateEmbedCode}
                    disabled={isLoading}
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
              <div className="space-y-6">
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
                )}

                {/* Player Information - Only show when video data is available */}
                {videoData && (
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
              </div>
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
                    <h3 className="font-semibold mb-2">Choose Player & Theme</h3>
                    <p className="text-sm text-muted-foreground">Select your preferred video player (Plyr, Video.js, etc.) and customize the theme and settings</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                    <h3 className="font-semibold mb-2">Generate Player</h3>
                    <p className="text-sm text-muted-foreground">Get direct download links, embed code, and shareable player link instantly</p>
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
                  Professional video downloading and embedding capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">🚀 Fast Direct Downloads</h4>
                    <p className="text-sm text-muted-foreground">Get high-speed download links with multiple mirror servers for reliable video downloading from Terabox cloud storage.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🎨 Custom Video Players</h4>
                    <p className="text-sm text-muted-foreground">Choose from professional players like Plyr.js, Video.js, and JW Player with custom themes and responsive design.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">📱 Mobile Responsive</h4>
                    <p className="text-sm text-muted-foreground">Generated players work perfectly on mobile devices, tablets, and desktop with adaptive streaming quality.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🔗 Easy Embedding</h4>
                    <p className="text-sm text-muted-foreground">One-click iframe embed code generation for blogs, websites, and social media platforms with SEO optimization.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">⚡ No Registration</h4>
                    <p className="text-sm text-muted-foreground">Use our Terabox downloader without creating accounts, completely free with unlimited video processing.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🔒 Privacy Protected</h4>
                    <p className="text-sm text-muted-foreground">All video processing happens securely without storing your personal data or Terabox login credentials.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Use Cases Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Terabox Video Use Cases</CardTitle>
                <CardDescription>
                  Perfect for content creators, educators, and media professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">📚 Educational Content</h4>
                    <p className="text-sm text-muted-foreground">Download and embed educational videos, tutorials, and online course materials shared via Terabox links.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🎬 Content Creation</h4>
                    <p className="text-sm text-muted-foreground">Access raw footage, video assets, and collaborative content stored on Terabox for video editing projects.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">💼 Business Presentations</h4>
                    <p className="text-sm text-muted-foreground">Download corporate videos, training materials, and presentation recordings from Terabox cloud storage.</p>
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
