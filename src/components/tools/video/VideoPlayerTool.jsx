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
  LinkIcon,
  WandIcon,
  RefreshCwIcon
} from 'lucide-react';
import { toast } from 'sonner';
import CodeBlock from '@/components/ui/code-block';

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
  const [generatedIframeCode, setGeneratedIframeCode] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const previewRef = useRef(null);

  // Sample data
  const sampleData = {
    title: 'Big Buck Bunny',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4',
    posterUrl: 'https://sh20raj.github.io/Sopplayer/sample.png',
    description: 'Big Buck Bunny is a 2008 computer-animated comedy short film featuring the adventures of a giant rabbit who bullies a trio of rodents, only to have the tables turned when the rodents fight back. This open-source 3D animated short film was created by the Blender Foundation.',
    width: '100%',
    height: '500px'
  };

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

  const fillSampleData = () => {
    setFormData({
      ...formData,
      ...sampleData
    });
    toast.success('Sample data filled!');
  };

  const clearForm = () => {
    setFormData({
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
    setGeneratedIframeCode('');
    setShareUrl('');
    toast.success('Form cleared!');
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

    // Generate iframe code
    const iframeCode = generateIframeCode();
    setGeneratedIframeCode(iframeCode);

    // Generate share URL (base64 encoded data)
    const shareData = btoa(JSON.stringify({
      ...formData,
      player: selectedPlayer,
      theme: selectedTheme
    }));
    const baseUrl = window.location.origin;
    setShareUrl(`${baseUrl}/video-player-embed?data=${shareData}`);

    setIsLoading(false);
    toast.success('Video player generated successfully!');
  };

  const generateIframeCode = () => {
    const shareData = btoa(JSON.stringify({
      ...formData,
      player: selectedPlayer,
      theme: selectedTheme
    }));

    return `<iframe 
  src="${window.location.origin}/video-player-embed?data=${shareData}" 
  width="${formData.width}" 
  height="${formData.height}"
  style="border: none; border-radius: 8px;"
  allowfullscreen
  title="${formData.title || 'Video Player'}"
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

  const downloadHTML = () => {
    if (!generatedIframeCode) {
      toast.error('Please generate the player first');
      return;
    }

    // Generate complete standalone HTML with the actual player
    const playerId = `video-player-${Date.now()}`;
    const player = playerOptions[selectedPlayer];
    let fullscreenHtml = '';

    switch (selectedPlayer) {
      case 'plyr':
        fullscreenHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.title || 'Video Player'}</title>
    <link rel="stylesheet" href="${player.cdn}" />
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #000;
            overflow: hidden;
        }
        .player-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .plyr {
            width: 100%;
            height: 100%;
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
    <div class="player-container">
        <video id="${playerId}" 
               ${formData.controls ? 'controls' : ''}
               ${formData.autoplay ? 'autoplay' : ''}
               ${formData.muted ? 'muted' : ''}
               ${formData.loop ? 'loop' : ''}
               ${formData.posterUrl ? `poster="${formData.posterUrl}"` : ''}>
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
        fullscreenHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.title || 'Video Player'}</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #000;
            overflow: hidden;
        }
        .player-container {
            width: 100vw;
            height: 100vh;
        }
        .fluid-video-wrapper {
            width: 100%;
            height: 100%;
        }
        ${selectedTheme === 'dark' ? `
        .fp_player_container {
            background: #000 !important;
        }` : ''}
    </style>
</head>
<body>
    <div class="player-container">
        <video id="${playerId}" 
               ${formData.controls ? 'controls' : ''}
               ${formData.autoplay ? 'autoplay' : ''}
               ${formData.muted ? 'muted' : ''}
               ${formData.loop ? 'loop' : ''}
               ${formData.posterUrl ? `poster="${formData.posterUrl}"` : ''}>
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
        fullscreenHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.title || 'Video Player'}</title>
    <link rel="stylesheet" href="${player.cdn}" />
    ${selectedTheme !== 'default' ? `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@videojs/themes@1.0.1/dist/${selectedTheme}/index.css" />` : ''}
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #000;
            overflow: hidden;
        }
        .player-container {
            width: 100vw;
            height: 100vh;
        }
        .video-js {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <div class="player-container">
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
            fill: true,
            autoplay: ${formData.autoplay},
            muted: ${formData.muted},
            loop: ${formData.loop}
        });
    </script>
</body>
</html>`;
        break;

      case 'mediaelements':
        fullscreenHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.title || 'Video Player'}</title>
    <link rel="stylesheet" href="${player.cdn}" />
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #000;
            overflow: hidden;
        }
        .player-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .mejs__container {
            width: 100%;
            height: 100%;
        }
        ${selectedTheme === 'wmp' ? `
        .mejs__container .mejs__controls {
            background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9));
        }` : ''}
    </style>
</head>
<body>
    <div class="player-container">
        <video id="${playerId}" 
               ${formData.controls ? 'controls' : ''}
               ${formData.autoplay ? 'autoplay' : ''}
               ${formData.muted ? 'muted' : ''}
               ${formData.loop ? 'loop' : ''}
               ${formData.posterUrl ? `poster="${formData.posterUrl}"` : ''}>
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

    const blob = new Blob([fullscreenHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `video-player-${formData.title.replace(/\s+/g, '-').toLowerCase() || 'player'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Fullscreen HTML file downloaded!');
  };

  const getCleanEmbedUrl = () => {
    const shareData = btoa(JSON.stringify({
      ...formData,
      player: selectedPlayer,
      theme: selectedTheme
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
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 pb-4 border-b">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={fillSampleData}
                    className="flex items-center"
                  >
                    <WandIcon className="w-4 h-4 mr-2" />
                    Fill Sample Data
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Video Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter video title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="videoUrl">Video URL *</Label>
                    <Input
                      id="videoUrl"
                      placeholder="https://example.com/video.mp4"
                      value={formData.videoUrl}
                      onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, posterUrl: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter video description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
            {generatedIframeCode && (
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
                    <div className="bg-gray-100 dark:bg-gray-800  rounded-lg">
                      <iframe
                        ref={previewRef}
                        src={shareUrl ? getCleanEmbedUrl() : ''}
                        className="w-full h-64 border-0 rounded"
                        title="Video Player Preview"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      This preview shows your video player as it will appear when embedded in other websites (clean YouTube-style embed).
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Generated Output</CardTitle>
                    <CardDescription>
                      Copy iframe embed code, share link, or download HTML file
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
                            <p>Use this iframe to embed the clean video player (YouTube-style) in any website. Shows only the player without navigation or extra UI elements.</p>
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
                              Share this link to let others view your video player with full page UI (navigation, description, etc.)
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={downloadHTML}
                            >
                              <DownloadIcon className="h-4 w-4 mr-2" />
                              Download HTML
                            </Button>
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

        {/* SEO Content Section */}
        <div className="mt-16 space-y-12">
          {/* How to Use Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">How to Use the Video Player Generator</CardTitle>
                <CardDescription>
                  Create professional video players in 3 simple steps - no coding required
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                    <h3 className="font-semibold mb-2">Configure Your Player</h3>
                    <p className="text-sm text-muted-foreground">Enter your video URL, title, poster image, and choose from Plyr, Fluid Player, Video.js, or MediaElement.js libraries</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                    <h3 className="font-semibold mb-2">Generate Code</h3>
                    <p className="text-sm text-muted-foreground">Click generate to create iframe embed code with custom themes and responsive design</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                    <h3 className="font-semibold mb-2">Embed Anywhere</h3>
                    <p className="text-sm text-muted-foreground">Copy the generated code and paste it into your website, blog, or application. Works with WordPress, Shopify, and all platforms</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Why Use This Tool Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Our Video Player Generator?</CardTitle>
                <CardDescription>
                  The most comprehensive online video player creator with professional features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">🎬 Multiple Player Libraries</h3>
                      <p className="text-muted-foreground">Choose from industry-leading video players: Plyr for modern design, Fluid Player for advertising, Video.js for customization, and MediaElement.js for compatibility. Each player offers unique features for different use cases.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">🎨 Custom Themes & Styling</h3>
                      <p className="text-muted-foreground">Apply professional themes including dark mode, forest, sea, and city themes. Customize colors, controls, and appearance to match your brand identity perfectly.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">📱 Fully Responsive Design</h3>
                      <p className="text-muted-foreground">Generated video players automatically adapt to all screen sizes - desktop, tablet, and mobile. Perfect for responsive websites and mobile-first design approaches.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">⚡ Fast CDN Delivery</h3>
                      <p className="text-muted-foreground">All video player libraries are loaded from jsDelivr CDN for maximum performance and reliability. No need to host files or manage dependencies.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">🔧 Multiple Export Options</h3>
                      <p className="text-muted-foreground">Get iframe embed code for universal compatibility. Download complete HTML files or copy iframe components for easy embedding.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">🚀 No Coding Required</h3>
                      <p className="text-muted-foreground">Visual interface makes it easy for anyone to create professional video players. No JavaScript knowledge needed - just point, click, and generate.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Advanced Video Player Features</CardTitle>
                <CardDescription>
                  Professional-grade video player capabilities for modern websites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">🎮 Player Controls</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Play/pause buttons</li>
                      <li>• Progress bar scrubbing</li>
                      <li>• Volume control</li>
                      <li>• Fullscreen toggle</li>
                      <li>• Playback speed control</li>
                      <li>• Quality selection</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">⚙️ Customization Options</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Custom poster images</li>
                      <li>• Autoplay settings</li>
                      <li>• Loop configuration</li>
                      <li>• Muted start option</li>
                      <li>• Responsive dimensions</li>
                      <li>• Theme customization</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">🌐 Integration Support</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• WordPress embedding</li>
                      <li>• Shopify compatibility</li>
                      <li>• Iframe embedding</li>
                      <li>• HTML5 compliant</li>
                      <li>• Cross-browser support</li>
                      <li>• Mobile optimization</li>
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
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Common questions about our free video player generator tool
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">What video formats are supported by the generated players?</h3>
                    <p className="text-muted-foreground">Our video player generator supports all modern video formats including MP4, WebM, OGV, and HLS streaming. The players automatically detect the best format for each browser to ensure optimal playback quality and compatibility across all devices.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Can I customize the video player controls and appearance?</h3>
                    <p className="text-muted-foreground">Yes! You can customize video player themes, colors, control layouts, and styling. Choose from multiple themes like dark mode, forest, sea, and city themes. Each player library offers different customization options for branding and user experience optimization.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Is the video player generator completely free to use?</h3>
                    <p className="text-muted-foreground">Absolutely! Our online video player generator is 100% free with no watermarks, registration requirements, or usage limits. Generate unlimited video players, download HTML files, and embed them anywhere without any restrictions or hidden costs.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">How do I embed the generated video player in WordPress?</h3>
                    <p className="text-muted-foreground">To embed in WordPress, copy the HTML embed code and paste it into a Custom HTML block in the WordPress editor. Alternatively, use the iframe embed code which works universally across all WordPress themes and page builders like Elementor, Divi, and Gutenberg.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">What's the difference between the player libraries (Plyr, Video.js, etc.)?</h3>
                    <p className="text-muted-foreground">Each video player library offers unique advantages: Plyr provides modern design and smooth animations, Video.js offers extensive customization and plugin support, Fluid Player includes advertising capabilities, and MediaElement.js ensures maximum browser compatibility including older versions.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Are the generated video players mobile-friendly and responsive?</h3>
                    <p className="text-muted-foreground">Yes! All generated video players are fully responsive and mobile-optimized. They automatically adapt to different screen sizes, support touch controls on mobile devices, and provide optimal viewing experiences across desktop, tablet, and smartphone platforms.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Can I use the video player for commercial websites and projects?</h3>
                    <p className="text-muted-foreground">Absolutely! The generated video players can be used for any purpose including commercial websites, business presentations, e-learning platforms, and client projects. There are no licensing restrictions or attribution requirements for commercial use.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Do the video players work with live streaming and HLS videos?</h3>
                    <p className="text-muted-foreground">Yes, most player libraries support live streaming protocols including HLS (HTTP Live Streaming) and DASH. This makes them perfect for live events, webinars, sports streaming, and real-time video content delivery with adaptive bitrate streaming.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Use Cases Section */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Perfect For Every Video Need</CardTitle>
                <CardDescription>
                  Versatile video player solutions for businesses, creators, and developers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">🎓 E-Learning Platforms</h4>
                    <p className="text-sm text-muted-foreground">Create engaging course videos with custom branding, progress tracking, and mobile-friendly playback for online education and training platforms.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🏢 Business Websites</h4>
                    <p className="text-sm text-muted-foreground">Embed product demos, testimonials, and corporate videos with professional styling that matches your brand identity and website design.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">📱 Social Media Content</h4>
                    <p className="text-sm text-muted-foreground">Optimize videos for social media embedding with custom thumbnails, autoplay settings, and mobile-first responsive design.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🛒 E-commerce Stores</h4>
                    <p className="text-sm text-muted-foreground">Showcase products with high-quality video players featuring custom controls, thumbnails, and seamless Shopify/WooCommerce integration.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">📰 News & Media</h4>
                    <p className="text-sm text-muted-foreground">Deliver breaking news and media content with fast-loading, bandwidth-optimized video players and adaptive streaming support.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">🎬 Portfolio Websites</h4>
                    <p className="text-sm text-muted-foreground">Display creative work, showreels, and portfolio pieces with elegant video players that highlight your content professionally.</p>
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
