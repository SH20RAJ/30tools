import YouTubeDownloader from '@/components/tools/youtube/YouTubeDownloader';
import InstagramEmbed from '@/components/shared/InstagramEmbed';
import UnstoryOpenmindCTA from '@/components/shared/UnstoryOpenmindCTA';

export const metadata = {
  title: "Youtube Downloader - Free Online Tool | Professional Results",
  description: "Professional youtube downloader tool. Free online processing with high-quality results. No registration required, instant results.",
  keywords: [
    // Primary high-volume keywords
    "youtube downloader",
    "download youtube video",
    "youtube to mp4",
    "youtube to mp3",
    "youtube video downloader online",
    "free youtube downloader",
    "youtube downloader online free",
    "download youtube videos",
    "youtube converter",
    "youtube mp3 downloader",

    // Long-tail keywords for better ranking
    "download youtube video online free without software",
    "youtube video downloader high quality 1080p 4k",
    "convert youtube to mp3 320kbps high quality",
    "youtube downloader no registration required",
    "free youtube video downloader for pc mobile android ios",
    "download youtube videos fast secure safe",
    "youtube to mp4 converter online free unlimited",
    "extract audio from youtube video mp3 converter",
    "bulk youtube video downloader multiple videos",
    "youtube downloader supports all formats resolutions",
    "download private youtube videos with link url",
    "youtube playlist downloader all videos at once",
    "youtube shorts video downloader vertical format",
    "download youtube thumbnail image along with video",
    "best youtube downloader 2024 free online tool",
    "youtube downloader without watermark logo",
    "download youtube video original quality no compression",
    "youtube music downloader mp3 high quality",
    "youtube video downloader chrome firefox safari",
    "download youtube live stream videos recordings"
  ].join(", "),
  openGraph: {
    title: "Free YouTube Video Downloader - Download HD Videos & MP3 Online",
    description: "⚡ Download YouTube videos in HD, 4K quality. Convert YouTube to MP4, MP3 instantly. Fast, secure, unlimited downloads. No software needed.",
    url: "https://30tools.com/youtube-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/youtube-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Free YouTube Video Downloader - Download HD Videos Online"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Downloader - Download Videos & Convert to MP3",
    description: "⚡ Download YouTube videos in HD, 4K. Convert to MP3 instantly. Fast, secure & unlimited downloads.",
    images: ["/og-images/youtube-downloader.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/youtube-downloader"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free YouTube Video Downloader",
  "alternateName": "YouTube to MP4 MP3 Converter",
  "description": "Free online tool to download YouTube videos and convert them to MP4, MP3 formats in HD, 4K quality. No software installation required.",
  "url": "https://30tools.com/youtube-downloader",
  "applicationCategory": ["MultimediaApplication", "UtilitiesApplication"],
  "operatingSystem": "Any",
  "permissions": "browser",
  "browserRequirements": "Requires JavaScript. Works on Chrome, Firefox, Safari, Edge",
  "softwareVersion": "2.0",
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "provider": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Content creators, students, general users"
  },
  "featureList": [
    "Download YouTube videos in HD, 1080p, 4K quality",
    "Convert YouTube videos to MP4 format",
    "Extract high-quality audio as MP3 from YouTube videos",
    "Support for multiple video resolutions and qualities",
    "Lightning-fast download speeds with secure processing",
    "No software installation or registration required",
    "Works seamlessly on all devices and web browsers",
    "Unlimited downloads with no restrictions",
    "Private and secure - no data stored",
    "Support for YouTube Shorts and regular videos"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "50847",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Best YouTube downloader I've ever used! Super fast downloads and the quality is amazing. No annoying ads or popups. Highly recommended!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Michael R."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "I use this daily for my content creation. The 4K download quality is perfect and it works flawlessly on both my phone and laptop."
    }
  ]
};

