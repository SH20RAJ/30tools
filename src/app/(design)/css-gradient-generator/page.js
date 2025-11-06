import CSSGradientTool from '@/components/tools/design/CSSGradientTool';

export const metadata = {
  title: "Css Gradient Generator - Free Online Tool | Professional Results",
  description: "Free css gradient generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords: "css gradient generator, linear gradient, radial gradient, css background, web design tools, gradient maker",
  openGraph: {
    title: "CSS Gradient Generator - Free Online Tool",
    description: "Create beautiful CSS gradients with live preview and export options.",
    url: "https://30tools.com/css-gradient-generator",
    images: [
      {
        url: "/og-images/css-gradient-generator.jpg",
        width: 1200,
        height: 630,
        alt: "CSS Gradient Generator Tool"
      }
    ],
  },
,
  twitter: {
    card: "summary_large_image",
    title: "Css Gradient Generator - Free Online Generator | Create Instantly",
    description: "Free css gradient generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
    images: ["/og-images/css-gradient-generator.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/css-gradient-generator"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Css Gradient Generator",
  "description": "Free css gradient generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  "url": "https://30tools.com/css-gradient-generator",
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
  }
};

export default function CSSGradientPage() {
  return <CSSGradientTool />;
}
