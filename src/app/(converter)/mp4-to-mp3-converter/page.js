import MP4ToMP3Converter from '@/components/tools/converter/MP4ToMP3Converter';

export const metadata = {
    title: "Mp4 To Mp3 Converter - Free Online Converter | Instant Conversion",
    description: "Convert Process instantly with our free mp4 to mp3 converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
    keywords: [
        // Primary MP4 to MP3 keywords
        "mp4 to mp3 converter",
        "convert mp4 to mp3",
        "mp4 to mp3 online",
        "mp4 audio extractor",
        "mp4 to mp3 free",
        "extract audio from mp4",
        "mp4 to mp3 converter online",
        "free mp4 to mp3 converter",
        "mp4 video to mp3 audio",
        "mp4 mp3 converter",

        // Long-tail SEO keywords
        "mp4 to mp3 converter online free",
        "convert mp4 to mp3 high quality",
        "mp4 to mp3 converter 320kbps",
        "bulk mp4 to mp3 converter",
        "mp4 to mp3 converter no watermark",
        "fast mp4 to mp3 converter",
        "mp4 to mp3 converter for pc mobile",
        "extract audio from mp4 video",
        "mp4 to mp3 converter without software",
        "professional mp4 to mp3 converter",

        // International keywords
        "convertir mp4 a mp3",
        "converter mp4 para mp3",
        "convertir mp4 en mp3",
        "تحويل mp4 الى mp3",
        "convertire mp4 in mp3",
        "chuyển đổi mp4 sang mp3",

        // Quality specific
        "mp4 to mp3 320kbps",
        "mp4 to mp3 high quality",
        "mp4 to mp3 lossless",
        "mp4 to mp3 hd audio",
        "mp4 to mp3 stereo"
    ].join(", "),
    openGraph: {
        title: "MP4 to MP3 Converter - Convert MP4 Video to MP3 Audio Free",
        description: "Convert MP4 video files to MP3 audio format. Extract high-quality audio from MP4 videos online.",
        url: "https://30tools.com/mp4-to-mp3-converter",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/mp4-to-mp3-converter.jpg",
                width: 1200,
                height: 630,
                alt: "MP4 to MP3 Converter - Free Online Tool"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "MP4 to MP3 Converter - Convert MP4 to Audio Free",
        description: "Convert MP4 video files to MP3 audio format. Free MP4 to MP3 converter tool.",
        images: ["/og-images/mp4-to-mp3-converter.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/mp4-to-mp3-converter"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "MP4 to MP3 Converter",
    "description": "Free online tool to convert MP4 video files to MP3 audio format with high quality output",
    "url": "https://30tools.com/mp4-to-mp3-converter",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Convert MP4 to MP3",
        "High quality audio extraction",
        "320kbps output support",
        "Fast conversion speed",
        "No software installation required",
        "Works on all devices",
        "Unlimited free conversions",
        "Privacy protected"
    ]
};

export default function MP4ToMP3ConverterPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-background">
                            MP4 to MP3 Converter
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Convert MP4 video files to high-quality MP3 audio format for free. Our specialized MP4 to MP3 converter extracts crystal-clear audio from your MP4 videos with up to 320kbps quality. Perfect for creating music libraries, extracting soundtracks, and converting video content to audio format. Fast, secure, and unlimited conversions without any software installation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ MP4 Specialist</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ 320kbps Quality</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Fast Processing</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Batch Conversion</span>
                        </div>
                    </div>

                    <MP4ToMP3Converter />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Convert MP4 to MP3 Online</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Upload MP4 File</h3>
                                    <p className="text-sm text-muted-foreground">Select and upload your MP4 video file from your device</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Select Quality</h3>
                                    <p className="text-sm text-muted-foreground">Choose your preferred MP3 quality from 128kbps to 320kbps</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Download MP3</h3>
                                    <p className="text-sm text-muted-foreground">Convert and download your MP4 as high-quality MP3 audio file</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">MP4 to MP3 Converter Features</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">🎵 Optimized for MP4</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Specially designed for MP4 video files. Our converter is optimized to handle MP4 format efficiently, ensuring the best audio extraction quality and speed.</p>

                                    <h3 className="font-medium mb-2 text-primary">🔊 Premium Audio Quality</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Extract audio from MP4 videos with up to 320kbps quality. Advanced audio processing preserves the original sound fidelity for professional results.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">⚡ Lightning Fast Speed</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Our specialized MP4 processing engines convert your videos to MP3 in seconds. Optimized algorithms ensure maximum speed without quality loss.</p>

                                    <h3 className="font-medium mb-2 text-primary">📦 Batch Processing</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Convert multiple MP4 files to MP3 simultaneously. Perfect for processing video collections, movie soundtracks, or music video libraries.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Why Choose Our MP4 to MP3 Converter?</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">🎯 MP4 Specialist</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Unlike generic converters, we specialize in MP4 format. This means better compatibility, faster processing, and higher quality audio extraction from your MP4 videos.</p>

                                    <h3 className="font-medium mb-2 text-primary">🔧 Advanced Audio Processing</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Our advanced audio processing algorithms ensure optimal audio extraction from MP4 videos, preserving stereo channels, dynamic range, and frequency response.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">📊 Quality Options</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Choose from multiple quality options: 128kbps (small files), 192kbps (balanced), 256kbps (high quality), and 320kbps (premium quality) to suit your needs.</p>

                                    <h3 className="font-medium mb-2 text-primary">🔒 Secure Processing</h3>
                                    <p className="text-sm text-muted-foreground mb-4">All MP4 files are processed securely and deleted immediately after conversion. Your privacy is protected with encrypted file transfers and secure processing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">MP4 to MP3 Converter FAQ</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">What makes this different from other converters?</h3>
                                    <p className="text-sm text-muted-foreground">Our converter is specifically optimized for MP4 files, offering faster processing, better quality, and more reliable conversion compared to generic video converters.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I convert large MP4 files?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! We support MP4 files up to 2GB in size. Our optimized processing handles large files efficiently without compromising speed or quality.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Will the audio quality be preserved?</h3>
                                    <p className="text-sm text-muted-foreground">Absolutely! Our advanced audio extraction preserves the original audio quality from your MP4 videos. Choose 320kbps for the highest quality output.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I convert MP4 files with multiple audio tracks?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! Our converter can handle MP4 files with multiple audio tracks. You can select which audio track to extract or merge them into a single MP3 file.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Is there a conversion limit?</h3>
                                    <p className="text-sm text-muted-foreground">No limits! Convert as many MP4 files to MP3 as you need, completely free. Perfect for processing entire video libraries or movie collections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}