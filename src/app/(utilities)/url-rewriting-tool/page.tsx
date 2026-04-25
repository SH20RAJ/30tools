import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free URL Rewriting Tool Online – Fast & No Signup | 30tools",
	description: "Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "url rewriting tool, free url rewriting tool, online url rewriting tool, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/url-rewriting-tool",
	},
	openGraph: {
		title: "Free URL Rewriting Tool Online – Fast & No Signup | 30tools",
		description: "Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/url-rewriting-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Rewriting Tool Online – Fast & No Signup | 30tools",
		description: "Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "url-rewriting-tool",
        "name": "URL Rewriting Tool",
        "description": "Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/url-rewriting-tool",
        "extraSlugs": [
                "competitor-analysis-tool",
                "content-duplication-tool",
                "crawl-control-tool",
                "css3-gradient-tool",
                "css3-shadow-tool",
                "email-scraper-tool",
                "foreign-exchange-tool",
                "free-url-rewriting-tool-online",
                "gmb-optimization-tool",
                "mobile-optimization-tool",
                "percent-encoding-tool",
                "rank-tracking-tool",
                "regex-cheatsheet-tool",
                "serp-preview-tool",
                "typography-preview-tool",
                "url-decoder-tool",
                "url-rewriting-tool-tool",
                "website-comparison-tool"
        ],
        "popular": false,
        "category": "utilities"
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
						url: "https://30tools.com/url-rewriting-tool",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
