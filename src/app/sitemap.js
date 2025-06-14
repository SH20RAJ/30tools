import toolsDirectory from '@/constants/tools-directory.json';

const BASE_URL = 'https://30tools.com';

export default function sitemap() {
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/help`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/api-docs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }
  ];

  // Generate category pages
  const categoryPages = Object.values(toolsDirectory.categories).map((category) => ({
    url: `${BASE_URL}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Generate tool pages with all route variations
  const toolPages = [];

  Object.values(toolsDirectory.categories).forEach(category => {
    if (category.tools && category.tools.length > 0) {
      category.tools.forEach(tool => {
        // Primary tool page
        const primaryRoute = tool.id.replace(/_/g, '-');
        toolPages.push({
          url: `${BASE_URL}/${primaryRoute}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: tool.popular ? 0.9 : 0.8,
        });

        // All route variations from the tool definition
        if (tool.routes && tool.routes.length > 0) {
          tool.routes.forEach(route => {
            // Remove leading slash if present
            const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
            if (cleanRoute !== primaryRoute) {
              toolPages.push({
                url: `${BASE_URL}/${cleanRoute}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
              });
            }
          });
        }
      });
    }
  });

  // Add specific tool routes that exist in the file system
  const additionalToolRoutes = [
    // Text Tools
    'word-counter',
    'character-counter',
    'password-generator',
    'lorem-ipsum-generator',
    'secure-password-generator',
    'strong-password-creator',
    'random-password-maker',
    'generate-password-online',
    'placeholder-text-generator',
    'dummy-text-generator',
    'lipsum-generator',
    'lorem-generator',
    'text-counter',
    'count-words-online',
    'word-count-tool',

    // Audio Tools  
    'audio-compressor',
    'compress-audio-online',
    'reduce-audio-size',
    'audio-size-reducer',
    'optimize-audio-online',

    // Image Tools
    'image-compressor',
    'compress-images-online',
    'free-image-compressor',
    'image-minimizer',
    'image-optimizer',
    'compress-jpeg-online',
    'compress-png-online',
    'reduce-image-size',
    'optimize-images-online',
    'photo-compressor',
    'picture-compressor',
    'shrink-images-online',

    // QR Code Tools
    'qr-code-generator',
    'qr-generator',
    'generate-qr-code',
    'qr-code-maker',
    'create-qr-code',
    'qr-code-creator',
    'free-qr-generator',

    // Favicon Tools
    'favicon-generator',
    'favicon-maker',
    'create-favicon',
    'favicon-creator',
    'ico-generator',
    'generate-favicon',

    // Future SEO Tools (to be built)
    'meta-tag-generator',
    'og-tag-generator',
    'twitter-card-generator',
    'schema-markup-generator',
    'pwa-manifest-generator',
    'robots-txt-generator',
    'sitemap-generator',
    'canonical-url-generator',

    // Future Developer Tools
    'json-formatter',
    'css-minifier',
    'js-minifier',
    'html-minifier',
    'base64-encoder',
    'base64-decoder',
    'url-encoder',
    'url-decoder',
    'hash-generator',
    'uuid-generator',
    'color-picker',
    'gradient-generator',

    // Future PDF Tools
    'pdf-merger',
    'pdf-splitter',
    'pdf-compressor',
    'pdf-to-jpg',
    'jpg-to-pdf',
    'pdf-editor',

    // Future Video Tools
    'video-compressor',
    'video-converter',
    'gif-maker',
    'video-to-gif',
    'mp4-compressor'
  ];

  // Add additional routes that don't duplicate existing ones
  const existingUrls = new Set([
    ...staticPages.map(p => p.url),
    ...categoryPages.map(p => p.url),
    ...toolPages.map(p => p.url)
  ]);

  additionalToolRoutes.forEach(route => {
    const url = `${BASE_URL}/${route}`;
    if (!existingUrls.has(url)) {
      toolPages.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
      existingUrls.add(url);
    }
  });

  // SEO-focused long-tail keyword routes
  const seoRoutes = [
    // Image compression long-tail
    'compress-images-without-losing-quality',
    'reduce-image-file-size-online-free',
    'compress-jpeg-png-online-free',
    'batch-image-compression-tool',
    'compress-photos-for-web',
    'optimize-images-for-website',
    'free-online-image-compressor-no-watermark',

    // Word counter long-tail
    'free-word-counter-online-no-registration',
    'word-and-character-counter-for-essays',
    'count-words-characters-sentences-paragraphs',
    'real-time-word-counter-for-writing',
    'academic-word-counter-with-reading-time',

    // Password generator long-tail
    'free-secure-password-generator-online',
    'strong-password-generator-no-storage',
    'cryptographically-secure-password-creator',
    'custom-length-password-generator-free',
    'password-generator-with-special-characters',

    // Audio compression long-tail
    'compress-audio-file-online-free-no-watermark',
    'reduce-audio-size-for-email-attachment',
    'compress-large-audio-files-for-whatsapp',
    'audio-compressor-online-free-without-losing-quality',

    // Lorem ipsum long-tail
    'free-lorem-ipsum-generator-online',
    'lorem-ipsum-placeholder-text-creator',
    'dummy-text-generator-for-web-design',
    'lorem-ipsum-with-html-paragraph-tags'
  ];

  seoRoutes.forEach(route => {
    const url = `${BASE_URL}/${route}`;
    if (!existingUrls.has(url)) {
      toolPages.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  });

  return [
    ...staticPages,
    ...categoryPages,
    ...toolPages,
  ];
}
