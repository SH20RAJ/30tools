'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Loader2, AlertCircle, CheckCircle, Music, Play } from 'lucide-react';

export default function InstagramReelDownloader() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [reelData, setReelData] = useState(null);
    const [error, setError] = useState('');

    const handleDownload = async () => {
        if (!url.trim()) {
            setError('Please enter an Instagram Reel URL');
            return;
        }

        if (!url.includes('instagram.com/reel') && !url.includes('instagram.com/p/')) {
            setError('Please enter a valid Instagram Reel URL');
            return;
        }

        setIsLoading(true);
        setError('');
        setReelData(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            setReelData({
                title: 'Instagram Reel',
                thumbnail: '/placeholder-reel-thumbnail.jpg',
                duration: '0:28',
                author: '@creator_username',
                caption: 'Amazing reel content! #trending #viral',
                likes: '12.5K',
                views: '89.2K',
                music: 'Trending Audio Track',
                qualities: [
                    { quality: 'HD No Watermark', size: '9.8 MB', url: '#', type: 'video' },
                    { quality: 'SD No Watermark', size: '5.2 MB', url: '#', type: 'video' },
                    { quality: 'Audio Only (MP3)', size: '1.8 MB', url: '#', type: 'audio' }
                ]
            });
        } catch (err) {
            setError('Failed to process the Instagram Reel. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadContent = (quality) => {
        console.log(`Downloading Instagram Reel ${quality.type} in ${quality.quality}`);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="h-5 w-5" />
                        Instagram Reel Downloader
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-2">
                        <Input
                            type="url"
                            placeholder="Paste Instagram Reel URL here..."
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

                    {reelData && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">Instagram Reel processed successfully!</span>
                            </div>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex gap-4 mb-4">
                                        <div className="relative">
                                            <img
                                                src={reelData.thumbnail}
                                                alt="Reel thumbnail"
                                                className="w-24 h-32 object-cover rounded"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Play className="h-8 w-8 text-white bg-black bg-opacity-50 rounded-full p-1" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm mb-1">{reelData.title}</h3>
                                            <p className="text-xs text-muted-foreground mb-1">Duration: {reelData.duration}</p>
                                            <p className="text-xs text-muted-foreground mb-1">Author: {reelData.author}</p>
                                            <p className="text-xs text-muted-foreground mb-2">
                                                👁️ {reelData.views} • ❤️ {reelData.likes}
                                            </p>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                                                <Music className="h-3 w-3" />
                                                {reelData.music}
                                            </p>
                                            <p className="text-xs text-muted-foreground line-clamp-2">{reelData.caption}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium">Download Options:</h4>
                                        {reelData.qualities.map((quality, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 border rounded">
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <span className="text-sm font-medium">{quality.quality}</span>
                                                        <span className="text-xs text-muted-foreground ml-2">({quality.size})</span>
                                                    </div>
                                                    {quality.type === 'video' && (
                                                        <span className="text-xs bg-muted text-primary px-2 py-1 rounded">
                                                            No Watermark
                                                        </span>
                                                    )}
                                                </div>
                                                <Button
                                                    size="sm"
                                                    onClick={() => downloadContent(quality)}
                                                    className=""
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
                        <p>• Download Instagram Reels without watermark</p>
                        <p>• Extract audio as MP3</p>
                        <p>• HD quality downloads</p>
                        <p>• No login required</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}