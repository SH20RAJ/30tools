import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Complete SEO Audit Tool Online - No Signup | 30tools",
	description:
		"Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"complete seo audit tool, free online tool, no signup, seo, complete seo audit tool online, 30tools",
	alternates: {
		canonical: "https://30tools.com/seo-audit-tool",
	},
	openGraph: {
		title: "Free Complete SEO Audit Tool Online - No Signup | 30tools",
		description:
			"Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/seo-audit-tool",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Complete%20SEO%20Audit%20Tool%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Complete SEO Audit Tool Online - No Signup | 30tools",
		description:
			"Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Complete%20SEO%20Audit%20Tool%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
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
	};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "Complete SEO Audit Tool",
			url: "/seo-audit-tool",
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
						name: "Complete SEO Audit Tool",
						description:
							"Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations.",
						url: "https://30tools.com/seo-audit-tool",
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
				<div className="text-center p-12 bg-muted/20 shed border-border">
					<h3 className="text-xl font-bold mb-2">SEO Audit Tool Ready</h3>
					<p className="text-muted-foreground">The technical audit engine is initializing in your browser.</p>
				</div>
			</ToolLayout>
		</>
	);
}
