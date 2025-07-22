'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { 
  CodeIcon, 
  CopyIcon, 
  EyeIcon,
  SettingsIcon,
  MonitorIcon,
  Badge
} from 'lucide-react';
import { toast } from 'sonner';
import CodeBlock from '@/components/ui/code-block';

export default function TeraboxEmbedTools({ videoData, shareUrl, selectedPlayer, selectedTheme }) {
  const [embedSettings, setEmbedSettings] = useState({
    width: '100%',
    height: '400px',
    autoplay: false,
    controls: true,
    muted: false,
    loop: false,
    responsive: true,
    showTitle: true,
    showDescription: false
  });

  const [previewMode, setPreviewMode] = useState('iframe');

  if (!videoData || !shareUrl) return null;

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copied to clipboard!`);
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const generateIframeCode = () => {
    const embedData = {
      videoUrl: videoData.stream_url,
      title: videoData.name,
      poster: videoData.thumbnail,
      player: selectedPlayer,
      theme: selectedTheme,
      ...embedSettings
    };

    const dataString = btoa(JSON.stringify(embedData));
    
    return `<iframe 
  src="${window.location.origin}/video-player-embed?data=${dataString}" 
  width="${embedSettings.width}" 
  height="${embedSettings.height}"
  style="border: none; border-radius: 8px; ${embedSettings.responsive ? 'max-width: 100%;' : ''}"
  allowfullscreen
  title="${videoData.name}"
  ${embedSettings.autoplay ? 'allow="autoplay"' : ''}
></iframe>`;
  };

  const generateDirectVideoCode = () => {
    return `<video 
  width="${embedSettings.width}" 
  height="${embedSettings.height}"
  ${embedSettings.controls ? 'controls' : ''}
  ${embedSettings.autoplay ? 'autoplay' : ''}
  ${embedSettings.muted ? 'muted' : ''}
  ${embedSettings.loop ? 'loop' : ''}
  poster="${videoData.thumbnail}"
  preload="metadata"
  style="border-radius: 8px; ${embedSettings.responsive ? 'max-width: 100%;' : ''}"
>
  <source src="${videoData.stream_url}" type="video/mp4">
  Your browser does not support the video tag.
</video>`;
  };

  const generateReactCode = () => {
    return `import React from 'react';

const TeraboxVideo = () => {
  return (
    <div style={{ width: '${embedSettings.width}', maxWidth: '100%' }}>
      ${embedSettings.showTitle ? `<h3>${videoData.name}</h3>` : ''}
      <video 
        width="100%" 
        height="${embedSettings.height}"
        ${embedSettings.controls ? 'controls' : ''}
        ${embedSettings.autoplay ? 'autoplay' : ''}
        ${embedSettings.muted ? 'muted' : ''}
        ${embedSettings.loop ? 'loop' : ''}
        poster="${videoData.thumbnail}"
        preload="metadata"
        style={{ borderRadius: '8px' }}
      >
        <source src="${videoData.stream_url}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      ${embedSettings.showDescription ? `<p>Watch ${videoData.name} online</p>` : ''}
    </div>
  );
};

export default TeraboxVideo;`;
  };

  const generateWordPressCode = () => {
    return `[video width="${embedSettings.width}" height="${embedSettings.height}" src="${videoData.stream_url}" poster="${videoData.thumbnail}"]`;
  };

  const handleSettingChange = (key, value) => {
    setEmbedSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const previewUrl = `${window.location.origin}/video-player-embed?data=${btoa(JSON.stringify({
    videoUrl: videoData.stream_url,
    title: videoData.name,
    poster: videoData.thumbnail,
    player: selectedPlayer,
    theme: selectedTheme,
    ...embedSettings
  }))}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CodeIcon className="h-5 w-5 mr-2" />
          Embed Video
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Settings and Code */}
          <div className="space-y-6">
            <Tabs defaultValue="settings" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="code">Embed Code</TabsTrigger>
              </TabsList>

          <TabsContent value="settings" className="space-y-6">
            {/* Dimensions */}
            <div className="space-y-4">
              <h4 className="font-semibold">Dimensions</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    value={embedSettings.width}
                    onChange={(e) => handleSettingChange('width', e.target.value)}
                    placeholder="100%"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    value={embedSettings.height}
                    onChange={(e) => handleSettingChange('height', e.target.value)}
                    placeholder="400px"
                  />
                </div>
              </div>
            </div>

            {/* Player Options */}
            <div className="space-y-4">
              <h4 className="font-semibold">Player Options</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="autoplay">Autoplay</Label>
                  <Switch
                    id="autoplay"
                    checked={embedSettings.autoplay}
                    onCheckedChange={(checked) => handleSettingChange('autoplay', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="controls">Show Controls</Label>
                  <Switch
                    id="controls"
                    checked={embedSettings.controls}
                    onCheckedChange={(checked) => handleSettingChange('controls', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="muted">Muted</Label>
                  <Switch
                    id="muted"
                    checked={embedSettings.muted}
                    onCheckedChange={(checked) => handleSettingChange('muted', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="loop">Loop</Label>
                  <Switch
                    id="loop"
                    checked={embedSettings.loop}
                    onCheckedChange={(checked) => handleSettingChange('loop', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="responsive">Responsive</Label>
                  <Switch
                    id="responsive"
                    checked={embedSettings.responsive}
                    onCheckedChange={(checked) => handleSettingChange('responsive', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="showTitle">Show Title</Label>
                  <Switch
                    id="showTitle"
                    checked={embedSettings.showTitle}
                    onCheckedChange={(checked) => handleSettingChange('showTitle', checked)}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="space-y-6">
            <div className="space-y-2">
              <Label>Code Type</Label>
              <Select value={previewMode} onValueChange={setPreviewMode}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iframe">Iframe Embed</SelectItem>
                  <SelectItem value="video">Direct Video Tag</SelectItem>
                  <SelectItem value="react">React Component</SelectItem>
                  <SelectItem value="wordpress">WordPress Shortcode</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {previewMode === 'iframe' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Iframe Embed Code</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(generateIframeCode(), 'Iframe code')}
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <CodeBlock code={generateIframeCode()} language="html" />
                </div>
              )}

              {previewMode === 'video' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Direct Video Tag</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(generateDirectVideoCode(), 'Video code')}
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <CodeBlock code={generateDirectVideoCode()} language="html" />
                </div>
              )}

              {previewMode === 'react' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>React Component</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(generateReactCode(), 'React code')}
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <CodeBlock code={generateReactCode()} language="jsx" />
                </div>
              )}

              {previewMode === 'wordpress' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>WordPress Shortcode</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(generateWordPressCode(), 'WordPress code')}
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <CodeBlock code={generateWordPressCode()} language="text" />
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Live Preview</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(previewUrl, '_blank')}
                >
                  <EyeIcon className="h-4 w-4 mr-2" />
                  Open in New Tab
                </Button>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <iframe
                  src={previewUrl}
                  width={embedSettings.width}
                  height={embedSettings.height}
                  style={{ 
                    border: 'none', 
                    borderRadius: '8px',
                    maxWidth: embedSettings.responsive ? '100%' : 'none'
                  }}
                  title="Video Preview"
                  allowFullScreen
                />
              </div>
              
              <p className="text-xs text-muted-foreground">
                This preview shows how your embedded video will appear on other websites.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Right Side - Live Preview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Live Preview</h4>
          <Badge variant="outline" className="text-xs">
            {previewMode} - {embedSettings.width} x {embedSettings.height}
          </Badge>
        </div>

        {videoData && (
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <iframe
                src={previewUrl}
                width="100%"
                height="200"
                style={{ 
                  border: 'none', 
                  borderRadius: '8px',
                  maxWidth: embedSettings.responsive ? '100%' : 'none'
                }}
                title="Embed Preview"
                allowFullScreen
              />
            </div>
            
            <div className="text-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(previewUrl, '_blank')}
              >
                <EyeIcon className="h-4 w-4 mr-2" />
                Open Fullscreen Preview
              </Button>
            </div>

            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Embed Type:</span>
                <span className="capitalize">{previewMode}</span>
              </div>
              <div className="flex justify-between">
                <span>Dimensions:</span>
                <span>{embedSettings.width} x {embedSettings.height}</span>
              </div>
              <div className="flex justify-between">
                <span>Responsive:</span>
                <span>{embedSettings.responsive ? 'Yes' : 'No'}</span>
              </div>
              <div className="flex justify-between">
                <span>Controls:</span>
                <span>{embedSettings.controls ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h5 className="font-medium text-sm mb-2">Quick Actions</h5>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(
                    previewMode === 'iframe' ? generateIframeCode() :
                    previewMode === 'video' ? generateDirectVideoCode() :
                    previewMode === 'react' ? generateReactCode() :
                    generateWordPressCode(),
                    'Embed code'
                  )}
                >
                  <CopyIcon className="h-4 w-4 mr-1" />
                  Copy Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(previewUrl, 'Preview URL')}
                >
                  <CopyIcon className="h-4 w-4 mr-1" />
                  Copy URL
                </Button>
              </div>
            </div>
          </div>
        )}

        {!videoData && (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
            <MonitorIcon className="h-12 w-12 mx-auto text-gray-400 mb-3" />
            <p className="text-sm text-gray-500 mb-2">Embed preview will appear here</p>
            <p className="text-xs text-gray-400">Load a video to see live embed preview</p>
          </div>
        )}
      </div>
    </div>
      </CardContent>
    </Card>
  );
}