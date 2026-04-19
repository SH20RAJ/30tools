import VisualSitemapTool from "@/components/tools/seo/VisualSitemapTool";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Visual Sitemap Generator Online - No Signup | 30tools",
	description:
		"Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"visual sitemap generator, free online tool, no signup, seo, visual sitemap generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/visual-sitemap",
	},
	openGraph: {
		title: "Free Visual Sitemap Generator Online - No Signup | 30tools",
		description:
			"Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/visual-sitemap",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Visual%20Sitemap%20Generator%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Visual Sitemap Generator Online - No Signup | 30tools",
		description:
			"Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Visual%20Sitemap%20Generator%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "visual-sitemap",
		name: "Visual Sitemap Generator",
		description:
			"Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy.",
		route: "/visual-sitemap",
		extraSlugs: ["visual-shadow-generator"],
		popular: true,
		category: "seo",
	};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "Visual Sitemap Generator",
			url: "/visual-sitemap",
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
						name: "Visual Sitemap Generator",
						description:
							"Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy.",
						url: "https://30tools.com/visual-sitemap",
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
				<VisualSitemapTool />
			</ToolLayout>
		</>
	);
}
