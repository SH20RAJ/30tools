import RegexTesterTool from '@/components/tools/code/RegexTesterTool';

export const metadata = {
  title: "Free Regex Tester - Test Regular Expressions Online",
  description: "Test and debug regular expressions instantly. See all matches, groups, and errors in real time. Fast, privacy-first regex tool.",
  keywords: "regex tester, regular expression tester, regex online, test regex, regex tool, regex match, regex debug",
  openGraph: {
    title: "Free Regex Tester - Test Regular Expressions Online",
    description: "Test and debug regular expressions instantly. See all matches, groups, and errors in real time.",
    url: "https://30tools.com/regex-tester",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/regex-tester.jpg",
        width: 1200,
        height: 630,
        alt: "Free Regex Tester"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Regex Tester - Test Regular Expressions Online",
    description: "Test and debug regular expressions instantly. No signup required.",
    images: ["/og-images/regex-tester.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/regex-tester"
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
    'apple-mobile-web-app-title': 'Regex Tester - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function RegexTesterPage() {
  return <RegexTesterTool />;
}
