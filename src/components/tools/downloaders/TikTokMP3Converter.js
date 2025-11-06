'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Loader2, AlertCircle, CheckCircle, Music, RefreshCw } from 'lucide-react';

export default function TikTokMP3Converter() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [conversionData, setConversionData] = useState(null);
    const [error, setError] = useState('');
    const [selectedQuality, setSelectedQuality] = useState('192');

    const handleConvert = async () => {
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
        setConversionData(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2500));

            const fileSizeMap = {
                '128': '1.2 MB',
                '192': '1.8 MB',
                '256': '2.4 MB',
                '320': '3.0 MB'
            };

            setConversionData({
                title: 'TikTok Audio - Trending Sound',
                thumbnail: '/placeholder-tiktok-audio.jpg',
                duration: '0:30',
                author: '@tiktoker',
                music: 'Original Sound - Viral Audio',
                outputQuality: selectedQuality + 'kbps',
                outputSize: fileSizeMap[selectedQuality],
                downloadUrl: '#'
            });
        } catch (err) {
            setError('Failed to convert TikTok to MP3. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadMP3 = () => {
        console.log(`Downloading TikTok MP3 at ${selectedQuality}kbps quality`);
    };

    const qualityOptions = [
        { value: '128', label: '128kbps', description: 'Standard quality, smaller file' },
        { value: '192', label: '192kbps', description: 'High quality, balanced size' },
        { value: '256', label: '256kbps', description: 'Very high quality' },
        { value: '320', label: '320kbps', description: 'Premium quality, largest file' }
    ];

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <RefreshCw className="h-5 w-5" />
                        TikTok to MP3 Converter
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
                            onClick={handleConvert}
                            disabled={isLoading}
                            className="bg-black hover:bg-gray-800"
                        >
                            {isLoading ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <RefreshCw className="h-4 w-4" />
                            )}
                            {isLoading ? 'Converting...' : 'Convert'}
                        </Button>
                    </div>

                    {/* Quality Selection */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">Select MP3 Quality:</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {qualityOptions.map((option) => (
                                <label key={option.value} className="flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="quality"
                                        value={option.value}
                                        checked={selectedQuality === option.value}
                                        onChange={(e) => setSelectedQuality(e.target.value)}
                                        className="text-primary"
                                    />
                                    <div>
                                        <div className="font-medium text-sm">{option.label}</div>
                                        <div className="text-xs text-muted-foreground">{option.description}</div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50 rounded-lg text-destructive">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    {conversionData && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">TikTok converted to MP3 successfully!</span>
                            </div>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex gap-4 mb-4">
                                        <div className="relative">
                                            <img
                                                src={conversionData.thumbnail}
                                                alt="Audio thumbnail"
                                                className="w-24 h-24 object-cover rounded"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded">
                                                <Music className="h-8 w-8 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm mb-1">{conversionData.title}</h3>
                                            <p className="text-xs text-muted-foreground mb-1">Duration: {conversionData.duration}</p>
                                            <p className="text-xs text-muted-foreground mb-1">Author: {conversionData.author}</p>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                                                <Music className="h-3 w-3" />
                                                {conversionData.music}
                                            </p>
                                            <div className="flex items-center gap-1 text-xs">
                                                <span className="bg-muted text-primary px-2 py-1 rounded">MP3 {conversionData.outputQuality}</span>
                                                <span className="bg-muted text-primary px-2 py-1 rounded">{conversionData.outputSize}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-black bg-opacity-5 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <Music className="h-4 w-4 text-primary" />
                                            <div>
                                                <p className="text-sm font-medium">High Quality MP3</p>
                                                <p className="text-xs text-muted-foreground">Bitrate: {conversionData.outputQuality}</p>
                                            </div>
                                        </div>
                                        <Button
                                            onClick={downloadMP3}
                                            className="bg-black hover:bg-gray-800"
                                        >
                                            <Download className="h-4 w-4 mr-1" />
                                            Download MP3
                                        </Button>
                                    </div>

                                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                        <h5 className="text-sm font-medium mb-2">Conversion Details:</h5>
                                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                                            <div>Input: TikTok Video</div>
                                            <div>Output: MP3 Audio</div>
                                            <div>Quality: {conversionData.outputQuality}</div>
                                            <div>Size: {conversionData.outputSize}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    <div className="text-xs text-muted-foreground">
                        <p>• Convert TikTok videos to high-quality MP3</p>
                        <p>• Multiple quality options up to 320kbps</p>
                        <p>• Fast conversion with no watermarks</p>
                        <p>• Perfect for music and sound collections</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}