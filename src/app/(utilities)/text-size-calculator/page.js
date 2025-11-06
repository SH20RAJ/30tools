import TextSizeCalculatorTool from '@/components/tools/text/TextSizeCalculatorTool';

export const metadata = {
  title: 'Text Size Calculator - Calculate Text Length & Size | 30tools',
  description: 'Calculate text size in bytes, characters, words, and lines. Analyze text length, file size, and get detailed text statistics with our calculator.',
  keywords: [
    'text size calculator',
    'text length calculator',
    'character counter',
    'word counter',
    'text statistics',
    'file size calculator',
    'text analyzer',
    'byte calculator',
    'text metrics',
    'text measurement'
  ],
  openGraph: {
    title: 'Text Size Calculator - Calculate Text Length & Size | 30tools',
    description: 'Calculate text size in bytes, characters, words, and lines. Analyze text length, file size, and get detailed text statistics with our calculator.',
    type: 'website',
    url: 'https://30tools.com/text-size-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text Size Calculator - Calculate Text Length & Size | 30tools',
    description: 'Calculate text size in bytes, characters, words, and lines. Analyze text length, file size, and get detailed text statistics with our calculator.',
  },
  canonical: 'https://30tools.com/text-size-calculator',
};

export default function TextSizeCalculatorPage() {
  return <TextSizeCalculatorTool />;
}