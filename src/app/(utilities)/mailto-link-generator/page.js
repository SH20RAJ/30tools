import MailtoLinkGeneratorTool from '@/components/tools/utilities/MailtoLinkGeneratorTool';

export const metadata = {
  title: 'Mailto Link Generator - Create Email Links | 30tools',
  description: 'Generate mailto links with subject, body, CC, and BCC fields. Create clickable email links for websites with our free mailto link generator tool.',
  keywords: [
    'mailto link generator',
    'email link generator',
    'mailto creator',
    'email link creator',
    'html mailto',
    'clickable email link',
    'email link builder',
    'mailto url generator',
    'contact link generator',
    'email address link'
  ],
  openGraph: {
    title: 'Mailto Link Generator - Create Email Links | 30tools',
    description: 'Generate mailto links with subject, body, CC, and BCC fields. Create clickable email links for websites with our free mailto link generator tool.',
    type: 'website',
    url: 'https://30tools.com/mailto-link-generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mailto Link Generator - Create Email Links | 30tools',
    description: 'Generate mailto links with subject, body, CC, and BCC fields. Create clickable email links for websites with our free mailto link generator tool.',
  },
  canonical: 'https://30tools.com/mailto-link-generator',
};

export default function MailtoLinkGeneratorPage() {
  return <MailtoLinkGeneratorTool />;
}