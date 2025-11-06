import PayPalLinkGeneratorTool from '@/components/tools/utilities/PayPalLinkGeneratorTool';

export const metadata = {
  title: 'PayPal Link Generator - Create Payment Links | 30tools',
  description: 'Generate PayPal payment links for donations, products, and services. Create custom PayPal.me links and payment buttons with our free generator.',
  keywords: [
    'paypal link generator',
    'paypal payment link',
    'paypal.me generator',
    'paypal donation link',
    'paypal button generator',
    'create paypal link',
    'paypal checkout link',
    'paypal payment url',
    'paypal money request',
    'paypal link creator'
  ],
  openGraph: {
    title: 'PayPal Link Generator - Create Payment Links | 30tools',
    description: 'Generate PayPal payment links for donations, products, and services. Create custom PayPal.me links and payment buttons with our free generator.',
    type: 'website',
    url: 'https://30tools.com/paypal-link-generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayPal Link Generator - Create Payment Links | 30tools',
    description: 'Generate PayPal payment links for donations, products, and services. Create custom PayPal.me links and payment buttons with our free generator.',
  },
  canonical: 'https://30tools.com/paypal-link-generator',
};

export default function PayPalLinkGeneratorPage() {
  return <PayPalLinkGeneratorTool />;
}