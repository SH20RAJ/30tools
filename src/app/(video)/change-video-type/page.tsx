import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Change Video Type Online - No Signup | 30tools",
	description:
		"Free Change Video Type online. Change Video Type allows you to process video files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"change video type, free online tool, no signup, video, change video type online, 30tools",
	alternates: {
		canonical: "https://30tools.com/change-video-type",
	},
	openGraph: {
		title: "Free Change Video Type Online - No Signup | 30tools",
		description:
			"Free Change Video Type online. Change Video Type allows you to process video files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/change-video-type",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Change Video Type Online - No Signup | 30tools",
		description:
			"Free Change Video Type online. Change Video Type allows you to process video files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "change-video-type",
		name: "Change Video Type",
		description:
			"Free Change Video Type online. Change Video Type allows you to process video files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/change-video-type",
		extraSlugs: ["change-video-type"],
		category: "video",
	};
	const breadcrumbs = [
		{
			name: "Video Tools",
			url: "/video-tools",
		},
		{
			name: "Change Video Type",
			url: "/change-video-type",
		},
	];
	const relatedTools = [
		{
			id: "reddit-downloader",
			name: "Reddit Video Downloader",
			description: "Download Reddit videos with audio in HD quality",
			route: "/reddit-downloader",
			extraSlugs: [
				"any-video-downloader",
				"change-video-type",
				"compress-video-for-whatsapp",
				"cut-and-merge-video",
				"cut-video-length",
				"download-fb-video",
				"download-reddit-video",
				"embed-video-player",
				"extract-mp3-from-video",
				"fb-clip-downloader",
				"fb-highlights-downloader",
				"fb-video-downloader",
				"fb-video-saver",
				"ig-downloader-all",
				"ig-reels-downloader-hd",
				"ig-video-downloader",
				"insta-video-saver",
				"instagram-video-downloader",
				"musically-downloader",
				"reddit-hd-video-downloader",
				"reddit-media-saver",
				"reddit-mp4-downloader",
				"reddit-video-saver",
				"reduce-video-size",
				"responsive-video-player",
				"save-reddit-video",
				"save-reddit-video-with-audio-online",
				"save-reels-video",
				"screen-capture-video",
				"shorten-video-clip",
				"sitemap-url-downloader",
				"snap-video-downloader",
				"social-media-downloader",
				"split-video-file",
				"tt-video-downloader",
				"video-player",
				"video-size-reducer",
				"video-tools",
				"video-trimmer",
				"x-video-downloader",
			],
			popular: true,
			category: "video",
		},
		{
			id: "terabox-downloader",
			name: "Terabox Video Downloader",
			description:
				"Download Terabox videos with direct links and embed custom video players",
			route: "/terabox-downloader",
			extraSlugs: [
				"download-terabox-file",
				"download-terabox-videos-without-app",
				"terabox-direct-download",
				"terabox-link-downloader",
				"terabox-player-online",
				"terabox-video-player-online",
				"terabox-video-saver",
			],
			popular: true,
			category: "video",
		},
		{
			id: "insta-story-size-converter",
			name: "Insta Story Size Converter",
			description:
				"Free Insta Story Size Converter online. Insta Story Size Converter allows you to process video files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
			route: "/insta-story-size-converter",
			extraSlugs: [
				"insta-story-saver",
				"insta-story-size-converter",
				"insta-story-viewer",
			],
			category: "video",
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
						name: "Change Video Type",
						description:
							"Free Change Video Type online. Change Video Type allows you to process video files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/change-video-type",
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
				<ToolPlaceholderPage toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
