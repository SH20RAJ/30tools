'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Video, Music, Loader2, LogIn } from 'lucide-react';
import { downloadYouTubeVideo } from '@/lib/youtube-actions';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function YouTubeDownloader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState('');
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setVideoData(null);

    try {
      const result = await downloadYouTubeVideo(url);
      if (result.success) {
        setVideoData(result.data);
      } else {
        setError(result.error || 'Failed to process YouTube video');
      }
    } catch {
      setError('An error occurred while processing the video');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (_downloadUrl, _filename, _format) => {
    // Show login dialog instead of downloading
    setShowLoginDialog(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-2 border-red-500/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20">
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Video className="w-6 h-6 text-red-500" />
            YouTube Video & Audio Downloader
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="Paste YouTube video URL here (e.g., https://www.youtube.com/watch?v=...)"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError('');
                }}
                className="flex-1 border-red-200 focus:border-red-500 focus:ring-red-500"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                disabled={isLoading || !url.trim()}
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Get Download Links
                  </>
                )}
              </Button>
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
          </form>

          {videoData && (
            <div className="mt-6 space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  {videoData.thumbnail && (
                    <img 
                      src={videoData.thumbnail} 
                      alt="Video thumbnail"
                      className="w-32 h-24 object-cover rounded-lg shadow-md"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2 text-green-800 dark:text-green-200">
                      {videoData.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-green-600 border-green-300">
                        Duration: {videoData.duration}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-300">
                        Quality: {videoData.quality}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-300">
                        Size: {videoData.fileSize}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Video Download Options */}
                <Card className="border-blue-200">
                  <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Video className="w-5 h-5 text-blue-500" />
                      Video Downloads
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    {videoData.videoFormats?.map((format, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-blue-50/50 dark:bg-blue-950/10 rounded-lg">
                        <div>
                          <div className="font-medium">{format.quality} MP4</div>
                          <div className="text-sm text-muted-foreground">{format.fileSize}</div>
                        </div>
                        <Button
                          onClick={() => handleDownload(format.downloadUrl, `${videoData.title}.mp4`, 'video')}
                          size="sm"
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    )) || (
                      <div className="flex items-center justify-between p-3 bg-blue-50/50 dark:bg-blue-950/10 rounded-lg">
                        <div>
                          <div className="font-medium">HD MP4</div>
                          <div className="text-sm text-muted-foreground">{videoData.fileSize}</div>
                        </div>
                        <Button
                          onClick={() => handleDownload(videoData.downloadUrl, `${videoData.title}.mp4`, 'video')}
                          size="sm"
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Audio Download Options */}
                <Card className="border-green-200">
                  <CardHeader className="bg-green-50 dark:bg-green-950/20">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Music className="w-5 h-5 text-green-500" />
                      Audio Downloads
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    {videoData.audioFormats?.map((format, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50/50 dark:bg-green-950/10 rounded-lg">
                        <div>
                          <div className="font-medium">{format.quality} MP3</div>
                          <div className="text-sm text-muted-foreground">{format.fileSize}</div>
                        </div>
                        <Button
                          onClick={() => handleDownload(format.downloadUrl, `${videoData.title}.mp3`, 'audio')}
                          size="sm"
                          className="bg-green-500 hover:bg-green-600"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    )) || (
                      <div className="flex items-center justify-between p-3 bg-green-50/50 dark:bg-green-950/10 rounded-lg">
                        <div>
                          <div className="font-medium">High Quality MP3</div>
                          <div className="text-sm text-muted-foreground">~{Math.round(parseInt(videoData.fileSize || '0') * 0.1)}MB</div>
                        </div>
                        <Button
                          onClick={() => handleDownload(videoData.audioUrl || videoData.downloadUrl, `${videoData.title}.mp3`, 'audio')}
                          size="sm"
                          className="bg-green-500 hover:bg-green-600"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>Downloads are processed securely and privately. We don't store any of your downloaded content.</p>
              </div>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Supports all YouTube video formats including HD, Full HD, and 4K quality downloads. Convert YouTube videos to MP4 or extract high-quality MP3 audio files instantly.</p>
          </div>
        </CardContent>
      </Card>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <LogIn className="w-5 h-5 text-red-500" />
              Login Required
            </DialogTitle>
            <DialogDescription className="pt-2 space-y-3">
              <p className="text-base">
                You need to be logged in to download videos.
              </p>
              <p className="text-sm text-muted-foreground">
                Create a free account to enjoy unlimited downloads of YouTube videos and audio files.
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button 
              className="w-full bg-red-500 hover:bg-red-600"
              onClick={() => window.location.href = '/handler/sign-in'}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login to Download
            </Button>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => window.location.href = '/handler/sign-up'}
            >
              Create Free Account
            </Button>
            <Button 
              variant="ghost"
              className="w-full"
              onClick={() => setShowLoginDialog(false)}
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
