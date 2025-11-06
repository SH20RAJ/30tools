import EmailExtractorTool from '@/components/tools/text/EmailExtractorTool';

export const metadata = {
  title: 'Email Extractor - Extract Email Addresses from Text | 30tools',
  description: 'Extract email addresses from any text, documents, or websites. Find and extract all email addresses using our powerful email extractor tool.',
  keywords: [
    'email extractor',
    'extract emails from text',
    'email finder',
    'email harvester',
    'find email addresses',
    'email scraper',
    'extract email addresses',
    'email parser',
    'email address extractor',
    'bulk email extractor'
  ],
  openGraph: {
    title: 'Email Extractor - Extract Email Addresses from Text | 30tools',
    description: 'Extract email addresses from any text, documents, or websites. Find and extract all email addresses using our powerful email extractor tool.',
    type: 'website',
    url: 'https://30tools.com/email-extractor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Extractor - Extract Email Addresses from Text | 30tools',
    description: 'Extract email addresses from any text, documents, or websites. Find and extract all email addresses using our powerful email extractor tool.',
  },
  canonical: 'https://30tools.com/email-extractor',
};

export default function EmailExtractorPage() {
  return <EmailExtractorTool />;
}