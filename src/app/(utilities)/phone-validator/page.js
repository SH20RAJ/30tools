import PhoneValidatorTool from '@/components/tools/utilities/PhoneValidatorTool';

export const metadata = {
  title: 'Phone Number Validator - Verify Mobile Numbers | 30tools',
  description: 'Validate phone numbers from any country. Check mobile number format, carrier info, and verify if phone numbers are valid with our free validator tool.',
  keywords: [
    'phone number validator',
    'mobile number validator',
    'phone validation',
    'verify phone number',
    'check phone number',
    'validate mobile number',
    'phone number checker',
    'mobile verification',
    'phone format validator',
    'international phone validator'
  ],
  openGraph: {
    title: 'Phone Number Validator - Verify Mobile Numbers | 30tools',
    description: 'Validate phone numbers from any country. Check mobile number format, carrier info, and verify if phone numbers are valid with our free validator tool.',
    type: 'website',
    url: 'https://30tools.com/phone-validator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phone Number Validator - Verify Mobile Numbers | 30tools',
    description: 'Validate phone numbers from any country. Check mobile number format, carrier info, and verify if phone numbers are valid with our free validator tool.',
  },
  canonical: 'https://30tools.com/phone-validator',
};

export default function PhoneValidatorPage() {
  return <PhoneValidatorTool />;
}