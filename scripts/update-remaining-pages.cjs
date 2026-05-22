const fs = require('fs');
const path = require('path');

const componentMap = {
  // YouTube route group
  'youtube-downloader': 'YouTubeDownloader',
  'youtube-shorts-downloader': 'YouTubeShortsDownloader',
  'youtube-channel-banner-downloader': 'YouTubeDownloader',
  'youtube-channel-logo-downloader': 'YouTubeDownloader',
  'youtube-channel-id-extractor': 'YouTubeDownloader',
  'youtube-description-extractor': 'YouTubeDownloader',
  'youtube-hashtag-extractor': 'YouTubeDownloader',
  'youtube-tag-extractor': 'YouTubeDownloader',
  'youtube-title-extractor': 'YouTubeDownloader',
  'ig-reels-downloader-hd': 'InstagramReelDownloader',
  'fb-clip-downloader': 'FacebookDownloader',

  // Video route group
  'terabox-downloader': 'DownloaderEngine',
  
  // SEO route group
  'sitemap-url-downloader': 'DownloaderEngine',
};

const folders = {
  '(youtube)': path.join(__dirname, '..', 'src', 'app', '(youtube)'),
  '(video)': path.join(__dirname, '..', 'src', 'app', '(video)'),
  '(seo)': path.join(__dirname, '..', 'src', 'app', '(seo)'),
};

for (const [group, dir] of Object.entries(folders)) {
  if (!fs.existsSync(dir)) continue;
  
  const items = fs.readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const folder of items) {
    const component = componentMap[folder];
    if (!component) continue;
    if (component === 'DownloaderEngine') continue; // keep as-is

    const pagePath = path.join(dir, folder, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      console.log(`  MISSING: ${group}/${folder}`);
      continue;
    }

    let content = fs.readFileSync(pagePath, 'utf-8');
    
    // Find current import
    const match = content.match(/import (\w+) from "@\/components\/tools\/downloaders\/\w+";/);
    if (!match) {
      console.log(`  WARN (no import found): ${group}/${folder}`);
      continue;
    }

    const oldImport = match[0];
    const newImport = `import ${component} from "@/components/tools/downloaders/${component}";`;
    content = content.replace(oldImport, newImport);

    // Find current usage pattern - could be <ComponentName /> or <ComponentName prop={...} />
    const usageRegex = new RegExp(`<${match[1]}\\s[^>]*\\/>`, 'g');
    const selfClosingRegex = new RegExp(`<${match[1]}\\s*\\/>`, 'g');
    content = content.replace(selfClosingRegex, `<${component} />`);
    content = content.replace(usageRegex, `<${component} />`);

    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`  UPDATED: (${group})/${folder} -> ${component}`);
  }
}

console.log('\nDone!');
