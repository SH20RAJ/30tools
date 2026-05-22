const fs = require('fs');
const path = require('path');

// Mapping of page route -> component to use
// Key: page folder name, Value: component name (and import path)
const componentMap = {
  // Facebook
  'facebook-video-downloader': 'FacebookDownloader',
  'fb-video-saver': 'FacebookDownloader',
  'facebook-story-downloader': 'FacebookStoryDownloader',
  'save-fb-stories-anonymous': 'FacebookStoryDownloader',

  // TikTok
  'tiktok-downloader': 'TikTokDownloader',
  'tiktok-saver-no-watermark': 'TikTokDownloader',
  'tiktok-videos-downloader': 'TikTokDownloader',
  'save-tiktok-mp4': 'TikTokDownloader',
  'free-mp3-extractor': 'TikTokAudioDownloader',
  'mp3-from-tiktok': 'TikTokAudioDownloader',
  'modify-mp3-file': 'TikTokMP3Converter',
  'shrink-mp3-size': 'TikTokMP3Converter',

  // Instagram
  'instagram-downloader': 'InstagramDownloader',
  'instagram-videos-downloader': 'InstagramDownloader',
  'save-ig-content': 'InstagramDownloader',
  'instagram-story-downloader': 'InstagramStoryDownloader',
  'ig-highlights-saver': 'InstagramStoryDownloader',
  'instagram-reel-downloader': 'InstagramReelDownloader',
  'save-instagram-clips': 'InstagramReelDownloader',
  'insta-reels-saver': 'InstagramReelDownloader',
  'save-reels-video': 'InstagramReelDownloader',
  'save-insta-pfp': 'InstagramDPDownloader',
  'instagram-image-downloader': 'InstagramDPDownloader',

  // Twitter/X
  'twitter-video-downloader': 'TwitterDownloader',
  'save-twitter-videos': 'TwitterDownloader',

  // YouTube
  'youtube-video-downloader': 'YouTubeDownloader',
  'youtube-thumbnail-downloader': 'YouTubeDownloader',
  'youtube-shorts-downloader': 'YouTubeShortsDownloader',

  // Pinterest
  'pinterest-video-downloader': 'PinterestDownloader',
  'pinterest-clip-saver': 'PinterestDownloader',
  'pinterest-gif-downloader': 'PinterestDownloader',
  'pinterest-image-downloader': 'PinterestDownloader',

  // Snapchat
  'snapchat-video-downloader': 'SnapchatDownloader',
  'snapchat-saver-online': 'SnapchatDownloader',
  'save-snaps-to-gallery': 'SnapchatDownloader',

  // Major video platforms
  'dailymotion-video-downloader': 'DailymotionDownloader',
  'vimeo-video-downloader': 'VimeoDownloader',
  'twitch-video-downloader': 'TwitchDownloader',
  'linkedin-video-downloader': 'LinkedinDownloader',
  'reddit-video-downloader': 'RedditDownloader',
  'reddit-downloader': 'RedditDownloader',
  'reddit-media-saver': 'RedditDownloader',
  'rumble-video-downloader': 'RumbleDownloader',
  'vkontakte-video-downloader': 'VkontakteDownloader',
  'telegram-video-downloader': 'TelegramDownloader',
  'threads-video-downloader': 'ThreadsDownloader',
  'imgur-video-downloader': 'ImgurDownloader',
  'soundcloud-video-downloader': 'SoundcloudDownloader',
  'bilibili-video-downloader': 'BilibiliDownloader',
  'douyin-video-downloader': 'DouyinDownloader',

  // MP3/audio
  'mp4-to-mp3': 'TikTokMP3Converter',
};

// Generic mapping for tools that don't have custom components
// These will use DownloaderEngine still (which is fine for niche platforms)
const genericPlatforms = [
  'akillitv-video-downloader', 'bandcamp-video-downloader', 'bitchute-video-downloader',
  'blogger-video-downloader', 'blutv-video-downloader', 'buzzfeed-video-downloader',
  'capcut-video-downloader', 'chingari-video-downloader', 'espn-video-downloader',
  'febspot-video-downloader', 'flickr-video-downloader', 'gaana-video-downloader',
  'ifunny-video-downloader', 'imdb-video-downloader', 'izlesene-video-downloader',
  'kickstarter-video-downloader', 'kwai-video-downloader', 'likee-video-downloader',
  'm3u8-downloader', 'mashable-video-downloader', 'mixcloud-video-downloader',
  'mxtakatak-video-downloader', 'ninegag-video-downloader', 'odnoklassniki-video-downloader',
  'periscope-video-downloader', 'puhutv-video-downloader', 'sharechat-video-downloader',
  'streamable-video-downloader', 'ted-video-downloader', 'tumblr-video-downloader',
  'universal-video-downloader', 'online-video-downloader',
  // Category hub pages
  'downloaders', 'all-downloaders',
];

const downloadersDir = path.join(__dirname, '..', 'src', 'app', '(downloaders)');

function updatePage(folderName) {
  const pagePath = path.join(downloadersDir, folderName, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    console.log(`  MISSING: ${pagePath}`);
    return;
  }

  const component = componentMap[folderName];
  if (!component) {
    console.log(`  SKIP (no custom component): ${folderName}`);
    return;
  }

  const oldImport = `import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";`;
  const newImport = `import ${component} from "@/components/tools/downloaders/${component}";`;

  let content = fs.readFileSync(pagePath, 'utf-8');

  // Replace the import
  if (content.includes(oldImport)) {
    content = content.replace(oldImport, newImport);
  } else {
    console.log(`  WARN (import not found): ${folderName}`);
    return;
  }

  // Replace the usage
  // Handle both <DownloaderEngine /> and <DownloaderEngine prop={...} />
  content = content.replace(/<DownloaderEngine\s*\/>/g, `<${component} />`);
  content = content.replace(/<DownloaderEngine\s+([^>]*)\/>/g, `<${component} $1/>`);

  fs.writeFileSync(pagePath, content, 'utf-8');
  console.log(`  UPDATED: ${folderName} -> ${component}`);
}

// Get all subdirectories
const folders = fs.readdirSync(downloadersDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log(`Found ${folders.length} downloader pages`);
console.log('');

// First pass: custom components
console.log('=== Custom Components ===');
for (const folder of folders) {
  if (componentMap[folder]) {
    updatePage(folder);
  }
}

console.log('');

// Note about generic ones
const genericUsed = folders.filter(f => !componentMap[f] && !genericPlatforms.includes(f));
if (genericUsed.length > 0) {
  console.log(`=== Unmapped (still using DownloaderEngine) ===`);
  genericUsed.forEach(f => console.log(`  ${f}`));
}

const genericUnused = genericPlatforms.filter(f => !folders.includes(f));
if (genericUnused.length > 0) {
  console.log(`\n=== Generic entries not found ===`);
  genericUnused.forEach(f => console.log(`  ${f}`));
}

console.log('\nDone!');
