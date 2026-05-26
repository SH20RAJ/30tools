import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { getAllTools, Tool } from "@/lib/tools";
import { SITE_URL, TOOL_COUNT_STRING, TOOL_COUNT, CATEGORY_COUNT } from "@/constants/config";
import "./globals.css";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

// Dynamic import for Stack Auth - heavy client bundle, only loaded when configured
const StackAuthProvider = dynamic(
	() => import("@/components/shared/StackAuthProvider")
);

// Dynamic imports for below-fold / non-critical layout components
const AppleNavbar = dynamic(
	() => import("@/components/navigation/AppleNavbar").then((mod) => ({ default: mod.AppleNavbar })),
	{ ssr: true }
);
const AppleFooter = dynamic(
	() => import("@/components/footers/AppleFooter").then((mod) => ({ default: mod.AppleFooter })),
	{ ssr: true }
);

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	variable: "--font-inter",
	weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};
const DEFAULT_DESCRIPTION = `Professional online toolkit with ${TOOL_COUNT_STRING} free tools for image compression, PDF editing, video conversion, SEO analysis, developer utilities, text processing, and more. No registration required. Privacy-focused, fast, and secure browser-based processing.`;

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
					"msvalidate.01": [process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION],
				},
			}
		: {}),
};

export const metadata: Metadata = {
	title: {
		default: "Free Online Tools - No Signup | 30tools",
		template: "%s",
	},
	description: `Professional online toolkit with ${TOOL_COUNT_STRING} free tools for image compression, PDF editing, video conversion, SEO analysis, developer utilities, text processing, and more. Free to use with no signup required.`,
	keywords: [
		// Primary keywords
		"free online tools",
		"image compressor",
		"pdf tools",
		"video converter",
		"seo tools",
		"developer tools",
		"online toolkit",

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
		"ai text to speech free",
		"video downloader online",

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
		types: {
			"application/rss+xml": [{ url: "/feed.xml", title: "30tools RSS Feed" }],
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_URL,
		siteName: "30tools",
		title: `30tools - ${TOOL_COUNT_STRING} Free Online Tools | Professional Toolkit for Everyone`,
		description: DEFAULT_DESCRIPTION,
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: `30tools - Professional Free Online Toolkit with ${TOOL_COUNT_STRING} Tools`,
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@30tools",
		creator: "@30tools",
		title: `30tools - ${TOOL_COUNT_STRING} Free Online Tools | Professional Toolkit`,
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	let tools: Tool[] = [];
	try {
		tools = getAllTools();
	} catch (error) {
		console.error("Failed to load tools registry:", error);
	}
	const categoriesMap = new Map();

	for (const tool of tools) {
		const catKey = tool.categoryKey || tool.category;
		if (catKey && !categoriesMap.has(catKey)) {
			const canonicalCategoryHubs: Record<string, string> = {
				image: "/image-tools",
				pdf: "/pdf-tools",
				video: "/video-tools",
				audio: "/audio-tools",
				seo: "/seo-tools",
				text: "/text-tools",
				developer: "/developer-tools",
				utilities: "/other-tools",
				generators: "/generators",
				calculators: "/calculators",
			};
			categoriesMap.set(catKey, {
				label: tool.categoryName || catKey,
				href: canonicalCategoryHubs[catKey] || "/search",
			});
		}
	}
	const categories = Array.from(categoriesMap.values());

	return (
		<html lang="en" suppressHydrationWarning className={inter.variable}>
			<head>
				<meta charSet="utf-8" />

				{/* Preconnect only to the most critical third-party origin */}
				<link
					rel="preconnect"
					href="https://www.googletagmanager.com"
					crossOrigin="anonymous"
				/>
				<link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
				<link rel="dns-prefetch" href="https://www.clarity.ms" />

				<meta httpEquiv="Content-Language" content="en" />

				{/* Enhanced SEO Meta Tags */}
				<meta name="application-name" content="30tools" />
				<meta name="apple-mobile-web-app-title" content="30tools" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="msapplication-tap-highlight" content="no" />

				{/* Robots handled by Next.js metadata API */}
				<meta
					name="google-adsense-account"
					content="ca-pub-1828915420581549"
				></meta>

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

				{/* Global JSON-LD Structured Data: WebSite + Organization */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "30tools",
							alternateName: "30tools - Free Online Toolkit",
							url: SITE_URL,
							description: `Fast, free, and privacy-focused tools for image, video, audio, PDF, SEO, and developer workflows. Explore ${TOOL_COUNT}+ tools with no sign-up required.`,
							publisher: {
								"@type": "Organization",
								name: "30tools",
								url: SITE_URL,
								logo: {
									"@type": "ImageObject",
									url: `${SITE_URL}/icons/icon-512x512.png`,
									width: 512,
									height: 512,
								},
							},
							potentialAction: {
								"@type": "SearchAction",
								target: {
									"@type": "EntryPoint",
									urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
								},
								"query-input": "required name=search_term_string",
							},
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "30tools",
							url: SITE_URL,
							logo: `${SITE_URL}/icons/icon-512x512.png`,
							description: `Free online toolkit with ${TOOL_COUNT}+ tools for image, video, audio, PDF, SEO, and developer workflows.`,
							foundingDate: "2024",
							contactPoint: {
								"@type": "ContactPoint",
								contactType: "customer support",
								url: `${SITE_URL}/contact`,
							},
							sameAs: [
								"https://github.com/sh20raj/30tools",
							],
						}),
					}}
				/>

				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-0LV8F646TM"
					strategy="lazyOnload"
				/>
				<Script id="google-analytics" strategy="lazyOnload">
					{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0LV8F646TM');
            `}
				</Script>
				<Script
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
					strategy="lazyOnload"
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
			<body className={`ds-page font-sans antialiased ${inter.className}`}>
				<StackAuthProvider>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<AppleNavbar />
						{children}
						<AppleFooter categories={categories} />
						<Toaster />
					</ThemeProvider>
				</StackAuthProvider>

				<Script
					src="https://assets.onedollarstats.com/stonks.js"
					strategy="lazyOnload"
				/>
			</body>
		</html>
	);
}
