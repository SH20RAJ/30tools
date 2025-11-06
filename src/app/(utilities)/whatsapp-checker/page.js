import WhatsAppCheckerTool from '@/components/tools/utilities/WhatsAppCheckerTool';

export const metadata = {
  title: 'WhatsApp Checker - Check if Number is on WhatsApp | 30tools',
  description: 'Check if a phone number is active on WhatsApp. Verify WhatsApp numbers without saving contacts using our free WhatsApp checker tool.',
  keywords: [
    'whatsapp checker',
    'check whatsapp number',
    'whatsapp number checker',
    'verify whatsapp number',
    'whatsapp validator',
    'check if number on whatsapp',
    'whatsapp phone checker',
    'whatsapp verification',
    'whatsapp number validator',
    'check whatsapp contact'
  ],
  openGraph: {
    title: 'WhatsApp Checker - Check if Number is on WhatsApp | 30tools',
    description: 'Check if a phone number is active on WhatsApp. Verify WhatsApp numbers without saving contacts using our free WhatsApp checker tool.',
    type: 'website',
    url: 'https://30tools.com/whatsapp-checker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Checker - Check if Number is on WhatsApp | 30tools',
    description: 'Check if a phone number is active on WhatsApp. Verify WhatsApp numbers without saving contacts using our free WhatsApp checker tool.',
  },
  canonical: 'https://30tools.com/whatsapp-checker',
};

export default function WhatsAppCheckerPage() {
  return <WhatsAppCheckerTool />;
}