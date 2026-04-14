import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Google Index Checker Online - No Signup | 30tools",
	description:
		"Free google index checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"google index checker, free online tool, no signup, seo, google index checker online, 30tools",
	alternates: {
		canonical: "https://30tools.com/google-index-checker",
	},
	openGraph: {
		title: "Free Google Index Checker Online - No Signup | 30tools",
		description:
			"Free google index checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/google-index-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Google Index Checker Online - No Signup | 30tools",
		description:
			"Free google index checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "google-index-checker",
		name: "Google Index Checker",
		description:
			"Free google index checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/google-index-checker",
		extraSlugs: [
			"bulk-google-index-checker",
			"free-google-index-checker-online",
			"google-index-checker-tool",
			"google-index-status",
			"website-index-checker",
		],
		popular: false,
		category: "seo",
	};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "Google Index Checker",
			url: "/google-index-checker",
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
						name: "Google Index Checker",
						description:
							"Free google index checker tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/google-index-checker",
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
				<ToolPlaceholderPage toolId="google-index-checker" />
			</ToolLayout>
		</>
	);
}
