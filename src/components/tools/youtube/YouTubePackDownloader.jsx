'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Package, Download, FileText, Image as ImageIcon, Tag, Youtube, CheckCircle2, Loader2 } from 'lucide-react';
import { downloadYouTubePack } from '@/lib/youtube-actions';

export default function YouTubePackDownloader() {
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedAssets, setSelectedAssets] = useState({
    metadata: true,
    title: true,
    description: true,
    tags: true,
    transcript: true,
    thumbnail: true,
    channelInfo: true,
    analytics: true
  });
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [downloadReady, setDownloadReady] = useState(false);
  const downloadRef = useRef(null);

  const assetOptions = [
    { id: 'metadata', label: 'Video Metadata', description: 'Title, description, duration, publish date', icon: FileText },
    { id: 'title', label: 'Title & Description', description: 'Full title and description text', icon: FileText },
    { id: 'tags', label: 'SEO Tags', description: 'All video tags for keyword research', icon: Tag },
    { id: 'transcript', label: 'Video Transcript', description: 'Complete video transcript/captions', icon: FileText },
    { id: 'thumbnail', label: 'Thumbnails', description: 'High-quality thumbnails (multiple sizes)', icon: ImageIcon },
    { id: 'channelInfo', label: 'Channel Information', description: 'Creator details and channel data', icon: Youtube },
    { id: 'analytics', label: 'Performance Data', description: 'View count, likes, engagement metrics', icon: Package }
  ];

  const handleAssetToggle = (assetId) => {
    setSelectedAssets(prev => ({
      ...prev,
      [assetId]: !prev[assetId]
    }));
  };

  const selectAll = () => {
    const allSelected = {};
    assetOptions.forEach(asset => {
      allSelected[asset.id] = true;
    });
    setSelectedAssets(allSelected);
  };

  const selectNone = () => {
    const noneSelected = {};
    assetOptions.forEach(asset => {
      noneSelected[asset.id] = false;
    });
    setSelectedAssets(noneSelected);
  };

  const handleDownloadPack = async () => {
    if (!videoUrl) {
      setError('Please enter a YouTube URL');
      return;
    }

    const selectedCount = Object.values(selectedAssets).filter(Boolean).length;
    if (selectedCount === 0) {
      setError('Please select at least one asset to download');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await downloadYouTubePack(videoUrl, selectedAssets);
      
      if (result.success) {
        setVideoData(result.data);
        setDownloadReady(true);
      } else {
        setError(result.error || 'Failed to process YouTube video');
      }
    } catch (err) {
      setError('An error occurred while processing the video');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadPack = () => {
    if (videoData && downloadRef.current) {
      const packData = JSON.stringify(videoData, null, 2);
      const blob = new Blob([packData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      downloadRef.current.href = url;
      downloadRef.current.download = `youtube-pack-${videoData.videoId}.json`;
      downloadRef.current.click();
      
      URL.revokeObjectURL(url);
    }
  };

  const getSelectedCount = () => {
    return Object.values(selectedAssets).filter(Boolean).length;
  };

  return (
    <div className="space-y-6">
      <Card className="card-cute">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-destructive" />
            YouTube Pack Downloader
          </CardTitle>
          <CardDescription>
            Download complete YouTube video asset packages including metadata, transcripts, and thumbnails
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

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-semibold">Select Assets to Download</Label>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={selectAll} className="btn-cute">
                  Select All
                </Button>
                <Button variant="outline" size="sm" onClick={selectNone} className="btn-cute">
                  Clear All
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {assetOptions.map((asset) => {
                const Icon = asset.icon;
                return (
                  <div
                    key={asset.id}
                    className={`flex items-start space-x-3 p-4 rounded-lg border transition-all cursor-pointer hover:bg-accent/20 ${
                      selectedAssets[asset.id] ? 'bg-accent/30 border-primary' : 'border-border'
                    }`}
                    onClick={() => handleAssetToggle(asset.id)}
                  >
                    <Checkbox
                      checked={selectedAssets[asset.id]}
                      onCheckedChange={() => handleAssetToggle(asset.id)}
                      className="mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="font-medium text-sm">{asset.label}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{asset.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{getSelectedCount()} of {assetOptions.length} assets selected</span>
              <Badge variant="secondary">{getSelectedCount()} items</Badge>
            </div>
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
              {error}
            </div>
          )}

          <Button
            onClick={handleDownloadPack}
            disabled={isLoading || !videoUrl || getSelectedCount() === 0}
            className="w-full btn-cute bg-background"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing Video...
              </>
            ) : (
              <>
                <Package className="w-4 h-4 mr-2" />
                Download Video Pack
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {downloadReady && videoData && (
        <Card className="card-cute">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-destructive" />
                Pack Ready for Download
              </span>
              <Button
                onClick={downloadPack}
                className="btn-cute bg-background"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Pack
              </Button>
            </CardTitle>
            <CardDescription>
              Your YouTube video asset pack is ready. Click download to save all selected data.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Video Information</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div><strong>Title:</strong> {videoData.title}</div>
                    <div><strong>Duration:</strong> {videoData.duration}</div>
                    <div><strong>Views:</strong> {videoData.viewCount?.toLocaleString()}</div>
                    <div><strong>Channel:</strong> {videoData.channelTitle}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Package Contents</h4>
                  <div className="space-y-1 text-sm">
                    {Object.entries(selectedAssets)
                      .filter(([_, selected]) => selected)
                      .map(([assetId]) => {
                        const asset = assetOptions.find(a => a.id === assetId);
                        return (
                          <div key={assetId} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                            {asset?.label}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Package size: ~{Math.ceil(JSON.stringify(videoData).length / 1024)}KB
                </span>
                <Badge variant="outline">JSON Format</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="card-cute">
        <CardHeader>
          <CardTitle>Package Contents & Usage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">📦 What's Included:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Complete video metadata and statistics</li>
                <li>• SEO tags for keyword research</li>
                <li>• High-resolution thumbnails</li>
                <li>• Full video transcripts when available</li>
                <li>• Channel information and analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🎯 Use Cases:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Competitive content analysis</li>
                <li>• SEO keyword research</li>
                <li>• Content strategy development</li>
                <li>• Thumbnail design inspiration</li>
                <li>• Market research and trends</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <a ref={downloadRef} style={{ display: 'none' }} />
    </div>
  );
}
