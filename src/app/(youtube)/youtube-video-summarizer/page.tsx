import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free AI YouTube Video Summarizer Online - No Signup | 30tools",
	description: "Get instant AI-powered summaries, key points, and insights from any YouTube video",
	keywords: "ai youtube video summarizer, free online tool, no signup, youtube, ai youtube video summarizer online, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-video-summarizer",
	},
	openGraph: {
		title: "Free AI YouTube Video Summarizer Online - No Signup | 30tools",
		description: "Get instant AI-powered summaries, key points, and insights from any YouTube video",
		url: "https://30tools.com/youtube-video-summarizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AI YouTube Video Summarizer Online - No Signup | 30tools",
		description: "Get instant AI-powered summaries, key points, and insights from any YouTube video",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "youtube-video-summarizer",
		"name": "AI YouTube Video Summarizer",
		"description": "Get instant AI-powered summaries, key points, and insights from any YouTube video",
		"route": "/youtube-video-summarizer",
		"extraSlugs": [
			"summarize-youtube-video-chatgpt-free",
			"youtube-video-to-text-summary"
		],
		"popular": true,
		"category": "youtube"
	};
	const breadcrumbs = [
		{
			name: "Youtube Tools",
			url: "/youtube-tools",
		},
		{
			name: "AI YouTube Video Summarizer",
			url: "/youtube-video-summarizer",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "AI YouTube Video Summarizer",
						description: "Get instant AI-powered summaries, key points, and insights from any YouTube video",
						url: "https://30tools.com/youtube-video-summarizer",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
			>
				<ToolInteractivePlaceholder toolName={tool.name} />
			</ToolLayout>
		</>
	);
}
