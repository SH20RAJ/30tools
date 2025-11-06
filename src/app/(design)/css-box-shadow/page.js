import CSSBoxShadow from "@/components/tools/design/CSSBoxShadowTool";

export const metadata = {
  title: 'CSS Box Shadow Generator - Create CSS Shadows | 30tools',
  description: "Professional css box shadow with instant results. Free online tool for students, professionals, and businesses worldwide.",
  keywords: 'css box shadow, box shadow generator, css shadow, shadow effects, css generator, web design',
  openGraph: {
    title: 'CSS Box Shadow Generator - Create CSS Shadows | 30tools',
    description: 'Generate CSS box-shadow effects visually.',
    type: 'website',
  },
,
  twitter: {
    card: "summary_large_image",
    title: "Css Box Shadow - Free Online Tool | Professional Results",
    description: "Professional css box shadow tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/css-box-shadow.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/css-box-shadow"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Css Box Shadow",
  "description": "Professional css box shadow tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/css-box-shadow",
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

export default function CSSBoxShadowPage() {
  return <CSSBoxShadow />;
}
