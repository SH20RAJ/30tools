import Image from "next/image";
// ... (imports remain)
import { Toaster } from "sonner";
// import PWAInstallPrompt from "@/components/shared/PWAInstallPrompt";
import StructuredData from "@/components/shared/StructuredData";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { getAllTools } from "@/constants/tools-utils";
import "./globals.css";
import Script from "next/script";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://30tools.com";
const TOOL_COUNT = getAllTools().length;
const DEFAULT_DESCRIPTION = `Professional online toolkit with ${TOOL_COUNT}+ free tools for image compression, PDF editing, video conversion, SEO analysis, developer utilities, and more. No registration required. Privacy-focused, fast, and secure.`;

const siteVerification = {
	...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
		? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
		: {}),
	...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
		? { yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION }
		: {}),
	...(process.env.NEXT_PUBLIC_YAHOO_VERIFICATION
		? { yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION }
		: {}),
	...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
		? {
				other: {
					"msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
				},
			}
		: {}),
};

export async function generateMetadata() {
	const lang = "en";
	
	const languages = {
		en: "/?lang=en",
		es: "/?lang=es",
		fr: "/?lang=fr",
		de: "/?lang=de",
		it: "/?lang=it",
		pt: "/?lang=pt",
		hi: "/?lang=hi",
		ja: "/?lang=ja",
		zh: "/?lang=zh",
		ko: "/?lang=ko",
		ru: "/?lang=ru",
		ar: "/?lang=ar",
		tr: "/?lang=tr",
		vi: "/?lang=vi",
		id: "/?lang=id",
		th: "/?lang=th",
		nl: "/?lang=nl",
		pl: "/?lang=pl",
		"x-default": "/",
	};

	return {
		title: {
			default: `30tools - ${TOOL_COUNT}+ Free Online Tools | Image, PDF, Video, SEO & Developer Tools`,
			template: "%s | 30tools - Free Online Toolkit",
		},
		description: DEFAULT_DESCRIPTION,
		keywords: [
			"free online tools", "image compressor", "pdf tools", "video converter", "seo tools", "developer tools"
		].join(", "),
		authors: [{ name: "30tools Team", url: "https://30tools.com" }],
		creator: "30tools",
		publisher: "30tools",
		category: "Technology",
		metadataBase: new URL(SITE_URL),
		alternates: {
			canonical: `/?lang=${lang}`,
			languages,
		},
		openGraph: {
			type: "website",
			locale: lang === 'en' ? "en_US" : lang,
			url: SITE_URL,
			siteName: "30tools",
			images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
		},
		twitter: {
			card: "summary_large_image",
			site: "@30tools",
		},
		robots: { index: true, follow: true },
		verification: siteVerification,
		manifest: "/manifest.json",
		icons: {
			icon: [{ url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" }],
		},
	};
}

export default async function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5"
				/>

				{/* Preconnect for performance */}
				<link
					rel="preconnect"
					href="https://pagead2.googlesyndication.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="preconnect"
					href="https://www.googletagmanager.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="preconnect"
					href="https://www.clarity.ms"
					crossOrigin="anonymous"
				/>
				<link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />

				<meta httpEquiv="Content-Language" content="en" />

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
				<link rel="alternate" type="text/plain" title="30tools LLM Index" href="/llms.txt" />

				{/* Alternate */}
				<link
					rel="alternate"
					type="application/rss+xml"
					title="30tools RSS Feed"
					href="/feed.xml"
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
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
					crossOrigin="anonymous"
				/>
				{/* Clarity Tracking Code */}
				<Script
					id="clarity-tracking"
					strategy="lazyOnload"
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
			</head>
			<body className={`${openSans.variable} font-sans antialiased`}>
				<ThemeProvider>
					<StructuredData includeFAQ={false} />
					{children}
					{/* <PWAInstallPrompt /> */}
					<Toaster />
					<div className="sr-only">
						<Image
							src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2F30tools.com%2F&countColor=%23263759&style=flat-square"
							alt="Visitor badge"
							width={200}
							height={20}
							unoptimized
						/>
					</div>
				</ThemeProvider>

				<script
					defer
					src="https://assets.onedollarstats.com/stonks.js"
				></script>
			</body>
		</html>
	);
}
