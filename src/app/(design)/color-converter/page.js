import ColorConverterTool from '@/components/tools/design/ColorConverterTool';

export const metadata = {
  title: 'Color Converter - HEX, RGB, HSL Converter | 30tools',
  description: "Convert Process instantly with our free color converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  keywords: 'color converter, hex to rgb, rgb to hsl, color format converter, hex color converter, css color converter',
  openGraph: {
    title: 'Color Converter - HEX, RGB, HSL Converter | 30tools',
    description: 'Convert colors between HEX, RGB, and HSL formats with live preview.',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Converter - Free Online Converter | Instant Conversion",
    description: "Convert Process instantly with our free color converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
    images: ["/og-images/color-converter.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/color-converter"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Color Converter",
  "description": "Convert Process instantly with our free color converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  "url": "https://30tools.com/color-converter",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
};

export default function ColorConverterPage() {
  return <ColorConverterTool />;
}
