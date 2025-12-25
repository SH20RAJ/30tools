import { Open_Sans } from "next/font/google";

import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import SocialRedirect from "@/components/shared/SocialRedirect";
import StructuredData from "@/components/shared/StructuredData";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import "./globals.css";
import Script from "next/script";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default:
      "30tools - 135+ Free Online Tools | Image, PDF, Video, SEO & Developer Tools",
    template: "%s | 30tools - Free Online Toolkit",
  },
  description:
    "Professional online toolkit with 135+ free tools for image compression, PDF editing, video conversion, SEO analysis, developer utilities & more. No registration required. Privacy-focused, fast & secure.",
  keywords: [
    // Primary keywords
    "free online tools",
    "image compressor",
    "pdf tools",
    "video converter",
    "seo tools",
    "developer tools",

    // Long-tail keywords
    "compress images online free",
    "pdf merger free online",
    "video to gif converter",
    "password generator secure",
    "qr code generator free",
    "color picker tool",
    "base64 encoder decoder",
    "text case converter",
    "url shortener free",
    "json formatter online",

    // Semantic keywords
    "online utilities",
    "web tools",
    "digital toolkit",
    "file converter",
    "image editor online",
    "document tools",
    "media converter",
    "text tools",
    "productivity tools",
    "browser tools",

    // Technical keywords
    "no registration tools",
    "privacy focused tools",
    "client side processing",
    "secure online tools",
    "professional web tools",
    "instant online tools",
  ].join(", "),
  authors: [{ name: "30tools Team", url: "https://30tools.com" }],
  creator: "30tools",
  publisher: "30tools",
  category: "Technology",
  classification: "Online Tools and Utilities",
  applicationName: "30tools",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://30tools.com"),
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "30tools RSS Feed" }],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://30tools.com",
    siteName: "30tools - Free Online Toolkit",
    title:
      "30tools - 135+ Free Online Tools | Professional Toolkit for Everyone",
    description:
      "Professional online toolkit with 135+ free tools for image compression, PDF editing, video conversion, SEO analysis, developer utilities & more. No registration required.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "30tools - Professional Free Online Toolkit with 135+ Tools",
        type: "image/jpeg",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "30tools - Free Online Tools for Professionals",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@30tools",
    creator: "@30tools",
    title: "30tools - 135+ Free Online Tools | Professional Toolkit",
    description:
      "Professional online toolkit with 135+ free tools. Image compression, PDF editing, video conversion, SEO analysis & more. No registration required.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-search-console-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "30tools",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "30tools",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Ezoic Privacy & Header Scripts */}
        <Script
          src="https://cmp.gatekeeperconsent.com/min.js"
          strategy="beforeInteractive"
          data-cfasync="false"
        />
        <Script
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          strategy="beforeInteractive"
          data-cfasync="false"
        />
        <Script
          src="//www.ezojs.com/ezoic/sa.min.js"
          strategy="beforeInteractive"
        />
        <Script id="ezoic-init" strategy="beforeInteractive">
          {`window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd = ezstandalone.cmd || [];`}
        </Script>

        {/* Enhanced SEO Meta Tags */}
        <meta name="application-name" content="30tools" />
        <meta name="apple-mobile-web-app-title" content="30tools" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Site Links Enhancement */}
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-1828915420581549"
        ></meta>
        {/* Rich Snippets */}
        <meta property="og:site_name" content="30tools" />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@30tools" />
        <meta name="twitter:creator" content="@30tools" />

        {/* Search Box */}
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="30tools Search"
          href="/opensearch.xml"
        />

        {/* Alternate */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="30tools RSS Feed"
          href="/feed.xml"
        />

        {/* Preconnect for performance */}


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
        {/* Clarity Tracking Code */}
        <Script
          id="clarity-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uh6y61lx9p");
            `,
          }}
        />
        <Script id="ezoic-rewarded-ads" strategy="afterInteractive">
          {`
            window.ezRewardedAds = window.ezRewardedAds || {};
            window.ezRewardedAds.cmd = window.ezRewardedAds.cmd || [];

            // Example: Request a rewarded ad with overlay
            window.ezRewardedAds.cmd.push(function () {
                window.ezRewardedAds.requestWithOverlay(function (result) {
                    if (result.status) {
                        console.log("Ad loaded successfully");
                        if (result.reward) {
                            // User completed the ad and earned reward
                            console.log("User earned reward!");
                            // Add your reward logic here
                        }
                    } else {
                        console.log("Ad failed to load:", result.msg);
                    }
                });
            });
          `}
        </Script>
        <Script id="open-video-player-init" strategy="afterInteractive" data-ezscrex="false" data-cfasync="false">
          {`(window.openVideoPlayers = window.openVideoPlayers || []).push({target: document.currentScript});`}
        </Script>
        <Script
          src="https://open.video/video.js"
          strategy="afterInteractive"
          async
          data-ezscrex="false"
          data-cfasync="false"
        />
      </head>
      <body className={`${openSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <StructuredData includeFAQ={false} />
          {children}
          <PWAInstallPrompt />
          {/* <SocialRedirect /> */}
          <Toaster />
          <a
            className="sr-only"
            href="https://visitorbadge.io/status?path=https%3A%2F%2F30tools.com%2F"
          >
            <img
              src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2F30tools.com%2F&countColor=%23263759&style=flat-square"
              alt="Visitor badge"
              width="200"
              height="20"
            />
          </a>
        </ThemeProvider>

        <script
          defer
          src="https://assets.onedollarstats.com/stonks.js"
        ></script>
      </body>
    </html>
  );
}
