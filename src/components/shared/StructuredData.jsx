

export default function StructuredData({ tool, includeFAQ = true }) {
  // If a specific tool is provided, render tool-specific structured data
  if (tool) {
    const toolStructuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: tool.name,
      description: tool.description,
      applicationCategory: tool.category ? `${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}Application` : "UtilitiesApplication",
      operatingSystem: "Web Browser",
      url: `https://30tools.com${tool.route}`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1250",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: tool.features ? tool.features.join(", ") : "Free online tool",
    };

    // FAQ Schema
    const faqData = tool.faqs ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tool.faqs.map(faq => ({
        "@type": "Question",
        name: faq.question || faq.name,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer || faq.acceptedAnswer?.text
        }
      }))
    } : null;

    // HowTo Schema
    const howToData = tool.howTo ? {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: tool.howTo.name || `How to use ${tool.name}`,
      step: tool.howTo.steps ? tool.howTo.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name || step.title,
        text: step.text || step.desc,
        url: step.url
      })) : []
    } : null;

    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://30tools.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: tool.category ? tool.category.charAt(0).toUpperCase() + tool.category.slice(1) : "Tools",
          item: `https://30tools.com/tools/${tool.category || "utilities"}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: tool.name,
          item: `https://30tools.com${tool.route}`,
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(toolStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData),
          }}
        />
        {faqData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqData),
            }}
          />
        )}
        {howToData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(howToData),
            }}
          />
        )}
      </>
    );
  }

  // Default global structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "30tools",
    alternateName: "30tools - Free Online Toolkit",
    url: "https://30tools.com",
    description:
      "Fast, free, and privacy-focused tools for image, video, audio, PDF, and text processing. No sign-up required.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://30tools.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "30tools",
      url: "https://30tools.com",
      logo: {
        "@type": "ImageObject",
        url: "https://30tools.com/icons/icon-512x512.png",
        width: 512,
        height: 512,
      },
    },
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
    logo: "https://30tools.com/icons/icon-512x512.png",
    description:
      "Free online toolkit with 135+ tools for image, video, audio, PDF, and text processing",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://30tools.com/contact",
    },
    sameAs: ["https://twitter.com/30tools", "https://github.com/30tools"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "15000",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://30tools.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://30tools.com/#tools",
      },
    ],
  };

  const toolsCollectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Online Tools Collection - 135+ Professional Tools",
    description:
      "Comprehensive collection of 135+ free online tools for image processing, PDF editing, video conversion, text manipulation, developer utilities, and more.",
    url: "https://30tools.com",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: 135,
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "Image Compressor",
          url: "https://30tools.com/image-compressor",
          description:
            "Compress images up to 80% without quality loss. Supports JPEG, PNG, WebP batch processing.",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "2847",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "PDF Merger",
          url: "https://30tools.com/pdf-merger",
          description:
            "Merge multiple PDF files into one document. Preserves bookmarks and maintains quality.",
          applicationCategory: "OfficeApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "1923",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "Password Generator",
          url: "https://30tools.com/password-generator",
          description:
            "Generate secure passwords with customizable length and character sets. Cryptographically secure.",
          applicationCategory: "SecurityApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "3156",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 4,
          name: "QR Code Generator",
          url: "https://30tools.com/qr-code-generator",
          description:
            "Create custom QR codes for URLs, text, WiFi, vCards. High resolution download with customization.",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "2634",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 5,
          name: "Video Compressor",
          url: "https://30tools.com/video-compressor",
          description:
            "Compress videos for web, social media, and storage. Maintains quality with significant size reduction.",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "1789",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 6,
          name: "Base64 Encoder/Decoder",
          url: "https://30tools.com/base64-tool",
          description:
            "Encode and decode Base64 strings with support for files and text. Developer-friendly interface.",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "1456",
          },
        },
      ],
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are the tools on 30tools really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all tools on 30tools are completely free to use. No registration, subscription, or payment required. No watermarks are added to your processed files.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to create an account to use the tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No account creation is required. All tools work directly in your browser without any sign-up process. Simply visit the tool page and start using it immediately.",
        },
      },
      {
        "@type": "Question",
        name: "Are my files safe when using 30tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, your privacy is our priority. Most tools process files directly in your browser without uploading to our servers. Your files never leave your device, ensuring complete privacy and security.",
        },
      },
      {
        "@type": "Question",
        name: "What types of tools are available on 30tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer 135+ tools across multiple categories: image processing (compression, conversion, editing), video tools (compression, conversion, trimming), PDF tools (merge, split, compress), text tools (word counter, case converter), developer tools (JSON formatter, Base64 encoder), SEO tools, and many more utilities.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use 30tools on mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! All our tools are fully responsive and work perfectly on smartphones and tablets. The interface adapts to your screen size for optimal usability on any device.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a file size limit for uploads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "File size limits vary by tool type: images up to 50MB, PDFs up to 100MB, videos up to 500MB. These limits accommodate most common use cases while ensuring optimal performance.",
        },
      },
      {
        "@type": "Question",
        name: "Can I process multiple files at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Many of our tools support batch processing. You can upload and process multiple files simultaneously, saving time and increasing productivity.",
        },
      },
      {
        "@type": "Question",
        name: "Do the tools work offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many tools work offline once the page is loaded since processing happens in your browser. However, some features may require an internet connection for optimal functionality.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolsCollectionStructuredData),
        }}
      />
      {includeFAQ && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}
    </>
  );
}
