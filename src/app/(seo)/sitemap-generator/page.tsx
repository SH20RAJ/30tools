import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";


export const metadata = {
	title: "Free Advanced Sitemap Generator Online – Fast & No Signup | 30tools",
	description: "Generate XML sitemaps for any website URL. Crawl websites and create comprehensive sitemaps with proper formatting and metadata. 100% free, fast, and no signup required.",
	keywords: "advanced sitemap generator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/sitemap-generator",
	},
	openGraph: {
		title: "Free Advanced Sitemap Generator Online – Fast & No Signup | 30tools",
		description: "Generate XML sitemaps for any website URL. Crawl websites and create comprehensive sitemaps with proper formatting and metadata. 100% free, fast, and no signup required.",
		url: "https://30tools.com/sitemap-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Advanced Sitemap Generator Online – Fast & No Signup | 30tools",
		description: "Generate XML sitemaps for any website URL. Crawl websites and create comprehensive sitemaps with proper formatting and metadata. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "sitemap-generator",
        "name": "Advanced Sitemap Generator",
        "description": "Generate XML sitemaps for any website URL. Crawl websites and create comprehensive sitemaps with proper formatting and metadata.",
        "route": "/sitemap-generator",
        "extraSlugs": [
                "extract-urls-from-sitemap",
                "google-sitemap-generator",
                "xml-sitemap-builder"
        ],
        "popular": true,
        "category": "seo"
};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/sitemap-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "seo" }}>
				<BuiltInSafeHttp toolId="sitemap-generator" />
			</ToolLayout>
		</>
	);
}
