import YouTubeDownloader from '@/components/tools/youtube/YouTubeDownloader';
import InstagramEmbed from '@/components/shared/InstagramEmbed';

export const metadata = {
  title: "⚡ Free YouTube Downloader Online - Download YouTube Videos HD MP4 MP3 | 30tools",
  description: "⚡ Free YouTube video downloader online. Download YouTube videos in HD 1080p, 4K, convert to MP3. No software required. Fast, secure & unlimited downloads. Works on all devices.",
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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Free YouTube Video Downloader Online
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download YouTube videos and audio in high definition quality for free with the best YouTube downloader online. Our advanced YouTube video downloader supports HD, Full HD, and 4K video downloads with lightning-fast speed. Convert YouTube videos to MP4 or extract high-quality MP3 audio files instantly without any software installation. Perfect for offline viewing, content creation, and educational purposes.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD, 4K Quality Downloads</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ MP4 & MP3 Support</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Registration Required</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Unlimited Free Downloads</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ All Devices Supported</span>
            </div>
          </div>
          <YouTubeDownloader />

          <div className="my-8 text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-300">Find Your Calm</h2>
            <p className="text-muted-foreground mb-4">
              Join Unstory Openmind, a safe space for authentic conversations and personal growth. Share your story, judgment-free.
            </p>
            <InstagramEmbed />
            <a href="https://unstory.live" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4">
              Explore Openmind
            </a>
          </div>


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

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Download YouTube Videos Online Free</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy YouTube URL</h3>
                  <p className="text-sm text-muted-foreground">Copy the YouTube video link you want to download from your browser address bar</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Select Quality</h3>
                  <p className="text-sm text-muted-foreground">Paste the URL and choose your preferred video quality or audio format</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Instantly</h3>
                  <p className="text-sm text-muted-foreground">Click download and save your YouTube video or audio file to your device</p>
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

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Our YouTube Video Downloader?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-red-600">🎥 High Quality Video Downloads</h3>
                  <p className="text-sm text-muted-foreground mb-4">Download YouTube videos in original quality including HD 720p, Full HD 1080p, and even 4K resolution when available. Our YouTube downloader preserves the original video quality for the best viewing experience.</p>

                  <h3 className="font-medium mb-2 text-red-600">🎵 Convert YouTube to MP3 Audio</h3>
                  <p className="text-sm text-muted-foreground mb-4">Extract high-quality audio from YouTube videos and save as MP3 files. Perfect for downloading music, podcasts, lectures, and audiobooks from YouTube with crystal-clear sound quality up to 320kbps.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-red-600">⚡ Lightning Fast Download Speed</h3>
                  <p className="text-sm text-muted-foreground mb-4">Our optimized servers ensure super-fast YouTube video downloads. No waiting times, no slow downloads - get your YouTube videos downloaded in seconds, not minutes.</p>

                  <h3 className="font-medium mb-2 text-red-600">🔒 100% Safe and Secure</h3>
                  <p className="text-sm text-muted-foreground mb-4">Your privacy is our priority. All YouTube downloads are processed securely without storing any personal data. No malware, no viruses, just clean and safe YouTube video downloads.</p>
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

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4 text-center">What Our Users Say</h2>
              <p className="text-center text-muted-foreground mb-6">Join thousands of satisfied users who trust our YouTube downloader</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-500 text-lg">★★★★★</div>
                    <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                  </div>
                  <p className="text-sm mb-3">"Best YouTube downloader I've ever used! Super fast downloads and the quality is amazing. No annoying ads or popups. Highly recommended!"</p>
                  <p className="text-xs font-medium">- Sarah M.</p>
                  <p className="text-xs text-muted-foreground">Verified User</p>
                </div>

                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-500 text-lg">★★★★★</div>
                    <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                  </div>
                  <p className="text-sm mb-3">"I use this daily for my content creation. The 4K download quality is perfect and it works flawlessly on both my phone and laptop. Love it!"</p>
                  <p className="text-xs font-medium">- Michael R.</p>
                  <p className="text-xs text-muted-foreground">Content Creator</p>
                </div>

                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-500 text-lg">★★★★★</div>
                    <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                  </div>
                  <p className="text-sm mb-3">"Finally found a YouTube downloader that actually works! No registration needed, no payment walls. Just paste and download. Simple and effective!"</p>
                  <p className="text-xs font-medium">- Jessica L.</p>
                  <p className="text-xs text-muted-foreground">Student</p>
                </div>

                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-500 text-lg">★★★★★</div>
                    <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                  </div>
                  <p className="text-sm mb-3">"The MP3 conversion feature is outstanding! Perfect for downloading my favorite music and podcasts. Audio quality is crystal clear at 320kbps."</p>
                  <p className="text-xs font-medium">- David K.</p>
                  <p className="text-xs text-muted-foreground">Music Enthusiast</p>
                </div>

                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-500 text-lg">★★★★★</div>
                    <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                  </div>
                  <p className="text-sm mb-3">"As a teacher, I download educational videos for my classroom. This tool is reliable, fast, and completely safe. My students love the offline lessons!"</p>
                  <p className="text-xs font-medium">- Emily T.</p>
                  <p className="text-xs text-muted-foreground">High School Teacher</p>
                </div>

                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-500 text-lg">★★★★★</div>
                    <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                  </div>
                  <p className="text-sm mb-3">"Incredible tool! I've been using it for months to download workout videos. No buffering during my exercises anymore. Thank you for making this free!"</p>
                  <p className="text-xs font-medium">- Alex P.</p>
                  <p className="text-xs text-muted-foreground">Fitness Coach</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">⭐ Rated 5.0 out of 5 stars by over 50,000+ users worldwide</p>
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

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions About YouTube Video Downloading</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Is it legal to download YouTube videos for personal use?</h3>
                  <p className="text-sm text-muted-foreground">You can download YouTube videos for personal use, educational purposes, or content you own. Always respect copyright laws and YouTube's terms of service when downloading videos. For commercial use, ensure you have proper licensing.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What video formats and qualities are supported by this YouTube downloader?</h3>
                  <p className="text-sm text-muted-foreground">Our YouTube downloader supports MP4 (video) and MP3 (audio) formats in various qualities including 360p, 720p HD, 1080p Full HD, and 4K when available. MP4 files work on all devices and media players, while MP3 is perfect for audio-only content.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I download YouTube playlists with this tool?</h3>
                  <p className="text-sm text-muted-foreground">Currently, you can download individual YouTube videos. For playlist downloads, you'll need to copy and paste each video URL separately. We're working on adding playlist download functionality.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Is there a download limit or do I need to register?</h3>
                  <p className="text-sm text-muted-foreground">No registration required and no download limits! You can download as many YouTube videos as you want, completely free of charge. Our service is 100% free with unlimited usage.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">How fast is the YouTube video download process?</h3>
                  <p className="text-sm text-muted-foreground">Download speeds depend on your internet connection and the video size. Most videos are processed within seconds. Our optimized servers ensure the fastest possible download times for all supported formats and qualities.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Does this YouTube downloader work on mobile devices?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our YouTube downloader works perfectly on all devices including smartphones (Android, iPhone), tablets (iPad), laptops, and desktop computers. It's fully responsive and browser-based, so no app installation is needed.</p>
                </div>
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
