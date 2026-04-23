import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Tag Extractor Online – Fast & No Signup | 30tools",
	description: "Extract hidden tags from any YouTube video instantly. Our free online tool helps you discover the keywords used by top-performing creators to boost your own video SEO. 100% free, fast, and no signup required.",
	keywords: "youtube tag extractor, free youtube tag extractor, online youtube tag extractor, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-tag-extractor",
	},
	openGraph: {
		title: "Free YouTube Tag Extractor Online – Fast & No Signup | 30tools",
		description: "Extract hidden tags from any YouTube video instantly. Our free online tool helps you discover the keywords used by top-performing creators to boost your own video SEO. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-tag-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Tag Extractor Online – Fast & No Signup | 30tools",
		description: "Extract hidden tags from any YouTube video instantly. Our free online tool helps you discover the keywords used by top-performing creators to boost your own video SEO. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-tag-extractor",
        "name": "YouTube Tag Extractor",
        "description": "Extract hidden tags from any YouTube video instantly. Our free online tool helps you discover the keywords used by top-performing creators to boost your own video SEO.",
        "route": "/youtube-tag-extractor",
        "extraSlugs": [
                "free-youtube-tag-extractor-online",
                "youtube-tag-extractor-tool",
                "title-tag-preview",
                "get-youtube-video-tags"
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
						url: "https://30tools.com/youtube-tag-extractor",
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
