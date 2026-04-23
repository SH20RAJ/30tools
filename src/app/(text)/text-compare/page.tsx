import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Text Compare Online – Fast & No Signup | 30tools",
	description: "Compare two text snippets side-by-side to find differences instantly. Our free online Text Compare tool highlights additions, deletions, and changes with high precision. Secure and browser-based. 100% free, fast, and no signup required.",
	keywords: "text compare, free text compare, online text compare, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-compare",
	},
	openGraph: {
		title: "Free Text Compare Online – Fast & No Signup | 30tools",
		description: "Compare two text snippets side-by-side to find differences instantly. Our free online Text Compare tool highlights additions, deletions, and changes with high precision. Secure and browser-based. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-compare",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Compare Online – Fast & No Signup | 30tools",
		description: "Compare two text snippets side-by-side to find differences instantly. Our free online Text Compare tool highlights additions, deletions, and changes with high precision. Secure and browser-based. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-compare",
        "name": "Text Compare",
        "description": "Compare two text snippets side-by-side to find differences instantly. Our free online Text Compare tool highlights additions, deletions, and changes with high precision. Secure and browser-based.",
        "route": "/text-compare",
        "extraSlugs": [
                "compare-google-fonts",
                "compare-text-online",
                "free-text-compare-online",
                "text-compare-tool",
                "diff-checker-online-free"
        ],
        "popular": false,
        "category": "text"
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
						url: "https://30tools.com/text-compare",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "text" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
