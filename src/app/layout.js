import { Toaster } from "sonner";
// import PWAInstallPrompt from "@/components/shared/PWAInstallPrompt";
import StructuredData from "@/components/shared/StructuredData";
import ToolSeoStructuredData from "@/components/shared/ToolSeoStructuredData";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { getAllTools } from "@/lib/tools";
import "./globals.css";
import Script from "next/script";
import { AppleNavbar } from "@/components/navigation/AppleNavbar";
import { AppleFooter } from "@/components/footers/AppleFooter";

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

export const metadata = {
	title: {
		default: `30tools - ${TOOL_COUNT}+ Free Online Tools | Image, PDF, Video, SEO & Developer Tools`,
		template: "%s | 30tools - Free Online Toolkit",
	},
	description: DEFAULT_DESCRIPTION,
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
	metadataBase: new URL(SITE_URL),
	alternates: {
		canonical: "/",
		types: {
			"application/rss+xml": [{ url: "/feed.xml", title: "30tools RSS Feed" }],
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_URL,
		siteName: "30tools",
		title: `30tools - ${TOOL_COUNT}+ Free Online Tools | Professional Toolkit for Everyone`,
		description: DEFAULT_DESCRIPTION,
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: `30tools - Professional Free Online Toolkit with ${TOOL_COUNT}+ Tools`,
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
		title: `30tools - ${TOOL_COUNT}+ Free Online Tools | Professional Toolkit`,
		description: DEFAULT_DESCRIPTION,
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
	...(Object.keys(siteVerification).length > 0
		? { verification: siteVerification }
		: {}),
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
};

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
				<link
					rel="alternate"
					type="text/plain"
					title="30tools LLM Index"
					href="/llms.txt"
				/>

				{/* Alternate */}
				<link
					rel="alternate"
					type="application/rss+xml"
					title="30tools RSS Feed"
					href="/feed.xml"
				/>

				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-0LV8F646TM"
				/>
				<script
					id="google-analytics"
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
			<body className="ds-page font-sans antialiased">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<StructuredData includeFAQ={false} />
					<ToolSeoStructuredData />
					<AppleNavbar />
					{children}
					<AppleFooter />
					{/* <PWAInstallPrompt /> */}
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
							loading="lazy"
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
