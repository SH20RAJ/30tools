import CodeFormatterTool from '@/components/tools/code/CodeFormatterTool';

export const metadata = {
  title: "Code Formatter - Prettier JavaScript, CSS, HTML, TypeScript",
  description: "Format and beautify JavaScript, TypeScript, CSS, and HTML code with Prettier engine. Professional code formatting with customizable style options. Free and secure.",
  keywords: "code formatter, prettier online, javascript formatter, css formatter, html formatter, typescript formatter, code beautifier, code style",
  openGraph: {
    title: "Code Formatter - 30tools",
    description: "Professional code formatting with Prettier engine and customizable style options.",
    url: "https://30tools.com/code-formatter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/code-formatter.jpg",
        width: 1200,
        height: 630,
        alt: "Free Code Formatter Online"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Formatter - 30tools",
    description: "Format code with industry-standard Prettier engine. Customizable options for perfect styling.",
    images: ["/og-images/code-formatter.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/code-formatter"
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
    'apple-mobile-web-app-title': 'Code Formatter - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function CodeFormatterPage() {
  return <CodeFormatterTool />;
}
