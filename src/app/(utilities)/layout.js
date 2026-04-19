
export const metadata = {
	title: "Free Utility Tools Online - No Signup | 30tools",
	description:
		"Essential utility tools for everyday tasks: Internet Speed Test, URL Shortener, and IndexNow integration. 100% free, no signup required. Fast, free, and accurate.",
	keywords:
		"utility tools, internet speed test, url shortener, indexnow, free online utilities, network tools, link management",
	openGraph: {
		title: "Utility Tools - Free Online Productivity Suite",
		description:
			"Essential utility tools: Speed Test, URL Shortener, and more.",
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
