import WhatsAppLinkGeneratorTool from '@/components/tools/utilities/WhatsAppLinkGeneratorTool';

export const metadata = {
  title: 'WhatsApp Link Generator - Create Click to Chat Links | 30tools',
  description: 'Generate WhatsApp click-to-chat links with custom messages. Create direct WhatsApp links for easy customer contact and support.',
  keywords: [
    'whatsapp link generator',
    'whatsapp click to chat',
    'whatsapp chat link',
    'whatsapp url generator',
    'create whatsapp link',
    'whatsapp direct link',
    'whatsapp message link',
    'wa.me link generator',
    'whatsapp business link',
    'whatsapp contact link'
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

export default function WhatsAppLinkGeneratorPage() {
  return <WhatsAppLinkGeneratorTool />;
}