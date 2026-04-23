import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Channel Finder Online – Fast & No Signup | 30tools",
	description: "Discover YouTube channels by keyword, category, or topic instantly. Our free online Channel Finder helps you research competitors and find inspiration for your next video project. 100% free, fast, and no signup required.",
	keywords: "youtube channel finder, free youtube channel finder, online youtube channel finder, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-finder",
	},
	openGraph: {
		title: "Free YouTube Channel Finder Online – Fast & No Signup | 30tools",
		description: "Discover YouTube channels by keyword, category, or topic instantly. Our free online Channel Finder helps you research competitors and find inspiration for your next video project. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-channel-finder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Finder Online – Fast & No Signup | 30tools",
		description: "Discover YouTube channels by keyword, category, or topic instantly. Our free online Channel Finder helps you research competitors and find inspiration for your next video project. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-channel-finder",
        "name": "YouTube Channel Finder",
        "description": "Discover YouTube channels by keyword, category, or topic instantly. Our free online Channel Finder helps you research competitors and find inspiration for your next video project.",
        "route": "/youtube-channel-finder",
        "extraSlugs": [
                "free-youtube-channel-finder-online",
                "youtube-channel-finder-tool",
                "duplicate-content-finder",
                "hex-color-finder",
                "website-url-finder",
                "dead-link-finder",
                "free-keyword-finder",
                "insta-hashtag-finder",
                "find-youtube-channels-by-keyword"
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
						url: "https://30tools.com/youtube-channel-finder",
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
