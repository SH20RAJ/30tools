'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  PlayIcon, 
  ExternalLinkIcon,
  MonitorIcon
} from 'lucide-react';

export default function TeraboxPlayerSelector({ 
  selectedPlayer, 
  onPlayerChange, 
  selectedTheme, 
  onThemeChange,
  videoData 
}) {
  const playerOptions = {
    plyr: {
      name: 'Plyr.js',
      description: 'Modern HTML5 video player with beautiful UI',
      features: ['Custom controls', 'Keyboard shortcuts', 'Fullscreen API', 'Picture-in-picture'],
      themes: ['default', 'dark', 'light', 'blue', 'red', 'green'],
      pros: ['Lightweight', 'Responsive', 'Accessible', 'Modern design']
    },
    videojs: {
      name: 'Video.js',
      description: 'Industry standard HTML5 video player',
      features: ['Plugin ecosystem', 'HLS support', 'DASH support', 'VR support'],
      themes: ['default', 'city', 'fantasy', 'forest', 'sea', 'tech'],
      pros: ['Highly customizable', 'Large community', 'Plugin support', 'Enterprise ready']
    },
    mediaelements: {
      name: 'MediaElement.js',
      description: 'Universal media player with Flash fallback',
      features: ['Flash fallback', 'Silverlight fallback', 'YouTube API', 'Vimeo API'],
      themes: ['default', 'minimal', 'classic', 'modern', 'retro'],
      pros: ['Cross-browser', 'Legacy support', 'Multiple formats', 'API integration']
    },
    fluidplayer: {
      name: 'Fluid Player',
      description: 'Free HTML5 video player with advertising support',
      features: ['VAST ads', 'VPAID support', 'Analytics', 'Responsive design'],
      themes: ['default', 'dark', 'light', 'minimal', 'branded'],
      pros: ['Ad support', 'Analytics', 'Free', 'Commercial use']
    }
  };

  const themeDescriptions = {
    default: 'Standard player theme with balanced colors',
    dark: 'Dark theme perfect for night viewing',
    light: 'Clean light theme for bright environments',
    blue: 'Professional blue accent theme',
    red: 'Bold red accent theme',
    green: 'Nature-inspired green theme',
    purple: 'Creative purple theme',
    orange: 'Energetic orange theme',
    city: 'Urban-inspired design',
    fantasy: 'Magical and colorful theme',
    forest: 'Nature and earth tones',
    sea: 'Ocean-inspired blue tones',
    tech: 'Futuristic technology theme',
    minimal: 'Clean and minimal design',
    classic: 'Traditional player styling',
    modern: 'Contemporary design elements',
    retro: 'Vintage-inspired styling',
    branded: 'Customizable brand colors'
  };

  const currentPlayer = playerOptions[selectedPlayer];
  const availableThemes = currentPlayer?.themes || ['default'];

  const generatePreviewUrl = () => {
    if (!videoData) return null;
    
    const embedData = {
      videoUrl: videoData.stream_url,
      title: videoData.name,
      poster: videoData.thumbnail,
      player: selectedPlayer,
      theme: selectedTheme,
      controls: true,
      autoplay: false,
      muted: true
    };

    return `/embed/video?data=${btoa(JSON.stringify(embedData))}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <PlayIcon className="h-5 w-5 mr-2" />
          Player & Theme Selection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Left Side - Controls */}
          <div className="space-y-6">
            {/* Player Selection */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Video Player</Label>
                <Select value={selectedPlayer} onValueChange={onPlayerChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(playerOptions).map(([key, player]) => (
                      <SelectItem key={key} value={key}>
                        <div className="flex items-center space-x-2">
                          <span>{player.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {player.features.length} features
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {currentPlayer && (
                <div className="space-y-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold">{currentPlayer.name}</h4>
                    <p className="text-sm text-muted-foreground">{currentPlayer.description}</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-sm mb-1">Key Features</h5>
                    <div className="flex flex-wrap gap-1">
                      {currentPlayer.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {currentPlayer.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{currentPlayer.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Theme Selection */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <Select value={selectedTheme} onValueChange={onThemeChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {availableThemes.map((theme) => (
                      <SelectItem key={theme} value={theme}>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${getThemeColor(theme)}`}></div>
                          <span className="capitalize">{theme}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {availableThemes.slice(0, 6).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => onThemeChange(theme)}
                    className={`p-2 border rounded text-center transition-colors ${
                      selectedTheme === theme 
                        ? 'border-border bg-muted/50 dark:bg-primary/20' 
                        : 'border-border dark:border-gray-700 hover:border-border'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full ${getThemeColor(theme)} mx-auto mb-1`}></div>
                    <span className="text-xs capitalize">{theme}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Configuration Summary */}
            <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
              <h5 className="font-medium text-sm mb-2">Current Selection</h5>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Player:</span>
                  <span className="font-medium">{currentPlayer?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Theme:</span>
                  <span className="font-medium capitalize">{selectedTheme}</span>
                </div>
                <div className="flex justify-between">
                  <span>Features:</span>
                  <span className="font-medium">{currentPlayer?.features.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Live Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Live Preview</h4>
              <Badge variant="outline" className="text-xs">
                {currentPlayer?.name} - {selectedTheme}
              </Badge>
            </div>

            {videoData && generatePreviewUrl() ? (
              <div className="space-y-3">
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                  <iframe
                    src={generatePreviewUrl()}
                    className="w-full h-48 border-0 rounded"
                    title="Player Preview"
                    allowFullScreen
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(generatePreviewUrl(), '_blank')}
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Open Fullscreen Preview
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground space-y-1">
                  <div className="flex justify-between">
                    <span>Video:</span>
                    <span className="truncate ml-2">{videoData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span>{videoData.file_size}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                <MonitorIcon className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                <p className="text-sm text-muted-foreground mb-2">Preview will appear here</p>
                <p className="text-xs text-muted-foreground">Load a video to see live preview</p>
              </div>
            )}

            {/* Compatibility Info */}
            <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
              <h5 className="font-medium text-sm mb-2 text-foreground dark:text-green-200">
                Compatibility
              </h5>
              <div className="text-sm space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-muted/500 rounded-full"></div>
                  <span className="text-primary dark:text-green-300">Modern Browsers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-muted/500 rounded-full"></div>
                  <span className="text-primary dark:text-green-300">Mobile Devices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-muted/500 rounded-full"></div>
                  <span className="text-primary dark:text-green-300">Responsive Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function getThemeColor(theme) {
  const colors = {
    default: 'bg-gray-500',
    dark: 'bg-gray-800',
    light: 'bg-gray-200',
    blue: 'bg-muted/500',
    red: 'bg-destructive/100',
    green: 'bg-muted/500',
    purple: 'bg-muted/500',
    orange: 'bg-muted/500',
    city: 'bg-slate-500',
    fantasy: 'bg-muted/500',
    forest: 'bg-primary',
    sea: 'bg-muted/500',
    tech: 'bg-muted/500',
    minimal: 'bg-gray-300',
    classic: 'bg-primary',
    modern: 'bg-primary',
    retro: 'bg-muted/500',
    branded: 'bg-primary'
  };
  return colors[theme] || 'bg-gray-500';
}