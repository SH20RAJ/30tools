'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  CodeIcon, 
  CopyIcon, 
  EyeIcon,
  MonitorIcon
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
  src="${window.location.origin}/embed/video?data=${dataString}" 
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

  const previewUrl = `${window.location.origin}/embed/video?data=${btoa(JSON.stringify({
    videoUrl: videoData.stream_url,
    title: videoData.name,
    poster: videoData.thumbnail,
    player: selectedPlayer,
    theme: selectedTheme,
    ...embedSettings
  }))}`;

  const getCurrentCode = () => {
    switch (previewMode) {
      case 'iframe': return generateIframeCode();
      case 'video': return generateDirectVideoCode();
      case 'react': return generateReactCode();
      case 'wordpress': return generateWordPressCode();
      default: return generateIframeCode();
    }
  };

  const getLanguage = () => {
    switch (previewMode) {
      case 'react': return 'jsx';
      case 'wordpress': return 'text';
      default: return 'html';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CodeIcon className="h-5 w-5 mr-2" />
          Embed Video
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Left Side - Settings and Code */}
          <div className="space-y-6">
            {/* Embed Settings */}
            <div className="space-y-4">
              <h4 className="font-semibold">Embed Settings</h4>
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
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="controls">Controls</Label>
                  <Switch
                    id="controls"
                    checked={embedSettings.controls}
                    onCheckedChange={(checked) => handleSettingChange('controls', checked)}
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
                  <Label htmlFor="autoplay">Autoplay</Label>
                  <Switch
                    id="autoplay"
                    checked={embedSettings.autoplay}
                    onCheckedChange={(checked) => handleSettingChange('autoplay', checked)}
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
              </div>
            </div>

            {/* Code Type Selection */}
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

            {/* Generated Code */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Generated Code</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(getCurrentCode(), 'Embed code')}
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  Copy Code
                </Button>
              </div>
              <CodeBlock 
                code={getCurrentCode()} 
                language={getLanguage()} 
              />
            </div>
          </div>

          {/* Right Side - Live Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Live Preview</h4>
              <Badge variant="outline" className="text-xs">
                {previewMode} - {embedSettings.width} x {embedSettings.height}
              </Badge>
            </div>

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

              <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
                <h5 className="font-medium text-sm mb-2">Quick Actions</h5>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(getCurrentCode(), 'Embed code')}
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
}