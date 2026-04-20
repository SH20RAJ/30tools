import ToolLayout from "@/components/tools/shared/ToolLayout";
import IndexNowClient from "@/components/tools/general/IndexNowClient";

export const metadata = {
	title: "Free IndexNow Submitter Online - Submit URLs Instantly | 30tools",
	description:
		"Submit your URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol. Speed up indexing for your website 100% free.",
	keywords:
		"indexnow, submit url to bing, instant indexing, search engine indexing, free seo tools, 30tools",
	alternates: {
		canonical: "https://30tools.com/indexnow",
	},
	openGraph: {
		title: "Free IndexNow Submitter Online - Submit URLs Instantly | 30tools",
		description:
			"Submit your URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol. Speed up indexing for your website 100% free.",
		url: "https://30tools.com/indexnow",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free IndexNow Submitter Online - Submit URLs Instantly | 30tools",
		description:
			"Submit your URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol. Speed up indexing for your website 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function IndexNowPage() {
	const tool = {
		id: "indexnow-submitter",
		name: "IndexNow Submitter",
		description: "Submit URLs to Bing, Yandex, and other search engines instantly",
		route: "/indexnow",
		extraSlugs: ["submit-url-to-bing-instantly", "indexnow-api-tool"],
		popular: false,
		category: "utilities",
	};

	const breadcrumbs = [
		{
			name: "Utilities",
			url: "/utilities",
		},
		{
			name: "IndexNow Submitter",
			url: "/indexnow",
		},
	];

	const relatedTools = [
		{
			id: "sitemap-generator",
			name: "Sitemap Generator",
			description: "Generate professional XML sitemaps for your website",
			route: "/sitemap-generator",
			category: "seo",
		},
		{
			id: "seo-audit-tool",
			name: "SEO Audit Tool",
			description: "Analyze your website for SEO optimizations",
			route: "/seo-audit-tool",
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
						name: "IndexNow Submitter",
						description: "Submit URLs to search engines instantly using IndexNow",
						url: "https://30tools.com/indexnow",
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
				<IndexNowClient />
			</ToolLayout>
		</>
	);
}
