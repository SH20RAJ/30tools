const fs = require('fs');
const path = require('path');

const userList = `
Pinterest Video Downloader
Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available.

Tiktok Videos Downloader
Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips.

Instagram Videos Downloader
Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now!

Facebook Video Downloader
Download Facebook videos for free in high quality.

YouTube Thumbnail Downloader
YouTube Thumbnail Downloader is a tool to download thumbnails from YouTube videos for various purposes such as design and promotion.

Pinterest Gif Downloader
Free online tool to download high-quality GIFs from Pinterest instantly. No registration required.

Pinterest Image Downloader
Free online tool to download high-resolution images from Pinterest instantly. No registration or software required.

Online Video Downloader
Download any video as an MP4 in just a few clicks. Paste the video URL into the input box, then hit Download Video. Your file will be saved to your computer, ready to watch anytime—no internet needed. Keep adding new links to quickly download more videos and enjoy them offline whenever you want.

Reddit Video Downloader
Download Reddit Videos & GIFs in HD Free.

YouTube Video Downloader
Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based.

Instagram Story Downloader

Instagram Image Downloader

Linkedin Video Downloader
Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly.

Vimeo Video Downloader
Paste a Vimeo URL and instantly download the video as an MP4 file for free on any device.

M3U8 Downloader
Download m3u8 playlists and convert them to high-quality MP4 videos.

Dailymotion Video Downloader
Free online Dailymotion downloader to save videos as MP4 in HD. Fast, secure, no signup required.

AkilliTv Video Downloader
Download AkilliTv videos easily with our free online downloader.

Bandcamp Video Downloader
The easiest way to download Bandcamp videos online.

Bilibili Video Downloader
Download Bilibili videos online with ease.

Bitchute Video Downloader
Download your favorite Bitchute videos in one click.

Blogger Video Downloader
Easily download videos from any Blogger post.

BluTv Video Downloader
The ultimate tool for downloading videos from BluTv.

Buzzfeed Video Downloader
Download any Buzzfeed video to your device instantly.

Capcut Video Downloader
Download Capcut videos and templates easily.

Chingari Video Downloader
Save your favorite Chingari videos to your device.

Douyin Video Downloader
Save Douyin videos directly to your device easily.

Espn Video Downloader
Save your favorite Espn sports videos to your device.

Febspot Video Downloader
Download Febspot videos easily with our online downloader.

Flickr Video Downloader
Save Flickr videos to your device in high quality.

Gaana Video Downloader
Download Gaana videos online with our free tool.

Ifunny Video Downloader
Save your favorite Ifunny videos to your device easily.

Imdb Video Downloader
Save Imdb videos and trailers to your device.

Imgur Video Downloader
Save your favorite Imgur videos to your device easily.

Izlesene Video Downloader
The ultimate tool for downloading videos from Izlesene.

Kickstarter Video Downloader
Save Kickstarter project videos to your device easily.

Kwai Video Downloader
Save your favorite Kwai videos to your device easily.

Likee Video Downloader
Save your favorite Likee videos to your device easily.

Mashable Video Downloader
Download Mashable videos online with our free tool.

Mixcloud Video Downloader
The easiest way to download Mixcloud videos and audio online.

MxTakatak Video Downloader
Save your favorite MxTakatak videos to your device.

NineGag Video Downloader
Save your favorite NineGag videos to your device easily.

Odnoklassniki Video Downloader
Save Odnoklassniki videos directly to your device easily.

Snapchat Video Downloader
Save your favorite Snapchat videos to your device easily.

Soundcloud Video Downloader
The easiest way to download Soundcloud content online.

Periscope Video Downloader
Download Periscope videos and live streams easily.

PuhuTv Video Downloader
Download PuhuTv videos online with our free tool.

Rumble Video Downloader
The ultimate tool for downloading videos from Rumble.

Streamable Video Downloader
Download Streamable videos online with our free tool.

Ted Video Downloader
Save Ted talk videos directly to your device easily.

Telegram Video Downloader
The ultimate tool for downloading videos from Telegram.

ShareChat Video Downloader
Save your favorite ShareChat videos to your device easily.

Threads Video Downloader
Save your favorite Threads videos to your device easily.

Tumblr Video Downloader
Download Tumblr videos online with our free tool.

Twitch Video Downloader
Download Twitch videos and clips easily.

Twitter Video Downloader
The ultimate tool for downloading videos from Twitter.

Vkontakte Video Downloader
Save Vkontakte videos directly to your device easily.
`;

const lines = userList.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);

const toolsData = [];
let currentTool = null;

for (const line of lines) {
    if (line.endsWith('Downloader') && !line.includes('—') && line.split(' ').length <= 4) {
        if (currentTool) toolsData.push(currentTool);
        currentTool = { name: line, description: '' };
    } else if (currentTool) {
        currentTool.description += (currentTool.description ? ' ' : '') + line;
    }
}
if (currentTool) toolsData.push(currentTool);

// Map over tools and make sure every tool has a description
toolsData.forEach(t => {
    if (!t.description) {
        t.description = `Download ${t.name.replace(' Downloader', '')} online for free. The ultimate tool for downloading videos and media from ${t.name.split(' ')[0]} directly to your device. Fast, secure, and no installation required.`;
    }
    t.slug = t.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
});

