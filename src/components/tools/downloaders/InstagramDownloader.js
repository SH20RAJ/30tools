'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Link, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function InstagramDownloader() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [videoData, setVideoData] = useState(null);
    const [error, setError] = useState('');

    const handleDownload = async () => {
        if (!url.trim()) {
            setError('Please enter an Instagram video URL');
            return;
        }

        if (!url.includes('instagram.com')) {
            setError('Please enter a valid Instagram URL');
            return;
        }

        setIsLoading(true);
        setError('');
        setVideoData(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            setVideoData({
                title: 'Instagram Video/Reel',
                thumbnail: '/placeholder-video-thumbnail.jpg',
                duration: '0:45',
                type: 'reel',
                qualities: [
                    { quality: 'HD 720p', size: '12.8 MB', url: '#' },
                    { quality: 'SD 480p', size: '7.2 MB', url: '#' },
                    { quality: 'Mobile 360p', size: '3.5 MB', url: '#' }
                ]
            });
        } catch (err) {
            setError('Failed to process the Instagram content. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadVideo = (quality) => {
        console.log(`Downloading Instagram content in ${quality.quality}`);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Link className="h-5 w-5" />
                        Instagram Video Downloader
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-2">
                        <Input
                            type="url"
                            placeholder="Paste Instagram video/reel/story URL here..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="flex-1"
                        />
                        <Button
                            onClick={handleDownload}
                            disabled={isLoading}
                            className=""
                        >
                            {isLoading ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <Download className="h-4 w-4" />
                            )}
                            {isLoading ? 'Processing...' : 'Download'}
                        </Button>
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50 rounded-lg text-destructive">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    {videoData && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
                                <CheckCircle2 className="h-4 w-4" />
                                <span className="text-sm">Instagram content processed successfully!</span>
                            </div>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex gap-4">
                                        <img
                                            src={videoData.thumbnail}
                                            alt="Content thumbnail"
                                            className="w-24 h-16 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm mb-1">{videoData.title}</h3>
                                            <p className="text-xs text-muted-foreground">Duration: {videoData.duration}</p>
                                            <p className="text-xs text-muted-foreground capitalize">Type: {videoData.type}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        <h4 className="text-sm font-medium">Choose Quality:</h4>
                                        {videoData.qualities.map((quality, index) => (
                                            <div key={index} className="flex items-center justify-between p-2 border rounded">
                                                <div>
                                                    <span className="text-sm font-medium">{quality.quality}</span>
                                                    <span className="text-xs text-muted-foreground ml-2">({quality.size})</span>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    onClick={() => downloadVideo(quality)}
                                                    className=""
                                                >
                                                    <Download className="h-3 w-3 mr-1" />
                                                    Download
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    <div className="text-xs text-muted-foreground">
                        <p>• Supports Instagram videos, reels, stories, and IGTV</p>
                        <p>• No login required</p>
                        <p>• Anonymous downloads</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}