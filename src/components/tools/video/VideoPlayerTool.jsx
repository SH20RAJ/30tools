'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  CodeIcon,
  LinkIcon
} from 'lucide-react';
import { toast } from 'sonner';

export default function VideoPlayerTool() {
  const [formData, setFormData] = useState({
    title: '',
    videoUrl: '',
    posterUrl: '',
    description: '',
    width: '100%',
    height: '400px',
    autoplay: false,
    controls: true,
    muted: false,
    loop: false
  });

  const [selectedPlayer, setSelectedPlayer] = useState('plyr');
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [generatedCode, setGeneratedCode] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const previewRef = useRef(null);

  // Load shared configuration from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('data');
    
    if (data) {
      try {
        const decodedData = JSON.parse(atob(data));
        setFormData({
          title: decodedData.title || '',
          videoUrl: decodedData.videoUrl || '',
          posterUrl: decodedData.posterUrl || '',
          description: decodedData.description || '',
          width: decodedData.width || '100%',
          height: decodedData.height || '400px',
          autoplay: decodedData.autoplay || false,
          controls: decodedData.controls !== false,
          muted: decodedData.muted || false,
          loop: decodedData.loop || false
        });
        setSelectedPlayer(decodedData.player || 'plyr');
        setSelectedTheme(decodedData.theme || 'default');
        
        // Auto-generate if URL is provided
        if (decodedData.videoUrl) {
          setTimeout(() => {
            generateEmbedCode();
          }, 500);
        }
        
        toast.success('Configuration loaded from share link!');
      } catch (error) {
        toast.error('Invalid share link data');
      }
    }
  }, []);

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

  const generateEmbedCode = () => {
    if (!formData.videoUrl) {
      toast.error('Please enter a video URL');
      return;
    }

    setIsLoading(true);
    
    const playerId = `video-player-${Date.now()}`;
    const player = playerOptions[selectedPlayer];
    
    let embedCode = '';
    
    switch (selectedPlayer) {
      case 'plyr':
        embedCode = `
<!DOCTYPE html>
<html>
<head>
    <title>${formData.title || 'Video Player'}</title>
    <link rel="stylesheet" href="${player.cdn}" />
    <style>
        .plyr {
            width: ${formData.width};
            height: ${formData.height};
        }
        ${selectedTheme === 'dark' ? `
        .plyr {
            --plyr-color-main: #00b3ff;
            --plyr-video-background: #000;
            --plyr-menu-background: rgba(0, 0, 0, 0.9);
            --plyr-menu-color: #fff;
        }` : ''}
    </style>
</head>
<body>
    <div style="max-width: 100%; margin: 0 auto; padding: 20px;">
        ${formData.title ? `<h2 style="margin-bottom: 10px; color: #333;">${formData.title}</h2>` : ''}
        ${formData.description ? `<p style="margin-bottom: 15px; color: #666;">${formData.description}</p>` : ''}
        
        <video id="${playerId}" 
               ${formData.controls ? 'controls' : ''}
               ${formData.autoplay ? 'autoplay' : ''}
               ${formData.muted ? 'muted' : ''}
               ${formData.loop ? 'loop' : ''}
               ${formData.posterUrl ? `poster="${formData.posterUrl}"` : ''}
               style="width: ${formData.width}; height: ${formData.height};">
            <source src="${formData.videoUrl}" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    
    <script src="${player.js}"></script>
    <script>
        const player = new Plyr('#${playerId}', {
            controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'settings', 'fullscreen'],
            settings: ['quality', 'speed'],
            autoplay: ${formData.autoplay},
            muted: ${formData.muted},
            loop: { active: ${formData.loop} }
        });
    </script>
</body>
</html>`;
        break;

      case 'fluidplayer':
        embedCode = `
<!DOCTYPE html>
<html>
<head>
    <title>${formData.title || 'Video Player'}</title>
    <style>
        .fluid-video-wrapper {
            width: ${formData.width};
            height: ${formData.height};
            margin: 0 auto;
        }
        ${selectedTheme === 'dark' ? `
        .fp_player_container {
            background: #000 !important;
        }` : ''}
    </style>
</head>
<body>
    <div style="max-width: 100%; margin: 0 auto; padding: 20px;">
        ${formData.title ? `<h2 style="margin-bottom: 10px; color: #333;">${formData.title}</h2>` : ''}
        ${formData.description ? `<p style="margin-bottom: 15px; color: #666;">${formData.description}</p>` : ''}
        
        <video id="${playerId}" 
               ${formData.controls ? 'controls' : ''}
               ${formData.autoplay ? 'autoplay' : ''}
               ${formData.muted ? 'muted' : ''}
               ${formData.loop ? 'loop' : ''}
               ${formData.posterUrl ? `poster="${formData.posterUrl}"` : ''}
               style="width: ${formData.width}; height: ${formData.height};">
            <source src="${formData.videoUrl}" type="video/mp4" />
        </video>
    </div>
    
    <script src="${player.js}"></script>
    <script>
        fluidPlayer('${playerId}', {
            layoutControls: {
                primaryColor: "${selectedTheme === 'dark' ? '#ffffff' : '#333333'}",
                fillToContainer: true,
                autoplay: ${formData.autoplay},
                mute: ${formData.muted},
                loop: ${formData.loop}
            }
        });
    </script>
</body>
</html>`;
        break;

      case 'videojs':
        const themeClass = selectedTheme !== 'default' ? `vjs-theme-${selectedTheme}` : '';
        embedCode = `
<!DOCTYPE html>
<html>
<head>
    <title>${formData.title || 'Video Player'}</title>
    <link rel="stylesheet" href="${player.cdn}" />
    ${selectedTheme !== 'default' ? `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@videojs/themes@1.0.1/dist/${selectedTheme}/index.css" />` : ''}
    <style>
        .video-js {
            width: ${formData.width};
            height: ${formData.height};
        }
    </style>
</head>
<body>
    <div style="max-width: 100%; margin: 0 auto; padding: 20px;">
        ${formData.title ? `<h2 style="margin-bottom: 10px; color: #333;">${formData.title}</h2>` : ''}
        ${formData.description ? `<p style="margin-bottom: 15px; color: #666;">${formData.description}</p>` : ''}
        
        <video id="${playerId}" 
               class="video-js ${themeClass}"
               ${formData.controls ? 'controls' : ''}
               ${formData.autoplay ? 'autoplay' : ''}
               ${formData.muted ? 'muted' : ''}
               ${formData.loop ? 'loop' : ''}
               ${formData.posterUrl ? `poster="${formData.posterUrl}"` : ''}
               data-setup="{}">
            <source src="${formData.videoUrl}" type="video/mp4" />
        </video>
    </div>
    
    <script src="${player.js}"></script>
    <script>
        var player = videojs('${playerId}', {
            fluid: true,
            responsive: true,
            autoplay: ${formData.autoplay},
            muted: ${formData.muted},
            loop: ${formData.loop}
        });
    </script>
</body>
</html>`;
        break;

      case 'mediaelements':
        embedCode = `
<!DOCTYPE html>
<html>
<head>
    <title>${formData.title || 'Video Player'}</title>
    <link rel="stylesheet" href="${player.cdn}" />
    <style>
        .mejs__container {
            width: ${formData.width};
            height: ${formData.height};
        }
        ${selectedTheme === 'wmp' ? `
        .mejs__container .mejs__controls {
            background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9));
        }` : ''}
    </style>
</head>
<body>
    <div style="max-width: 100%; margin: 0 auto; padding: 20px;">
        ${formData.title ? `<h2 style="margin-bottom: 10px; color: #333;">${formData.title}</h2>` : ''}
        ${formData.description ? `<p style="margin-bottom: 15px; color: #666;">${formData.description}</p>` : ''}
        
        <video id="${playerId}" 
               ${formData.controls ? 'controls' : ''}
               ${formData.autoplay ? 'autoplay' : ''}
               ${formData.muted ? 'muted' : ''}
               ${formData.loop ? 'loop' : ''}
               ${formData.posterUrl ? `poster="${formData.posterUrl}"` : ''}
               style="width: ${formData.width}; height: ${formData.height};">
            <source src="${formData.videoUrl}" type="video/mp4" />
        </video>
    </div>
    
    <script src="${player.js}"></script>
    <script>
        new MediaElementPlayer('#${playerId}', {
            features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen'],
            autoplay: ${formData.autoplay},
            loop: ${formData.loop},
            muted: ${formData.muted}
        });
    </script>
</body>
</html>`;
        break;
    }

    setGeneratedCode(embedCode);
    
    // Generate share URL (base64 encoded data)
    const shareData = btoa(JSON.stringify({
      ...formData,
      player: selectedPlayer,
      theme: selectedTheme
    }));
    setShareUrl(`${window.location.origin}/video-player?data=${shareData}`);
    
    setIsLoading(false);
    toast.success('Video player generated successfully!');
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copied to clipboard!`);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const downloadHTML = () => {
    if (!generatedCode) {
      toast.error('Please generate the player first');
      return;
    }

    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `video-player-${formData.title.replace(/\s+/g, '-').toLowerCase() || 'player'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('HTML file downloaded!');
  };

  const openFullscreen = () => {
    if (!generatedCode) {
      toast.error('Please generate the player first');
      return;
    }

    const newWindow = window.open('', '_blank');
    newWindow.document.write(generatedCode);
    newWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Video Player Generator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create customizable video players with different themes and libraries. 
            Generate embed codes, share links, and fullscreen players.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <SettingsIcon className="h-5 w-5 mr-2" />
                  Video Configuration
                </CardTitle>
                <CardDescription>
                  Configure your video player settings and appearance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Video Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter video title"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="videoUrl">Video URL *</Label>
                    <Input
                      id="videoUrl"
                      placeholder="https://example.com/video.mp4"
                      value={formData.videoUrl}
                      onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="posterUrl">Poster Image URL</Label>
                  <Input
                    id="posterUrl"
                    placeholder="https://example.com/poster.jpg"
                    value={formData.posterUrl}
                    onChange={(e) => setFormData({...formData, posterUrl: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter video description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      placeholder="100% or 800px"
                      value={formData.width}
                      onChange={(e) => setFormData({...formData, width: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      placeholder="400px or 50vh"
                      value={formData.height}
                      onChange={(e) => setFormData({...formData, height: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="controls"
                      checked={formData.controls}
                      onChange={(e) => setFormData({...formData, controls: e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="controls" className="text-sm">Show Controls</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="autoplay"
                      checked={formData.autoplay}
                      onChange={(e) => setFormData({...formData, autoplay: e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="autoplay" className="text-sm">Autoplay</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="muted"
                      checked={formData.muted}
                      onChange={(e) => setFormData({...formData, muted: e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="muted" className="text-sm">Muted</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="loop"
                      checked={formData.loop}
                      onChange={(e) => setFormData({...formData, loop: e.target.checked})}
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
                    disabled={isLoading || !formData.videoUrl}
                    className="w-full"
                    size="lg"
                  >
                    <PlayIcon className="h-4 w-4 mr-2" />
                    {isLoading ? 'Generating...' : 'Generate Video Player'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Panel */}
          <div className="space-y-6">
            {generatedCode && (
              <>
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
                        srcDoc={generatedCode}
                        className="w-full h-64 border-0 rounded"
                        title="Video Player Preview"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Generated Output</CardTitle>
                    <CardDescription>
                      Copy embed code, share link, or download HTML file
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="embed" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="embed">Embed Code</TabsTrigger>
                        <TabsTrigger value="share">Share Link</TabsTrigger>
                        <TabsTrigger value="actions">Actions</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="embed" className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>HTML Embed Code</Label>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(generatedCode, 'Embed code')}
                          >
                            <CopyIcon className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                        <Textarea
                          value={generatedCode}
                          readOnly
                          rows={8}
                          className="font-mono text-xs"
                        />
                      </TabsContent>
                      
                      <TabsContent value="share" className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>Shareable Link</Label>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(shareUrl, 'Share link')}
                          >
                            <CopyIcon className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                        <Input
                          value={shareUrl}
                          readOnly
                          className="font-mono"
                        />
                        <p className="text-sm text-muted-foreground">
                          Share this link to let others use your video player configuration
                        </p>
                      </TabsContent>
                      
                      <TabsContent value="actions" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Button
                            variant="outline"
                            onClick={downloadHTML}
                            className="w-full"
                          >
                            <DownloadIcon className="h-4 w-4 mr-2" />
                            Download HTML
                          </Button>
                          
                          <Button
                            variant="outline"
                            onClick={() => copyToClipboard(shareUrl, 'Share link')}
                            className="w-full"
                          >
                            <ShareIcon className="h-4 w-4 mr-2" />
                            Share Link
                          </Button>
                          
                          <Button
                            variant="outline"
                            onClick={() => copyToClipboard(generatedCode, 'Embed code')}
                            className="w-full"
                          >
                            <CodeIcon className="h-4 w-4 mr-2" />
                            Copy Embed
                          </Button>
                          
                          <Button
                            variant="outline"
                            onClick={openFullscreen}
                            className="w-full"
                          >
                            <ExternalLinkIcon className="h-4 w-4 mr-2" />
                            Open Fullscreen
                          </Button>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
