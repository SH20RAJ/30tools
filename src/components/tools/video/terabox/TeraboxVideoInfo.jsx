'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
  DownloadIcon,
  CheckCircleIcon,
  LoaderIcon,
  ShareIcon,
  CopyIcon
} from 'lucide-react';
import { toast } from 'sonner';

export default function TeraboxVideoInfo({
  videoData,
  ogData,
  isLoadingVideo,
  shareUrl
}) {
  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const downloadVideo = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.rel = "nofollow noreferrer noopener";
    link.download = filename || 'terabox-video';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Download started!');
  };

  const copyShareUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Share link copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy share link');
    }
  };

  if (!videoData && !ogData) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {videoData ? (
            <CheckCircleIcon className="h-5 w-5 mr-2 text-primary" />
          ) : (
            <LoaderIcon className="h-5 w-5 mr-2 text-primary animate-spin" />
          )}
          Video Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Video Details */}
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
                  <Badge variant="outline">
                    {videoData.size_formatted || videoData.file_size || formatFileSize(parseInt(videoData.size))}
                  </Badge>
                </>
              ) : ogData ? (
                <Badge variant="outline">{ogData.type}</Badge>
              ) : (
                <Badge variant="outline">Loading...</Badge>
              )}
            </div>
          </div>
        </div>

        {/* Download Options */}
        {videoData && videoData.download_links && (
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Download Options</Label>
            <div className="flex flex-wrap gap-2">
              {videoData.download_links.url_1 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadVideo(videoData.download_links.url_1, videoData.name)}
                >
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Direct Download
                </Button>
              )}
              {videoData.download_links.url_2 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadVideo(videoData.download_links.url_2, videoData.name)}
                >
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Fast Download
                </Button>
              )}
              {videoData.download_links.stream && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadVideo(videoData.download_links.stream, videoData.name)}
                >
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Stream Download
                </Button>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Multiple download options available. Fast download is recommended for better speed.
            </p>
          </div>
        )}

        {/* Loading state for download options */}
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

        {/* Share Options */}
        {shareUrl && (
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Share Video</Label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={copyShareUrl}
              >
                <CopyIcon className="h-4 w-4 mr-2" />
                Copy Share Link
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(shareUrl, '_blank')}
              >
                <ShareIcon className="h-4 w-4 mr-2" />
                Open Share Link
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Share this link to let others view the same video instantly
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}