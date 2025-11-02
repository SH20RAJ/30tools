import TeraboxVideoPlayer from '@/components/tools/video/TeraboxVideoPlayer';
import VideoToolsNavbar from '@/components/navigation/VideoToolsNavbar';

export const metadata = {
  title: 'Terabox Video Player - Play & Download Terabox Videos Online Free',
  description: 'Free online Terabox video player. Stream and download videos from Terabox share links instantly. No login required, no ads. Play Terabox videos directly in your browser with HLS streaming.',
  keywords: 'terabox video player, terabox downloader, play terabox video online, terabox video stream, download terabox video, terabox share link player, free terabox player, watch terabox videos',
  openGraph: {
    title: 'Terabox Video Player - Stream & Download Terabox Videos Free',
    description: 'Play and download videos from Terabox share links instantly. Free online player with HLS streaming. No login or installation required.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terabox Video Player - Free Online Streaming',
    description: 'Stream and download Terabox videos instantly. No login required.',
  },
};

export default function TeraboxVideoPlayerPage() {
  return (
    <>
      <VideoToolsNavbar />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Terabox Video Player
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stream and download videos from Terabox share links instantly. No login required, no ads, completely free.
            </p>
          </div>

          {/* Tool Component */}
          <TeraboxVideoPlayer />

          {/* Features Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Streaming</h3>
              <p className="text-sm text-muted-foreground">
                Play Terabox videos directly in your browser with HLS adaptive streaming. No waiting, no buffering.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⬇️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct Download</h3>
              <p className="text-sm text-muted-foreground">
                Download videos in MP4 format with a single click. Save to your device for offline viewing.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">No Login Required</h3>
              <p className="text-sm text-muted-foreground">
                Access and download Terabox videos without creating an account. Your privacy is protected.
              </p>
            </div>
          </div>

          {/* How to Use Section */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">How to Use Terabox Video Player</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Copy Terabox Link</h3>
                <p className="text-sm text-muted-foreground">
                  Copy the share link from Terabox (teraboxshare.com, terabox.com, or 1024terabox.com)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Paste & Load</h3>
                <p className="text-sm text-muted-foreground">
                  Paste the link into the input field and click "Load Video" to process
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Play or Download</h3>
                <p className="text-sm text-muted-foreground">
                  Watch the video directly in your browser or download it as MP4 file
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Is this Terabox video player free?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, this tool is completely free to use. There are no hidden fees, subscriptions, or premium features. Stream and download unlimited Terabox videos at no cost.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Do I need to login to Terabox?</h3>
                <p className="text-sm text-muted-foreground">
                  No login required! Simply paste the Terabox share link and start playing or downloading. We don't access your Terabox account or store any personal information.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-2">What video quality will I get?</h3>
                <p className="text-sm text-muted-foreground">
                  The video quality depends on the original upload. Our player uses HLS adaptive streaming, which automatically adjusts quality based on your internet speed for smooth playback.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Can I download the video?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! After loading the video, you can download it in MP4 format with a single click. The downloaded file can be played on any device that supports MP4 videos.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Which Terabox URLs are supported?</h3>
                <p className="text-sm text-muted-foreground">
                  We support all Terabox share link formats including teraboxshare.com, terabox.com, and 1024terabox.com. Simply paste any Terabox share URL.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Is it safe to use?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We don't store any videos or personal data. All processing happens in your browser, and we don't require access to your Terabox account.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="mt-16 prose dark:prose-invert max-w-4xl mx-auto">
            <h2>About Terabox Video Player</h2>
            <p>
              Terabox Video Player is a free online tool that allows you to stream and download videos from Terabox share links without logging in. 
              Whether you need to watch a video immediately or save it for offline viewing, our player makes it simple and fast.
            </p>

            <h3>Key Features</h3>
            <ul>
              <li><strong>No Login Required:</strong> Access Terabox videos without creating an account or signing in</li>
              <li><strong>HLS Streaming:</strong> Adaptive quality streaming for smooth playback on any connection</li>
              <li><strong>Direct Download:</strong> Save videos in MP4 format for offline viewing</li>
              <li><strong>Browser-Based:</strong> Works entirely in your browser - no software installation needed</li>
              <li><strong>Free & Unlimited:</strong> Stream and download as many videos as you want, completely free</li>
              <li><strong>Privacy Protected:</strong> We don't store videos or access your personal data</li>
            </ul>

            <h3>Why Use Our Terabox Player?</h3>
            <p>
              Terabox is a popular cloud storage service, but accessing shared videos can sometimes be challenging without the app or login. 
              Our player solves this problem by providing instant access to Terabox videos through a simple web interface. 
              No downloads, no installations, no account creation - just paste the link and play.
            </p>

            <h3>How It Works</h3>
            <p>
              Our Terabox video player uses advanced streaming technology (HLS) to deliver smooth video playback. 
              When you paste a Terabox share link, we extract the video stream and make it playable directly in your browser. 
              The adaptive streaming ensures optimal quality based on your internet speed, preventing buffering and providing the best viewing experience.
            </p>

            <h3>Supported Platforms</h3>
            <p>
              Works on all modern browsers including Chrome, Firefox, Safari, and Edge. Compatible with desktop computers, 
              laptops, tablets, and smartphones. No matter what device you're using, you can stream and download Terabox videos effortlessly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
