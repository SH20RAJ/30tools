'use client';

export default function StructuredData() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "30tools",
    "alternateName": "30tools - Free Online Toolkit",
    "url": "https://30tools.com",
    "description": "Fast, free, and privacy-focused tools for image, video, audio, PDF, and text processing. No sign-up required.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://30tools.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://30tools.com/icons/icon-512x512.png",
        "width": 512,
        "height": 512
      }
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com",
    "logo": "https://30tools.com/icons/icon-512x512.png",
    "description": "Free online toolkit with 30+ tools for image, video, audio, PDF, and text processing",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://30tools.com/contact"
    },
    "sameAs": [
      "https://twitter.com/30tools",
      "https://github.com/30tools"
    ]
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://30tools.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://30tools.com/#tools"
      }
    ]
  };

  const toolsCollectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Free Online Tools Collection",
    "description": "Collection of 30+ free online tools for various tasks",
    "url": "https://30tools.com",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 30,
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "position": 1,
          "name": "Color Picker",
          "url": "https://30tools.com/color-picker",
          "description": "Pick colors and get values in all formats with color harmony suggestions",
          "applicationCategory": "DesignApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "SoftwareApplication",
          "position": 2,
          "name": "Password Generator",
          "url": "https://30tools.com/password-generator",
          "description": "Generate secure passwords with customizable options",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "SoftwareApplication",
          "position": 3,
          "name": "QR Code Generator",
          "url": "https://30tools.com/qr-code-generator",
          "description": "Create QR codes for text, URLs, and more",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "SoftwareApplication",
          "position": 4,
          "name": "Image Compressor",
          "url": "https://30tools.com/image-compressor",
          "description": "Compress images without losing quality",
          "applicationCategory": "MultimediaApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "SoftwareApplication",
          "position": 5,
          "name": "PDF Merger",
          "url": "https://30tools.com/pdf-merger",
          "description": "Merge multiple PDF files into one",
          "applicationCategory": "OfficeApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "SoftwareApplication",
          "position": 6,
          "name": "Base64 Encoder",
          "url": "https://30tools.com/base64-tool",
          "description": "Encode and decode Base64 strings",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are the tools on 30tools really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all tools on 30tools are completely free to use. No registration, subscription, or payment required."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account to use the tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No account creation is required. All tools work directly in your browser without any sign-up process."
        }
      },
      {
        "@type": "Question",
        "name": "Are my files safe when using 30tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, your privacy is our priority. Most tools process files directly in your browser without uploading to our servers."
        }
      },
      {
        "@type": "Question",
        "name": "What types of tools are available on 30tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer tools for image processing, video conversion, audio editing, PDF manipulation, text processing, code formatting, and much more."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsCollectionStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}
