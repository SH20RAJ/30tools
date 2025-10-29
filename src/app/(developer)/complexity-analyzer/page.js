import ComplexityAnalyzer from '@/components/tools/developer/ComplexityAnalyzer';

export const metadata = {
  title: 'Time & Space Complexity Analyzer - AI Code Analysis',
  description: 'Analyze the time and space complexity of your code with AI-powered analysis. Get detailed Big O notation, optimization suggestions, and algorithm insights for any programming language.',
  keywords: [
    'time complexity analyzer',
    'space complexity',
    'big o notation',
    'algorithm analysis',
    'code complexity',
    'performance analysis',
    'ai code analyzer',
    'algorithm optimization',
    'computational complexity',
    'code efficiency',
    'pollinations ai',
    'free complexity tool'
  ],
  authors: [{ name: '30tools' }],
  creator: '30tools',
  publisher: '30tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://30tools.com'),
  alternates: {
    canonical: '/complexity-analyzer',
  },
  openGraph: {
    title: 'Time & Space Complexity Analyzer - AI-Powered Code Analysis',
    description: 'Analyze your code\'s time and space complexity with AI. Get Big O notation, performance insights, and optimization suggestions for any programming language.',
    url: '/complexity-analyzer',
    siteName: '30tools',
    type: 'website',
    images: [
      {
        url: '/og-complexity-analyzer.png',
        width: 1200,
        height: 630,
        alt: 'Time & Space Complexity Analyzer Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time & Space Complexity Analyzer - AI Code Analysis',
    description: 'Analyze code complexity with AI. Get Big O notation, performance insights, and optimization suggestions.',
    images: ['/og-complexity-analyzer.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ComplexityAnalyzerPage() {
  return <ComplexityAnalyzer />;
}