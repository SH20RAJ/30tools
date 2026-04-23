import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Comment Picker Online – Fast & No Signup | 30tools",
	description: "Pick a random winner from your YouTube video comments instantly. Our free online Comment Picker is perfect for giveaways, contests, and audience engagement. Fast and fair. 100% free, fast, and no signup required.",
	keywords: "youtube comment picker, free youtube comment picker, online youtube comment picker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-comment-picker",
	},
	openGraph: {
		title: "Free YouTube Comment Picker Online – Fast & No Signup | 30tools",
		description: "Pick a random winner from your YouTube video comments instantly. Our free online Comment Picker is perfect for giveaways, contests, and audience engagement. Fast and fair. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-comment-picker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Comment Picker Online – Fast & No Signup | 30tools",
		description: "Pick a random winner from your YouTube video comments instantly. Our free online Comment Picker is perfect for giveaways, contests, and audience engagement. Fast and fair. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-comment-picker",
        "name": "YouTube Comment Picker",
        "description": "Pick a random winner from your YouTube video comments instantly. Our free online Comment Picker is perfect for giveaways, contests, and audience engagement. Fast and fair.",
        "route": "/youtube-comment-picker",
        "extraSlugs": [
                "color-picker",
                "free-youtube-comment-picker-online",
                "online-color-picker",
                "youtube-comment-picker-tool",
                "youtube-comment-responder",
                "youtube-giveaway-winner-generator"
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
						url: "https://30tools.com/youtube-comment-picker",
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
