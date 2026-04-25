import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free YouTube Video Count Checker Online – Fast & No Signup | 30tools",
	description: "Get the exact video count for any YouTube channel instantly. Our free online checker provides up-to-date information for competitive research and channel auditing. 100% free, fast, and no signup required.",
	keywords: "youtube video count checker, free youtube video count checker, online youtube video count checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-video-count-checker",
	},
	openGraph: {
		title: "Free YouTube Video Count Checker Online – Fast & No Signup | 30tools",
		description: "Get the exact video count for any YouTube channel instantly. Our free online checker provides up-to-date information for competitive research and channel auditing. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-video-count-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video Count Checker Online – Fast & No Signup | 30tools",
		description: "Get the exact video count for any YouTube channel instantly. Our free online checker provides up-to-date information for competitive research and channel auditing. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-video-count-checker",
        "name": "YouTube Video Count Checker",
        "description": "Get the exact video count for any YouTube channel instantly. Our free online checker provides up-to-date information for competitive research and channel auditing.",
        "route": "/youtube-video-count-checker",
        "extraSlugs": [
                "free-youtube-video-count-checker-online",
                "youtube-video-count-checker-tool",
                "count-words-online",
                "character-count-tool",
                "count-characters-online",
                "tweet-character-count",
                "check-total-youtube-videos"
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
						url: "https://30tools.com/youtube-video-count-checker",
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
