import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Online Video Downloader - Save Videos from 1000+ Sites",
	description:
		"Best all-in-one video downloader. Save videos from YouTube, TikTok, Instagram, Facebook, and 1000+ other websites in HD MP4/MP3 format. Free, no signup, and no watermarks. 30tools.",
	keywords:
		"download video from url, free online video downloader, save video from any website, all in one video downloader, mp4 downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/online-video-downloader",
	},
	openGraph: {
		title: "Online Video Downloader - Save Any Video Free",
		description:
			"Download videos from 1000+ sites including YouTube, TikTok, and Instagram. High quality MP4 downloads, no signup required.",
		url: "https://30tools.com/online-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Online Video Downloader - 30tools",
		description:
			"Save videos from any website in seconds. All-in-one downloader for YouTube, TikTok, FB & more.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "online-video-downloader",
		name: "Online Video Downloader",
		description:
			"Download videos from any website for free with our online video downloader. Supports YouTube, TikTok, Instagram, Facebook, Twitter and 1000+ sites. HD quality, MP4/MP3 formats, no watermarks.",
		route: "/online-video-downloader",
		extraSlugs: [
			"audio-cutter-online",
			"audio-recorder-online",
			"check-diff-online",
			"check-regex-online",
			"check-wpm-online",
			"combine-photos-online",
			"compress-images-online",
			"compress-mp3-online",
			"compress-video-online",
			"create-zip-file-online",
			"download videos from any website",
			"drawing-board-online",
			"edit-audio-online",
			"edit-video-online",
			"facebook video downloader",
			"find-keywords-online",
			"format-sql-online",
			"free video downloader",
			"generate-hash-online",
			"generate-sitemap-online",
			"instagram video downloader",
			"make-archive-online",
			"online video downloader",
			"online-collage-maker",
			"online-microphone-recorder",
			"online-screen-capture",
			"online-thumbnail-creator",
			"online-video-player-creator",
			"online-whiteboard-free",
			"postman-alternative-online",
			"preview-fonts-online",
			"record-mp3-online",
			"record-screen-online",
			"save-tiktok-video-online",
			"sketch-board-online",
			"snapchat-saver-online",
			"test-regex-online",
			"tiktok video downloader",
			"trim-audio-online",
			"trim-video-online",
			"video downloader online",
			"video-cutter-online",
			"video-grabber-online",
			"video-to-mp3-online",
			"youtube video downloader free",
			"youtube-video-downloader-online",
		],
		popular: true,
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "Online Video Downloader",
			url: "/online-video-downloader",
		},
	];
	const relatedTools = [
		{
			id: "akillitv-video-downloader",
			name: "AkilliTv Video Downloader",
			description:
				"Download AkilliTv videos easily with our free online downloader.",
			route: "/akillitv-video-downloader",
			extraSlugs: [],
			popular: false,
			category: "downloaders",
		},
		{
			id: "bandcamp-video-downloader",
			name: "Bandcamp Video Downloader",
			description: "The easiest way to download Bandcamp videos online.",
			route: "/bandcamp-video-downloader",
			extraSlugs: [],
			popular: false,
			category: "downloaders",
		},
		{
			id: "bilibili-video-downloader",
			name: "Bilibili Video Downloader",
			description: "Download Bilibili videos online with ease.",
			route: "/bilibili-video-downloader",
			extraSlugs: [],
			popular: false,
			category: "downloaders",
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
						name: "Online Video Downloader",
						description:
							"Download videos from any website for free with our online video downloader. Supports YouTube, TikTok, Instagram, Facebook, Twitter and 1000+ sites. HD quality, MP4/MP3 formats, no watermarks.",
						url: "https://30tools.com/online-video-downloader",
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
