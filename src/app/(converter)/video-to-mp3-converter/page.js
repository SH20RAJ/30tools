import VideoToMP3Converter from '@/components/tools/converter/VideoToMP3Converter';

export const metadata = {
    title: "Video to MP3 Converter - Convert Video to Audio Online Free | 30tools",
    description: "Convert video files to MP3 audio format online for free. Extract high-quality audio from MP4, AVI, MOV, and other video formats. Fast, secure, unlimited conversions.",
    keywords: [
        // Primary video to MP3 keywords
        "video to mp3 converter",
        "convert video to mp3",
        "video to audio converter",
        "mp4 to mp3 converter",
        "extract audio from video",
        "video to mp3 online",
        "free video to mp3 converter",
        "video audio extractor",
        "convert video to audio",
        "video mp3 converter",

        // Long-tail SEO keywords
        "video to mp3 converter online free",
        "convert video to mp3 high quality",
        "video to mp3 converter 320kbps",
        "bulk video to mp3 converter",
        "video to mp3 converter no watermark",
        "convert mp4 to mp3 online free",
        "video to audio converter online",
        "extract audio from video free",
        "video to mp3 converter for pc mobile",
        "fast video to mp3 converter",

        // International keywords
        "convertir video a mp3",
        "converter video para mp3",
        "convertir vidéo en mp3",
        "تحويل فيديو الى mp3",
        "convertire video in mp3",
        "chuyển đổi video sang mp3",

        // Format specific
        "mp4 to mp3 converter online",
        "avi to mp3 converter",
        "mov to mp3 converter",
        "mkv to mp3 converter",
        "webm to mp3 converter"
    ].join(", "),
    openGraph: {
        title: "Video to MP3 Converter - Convert Video to Audio Online Free",
        description: "Convert video files to MP3 audio format. Extract high-quality audio from MP4, AVI, MOV videos online.",
        url: "https://30tools.com/video-to-mp3-converter",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/video-to-mp3-converter.jpg",
                width: 1200,
                height: 630,
                alt: "Video to MP3 Converter - Free Online Tool"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Video to MP3 Converter - Convert Video to Audio Free",
        description: "Convert video files to MP3 audio format. Free video to MP3 converter tool.",
        images: ["/og-images/video-to-mp3-converter.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/video-to-mp3-converter"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Video to MP3 Converter",
    "description": "Free online tool to convert video files to MP3 audio format with high quality output",
    "url": "https://30tools.com/video-to-mp3-converter",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Convert video to MP3",
        "High quality audio extraction",
        "Multiple video format support",
        "Fast conversion speed",
        "No software installation required",
        "Works on all devices",
        "Unlimited free conversions",
        "Privacy protected"
    ]
};

export default function VideoToMP3ConverterPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                            Video to MP3 Converter
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Convert video files to high-quality MP3 audio format for free. Our advanced video to MP3 converter extracts crystal-clear audio from MP4, AVI, MOV, MKV, and other video formats. Perfect for creating music libraries, podcasts, and audio content from your video files. Fast, secure, and unlimited conversions without any software installation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ All Video Formats</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ High Quality Audio</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Fast Conversion</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Software Needed</span>
                        </div>
                    </div>

                    <VideoToMP3Converter />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Convert Video to MP3 Online</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-purple-500 font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Upload Video File</h3>
                                    <p className="text-sm text-muted-foreground">Select and upload your video file (MP4, AVI, MOV, MKV, etc.)</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-purple-500 font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Choose Quality</h3>
                                    <p className="text-sm text-muted-foreground">Select your preferred MP3 quality from 128kbps to 320kbps</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-purple-500 font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Download MP3</h3>
                                    <p className="text-sm text-muted-foreground">Convert and download your video as high-quality MP3 audio file</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Video to MP3 Converter Features</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-purple-600">🎵 Premium Audio Quality</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Extract audio from videos with up to 320kbps quality. Our advanced audio processing preserves the original sound fidelity for the best listening experience.</p>

                                    <h3 className="font-medium mb-2 text-purple-600">📁 Multiple Video Formats</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Support for all popular video formats including MP4, AVI, MOV, MKV, WMV, FLV, WebM, and more. Convert any video file to MP3 audio.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-purple-600">⚡ Lightning Fast Processing</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Our optimized servers convert videos to MP3 in seconds. Advanced algorithms ensure fast processing without compromising audio quality.</p>

                                    <h3 className="font-medium mb-2 text-purple-600">📦 Batch Conversion</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Convert multiple video files to MP3 at once. Perfect for processing entire video collections or creating music libraries from video content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Supported Video Formats</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-medium mb-2">Common Formats</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• MP4 to MP3</li>
                                        <li>• AVI to MP3</li>
                                        <li>• MOV to MP3</li>
                                        <li>• MKV to MP3</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-medium mb-2">Web Formats</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• WebM to MP3</li>
                                        <li>• FLV to MP3</li>
                                        <li>• 3GP to MP3</li>
                                        <li>• OGV to MP3</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-medium mb-2">Professional</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• WMV to MP3</li>
                                        <li>• ASF to MP3</li>
                                        <li>• M4V to MP3</li>
                                        <li>• VOB to MP3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Video to MP3 Converter FAQ</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">What video formats can I convert to MP3?</h3>
                                    <p className="text-sm text-muted-foreground">Our converter supports all major video formats including MP4, AVI, MOV, MKV, WMV, FLV, WebM, 3GP, and many more. Upload any video file and we'll extract the audio.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">What audio quality options are available?</h3>
                                    <p className="text-sm text-muted-foreground">We offer multiple MP3 quality options: 128kbps (standard), 192kbps (high), 256kbps (very high), and 320kbps (premium) to balance quality and file size.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Is there a file size limit?</h3>
                                    <p className="text-sm text-muted-foreground">We support video files up to 2GB in size. For larger files, consider compressing the video first or contact us for enterprise solutions.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I convert multiple videos at once?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! Our batch conversion feature allows you to upload and convert multiple video files to MP3 simultaneously, saving you time and effort.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Are my files stored on your servers?</h3>
                                    <p className="text-sm text-muted-foreground">No! All files are processed temporarily and automatically deleted after conversion. We prioritize your privacy and don't store any uploaded content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}