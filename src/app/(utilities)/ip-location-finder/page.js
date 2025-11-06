import IPLocationFinderTool from '@/components/tools/utilities/IPLocationFinderTool';

export const metadata = {
  title: 'What Is My IP Location - IP Address Lookup Tool | 30tools',
  description: 'Find your IP address location instantly. Get detailed information about IP geolocation, ISP, country, city, and more with our free IP lookup tool.',
  keywords: [
    'what is my ip',
    'ip location finder',
    'ip address lookup',
    'my ip address',
    'ip geolocation',
    'find ip location',
    'ip location tool',
    'ip tracker',
    'check my ip',
    'ip address checker'
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

export default function IPLocationFinderPage() {
  return <IPLocationFinderTool />;
}