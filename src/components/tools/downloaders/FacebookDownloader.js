'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Link, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

export default function FacebookDownloader() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [videoData, setVideoData] = useState(null);
    const [error, setError] = useState('');

    const handleDownload = async () => {
        if (!url.trim()) {
            setError('Please enter a Facebook video URL');
            return;
        }

        if (!url.includes('facebook.com') && !url.includes('fb.watch')) {
            setError('Please enter a valid Facebook video URL');
            return;
        }

        setIsLoading(true);
        setError('');
        setVideoData(null);

        try {
            // Simulate API call - replace with actual implementation
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Mock video data - replace with actual API response
            setVideoData({
                title: 'Sample Facebook Video',
                thumbnail: '/placeholder-video-thumbnail.jpg',
                duration: '2:30',
                qualities: [
                    { quality: 'HD 720p', size: '15.2 MB', url: '#' },
                    { quality: 'SD 480p', size: '8.7 MB', url: '#' },
                    { quality: 'Mobile 360p', size: '4.1 MB', url: '#' }
                ]
            });
        } catch (err) {
            setError('Failed to process the Facebook video. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadVideo = (quality) => {
        // Implement actual download logic here
        console.log(`Downloading video in ${quality.quality}`);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Link className="h-5 w-5" />
                        Facebook Video Downloader
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-2">
                        <Input
                            type="url"
                            placeholder="Paste Facebook video URL here..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="flex-1"
                        />
                        <Button
                            onClick={handleDownload}
                            disabled={isLoading}
                            className="bg-blue-600 hover:bg-blue-700"
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
                                <span className="text-sm">Video processed successfully!</span>
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
                                                    className="bg-blue-600 hover:bg-blue-700"
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
                        <p>• Supports Facebook videos, reels, and stories</p>
                        <p>• No registration required</p>
                        <p>• Fast and secure downloads</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}