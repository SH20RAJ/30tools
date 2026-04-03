module.exports.toolRedirects = [
  // Video / audio legacy slugs
  { source: "/video-editor", destination: "/video-tools", permanent: true },
  { source: "/video-trimmer", destination: "/video-splitter", permanent: true },
  { source: "/video-player", destination: "/video", permanent: true },
  { source: "/video-to-gif", destination: "/video-tools", permanent: true },
  { source: "/video-compressor", destination: "/video-tools", permanent: true },
  { source: "/video-converter", destination: "/video-to-audio", permanent: true },
  { source: "/audio-compressor", destination: "/audio-tools", permanent: true },
  { source: "/audio-editor", destination: "/audio-tools", permanent: true },
  { source: "/audio-trimmer", destination: "/audio-splitter", permanent: true },
  { source: "/audio-converter", destination: "/audio-tools", permanent: true },
  { source: "/voice-recorder", destination: "/audio-tools", permanent: true },
  { source: "/screen-recorder", destination: "/video-tools", permanent: true },

  // Image / design legacy slugs
  { source: "/image-editor", destination: "/image-tools", permanent: true },
  { source: "/icon-generator", destination: "/image-to-icon", permanent: true },
  {
    source: "/social-media-resizer",
    destination: "/image-resizer",
    permanent: true,
  },
  {
    source: "/compress-images-online",
    destination: "/image-compressor",
    permanent: true,
  },
  {
    source: "/free-image-compressor",
    destination: "/image-compressor",
    permanent: true,
  },
  { source: "/base64-image", destination: "/base64-to-image-converter", permanent: true },

  // SEO / web utility legacy slugs
  {
    source: "/keyword-density",
    destination: "/keyword-density-checker",
    permanent: true,
  },
  {
    source: "/google-keyword-research",
    destination: "/keyword-research-tool",
    permanent: true,
  },
  {
    source: "/bulk-google-index-checker",
    destination: "/google-index-checker",
    permanent: true,
  },
  {
    source: "/meta-tags-generator",
    destination: "/meta-tag-generator",
    permanent: true,
  },
  {
    source: "/title-rewrite-checker",
    destination: "/meta-tag-analyzer",
    permanent: true,
  },
  { source: "/xml-formatter", destination: "/json-formatter", permanent: true },
  {
    source: "/xml-sitemap-extractor",
    destination: "/sitemap-generator",
    permanent: true,
  },
  { source: "/url-encoder", destination: "/url-encode", permanent: true },
  { source: "/ssl-checker", destination: "/hosting-checker", permanent: true },
  { source: "/help", destination: "/contact", permanent: true },
  { source: "/api-docs", destination: "/api-key-tester", permanent: true },

  // Developer / text utility legacy slugs
  { source: "/api-tester", destination: "/api-key-tester", permanent: true },
  { source: "/text-formatter", destination: "/text-tools", permanent: true },
  { source: "/hash-generator", destination: "/md5-generator", permanent: true },
  { source: "/binary-converter", destination: "/binary-to-text-converter", permanent: true },
  { source: "/text-diff", destination: "/text-compare", permanent: true },
  { source: "/html-to-pdf", destination: "/word-to-pdf", permanent: true },

  // Downloader / social legacy slugs
  {
    source: "/twitter-downloader",
    destination: "/twitter-video-downloader",
    permanent: true,
  },
  {
    source: "/facebook-downloader",
    destination: "/facebook-video-downloader",
    permanent: true,
  },

  // PDF / document legacy slugs
  { source: "/pdf-rotate", destination: "/pdf-tools", permanent: true },
];
