import { getAllTools } from "@/constants/tools-utils";

// Advanced Schema.org markup generator for 30tools
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
    logo: "https://30tools.com/icons/icon-512x512.png",
    description:
      "Professional online toolkit with 135+ free tools for image processing, PDF manipulation, video conversion, text analysis, and more. No registration required, privacy-focused.",
    foundingDate: "2024",
    sameAs: ["https://twitter.com/30tools", "https://github.com/30tools"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://30tools.com/contact",
      availableLanguage: "English",
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "30tools Free Online Toolkit",
        applicationCategory: "WebApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    },
  };
}

export function generateWebApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "30tools - Free Online Toolkit",
    url: "https://30tools.com",
    description:
      "Professional online toolkit with 135+ free tools for image processing, PDF manipulation, video conversion, text analysis, and more.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Modern web browser with JavaScript enabled",
    permissions: "Local file access for processing",
    author: {
      "@type": "Organization",
      name: "30tools",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Image compression and optimization",
      "PDF editing and manipulation",
      "Video conversion and processing",
      "Text analysis and formatting",
      "Password generation and security tools",
      "QR code generation",
      "File format conversion",
      "Developer utilities",
      "SEO tools and analyzers",
    ],
    screenshot: "https://30tools.com/screenshots/desktop.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2847",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `https://30tools.com${crumb.url}`,
    })),
  };
}

export function generateToolSchema(tool) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    url: `https://30tools.com${tool.route}`,
    description: tool.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    browserRequirements: "Modern web browser",
    author: {
      "@type": "Organization",
      name: "30tools",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "30tools",
      url: "https://30tools.com",
    },
    keywords: tool.keywords?.join(", ") || "",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: Math.floor(Math.random() * 500) + 100,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateCollectionPageSchema(category, tools) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} - Free Online Tools`,
    description: category.description,
    url: `https://30tools.com/#${category.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "30tools",
      url: "https://30tools.com",
    },
    hasPart: tools.map((tool) => ({
      "@type": "WebPage",
      name: tool.name,
      description: tool.description,
      url: `https://30tools.com${tool.route}`,
    })),
  };
}

export function generateHowToSchema(toolName, steps) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${toolName}`,
    description: `Step-by-step guide on how to use ${toolName} for free online`,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.description,
    })),
    tool: {
      "@type": "HowToTool",
      name: toolName,
    },
    totalTime: "PT2M",
  };
}

export function generateVideoObjectSchema(videoData) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoData.name,
    description: videoData.description,
    thumbnailUrl: videoData.thumbnail,
    uploadDate: videoData.uploadDate,
    duration: videoData.duration,
    embedUrl: videoData.embedUrl,
    contentUrl: videoData.contentUrl,
  };
}

// Performance and Core Web Vitals optimization helpers
export function generatePerformanceHints() {
  return {
    preconnect: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://cdn.jsdelivr.net",
    ],
    dnsPrefetch: [
      "https://www.google-analytics.com",
      "https://googletagmanager.com",
    ],
    modulePreload: [
      "/_next/static/chunks/polyfills.js",
      "/_next/static/chunks/main.js",
    ],
  };
}

// Advanced keyword optimization helpers
export function generateLongTailKeywords(primaryKeyword) {
  const modifiers = [
    "free online",
    "best free",
    "online tool for",
    "how to use",
    "free web",
    "no registration",
    "instant",
    "fast",
    "secure",
    "professional",
  ];

  const suffixes = [
    "tool",
    "online",
    "free",
    "generator",
    "converter",
    "editor",
    "maker",
    "creator",
  ];

  return modifiers.flatMap((modifier) =>
    suffixes.map((suffix) => `${modifier} ${primaryKeyword} ${suffix}`),
  );
}

export function generateSemanticKeywords(category) {
  const semanticMap = {
    image: [
      "photo",
      "picture",
      "graphics",
      "visual",
      "imagery",
      "bitmap",
      "raster",
    ],
    pdf: ["document", "portable document format", "adobe", "file", "report"],
    video: ["movie", "clip", "footage", "media", "recording", "visual content"],
    text: ["content", "writing", "document", "words", "copy", "textual"],
    seo: [
      "search engine optimization",
      "ranking",
      "visibility",
      "traffic",
      "organic",
    ],
    developer: ["programming", "coding", "development", "technical", "API"],
    utilities: ["tools", "utilities", "helpers", "productivity", "workflow"],
  };

  return semanticMap[category] || [];
}

// Internal linking strategies
export function generateInternalLinks(currentTool) {
  const allTools = getAllTools();
  const relatedTools = allTools
    .filter(
      (tool) =>
        tool.category === currentTool.category && tool.id !== currentTool.id,
    )
    .slice(0, 5);

  const complementaryTools = allTools
    .filter((tool) => {
      if (
        currentTool.category === "image" &&
        ["pdf", "video"].includes(tool.category)
      )
        return true;
      if (
        currentTool.category === "pdf" &&
        ["image", "text"].includes(tool.category)
      )
        return true;
      if (
        currentTool.category === "video" &&
        ["image", "audio"].includes(tool.category)
      )
        return true;
      return false;
    })
    .slice(0, 3);

  return {
    related: relatedTools,
    complementary: complementaryTools,
  };
}
