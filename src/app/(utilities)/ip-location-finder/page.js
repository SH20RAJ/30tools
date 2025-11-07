import IPLocationFinderTool from '@/components/tools/utilities/IPLocationFinderTool';

export const metadata = {
  title: 'What Is My IP Location - IP Address Lookup Tool | 30tools',
  description: 'Find your IP address location instantly. Get detailed information about IP geolocation, ISP, country, city, and more with our free IP lookup tool.',
  keywords: [
    "ip location finder",
    "ip location finder online",
    "free ip location finder",
    "ip location finder tool",
    "online ip location finder free",
    "professional ip location finder",
    "ip location finder online tool",
    "best ip location finder free",
    "ip location finder web app",
    "ip location finder utility",
    "online tool",
    "free utility",
    "web application"
  ],
  openGraph: {
    title: 'What Is My IP Location - IP Address Lookup Tool | 30tools',
    description: 'Find your IP address location instantly. Get detailed information about IP geolocation, ISP, country, city, and more with our free IP lookup tool.',
    type: 'website',
    url: 'https://30tools.com/ip-location-finder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is My IP Location - IP Address Lookup Tool | 30tools',
    description: 'Find your IP address location instantly. Get detailed information about IP geolocation, ISP, country, city, and more with our free IP lookup tool.',
  },
  canonical: 'https://30tools.com/ip-location-finder',
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Ip Location Finder",
  "description": "Professional ip location finder tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/ip-location-finder",
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
  },
};

export default function IPLocationFinderPage() {
  return <IPLocationFinderTool />;
}