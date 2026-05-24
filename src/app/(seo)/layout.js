

import { generateCollectionPageSchema } from "@/lib/seo";

export const metadata = {
	title: "Free SEO Tools Online - No Signup | 30tools",
	description:
		"Boost your search rankings with 17+ free SEO tools — site audit, keyword research, backlink checker, meta tag generator, schema markup builder, robots.txt & sitemap generator. No signup, 100% browser-based analysis.",
	keywords:
		"seo tools, keyword research tool, backlink checker, seo audit tool, free seo software, google seo tools, website analyzer, meta tag generator, schema markup generator, robots.txt generator, sitemap generator, serp preview, seo score checker, on page seo checker, free online seo tools",
	openGraph: {
		title: "Free SEO Tools Online - No Signup | 30tools",
		description:
			"17+ free SEO tools for site audits, keyword research, schema markup, and meta tag optimization. No signup required.",
		url: "https://30tools.com/seo-tools",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1024,
				height: 541,
				alt: "Free SEO Tools Collection",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free SEO Tools Online - No Signup | 30tools",
		description:
			"Boost your rankings with our free SEO tools. Keyword planner, backlink checker, site audit, and more.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

const collectionPageSchema = generateCollectionPageSchema('seo', {
	name: 'Free SEO Tools Collection',
	description: 'A complete suite of free SEO tools for keyword research, backlink analysis, and website auditing.'
});

export default function SEOToolsLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-background">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(collectionPageSchema),
				}}
			/>
			<main className="flex-1">{children}</main>
		</div>
	);
}
