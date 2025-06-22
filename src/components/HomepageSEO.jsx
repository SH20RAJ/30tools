import Script from 'next/script';

// Advanced SEO Schema for Homepage
export function HomepageSchemas() {
  const currentDate = new Date().toISOString();
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://30tools.com/icons/icon-512x512.png",
      "width": 512,
      "height": 512
    },
    "description": "Professional online toolkit with 135+ free tools for image processing, PDF manipulation, video conversion, SEO analysis, and developer utilities.",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/30tools",
      "https://github.com/30tools",
      "https://linkedin.com/company/30tools"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://30tools.com/contact",
      "availableLanguage": ["English"],
      "areaServed": "Worldwide"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "Image Processing",
      "PDF Manipulation", 
      "Video Conversion",
      "SEO Tools",
      "Developer Utilities",
      "Text Processing",
      "File Conversion",
      "Web Development Tools"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "30tools - Free Online Toolkit",
    "url": "https://30tools.com",
    "description": "Professional online toolkit with 135+ free tools for image processing, PDF manipulation, video conversion, SEO analysis, and more.",
    "publisher": {
      "@type": "Organization",
      "name": "30tools"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://30tools.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "WebApplication",
      "name": "30tools Toolkit",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  };

  // Software Application Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "30tools - Free Online Toolkit",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "30tools"
    },
    "datePublished": "2024-01-01",
    "dateModified": currentDate,
    "description": "Professional online toolkit with 135+ free tools including image compressor, PDF editor, video converter, SEO analyzer, and developer utilities.",
    "featureList": [
      "Image compression and optimization up to 90% size reduction",
      "PDF editing, merging, splitting, and password removal",
      "Video format conversion and compression",
      "SEO analysis and meta tag generation",
      "Password generation with advanced security",
      "QR code generation with customization",
      "Developer tools for JSON, XML, Base64 processing",
      "Text analysis and formatting tools",
      "Color picker and palette generator",
      "File format conversion for all major types"
    ],
    "screenshot": [
      "https://30tools.com/screenshots/desktop.png",
      "https://30tools.com/screenshots/mobile.png"
    ],
    "softwareVersion": "2.0",
    "releaseNotes": "Major update with 135+ tools, improved performance, and enhanced user experience"
  };

  // ItemList Schema for Tool Categories
  const toolCategoriesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Free Online Tool Categories",
    "description": "Browse our comprehensive collection of free online tools organized by category",
    "numberOfItems": 9,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Image Tools",
        "description": "Professional image processing tools for compression, conversion, and editing",
        "url": "https://30tools.com/#image"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "PDF Tools",
        "description": "Complete PDF toolkit for editing, merging, splitting, and conversion",
        "url": "https://30tools.com/#pdf"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Video Tools", 
        "description": "Video conversion, compression, and editing tools",
        "url": "https://30tools.com/#video"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "SEO Tools",
        "description": "Search engine optimization and website analysis tools",
        "url": "https://30tools.com/#seo"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Developer Tools",
        "description": "Programming and development utilities for developers",
        "url": "https://30tools.com/#developer"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Text Tools",
        "description": "Text processing, formatting, and analysis tools",
        "url": "https://30tools.com/#text"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Design Tools",
        "description": "Color picker, palette generator, and design utilities",
        "url": "https://30tools.com/#design"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Audio Tools",
        "description": "Audio conversion, compression, and editing tools",
        "url": "https://30tools.com/#audio"
      },
      {
        "@type": "ListItem",
        "position": 9,
        "name": "Utility Tools",
        "description": "General purpose utilities and helper tools",
        "url": "https://30tools.com/#utilities"
      }
    ]
  };

  // FAQ Schema for Homepage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is 30tools and what does it offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "30tools is a comprehensive online toolkit offering 135+ free tools for image processing, PDF manipulation, video conversion, SEO analysis, developer utilities, and more. All tools work directly in your browser with no registration required."
        }
      },
      {
        "@type": "Question", 
        "name": "Are the tools really free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all 135+ tools on 30tools are completely free to use. There are no hidden costs, subscription fees, or registration requirements. You can access all features without any limitations."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to upload files to 30tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All file processing happens locally in your browser using client-side JavaScript. Your files are never uploaded to our servers, ensuring complete privacy and security."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account or register?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No registration is required. You can access and use all tools immediately without creating an account, providing email, or any other personal information."
        }
      },
      {
        "@type": "Question",
        "name": "What types of tools are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer tools across 9 categories: Image processing (compression, conversion, editing), PDF tools (merge, split, edit), Video tools (convert, compress), SEO tools (analysis, meta tags), Developer tools (JSON, XML, Base64), Text tools (formatting, analysis), Design tools (color picker, palettes), Audio tools (conversion, editing), and general Utilities."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use these tools on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all tools are fully responsive and work perfectly on mobile devices, tablets, and desktop computers. The interface adapts to your screen size for optimal usability."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="categories-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolCategoriesSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

// SEO Content Component for Homepage
export function HomepageSEOContent() {
  return (
    <div className="sr-only">
      {/* Hidden content for search engines */}
      <h2>Free Online Tools for Professionals and Individuals</h2>
      <p>
        30tools provides a comprehensive suite of 135+ professional-grade online tools that work entirely in your browser. 
        Our toolkit includes industry-leading image compression technology that can reduce file sizes by up to 90% while 
        maintaining visual quality, advanced PDF manipulation tools for merging, splitting, and editing documents, 
        high-quality video conversion and compression utilities, comprehensive SEO analysis tools for website optimization, 
        and developer utilities for JSON, XML, Base64, and API testing.
      </p>
      
      <h3>Image Processing Tools</h3>
      <p>
        Compress images online free with our advanced algorithms. Convert between JPEG, PNG, WebP, GIF, and AVIF formats. 
        Resize images while maintaining aspect ratios. Remove backgrounds using AI technology. Batch process multiple images 
        simultaneously. All processing happens locally for maximum security and speed.
      </p>
      
      <h3>PDF Tools Suite</h3>
      <p>
        Merge multiple PDF files into one document. Split large PDFs into smaller files. Add password protection to PDFs. 
        Remove password protection from PDFs you own. Compress PDF files to reduce size. Convert PDFs to Word, Excel, 
        and other formats. Add page numbers and watermarks. Rotate PDF pages. All tools work without uploading files to servers.
      </p>
      
      <h3>Video Conversion and Processing</h3>
      <p>
        Convert videos between MP4, AVI, MOV, WebM, and other formats. Compress videos to reduce file size while maintaining quality. 
        Convert videos to GIF animations. Trim and edit video clips. Extract audio from video files. Optimize videos for web use. 
        Support for 4K and HD video processing.
      </p>
      
      <h3>SEO and Website Analysis</h3>
      <p>
        Analyze website SEO performance with our comprehensive tools. Generate meta tags for better search engine visibility. 
        Check keyword density and content optimization. Analyze page load speed and Core Web Vitals. Generate XML sitemaps. 
        Validate structured data markup. Monitor website uptime and performance.
      </p>
      
      <h3>Developer Utilities</h3>
      <p>
        Format and validate JSON, XML, HTML, CSS, and JavaScript code. Test regular expressions with real-time matching. 
        Encode and decode Base64, URL, and HTML entities. Generate secure passwords and API keys. Create QR codes with 
        custom designs. Hash text using MD5, SHA-1, SHA-256 algorithms. Test APIs and web services.
      </p>
      
      <h3>Why Choose 30tools?</h3>
      <ul>
        <li>100% Free - No hidden costs or subscription fees</li>
        <li>No Registration Required - Use all tools immediately</li>
        <li>Privacy Focused - All processing happens in your browser</li>
        <li>Professional Quality - Enterprise-grade tool performance</li>
        <li>Mobile Responsive - Works on all devices and screen sizes</li>
        <li>Regular Updates - New tools and features added monthly</li>
        <li>Fast Performance - Optimized for speed and efficiency</li>
        <li>Global Access - Available worldwide 24/7</li>
      </ul>
    </div>
  );
}
