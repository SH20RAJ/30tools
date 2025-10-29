import FaviconGeneratorTool from '@/components/tools/design/FaviconGeneratorTool';

export const metadata = {
  title: "Free Favicon Generator - Create Favicon from Image",
  description: "Generate favicons for your website from any image. Create all favicon sizes (16x16, 32x32, 180x180, etc.) in seconds. Free favicon generator with instant download.",
  keywords: "favicon generator, create favicon, favicon from image, website icon generator, apple touch icon, android icon, favicon maker online",
  openGraph: {
    title: "Free Favicon Generator Online - Create Favicon from Image",
    description: "Generate favicons for your website from any image. Create all favicon sizes in seconds.",
    url: "https://30tools.com/favicon-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/favicon-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Favicon Generator Online"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Favicon Generator Online - Create Favicon from Image",
    description: "Generate favicons for your website from any image. Perfect for web developers.",
    images: ["/og-images/favicon-generator.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/favicon-generator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Design Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Favicon Generator - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function FaviconGeneratorPage() {
  return <FaviconGeneratorTool />;
}
