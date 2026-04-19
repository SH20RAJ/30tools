import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Terabox Video Downloader Online - No Signup | 30tools",
	description:
		"Download Terabox videos with direct links and embed custom video players 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"terabox video downloader, free online tool, no signup, video, terabox video downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/terabox-downloader",
	},
	openGraph: {
		title: "Free Terabox Video Downloader Online - No Signup | 30tools",
		description:
			"Download Terabox videos with direct links and embed custom video players 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/terabox-downloader",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Terabox%20Video%20Downloader%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Terabox Video Downloader Online - No Signup | 30tools",
		description:
			"Download Terabox videos with direct links and embed custom video players 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Terabox%20Video%20Downloader%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
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
	};
	const breadcrumbs = [
		{
			name: "Video Tools",
			url: "/video-tools",
		},
		{
			name: "Terabox Video Downloader",
			url: "/terabox-downloader",
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
		{
			id: "facebook-cover-resizer",
			name: "Facebook Cover Resizer",
			description:
				"Free Facebook Cover Resizer online. Facebook Cover Resizer allows you to process video files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
			route: "/facebook-cover-resizer",
			extraSlugs: ["facebook-cover-resizer"],
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
						name: "Terabox Video Downloader",
						description:
							"Download Terabox videos with direct links and embed custom video players",
						url: "https://30tools.com/terabox-downloader",
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