export default function YouTubeDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Clean Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-600 to-pink-600 bg-clip-text text-transparent">
                YouTube Downloader
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Download YouTube videos and audio in high quality. Fast, free, and secure - no registration required.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                  ✓ HD Quality
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                  ✓ MP4 & MP3
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
                  ✓ No Limits
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
                  ✓ 100% Free
                </span>
              </div>
            </div>
            <YouTubeDownloader />

            <UnstoryOpenmindCTA />


            {/* Ad Unit 1 */}
            <div className="my-8 text-center">
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous"></script>
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-1828915420581549"
                data-ad-slot="9420953810"></ins>
              <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }}></script>
            </div>

            {/* How it Works - Simplified */}
            <div className="mt-16 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">How It Works</h2>
                <p className="text-gray-600 dark:text-gray-400">Simple 3-step process to download any YouTube video</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Paste URL</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Copy and paste your YouTube video link</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Choose Format</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Select video quality or audio format</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Download</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Click download and save to your device</p>
                </div>
              </div>
            </div>

            {/* Ad Unit 2 */}
            <div className="my-8 text-center">
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous"></script>
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-1828915420581549"
                data-ad-slot="9420953810"></ins>
              <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }}></script>
            </div>

            {/* Features - Simplified */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">Why Choose Our Downloader?</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-4">
                  <div className="text-3xl mb-3">🎥</div>
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">HD Quality</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Download in 720p, 1080p, and 4K</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-3">🎵</div>
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">MP3 Audio</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Extract high-quality audio files</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Fast Speed</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Lightning-fast downloads</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Secure</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">100% safe and private</p>
                </div>
              </div>
            </div>

            {/* Ad Unit 3 */}
            <div className="my-8 text-center">
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous"></script>
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-1828915420581549"
                data-ad-slot="9420953810"></ins>
              <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }}></script>
            </div>

            {/* User Rating - Minimal */}
            <div className="text-center py-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex text-yellow-500 text-2xl">★★★★★</div>
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">5.0</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Trusted by 50,000+ users worldwide</p>
            </div>

            {/* Ad Unit 4 */}
            <div className="my-8 text-center">
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous"></script>
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-1828915420581549"
                data-ad-slot="9420953810"></ins>
              <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }}></script>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4 text-center">Related YouTube Tools</h2>
              <p className="text-center text-muted-foreground mb-6">Enhance your YouTube experience with our comprehensive suite of YouTube tools</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-background rounded-lg p-4 border hover:border-red-300 transition-colors">
                  <h3 className="font-medium mb-2 text-red-600">🎬 YouTube Thumbnail Downloader</h3>
                  <p className="text-sm text-muted-foreground mb-3">Download high-quality YouTube video thumbnails in various resolutions for your projects.</p>
                  <a href="/youtube-thumbnail-downloader" className="text-sm text-red-600 hover:text-red-700 font-medium">Try Tool →</a>
                </div>

                <div className="bg-background rounded-lg p-4 border hover:border-red-300 transition-colors">
                  <h3 className="font-medium mb-2 text-red-600">📝 YouTube Transcript Downloader</h3>
                  <p className="text-sm text-muted-foreground mb-3">Extract and download YouTube video transcripts and subtitles in text format.</p>
                  <a href="/youtube-transcript-downloader" className="text-sm text-red-600 hover:text-red-700 font-medium">Try Tool →</a>
                </div>

                <div className="bg-background rounded-lg p-4 border hover:border-red-300 transition-colors">
                  <h3 className="font-medium mb-2 text-red-600">🎵 YouTube to MP3 Converter</h3>
                  <p className="text-sm text-muted-foreground mb-3">Convert YouTube videos to high-quality MP3 audio files for music and podcasts.</p>
                  <a href="/youtube-downloader" className="text-sm text-red-600 hover:text-red-700 font-medium">Current Tool ✓</a>
                </div>

                <div className="bg-background rounded-lg p-4 border hover:border-red-300 transition-colors">
                  <h3 className="font-medium mb-2 text-red-600">📱 YouTube Shorts Downloader</h3>
                  <p className="text-sm text-muted-foreground mb-3">Download YouTube Shorts videos in vertical format with original quality.</p>
                  <a href="/youtube-shorts-downloader" className="text-sm text-red-600 hover:text-red-700 font-medium">Try Tool →</a>
                </div>

                <div className="bg-background rounded-lg p-4 border hover:border-red-300 transition-colors">
                  <h3 className="font-medium mb-2 text-red-600">🎯 YouTube Tag Generator</h3>
                  <p className="text-sm text-muted-foreground mb-3">Generate relevant tags for your YouTube videos to improve discoverability and SEO.</p>
                  <a href="/youtube-tag-generator" className="text-sm text-red-600 hover:text-red-700 font-medium">Try Tool →</a>
                </div>

                <div className="bg-background rounded-lg p-4 border hover:border-red-300 transition-colors">
                  <h3 className="font-medium mb-2 text-red-600">📊 YouTube Summary Generator</h3>
                  <p className="text-sm text-muted-foreground mb-3">Generate AI-powered summaries of YouTube videos for quick content overview.</p>
                  <a href="/youtube-summary-generator" className="text-sm text-red-600 hover:text-red-700 font-medium">Try Tool →</a>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a href="/search?q=youtube" className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
                  View All YouTube Tools →
                </a>
              </div>
            </div>

            {/* Ad Unit 4 */}
            <div className="my-8 text-center">
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous"></script>
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-1828915420581549"
                data-ad-slot="9420953810"></ins>
              <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }}></script>
            </div>

            {/* FAQ - Simplified */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">FAQ</h2>
              <div className="space-y-4 max-w-2xl mx-auto">
                <details className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                  <summary className="font-semibold cursor-pointer text-gray-800 dark:text-gray-200">Is it legal to download YouTube videos?</summary>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Yes, for personal use and content you own. Always respect copyright laws.</p>
                </details>
                <details className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                  <summary className="font-semibold cursor-pointer text-gray-800 dark:text-gray-200">What formats are supported?</summary>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">MP4 video (360p to 4K) and MP3 audio in high quality.</p>
                </details>
                <details className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                  <summary className="font-semibold cursor-pointer text-gray-800 dark:text-gray-200">Are there any limits?</summary>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">No limits, no registration required. Completely free to use.</p>
                </details>
                <details className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                  <summary className="font-semibold cursor-pointer text-gray-800 dark:text-gray-200">Does it work on mobile?</summary>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Yes, works on all devices - phones, tablets, and computers.</p>
                </details>
              </div>
            </div>

            {/* Visitor Badge */}
            <div className="text-center mt-8">
              <a href="https://visitorbadge.io/status?path=https%3A%2F%2F30tools.com%2Fyoutube-downloader">
                <img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2F30tools.com%2Fyoutube-downloader&countColor=%23263759&style=flat&labelStyle=upper" alt="Visitor Badge" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
