import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Backlink Checker Online - No Signup | 30tools",
	description:
		"Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"backlink checker, free online tool, no signup, seo, backlink checker online, 30tools",
	alternates: {
		canonical: "https://30tools.com/backlink-checker",
	},
	openGraph: {
		title: "Free Backlink Checker Online - No Signup | 30tools",
		description:
			"Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/backlink-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Backlink Checker Online - No Signup | 30tools",
		description:
			"Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "backlink-checker",
		name: "Backlink Checker",
		description:
			"Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data.",
		route: "/backlink-checker",
		extraSlugs: [
			"backlink checker free",
			"check backlinks online",
			"backlink analyzer tool",
			"website backlink checker",
			"seo backlink checker",
			"check website backlinks",
			"free backlink audit",
			"backlink analysis tool",
			"website-backlink-analysis",
		],
		popular: true,
		category: "seo",
	};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "Backlink Checker",
			url: "/backlink-checker",
		},
	];
	const relatedTools = [
		{
			id: "keyword-research-tool",
			name: "Advanced Keyword Research",
			description:
				"Comprehensive keyword research tool with search volume, difficulty, CPC data, and keyword suggestions. Find profitable keywords for SEO.",
			route: "/keyword-research-tool",
			extraSlugs: [
				"advanced-regex-tool",
				"bing-keyword-research",
				"bing-keyword-tool",
				"competitor-keyword-spy",
				"google-keyword-research",
				"keyword-counter-tool",
				"keyword-ideas-bing",
				"keyword-monitoring-tool",
				"keyword-tool-google",
				"long-tail-keyword-tool",
			],
			popular: true,
			category: "seo",
		},
		{
			id: "sitemap-generator",
			name: "Advanced Sitemap Generator",
			description:
				"Generate XML sitemaps for any website URL. Crawl websites and create comprehensive sitemaps with proper formatting and metadata.",
			route: "/sitemap-generator",
			extraSlugs: [
				"extract-urls-from-sitemap",
				"google-sitemap-generator",
				"xml-sitemap-builder",
			],
			popular: true,
			category: "seo",
		},
		{
			id: "broken-link-checker",
			name: "Broken Link Checker",
			description:
				"Find broken links on any website. Check for 404 errors, redirect chains, and link health across entire websites or specific pages.",
			route: "/broken-link-checker",
			extraSlugs: [
				"broken-link-scanner",
				"inbound-link-checker",
				"link-profile-checker",
			],
			popular: true,
			category: "seo",
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
						name: "Backlink Checker",
						description:
							"Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data.",
						url: "https://30tools.com/backlink-checker",
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
				<RelatedTools
					currentTool="backlink-checker"
					category="seo"
					tools={relatedTools}
					title="Explore More SEO Tools"
				/>
			</ToolLayout>
		</>
	);
}
