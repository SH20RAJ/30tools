import SitemapGeneratorTool from "@/components/tools/seo/SitemapGeneratorTool";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Advanced Sitemap Generator Online - No Signup | 30tools",
	description:
		"Generate XML sitemaps for any website URL. Crawl websites and create comprehensive sitemaps with proper formatting and metadata. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"advanced sitemap generator, free online tool, no signup, seo, advanced sitemap generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/sitemap-generator",
	},
	openGraph: {
		title: "Free Advanced Sitemap Generator Online - No Signup | 30tools",
		description:
			"Generate XML sitemaps for any website URL. Crawl websites and create comprehensive sitemaps with proper formatting and metadata. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/sitemap-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Advanced Sitemap Generator Online - No Signup | 30tools",
		description:
			"Generate XML sitemaps for any website URL. Crawl websites and create comprehensive sitemaps with proper formatting and metadata. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
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
	};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "Advanced Sitemap Generator",
			url: "/sitemap-generator",
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
		{
			id: "seo-audit-tool",
			name: "Complete SEO Audit Tool",
			description:
				"Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations.",
			route: "/seo-audit-tool",
			extraSlugs: [
				"bing-seo-keywords",
				"local-business-seo",
				"local-seo-tool",
				"seo-competition-analysis",
				"seo-position-tracker",
				"seo-tools",
				"technical-seo-audit",
				"website-meta-audit",
				"website-seo-audit",
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
						name: "Advanced Sitemap Generator",
						description:
							"Generate XML sitemaps for any website URL. Crawl websites and create comprehensive sitemaps with proper formatting and metadata.",
						url: "https://30tools.com/sitemap-generator",
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
				<SitemapGeneratorTool />
			</ToolLayout>
		</>
	);
}
