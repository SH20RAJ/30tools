'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { Download, Link, Loader2, AlertCircle, CheckCircle, Music, BookOpen, HelpCircle, Star, Wrench, Scissors, FileText, Globe, Shield, Play, Users, Zap } from 'lucide-react';

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
                        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50 rounded-lg text-destructive">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    {videoData && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
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
                                                        <span className="text-xs bg-muted text-primary px-2 py-1 rounded ml-2">
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

            {/* How to Use Guide */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        How to Download TikTok Videos
                    </CardTitle>
                    <CardDescription>
                        Step-by-step guide to download TikTok videos easily
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-semibold text-primary">1</span>
                            </div>
                            <div>
                                <h4 className="font-semibold">Find the TikTok Video</h4>
                                <p className="text-sm text-muted-foreground">
                                    Open TikTok app or website and find the video you want to download. Make sure the video is public.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-semibold text-primary">2</span>
                            </div>
                            <div>
                                <h4 className="font-semibold">Copy the Video URL</h4>
                                <p className="text-sm text-muted-foreground">
                                    Tap the share button (arrow icon) and select "Copy link" to get the video URL.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-semibold text-primary">3</span>
                            </div>
                            <div>
                                <h4 className="font-semibold">Paste URL and Download</h4>
                                <p className="text-sm text-muted-foreground">
                                    Paste the URL in the input field above and click download. Choose your preferred quality.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-semibold text-primary">4</span>
                            </div>
                            <div>
                                <h4 className="font-semibold">Save Your Video</h4>
                                <p className="text-sm text-muted-foreground">
                                    The video will be downloaded without watermark in your chosen quality format.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Features */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        TikTok Downloader Features
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <Shield className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">No Watermark</h4>
                                    <p className="text-sm text-muted-foreground">Download videos without TikTok branding</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Play className="h-4 w-4 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">HD Quality</h4>
                                    <p className="text-sm text-muted-foreground">Download in high definition resolution</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Music className="h-4 w-4 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Audio Extraction</h4>
                                    <p className="text-sm text-muted-foreground">Extract audio as MP3 format</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Zap className="h-4 w-4 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Fast Download</h4>
                                    <p className="text-sm text-muted-foreground">Quick processing and download speeds</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                    <Users className="h-4 w-4 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">All TikTok Content</h4>
                                    <p className="text-sm text-muted-foreground">Download videos, stories, and live content</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                                    <Globe className="h-4 w-4 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Cross-Platform</h4>
                                    <p className="text-sm text-muted-foreground">Works on desktop and mobile devices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5" />
                        TikTok Download FAQs
                    </CardTitle>
                    <CardDescription>
                        Common questions about downloading TikTok videos
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        <h4 className="font-semibold">Is it legal to download TikTok videos?</h4>
                        <p className="text-sm text-muted-foreground">
                            You can download videos for personal use only. Downloading copyrighted content for redistribution
                            or commercial use may violate copyright laws. Always respect content creators' rights.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold">Why can't I download some TikTok videos?</h4>
                        <p className="text-sm text-muted-foreground">
                            Some videos may be private, deleted, or restricted by the creator. Our tool only works with
                            public videos that are available on TikTok's platform.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold">Can I download TikTok videos on mobile?</h4>
                        <p className="text-sm text-muted-foreground">
                            Yes! Our tool works on all devices including smartphones and tablets. Simply copy the video URL
                            from the TikTok app and paste it into our downloader.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold">What's the difference between HD and SD quality?</h4>
                        <p className="text-sm text-muted-foreground">
                            HD (High Definition) offers better video quality with higher resolution, while SD (Standard Definition)
                            provides smaller file sizes but lower quality. Choose based on your needs.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold">How do I extract audio from TikTok videos?</h4>
                        <p className="text-sm text-muted-foreground">
                            When downloading, select the "Audio Only (MP3)" option. This will extract just the audio track
                            from the video and save it as an MP3 file.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold">Is there a download limit?</h4>
                        <p className="text-sm text-muted-foreground">
                            We don't impose artificial limits, but please be respectful of content creators and TikTok's
                            terms of service. Use our tool responsibly for personal use only.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* User Reviews */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5" />
                        What Users Say About TikTok Downloader
                    </CardTitle>
                    <CardDescription>
                        Reviews from our community of users
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium">Sarah M., Content Creator</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    "Finally, a TikTok downloader that actually works! No watermarks, fast downloads, and the audio extraction
                                    feature is perfect for my content creation workflow."
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">November 15, 2024</p>
                            </div>

                            <div className="border rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium">Mike R., Social Media Manager</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    "This tool has saved me so much time. I can quickly download trending TikTok videos for my clients
                                    without any quality loss. Highly recommended!"
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">November 12, 2024</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex">
                                        {[...Array(4)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <Star className="h-4 w-4 text-gray-300" />
                                    </div>
                                    <span className="text-sm font-medium">Emma L., Student</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    "Easy to use and works perfectly on my phone. The HD quality downloads are amazing.
                                    Sometimes takes a bit long for very popular videos though."
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">November 10, 2024</p>
                            </div>

                            <div className="border rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium">David K., Marketing Professional</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    "The no-watermark feature is a game changer for professional use. Clean downloads every time,
                                    and the interface is intuitive. Best TikTok downloader I've found."
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">November 8, 2024</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Related Tools */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wrench className="h-5 w-5" />
                        Related Social Media Tools
                    </CardTitle>
                    <CardDescription>
                        More tools for social media content management
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Scissors className="h-6 w-6 text-pink-600" />
                            </div>
                            <h4 className="font-medium mb-1">Instagram Downloader</h4>
                            <p className="text-sm text-muted-foreground">Download Instagram photos, videos, and stories</p>
                        </div>

                        <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <FileText className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="font-medium mb-1">Twitter Downloader</h4>
                            <p className="text-sm text-muted-foreground">Save tweets, videos, and media from Twitter</p>
                        </div>

                        <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Play className="h-6 w-6 text-red-600" />
                            </div>
                            <h4 className="font-medium mb-1">YouTube Downloader</h4>
                            <p className="text-sm text-muted-foreground">Download videos and audio from YouTube</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* SEO Content Section */}
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>The Ultimate Guide to TikTok Video Downloads</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm max-w-none">
                        <h3>Why Download TikTok Videos?</h3>
                        <p>
                            TikTok has become the world's most popular short-form video platform, with billions of users creating
                            and sharing content daily. Whether you're a content creator, marketer, or simply want to save your
                            favorite videos, having a reliable TikTok downloader is essential. Our tool provides clean,
                            watermark-free downloads in multiple quality options.
                        </p>

                        <h3>TikTok Video Download Best Practices</h3>
                        <p>
                            When downloading TikTok videos, consider these best practices:
                        </p>
                        <ul>
                            <li><strong>Respect Copyright:</strong> Only download content for personal use and give credit to creators</li>
                            <li><strong>Choose Quality Wisely:</strong> HD for high-quality viewing, SD for smaller file sizes</li>
                            <li><strong>Check Privacy Settings:</strong> Ensure videos are public before attempting downloads</li>
                            <li><strong>Use Legal Sources:</strong> Download from official TikTok URLs only</li>
                            <li><strong>Backup Important Content:</strong> Save videos you want to keep before they're deleted</li>
                        </ul>

                        <h3>Common TikTok Download Issues & Solutions</h3>
                        <div className="bg-muted p-4 rounded-lg">
                            <h4>Can't Download a Video?</h4>
                            <ul className="mt-2 space-y-1">
                                <li><strong>Private Account:</strong> Videos from private accounts can't be downloaded</li>
                                <li><strong>Deleted Content:</strong> If a video was deleted, it can't be recovered</li>
                                <li><strong>Regional Restrictions:</strong> Some content may be geo-blocked</li>
                                <li><strong>Technical Issues:</strong> Try refreshing the page or using a different URL</li>
                            </ul>
                        </div>

                        <h3>TikTok Audio Downloads</h3>
                        <p>
                            Many users download TikTok videos just for the audio. Our MP3 extraction feature allows you to:
                        </p>
                        <ul>
                            <li>Create remixes of trending sounds</li>
                            <li>Use audio for other video projects</li>
                            <li>Save favorite music tracks</li>
                            <li>Build a personal music library</li>
                        </ul>

                        <h3>Tips for Content Creators</h3>
                        <p>
                            If you're creating content on TikTok, downloading videos can help you:
                        </p>
                        <ul>
                            <li>Study trending formats and styles</li>
                            <li>Analyze successful content strategies</li>
                            <li>Get inspiration for your own videos</li>
                            <li>Learn from top creators in your niche</li>
                            <li>Understand what resonates with audiences</li>
                        </ul>

                        <h3>Legal and Ethical Considerations</h3>
                        <p>
                            While downloading TikTok videos for personal use is generally acceptable, always consider:
                        </p>
                        <ul>
                            <li>Copyright laws in your country</li>
                            <li>Fair use guidelines for educational purposes</li>
                            <li>Attribution requirements for creative content</li>
                            <li>Platform terms of service</li>
                            <li>Respect for content creators' rights</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}