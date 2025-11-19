// Comprehensive SEO configuration for optimal search engine ranking
export const SEO_CONFIG = {
  // Global site configuration
  site: {
    name: "30tools",
    title:
      "30tools - 135+ Free Online Tools | Professional Toolkit for Everyone",
    description:
      "Professional online toolkit with 135+ free tools for image compression, PDF editing, video conversion, SEO analysis, developer utilities & more. No registration required.",
    url: "https://30tools.com",
    logo: "https://30tools.com/icons/icon-512x512.png",
    favicon: "/favicon.ico",
    language: "en",
    locale: "en_US",
    type: "website",
  },

  // Social media configuration
  social: {
    twitter: {
      site: "@30tools",
      creator: "@30tools",
      card: "summary_large_image",
    },
    facebook: {
      appId: "your-facebook-app-id",
    },
    instagram: "@30tools",
    github: "https://github.com/sh20raj/30tools",
    linkedin: "company/30tools",
  },

  // Default meta tags for all pages
  defaultMeta: {
    keywords: [
      "free online tools",
      "image compressor",
      "pdf tools",
      "video converter",
      "text tools",
      "developer tools",
      "seo tools",
      "online utilities",
      "web tools",
      "file converter",
    ],
    robots:
      "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    viewport:
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    themeColor: "#000000",
  },

  // Open Graph defaults
  openGraph: {
    type: "website",
    siteName: "30tools - Free Online Toolkit",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "30tools - Professional Free Online Toolkit with 135+ Tools",
      },
    ],
  },

  // Structured data defaults
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "30tools",
      url: "https://30tools.com",
      logo: "https://30tools.com/icons/icon-512x512.png",
      sameAs: [
        "https://twitter.com/30tools",
        "https://github.com/sh20raj/30tools",
      ],
    },
  },

  // Performance optimization
  performance: {
    // Critical resources to preload
    preload: [
      {
        href: "/fonts/inter-var.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
    // Domains to preconnect
    preconnect: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://cdn.jsdelivr.net",
    ],
    // Domains for DNS prefetch
    dnsPrefetch: ["//www.google-analytics.com", "//googletagmanager.com"],
  },

  // Core Web Vitals targets
  vitals: {
    lcp: 2500, // Largest Contentful Paint (ms)
    fid: 100, // First Input Delay (ms)
    cls: 0.1, // Cumulative Layout Shift
    ttfb: 200, // Time to First Byte (ms)
  },

  // Analytics configuration
  analytics: {
    googleAnalytics: "G-0LV8F646TM",
    googleAdsense: "ca-pub-1828915420581549",
    microsoftClarity: "your-clarity-id",
    hotjar: "your-hotjar-id",
  },

  // Search Console verification
  verification: {
    google: "your-google-search-console-verification-code",
    bing: "your-bing-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

// Tool-specific SEO configurations
export const TOOL_SEO_CONFIG = {
  "image-compressor": {
    title: "Free Image Compressor Online - Reduce Size by 80% | No Watermarks",
    description:
      "Compress JPEG, PNG, WebP images online free. Reduce file size by 80% without quality loss. Batch processing, no watermarks, secure browser-based compression.",
    keywords: [
      "image compressor",
      "compress image online",
      "reduce image size",
      "compress jpeg",
      "compress png",
      "image optimization",
      "photo compressor",
      "tinypng alternative",
    ],
    schema: {
      "@type": "SoftwareApplication",
      applicationCategory: "MultimediaApplication",
    },
  },

  "pdf-merger": {
    title: "Free PDF Merger - Combine Multiple PDFs Online | 30tools",
    description:
      "Merge PDF files online for free. Combine multiple PDFs into one document. Preserves bookmarks, no watermarks, unlimited file size support.",
    keywords: [
      "pdf merger",
      "merge pdf files",
      "combine pdf online",
      "pdf joiner",
      "merge pdf free",
      "pdf combiner",
    ],
    schema: {
      "@type": "SoftwareApplication",
      applicationCategory: "OfficeApplication",
    },
  },

  "password-generator": {
    title:
      "Secure Password Generator - Create Strong Passwords Online | 30tools",
    description:
      "Generate secure, random passwords online. Customizable length, character sets, and complexity. Cryptographically secure with no server storage.",
    keywords: [
      "password generator",
      "secure password",
      "random password",
      "strong password generator",
      "password creator",
    ],
    schema: {
      "@type": "SoftwareApplication",
      applicationCategory: "SecurityApplication",
    },
  },

  "qr-code-generator": {
    title: "Free QR Code Generator - Create Custom QR Codes Online | 30tools",
    description:
      "Generate QR codes for URLs, text, WiFi, vCards & more. Custom colors, high resolution download, bulk generation. Free QR code maker tool.",
    keywords: [
      "qr code generator",
      "qr code maker",
      "create qr code",
      "free qr generator",
      "custom qr code",
    ],
    schema: {
      "@type": "SoftwareApplication",
      applicationCategory: "UtilitiesApplication",
    },
  },
};

// Category-specific SEO configurations
export const CATEGORY_SEO_CONFIG = {
  "image-tools": {
    title: "Free Image Tools - Compress, Convert, Edit Images Online | 30tools",
    description:
      "Professional image tools collection. Compress, convert, resize, edit images online. JPEG, PNG, WebP support. Batch processing, no watermarks.",
    keywords: [
      "image tools",
      "image editor online",
      "image converter",
      "photo editor",
      "image processing tools",
    ],
  },

  "pdf-tools": {
    title: "Free PDF Tools - Merge, Split, Compress PDFs Online | 30tools",
    description:
      "Complete PDF toolkit online. Merge, split, compress, convert PDFs. Password protection, bookmark preservation, unlimited file size.",
    keywords: [
      "pdf tools",
      "pdf editor online",
      "pdf converter",
      "pdf manipulator",
      "document tools",
    ],
  },

  "video-tools": {
    title: "Free Video Tools - Compress, Convert, Edit Videos Online | 30tools",
    description:
      "Professional video tools suite. Compress, convert, trim videos online. Multiple format support, social media optimization presets.",
    keywords: [
      "video tools",
      "video converter",
      "video compressor",
      "video editor online",
      "media tools",
    ],
  },
};

// SEO utility functions
export const generatePageTitle = (toolName, category) => {
  const toolConfig = TOOL_SEO_CONFIG[toolName];
  if (toolConfig) {
    return toolConfig.title;
  }

  const categoryConfig = CATEGORY_SEO_CONFIG[category];
  if (categoryConfig) {
    return categoryConfig.title;
  }

  return SEO_CONFIG.site.title;
};

export const generatePageDescription = (toolName, category) => {
  const toolConfig = TOOL_SEO_CONFIG[toolName];
  if (toolConfig) {
    return toolConfig.description;
  }

  const categoryConfig = CATEGORY_SEO_CONFIG[category];
  if (categoryConfig) {
    return categoryConfig.description;
  }

  return SEO_CONFIG.site.description;
};

export const generateKeywords = (toolName, category) => {
  const baseKeywords = [...SEO_CONFIG.defaultMeta.keywords];

  const toolConfig = TOOL_SEO_CONFIG[toolName];
  if (toolConfig) {
    baseKeywords.push(...toolConfig.keywords);
  }

  const categoryConfig = CATEGORY_SEO_CONFIG[category];
  if (categoryConfig) {
    baseKeywords.push(...categoryConfig.keywords);
  }

  return [...new Set(baseKeywords)]; // Remove duplicates
};

export const generateCanonicalUrl = (path = "") => {
  return `${SEO_CONFIG.site.url}${path}`;
};

export const generateOpenGraphImage = (toolName, category) => {
  if (toolName) {
    return `/og-images/${toolName}.jpg`;
  }
  if (category) {
    return `/og-images/${category}.jpg`;
  }
  return SEO_CONFIG.openGraph.images[0].url;
};

// Advanced SEO scoring function
export const calculateSEOScore = (pageData) => {
  let score = 0;

  // Title optimization (20 points)
  if (pageData.title) {
    if (pageData.title.length >= 30 && pageData.title.length <= 60) score += 20;
    else if (pageData.title.length >= 20) score += 15;
    else score += 5;
  }

  // Description optimization (20 points)
  if (pageData.description) {
    if (
      pageData.description.length >= 120 &&
      pageData.description.length <= 160
    )
      score += 20;
    else if (pageData.description.length >= 80) score += 15;
    else score += 5;
  }

  // Keywords optimization (15 points)
  if (pageData.keywords && pageData.keywords.length >= 5) score += 15;
  else if (pageData.keywords && pageData.keywords.length >= 3) score += 10;

  // Content quality (15 points)
  if (pageData.content) {
    const wordCount = pageData.content.split(" ").length;
    if (wordCount >= 300) score += 15;
    else if (wordCount >= 150) score += 10;
    else score += 5;
  }

  // Technical SEO (30 points)
  if (pageData.hasCanonical) score += 5;
  if (pageData.hasStructuredData) score += 10;
  if (pageData.hasOpenGraph) score += 5;
  if (pageData.hasTwitterCard) score += 5;
  if (pageData.hasAltTags) score += 5;

  return Math.min(score, 100); // Cap at 100
};

export default SEO_CONFIG;
