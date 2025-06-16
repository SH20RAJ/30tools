import { Poppins } from "next/font/google";
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import StructuredData from '@/components/shared/StructuredData';
import { ThemeProvider } from '@/components/theme-provider';
import "./globals.css";
import "./css/cute.css";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "30tools - Free Online Toolkit | 30+ Tools for Image, Video, PDF & More",
    template: "%s | 30tools - Free Online Tools"
  },
  description: "Access 30+ free online tools for image compression, video conversion, PDF editing, password generation, QR codes, and more. No sign-up required. Privacy-focused and fast.",
  keywords: [
    "free online tools",
    "image compressor", 
    "video converter",
    "pdf tools",
    "password generator",
    "qr code generator",
    "color picker",
    "base64 encoder",
    "text tools",
    "file converter",
    "online utilities",
    "web tools",
    "free software",
    "no registration tools"
  ].join(", "),
  authors: [{ name: "30tools", url: "https://30tools.com" }],
  creator: "30tools",
  publisher: "30tools",
  category: "Technology",
  classification: "Online Tools and Utilities",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://30tools.com'),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [
        { url: '/feed.xml', title: '30tools RSS Feed' }
      ]
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://30tools.com',
    siteName: '30tools - Free Online Toolkit',
    title: '30tools - Free Online Toolkit | 30+ Tools for Image, Video, PDF & More',
    description: 'Access 30+ free online tools for image compression, video conversion, PDF editing, password generation, QR codes, and more. No sign-up required.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '30tools - Free Online Toolkit with 30+ Tools',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@30tools',
    creator: '@30tools',
    title: '30tools - Free Online Toolkit | 30+ Tools for Image, Video, PDF & More',
    description: 'Access 30+ free online tools for image compression, video conversion, PDF editing, password generation, QR codes, and more. No sign-up required.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg', color: '#000000' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '30tools',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': '30tools',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="application-name" content="30tools" />
        <meta name="apple-mobile-web-app-title" content="30tools" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Site Links Enhancement */}
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        
        {/* Rich Snippets */}
        <meta property="og:site_name" content="30tools" />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@30tools" />
        <meta name="twitter:creator" content="@30tools" />
        
        {/* Search Box */}
        <link rel="search" type="application/opensearchdescription+xml" title="30tools Search" href="/opensearch.xml" />
        
        {/* Canonical and Alternate */}
        <link rel="canonical" href="https://30tools.com" />
        <link rel="alternate" type="application/rss+xml" title="30tools RSS Feed" href="/feed.xml" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0LV8F646TM"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0LV8F646TM');
            `,
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <StructuredData />
          {children}
          <PWAInstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
