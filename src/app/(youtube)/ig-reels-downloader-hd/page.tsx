import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Ig Reels Downloader Hd Online - No Signup | 30tools",
	description:
		"Free Ig Reels Downloader Hd online. Ig Reels Downloader Hd allows you to download YouTube content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"ig reels downloader hd, free online tool, no signup, youtube, ig reels downloader hd online, 30tools",
	alternates: {
		canonical: "https://30tools.com/ig-reels-downloader-hd",
	},
	openGraph: {
		title: "Free Ig Reels Downloader Hd Online - No Signup | 30tools",
		description:
			"Free Ig Reels Downloader Hd online. Ig Reels Downloader Hd allows you to download YouTube content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/ig-reels-downloader-hd",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Ig%20Reels%20Downloader%20Hd%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ig Reels Downloader Hd Online - No Signup | 30tools",
		description:
			"Free Ig Reels Downloader Hd online. Ig Reels Downloader Hd allows you to download YouTube content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Ig%20Reels%20Downloader%20Hd%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "ig-reels-downloader-hd",
		name: "Ig Reels Downloader Hd",
		description:
			"Free Ig Reels Downloader Hd online. Ig Reels Downloader Hd allows you to download YouTube content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/ig-reels-downloader-hd",
		extraSlugs: ["ig-downloader-all", "ig-reels-downloader-hd"],
		category: "youtube",
	};
	const breadcrumbs = [
		{
			name: "Youtube Tools",
			url: "/youtube-tools",
		},
		{
			name: "Ig Reels Downloader Hd",
			url: "/ig-reels-downloader-hd",
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
						name: "Ig Reels Downloader Hd",
						description:
							"Free Ig Reels Downloader Hd online. Ig Reels Downloader Hd allows you to download YouTube content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/ig-reels-downloader-hd",
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
				<DownloaderEngine placeholder="Enter URL to download..." />
			</ToolLayout>
		</>
	);
}
