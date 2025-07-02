'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Image as ImageIcon, Download, Play, Settings, Youtube, Zap } from 'lucide-react';
import { createGifFromYoutube } from '@/lib/youtube-actions';

export default function YouTubeGifMaker() {
  const [videoUrl, setVideoUrl] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(5);
  const [width, setWidth] = useState(480);
  const [height, setHeight] = useState(270);
  const [frameRate, setFrameRate] = useState([15]);
  const [quality, setQuality] = useState('medium');
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [addSubtitles, setAddSubtitles] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [gifUrl, setGifUrl] = useState('');
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const downloadRef = useRef(null);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCreateGif = async () => {
    if (!videoUrl) {
      setError('Please enter a YouTube URL');
      return;
    }

    if (endTime <= startTime) {
      setError('End time must be greater than start time');
      return;
    }

    if (endTime - startTime > 30) {
      setError('GIF duration cannot exceed 30 seconds');
      return;
    }

    setIsCreating(true);
    setError('');

    try {
      const options = {
        startTime,
        endTime,
        width: maintainAspectRatio ? null : width,
        height: maintainAspectRatio ? null : height,
        frameRate: frameRate[0],
        quality,
        subtitles: addSubtitles
      };

      const result = await createGifFromYoutube(videoUrl, options);
      
      if (result.success) {
        setGifUrl(result.gifUrl);
        setPreviewUrl(result.previewUrl);
      } else {
        setError(result.error || 'Failed to create GIF');
      }
    } catch (err) {
      setError('An error occurred while creating the GIF');
    } finally {
      setIsCreating(false);
    }
  };

  const downloadGif = () => {
    if (gifUrl && downloadRef.current) {
      downloadRef.current.href = gifUrl;
      downloadRef.current.download = `youtube-gif-${Date.now()}.gif`;
      downloadRef.current.click();
    }
  };

  const qualityPresets = {
    low: { description: 'Small file size, basic quality' },
    medium: { description: 'Balanced quality and file size' },
    high: { description: 'Best quality, larger file size' }
  };

  const socialPresets = [
    { name: 'Twitter', width: 480, height: 270, frameRate: 15 },
    { name: 'Instagram', width: 480, height: 480, frameRate: 15 },
    { name: 'Discord', width: 400, height: 225, frameRate: 20 },
    { name: 'Custom', width: 480, height: 270, frameRate: 15 }
  ];

  const applySocialPreset = (preset) => {
    if (preset.name !== 'Custom') {
      setWidth(preset.width);
      setHeight(preset.height);
      setFrameRate([preset.frameRate]);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="card-cute">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-red-500" />
            YouTube to GIF Converter
          </CardTitle>
          <CardDescription>
            Create animated GIFs from YouTube video clips with custom settings
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
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Time Range</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Start Time (seconds)</Label>
                  <Input
                    id="start-time"
                    type="number"
                    min="0"
                    value={startTime}
                    onChange={(e) => setStartTime(Number(e.target.value))}
                    className="input-cute"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time">End Time (seconds)</Label>
                  <Input
                    id="end-time"
                    type="number"
                    min="1"
                    max={startTime + 30}
                    value={endTime}
                    onChange={(e) => setEndTime(Number(e.target.value))}
                    className="input-cute"
                  />
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                Duration: {formatTime(endTime - startTime)} 
                {endTime - startTime > 30 && (
                  <span className="text-destructive ml-2">(Max 30 seconds)</span>
                )}
              </div>

              <div className="space-y-2">
                <Label>Social Media Presets</Label>
                <div className="grid grid-cols-2 gap-2">
                  {socialPresets.map((preset) => (
                    <Button
                      key={preset.name}
                      variant="outline"
                      size="sm"
                      onClick={() => applySocialPreset(preset)}
                      className="btn-cute"
                    >
                      {preset.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Quality Settings
              </h3>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="aspect-ratio">Maintain Aspect Ratio</Label>
                <Switch
                  id="aspect-ratio"
                  checked={maintainAspectRatio}
                  onCheckedChange={setMaintainAspectRatio}
                />
              </div>

              {!maintainAspectRatio && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="width">Width (px)</Label>
                    <Input
                      id="width"
                      type="number"
                      min="100"
                      max="1920"
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="input-cute"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (px)</Label>
                    <Input
                      id="height"
                      type="number"
                      min="100"
                      max="1080"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="input-cute"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label>Frame Rate: {frameRate[0]} FPS</Label>
                <Slider
                  value={frameRate}
                  onValueChange={setFrameRate}
                  max={30}
                  min={5}
                  step={1}
                  className="w-full"
                />
                <div className="text-xs text-muted-foreground">
                  Lower frame rates = smaller file sizes
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quality">Quality</Label>
                <Select value={quality} onValueChange={setQuality}>
                  <SelectTrigger className="input-cute">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(qualityPresets).map(([key, preset]) => (
                      <SelectItem key={key} value={key}>
                        <div>
                          <div className="font-medium capitalize">{key}</div>
                          <div className="text-xs text-muted-foreground">
                            {preset.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="subtitles">Include Subtitles</Label>
                <Switch
                  id="subtitles"
                  checked={addSubtitles}
                  onCheckedChange={setAddSubtitles}
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
              {error}
            </div>
          )}

          <Button
            onClick={handleCreateGif}
            disabled={isCreating || !videoUrl || endTime <= startTime}
            className="w-full btn-cute bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
          >
            {isCreating ? (
              <>
                <Zap className="w-4 h-4 mr-2 animate-pulse" />
                Creating GIF...
              </>
            ) : (
              <>
                <ImageIcon className="w-4 h-4 mr-2" />
                Create Animated GIF
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {gifUrl && (
        <Card className="card-cute">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-red-500" />
                Your GIF is Ready!
              </span>
              <Button
                onClick={downloadGif}
                className="btn-cute bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download GIF
              </Button>
            </CardTitle>
            <CardDescription>
              Preview your animated GIF and download when ready
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="border rounded-lg overflow-hidden bg-checkered">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Generated GIF"
                    className="max-w-full h-auto"
                    style={{ maxHeight: '400px' }}
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-muted">
                    <ImageIcon className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <Badge variant="secondary">
                Duration: {formatTime(endTime - startTime)} • {frameRate[0]} FPS • {quality} quality
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="card-cute">
        <CardHeader>
          <CardTitle>GIF Creation Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">🎯 Optimization Tips:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Keep GIFs under 10 seconds for social media</li>
                <li>• Use lower frame rates for smaller file sizes</li>
                <li>• Choose medium quality for best balance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📱 Platform Guidelines:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Twitter: Max 15MB, 512x512px recommended</li>
                <li>• Instagram: Square format works best</li>
                <li>• Discord: Under 8MB for standard users</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <a ref={downloadRef} style={{ display: 'none' }} />
    </div>
  );
}