// Paths
const toolsJsonPath = path.join(__dirname, 'src', 'constants', 'tools.json');
const rawTsJson = fs.readFileSync(toolsJsonPath, 'utf8');
const tsData = JSON.parse(rawTsJson);

// Merge into downloaders
const downloaderCategory = tsData.categories.downloaders;
const existingIds = new Set(downloaderCategory.tools.map(t => t.id));

let newAdded = 0;
for (const t of toolsData) {
    if (!existingIds.has(t.slug)) {
        downloaderCategory.tools.push({
            id: t.slug,
            name: t.name,
            description: t.description,
            route: '/' + t.slug,
            popular: false,
            category: 'downloaders'
        });
        existingIds.add(t.slug);
        newAdded++;
    } else {
        // Update description if it exists
        const ex = downloaderCategory.tools.find(ext => ext.id === t.slug);
        if(ex && t.description.length > ex.description.length) {
            ex.description = t.description;
        }
    }
}

// Add PDF tools
const pdfCat = tsData.categories.pdf;
if (!pdfCat.tools.find(t => t.id === 'png-to-pdf')) {
    pdfCat.tools.push({
        id: "png-to-pdf",
        name: "PNG to PDF",
        description: "Convert PNG images to PDF documents quickly and easily. Free online tool.",
        route: "/png-to-pdf",
        popular: true,
        category: "pdf"
    });
}
if (!pdfCat.tools.find(t => t.id === 'jpg-to-pdf')) {
    pdfCat.tools.push({
        id: "jpg-to-pdf",
        name: "JPG to PDF",
        description: "Convert JPG/JPEG images to PDF documents quickly and easily. Free online tool.",
        route: "/jpg-to-pdf",
        popular: true,
        category: "pdf"
    });
}


const componentTemplate = (name, desc, ogPrefix) => `
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "${name} - Free Online Tool | 30tools",
  description: "${desc.replace(/"/g, "'")}",
  keywords: [
    "${name.toLowerCase()} 2026",
    "download ${name.toLowerCase().replace(' downloader', '')} video",
    "save ${name.toLowerCase().replace(' downloader', '')} media",
    "free online ${name.toLowerCase()}",
    "download videos free"
  ].join(", "),
  openGraph: {
    title: "${name} (2026) - Free Downloader",
    description: "⚡ ${desc.replace(/"/g, "'")}",
    url: "https://30tools.com/${ogPrefix}",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/universal-downloader.jpg", 
      width: 1200,
      height: 630,
      alt: "${name} 2026"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "${name} (2026)",
    description: "⚡ ${desc.replace(/"/g, "'")}",
    images: ["/og-images/universal-downloader.jpg"], 
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/${ogPrefix}" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "${name}",
    "alternateName": ["30tools ${name}", "Free Downloader"],
    "description": "${desc.replace(/"/g, "'")}",
    "url": "https://30tools.com/${ogPrefix}",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download high quality videos",
      "No registration required",
      "Free to use"
    ]
  }
};

export default function ${name.replace(/[^A-Za-z]/g, '')}Page() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li>/</li>
              <li><a href="/all-downloaders" className="hover:text-primary">Downloaders</a></li>
              <li>/</li>
              <li className="text-foreground font-medium">${name}</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">${name}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              ${desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>⚡ Fast</span><span>🎥 HD Quality</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="${name}" />
          </div>

          {/* SEO Content: Why Use Us */}
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why You Should Use Our ${name}</h2>
            <p className="text-muted-foreground mb-8">
              Our free tool makes it easy to download content in high quality. Whether you're using a phone, tablet, or PC, you can save your favorite videos quickly and easily. No software installation is required, just copy the link and start downloading directly from your browser.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">High Quality Downloads</h3>
                <p className="text-muted-foreground m-0">
                  Save media in the best available resolution. Enjoy crisp, clear content offline.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Easy for All Devices</h3>
                <p className="text-muted-foreground m-0">
                  Works across all devices including mobile phones, PCs, and tablets. Compatible with Android and iOS.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">100% Free</h3>
                <p className="text-muted-foreground m-0">
                  Unlimited downloads at zero cost. We only display a few ads to support development.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
`;


// Let's create the directories and files
const dPath = path.join(__dirname, 'src', 'app', '(downloaders)');
let pagesCreated = 0;

for (const t of toolsData) {
    // Only create if we don't have a custom one
    const p = path.join(dPath, t.slug);
    const fp = path.join(p, 'page.js');
    if (!fs.existsSync(p)) fs.mkdirSync(p, {recursive: true});
    if (!fs.existsSync(fp)) {
        fs.writeFileSync(fp, componentTemplate(t.name, t.description, t.slug).trim());
        pagesCreated++;
    }
}

// Write back tools.json
fs.writeFileSync(toolsJsonPath, JSON.stringify(tsData, null, 2));

console.log("Updated Tools JSON. Added " + newAdded + " new tools from the list.");
console.log("Created " + pagesCreated + " new downloader pages.");
