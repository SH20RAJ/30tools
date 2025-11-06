'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Loader2, AlertCircle, CheckCircle, Music, Headphones } from 'lucide-react';

export default function TikTokAudioDownloader() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [audioData, setAudioData] = useState(null);
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
        setAudioData(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            setAudioData({
                title: 'TikTok Audio Track',
                thumbnail: '/placeholder-audio-thumbnail.jpg',
                duration: '0:28',
                author: '@tiktoker',
                music: 'Trending Sound - Original Audio',
                audioQualities: [
                    { quality: 'High Quality (320kbps)', size: '2.1 MB', url: '#', bitrate: '320kbps' },
                    { quality: 'Standard Quality (192kbps)', size: '1.3 MB', url: '#', bitrate: '192kbps' },
                    { quality: 'Basic Quality (128kbps)', size: '0.9 MB', url: '#', bitrate: '128kbps' }
                ]
            });
        } catch (err) {
            setError('Failed to process the TikTok audio. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadAudio = (quality) => {
        console.log(`Downloading TikTok audio in ${quality.quality}`);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Headphones className="h-5 w-5" />
                        TikTok Audio Downloader
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
                                <Music className="h-4 w-4" />
                            )}
                            {isLoading ? 'Processing...' : 'Extract Audio'}
                        </Button>
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50 rounded-lg text-destructive">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    {audioData && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">TikTok audio extracted successfully!</span>
                            </div>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex gap-4 mb-4">
                                        <div className="relative">
                                            <img
                                                src={audioData.thumbnail}
                                                alt="Audio thumbnail"
                                                className="w-24 h-24 object-cover rounded"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded">
                                                <Music className="h-8 w-8 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm mb-1">{audioData.title}</h3>
                                            <p className="text-xs text-muted-foreground mb-1">Duration: {audioData.duration}</p>
                                            <p className="text-xs text-muted-foreground mb-1">Author: {audioData.author}</p>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                                                <Music className="h-3 w-3" />
                                                {audioData.music}
                                            </p>
                                            <div className="flex items-center gap-1 text-xs">
                                                <span className="bg-muted text-primary px-2 py-1 rounded">Audio Only</span>
                                                <span className="bg-muted text-primary px-2 py-1 rounded">No Watermark</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium">Choose Audio Quality:</h4>
                                        {audioData.audioQualities.map((quality, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 border rounded">
                                                <div className="flex items-center gap-2">
                                                    <Music className="h-4 w-4 text-primary" />
                                                    <div>
                                                        <span className="text-sm font-medium">{quality.quality}</span>
                                                        <span className="text-xs text-muted-foreground ml-2">({quality.size})</span>
                                                        <div className="text-xs text-muted-foreground">MP3 • {quality.bitrate}</div>
                                                    </div>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    onClick={() => downloadAudio(quality)}
                                                    className="bg-black hover:bg-gray-800"
                                                >
                                                    <Download className="h-3 w-3 mr-1" />
                                                    Download
                                                </Button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                        <h5 className="text-sm font-medium mb-2">Audio Preview:</h5>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Headphones className="h-4 w-4" />
                                            <span>High-quality audio extracted from TikTok video</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    <div className="text-xs text-muted-foreground">
                        <p>• Extract high-quality audio from TikTok videos</p>
                        <p>• Multiple MP3 quality options available</p>
                        <p>• No watermark in audio files</p>
                        <p>• Perfect for music and sound collections</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}