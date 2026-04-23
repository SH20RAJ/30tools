import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Hashtag Extractor Online – Fast & No Signup | 30tools",
	description: "Extract all hashtags from any YouTube video instantly. Our free online tool helps you analyze competitor tagging strategies and optimize your own video SEO for better reach. 100% free, fast, and no signup required.",
	keywords: "youtube hashtag extractor, free youtube hashtag extractor, online youtube hashtag extractor, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-hashtag-extractor",
	},
	openGraph: {
		title: "Free YouTube Hashtag Extractor Online – Fast & No Signup | 30tools",
		description: "Extract all hashtags from any YouTube video instantly. Our free online tool helps you analyze competitor tagging strategies and optimize your own video SEO for better reach. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-hashtag-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Hashtag Extractor Online – Fast & No Signup | 30tools",
		description: "Extract all hashtags from any YouTube video instantly. Our free online tool helps you analyze competitor tagging strategies and optimize your own video SEO for better reach. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-hashtag-extractor",
        "name": "YouTube Hashtag Extractor",
        "description": "Extract all hashtags from any YouTube video instantly. Our free online tool helps you analyze competitor tagging strategies and optimize your own video SEO for better reach.",
        "route": "/youtube-hashtag-extractor",
        "extraSlugs": [
                "free-youtube-hashtag-extractor-online",
                "youtube-hashtag-extractor-tool",
                "get-youtube-video-hashtags"
        ],
        "popular": false,
        "category": "youtube"
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
						url: "https://30tools.com/youtube-hashtag-extractor",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
