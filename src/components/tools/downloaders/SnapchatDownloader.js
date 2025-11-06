'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Loader2, AlertCircle, CheckCircle, Camera } from 'lucide-react';

export default function SnapchatDownloader() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [snapData, setSnapData] = useState(null);
    const [error, setError] = useState('');

    const handleDownload = async () => {
        if (!url.trim()) {
            setError('Please enter a Snapchat URL');
            return;
        }

        if (!url.includes('snapchat.com') && !url.includes('snap.com')) {
            setError('Please enter a valid Snapchat URL');
            return;
        }

        setIsLoading(true);
        setError('');
        setSnapData(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSnapData({
                title: 'Snapchat Content',
                thumbnail: '/placeholder-snap-thumbnail.jpg',
                duration: '0:15',
                author: '@snapuser',
                type: 'video',
                qualities: [
                    { quality: 'HD 720p', size: '12.5 MB', url: '#' },
                    { quality: 'SD 480p', size: '7.8 MB', url: '#' },
                    { quality: 'Mobile 360p', size: '4.2 MB', url: '#' }
                ]
            });
        } catch (err) {
            setError('Failed to process the Snapchat content. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadContent = (quality) => {
        console.log(`Downloading Snapchat content in ${quality.quality}`);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Camera className="h-5 w-5" />
                        Snapchat Video Downloader
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-2">
                        <Input
                            type="url"
                            placeholder="Paste Snapchat video URL here..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="flex-1"
                        />
                        <Button
                            onClick={handleDownload}
                            disabled={isLoading}
                            className="bg-muted/500 hover:bg-primary"
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

                    {snapData && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">Snapchat content processed successfully!</span>
                            </div>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex gap-4 mb-4">
                                        <div className="relative">
                                            <img
                                                src={snapData.thumbnail}
                                                alt="Snapchat thumbnail"
                                                className="w-24 h-16 object-cover rounded"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-muted/500 bg-opacity-20 rounded">
                                                <Camera className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm mb-1">{snapData.title}</h3>
                                            <p className="text-xs text-muted-foreground mb-1">Duration: {snapData.duration}</p>
                                            <p className="text-xs text-muted-foreground mb-1">Author: {snapData.author}</p>
                                            <p className="text-xs text-muted-foreground capitalize">Type: {snapData.type}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium">Choose Quality:</h4>
                                        {snapData.qualities.map((quality, index) => (
                                            <div key={index} className="flex items-center justify-between p-2 border rounded">
                                                <div>
                                                    <span className="text-sm font-medium">{quality.quality}</span>
                                                    <span className="text-xs text-muted-foreground ml-2">({quality.size})</span>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    onClick={() => downloadContent(quality)}
                                                    className="bg-muted/500 hover:bg-primary"
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
                        <p>• Download Snapchat videos and stories</p>
                        <p>• Anonymous access to public content</p>
                        <p>• HD quality downloads available</p>
                        <p>• No login or app installation required</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}