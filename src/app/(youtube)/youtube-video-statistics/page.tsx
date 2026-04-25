import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free YouTube Video Statistics Online – Fast & No Signup | 30tools",
	description: "Get detailed metrics and statistics for any YouTube video instantly. Analyze view counts, likes, and engagement rates with our free online video audit tool. 100% free, fast, and no signup required.",
	keywords: "youtube video statistics, free youtube video statistics, online youtube video statistics, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-video-statistics",
	},
	openGraph: {
		title: "Free YouTube Video Statistics Online – Fast & No Signup | 30tools",
		description: "Get detailed metrics and statistics for any YouTube video instantly. Analyze view counts, likes, and engagement rates with our free online video audit tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-video-statistics",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video Statistics Online – Fast & No Signup | 30tools",
		description: "Get detailed metrics and statistics for any YouTube video instantly. Analyze view counts, likes, and engagement rates with our free online video audit tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-video-statistics",
        "name": "YouTube Video Statistics",
        "description": "Get detailed metrics and statistics for any YouTube video instantly. Analyze view counts, likes, and engagement rates with our free online video audit tool.",
        "route": "/youtube-video-statistics",
        "extraSlugs": [
                "free-youtube-video-statistics-online",
                "youtube-video-statistics-tool",
                "check-youtube-video-analytics-free"
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
						url: "https://30tools.com/youtube-video-statistics",
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
