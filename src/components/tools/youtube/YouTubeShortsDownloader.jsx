'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Smartphone, Loader2, Play } from 'lucide-react';
import { downloadYouTubeShorts } from '@/lib/youtube-actions';

export default function YouTubeShortsDownloader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shortsData, setShortsData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Please enter a YouTube Shorts URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setShortsData(null);

    try {
      const result = await downloadYouTubeShorts(url);
      if (result.success) {
        setShortsData(result.data);
      } else {
        setError(result.error || 'Failed to process YouTube Shorts video');
      }
    } catch (err) {
      setError('An error occurred while processing the Shorts video');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (downloadUrl, filename) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-2 border-pink-500/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-950/20 dark:to-red-950/20">
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Smartphone className="w-6 h-6 text-pink-500" />
            YouTube Shorts Downloader
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="Paste YouTube Shorts URL here (e.g., https://youtube.com/shorts/...)"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError('');
                }}
                className="flex-1 border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                disabled={isLoading || !url.trim()}
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download Shorts
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

          {shortsData && (
            <div className="mt-6 space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    {shortsData.thumbnail && (
                      <img 
                        src={shortsData.thumbnail} 
                        alt="Shorts thumbnail"
                        className="w-24 h-32 object-cover rounded-lg shadow-md"
                        style={{ aspectRatio: '9/16' }}
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2 text-green-800 dark:text-green-200">
                      {shortsData.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-green-600 border-green-300">
                        Duration: {shortsData.duration}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-300">
                        Format: Vertical Video
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-300">
                        Size: {shortsData.fileSize}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {shortsData.description && shortsData.description.slice(0, 150)}...
                    </p>
                  </div>
                </div>
              </div>

              <Card className="border-pink-200">
                <CardHeader className="bg-pink-50 dark:bg-pink-950/20">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-pink-500" />
                    Download Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-pink-50/50 dark:bg-pink-950/10 rounded-lg">
                    <div>
                      <div className="font-medium">HD Vertical Video (MP4)</div>
                      <div className="text-sm text-muted-foreground">
                        {shortsData.quality} • {shortsData.fileSize} • 9:16 aspect ratio
                      </div>
                    </div>
                    <Button
                      onClick={() => handleDownload(shortsData.downloadUrl, `${shortsData.title}_shorts.mp4`)}
                      size="sm"
                      className="bg-pink-500 hover:bg-pink-600"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                  
                  {shortsData.audioUrl && (
                    <div className="flex items-center justify-between p-3 bg-purple-50/50 dark:bg-purple-950/10 rounded-lg">
                      <div>
                        <div className="font-medium">Audio Only (MP3)</div>
                        <div className="text-sm text-muted-foreground">
                          High Quality Audio • ~{Math.round(parseInt(shortsData.fileSize || '0') * 0.1)}MB
                        </div>
                      </div>
                      <Button
                        onClick={() => handleDownload(shortsData.audioUrl, `${shortsData.title}_audio.mp3`)}
                        size="sm"
                        className="bg-purple-500 hover:bg-purple-600"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Audio
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="text-center text-sm text-muted-foreground">
                <p>YouTube Shorts are downloaded in their original vertical format, perfect for mobile viewing and social media sharing.</p>
              </div>
            </div>
          )}

          <div className="mt-6 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-lg p-4">
            <h3 className="font-medium mb-2 text-center">💡 Pro Tips for YouTube Shorts Downloads</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p><strong>Mobile Optimized:</strong> Shorts are designed for vertical viewing on mobile devices</p>
                <p><strong>Perfect for Stories:</strong> Use downloaded Shorts for Instagram/TikTok stories</p>
              </div>
              <div>
                <p><strong>Content Creation:</strong> Study successful Shorts for inspiration</p>
                <p><strong>Offline Viewing:</strong> Watch your favorite Shorts without internet</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
