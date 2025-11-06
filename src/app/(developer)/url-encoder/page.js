import URLEncoder from "@/components/tools/developer/URLEncoderTool";

export const metadata = {
  title: 'URL Encoder/Decoder - Encode and Decode URLs | 30tools',
  description: "Professional url encoder for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  keywords: 'url encoder, url decoder, percent encoding, query parameters, url encoding, uri encoding',
  openGraph: {
    title: 'URL Encoder/Decoder - Encode and Decode URLs | 30tools',
    description: 'Encode and decode URLs and query parameters.',
    type: 'website',
  },
,
  twitter: {
    card: "summary_large_image",
    title: "Url Encoder - Free Developer Tool | Professional Coding",
    description: "Professional url encoder for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
    images: ["/og-images/url-encoder.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/url-encoder"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Url Encoder",
  "description": "Professional url encoder for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  "url": "https://30tools.com/url-encoder",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function URLEncoderPage() {
  return <URLEncoder />;
}
