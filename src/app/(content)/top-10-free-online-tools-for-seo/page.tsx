import ToolLayout from "@/components/tools/shared/ToolLayout";
import Fragment from "react";


export const metadata = {
	title: "Top 10 Free Online Tools for SEO (2026) | 30tools Expert Guide",
	description: "Top 10 free SEO tools for keyword research, audits, metadata, indexing checks, and sitemaps. Ranked for speed and daily SEO workflows.",
	keywords: "top 10 free online tools for seo (2026), top 10 free online tools for seo (2026) guide, 30tools",
	alternates: {
		canonical: "https://30tools.com/top-10-free-online-tools-for-seo",
	},
	openGraph: {
		title: "Top 10 Free Online Tools for SEO (2026) | 30tools Expert Guide",
		description: "Top 10 free SEO tools for keyword research, audits, metadata, indexing checks, and sitemaps. Ranked for speed and daily SEO workflows.",
		url: "https://30tools.com/top-10-free-online-tools-for-seo",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Top 10 Free Online Tools for SEO (2026) | 30tools Expert Guide",
		description: "Top 10 free SEO tools for keyword research, audits, metadata, indexing checks, and sitemaps. Ranked for speed and daily SEO workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "top-10-free-online-tools-for-seo",
        "name": "Top 10 Free Online Tools for SEO (2026)",
        "description": "Top 10 free SEO tools for keyword research, audits, metadata, indexing checks, and sitemaps. Ranked for speed and daily SEO workflows.",
        "route": "/top-10-free-online-tools-for-seo",
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
						url: "https://30tools.com/top-10-free-online-tools-for-seo",
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
