import CodeMinifierTool from '@/components/tools/code/CodeMinifierTool';

export const metadata = {
  title: "Free Code Minifier Online - Minify JavaScript, CSS, HTML | 30tools",
  description: "Advanced code minifier for JavaScript, CSS, and HTML. Reduce file sizes, improve website performance, and get detailed compression statistics. Free and secure.",
  keywords: "code minifier, javascript minifier, css minifier, html minifier, code compression, minify js css html, web performance optimization",
  openGraph: {
    title: "Free Code Minifier Online - Optimize JavaScript, CSS, HTML",
    description: "Advanced code minification with detailed analytics. Reduce file sizes and improve website performance.",
    url: "https://30tools.com/code-minifier",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/code-minifier.jpg",
        width: 1200,
        height: 630,
        alt: "Free Code Minifier Online"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Code Minifier Online - Optimize JavaScript, CSS, HTML",
    description: "Minify code with industry-standard algorithms. Get detailed compression statistics.",
    images: ["/og-images/code-minifier.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/code-minifier"
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
  category: 'Code Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Code Minifier - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function CodeMinifierPage() {
  return <CodeMinifierTool />;
}
