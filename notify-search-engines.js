#!/usr/bin/env node

// Notify search engines about YouTube downloader updates
const https = require('https');

const sitemap = 'https://30tools.com/sitemap.xml';
const youtubeDownloaderUrl = 'https://30tools.com/youtube-downloader';

// Submit to Google
const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`;

// Submit to Bing via IndexNow
const indexNowKey = 'b8f2e1a7c3d4e5f6g7h8i9j0k1l2m3n4'; // Replace with your actual key
const indexNowUrl = 'https://api.indexnow.org/indexnow';

const indexNowData = JSON.stringify({
  host: '30tools.com',
  key: indexNowKey,
  keyLocation: `https://30tools.com/${indexNowKey}.txt`,
  urlList: [youtubeDownloaderUrl]
});

console.log('🚀 Notifying search engines about YouTube downloader updates...');

// Ping Google
https.get(googlePingUrl, (res) => {
  console.log('✅ Google sitemap ping status:', res.statusCode);
}).on('error', (err) => {
  console.log('❌ Google ping error:', err.message);
});

// Submit to IndexNow (Bing, Yandex)
const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(indexNowData)
  }
};

const req = https.request(options, (res) => {
  console.log('✅ IndexNow submission status:', res.statusCode);
});

req.on('error', (err) => {
  console.log('❌ IndexNow error:', err.message);
});

req.write(indexNowData);
req.end();

console.log('📊 Search engine notifications sent!');
console.log('🔍 YouTube downloader should appear in search results within 24-48 hours');
