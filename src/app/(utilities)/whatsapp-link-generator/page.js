import WhatsAppLinkGeneratorTool from '@/components/tools/utilities/WhatsAppLinkGeneratorTool';

export const metadata = {
  title: 'WhatsApp Link Generator - Create Click to Chat Links | 30tools',
  description: 'Generate WhatsApp click-to-chat links with custom messages. Create direct WhatsApp links for easy customer contact and support.',
  keywords: [
    "whatsapp link generator",
    "whatsapp link generator online",
    "free whatsapp link generator",
    "whatsapp link generator tool",
    "online whatsapp link generator free",
    "professional whatsapp link generator",
    "whatsapp link generator online tool",
    "best whatsapp link generator free",
    "whatsapp link generator web app",
    "whatsapp link generator utility",
    "online tool",
    "free utility",
    "web application"
  ],
  openGraph: {
    title: 'WhatsApp Link Generator - Create Click to Chat Links | 30tools',
    description: 'Generate WhatsApp click-to-chat links with custom messages. Create direct WhatsApp links for easy customer contact and support.',
    type: 'website',
    url: 'https://30tools.com/whatsapp-link-generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Link Generator - Create Click to Chat Links | 30tools',
    description: 'Generate WhatsApp click-to-chat links with custom messages. Create direct WhatsApp links for easy customer contact and support.',
  },
  canonical: 'https://30tools.com/whatsapp-link-generator',
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Whatsapp Link Generator",
  "description": "Free whatsapp link generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  "url": "https://30tools.com/whatsapp-link-generator",
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

export default function WhatsAppLinkGeneratorPage() {
  return <WhatsAppLinkGeneratorTool />;
}