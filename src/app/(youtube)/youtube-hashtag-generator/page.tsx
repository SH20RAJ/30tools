import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free YouTube Hashtag Generator Online – Fast & No Signup | 30tools",
	description: "Generate viral hashtags for your YouTube videos instantly. Our free online tool suggests relevant, search-friendly tags to help you reach more viewers and boost engagement. 100% free, fast, and no signup required.",
	keywords: "youtube hashtag generator, free youtube hashtag generator, online youtube hashtag generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-hashtag-generator",
	},
	openGraph: {
		title: "Free YouTube Hashtag Generator Online – Fast & No Signup | 30tools",
		description: "Generate viral hashtags for your YouTube videos instantly. Our free online tool suggests relevant, search-friendly tags to help you reach more viewers and boost engagement. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-hashtag-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Hashtag Generator Online – Fast & No Signup | 30tools",
		description: "Generate viral hashtags for your YouTube videos instantly. Our free online tool suggests relevant, search-friendly tags to help you reach more viewers and boost engagement. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-hashtag-generator",
        "name": "YouTube Hashtag Generator",
        "description": "Generate viral hashtags for your YouTube videos instantly. Our free online tool suggests relevant, search-friendly tags to help you reach more viewers and boost engagement.",
        "route": "/youtube-hashtag-generator",
        "extraSlugs": [
                "free-youtube-hashtag-generator-online",
                "instagram-hashtag-generator",
                "viral-hashtag-generator",
                "youtube-hashtag-generator-tool",
                "youtube-tag-generator-free"
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
						url: "https://30tools.com/youtube-hashtag-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
