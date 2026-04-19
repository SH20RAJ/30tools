import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolImplementation from "@/components/tools/implementations/ToolImplementation";

export const metadata = {
	title: "Free Youtube Video Title Capitalizer Online - No Signup | 30tools",
	description:
		"Free youtube video title capitalizer tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"youtube video title capitalizer, free online tool, no signup, youtube, youtube video title capitalizer online, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-title-capitalizer",
	},
	openGraph: {
		title: "Free Youtube Video Title Capitalizer Online - No Signup | 30tools",
		description:
			"Free youtube video title capitalizer tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/youtube-title-capitalizer",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Youtube%20Video%20Title%20Capitalizer%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Youtube Video Title Capitalizer Online - No Signup | 30tools",
		description:
			"Free youtube video title capitalizer tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Youtube%20Video%20Title%20Capitalizer%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "youtube-title-capitalizer",
		name: "Youtube Video Title Capitalizer",
		description:
			"Free youtube video title capitalizer tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/youtube-title-capitalizer",
		extraSlugs: [
			"free-youtube-title-capitalizer-online",
			"youtube-title-capitalizer-tool",
		],
		popular: false,
		category: "youtube",
	};
	const breadcrumbs = [
		{
			name: "Youtube Tools",
			url: "/youtube-tools",
		},
		{
			name: "Youtube Video Title Capitalizer",
			url: "/youtube-title-capitalizer",
		},
	];
	const relatedTools = [
		{
			id: "youtube-script-generator",
			name: "AI YouTube Script Generator",
			description: "Generate engaging YouTube video scripts with AI assistance",
			route: "/youtube-script-generator",
			extraSlugs: [
				"ai-youtube-script-writer-for-gaming",
				"download-youtube-transcript",
				"download-youtube-videos-1080p",
				"extract-youtube-subtitles",
				"save-youtube-captions",
				"youtube-analytics",
				"youtube-cover-maker",
				"youtube-gif-maker",
				"youtube-idea-generator",
				"youtube-thumbnail-generator",
				"youtube-trends",
				"youtube-video-script-maker-free",
			],
			popular: false,
			category: "youtube",
		},
		{
			id: "youtube-video-summarizer",
			name: "AI YouTube Video Summarizer",
			description:
				"Get instant AI-powered summaries, key points, and insights from any YouTube video",
			route: "/youtube-video-summarizer",
			extraSlugs: [
				"summarize-youtube-video-chatgpt-free",
				"youtube-video-to-text-summary",
			],
			popular: true,
			category: "youtube",
		},
		{
			id: "youtube-channel-age-checker",
			name: "YouTube Channel Age Checker",
			description:
				"Free youtube channel age checker tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/youtube-channel-age-checker",
			extraSlugs: [
				"compromised-email-checker",
				"diff-checker-online",
				"email-breach-checker",
				"free-youtube-channel-age-checker-online",
				"html-checker",
				"html-error-checker",
				"html-syntax-checker",
				"https-checker",
				"load-time-checker",
				"mobile-seo-checker",
				"plagiarism-checker-seo",
				"readability-score-checker",
				"responsive-design-checker",
				"schema-checker-online",
				"search-volume-checker",
				"seo-competitor-checker",
				"seo-meta-checker",
				"seo-score-checker",
				"ssl-checker",
				"temp-email-checker",
				"whatsapp-checker",
				"youtube-channel-age-checker-tool",
			],
			popular: false,
			category: "youtube",
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
						name: "Youtube Video Title Capitalizer",
						description:
							"Free youtube video title capitalizer tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/youtube-title-capitalizer",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<ToolImplementation toolId="youtube-title-capitalizer" />
			</ToolLayout>
		</>
	);
}
