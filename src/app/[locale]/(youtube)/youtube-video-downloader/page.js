import YouTubeDownloader from "@/components/tools/youtube/YouTubeDownloader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "YouTube Video Downloader (2026) - Free HD & 4K | 30Tools",
  description: "Download YouTube videos in HD, 1080p, 4K & 8K (Updated 2026). Save YouTube videos to MP4/MP3. fast, free & strictly no watermarks.",
  keywords: [
    "youtube video downloader 2026",
    "download youtube video hd",
    "youtube to mp4 4k",
    "youtube video saver free",
    "download youtube video 1080p",
    "youtube video downloader online 2026",
    "save youtube video to gallery",
    "updated 2026",
    "youtube 4k downloader"
  ].join(", "),
  openGraph: {
    title: "YouTube Video Downloader (2026) - Free HD & 4K Tool",
    description: "⚡ Download YouTube videos in HD, 4K & 8K quality! Free & unlimited tool (Updated 2026).",
    url: "https://30tools.com/youtube-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/youtube-downloader.jpg", // Kept same image as it's relevant
        width: 1200,
        height: 630,
        alt: "YouTube Video Downloader 2026"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Video Downloader (2026) - Free HD Tool",
    description: "⚡ Download YouTube videos in HD/4K. Updated 2026!",
    images: ["/og-images/youtube-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/youtube-video-downloader",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "YouTube Video Downloader",
  description:
    "Free online tool to download YouTube videos and convert them to MP4, MP3 formats in high quality",
  url: "https://30tools.com/youtube-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download YouTube videos in HD quality",
    "Convert YouTube to MP4 format",
    "Extract audio as MP3 from YouTube videos",
    "Support for multiple video qualities",
    "Fast and secure downloading",
    "No software installation required",
    "Works on all devices and browsers",
  ],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-background">
              YouTube Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download YouTube videos and audio in high definition quality for
              free. Our advanced YouTube downloader supports HD, Full HD, and 4K
              video downloads with lightning-fast speed. Convert YouTube videos
              to MP4 or extract high-quality MP3 audio files instantly without
              any software installation. Perfect for offline viewing, content
              creation, and educational purposes.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ HD Quality Downloads
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ MP4 & MP3 Support
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ No Registration Required
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Unlimited Downloads
              </span>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <a
              href="https://apify.com/express_kingfisher/youtube-video-audio-downloader"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-muted border border-border/50 text-sm transition-colors group"
            >
              <span className="text-muted-foreground">Looking for a Developer API?</span>
              <span className="font-medium text-primary group-hover:underline decoration-primary/50 underline-offset-4">Check out Universal YouTube Downloader on Apify →</span>
            </a>
          </div>

          <YouTubeDownloader />

          {/* Ad Unit 1 */}
          <div className="my-8 text-center">
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
              crossOrigin="anonymous"
            ></script>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-format="autorelaxed"
              data-ad-client="ca-pub-1828915420581549"
              data-ad-slot="9420953810"
            ></ins>
            <script
              dangerouslySetInnerHTML={{
                __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
              }}
            ></script>
          </div>

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                How to Download YouTube Videos Online Free
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-destructive/100/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-destructive font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy YouTube URL</h3>
                  <p className="text-sm text-muted-foreground">
                    Copy the YouTube video link you want to download from your
                    browser address bar
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-destructive/100/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-destructive font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Select Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste the URL and choose your preferred video quality or
                    audio format
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-destructive/100/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-destructive font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Instantly</h3>
                  <p className="text-sm text-muted-foreground">
                    Click download and save your YouTube video or audio file to
                    your device
                  </p>
                </div>
              </div>
            </div>

            {/* Ad Unit 2 */}
            <div className="my-8 text-center">
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
                crossOrigin="anonymous"
              ></script>
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-1828915420581549"
                data-ad-slot="9420953810"
              ></ins>
              <script
                dangerouslySetInnerHTML={{
                  __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
                }}
              ></script>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose Our YouTube Video Downloader?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-destructive">
                    🎥 High Quality Video Downloads
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download YouTube videos in original quality including HD
                    720p, Full HD 1080p, and even 4K resolution when available.
                    Our YouTube downloader preserves the original video quality
                    for the best viewing experience.
                  </p>

                  <h3 className="font-medium mb-2 text-destructive">
                    🎵 Convert YouTube to MP3 Audio
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Extract high-quality audio from YouTube videos and save as
                    MP3 files. Perfect for downloading music, podcasts,
                    lectures, and audiobooks from YouTube with crystal-clear
                    sound quality up to 320kbps.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-destructive">
                    ⚡ Lightning Fast Download Speed
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our optimized servers ensure super-fast YouTube video
                    downloads. No waiting times, no slow downloads - get your
                    YouTube videos downloaded in seconds, not minutes.
                  </p>

                  <h3 className="font-medium mb-2 text-destructive">
                    🔒 100% Safe and Secure
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your privacy is our priority. All YouTube downloads are
                    processed securely without storing any personal data. No
                    malware, no viruses, just clean and safe YouTube video
                    downloads.
                  </p>
                </div>
              </div>
            </div>

            {/* Ad Unit 3 */}
            <div className="my-8 text-center">
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
                crossOrigin="anonymous"
              ></script>
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-1828915420581549"
                data-ad-slot="9420953810"
              ></ins>
              <script
                dangerouslySetInnerHTML={{
                  __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
                }}
              ></script>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Troubleshooting Common Issues
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-destructive">⚠️</span> Download not starting?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check your internet connection and ensure the YouTube URL is correct. If the video is private or age-restricted, it may not be downloadable.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-destructive">🔇</span> No audio in video?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Some high-quality video streams (1080p+) do not have audio. Try downloading the 720p version or download the audio separately as MP3.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it legal to download YouTube videos?</AccordionTrigger>
                  <AccordionContent>
                    You can download YouTube videos for personal use, educational purposes, or content you own. Always respect copyright laws and YouTube's terms of service when downloading videos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What video formats are supported?</AccordionTrigger>
                  <AccordionContent>
                    Our YouTube downloader supports MP4 (video) and MP3 (audio) formats. MP4 files work on all devices and media players, while MP3 is perfect for audio-only content.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I download YouTube playlists?</AccordionTrigger>
                  <AccordionContent>
                    Currently, you can download individual YouTube videos. For playlist downloads, you'll need to copy and paste each video URL separately.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is there a download limit?</AccordionTrigger>
                  <AccordionContent>
                    No, there are no download limits! You can download as many YouTube videos as you want, completely free of charge.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Follow & Feedback</h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="https://x.com/sh20raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 border rounded-lg hover:border-border hover:shadow-md transition-all group text-center"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🐦 Follow @sh20raj
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Follow us on X (Twitter) for updates, tips, and new tool
                    announcements.
                  </p>
                </a>
                <a
                  href="https://x.com/sh20raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 border rounded-lg hover:border-border hover:shadow-md transition-all group text-center"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    💬 Submit Feedback
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Share your thoughts, report issues, or suggest new features.
                  </p>
                </a>
              </div>
            </div>

            {/* Ad Unit 4 */}
            <div className="my-8 text-center">
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
                crossOrigin="anonymous"
              ></script>
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-1828915420581549"
                data-ad-slot="9420953810"
              ></ins>
              <script
                dangerouslySetInnerHTML={{
                  __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
                }}
              ></script>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                More Developer & Utility Tools
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Explore our collection of professional tools designed to boost
                your productivity and streamline your workflow.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="https://coders.30tools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🚀 Coders - Developer Tools
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Essential developer tools including JSON formatter, code
                    beautifier, API tester, and complexity analyzer. Built for
                    developers, by developers.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Visit Coders →
                  </span>
                </a>

                <a
                  href="https://online-tools.30tools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🔧 Online Tools
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive online utilities for hashing (MD5, SHA256),
                    encoding (Base64, Base32), encryption (AES, RSA), and format
                    conversion.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Visit Online Tools →
                  </span>
                </a>

                <a
                  href="https://devtools.30tools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    ⚙️ DevTools
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Professional development tools featuring hash generators,
                    cryptography utilities, JSON/XML formatters, and case
                    converters.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Visit DevTools →
                  </span>
                </a>

                <a
                  href="https://it-tools.30tools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🛠️ IT-Tools
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Handy IT tools collection with token generators, UUID/ULID
                    generators, QR code creator, JWT parser, and 80+ more
                    utilities.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Visit IT-Tools →
                  </span>
                </a>

                <a
                  href="https://terabox.beer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    📦 TeraBox Downloader
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Free TeraBox video downloader with inline player. Download
                    and play TeraBox videos directly in your browser with our
                    Telegram bot.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Visit TeraBox.beer →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
