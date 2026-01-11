import YouTubeDownloader from '@/components/tools/youtube/YouTubeDownloader';
import ScrollToTopButton from '@/components/tools/youtube/ScrollToTopButton';

export const metadata = {
  title: "YouTube Video Downloader - Download YouTube Videos Free Online HD MP4",
  description: "Download YouTube videos in HD, 1080p, 4K quality for free. Fast online YouTube to MP4 & MP3 converter. No software needed. Works on mobile & PC.",
  keywords: [
    "youtube downloader 2026",
    "download youtube video 1080p",
    "youtube to mp4 converter 4k",
    "youtube video downloader online free safe",
    "free youtube downloader no software",
    "youtube video saver hd",
    "download youtube videos 8k",
    "save youtube video to gallery",
    "video downloader for youtube shorts",
    "youtube clip downloader",
    "youtube mp4 converter fast",
    "youtube to mp3 high quality 320kbps",
    "download youtube audio track",
    "youtube downloader iphone shortcut",
    "youtube downloader android apk",
    "youtube downloader mac safari",
    "youtube downloader pc chrome"
  ].join(", "),
  openGraph: {
    title: "YouTube Video Downloader | Free & Fast HD Download",
    description: "Download YouTube videos and shorts in 1080p, 4K, and 8K. Convert to MP4 or MP3 instantly. No registration, no ads, 100% free.",
    url: "https://30tools.com/youtube-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/youtube-downloader.jpg", // Ensure this image exists or is updated
        width: 1200,
        height: 630,
        alt: "Free YouTube Video Downloader"
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best YouTube Video Downloader 2024",
    description: "Save YouTube videos in seconds. HD, 4K support. Mp3 conversion. Try it now for free!",
    images: ["/og-images/youtube-downloader.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/youtube-downloader"
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Free YouTube Video Downloader",
      "alternateName": "YouTube Downloader",
      "url": "https://30tools.com/youtube-downloader",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Download YouTube videos in 720p, 1080p, 4K",
        "Convert YouTube to MP3",
        "No registration required",
        "Unlimited downloads"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I download YouTube videos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1. Copy the URL of the YouTube video.\n2. Paste it into the search box above.\n3. Click 'Start', choose your format (MP4/MP3) and quality, then click Download."
          }
        },
        {
          "@type": "Question",
          "name": "Is this YouTube Downloader free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our tool is 100% free to use. You can download as many videos as you like without any cost or limitations."
          }
        },
        {
          "@type": "Question",
          "name": "Can I download YouTube Shorts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our downloader fully supports YouTube Shorts. Just paste the Shorts link and download it like any other video."
          }
        },
        {
          "@type": "Question",
          "name": "Is it safe to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, it is completely safe. We do not require any software installation, registration, or personal data. All downloads are processed directly in your browser."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Download a YouTube Video",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Copy URL",
          "text": "Go to YouTube, open the video you want to save, and copy its link from the address bar."
        },
        {
          "@type": "HowToStep",
          "name": "Paste Link",
          "text": "Paste the copied link into the input field on the 30tools YouTube Downloader page."
        },
        {
          "@type": "HowToStep",
          "name": "Download",
          "text": "Click the Start button, select your desired quality (e.g., 1080p) and format, and the download will begin instantly."
        }
      ]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
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



          <div className="mt-16 space-y-16">

            {/* Features Grid */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Premium Features, Free for Everyone</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">⚡</div>
                  <h3 className="font-semibold text-lg mb-2">Ultra Fast Speed</h3>
                  <p className="text-sm text-muted-foreground">Download videos in seconds with our high-speed engines. No bandwidth limits or throttling.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">🎬</div>
                  <h3 className="font-semibold text-lg mb-2">4K & 8K Support</h3>
                  <p className="text-sm text-muted-foreground">Get the best quality possible. We support HD, FHD, 2K, 4K, and even 8K video resolutions.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">🎵</div>
                  <h3 className="font-semibold text-lg mb-2">Audio Extraction</h3>
                  <p className="text-sm text-muted-foreground">Convert video to MP3 easily. Extract high-fidelity audio tracks for music or podcasts.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">🔒</div>
                  <h3 className="font-semibold text-lg mb-2">100% Secure</h3>
                  <p className="text-sm text-muted-foreground">No malware, no trackers, no registration. Your privacy is our top priority.</p>
                </div>
              </div>
            </div>

            {/* Supported Platforms */}
            <div className="bg-muted/30 rounded-2xl p-8 border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Works on All Your Devices</h2>
                  <p className="text-muted-foreground mb-6">Whether you are using a smartphone, tablet, or computer, our tool adapts perfectly. Download YouTube videos on:</p>
                  <ul className="grid grid-cols-2 gap-3 text-sm">
                    <li className="flex items-center gap-2">✓ Windows PC & Laptop</li>
                    <li className="flex items-center gap-2">✓ macOS (Macbook, iMac)</li>
                    <li className="flex items-center gap-2">✓ iOS (iPhone, iPad)</li>
                    <li className="flex items-center gap-2">✓ Android Smartphones</li>
                    <li className="flex items-center gap-2">✓ Linux Distributions</li>
                    <li className="flex items-center gap-2">✓ Chrome, Safari, Firefox</li>
                  </ul>
                </div>
                <div className="relative h-48 bg-background rounded-xl border shadow-sm flex items-center justify-center overflow-hidden">
                  <span className="text-6xl opacity-20 font-bold select-none">Any Device</span>
                </div>
              </div>
            </div>

            {/* How to Guide with Schema-friendly structure */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">How to Download YouTube Videos</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                  <div className="relative bg-card p-8 rounded-lg border h-full text-center">
                    <span className="text-5xl font-black text-muted-foreground/10 absolute top-4 right-4">1</span>
                    <h3 className="text-xl font-bold mb-3">Copy Link</h3>
                    <p className="text-muted-foreground">Open the YouTube video you want to save and copy its URL from the browser address bar or share button.</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                  <div className="relative bg-card p-8 rounded-lg border h-full text-center">
                    <span className="text-5xl font-black text-muted-foreground/10 absolute top-4 right-4">2</span>
                    <h3 className="text-xl font-bold mb-3">Paste & Process</h3>
                    <p className="text-muted-foreground">Paste the link into the search box above. Our tool will automatically process the video and fetch formats.</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-green-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                  <div className="relative bg-card p-8 rounded-lg border h-full text-center">
                    <span className="text-5xl font-black text-muted-foreground/10 absolute top-4 right-4">3</span>
                    <h3 className="text-xl font-bold mb-3">Download</h3>
                    <p className="text-muted-foreground">Select your preferred quality (MP4 1080p, 4K, or MP3 audio) and click the download button.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded FAQ */}
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg mb-2">Is this tool free forever?</h3>
                  <p className="text-muted-foreground">Yes! 30tools YouTube Downloader is completely free. We do not charge for any downloads, quality options, or file conversions. You can use it as much as you want.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg mb-2">Can I download YouTube Shorts?</h3>
                  <p className="text-muted-foreground">Yes, our tool fully supports YouTube Shorts downloading. Simply paste the link to the Short, and we will extract the video in high quality for you.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg mb-2">Is it safe to download videos here?</h3>
                  <p className="text-muted-foreground">Absolutely. We do not require you to install any software or extensions, protecting you from malware. We also do not store any logs of what you download.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg mb-2">Where do the videos go after downloading?</h3>
                  <p className="text-muted-foreground">Videos are typically saved to your device's default "Downloads" folder. On mobile, they might appear in your Gallery or Files app depending on your settings.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg mb-2">How to download 4K videos?</h3>
                  <p className="text-muted-foreground">If the original video was uploaded in 4K or 8K, our tool will provide those high-resolution options. Just look for the "2160p (4K)"  or "4320p (8K)" label in the download results.</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Ready to get started?</p>
              <ScrollToTopButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}