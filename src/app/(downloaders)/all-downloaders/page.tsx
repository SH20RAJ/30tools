import Link from 'next/link';
import FAQSchema from '@/components/shared/FAQSchema';
import BreadcrumbSchema from '@/components/shared/BreadcrumbSchema';

export const metadata = {
  title: "Free Video Downloader - Download Videos from 50+ Sites | 30tools",
  description: "The best free online video downloader supporting YouTube, TikTok, Instagram, Facebook, Twitter, Reddit, Pinterest, and 50+ more platforms. Save videos as HD MP4 without watermarks. No login required.",
  keywords: [
    "video downloader", "free video downloader", "online video downloader",
    "download videos from any website", "youtube downloader", "tiktok downloader",
    "instagram video downloader", "facebook video downloader", "twitter video downloader",
    "reddit video downloader", "best video downloader 2026", "all in one video downloader",
    "universal video downloader free", "save video as mp4"
  ].join(", "),
  openGraph: {
    title: "Free Video Downloader - 50+ Platforms Supported | 30tools",
    description: "⚡ Download videos from YouTube, TikTok, Instagram, Facebook, Twitter, Reddit & 50+ more. HD, no watermarks, 100% free.",
    url: "https://30tools.com/all-downloaders",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "30tools Video Downloader Suite" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Video Downloader - 50+ Platforms | 30tools",
    description: "⚡ Download from YouTube, TikTok, Instagram & 50+ sites. Free, HD, no watermarks.",
    images: ["/og-images/universal-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/all-downloaders" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const DOWNLOADERS = {
  "Social Media": [
    { name: "YouTube Video Downloader", slug: "online-video-downloader", emoji: "▶️" },
    { name: "YouTube Thumbnail Downloader", slug: "youtube-thumbnail-downloader", emoji: "🖼️" },
    { name: "TikTok Video Downloader", slug: "online-video-downloader", emoji: "🎵" },
    { name: "Instagram Video Downloader", slug: "instagram-videos-downloader", emoji: "📸" },
    { name: "Instagram Reel Downloader", slug: "instagram-reel-downloader", emoji: "🎬" },
    { name: "Instagram Story Downloader", slug: "instagram-story-downloader", emoji: "📖" },
    { name: "Instagram Image Downloader", slug: "instagram-image-downloader", emoji: "🖼️" },
    { name: "Instagram Downloader", slug: "instagram-downloader", emoji: "📱" },
    { name: "Facebook Video Downloader", slug: "facebook-video-downloader", emoji: "👤" },
    { name: "Facebook Story Downloader", slug: "facebook-story-downloader", emoji: "📷" },
    { name: "Twitter/X Video Downloader", slug: "online-video-downloader", emoji: "🐦" },
    { name: "Snapchat Video Downloader", slug: "snapchat-video-downloader", emoji: "👻" },
    { name: "LinkedIn Video Downloader", slug: "linkedin-video-downloader", emoji: "💼" },
    { name: "Threads Video Downloader", slug: "threads-video-downloader", emoji: "🧵" },
  ],
  "Video Platforms": [
    { name: "Dailymotion Downloader", slug: "dailymotion-video-downloader", emoji: "🎬" },
    { name: "Twitch Video Downloader", slug: "twitch-video-downloader", emoji: "🎮" },
    { name: "Rumble Video Downloader", slug: "rumble-video-downloader", emoji: "📡" },
    { name: "Bilibili Downloader", slug: "bilibili-video-downloader", emoji: "📺" },
    { name: "Streamable Downloader", slug: "streamable-video-downloader", emoji: "⚡" },
    { name: "TED Talk Downloader", slug: "ted-video-downloader", emoji: "🎤" },
    { name: "Telegram Video Downloader", slug: "telegram-video-downloader", emoji: "✈️" },
    { name: "Periscope Downloader", slug: "periscope-video-downloader", emoji: "📡" },
    { name: "BitChute Downloader", slug: "bitchute-video-downloader", emoji: "🔗" },
    { name: "ESPN Downloader", slug: "espn-video-downloader", emoji: "⚽" },
    { name: "IMDB Trailer Downloader", slug: "imdb-video-downloader", emoji: "🎬" },
    { name: "Kickstarter Downloader", slug: "kickstarter-video-downloader", emoji: "🚀" },
  ],
  "Content & Memes": [
    { name: "Reddit Video Downloader", slug: "reddit-video-downloader", emoji: "🤖" },
    { name: "Reddit Downloader", slug: "reddit-downloader", emoji: "📌" },
    { name: "Pinterest Video Downloader", slug: "pinterest-video-downloader", emoji: "📌" },
    { name: "Pinterest Image Downloader", slug: "pinterest-image-downloader", emoji: "🖼️" },
    { name: "Pinterest GIF Downloader", slug: "pinterest-gif-downloader", emoji: "🎭" },
    { name: "Tumblr Downloader", slug: "tumblr-video-downloader", emoji: "✍️" },
    { name: "9GAG Downloader", slug: "ninegag-video-downloader", emoji: "😂" },
    { name: "iFunny Downloader", slug: "ifunny-video-downloader", emoji: "🤣" },
    { name: "Imgur Downloader", slug: "imgur-video-downloader", emoji: "📷" },
    { name: "Buzzfeed Downloader", slug: "buzzfeed-video-downloader", emoji: "🍳" },
    { name: "Mashable Downloader", slug: "mashable-video-downloader", emoji: "💻" },
    { name: "Blogger Downloader", slug: "blogger-video-downloader", emoji: "📝" },
  ],
  "Music & Audio": [
    { name: "SoundCloud Downloader", slug: "soundcloud-video-downloader", emoji: "🎧" },
    { name: "Mixcloud Downloader", slug: "mixcloud-video-downloader", emoji: "🎛️" },
    { name: "Bandcamp Downloader", slug: "bandcamp-video-downloader", emoji: "🎸" },
    { name: "Gaana Downloader", slug: "gaana-video-downloader", emoji: "🎵" },
  ],
  "Short Video Apps": [
    { name: "CapCut Downloader", slug: "capcut-video-downloader", emoji: "✂️" },
    { name: "Douyin Downloader", slug: "douyin-video-downloader", emoji: "🇨🇳" },
    { name: "Kwai Downloader", slug: "kwai-video-downloader", emoji: "🎯" },
    { name: "Likee Downloader", slug: "likee-video-downloader", emoji: "❤️" },
    { name: "ShareChat Downloader", slug: "sharechat-video-downloader", emoji: "🇮🇳" },
    { name: "Chingari Downloader", slug: "chingari-video-downloader", emoji: "🔥" },
    { name: "MX TakaTak Downloader", slug: "mxtakatak-video-downloader", emoji: "🎪" },
  ],
  "Regional Platforms": [
    { name: "VKontakte (VK) Downloader", slug: "vkontakte-video-downloader", emoji: "🇷🇺" },
    { name: "OK.ru Downloader", slug: "odnoklassniki-video-downloader", emoji: "🇷🇺" },
    { name: "BluTV Downloader", slug: "blutv-video-downloader", emoji: "🇹🇷" },
    { name: "PuhuTV Downloader", slug: "puhutv-video-downloader", emoji: "🇹🇷" },
    { name: "AkilliTV Downloader", slug: "akillitv-video-downloader", emoji: "🇹🇷" },
    { name: "İzlesene Downloader", slug: "izlesene-video-downloader", emoji: "🇹🇷" },
    { name: "Flickr Video Downloader", slug: "flickr-video-downloader", emoji: "📷" },
    { name: "FEBspot Downloader", slug: "febspot-video-downloader", emoji: "🌐" },
  ],
  "Technical Tools": [
    { name: "M3U8 / HLS Downloader", slug: "m3u8-downloader", emoji: "📡" },
    { name: "Universal Video Downloader", slug: "online-video-downloader", emoji: "🌐" },
  ],
};

const faqs = [
  { question: "What platforms does 30tools Video Downloader support?", answer: "30tools supports 50+ platforms including YouTube, TikTok, Instagram, Facebook, Twitter/X, Reddit, Pinterest, Snapchat, LinkedIn, Twitch, Dailymotion, SoundCloud, Telegram, and many more. We also support regional platforms like VK, OK.ru, BluTV, Douyin, and Bilibili." },
  { question: "Is 30tools Video Downloader free?", answer: "Yes, every downloader tool on 30tools is 100% free. No subscription, no hidden charges, no account registration required. We're supported by non-intrusive ads to keep the service free forever." },
  { question: "Can I download videos on iPhone or Android?", answer: "Yes. 30tools works directly in mobile browsers. On Android, use Chrome and videos save to your Downloads folder. On iPhone, use Safari, tap Download, then save to Photos." },
  { question: "Do downloads include audio/sound?", answer: "Yes. Unlike some downloaders that separate video and audio, 30tools automatically merges both streams. Reddit videos, which normally download silently, come with full audio included." },
  { question: "What video quality can I download?", answer: "Quality depends on the source platform. When available, we offer up to 4K/2160p for YouTube, 1080p/720p for most social media, and the highest available quality for all other platforms. We also support MP3 audio extraction." },
  { question: "Is downloading videos legal?", answer: "Downloading publicly available videos for personal, offline use is generally accepted. However, downloading copyrighted content for redistribution or commercial use may violate copyright law and platform terms. Always respect content creators' rights and use downloaded content responsibly." },
];

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "30tools Video Downloader Suite",
    "alternateName": ["Free Online Video Downloader", "All-in-One Video Downloader"],
    "description": "Free online video downloader supporting 50+ platforms. Download videos from YouTube, TikTok, Instagram, Facebook, Twitter, Reddit, and more in HD MP4.",
    "url": "https://30tools.com/all-downloaders",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download from 50+ platforms",
      "HD and 4K quality",
      "No watermarks",
      "No registration required",
      "Works on all devices",
      "MP3 audio extraction",
      "Automatic audio merge for Reddit",
    ],
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Video Downloader Tools",
    "description": "Complete list of free video downloader tools available on 30tools.",
    "numberOfItems": 57,
    "itemListElement": Object.values(DOWNLOADERS).flat().slice(0, 20).map((d, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": d.name,
      "url": `https://30tools.com/${d.slug}`,
    })),
  },
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function AllDownloadersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.itemList) }} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://30tools.com" },
        { name: "All Downloaders", url: "https://30tools.com/all-downloaders" },
      ]} />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li className="text-foreground font-medium">All Video Downloaders</li>
            </ol>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Free Video Downloader — 50+ Platforms
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download videos from YouTube, TikTok, Instagram, Facebook, Twitter, Reddit, Pinterest, and 50+ more platforms. HD quality, no watermarks, 100% free. No login required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🌐 50+ Platforms</span>
              <span>📹 HD & 4K</span>
              <span>🚫 No Watermark</span>
              <span>🆓 100% Free</span>
              <span>📱 All Devices</span>
            </div>
          </div>

          <AdUnit />

          {Object.entries(DOWNLOADERS).map(([category, tools]) => (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-3">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <Link
                    key={tool.slug + tool.name}
                    href={`/${tool.slug}`}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all duration-200"
                  >
                    <span className="text-2xl">{tool.emoji}</span>
                    <span className="font-medium text-sm text-foreground">{tool.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <AdUnit />

          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why 30tools is the Best Video Downloader</h2>
            <p className="text-muted-foreground mb-8">30tools has the most comprehensive collection of free video downloaders on the internet. Whether you want to save a YouTube tutorial, a TikTok trend, an Instagram Reel, or a Reddit meme — we cover it all in one place.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Platform Coverage</h3>
                <p className="text-muted-foreground m-0">With 50+ supported platforms, you'll never need another downloader tool again. From western social media to Asian and Eastern European platforms — we support them all.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Zero Cost, Zero Friction</h3>
                <p className="text-muted-foreground m-0">No account creation, no software installation, no subscription. Just paste a URL and download. Works on any device with a browser — PC, Mac, Android, iPhone.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Best Quality Available</h3>
                <p className="text-muted-foreground m-0">We always fetch the highest quality available from the source platform — up to 4K/2160p where supported. All downloads include audio and come without watermarks.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
