export const metadata = {
	title: "Free Developer Tools Online - No Signup | 30tools",
	description:
		"Free developer tools for JSON formatting, Base64 encoding/decoding, JWT decoding, hash generation, regex testing, and more. Secure client-side processing — your code never leaves the browser. No signup required.",
	keywords:
		"developer tools, json formatter, jwt decoder, base64 encoder, base64 decoder, hash generator, regex tester, css minifier, html validator, free developer utilities, online coding tools, debug jwt, validate json, url encoder, developer toolkit",
	openGraph: {
		title: "Free Developer Tools Online - No Signup | 30tools",
		description:
			"Essential developer tools for JSON, JWT, Base64, hashing, and more. Secure client-side processing with no signup.",
		url: "https://30tools.com/developer-tools",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Free Developer Tools Collection",
			},
		],
		type: "website",
	},
};

const jsonLdSchemas = {
	collectionPage: {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Free Developer Tools Collection",
		description:
			"Essential suite of free online developer utilities for JSON, Base64, and JWT operations.",
		url: "https://30tools.com/developer-tools",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					url: "https://30tools.com/json-formatter",
					name: "JSON Formatter",
				},
				{
					"@type": "ListItem",
					position: 2,
					url: "https://30tools.com/jwt-decoder",
					name: "JWT Decoder",
				},
				{
					"@type": "ListItem",
					position: 3,
					url: "https://30tools.com/base64-tool",
					name: "Base64 Tool",
				},
			],
		},
	},
};

export default function DeveloperToolsLayout({ children }) {
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
