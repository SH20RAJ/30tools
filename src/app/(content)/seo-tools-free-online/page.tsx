import ToolLayout from "@/components/tools/shared/ToolLayout";
import Fragment from "react";


export const metadata = {
	title: "SEO Tools Free Online - Ranked Picks (2026) | 30tools Expert Guide",
	description: "Use free online SEO tools for audits, keyword planning, metadata generation, and indexing checks. Built for creators, agencies, and developers.",
	keywords: "seo tools free online - ranked picks (2026), seo tools free online - ranked picks (2026) guide, 30tools",
	alternates: {
		canonical: "https://30tools.com/seo-tools-free-online",
	},
	openGraph: {
		title: "SEO Tools Free Online - Ranked Picks (2026) | 30tools Expert Guide",
		description: "Use free online SEO tools for audits, keyword planning, metadata generation, and indexing checks. Built for creators, agencies, and developers.",
		url: "https://30tools.com/seo-tools-free-online",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "SEO Tools Free Online - Ranked Picks (2026) | 30tools Expert Guide",
		description: "Use free online SEO tools for audits, keyword planning, metadata generation, and indexing checks. Built for creators, agencies, and developers.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "seo-tools-free-online",
        "name": "SEO Tools Free Online - Ranked Picks (2026)",
        "description": "Use free online SEO tools for audits, keyword planning, metadata generation, and indexing checks. Built for creators, agencies, and developers.",
        "route": "/seo-tools-free-online",
        "extraSlugs": [],
        "popular": false,
        "category": "content"
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
						url: "https://30tools.com/seo-tools-free-online",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "content" }}>
				<div className='min-h-[100px]'  />
			</ToolLayout>
		</>
	);
}
