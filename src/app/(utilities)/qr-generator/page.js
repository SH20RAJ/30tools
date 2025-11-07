import QrGeneratorTool from '@/components/tools/utilities/QrGeneratorTool'

export const metadata = {
  title: 'QR Code Generator - Free Online QR Code Maker | 30tools',
  description: "Generate Process instantly with our free qr generator. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
  keywords: 'qr code generator, qr code maker, free qr generator, qr code creator, barcode generator, qr scanner, quick response code, vcard qr, wifi qr code',
  openGraph: {
    title: 'Free QR Code Generator - Create QR Codes Instantly',
    description: 'Generate professional QR codes for URLs, text, contact information, and more. High-quality PNG output with customizable sizes and error correction.',
    type: 'website',
    url: 'https://30tools.com/qr-generator',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'QR Code Generator Tool'
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free QR Code Generator - Create QR Codes Instantly',
    description: 'Generate professional QR codes for URLs, text, contact information, and more. High-quality PNG output with customizable sizes.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/qr-generator'
  },
}

export default function QrGeneratorPage() {
  return (
    <>
      <QrGeneratorTool />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'QR Code Generator',
            description: 'Free online QR code generator for creating high-quality QR codes instantly',
            url: 'https://30tools.com/qr-generator',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            permissions: 'browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            featureList: [
              'Instant QR code generation',
              'Multiple size options',
              'Error correction levels',
              'High-quality PNG output',
              'No watermarks',
              'Unlimited usage'
            ],
            creator: {
              '@type': 'Organization',
              name: '30tools',
              url: 'https://30tools.com'
            },
          })
        }}
      />
    </>
  )
}
