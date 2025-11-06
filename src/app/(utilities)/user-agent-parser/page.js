import UserAgentParserTool from '@/components/tools/utilities/UserAgentParserTool';

export const metadata = {
  title: 'Online User Agent Parser - Analyze Browser Information | 30tools',
  description: 'Parse and analyze user agent strings online. Get detailed browser, OS, and device information from any user agent string with our free parser tool.',
  keywords: [
    'user agent parser',
    'user agent analyzer',
    'parse user agent',
    'browser detection',
    'user agent string parser',
    'browser information',
    'device detection',
    'operating system detection',
    'user agent decoder',
    'browser fingerprinting'
  ],
  openGraph: {
    title: 'Online User Agent Parser - Analyze Browser Information | 30tools',
    description: 'Parse and analyze user agent strings online. Get detailed browser, OS, and device information from any user agent string with our free parser tool.',
    type: 'website',
    url: 'https://30tools.com/user-agent-parser',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online User Agent Parser - Analyze Browser Information | 30tools',
    description: 'Parse and analyze user agent strings online. Get detailed browser, OS, and device information from any user agent string with our free parser tool.',
  },
  canonical: 'https://30tools.com/user-agent-parser',
};

export default function UserAgentParserPage() {
  return <UserAgentParserTool />;
}