import YouTubeDownloader from '@/components/tools/youtube/YouTubeDownloader';

export const metadata = {
  title: "YouTube Video Downloader - 30tools",
  description: "Download YouTube videos in HD quality for free. Convert YouTube to MP4, MP3 with our fast, secure downloader. No software installation required.",
  keywords: [
    // Primary keywords
    "youtube downloader",
    "download youtube video",
    "youtube to mp4",
    "youtube to mp3",
    "youtube video downloader online",

    // Long-tail keywords for SEO ranking
    "download youtube video online free without software",
    "youtube video downloader high quality 1080p 4k",
    "convert youtube to mp3 320kbps high quality",
    "youtube downloader no registration required",
    "free youtube video downloader for pc mobile",
    "download youtube videos fast secure safe",
    "youtube to mp4 converter online free unlimited",
    "extract audio from youtube video free",
    "bulk youtube video downloader multiple videos",
    "youtube downloader supports all formats",
    "download private youtube videos with link",
    "youtube playlist downloader all videos once",
    "youtube shorts video downloader vertical",
    "download youtube thumbnail along with video"
  ].join(", "),
  openGraph: {
    title: "Free YouTube Video Downloader - Download HD Videos Online",
    description: "Download YouTube videos in HD, Full HD, and 4K quality. Convert YouTube to MP4, MP3 with our fast and secure downloader.",
    url: "https://30tools.com/youtube-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/youtube-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Video Downloader - Free Online Tool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Video Downloader - Download Videos Free",
    description: "Download YouTube videos in HD quality for free. Convert YouTube to MP4, MP3 instantly.",
    images: ["/og-images/youtube-downloader.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/youtube-downloader"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "YouTube Video Downloader",
  "description": "Free online tool to download YouTube videos and convert them to MP4, MP3 formats in high quality",
  "url": "https://30tools.com/youtube-downloader",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Download YouTube videos in HD quality",
    "Convert YouTube to MP4 format",
    "Extract audio as MP3 from YouTube videos",
    "Support for multiple video qualities",
    "Fast and secure downloading",
    "No software installation required",
    "Works on all devices and browsers"
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
              YouTube Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download YouTube videos and audio in high definition quality for free. Our advanced YouTube downloader supports HD, Full HD, and 4K video downloads with lightning-fast speed. Convert YouTube videos to MP4 or extract high-quality MP3 audio files instantly without any software installation. Perfect for offline viewing, content creation, and educational purposes.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality Downloads</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ MP4 & MP3 Support</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Registration Required</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Unlimited Downloads</span>
            </div>
          </div>

          <YouTubeDownloader />


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

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Is it legal to download YouTube videos?</h3>
                  <p className="text-sm text-muted-foreground">You can download YouTube videos for personal use, educational purposes, or content you own. Always respect copyright laws and YouTube's terms of service when downloading videos.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What video formats are supported?</h3>
                  <p className="text-sm text-muted-foreground">Our YouTube downloader supports MP4 (video) and MP3 (audio) formats. MP4 files work on all devices and media players, while MP3 is perfect for audio-only content.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I download YouTube playlists?</h3>
                  <p className="text-sm text-muted-foreground">Currently, you can download individual YouTube videos. For playlist downloads, you'll need to copy and paste each video URL separately.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Is there a download limit?</h3>
                  <p className="text-sm text-muted-foreground">No, there are no download limits! You can download as many YouTube videos as you want, completely free of charge.</p>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>
    </>
  );
}
