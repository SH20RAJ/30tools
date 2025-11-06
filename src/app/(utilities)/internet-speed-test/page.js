import InternetSpeedTestTool from '@/components/tools/utilities/InternetSpeedTestTool';

export const metadata = {
  title: 'Internet Speed Test - Check Upload & Download Speed | 30tools',
  description: 'Test your internet speed for free. Check download speed, upload speed, and ping latency with our accurate internet speed test tool.',
  keywords: [
    'internet speed test',
    'speed test',
    'check internet speed',
    'download speed test',
    'upload speed test',
    'ping test',
    'bandwidth test',
    'connection speed test',
    'network speed test',
    'broadband speed test'
  ],
  openGraph: {
    title: 'Internet Speed Test - Check Upload & Download Speed | 30tools',
    description: 'Test your internet speed for free. Check download speed, upload speed, and ping latency with our accurate internet speed test tool.',
    type: 'website',
    url: 'https://30tools.com/internet-speed-test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Internet Speed Test - Check Upload & Download Speed | 30tools',
    description: 'Test your internet speed for free. Check download speed, upload speed, and ping latency with our accurate internet speed test tool.',
  },
  canonical: 'https://30tools.com/internet-speed-test',
};

export default function InternetSpeedTestPage() {
  return <InternetSpeedTestTool />;
}