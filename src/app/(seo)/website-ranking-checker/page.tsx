import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Website Ranking Checker Online – Fast & No Signup | 30tools",
	description: "Free website ranking checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "website ranking checker, free website ranking checker, online website ranking checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/website-ranking-checker",
	},
	openGraph: {
		title: "Free Website Ranking Checker Online – Fast & No Signup | 30tools",
		description: "Free website ranking checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/website-ranking-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Website Ranking Checker Online – Fast & No Signup | 30tools",
		description: "Free website ranking checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "website-ranking-checker",
        "name": "Website Ranking Checker",
        "description": "Free website ranking checker tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/website-ranking-checker",
        "extraSlugs": [
                "free-website-ranking-checker-online",
                "website-ranking-checker-tool",
                "website-map-maker",
                "check-website-errors",
                "search-ranking-monitor",
                "local-search-ranking"
        ],
        "popular": false,
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
						url: "https://30tools.com/website-ranking-checker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "seo" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
