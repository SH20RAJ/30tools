import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Page Speed Test Tool Online - No Signup | 30tools",
	description:
		"Test website page speed and performance. Get detailed insights on Core Web Vitals, loading times, and optimization suggestions. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"page speed test tool, free online tool, no signup, seo, page speed test tool online, 30tools",
	alternates: {
		canonical: "https://30tools.com/page-speed-test",
	},
	openGraph: {
		title: "Free Page Speed Test Tool Online - No Signup | 30tools",
		description:
			"Test website page speed and performance. Get detailed insights on Core Web Vitals, loading times, and optimization suggestions. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/page-speed-test",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Page Speed Test Tool Online - No Signup | 30tools",
		description:
			"Test website page speed and performance. Get detailed insights on Core Web Vitals, loading times, and optimization suggestions. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "page-speed-test",
		name: "Page Speed Test Tool",
		description:
			"Test website page speed and performance. Get detailed insights on Core Web Vitals, loading times, and optimization suggestions.",
		route: "/page-speed-test",
		extraSlugs: [],
		popular: true,
		category: "seo",
	};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "Page Speed Test Tool",
			url: "/page-speed-test",
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
						name: "Page Speed Test Tool",
						description:
							"Test website page speed and performance. Get detailed insights on Core Web Vitals, loading times, and optimization suggestions.",
						url: "https://30tools.com/page-speed-test",
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
				<div>{/* Tool component placeholder */}</div>
			</ToolLayout>
		</>
	);
}
