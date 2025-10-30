'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Link, Loader2, AlertCircle, CheckCircle, Music } from 'lucide-react';

export default function TikTokDownloader() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [videoData, setVideoData] = useState(null);
    const [error, setError] = useState('');

    const handleDownload = async () => {
        if (!url.trim()) {
            setError('Please enter a TikTok video URL');
            return;
        }

        if (!url.includes('tiktok.com') && !url.includes('vm.tiktok.com')) {
            setError('Please enter a valid TikTok URL');
            return;
        }

        setIsLoading(true);
        setError('');
        setVideoData(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            setVideoData({
                title: 'TikTok Video',
                thumbnail: '/placeholder-video-thumbnail.jpg',
                duration: '0:30',
                author: '@tiktoker',
                music: 'Trending Sound',
                qualities: [
                    { quality: 'HD No Watermark', size: '8.2 MB', url: '#', type: 'video' },
                    { quality: 'SD No Watermark', size: '4.8 MB', url: '#', type: 'video' },
                    { quality: 'Audio Only (MP3)', size: '1.2 MB', url: '#', type: 'audio' }
                ]
            });
        } catch (err) {
            setError('Failed to process the TikTok video. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadContent = (quality) => {
        console.log(`Downloading TikTok ${quality.type} in ${quality.quality}`);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Link className="h-5 w-5" />
                        TikTok Video Downloader
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-2">
                        <Input
                            type="url"
                            placeholder="Paste TikTok video URL here..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="flex-1"
                        />
                        <Button
                            onClick={handleDownload}
                            disabled={isLoading}
                            className="bg-black hover:bg-gray-800"
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
                        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    {videoData && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">TikTok video processed successfully!</span>
                            </div>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex gap-4">
                                        <img
                                            src={videoData.thumbnail}
                                            alt="Video thumbnail"
                                            className="w-24 h-16 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm mb-1">{videoData.title}</h3>
                                            <p className="text-xs text-muted-foreground">Duration: {videoData.duration}</p>
                                            <p className="text-xs text-muted-foreground">Author: {videoData.author}</p>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Music className="h-3 w-3" />
                                                {videoData.music}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        <h4 className="text-sm font-medium">Choose Download Option:</h4>
                                        {videoData.qualities.map((quality, index) => (
                                            <div key={index} className="flex items-center justify-between p-2 border rounded">
                                                <div>
                                                    <span className="text-sm font-medium">{quality.quality}</span>
                                                    <span className="text-xs text-muted-foreground ml-2">({quality.size})</span>
                                                    {quality.type === 'video' && (
                                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded ml-2">
                                                            No Watermark
                                                        </span>
                                                    )}
                                                </div>
                                                <Button
                                                    size="sm"
                                                    onClick={() => downloadContent(quality)}
                                                    className="bg-black hover:bg-gray-800"
                                                >
                                                    {quality.type === 'audio' ? (
                                                        <Music className="h-3 w-3 mr-1" />
                                                    ) : (
                                                        <Download className="h-3 w-3 mr-1" />
                                                    )}
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
                        <p>• Download TikTok videos without watermark</p>
                        <p>• Extract audio as MP3</p>
                        <p>• HD quality downloads</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}