export const metadata = {
	title: "Free YouTube Tools Online - No Signup | 30tools",
	description:
		"Free YouTube tools for creators and viewers: download videos & Shorts in HD/4K, extract thumbnails, generate transcripts, create scripts with AI, and optimize tags for discoverability. No signup, no watermarks, 100% free.",
	keywords:
		"youtube tools, youtube downloader, youtube shorts downloader, youtube thumbnail downloader, youtube transcript generator, youtube script generator, youtube tag generator, youtube video summarizer, ai youtube tools, content creator tools, youtube to mp3, youtube thumbnail grabber",
	openGraph: {
		title: "Free YouTube Tools Online - No Signup | 30tools",
		description:
			"Download YouTube videos & Shorts, extract thumbnails, generate transcripts and scripts — all free with no signup.",
		url: "https://30tools.com/youtube-tools",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Free YouTube Creator Tools",
			},
		],
		type: "website",
	},
};

const jsonLdSchemas = {
	collectionPage: {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "YouTube Creator Tools",
		description:
			"Suite of free tools for YouTube content creation and downloading.",
		url: "https://30tools.com/youtube-tools",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					url: "https://30tools.com/youtube-downloader",
					name: "YouTube Downloader",
				},
				{
					"@type": "ListItem",
					position: 2,
					url: "https://30tools.com/youtube-shorts-downloader",
					name: "Shorts Downloader",
				},
				{
					"@type": "ListItem",
					position: 3,
					url: "https://30tools.com/youtube-script-generator",
					name: "Script Generator",
				},
				{
					"@type": "ListItem",
					position: 4,
					url: "https://30tools.com/youtube-video-summarizer",
					name: "Video Summarizer",
				},
			],
		},
	},
};

export default function YouTubeLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.collectionPage),
				}}
			/>
			<main className="flex-1">{children}</main>
		</div>
	);
}
