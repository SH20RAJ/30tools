
import [...stack]Tool from '@/components/tools/general/[...stack]Tool';

export const metadata = {
  title: "[...stack] - Free Online Tool | Professional Results",
  description: "Professional [...stack] with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords: [
    "[...stack]",
    "[...stack] online",
    "free [...stack]",
    "[...stack] tool",
    "online [...stack] free",
    "professional [...stack]",
    "[...stack] online tool",
    "best [...stack] free",
    "[...stack] web app",
    "[...stack] utility",
    "online tool",
    "free utility",
    "web application"
  ]",
    "[...stack] online",
    "free [...stack]",
    "[...stack] tool",
    "online [...stack] free"
  ].join(", "),
  openGraph: {
    title: "[...stack] - Free Online Tool | Professional Results",
    description: "Professional [...stack] tool. Free online processing with high-quality results. No registration required, instant results.",
    url: "https://30tools.com/[...stack]",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/[...stack].jpg",
        width: 1200,
        height: 630,
        alt: "[...stack] - Free Online Tool | Professional Results"
      },
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "[...stack] - Free Online Tool | Professional Results",
    description: "Professional [...stack] tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/[...stack].jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/[...stack]"
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
  category: 'General Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': '[...stack] - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "[...stack]",
  "description": "Professional [...stack] tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/[...stack]",
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
import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";

export default function Handler(props) {
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
