import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Channel Statistics Online – Fast & No Signup | 30tools",
	description: "Get detailed insights and statistics for any YouTube channel instantly. View subscriber counts, video totals, and engagement metrics with our free online analytics tool. 100% free, fast, and no signup required.",
	keywords: "youtube channel statistics, free youtube channel statistics, online youtube channel statistics, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-statistics",
	},
	openGraph: {
		title: "Free YouTube Channel Statistics Online – Fast & No Signup | 30tools",
		description: "Get detailed insights and statistics for any YouTube channel instantly. View subscriber counts, video totals, and engagement metrics with our free online analytics tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-channel-statistics",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Statistics Online – Fast & No Signup | 30tools",
		description: "Get detailed insights and statistics for any YouTube channel instantly. View subscriber counts, video totals, and engagement metrics with our free online analytics tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-channel-statistics",
        "name": "YouTube Channel Statistics",
        "description": "Get detailed insights and statistics for any YouTube channel instantly. View subscriber counts, video totals, and engagement metrics with our free online analytics tool.",
        "route": "/youtube-channel-statistics",
        "extraSlugs": [
                "free-youtube-channel-statistics-online",
                "youtube-channel-statistics-tool",
                "check-youtube-channel-analytics-free"
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
						url: "https://30tools.com/youtube-channel-statistics",
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
