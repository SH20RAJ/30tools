import TikTokDownloader from "@/components/tools/downloaders/TikTokDownloader";
import ToolChain from "@/components/seo/ToolChain";

export const metadata = {
  title: "TikTok HD Downloader - Download TikTok Video Free (2026) | 30Tools",
  description: "Download TikTok videos without watermark in HD quality instantly. Fast and free tiktok video saver (Updated 2026). High quality MP4 downloads.",
  keywords: [
    "tiktok hd downloader 2026", "tiktok video downloader no watermark", "save tiktok videos free",
    "download tiktok mp4 hd", "tiktok saver online", "ssstiktok alternative", "snaptik free"
  ].join(", "),
  openGraph: {
    title: "TikTok Video Downloader - Free Online Tool",
    description: "⚡ Download TikTok videos without watermark!",
    url: "https://30tools.com/tiktok-video-downloader-2",
    siteName: "30tools",
    type: "website",
  },
  alternates: { canonical: "https://30tools.com/tiktok-video-downloader-2" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function TikTokVideoDownloader2Page() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li>/</li>
              <li><a href="/all-downloaders" className="hover:text-primary">Downloaders</a></li>
              <li>/</li>
              <li className="text-foreground font-medium">TikTok Video Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">TikTok Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download TikTok videos without watermark. Save high-quality TikTok videos to your phone or computer instantly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🚫 No Watermark</span><span>📺 HD Quality</span><span>⚡ Fast Speed</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <TikTokDownloader />
          </div>

          <AdUnit />

          <ToolChain
            suggestions={[
              { id: 'tiktok-audio', title: 'TikTok Audio', desc: 'Extract MP3 from TikTok', href: '/tiktok-audio-downloader' },
              { id: 'video-trimmer', title: 'Video Trimmer', desc: 'Cut/Trim this video', href: '/video-trimmer' },
              { id: 'insta-reels', title: 'Instagram Reels', desc: 'Download from Instagram', href: '/instagram-reel-downloader' },
              { id: 'snapchat', title: 'Snapchat Saver', desc: 'Download Stories/Snaps', href: '/snapchat-video-downloader' }
            ]}
          />
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
