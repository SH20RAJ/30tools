import URLExtractorTool from '@/components/tools/text/URLExtractorTool';

export const metadata = {
  title: 'URL/Link Extractor - Extract URLs from Text | 30tools',
  description: 'Extract all URLs and links from text, documents, or web pages. Find and extract website links using our free URL extractor tool.',
  keywords: [
    'url extractor',
    'link extractor',
    'extract urls from text',
    'url finder',
    'link finder',
    'extract links',
    'url parser',
    'link parser',
    'website link extractor',
    'extract web links'
  ],
  openGraph: {
    title: 'URL/Link Extractor - Extract URLs from Text | 30tools',
    description: 'Extract all URLs and links from text, documents, or web pages. Find and extract website links using our free URL extractor tool.',
    type: 'website',
    url: 'https://30tools.com/url-extractor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'URL/Link Extractor - Extract URLs from Text | 30tools',
    description: 'Extract all URLs and links from text, documents, or web pages. Find and extract website links using our free URL extractor tool.',
  },
  canonical: 'https://30tools.com/url-extractor',
};

export default function URLExtractorPage() {
  return <URLExtractorTool />;
}