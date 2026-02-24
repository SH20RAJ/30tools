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

// For missing descriptions, use generic SEO text
toolsData.forEach(t => {
    if (!t.description) {
        t.description = `Download ${t.name.replace(' Downloader', '')} online for free. The ultimate tool for downloading videos and media from ${t.name.split(' ')[0]} directly to your device. Fast, secure, and no installation required.`;
    }
    t.slug = t.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
});

const dPath = path.join(__dirname, 'src', 'app', '(downloaders)');
let updated = 0;

for (const t of toolsData) {
    const p = path.join(dPath, t.slug, 'page.js');
    if (fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');

        // Instead of completely resetting, we will inject high-quality UI blocks + the exact text requested
        const targetWord = t.name.split(' ')[0]; // e.g. "Tiktok", "Pinterest"
        
        const genericDescriptionRegex = /<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">([\s\S]*?)<\/p>/;
        const whyUseUsGenericRegex = /<p className="text-muted-foreground mb-8">\s*Our free tool makes it easy to download content in high quality. Whether you're using a phone, tablet, or PC, you can save your favorite videos quickly and easily. No software installation is required, just copy the link and start downloading directly from your browser.\s*<\/p>/;

        // Custom injection blocks
        const primaryDescriptionBlock = `<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">\n              ${t.description.replace(/"/g, "'")}\n            </p>`;
        const whyUseUsBlock = `<p className="text-muted-foreground mb-8">\n              Why choose our ${t.name}? 30tools offers an ad-free, secure, and lightning-fast downloading experience. ${t.description.replace(/"/g, "'")} Access your favorite ${targetWord} media instantly on any device.\n            </p>`;

        // UI FAQ Expansion and How To Sections (SEO Boosting)
        const extendedSEO = `
          {/* How to Download Steps */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download from ${targetWord} with 30tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">1</div>
                <h3 className="text-xl font-bold mb-4">Copy the URL</h3>
                <p className="text-muted-foreground">Find the ${targetWord} video or image you want to download. Click Share and select "Copy Link".</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">2</div>
                <h3 className="text-xl font-bold mb-4">Paste the URL</h3>
                <p className="text-muted-foreground">Return to 30tools and paste the copied ${targetWord} link into the input box at the top of this page.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">3</div>
                <h3 className="text-xl font-bold mb-4">Download Media</h3>
                <p className="text-muted-foreground">Click the "Download" button. Choose your preferred format and quality to save the file directly to your device.</p>
              </div>
            </div>
          </section>

          <AdUnit />

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Is this ${targetWord} Downloader completely free to use?</h3>
                <p className="text-muted-foreground">Yes! Our downloader is 100% free with absolutely no hidden costs, subscriptions, or installation requirements.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Do I need a ${targetWord} account to download?</h3>
                <p className="text-muted-foreground">No account is necessary. As long as the post is public, you can download it using just the link.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Are my downloads anonymous?</h3>
                <p className="text-muted-foreground">Absolutely. We do not track your download history or save any files you download on our servers.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}`;

        // Perform Replacements
        if (content.match(genericDescriptionRegex)) {
            content = content.replace(genericDescriptionRegex, primaryDescriptionBlock);
        }

        if (content.match(whyUseUsGenericRegex)) {
           content = content.replace(whyUseUsGenericRegex, whyUseUsBlock);
        }

        // Add Extended SEO before the closing tags
        if (!content.includes('How to Download from')) {
            content = content.replace(/<\/div>\s*<\/div>\s*<\/>\s*\);\s*}\s*$/, extendedSEO);
        }

        // Meta tags Update to ensure we apply user text
        const metaDescRegex = /description:\s*".*?"/;
        const newMetaDesc = `description: "${t.description.replace(/"/g, "'").slice(0, 155)}..."`;
        content = content.replace(metaDescRegex, newMetaDesc);

        fs.writeFileSync(p, content);
        updated++;
    }
}
console.log(`Updated ${updated} pages with detailed SEO formatting and bespoke text.`);
