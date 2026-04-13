import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free URL Shortener Online - No Signup | 30tools",
	description:
		"Shorten long URLs for easier sharing 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"url shortener, free online tool, no signup, utilities, url shortener online, 30tools",
	alternates: {
		canonical: "https://30tools.com/url-shortener",
	},
	openGraph: {
		title: "Free URL Shortener Online - No Signup | 30tools",
		description:
			"Shorten long URLs for easier sharing 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/url-shortener",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Shortener Online - No Signup | 30tools",
		description:
			"Shorten long URLs for easier sharing 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "url-shortener",
		name: "URL Shortener",
		description: "Shorten long URLs for easier sharing",
		route: "/url-shortener",
		extraSlugs: ["custom-url-shortener-for-instagram", "free-link-shortener"],
		popular: false,
		category: "utilities",
	};
	const breadcrumbs = [
		{
			name: "Utilities Tools",
			url: "/utilities-tools",
		},
		{
			name: "URL Shortener",
			url: "/url-shortener",
		},
	];
	const relatedTools = [
		{
			id: "adsense-calculator",
			name: "Adsense Calculator",
			description:
				"Free adsense calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/adsense-calculator",
			extraSlugs: ["free-adsense-calculator-online", "adsense-calculator-tool"],
			popular: false,
			category: "utilities",
		},
		{
			id: "age-calculator",
			name: "Age Calculator",
			description:
				"Free age calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/age-calculator",
			extraSlugs: ["free-age-calculator-online", "age-calculator-tool"],
			popular: false,
			category: "utilities",
		},
		{
			id: "angle-converter",
			name: "Angle Converter",
			description:
				"Free angle converter tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/angle-converter",
			extraSlugs: ["free-angle-converter-online", "angle-converter-tool"],
			popular: false,
			category: "utilities",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "URL Shortener",
						description: "Shorten long URLs for easier sharing",
						url: "https://30tools.com/url-shortener",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<URLShortenerTool />
			</ToolLayout>
		</>
	);
}
