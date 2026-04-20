export const metadata = {
	title: "Free Utility Tools Online - No Signup | 30tools",
	description:
		"Free online utility tools: internet speed test, URL shortener, password generator, QR code maker, color converter, unit converter, calculators, and 85+ more. Everything runs in your browser — no signup, no tracking, no limits.",
	keywords:
		"utility tools, internet speed test, url shortener, password generator, qr code generator, color converter, unit converter, bmi calculator, percentage calculator, free online utilities, network tools, link management, online calculator, base converter, hex to rgb",
	openGraph: {
		title: "Free Utility Tools Online - No Signup | 30tools",
		description:
			"85+ free utility tools — speed test, password generator, QR codes, converters, and calculators. No signup required.",
		url: "https://30tools.com/utility-tools",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Free Utility Tools Collection",
			},
		],
		type: "website",
	},
};

const jsonLdSchemas = {
	collectionPage: {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Free Utility Tools Collection",
		description:
			"A collection of essential online utilities to boost your productivity.",
		url: "https://30tools.com/utility-tools",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					url: "https://30tools.com/internet-speed-test",
					name: "Internet Speed Test",
				},
				{
					"@type": "ListItem",
					position: 2,
					url: "https://30tools.com/url-shortener",
					name: "URL Shortener",
				},
				{
					"@type": "ListItem",
					position: 3,
					url: "https://30tools.com/indexnow",
					name: "IndexNow Integration",
				},
			],
		},
	},
};

export default function UtilityToolsLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.collectionPage),
				}}
			/>
			<main className="flex-1">{children}</main>
		</div>
	);
}
