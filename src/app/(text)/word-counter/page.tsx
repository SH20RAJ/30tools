import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Word Counter Online – Fast & No Signup | 30tools",
	description: "Count words, characters, sentences, and paragraphs in your text instantly. Our free online Word Counter also provides estimated reading time and text analysis. Fast and private. 100% free, fast, and no signup required.",
	keywords: "word counter, free word counter, online word counter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/word-counter",
	},
	openGraph: {
		title: "Free Word Counter Online – Fast & No Signup | 30tools",
		description: "Count words, characters, sentences, and paragraphs in your text instantly. Our free online Word Counter also provides estimated reading time and text analysis. Fast and private. 100% free, fast, and no signup required.",
		url: "https://30tools.com/word-counter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Word Counter Online – Fast & No Signup | 30tools",
		description: "Count words, characters, sentences, and paragraphs in your text instantly. Our free online Word Counter also provides estimated reading time and text analysis. Fast and private. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "word-counter",
        "name": "Word Counter",
        "description": "Count words, characters, sentences, and paragraphs in your text instantly. Our free online Word Counter also provides estimated reading time and text analysis. Fast and private.",
        "route": "/word-counter",
        "extraSlugs": [
                "character-counter",
                "essay-word-counter",
                "free-word-counter-online",
                "letter-counter",
                "word-counter-tool",
                "analyze-text-length"
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
						url: "https://30tools.com/word-counter",
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
