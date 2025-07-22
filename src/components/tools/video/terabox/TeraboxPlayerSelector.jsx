'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  PlayIcon, 
  PaletteIcon,
  SettingsIcon,
  MonitorIcon,
  InfoIcon
} from 'lucide-react';

export default function TeraboxPlayerSelector({ 
  selectedPlayer, 
  onPlayerChange, 
  selectedTheme, 
  onThemeChange,
  videoData 
}) {
  const [activeTab, setActiveTab] = useState('player');

  const playerOptions = {
    plyr: {
      name: 'Plyr.js',
      description: 'Modern HTML5 video player with beautiful UI',
      features: ['Custom controls', 'Keyboard shortcuts', 'Fullscreen API', 'Picture-in-picture'],
      themes: ['default', 'dark', 'light', 'blue', 'red', 'green'],
      pros: ['Lightweight', 'Responsive', 'Accessible', 'Modern design'],
      preview: '/images/players/plyr-preview.jpg'
    },
    videojs: {
      name: 'Video.js',
      description: 'Industry standard HTML5 video player',
      features: ['Plugin ecosystem', 'HLS support', 'DASH support', 'VR support'],
      themes: ['default', 'city', 'fantasy', 'forest', 'sea', 'tech'],
      pros: ['Highly customizable', 'Large community', 'Plugin support', 'Enterprise ready'],
      preview: '/images/players/videojs-preview.jpg'
    },
    mediaelements: {
      name: 'MediaElement.js',
      description: 'Universal media player with Flash fallback',
      features: ['Flash fallback', 'Silverlight fallback', 'YouTube API', 'Vimeo API'],
      themes: ['default', 'minimal', 'classic', 'modern', 'retro'],
      pros: ['Cross-browser', 'Legacy support', 'Multiple formats', 'API integration'],
      preview: '/images/players/mediaelements-preview.jpg'
    },
    fluidplayer: {
      name: 'Fluid Player',
      description: 'Free HTML5 video player with advertising support',
      features: ['VAST ads', 'VPAID support', 'Analytics', 'Responsive design'],
      themes: ['default', 'dark', 'light', 'minimal', 'branded'],
      pros: ['Ad support', 'Analytics', 'Free', 'Commercial use'],
      preview: '/images/players/fluidplayer-preview.jpg'
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <PlayIcon className="h-5 w-5 mr-2" />
          Player & Theme Selection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="player">Player</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="player" className="space-y-6">
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
                <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-lg">{currentPlayer.name}</h4>
                    <p className="text-sm text-muted-foreground">{currentPlayer.description}</p>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Key Features</h5>
                    <div className="flex flex-wrap gap-2">
                      {currentPlayer.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Advantages</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {currentPlayer.pros.map((pro, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="theme" className="space-y-6">
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

              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2 capitalize">{selectedTheme} Theme</h4>
                <p className="text-sm text-muted-foreground">
                  {themeDescriptions[selectedTheme] || 'Custom theme with unique styling'}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableThemes.map((theme) => (
                  <button
                    key={theme}
                    onClick={() => onThemeChange(theme)}
                    className={`p-3 border rounded-lg text-left transition-colors ${
                      selectedTheme === theme 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <div className={`w-3 h-3 rounded-full ${getThemeColor(theme)}`}></div>
                      <span className="font-medium text-sm capitalize">{theme}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {themeDescriptions[theme]?.substring(0, 40)}...
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Player Preview</h4>
                <Badge variant="outline">
                  {currentPlayer?.name} - {selectedTheme}
                </Badge>
              </div>

              {videoData ? (
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center space-y-2">
                      <MonitorIcon className="h-12 w-12 mx-auto text-gray-400" />
                      <p className="text-sm text-gray-500">
                        {currentPlayer?.name} Preview
                      </p>
                      <p className="text-xs text-gray-400">
                        Theme: {selectedTheme}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium">{videoData.name}</h5>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>Player: {currentPlayer?.name}</span>
                      <span>Theme: {selectedTheme}</span>
                      <span>Size: {videoData.file_size}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <InfoIcon className="h-8 w-8 mx-auto mb-2" />
                  <p>Load a video to see the player preview</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-medium">Selected Configuration</h5>
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

                <div className="space-y-2">
                  <h5 className="font-medium">Compatibility</h5>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Modern Browsers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Mobile Devices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Responsive Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function getThemeColor(theme) {
  const colors = {
    default: 'bg-gray-500',
    dark: 'bg-gray-800',
    light: 'bg-gray-200',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    city: 'bg-slate-500',
    fantasy: 'bg-pink-500',
    forest: 'bg-emerald-600',
    sea: 'bg-cyan-500',
    tech: 'bg-indigo-500',
    minimal: 'bg-gray-300',
    classic: 'bg-amber-600',
    modern: 'bg-violet-500',
    retro: 'bg-yellow-500',
    branded: 'bg-rose-500'
  };
  return colors[theme] || 'bg-gray-500';
}