'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Code, Copy, Eye, Youtube, CheckCircle, Settings } from 'lucide-react';

export default function YouTubeEmbedGenerator() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [width, setWidth] = useState('560');
  const [height, setHeight] = useState('315');
  const [responsive, setResponsive] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [mute, setMute] = useState(false);
  const [loop, setLoop] = useState(false);
  const [controls, setControls] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(true);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [embedCode, setEmbedCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (videoUrl) {
      const id = extractVideoId(videoUrl);
      if (id) {
        setVideoId(id);
        setError('');
      } else {
        setError('Invalid YouTube URL');
        setVideoId('');
      }
    } else {
      setVideoId('');
      setError('');
    }
  }, [videoUrl]);

  useEffect(() => {
    if (videoId) {
      generateEmbedCode();
    }
  }, [videoId, width, height, responsive, autoplay, mute, loop, controls, showInfo, privacyMode, startTime, endTime]);

  const extractVideoId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const generateEmbedCode = () => {
    if (!videoId) return;

    const domain = privacyMode ? 'youtube-nocookie.com' : 'youtube.com';
    const params = new URLSearchParams();
    
    if (autoplay) params.append('autoplay', '1');
    if (mute) params.append('mute', '1');
    if (loop) params.append('loop', '1');
    if (!controls) params.append('controls', '0');
    if (!showInfo) params.append('showinfo', '0');
    if (startTime) params.append('start', startTime);
    if (endTime) params.append('end', endTime);
    
    const paramString = params.toString();
    const src = `https://www.${domain}/embed/${videoId}${paramString ? '?' + paramString : ''}`;
    
    let code = '';
    
    if (responsive) {
      code = `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe 
    src="${src}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>`;
    } else {
      code = `<iframe 
  width="${width}" 
  height="${height}" 
  src="${src}"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>`;
    }
    
    setEmbedCode(code);
  };

  const copyEmbedCode = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy embed code:', err);
    }
  };

  const previewUrl = videoId ? 
    `https://www.youtube${privacyMode ? '-nocookie' : ''}.com/embed/${videoId}` : '';

  return (
    <div className="space-y-6">
      <Card className="card-cute">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-destructive" />
            YouTube Embed Generator
          </CardTitle>
          <CardDescription>
            Generate customized YouTube embed codes with advanced options
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="video-url">YouTube Video URL</Label>
            <Input
              id="video-url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="input-cute"
            />
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            {videoId && (
              <Badge variant="secondary" className="text-xs">
                Video ID: {videoId}
              </Badge>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Player Settings
              </h3>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="responsive">Responsive Design</Label>
                <Switch
                  id="responsive"
                  checked={responsive}
                  onCheckedChange={setResponsive}
                />
              </div>

              {!responsive && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="width">Width (px)</Label>
                    <Input
                      id="width"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="input-cute"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (px)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="input-cute"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <Label htmlFor="privacy">Privacy-Enhanced Mode</Label>
                <Switch
                  id="privacy"
                  checked={privacyMode}
                  onCheckedChange={setPrivacyMode}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="autoplay">Autoplay</Label>
                <Switch
                  id="autoplay"
                  checked={autoplay}
                  onCheckedChange={setAutoplay}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="mute">Mute</Label>
                <Switch
                  id="mute"
                  checked={mute}
                  onCheckedChange={setMute}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="loop">Loop</Label>
                <Switch
                  id="loop"
                  checked={loop}
                  onCheckedChange={setLoop}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="controls">Show Controls</Label>
                <Switch
                  id="controls"
                  checked={controls}
                  onCheckedChange={setControls}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="showinfo">Show Video Info</Label>
                <Switch
                  id="showinfo"
                  checked={showInfo}
                  onCheckedChange={setShowInfo}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Timing Options</h3>
              
              <div className="space-y-2">
                <Label htmlFor="start-time">Start Time (seconds)</Label>
                <Input
                  id="start-time"
                  type="number"
                  placeholder="0"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="input-cute"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="end-time">End Time (seconds)</Label>
                <Input
                  id="end-time"
                  type="number"
                  placeholder="Leave empty for full video"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="input-cute"
                />
              </div>

              {videoId && (
                <div className="mt-6">
                  <Label>Preview</Label>
                  <div className="mt-2 border rounded-lg overflow-hidden bg-black aspect-video">
                    <iframe
                      src={previewUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {embedCode && (
        <Card className="card-cute">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-destructive" />
                Generated Embed Code
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={copyEmbedCode}
                className="btn-cute"
              >
                {copied ? (
                  <CheckCircle className="w-4 h-4 mr-1 text-primary" />
                ) : (
                  <Copy className="w-4 h-4 mr-1" />
                )}
                {copied ? 'Copied!' : 'Copy Code'}
              </Button>
            </CardTitle>
            <CardDescription>
              Copy this code and paste it into your website's HTML
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={embedCode}
              readOnly
              className="font-mono text-sm min-h-[120px] input-cute"
            />
          </CardContent>
        </Card>
      )}

      <Card className="card-cute">
        <CardHeader>
          <CardTitle>Embedding Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">🔒 Privacy & Performance:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Use privacy-enhanced mode for GDPR compliance</li>
                <li>• Enable responsive design for mobile optimization</li>
                <li>• Consider lazy loading for better page speed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📱 User Experience:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Avoid autoplay with sound on mobile</li>
                <li>• Use appropriate start/end times for relevance</li>
                <li>• Test embed across different devices</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
