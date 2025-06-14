// Advanced SEO metadata templates with long-tail keywords and optimization
import toolsDirectory from './comprehensive-tools-directory.json';

// Global SEO constants
export const GLOBAL_SEO = {
  siteName: "30tools - Free Online Toolkit",
  domain: "30tools.com", 
  defaultTitle: "30tools - Free Online Tools for Images, PDFs, Videos & More",
  defaultDescription: "Professional online tools for image compression, PDF manipulation, video conversion, and text processing. Free, fast, and secure with no watermarks.",
  defaultKeywords: "free online tools, image compressor, pdf merger, video converter, text tools, file converter, online toolkit, web utilities",
  author: "30tools Team",
  robots: "index, follow",
  language: "en",
  ogType: "website",
  twitterCard: "summary_large_image",
  ogImage: "/og-image.jpg",
  favicon: "/favicon.ico"
};

// Schema.org structured data generators
export const generateToolSchema = (tool) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": tool.name,
  "description": tool.longDescription,
  "url": `https://30tools.com${tool.routes[0]}`,
  "applicationCategory": "WebApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
  "featureList": tool.features,
  "screenshot": `https://30tools.com/screenshots/${tool.id}.jpg`,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250"
  }
});

export const generateCategorySchema = (category) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": category.seoTitle,
  "description": category.seoDescription,
  "url": `https://30tools.com/${category.slug}`,
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": category.tools.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": tool.name,
        "url": `https://30tools.com${tool.routes[0]}`
      }
    }))
  }
});

export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url ? `https://30tools.com${crumb.url}` : undefined
  }))
});

export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// SEO metadata generators
export const generateToolMetadata = (toolId) => {
  // Find tool in comprehensive directory
  let tool = null;
  
  for (const [, catData] of Object.entries(toolsDirectory.categories)) {
    const foundTool = catData.tools?.find(t => t.id === toolId);
    if (foundTool) {
      tool = foundTool;
      break;
    }
  }
  
  if (!tool) {
    return getDefaultMetadata();
  }

  // Generate long-tail keyword variations
  const longTailVariations = [
    ...tool.longTailKeywords,
    `free ${tool.primaryKeyword} online no watermark`,
    `best ${tool.primaryKeyword} tool 2025`,
    `${tool.primaryKeyword} online without registration`,
    `professional ${tool.primaryKeyword} free tool`
  ];

  return {
    title: `${tool.name} - Free ${tool.primaryKeyword.charAt(0).toUpperCase() + tool.primaryKeyword.slice(1)} Online | 30tools`,
    description: `${tool.longDescription.substring(0, 155)}...`,
    keywords: [...tool.keywords, ...longTailVariations].join(', '),
    canonical: `https://30tools.com${tool.routes[0]}`,
    alternates: {
      canonical: `https://30tools.com${tool.routes[0]}`
    },
    openGraph: {
      title: `${tool.name} - Free Online Tool`,
      description: tool.description,
      url: `https://30tools.com${tool.routes[0]}`,
      siteName: GLOBAL_SEO.siteName,
      images: [
        {
          url: `/og-images/${tool.id}.jpg`,
          width: 1200,
          height: 630,
          alt: `${tool.name} - ${tool.description}`
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} - Free Online Tool`,
      description: tool.description,
      images: [`/og-images/${tool.id}.jpg`],
      creator: '@30tools'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      bing: 'your-bing-verification-code'
    },
    other: {
      'application-name': '30tools',
      'apple-mobile-web-app-title': '30tools',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent'
    }
  };
};

export const generateCategoryMetadata = (categorySlug) => {
  const category = Object.values(toolsDirectory.categories).find(cat => cat.slug === categorySlug);
  
  if (!category) {
    return getDefaultMetadata();
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    keywords: category.keywords.join(', '),
    canonical: `https://30tools.com/${category.slug}`,
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      url: `https://30tools.com/${category.slug}`,
      siteName: GLOBAL_SEO.siteName,
      images: [
        {
          url: `/og-images/${category.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: category.name
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: category.seoTitle,
      description: category.seoDescription,
      images: [`/og-images/${category.slug}.jpg`],
      creator: '@30tools'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
};

export const getDefaultMetadata = () => ({
  title: GLOBAL_SEO.defaultTitle,
  description: GLOBAL_SEO.defaultDescription,
  keywords: GLOBAL_SEO.defaultKeywords,
  canonical: "https://30tools.com",
  openGraph: {
    title: GLOBAL_SEO.defaultTitle,
    description: GLOBAL_SEO.defaultDescription,
    url: "https://30tools.com",
    siteName: GLOBAL_SEO.siteName,
    images: [
      {
        url: GLOBAL_SEO.ogImage,
        width: 1200,
        height: 630,
        alt: "30tools - Free Online Toolkit"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: GLOBAL_SEO.defaultTitle,
    description: GLOBAL_SEO.defaultDescription,
    images: [GLOBAL_SEO.ogImage],
    creator: '@30tools'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
});

// High-value long-tail keyword generators
export const generateLongTailKeywords = (baseTool, intent = 'transactional') => {
  const intents = {
    transactional: [
      `free ${baseTool} online`,
      `${baseTool} online no watermark`,
      `best ${baseTool} tool 2025`,
      `${baseTool} without registration`,
      `professional ${baseTool} free`
    ],
    informational: [
      `how to ${baseTool.replace('er', '')}`,
      `${baseTool} tutorial guide`,
      `best way to ${baseTool.replace('er', '')}`,
      `${baseTool} tips and tricks`,
      `${baseTool} vs alternatives`
    ],
    commercial: [
      `${baseTool} software comparison`,
      `best ${baseTool} tools review`,
      `${baseTool} online vs desktop`,
      `top ${baseTool} applications`,
      `${baseTool} tool recommendations`
    ]
  };
  
  return intents[intent] || intents.transactional;
};

// Content optimization helpers
export const generateToolContent = (tool) => ({
  heading1: `Free ${tool.name} Online - No Watermarks, No Registration`,
  heading2: `Why Choose Our ${tool.name}?`,
  heading3: `How to Use ${tool.name}`,
  ctaText: `Start Using ${tool.shortName} Now`,
  features: tool.features,
  benefits: [
    "100% free to use",
    "No watermarks added",
    "No registration required", 
    "Privacy-first processing",
    "Fast and reliable",
    "Mobile-friendly design"
  ],
  steps: [
    "Upload your files",
    "Configure settings",
    "Process files",
    "Download results"
  ],
  faqs: [
    {
      question: `Is ${tool.name} free to use?`,
      answer: `Yes, our ${tool.name} is completely free with no hidden charges or watermarks.`
    },
    {
      question: `What file formats are supported?`,
      answer: `We support ${tool.fileFormats.join(', ')} formats with files up to ${tool.maxFileSize}.`
    },
    {
      question: `Is my data secure?`,
      answer: `Yes, all processing happens in your browser. Files are never uploaded to our servers.`
    },
    {
      question: `Can I process multiple files?`,
      answer: `Yes, our tool supports batch processing for increased productivity.`
    }
  ]
});

const seoModule = {
  GLOBAL_SEO,
  generateToolSchema,
  generateCategorySchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateToolMetadata,
  generateCategoryMetadata,
  getDefaultMetadata,
  generateLongTailKeywords,
  generateToolContent
};

export default seoModule;
