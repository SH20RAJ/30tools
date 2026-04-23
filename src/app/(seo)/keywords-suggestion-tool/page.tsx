import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Keywords Suggestion Tool Online – Fast & No Signup | 30tools",
	description: "Free keywords suggestion tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "keywords suggestion tool, free keywords suggestion tool, online keywords suggestion tool, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/keywords-suggestion-tool",
	},
	openGraph: {
		title: "Free Keywords Suggestion Tool Online – Fast & No Signup | 30tools",
		description: "Free keywords suggestion tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/keywords-suggestion-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Keywords Suggestion Tool Online – Fast & No Signup | 30tools",
		description: "Free keywords suggestion tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "keywords-suggestion-tool",
        "name": "Keywords Suggestion Tool",
        "description": "Free keywords suggestion tool tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/keywords-suggestion-tool",
        "extraSlugs": [
                "free-keywords-suggestion-tool-online",
                "keywords-suggestion-tool-tool",
                "check-multiple-keywords",
                "find-bing-keywords"
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
						url: "https://30tools.com/keywords-suggestion-tool",
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
